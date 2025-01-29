"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Product } from "@/libs/products"; // Import the Product type
import { products } from "@/libs/products";

// Product Card Component
const ProductCard = ({ product }: { product: Product }) => {
  // Get square footage from either property
  const squareFootage =
    product.specifications.squareFeet ||
    product.specifications.squareFootage ||
    0;

  return (
    <div className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <Link href={`/shop/${product.id}`}>
        <div className="relative h-64 overflow-hidden">
          <Image
            src={product.images[0].url}
            alt={product.images[0].alt}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors">
            {product.name}
          </h3>
          <p className="text-sm text-gray-600 mb-2">
            {product.shortDescription}
          </p>
          <div className="flex items-center justify-between">
            <p className="text-2xl font-bold text-orange-600">
              ${product.price.toLocaleString()}
            </p>
            <div className="text-sm text-gray-600">
              {product.specifications.bedrooms} Bed •{" "}
              {product.specifications.bathrooms} Bath • {squareFootage} sqft
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

// Shop Page Component
function ShopPage() {
  const [sortOption, setSortOption] = useState("default");
  const [sizeFilter, setSizeFilter] = useState("all");

  // Convert products object to array and type it properly
  const productList: Product[] = Array.isArray(products)
    ? products
    : Object.values(products);

  // Filter and sort products
  const filteredAndSortedProducts = productList
    .filter((product: Product) => {
      if (sizeFilter === "all") return true;
      const sqft =
        product.specifications.squareFeet ||
        product.specifications.squareFootage ||
        0;
      if (sizeFilter === "under400") return sqft < 400;
      if (sizeFilter === "over400") return sqft >= 400;
      return true;
    })
    .sort((a: Product, b: Product) => {
      if (sortOption === "priceLowToHigh") return a.price - b.price;
      if (sortOption === "priceHighToLow") return b.price - a.price;
      return 0;
    });

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      {/* Hero Section with Background Image */}
      <div className="relative h-[300px]">
        <div className="absolute inset-0">
          <Image
            src="/images/441887605_972558447604383_85966219333880355_n.jpg"
            alt="Container Home Banner"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        <div className="relative h-full flex items-center">
          <div className="max-w-[1300px] mx-auto px-4 w-full">
            <div className="flex flex-col items-center text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                Tiny Homes
              </h1>
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <Link
                  href="/"
                  className="hover:text-orange-400 transition-colors"
                >
                  Home
                </Link>
                <ChevronRight size={16} />
                <span className="text-orange-400">Shop</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Shop Content */}
      <div className="max-w-[1300px] mx-auto px-4 py-12">
        {/* Filters and Sort */}
        <div className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex flex-wrap gap-4">
            <select
              className="px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-orange-500"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="default">Sort by Price</option>
              <option value="priceLowToHigh">Low to High</option>
              <option value="priceHighToLow">High to Low</option>
            </select>
            <select
              className="px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-orange-500"
              value={sizeFilter}
              onChange={(e) => setSizeFilter(e.target.value)}
            >
              <option value="all">Filter by Size</option>
              <option value="under400">Under 400 sqft</option>
              <option value="over400">400+ sqft</option>
            </select>
          </div>
          <p className="text-gray-600">
            Showing {filteredAndSortedProducts.length} results
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAndSortedProducts.map((product: Product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default ShopPage;
