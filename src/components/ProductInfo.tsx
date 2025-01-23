import React from "react";
import { Shield, CreditCard, Clock } from "lucide-react";
import type { Product } from "@/libs/products";

interface ProductInfoProps {
  product: Product;
}

export default function ProductInfo({ product }: ProductInfoProps) {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">{product.name}</h1>
      <p className="text-gray-600">{product.shortDescription}</p>

      {/* Price */}
      <div className="text-2xl font-bold">
        ${product.price.toLocaleString()}.00
      </div>

      {/* Specifications */}
      <div className="grid grid-cols-3 gap-4 py-4 border-y">
        <div className="text-center">
          <div className="font-semibold">{product.specifications.bedrooms}</div>
          <div className="text-sm text-gray-600">Bedrooms</div>
        </div>
        <div className="text-center">
          <div className="font-semibold">
            {product.specifications.bathrooms}
          </div>
          <div className="text-sm text-gray-600">Bathrooms</div>
        </div>
        <div className="text-center">
          <div className="font-semibold">
            {product.specifications.squareFeet ||
              product.specifications.squareFootage}
          </div>
          <div className="text-sm text-gray-600">Sq Ft</div>
        </div>
      </div>

      {/* Buyer Protection Features */}
      <div className="bg-gray-50 p-4 rounded-lg">
        <h3 className="font-semibold mb-4">Buyer Protection</h3>
        <div className="grid grid-cols-3 gap-4">
          <div className="flex flex-col items-center text-center">
            <Shield className="h-8 w-8 text-orange-500 mb-2" />
            <span className="text-sm">Money Back Guarantee</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <CreditCard className="h-8 w-8 text-orange-500 mb-2" />
            <span className="text-sm">Secure Payment</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <Clock className="h-8 w-8 text-orange-500 mb-2" />
            <span className="text-sm">25 Year Warranty</span>
          </div>
        </div>
      </div>

      {/* Overview */}
      <div>
        <h3 className="font-semibold mb-2">Overview</h3>
        <p className="text-gray-600">{product.overview}</p>
      </div>
    </div>
  );
}
