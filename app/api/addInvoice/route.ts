import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
export async function POST(req: Request) {
  const data = await req.json();
  const result = await prisma.invoice.create({
    data: data
  });
  return NextResponse.json(result);
}
