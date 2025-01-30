// pages/api/products/[id].js
import { products } from "@/libs/products";

export default function handler(req, res) {
  const { id } = req.query;

  const product = products.find((p) => p.id === id);

  if (!product) {
    return res.status(404).json({ error: "Product not found" });
  }

  return res.status(200).json(product);
}
