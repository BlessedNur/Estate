"use client";
import React from "react";
import { Trash2, ShoppingCart, RefreshCw } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const CartPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Cart Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <ShoppingCart className="w-8 h-8" />
            Cart
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Empty Cart Message */}
        <div className="bg-white p-8 rounded-lg shadow-sm border text-center">
          <div className="flex flex-col items-center justify-center space-y-4">
            <ShoppingCart className="w-16 h-16 text-gray-400" />
            <p className="text-lg text-gray-600">
              Your cart is currently empty.
            </p>
            <Link
              href="/shop"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              Return to shop
            </Link>
          </div>
        </div>

        {/* Cart Content (Hidden by default, shown when items exist) */}
        <div className="hidden">
          <div className="bg-white rounded-lg shadow-sm border">
            {/* Cart Headers */}
            <div className="grid grid-cols-12 gap-4 p-4 border-b text-sm font-semibold text-gray-600">
              <div className="col-span-6">Product</div>
              <div className="col-span-2 text-center">Price</div>
              <div className="col-span-2 text-center">Quantity</div>
              <div className="col-span-2 text-right">Subtotal</div>
            </div>

            {/* Cart Item Example */}
            <div className="grid grid-cols-12 gap-4 p-4 border-b items-center">
              <div className="col-span-6 flex items-center gap-4">
                <img
                  src="/placeholder.jpg"
                  alt="Product"
                  className="w-16 h-16 object-cover rounded"
                />
                <div>
                  <h3 className="font-semibold">Container Home Model A</h3>
                  <button className="text-red-600 text-sm flex items-center gap-1">
                    <Trash2 className="w-4 h-4" />
                    Remove
                  </button>
                </div>
              </div>
              <div className="col-span-2 text-center">$49,999.00</div>
              <div className="col-span-2 text-center">
                <input
                  type="number"
                  min="1"
                  value="1"
                  className="w-16 text-center border rounded p-1"
                />
              </div>
              <div className="col-span-2 text-right font-semibold">
                $49,999.00
              </div>
            </div>

            {/* Cart Actions */}
            <div className="p-4 flex justify-between items-center">
              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder="Coupon code"
                  className="border rounded px-4 py-2"
                />
                <button className="bg-gray-100 text-gray-800 px-4 py-2 rounded hover:bg-gray-200 transition-colors">
                  Apply coupon
                </button>
              </div>
              <button className="flex items-center gap-2 bg-gray-100 text-gray-800 px-4 py-2 rounded hover:bg-gray-200 transition-colors">
                <RefreshCw className="w-4 h-4" />
                Update cart
              </button>
            </div>
          </div>

          {/* Cart Totals */}
          <div className="mt-8 bg-white rounded-lg shadow-sm border p-6 max-w-md ml-auto">
            <h2 className="text-xl font-bold mb-4">Cart totals</h2>
            <div className="space-y-4">
              <div className="flex justify-between border-b pb-4">
                <span>Subtotal</span>
                <span>$49,999.00</span>
              </div>
              <div className="flex justify-between border-b pb-4">
                <span>Shipping</span>
                <span>Calculated at checkout</span>
              </div>
              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>$49,999.00</span>
              </div>
              <Link
                href="/checkout"
                className="block w-full bg-blue-600 text-white text-center px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold mt-4"
              >
                Proceed to checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CartPage;
