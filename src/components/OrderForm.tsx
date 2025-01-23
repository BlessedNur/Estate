// components/OrderForm.tsx
"use client";
import React, { useState } from "react";
import { CheckCircle } from "lucide-react";
import { Product, FormData, FormErrors } from "@/types/product";

interface OrderFormProps {
  product: Product;
}

export default function OrderForm({ product }: OrderFormProps) {
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
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
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
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
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
                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
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
                <p className="text-red-500 text-sm mt-1">{errors.street}</p>
              )}
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">State *</label>
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
                  <p className="text-red-500 text-sm mt-1">{errors.state}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">City *</label>
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
                  <p className="text-red-500 text-sm mt-1">{errors.city}</p>
                )}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">ZIP Code *</label>
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
                <p className="text-red-500 text-sm mt-1">{errors.zipCode}</p>
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
                    Full Payment (${product.downPayment.full.toLocaleString()})
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
                    Financing (${product.downPayment.financing.toLocaleString()}{" "}
                    down + ${product.monthlyPayment}/mo)
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
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="credit"
                    checked={formData.paymentMethod === "credit"}
                    onChange={handleInputChange}
                  />
                  <span>Credit Card</span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="bank"
                    checked={formData.paymentMethod === "bank"}
                    onChange={handleInputChange}
                  />
                  <span>Bank Transfer</span>
                </label>
              </div>
              {errors.paymentMethod && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.paymentMethod}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Additional Comments
              </label>
              <textarea
                name="comments"
                value={formData.comments}
                onChange={handleInputChange}
                rows={4}
                className="w-full border rounded-md p-2"
              />
            </div>
          </div>
        )}

        <div className="flex justify-between pt-4">
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
              className="px-6 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 ml-auto"
            >
              Next
            </button>
          ) : (
            <button
              type="submit"
              className="px-6 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 ml-auto"
            >
              Place Order
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
