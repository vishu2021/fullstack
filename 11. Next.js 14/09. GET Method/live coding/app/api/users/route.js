import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({ name: "Krishna", age: 20, location: "idk" });
}
