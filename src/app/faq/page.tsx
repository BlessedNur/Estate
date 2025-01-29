"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp, Search, HelpCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const FAQPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      category: "General Information",
      questions: [
        {
          question: "What is the average size of your tiny homes?",
          answer:
            "Our tiny homes range in size from 200 square feet to 400 square feet, allowing you to choose the perfect fit for your lifestyle and available space. We offer a variety of floor plans to accommodate different needs and preferences.",
        },
        {
          question: "How long does it take to build and deliver a tiny home?",
          answer:
            "The construction timeline for a custom-built tiny home typically ranges from 8 to 12 weeks, depending on the complexity of the design and any additional customizations. Once your tiny home is complete, we will coordinate the delivery to your desired location, which can take an additional 1-2 weeks.",
        },
        {
          question: "Do your tiny homes come with a warranty?",
          answer:
            "Yes, all of our tiny homes come with a comprehensive 5-year warranty that covers the structure, appliances, and major components. This ensures your investment is protected and gives you peace of mind in your new home.",
        },
        {
          question: "Can I customize the layout and features of my tiny home?",
          answer:
            "Absolutely! One of the major benefits of working with us is our ability to provide a truly customized tiny home experience. Our design team will work closely with you to understand your needs and preferences, and we can modify the floor plan, materials, and features to create your dream tiny home.",
        },
      ],
    },
    {
      category: "Financing & Payment",
      questions: [
        {
          question: "What financing options are available?",
          answer:
            "We offer various financing options through our trusted lending partners. Our team can help guide you through the application process and find the best financing solution for your budget.",
        },
        {
          question: "What is your payment process?",
          answer:
            "We typically require a deposit to begin construction, with progress payments made at key milestones. The final payment is due before delivery. We accept various payment methods including bank transfers and major credit cards.",
        },
      ],
    },
    {
      category: "Delivery & Setup",
      questions: [
        {
          question: "Do you deliver nationwide?",
          answer:
            "Yes, we offer nationwide delivery services. Delivery costs will vary based on your location and specific requirements. We'll provide a detailed quote for delivery during the purchase process.",
        },
        {
          question: "What is required for tiny home setup?",
          answer:
            "Your site should be level and have appropriate utility connections (water, electricity, sewage). We provide detailed site preparation guidelines and can assist with coordinating local contractors if needed.",
        },
      ],
    },
  ];

  const filteredFAQs = faqs
    .map((category) => ({
      ...category,
      questions: category.questions.filter(
        (faq) =>
          faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
          faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    }))
    .filter((category) => category.questions.length > 0);

  const toggleAccordion = (index: any) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      {/* Hero Section with Background Image */}
      <div className="relative">
        <div className="absolute inset-0">
          <img
            src="/images/441887605_972558447604383_85966219333880355_n.jpg"
            alt="Container Home Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        <div className="relative py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-center mb-6">
              <HelpCircle className="w-16 h-16 mr-4 text-white" />
              <h1 className="text-5xl font-bold text-white">
                Frequently Asked Questions
              </h1>
            </div>
            <p className="text-xl text-center text-gray-200 max-w-2xl mx-auto mb-12">
              Find answers to common questions about our tiny homes, services,
              and processes.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <input
                type="text"
                placeholder="Search FAQ..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 rounded-full text-gray-800 bg-white shadow-lg focus:ring-2 focus:ring-blue-300 focus:outline-none pl-14"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Content */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        {filteredFAQs.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">
              {category.category}
            </h2>
            <div className="space-y-4">
              {category.questions.map((faq, index) => {
                const globalIndex = `${categoryIndex}-${index}`;
                const isActive = activeIndex === globalIndex;

                return (
                  <div
                    key={index}
                    className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
                  >
                    <button
                      onClick={() => toggleAccordion(globalIndex)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-semibold text-gray-800">
                        {faq.question}
                      </span>
                      {isActive ? (
                        <ChevronUp className="w-5 h-5 text-blue-600" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-400" />
                      )}
                    </button>
                    <div
                      className={`px-6 transition-all duration-300 ease-in-out ${
                        isActive
                          ? "py-4 border-t border-gray-100"
                          : "max-h-0 overflow-hidden"
                      }`}
                    >
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        {/* Still Have Questions Section */}
        <div className="mt-16 text-center p-8 bg-blue-50 rounded-2xl">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Still Have Questions?
          </h3>
          <p className="text-gray-600 mb-6">
            Can't find what you're looking for? Please contact our support team.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
          >
            Contact Support
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FAQPage;
