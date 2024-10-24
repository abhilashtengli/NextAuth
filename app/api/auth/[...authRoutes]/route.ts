import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { authRoutes: string[] } }
) {
  const { authRoutes } = await params;
  console.log(authRoutes);

  return NextResponse.json({ message: "fvf" });
}
