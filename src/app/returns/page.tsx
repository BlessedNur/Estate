"use client";
import React from "react";
import {
  RefreshCw,
  Clock,
  AlertCircle,
  CheckCircle2,
  Banknote,
} from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const ReturnPolicyPage = () => {
  const policies = [
    {
      title: "7-Day Full Refund",
      icon: <Clock className="w-8 h-8 text-green-600" />,
      description:
        "Cancel within 7 days of order placement for a full deposit refund",
      details: [
        "No questions asked policy",
        "Full refund of deposit paid",
        "Quick processing time",
        "Hassle-free cancellation process",
      ],
    },
    {
      title: "30-Day Partial Refund",
      icon: <Banknote className="w-8 h-8 text-blue-600" />,
      description: "Cancel within 30 days of scheduled delivery for 50% refund",
      details: [
        "50% refund of total purchase price",
        "Customization fees non-refundable",
        "Modification costs deducted",
        "Standard processing time applies",
      ],
    },
    {
      title: "Custom Modifications",
      icon: <RefreshCw className="w-8 h-8 text-purple-600" />,
      description: "Special terms for custom modifications and upgrades",
      details: [
        "50% non-refundable deposit required",
        "Covers materials and labor costs",
        "Remaining 50% due upon delivery",
        "Modifications are non-transferable",
      ],
    },
    {
      title: "7-Day Return Period",
      icon: <CheckCircle2 className="w-8 h-8 text-teal-600" />,
      description: "Return option available within 7 days of delivery",
      details: [
        "Full refund available",
        "Home must be in original condition",
        "Customer responsible for return shipping",
        "Inspection required upon return",
      ],
    },
  ];

  const nonRefundableConditions = [
    "Cancellations within 14 days of scheduled delivery",
    "Custom modification deposits",
    "Transportation costs for returns",
    "Repair costs for damaged returns",
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      {/* Hero Section with Background Image */}
      <div className="relative">
        <div className="absolute inset-0">
          <img
            src="https://containerx-press.com/wp-content/uploads/2024/06/441887605_972558447604383_85966219333880355_n.jpg"
            alt="Container Home Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-6 text-white">
                Refund & Return Policy
              </h1>
              <p className="text-xl text-gray-100 max-w-2xl mx-auto">
                We're committed to providing exceptional quality and service.
                Learn about our comprehensive refund and return policies.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Policy Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {policies.map((policy, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm p-8 border border-gray-100"
            >
              <div className="flex items-center mb-6">
                {policy.icon}
                <h2 className="text-2xl font-bold ml-4 text-gray-800">
                  {policy.title}
                </h2>
              </div>
              <p className="text-gray-600 mb-6">{policy.description}</p>
              <ul className="space-y-3">
                {policy.details.map((detail, idx) => (
                  <li key={idx} className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Non-refundable Section */}
        <div className="bg-red-50 rounded-xl p-8 mb-16">
          <div className="flex items-center mb-6">
            <AlertCircle className="w-8 h-8 text-red-600" />
            <h2 className="text-2xl font-bold ml-4 text-gray-800">
              Non-Refundable Conditions
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {nonRefundableConditions.map((condition, index) => (
              <div key={index} className="flex items-center">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                <p className="text-gray-600">{condition}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-white rounded-xl shadow-sm p-8 text-center">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            Questions About Our Policy?
          </h2>
          <p className="text-gray-600 mb-6">
            Our customer service team is here to help you understand our refund
            and return policies.
          </p>
          <div className="space-x-4">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold"
            >
              Contact Support
            </a>
            <a
              href="/faq"
              className="inline-flex items-center justify-center px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors font-semibold"
            >
              View FAQ
            </a>
          </div>
        </div>
      </div>

      {/* Fine Print */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <p className="text-sm text-gray-500 text-center">
          This policy was last updated on January 22, 2025. Terms and conditions
          may be subject to change.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default ReturnPolicyPage;
