import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { products } from "@/libs/products";
import type { Product } from "@/libs/products";

function ProductsSection() {
  // Properly type and convert products object to array
  const productList: Product[] = (Array.isArray(products) 
    ? products 
    : Object.values(products as Record<string, Product>))
    .slice(0, 4);

  return (
    <section className="max-w-[1300px] mx-auto mt-32 mb-12 px-4 lg:px-0">
      <div className="header text-center relative mb-12">
        <div className="line h-0.5 w-full bg-gray-200 absolute bottom-2 -z-1"></div>
        <h2 className="font-bold text-2xl md:text-[30px] bg-white z-10 relative w-fit mx-auto p-4 px-8">
          Latest Products
        </h2>
      </div>

      <div className="products grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {productList.map((product: Product) => (
          <div
            key={product.id}
            className="group bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <Link href={`/shop/${product.id}`}>
              <div className="image cursor-pointer relative aspect-[4/3] overflow-hidden">
                <div className="cover absolute w-full h-full bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-40 grid place-content-center">
                  <div className="text-white text-lg font-semibold translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    View details
                  </div>
                </div>
                <Image
                  src={product.images[0].url}
                  alt={product.images[0].alt}
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg hover:text-blue-600 transition-colors">
                  {product.name}
                </h3>
                <p className="text-[#666] text-lg mt-2">
                  ${product.price.toLocaleString()}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* View More Products Section */}
      <div className="text-center mt-12">
        <Link
          href="/shop"
          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          View More Products
          <ChevronRight size={20} />
        </Link>
      </div>
    </section>
  );
}

export default ProductsSection;