"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  Shield,
  CreditCard,
  Clock,
  CheckCircle,
} from "lucide-react";
import ImageGallery from "@/components/ImageGallery";
import ProductDescription from "@/components/ProductDescription";
import ProductReviews from "@/components/ProductReviews";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

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

interface FormErrors {
  [key: string]: string;
}

function ProductDetail() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    street: "",
    state: "",
    city: "",
    zipCode: "",
    paymentOption: "",
    paymentMethod: "",
    comments: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const validateStep = (step: number): boolean => {
    const newErrors: FormErrors = {};

    switch (step) {
      case 1:
        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (!formData.email.trim()) {
          newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
          newErrors.email = "Email is invalid";
        }
        if (!formData.phone.trim()) {
          newErrors.phone = "Phone is required";
        } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ""))) {
          newErrors.phone = "Phone number must be 10 digits";
        }
        break;
      case 2:
        if (!formData.street.trim())
          newErrors.street = "Street address is required";
        if (!formData.state.trim()) newErrors.state = "State is required";
        if (!formData.city.trim()) newErrors.city = "City is required";
        if (!formData.zipCode.trim()) {
          newErrors.zipCode = "ZIP code is required";
        } else if (!/^\d{5}(-\d{4})?$/.test(formData.zipCode)) {
          newErrors.zipCode = "Invalid ZIP code";
        }
        break;
      case 3:
        if (!formData.paymentOption)
          newErrors.paymentOption = "Payment option is required";
        if (!formData.paymentMethod)
          newErrors.paymentMethod = "Payment method is required";
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleBack = () => {
    setCurrentStep((prev) => prev - 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep(3)) {
      // Handle form submission
      console.log("Form submitted:", formData);
    }
  };

  const renderProgressBar = () => (
    <div className="mb-8">
      <div className="flex justify-between">
        {[1, 2, 3].map((step) => (
          <div key={step} className="flex flex-col items-center">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                step === currentStep
                  ? "bg-orange-500 text-white"
                  : step < currentStep
                  ? "bg-green-500 text-white"
                  : "bg-gray-200 text-gray-600"
              }`}
            >
              {step < currentStep ? <CheckCircle size={16} /> : step}
            </div>
            <div className="text-xs mt-2">
              {step === 1
                ? "Personal Info"
                : step === 2
                ? "Delivery Details"
                : "Payment"}
            </div>
          </div>
        ))}
      </div>
      <div className="relative mt-2">
        <div className="absolute top-0 h-1 bg-gray-200 w-full"></div>
        <div
          className="absolute top-0 h-1 bg-orange-500 transition-all duration-300"
          style={{ width: `${((currentStep - 1) / 2) * 100}%` }}
        ></div>
      </div>
    </div>
  );

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
          <span className="text-gray-500">
            Roaming Retreat Fully Furnished Tiny House On Wheels
          </span>
        </div>
      </div>
      {/* Main Product Section */}
      <div className="max-w-[1300px] mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images Section */}
          <ImageGallery />

          {/* Product Details Section */}
          <div className="space-y-6">
            <h1 className="text-3xl font-bold">
              Roaming Retreat Fully Furnished Tiny House On Wheels – 1 Bed, 1
              Bath, 399 SQFT
            </h1>

            {/* Price */}
            <div className="text-2xl font-bold">$ 37,000.00</div>

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

            {/* Multi-step Order Form */}
            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Place Order</h3>
              {renderProgressBar()}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Step 1: Personal Information */}
                {currentStep === 1 && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`w-full border rounded-md p-2 ${
                          errors.name ? "border-red-500" : ""
                        }`}
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.name}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full border rounded-md p-2 ${
                          errors.email ? "border-red-500" : ""
                        }`}
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.email}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className={`w-full border rounded-md p-2 ${
                          errors.phone ? "border-red-500" : ""
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>
                )}

                {/* Step 2: Delivery Details */}
                {currentStep === 2 && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Street Address *
                      </label>
                      <input
                        type="text"
                        name="street"
                        value={formData.street}
                        onChange={handleInputChange}
                        className={`w-full border rounded-md p-2 ${
                          errors.street ? "border-red-500" : ""
                        }`}
                      />
                      {errors.street && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.street}
                        </p>
                      )}
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-1">
                          State *
                        </label>
                        <input
                          type="text"
                          name="state"
                          value={formData.state}
                          onChange={handleInputChange}
                          className={`w-full border rounded-md p-2 ${
                            errors.state ? "border-red-500" : ""
                          }`}
                        />
                        {errors.state && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.state}
                          </p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">
                          City *
                        </label>
                        <input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          className={`w-full border rounded-md p-2 ${
                            errors.city ? "border-red-500" : ""
                          }`}
                        />
                        {errors.city && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.city}
                          </p>
                        )}
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        ZIP Code *
                      </label>
                      <input
                        type="text"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleInputChange}
                        className={`w-full border rounded-md p-2 ${
                          errors.zipCode ? "border-red-500" : ""
                        }`}
                      />
                      {errors.zipCode && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.zipCode}
                        </p>
                      )}
                    </div>
                  </div>
                )}

                {/* Step 3: Payment Options */}
                {currentStep === 3 && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Payment Option *
                      </label>
                      <div className="space-y-2">
                        <label className="flex items-center gap-2">
                          <input
                            type="radio"
                            name="paymentOption"
                            value="full"
                            checked={formData.paymentOption === "full"}
                            onChange={handleInputChange}
                          />
                          <span>
                            Full Payment ($15,000 Down Payment & Balance Upon
                            Delivery)
                          </span>
                        </label>
                        <label className="flex items-center gap-2">
                          <input
                            type="radio"
                            name="paymentOption"
                            value="financing"
                            checked={formData.paymentOption === "financing"}
                            onChange={handleInputChange}
                          />
                          <span>
                            Financing ($13,000 Down Payment & $875 Monthly
                            Payment)
                          </span>
                        </label>
                      </div>
                      {errors.paymentOption && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.paymentOption}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Payment Method *
                      </label>
                      <div className="space-y-2">
                        {["Card Payment", "Bank Transfer", "Apple Pay"].map(
                          (method) => (
                            <label
                              key={method}
                              className="flex items-center gap-2"
                            >
                              <input
                                type="radio"
                                name="paymentMethod"
                                value={method.toLowerCase().replace(" ", "_")}
                                checked={
                                  formData.paymentMethod ===
                                  method.toLowerCase().replace(" ", "_")
                                }
                                onChange={handleInputChange}
                              />
                              <span>{method}</span>
                            </label>
                          )
                        )}
                      </div>
                      {errors.paymentMethod && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.paymentMethod}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Comments
                      </label>
                      <textarea
                        name="comments"
                        value={formData.comments}
                        onChange={handleInputChange}
                        className="w-full border rounded-md p-2 h-24"
                      />
                    </div>
                  </div>
                )}

                <div className="flex justify-between pt-6">
                  {currentStep > 1 && (
                    <button
                      type="button"
                      onClick={handleBack}
                      className="px-6 py-2 border rounded-md hover:bg-gray-50"
                    >
                      Back
                    </button>
                  )}
                  {currentStep < 3 ? (
                    <button
                      type="button"
                      onClick={handleNext}
                      className="ml-auto px-6 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600"
                    >
                      Next
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="ml-auto px-6 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600"
                    >
                      Place Order
                    </button>
                  )}
                </div>

                {currentStep === 3 && (
                  <p className="text-sm text-gray-600 mt-4">
                    NOTE: Your order has not been placed yet. Click on the Place
                    Order Button above to place your order.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Product Description Section */}
      <ProductDescription />
      {/* Related Products Section */}
      <div className="max-w-[1300px] mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-8">Related Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Related Product Card 1 */}
          <div className="border rounded-lg overflow-hidden group">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="https://images.dwell.com/photos/6313690802401849344/6319601487229923328/large.jpg"
                alt="Modern Tiny House"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <h3 className="font-medium mb-2 group-hover:text-orange-500">
                Modern Tiny House on Wheels
              </h3>
              <p className="text-gray-600 mb-2">1 Bed, 1 Bath, 280 SQFT</p>
              <p className="font-bold">$32,000.00</p>
            </div>
          </div>

          {/* Related Product Card 2 */}
          <div className="border rounded-lg overflow-hidden group">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="https://tinyhousetalk.com/wp-content/uploads/Breezeway-Tiny-House-on-Wheels-by-Tiny-Heirloom-001.jpg"
                alt="Luxury Tiny House"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <h3 className="font-medium mb-2 group-hover:text-orange-500">
                Luxury Tiny House
              </h3>
              <p className="text-gray-600 mb-2">2 Bed, 1 Bath, 350 SQFT</p>
              <p className="font-bold">$41,000.00</p>
            </div>
          </div>

          {/* Related Product Card 3 */}
          <div className="border rounded-lg overflow-hidden group">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="https://inhabitat.com/wp-content/blogs.dir/1/files/2018/11/Cumberland-Tiny-Home100.jpg"
                alt="Compact Living Solution"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <h3 className="font-medium mb-2 group-hover:text-orange-500">
                Compact Living Solution
              </h3>
              <p className="text-gray-600 mb-2">1 Bed, 1 Bath, 240 SQFT</p>
              <p className="font-bold">$28,500.00</p>
            </div>
          </div>

          {/* Related Product Card 4 */}
          <div className="border rounded-lg overflow-hidden group">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="https://cdn.shopify.com/s/files/1/1561/8759/files/4_Modern_Bohemian_Tiny_House_on_Wheels_by_Summit_Tiny_Homes_1024x1024.png?v=1575315236"
                alt="Eco-Friendly Tiny House"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <h3 className="font-medium mb-2 group-hover:text-orange-500">
                Eco-Friendly Tiny House
              </h3>
              <p className="text-gray-600 mb-2">1 Bed, 1 Bath, 320 SQFT</p>
              <p className="font-bold">$35,000.00</p>
            </div>
          </div>
        </div>
      </div>

      <ProductReviews />
      <Footer />
    </div>
  );
}

export default ProductDetail;
