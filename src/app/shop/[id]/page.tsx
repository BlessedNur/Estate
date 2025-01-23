// app/products/[id]/page.tsx
"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductDescription from "@/components/ProductDescription";
import ProductReviews from "@/components/ProductReviews";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProductImages from "@/components/ProductImages";
import ProductInfo from "@/components/ProductInfo";
import OrderForm from "@/components/OrderForm";
import { Product } from "@/libs/products";
import { products } from "@/libs/products";

const ProductDetail: React.FC = () => {
  const params = useParams();
  const router = useRouter();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const productId = params.id as string;
    const productData = Object.values(products).find((p) => p.id === productId);

    if (!productData) {
      router.push("/404");
      return;
    }

    setProduct(productData);
    setLoading(false);
  }, [params.id, router]);

  if (loading || !product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-orange-500"></div>
      </div>
    );
  }

  const relatedProductsData = product.relatedProducts
    .map((id) => Object.values(products).find((p) => p.id === id))
    .filter((p): p is Product => p !== undefined);

  // Calculate items per slide based on screen size
  const getItemsPerSlide = () => {
    if (windowWidth >= 1024) return 4; // lg
    if (windowWidth >= 640) return 2; // sm
    return 1; // mobile
  };

  const itemsPerSlide = getItemsPerSlide();
  const totalSlides = Math.ceil(relatedProductsData.length / itemsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  if (loading || !product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-orange-500"></div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      {/* Navigation Breadcrumb */}
      <div className="max-w-[1300px] mx-auto px-4 py-4">
        <div className="flex items-center gap-2 text-sm">
          <Link href="/" className="hover:text-orange-500">
            Home
          </Link>
          <ChevronRight size={12} />
          <Link href="/shop" className="hover:text-orange-500">
            Shop
          </Link>
          <ChevronRight size={12} />
          <span className="text-gray-500">{product.name}</span>
        </div>
      </div>

      {/* Main Product Section */}
      <div className="max-w-[1300px] mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ProductImages images={product.images} />
          <div className="space-y-6">
            <ProductInfo product={product} />
            <OrderForm product={product} />
          </div>
        </div>
      </div>

      <ProductDescription product={product} />
      <ProductReviews />

      <div className="max-w-[1300px] mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-8">Related Products</h2>
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
              }}
            >
              {relatedProductsData.map((relatedProduct) => (
                <div
                  key={relatedProduct.id}
                  className="w-full sm:w-1/2 lg:w-1/4 flex-shrink-0 px-3"
                >
                  <Link
                    href={`/shop/${relatedProduct.id}`}
                    className="block border rounded-lg overflow-hidden group"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={relatedProduct.images[0].url}
                        alt={relatedProduct.images[0].alt}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium mb-2 group-hover:text-orange-500">
                        {relatedProduct.name}
                      </h3>
                      <p className="text-gray-600 mb-2">
                        {relatedProduct.shortDescription}
                      </p>
                      <p className="font-bold">
                        ${relatedProduct.price.toLocaleString()}
                      </p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          {totalSlides > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white shadow-lg rounded-full p-2 hover:bg-gray-100"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white shadow-lg rounded-full p-2 hover:bg-gray-100"
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}

          {/* Dots Indicator */}
          {totalSlides > 1 && (
            <div className="flex justify-center gap-2 mt-4">
              {[...Array(totalSlides)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    currentSlide === index ? "bg-orange-500" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetail;
