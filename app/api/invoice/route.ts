import { prisma } from "@/lib/prisma";
import { InvoiceContext } from "@/lib/store/invoice-context";
import { NextResponse } from "next/server";
export async function GET() {
  try {
    const invoices = await prisma.invoice.findMany();
    return NextResponse.json(invoices);
  } catch (error) {
    console.error("Error fetching invoices:", error);
    throw new Error("Failed to fetch data");
  }
}
