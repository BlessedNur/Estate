"use client"
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Clock,
  CreditCard,
  HelpCircle,
  Home,
  LucideIcon,
} from "lucide-react";
import React, { useState } from "react";

interface Step {
  number: number;
  title: string;
  progress: string;
}

interface FormData {
  homeType: string;
  timeline: string;
  payment: string;
  name: string;
  email: string;
  phone: string;
  location: string;
}

interface RadioOptionProps {
  icon: LucideIcon;
  title: string;
  description?: string;
  name: string;
  value: string;
  selected: string;
  onChange: (value: string) => void;
}

const QuoteRequestSection: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);

  const steps: Step[] = [
    {
      number: 1,
      title: "Tiny Home Type",
      progress: "25%",
    },
    {
      number: 2,
      title: "Timeline",
      progress: "50%",
    },
    {
      number: 3,
      title: "Payment",
      progress: "75%",
    },
    {
      number: 4,
      title: "Contact Info",
      progress: "100%",
    },
  ];

  const RadioOption: React.FC<RadioOptionProps> = ({
    icon: Icon,
    title,
    description,
    name,
    value,
    selected,
    onChange,
  }) => (
    <label className="relative flex-1 cursor-pointer group">
      <input
        type="radio"
        name={name}
        value={value}
        checked={selected === value}
        onChange={() => onChange(value)}
        className="peer sr-only"
      />
      <div
        className="border-2 rounded-xl p-6 hover:border-blue-600 transition-all duration-300 h-full
      peer-checked:border-blue-600 peer-checked:bg-blue-50"
      >
        <div className="flex items-start gap-4">
          <div className="p-2 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
            <Icon className="w-5 h-5 text-blue-600" />
          </div>
          <div className="flex-1">
            <div className="font-semibold text-lg mb-1">{title}</div>
            {description && (
              <p className="text-gray-600 text-sm">{description}</p>
            )}
          </div>
          <div
            className={`w-5 h-5 border-2 rounded-full flex items-center justify-center
          ${
            selected === value
              ? "border-blue-600 bg-blue-600"
              : "border-gray-300"
          }`}
          >
            <CheckCircle2
              className={`w-4 h-4 text-white ${
                selected === value ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>
        </div>
      </div>
    </label>
  );

  const [formData, setFormData] = useState<FormData>({
    homeType: "",
    timeline: "",
    payment: "",
    name: "",
    email: "",
    phone: "",
    location: "",
  });

  const handleInputChange = (field: keyof FormData, value: string): void => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNext = (): void => {
    if (currentStep < 4) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleBack = (): void => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const renderStepContent = (): React.ReactNode => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold">
                What type of tiny home do you want?
              </h3>
              <button
                type="button"
                className="text-blue-600 hover:text-blue-700"
              >
                <HelpCircle className="w-5 h-5" />
              </button>
            </div>
            <div className="flex gap-4 flex-col md:flex-row">
              <RadioOption
                icon={Home}
                title="Fully Furnished"
                description="Complete with furniture and appliances"
                name="homeType"
                value="furnished"
                selected={formData.homeType}
                onChange={(value) => handleInputChange("homeType", value)}
              />
              <RadioOption
                icon={Home}
                title="Unfurnished"
                description="Basic structure and utilities only"
                name="homeType"
                value="unfurnished"
                selected={formData.homeType}
                onChange={(value) => handleInputChange("homeType", value)}
              />
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-bold">
              When would you like to have the product?
            </h3>
            <div className="flex gap-4 flex-col md:flex-row">
              <RadioOption
                icon={Clock}
                title="Right Away"
                description="Immediate availability"
                name="timeline"
                value="immediate"
                selected={formData.timeline}
                onChange={(value) => handleInputChange("timeline", value)}
              />
              <RadioOption
                icon={Clock}
                title="Within a Month"
                description="Flexible timeline"
                name="timeline"
                value="month"
                selected={formData.timeline}
                onChange={(value) => handleInputChange("timeline", value)}
              />
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Choose your payment option</h3>
            <div className="flex gap-4 flex-col md:flex-row">
              <RadioOption
                icon={CreditCard}
                title="One Time Payment"
                description="Full payment upfront"
                name="payment"
                value="full"
                selected={formData.payment}
                onChange={(value) => handleInputChange("payment", value)}
              />
              <RadioOption
                icon={CreditCard}
                title="Financing"
                description="Monthly payment plans"
                name="payment"
                value="financing"
                selected={formData.payment}
                onChange={(value) => handleInputChange("payment", value)}
              />
            </div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Contact Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  Full Name *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className="w-full p-3 border-2 rounded-lg focus:outline-none focus:border-blue-600 transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  Email Address *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="w-full p-3 border-2 rounded-lg focus:outline-none focus:border-blue-600 transition-colors"
                  placeholder="john@example.com"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  className="w-full p-3 border-2 rounded-lg focus:outline-none focus:border-blue-600 transition-colors"
                  placeholder="(123) 456-7890"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  Location *
                </label>
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) =>
                    handleInputChange("location", e.target.value)
                  }
                  className="w-full p-3 border-2 rounded-lg focus:outline-none focus:border-blue-600 transition-colors"
                  placeholder="City, State, ZIP"
                />
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="max-w-[1300px] mx-auto py-20 px-4 lg:px-8" id="quote">
      <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
              Get Started
            </span>
            <h2 className="text-3xl font-bold mt-4 mb-4">
              Request Your Custom Quote
            </h2>
            <p className="text-gray-600">
              Step {currentStep} of 4 - {steps[currentStep - 1].progress}
            </p>
          </div>

          {/* Progress Steps */}
          <div className="mb-12">
            <div className="flex justify-between items-center mb-4">
              {steps.map((step, index) => (
                <div key={index} className="flex flex-col items-center flex-1">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center mb-2
                  ${
                    index + 1 <= currentStep
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-400"
                  }`}
                  >
                    {step.number}
                  </div>
                  <span
                    className={`text-sm ${
                      index + 1 <= currentStep
                        ? "text-blue-600 font-medium"
                        : "text-gray-400"
                    }`}
                  >
                    {step.title}
                  </span>
                </div>
              ))}
            </div>
            <div className="w-full bg-gray-100 h-2 rounded-full">
              <div
                className="bg-blue-600 h-2 rounded-full transition-all duration-500 ease-in-out"
                style={{ width: steps[currentStep - 1].progress }}
              ></div>
            </div>
          </div>

          <form
            onSubmit={(e: React.FormEvent) => e.preventDefault()}
            className="space-y-8"
          >
            {renderStepContent()}

            <div className="flex justify-between pt-6">
              {currentStep > 1 && (
                <button
                  type="button"
                  onClick={handleBack}
                  className="inline-flex items-center gap-2 border-2 border-blue-600 text-blue-600 px-8 py-3 
                  rounded-lg hover:bg-blue-50 transition-all duration-300 font-semibold"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back
                </button>
              )}
              <button
                type="button"
                onClick={
                  currentStep === 4
                    ? () => console.log("Submit", formData)
                    : handleNext
                }
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg 
                hover:bg-blue-700 transition-all duration-300 font-semibold ml-auto"
              >
                {currentStep === 4 ? "Submit" : "Next Step"}
                {currentStep !== 4 && (
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default QuoteRequestSection;
