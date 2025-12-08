import { paymentMiddleware } from "x402-next";
import { facilitator } from "@coinbase/x402";
import { NextResponse } from "next/server";

const payTo = process.env.RESOURCE_WALLET_ADDRESS;
const network = process.env.X402_NETWORK || "base-sepolia";

if (!payTo || payTo === "0xYourWalletAddressHere") {
  console.warn(
    "⚠️ RESOURCE_WALLET_ADDRESS not set. X402 payments will not work."
  );
}

const x402Middleware = paymentMiddleware(
  payTo,
  {
    "/secret": {
      price: "$0.01",
      network: network,
      config: {
        description: "Access to The Little Secret",
      },
    },
  },
  facilitator,
  {
    appName: "Patrick Barattin",
    appLogo: "/nittarab_profile.webp",
  }
);

export default async function middleware(request) {
  const pathname = request.nextUrl.pathname;
  console.log(`[Middleware] Request to: ${pathname}`);

  if (pathname === "/secret") {
    console.log(`[Middleware] Applying x402 to /secret`);
    const response = await x402Middleware(request);
    console.log(`[Middleware] x402 response status: ${response.status}`);
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/secret/:path*"],
  runtime: "nodejs",
};
