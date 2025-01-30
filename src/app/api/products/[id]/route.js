import { NextResponse } from "next/server";
import { products } from "@/libs/products";

export async function GET(request, context) {
  try {
    const { params } = context;
    const product = products.find((p) => p.id === params.id);

    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    return NextResponse.json(product);
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
