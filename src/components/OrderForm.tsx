import { CheckCircle, Loader2, AlertCircle } from "lucide-react";
import { Product } from "@/libs/products";
import { useState } from "react";
import { useRouter } from "next/navigation";

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
  name?: string;
  email?: string;
  phone?: string;
  street?: string;
  state?: string;
  city?: string;
  zipCode?: string;
  paymentOption?: string;
  paymentMethod?: string;
}

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [orderPlaced, setOrderPlaced] = useState(false);

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
        }
        // else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ""))) {
        //   newErrors.phone = "Phone number must be 10 digits";
        // }
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
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const router = useRouter();
  const handleCheckoutRedirect = () => {
    if (validateStep(3)) {
      // Store form data in localStorage
      localStorage.setItem("checkoutFormData", JSON.stringify(formData));
      localStorage.setItem("checkoutProduct", JSON.stringify(product));

      // Redirect to checkout page
      router.push(`/checkout?item_id=${product.id}`);
    }
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      if (currentStep === 3) {
        // If we're on step 3 and validation passes, redirect to checkout
        handleCheckoutRedirect();
      } else {
        // Otherwise proceed to next step as normal
        setCurrentStep((prev) => prev + 1);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

  const handleBack = () => {
    setCurrentStep((prev) => prev - 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!orderPlaced) return;
    if (validateStep(3)) {
      setIsSubmitting(true);
      setSubmitError("");

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
          setIsSuccess(true);
          window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
          setSubmitError(
            data.message || "Something went wrong. Please try again."
          );
        }
      } catch (error) {
        setSubmitError("Failed to submit the form. Please try again.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };
  const handlePlaceOrder = () => {
    setOrderPlaced(true);
    // Trigger form submission
    document.querySelector("form")?.requestSubmit();
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
                : step === 3
                ? "Payment"
                : "Confirmation"}
            </div>
          </div>
        ))}
      </div>
      <div className="relative mt-2">
        <div className="absolute top-0 h-1 bg-gray-200 w-full"></div>
        <div
          className="absolute top-0 h-1 bg-orange-500 transition-all duration-300"
          style={{ width: `${((currentStep - 1) / 3) * 100}%` }}
        ></div>
      </div>
    </div>
  );

  if (isSuccess) {
    return (
      <div className="border rounded-lg p-8 text-center">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
            <CheckCircle className="w-8 h-8 text-green-500" />
          </div>
          <h3 className="text-2xl font-bold text-green-600">
            Order Submitted Successfully!
          </h3>
          <p className="text-gray-600 max-w-md mx-auto">
            Thank you for your order. We have sent a confirmation email to{" "}
            {formData.email}. Our team will contact you shortly with further
            instructions.
          </p>
          <button
            onClick={() => (window.location.href = "/shop")}
            className="mt-6 px-6 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

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
                <p className="text-red-500 text-sm mt-1">{errors.zipCode}</p>
              )}
            </div>
          </div>
        )}

        {/* Step 3: Payment Options */}
        {currentStep === 3 && (
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Select Payment Option</h4>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Payment Options *
                </label>
                <div className="space-y-3">
                  <label className="flex items-start p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
                    <input
                      type="radio"
                      name="paymentOption"
                      value="full"
                      checked={formData.paymentOption === "full"}
                      onChange={handleInputChange}
                      className="mt-1"
                    />
                    <div className="ml-3">
                      <div className="font-medium">Full Payment</div>
                      <div className="text-sm text-gray-500">
                        ${(product.price * 0.3).toLocaleString()} Down Payment
                        (30%)
                        <br />
                        <span className="text-xs">
                          Balance of ${(product.price * 0.7).toLocaleString()}{" "}
                          due upon delivery
                        </span>
                      </div>
                    </div>
                  </label>
                  <label className="flex items-start p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
                    <input
                      type="radio"
                      name="paymentOption"
                      value="financing"
                      checked={formData.paymentOption === "financing"}
                      onChange={handleInputChange}
                      className="mt-1"
                    />
                    <div className="ml-3">
                      <div className="font-medium">Financing</div>
                      <div className="text-sm text-gray-500">
                        ${product.downPayment.financing.toLocaleString()} Down
                        Payment & ${product.monthlyPayment} Monthly Payment
                      </div>
                    </div>
                  </label>
                </div>
                {errors.paymentOption && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.paymentOption}
                  </p>
                )}
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">Payment Method</h4>
                <div className="space-y-3">
                  <label className="flex items-center p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="card"
                      checked={formData.paymentMethod === "card"}
                      onChange={handleInputChange}
                    />
                    <span className="ml-3">Card Payment</span>
                  </label>
                  <label className="flex items-center p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="bank"
                      checked={formData.paymentMethod === "bank"}
                      onChange={handleInputChange}
                    />
                    <span className="ml-3">Bank Transfer</span>
                  </label>
                  <label className="flex items-center p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="wire transfer"
                      checked={formData.paymentMethod === "wire transfer"}
                      onChange={handleInputChange}
                    />
                    <span className="ml-3">Wire Transfer</span>
                  </label>
                </div>
                {errors.paymentMethod && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.paymentMethod}
                  </p>
                )}
              </div>

              {formData.paymentMethod === "card" && (
                <div className="bg-orange-50 border-l-4 border-orange-400 p-4">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <AlertCircle className="h-5 w-5 text-orange-400" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-orange-700">
                        All Card payments are temporarily suspended due to
                        security database update. Please select a different
                        payment option.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <div>
                <label className="block text-sm font-medium mb-1">
                  Comments (Optional)
                </label>
                <textarea
                  name="comments"
                  value={formData.comments}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full border rounded-md p-2"
                  placeholder="Add any special instructions or comments here..."
                />
              </div>
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
          <button
            type="button"
            onClick={handleNext}
            className="px-6 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 ml-auto"
          >
            {currentStep === 3 ? "Proceed to Checkout" : "Next"}
          </button>
        </div>
        {submitError && (
          <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-md text-red-600">
            {submitError}
          </div>
        )}
      </form>
    </div>
  );
}
