"use client";
import React from "react";
import { FileText, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TermsAndConditionsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0">
          <img
            src="https://containerx-press.com/wp-content/uploads/2023/11/containers2.jpeg"
            alt="Container Homes"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        <div className="relative py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col items-center">
              <FileText className="w-16 h-16 text-white mb-6" />
              <h1 className="text-5xl font-bold mb-6 text-center text-white">
                Terms & Conditions
              </h1>
              <p className="text-xl text-center text-gray-200 max-w-2xl mx-auto">
                Please read these terms and conditions carefully before using
                our services.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-white rounded-xl p-8 shadow-lg space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
            <p className="text-gray-600">
              Welcome to Homesonwheels. By accessing our website and purchasing
              our products, you agree to comply with and be bound by the
              following terms and conditions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">2. Definitions</h2>
            <ul className="text-gray-600 space-y-2">
              <li>"Company" refers to Homesonwheels.</li>
              <li>
                "Customer" refers to any individual or entity purchasing
                products from the Company.
              </li>
              <li>
                "Products" refers to shipping containers and container homes
                offered for sale.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">3. Orders</h2>
            <ul className="text-gray-600 space-y-2">
              <li>All orders are subject to acceptance by the Company.</li>
              <li>
                Prices are subject to change without notice. The price confirmed
                at the time of order will be honored.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">4. Payment</h2>
            <p className="text-gray-600">
              Payment must be made in full at the time of purchase. We accept
              various forms of payment, which will be detailed during the
              checkout process.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              5. Shipping and Delivery
            </h2>
            <ul className="text-gray-600 space-y-2">
              <li>
                Shipping costs and delivery times will be provided at checkout.
              </li>
              <li>
                The Company is not responsible for delays caused by third-party
                shipping carriers.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">6. Returns and Refunds</h2>
            <ul className="text-gray-600 space-y-2">
              <li>
                Our return policy allows for returns within [insert return
                period, e.g., 30 days] if the product is in original condition.
              </li>
              <li>Customized or modified orders are non-refundable.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">7. Warranty</h2>
            <p className="text-gray-600">
              Our products come with a [insert warranty period, e.g., one-year]
              warranty against defects in materials and workmanship.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              8. Limitation of Liability
            </h2>
            <p className="text-gray-600">
              Homesonwheels is not liable for any indirect, incidental, or
              consequential damages arising from the use of our products.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">9. Governing Law</h2>
            <p className="text-gray-600">
              These terms and conditions shall be governed by and construed in
              accordance with the laws of [insert your jurisdiction].
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">10. Changes to Terms</h2>
            <p className="text-gray-600">
              The Company reserves the right to modify these terms and
              conditions at any time. Continued use of the website constitutes
              acceptance of any changes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">11. Contact Information</h2>
            <p className="text-gray-600 mb-4">
              For any questions regarding these terms and conditions, please
              contact us at:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-600 font-semibold">Homesonwheels</p>
              <p className="text-gray-600">info@homesonwheelss.com</p>
            </div>
          </section>
        </div>

        {/* Last Updated */}
        <div className="mt-8 text-center text-gray-500">
          Last updated: January 2025
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsAndConditionsPage;
