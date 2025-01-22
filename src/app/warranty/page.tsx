"use client";
import React from "react";
import { Shield, CheckCircle, AlertCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const WarrantyPage = () => {
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
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        <div className="relative py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col items-center">
              <Shield className="w-16 h-16 text-white mb-6" />
              <h1 className="text-5xl font-bold mb-6 text-center text-white">
                Warranty
              </h1>
              <p className="text-xl text-center text-gray-200 max-w-2xl mx-auto">
                All of our tiny homes come with an impressive 25-year warranty,
                ensuring your investment is protected for years to come.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Warranty Overview */}
        <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 mb-12">
          <div className="flex items-center justify-center mb-8">
            <div className="flex flex-col items-center text-center p-6 bg-blue-50 rounded-lg">
              <Shield className="w-16 h-16 text-blue-600 mb-4" />
              <h3 className="text-3xl font-bold mb-2">25-Year</h3>
              <p className="text-gray-600">Comprehensive Warranty</p>
            </div>
          </div>
        </div>

        {/* What's Covered */}
        <div className="space-y-12">
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
            <div className="flex items-start gap-4">
              <CheckCircle className="w-8 h-8 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold mb-4">What's Covered</h2>
                <div className="text-gray-600 space-y-4">
                  <p>
                    Our warranty covers any untimely wear and tear due to faults
                    or errors from our technical team. In the unlikely event
                    that you experience severe damage, we offer free repair
                    services and will replace your home at no extra cost.
                  </p>
                  <p>
                    Before each tiny home is delivered, we conduct thorough
                    quality control inspections to ensure that no minor faults
                    slip through the cracks. If any issues arise despite our
                    rigorous checks, you can rest assured that you're covered by
                    our warranty.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-8 h-8 text-red-500 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold mb-4">What's Not Covered</h2>
                <div className="text-gray-600 space-y-4">
                  <p>
                    Please note that our warranty does not cover wear and tear
                    caused by improper management or handling by the owner.
                    Additionally, factors beyond our control, such as weather
                    damage or vandalism, are not included.
                  </p>
                  <p>
                    We encourage all our clients to carry out proper maintenance
                    on their tiny homes to ensure an extended lifespan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Closing Statement */}
        <div className="mt-12 text-center bg-blue-50 rounded-xl p-8">
          <p className="text-xl text-gray-800">
            With our comprehensive warranty, you can enjoy the charm and
            practicality of tiny living, knowing that your home is protected.
          </p>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Have Questions About Our Warranty?
          </h2>
          <p className="text-gray-600 mb-8">
            Our team is ready to assist you with any warranty-related inquiries.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
          >
            Contact Us
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default WarrantyPage;
