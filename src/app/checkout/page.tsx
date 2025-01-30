"use client";
import React, { useEffect, useState, Suspense } from "react";
import Link from "next/link";
import { CheckCircle, ChevronRight, Loader2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Product } from "@/libs/products";
import { useRouter, useSearchParams } from "next/navigation";

// Add interface for form data
interface FormData {
  name: string;
  email: string;
  phone: string;
  street: string;
  state: string;
  city: string;
  zipCode: string;
  paymentOption: string;
  paymentMethod: string;
  comments: string;
}

const CheckoutContent: React.FC = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [product, setProduct] = useState<Product | null>(null);
  const [formData, setFormData] = useState<FormData | null>(null);
  const [loading, setLoading] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [isDirectAccess, setIsDirectAccess] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      try {
        const itemId = searchParams.get("id");

        if (!itemId) {
          throw new Error("No product selected");
        }

        // Try to get form data from localStorage
        const savedFormData = localStorage.getItem("checkoutFormData");
        const savedProduct = localStorage.getItem("checkoutProduct");

        if (savedFormData && savedProduct) {
          // User came from form submission
          setFormData(JSON.parse(savedFormData));
          setProduct(JSON.parse(savedProduct));
          setIsDirectAccess(false);
        } else {
          // Direct access (e.g., from Google Merchant)
          try {
            const response = await fetch(`/api/products/${itemId}`);
            if (!response.ok) {
              throw new Error("Product not found");
            }
            const productData = await response.json();
            setProduct(productData);
            setIsDirectAccess(true); // Set this to true for direct access
          } catch (error) {
            console.error("Error loading product:", error);
            throw error;
          }
        }
      } catch (error) {
        console.error("Error loading data:", error);
        setSubmitError(
          error instanceof Error ? error.message : "Failed to load product"
        );
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [searchParams]);

  // Add this condition early in your render logic
  if (!loading && isDirectAccess && product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="max-w-[1300px] mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="border rounded-lg p-6">
                <h1 className="text-2xl font-bold mb-6">Checkout</h1>
                <div className="space-y-6">
                  {/* Product Information */}
                  <div className="flex items-center gap-4 border-b pb-6">
                    <img
                      src={product.images[0].url}
                      alt={product.name}
                      className="w-24 h-24 object-cover rounded-lg"
                    />
                    <div>
                      <h2 className="font-semibold">{product.name}</h2>
                      <p className="text-gray-600">
                        ${product.price.toLocaleString()}
                      </p>
                    </div>
                  </div>

                  {/* Initial Checkout Form */}
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        className="w-full border rounded-md p-2"
                        placeholder="Enter your email to begin checkout"
                      />
                    </div>
                    <Link
                      href={`/shop/${product.id}`}
                      className="block w-full text-center py-3 bg-orange-500 text-white rounded-md hover:bg-orange-600"
                    >
                      Start Checkout
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="hidden lg:block">
              <div className="border rounded-lg p-6 sticky top-6">
                <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span>Product Price</span>
                    <span>${product.price.toLocaleString()}</span>
                  </div>
                  <div className="pt-4 border-t">
                    <div className="flex justify-between font-bold">
                      <span>Total</span>
                      <span>${product.price.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-orange-500"></div>
      </div>
    );
  }

  if (isSuccess) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center max-w-md mx-auto p-6 border rounded-lg">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-500" />
            </div>
            <h1 className="text-2xl font-bold mb-4">Order Confirmed!</h1>
            <p className="text-gray-600 mb-6">
              Thank you for your order. We have sent a confirmation email to{" "}
              {formData?.email}. Our team will contact you shortly with further
              instructions.
            </p>
            <Link
              href="/shop"
              className="inline-block px-6 py-3 bg-orange-500 text-white rounded-md hover:bg-orange-600"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
        <Footer />
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
            <p className="text-gray-600 mb-6">
              Please select a product before proceeding to checkout.
            </p>
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
  // ... rest of your component logic ...

  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      {/* Keep your breadcrumb navigation the same */}

      <div className="max-w-[1300px] mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="bg-gradient-to-r from-orange-50 to-white border border-orange-200 rounded-lg shadow-sm">
            <div className="px-6 py-5">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <svg
                    className="h-6 w-6 text-orange-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    Important Notice
                  </h3>
                  <p className="text-gray-700">
                    Your order has not been placed yet. Please review your
                    information and click on the
                    <span className="font-medium text-orange-600">
                      {" "}
                      Confirm Order{" "}
                    </span>
                    button below to complete your purchase.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="border rounded-lg p-6 space-y-6">
              <h1 className="text-2xl font-bold">Confirm Purchase</h1>

              {/* Order Summary for Mobile */}
              <div className="lg:hidden border rounded-lg p-4 mb-6">
                <OrderSummary product={product!} formData={formData!} />
              </div>

              {/* Order Details */}
              <div className="space-y-6">
                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold mb-3">Shipping Information</h3>
                  {formData && (
                    <div className="space-y-2 text-sm">
                      <p>
                        <span className="text-gray-500">Name:</span>{" "}
                        {formData.name}
                      </p>
                      <p>
                        <span className="text-gray-500">Email:</span>{" "}
                        {formData.email}
                      </p>
                      <p>
                        <span className="text-gray-500">Phone:</span>{" "}
                        {formData.phone}
                      </p>
                      <p>
                        <span className="text-gray-500">Address:</span>{" "}
                        {formData.street}
                      </p>
                      <p>
                        <span className="text-gray-500">City:</span>{" "}
                        {formData.city}, {formData.state} {formData.zipCode}
                      </p>
                    </div>
                  )}
                </div>
                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold mb-3">Payment Method</h3>
                  {formData && (
                    <div className="space-y-2 text-sm">
                      <p>
                        <span className="text-gray-500">Payment Option:</span>{" "}
                        {formData.paymentOption === "full"
                          ? "Full Payment"
                          : "Financing"}
                      </p>
                      <p>
                        <span className="text-gray-500">Payment Method:</span>{" "}
                        {formData.paymentMethod}
                      </p>
                    </div>
                  )}
                </div>
                {/* Payment Details Form */}{" "}
                <PaymentDetailsForm
                  product={product!}
                  formData={formData!}
                  setIsSuccess={setIsSuccess}
                  setSubmitError={setSubmitError}
                />
              </div>
            </div>
          </div>

          {/* Order Summary Sidebar */}
          <div className="hidden lg:block">
            <div className="border rounded-lg p-6 sticky top-6">
              <h2 className="text-xl font-bold mb-4">Order Summary</h2>
              {product && formData && (
                <OrderSummary product={product} formData={formData} />
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

const CheckoutPage: React.FC = () => {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-orange-500"></div>
        </div>
      }
    >
      <CheckoutContent />
    </Suspense>
  );
};

