import { paymentProxy, x402ResourceServer } from "@x402/next";
import { HTTPFacilitatorClient } from "@x402/core/server";
import { ExactEvmScheme } from "@x402/evm/exact/server";
import { createPaywall } from "@x402/paywall";
import { evmPaywall } from "@x402/paywall/evm";
import { NextRequest } from "next/server";

const payTo = process.env.RESOURCE_WALLET_ADDRESS;
const networkName = process.env.X402_NETWORK || "base";
const network = networkName === "base-sepolia" ? "eip155:84532" : "eip155:8453";
const baseUrl = process.env.BASE_URL || "";
const facilitatorApiKey = process.env.WEFT_FACILITATOR_API_KEY;
const facilitatorUrl =
  process.env.X402_FACILITATOR_URL ||
  (networkName === "base-sepolia"
    ? "https://x402.staging.weft.network"
    : "https://x402.weft.network");

if (!payTo || payTo === "0xYourWalletAddressHere") {
  console.warn("RESOURCE_WALLET_ADDRESS not set. X402 payments will not work.");
}

if (!facilitatorApiKey) {
  console.warn(
    "WEFT_FACILITATOR_API_KEY not set. Weft can verify payments, but settlement will fail.",
  );
}

function weftAuthHeaders() {
  if (!facilitatorApiKey) {
    return { verify: {}, settle: {}, supported: {} };
  }
  const headers = { "X-API-Key": facilitatorApiKey };
  return { verify: headers, settle: headers, supported: headers };
}

const facilitatorClient = new HTTPFacilitatorClient({
  url: facilitatorUrl,
  createAuthHeaders: async () => weftAuthHeaders(),
});

const server = new x402ResourceServer(facilitatorClient).register(
  network,
  new ExactEvmScheme(),
);

const paywall = createPaywall()
  .withNetwork(evmPaywall)
  .withConfig({
    appName: "Patrick Barattin",
    appLogo: baseUrl
      ? `${baseUrl}/nittarab_profile.webp`
      : "/nittarab_profile.webp",
    testnet: networkName === "base-sepolia",
  })
  .build();

const paid = paymentProxy(
  {
    "/secret": {
      accepts: {
        scheme: "exact",
        price: "$0.05",
        network,
        payTo,
      },
      description: "Access to The Little Secret",
      mimeType: "text/html",
    },
  },
  server,
  {
    appName: "Patrick Barattin",
    appLogo: baseUrl
      ? `${baseUrl}/nittarab_profile.webp`
      : "/nittarab_profile.webp",
    testnet: networkName === "base-sepolia",
  },
  paywall,
);

export default async function proxy(request) {
  if (request.nextUrl.pathname === "/secret" && baseUrl) {
    const publicUrl = new URL(
      request.nextUrl.pathname + request.nextUrl.search,
      baseUrl,
    );
    request = new NextRequest(publicUrl, {
      method: request.method,
      headers: request.headers,
    });
  }

  return paid(request);
}

export const config = {
  matcher: ["/secret/:path*"],
};
