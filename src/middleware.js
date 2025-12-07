import { paymentMiddleware } from "x402-next";
import { facilitator } from "@coinbase/x402";
import { NextRequest, NextResponse } from "next/server";

const payTo = process.env.RESOURCE_WALLET_ADDRESS;
const network = process.env.X402_NETWORK || "base-sepolia";
const baseUrl = process.env.BASE_URL || "";

if (!payTo || payTo === "0xYourWalletAddressHere") {
  console.warn(
    "⚠️ RESOURCE_WALLET_ADDRESS not set. X402 payments will not work."
  );
}

// Determine the public URL for a request
// In production (when BASE_URL is set), use the configured base URL
// In development, use the request's own URL
function getPublicUrl(request) {
  if (baseUrl) {
    return new URL(request.nextUrl.pathname + request.nextUrl.search, baseUrl);
  }
  // In dev, return null to use the original request
  return null;
}

const x402Middleware = paymentMiddleware(
  payTo,
  {
    "/secret": {
      price: "$0.01",
      network: network,
      config: {
        description: "Access to The Little Secret",
        // Only set explicit resource in production
        ...(baseUrl && { resource: `${baseUrl}/secret` }),
      },
    },
  },
  facilitator,
  {
    appName: "Patrick Barattin",
    appLogo: baseUrl
      ? `${baseUrl}/nittarab_profile.webp`
      : "/nittarab_profile.webp",
  }
);

export default async function middleware(request) {
  const pathname = request.nextUrl.pathname;
  console.log(`[Middleware] Request to: ${pathname}`);

  if (pathname === "/secret") {
    console.log(`[Middleware] Applying x402 to /secret`);

    // In production, create a proxy request with the correct public URL
    // This ensures x402 paywall uses the correct URL for the client-side fetch
    const publicUrl = getPublicUrl(request);

    let targetRequest = request;
    if (publicUrl) {
      console.log(`[Middleware] Using public URL: ${publicUrl.toString()}`);
      targetRequest = new NextRequest(publicUrl, {
        method: request.method,
        headers: request.headers,
        body: request.body,
      });
    }

    const response = await x402Middleware(targetRequest);
    console.log(`[Middleware] x402 response status: ${response.status}`);
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/secret/:path*"],
  runtime: "nodejs",
};
