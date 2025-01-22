"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Product Card Component
const ProductCard = ({ product }: { product: any }) => {
  return (
    <div className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <Link href={`/shop/2`}>
        <div className="relative h-64 overflow-hidden">
          <Image
            src={
              "https://images.dwell.com/photos/6313690802401849344/6319601487229923328/large.jpg"
            }
            alt={product.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors">
            {product.title}
          </h3>
          <div className="flex items-center justify-between">
            <p className="text-2xl font-bold text-orange-600">
              ${product.price.toLocaleString()}
            </p>
            <div className="text-sm text-gray-600">
              {product.beds} Bed • {product.baths} Bath • {product.sqft} sqft
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

// Shop Page Component
function ShopPage() {
  // Sample product data - replace with your actual data
  const products = [
    {
      id: 1,
      slug: "roaming-retreat",
      title: "Roaming Retreat Fully Furnished Tiny House",
      price: 37000,
      beds: 1,
      baths: 1,
      sqft: 399,
      image: "/images/tiny-home-1.jpg",
    },
    // Add more products...
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      {/* Hero Section with Background Image */}
      <div className="relative">
        <div className="absolute inset-0">
          <img
            src="https://containerx-press.com/wp-content/uploads/2024/06/441887605_972558447604383_85966219333880355_n.jpg"
            alt="Container Home Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        <div className="relative py-16">
          <div className="max-w-[1300px] mx-auto px-4">
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
        {/* Filters and Sort - Optional */}
        <div className="mb-8 flex justify-between items-center">
          <div className="flex gap-4">
            <select className="px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-orange-500">
              <option>Sort by Price</option>
              <option>Low to High</option>
              <option>High to Low</option>
            </select>
            <select className="px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-orange-500">
              <option>Filter by Size</option>
              <option>Under 400 sqft</option>
              <option>400+ sqft</option>
            </select>
          </div>
          <p className="text-gray-600">Showing {products.length} results</p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ShopPage;
