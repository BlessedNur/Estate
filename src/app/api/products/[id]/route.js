// app/api/products/[id]/route.js
import { NextResponse } from "next/server";
import { products } from "@/libs/products";

export async function GET(request, { params }) {
  const id = params.id;
  const product = products.find((p) => p.id === id);

  if (!product) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }

  return NextResponse.json(product);
}
