import { NextResponse } from "next/server";

export async function GET() {
  // Perform any necessary health checks here
  // For example, you could check database connectivity, external services, etc.

  return NextResponse.json({ status: "UP" }, { status: 200 });
}
