"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Product } from "@/libs/products";

const CheckoutPage: React.FC = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  // You'll need to implement this to get the product from localStorage or state management
  useEffect(() => {
    // Simulate loading the product data
    // In a real app, you would get this from your cart/state management
    const loadProduct = async () => {
      try {
        // Get product from localStorage or state management
        const savedProduct = localStorage.getItem('checkoutProduct');
        if (savedProduct) {
          setProduct(JSON.parse(savedProduct));
        }
      } catch (error) {
        console.error('Error loading product:', error);
      } finally {
        setLoading(false);
      }
    };

    loadProduct();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-orange-500"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">No Product Selected</h1>
            <p className="text-gray-600 mb-6">Please select a product before proceeding to checkout.</p>
            <Link 
              href="/shop" 
              className="inline-block px-6 py-3 bg-orange-500 text-white rounded-md hover:bg-orange-600"
            >
              Return to Shop
            </Link>
          </div>
        </div>
        <Footer />
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
          <Link href={`/products/${product.id}`} className="hover:text-orange-500">
            {product.name}
          </Link>
          <ChevronRight size={12} />
          <span className="text-gray-500">Checkout</span>
        </div>
      </div>

      {/* Main Checkout Section */}
      <div className="max-w-[1300px] mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout Form Section */}
          <div className="lg:col-span-2">
            <div className="border rounded-lg p-6 space-y-6">
              <h1 className="text-2xl font-bold">Checkout</h1>
              
              {/* Order Summary for Mobile */}
              <div className="lg:hidden border rounded-lg p-4 mb-6">
                <OrderSummary product={product} />
              </div>

              {/* Checkout Form */}
              <CheckoutForm product={product} />
            </div>
          </div>

          {/* Order Summary Sidebar */}
          <div className="hidden lg:block">
            <div className="border rounded-lg p-6 sticky top-6">
              <h2 className="text-xl font-bold mb-4">Order Summary</h2>
              <OrderSummary product={product} />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

// Order Summary Component
const OrderSummary: React.FC<{ product: Product }> = ({ product }) => {
  const downPayment = product.price * 0.3;
  const balance = product.price * 0.7;

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <div className="relative w-20 h-20 rounded-lg overflow-hidden">
          <img
            src={product.images[0].url}
            alt={product.name}
            className="object-cover w-full h-full"
          />
        </div>
        <div>
          <h3 className="font-medium">{product.name}</h3>
          <p className="text-sm text-gray-500">{product.shortDescription}</p>
        </div>
      </div>

      <div className="border-t pt-4">
        <div className="space-y-2">
          <div className="flex justify-between">
            <span>Product Price</span>
            <span>${product.price.toLocaleString()}</span>
          </div>
          <div className="flex justify-between text-sm text-gray-600">
            <span>Down Payment (30%)</span>
            <span>${downPayment.toLocaleString()}</span>
          </div>
          <div className="flex justify-between text-sm text-gray-600">
            <span>Balance Due</span>
            <span>${balance.toLocaleString()}</span>
          </div>
        </div>
      </div>

      <div className="border-t pt-4">
        <div className="flex justify-between font-bold">
          <span>Total Due Now</span>
          <span>${downPayment.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
};

// Checkout Form Component
const CheckoutForm: React.FC<{ product: Product }> = ({ product }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Add your form submission logic here
    setTimeout(() => {
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Payment Information */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Payment Information</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Card Number</label>
            <input
              type="text"
              className="w-full border rounded-md p-2"
              placeholder="1234 5678 9012 3456"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Expiry Date</label>
              <input
                type="text"
                className="w-full border rounded-md p-2"
                placeholder="MM/YY"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">CVV</label>
              <input
                type="text"
                className="w-full border rounded-md p-2"
                placeholder="123"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Billing Address */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Billing Address</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Full Name</label>
            <input
              type="text"
              className="w-full border rounded-md p-2"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Street Address</label>
            <input
              type="text"
              className="w-full border rounded-md p-2"
              placeholder="123 Main St"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">City</label>
              <input
                type="text"
                className="w-full border rounded-md p-2"
                placeholder="City"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">State</label>
              <input
                type="text"
                className="w-full border rounded-md p-2"
                placeholder="State"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">ZIP Code</label>
            <input
              type="text"
              className="w-full border rounded-md p-2"
              placeholder="12345"
            />
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full py-3 rounded-md text-white font-semibold ${
          isSubmitting ? 'bg-gray-400' : 'bg-orange-500 hover:bg-orange-600'
        }`}
      >
        {isSubmitting ? 'Processing...' : 'Complete Purchase'}
      </button>
    </form>
  );
};

export default CheckoutPage;