// Update OrderSummary to include formData
const OrderSummary: React.FC<{ product: Product; formData: FormData }> = ({
  product,
  formData,
}) => {
  const downPayment = product.price * 0.3;
  const balance = product.price * 0.7;
  const monthlyPayment =
    formData.paymentOption === "financing" ? product.monthlyPayment : 0;

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
          <p className="text-sm text-gray-500">
            {formData.paymentOption === "full" ? "Full Payment" : "Financing"}
          </p>
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
          {formData.paymentOption === "financing" && (
            <div className="flex justify-between text-sm text-gray-600">
              <span>Monthly Payment</span>
              <span>${monthlyPayment.toLocaleString()}</span>
            </div>
          )}
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

// New PaymentDetailsForm component

const PaymentDetailsForm: React.FC<{
  product: Product;
  formData: FormData;
  setIsSuccess: (value: boolean) => void;
  setSubmitError: (value: string) => void;
}> = ({ product, formData, setIsSuccess, setSubmitError }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(""); // Clear any previous errors

    try {
      const response = await fetch("/api/send-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          formData,
          product,
        }),
      });

      const data = await response.json();

      if (data.success) {
        // Clear stored data
        localStorage.removeItem("checkoutProduct");
        localStorage.removeItem("checkoutFormData");

        // Show success state
        setIsSuccess(true);
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        setSubmitError(
          data.message || "Something went wrong. Please try again."
        );
      }
    } catch (error) {
      console.error("Payment error:", error);
      setSubmitError("Failed to process payment. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  // Only show card details if payment method is card
  if (formData.paymentMethod !== "card") {
    return (
      <div className="space-y-6">
        <div className="bg-orange-50 border-l-4 border-orange-400 p-4">
          <p className="text-sm text-orange-700">
            Please follow the {formData.paymentMethod} payment instructions that
            will be sent to your email.
          </p>
        </div>
        <button
          type="button"
          onClick={handleSubmit}
          disabled={isSubmitting}
          className={`w-full py-3 rounded-md text-white font-semibold ${
            isSubmitting ? "bg-gray-400" : "bg-orange-500 hover:bg-orange-600"
          }`}
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center gap-2">
              <Loader2 className="w-4 h-4 animate-spin" />
              Processing...
            </span>
          ) : (
            "Confirm Order"
          )}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Card Details</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Card Number
            </label>
            <input
              type="text"
              className="w-full border rounded-md p-2"
              placeholder="1234 5678 9012 3456"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Expiry Date
              </label>
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

      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full py-3 rounded-md text-white font-semibold ${
          isSubmitting ? "bg-gray-400" : "bg-orange-500 hover:bg-orange-600"
        }`}
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center gap-2">
            <Loader2 className="w-4 h-4 animate-spin" />
            Processing...
          </span>
        ) : (
          "Complete Purchase"
        )}
      </button>
    </form>
  );
};

export default CheckoutPage;
