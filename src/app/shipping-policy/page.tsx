"use client";
import React from "react";
import { Truck, Clock, MapPin, Phone, Shield } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ShippingPolicyPage = () => {
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
              <Truck className="w-16 h-16 text-white mb-6" />
              <h1 className="text-5xl font-bold mb-6 text-center text-white">
                Shipping Policy
              </h1>
              <p className="text-xl text-center text-gray-200 max-w-2xl mx-auto">
                Everything you need to know about our shipping process
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-white rounded-xl p-8 shadow-lg space-y-8">
          <section>
            <div className="flex items-center gap-3 mb-4">
              <MapPin className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold">1. Shipping Costs</h2>
            </div>
            <p className="text-gray-600">
              Shipping costs are calculated based on the size of the Tiny Home,
              shipping method, and delivery location. The total shipping cost
              will be displayed at checkout before you complete your purchase.
            </p>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <Clock className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold">
                2. Transit and Handling Times
              </h2>
            </div>
            <div className="text-gray-600 space-y-2">
              <p>
                <strong>Processing Time:</strong> Orders are typically processed
                within 3-5 business days.
              </p>
              <p>
                <strong>Transit Time:</strong> Delivery times vary based on your
                location and the shipping method selected:
              </p>
              <ul className="list-disc ml-6 space-y-1">
                <li>Local Deliveries: 1-3 business days</li>
                <li>
                  Regional and Long-Distance Deliveries: 5-10 business days
                </li>
              </ul>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <Clock className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold">3. Order Cut-Off Time</h2>
            </div>
            <p className="text-gray-600">
              To ensure timely processing, orders must be placed by 2 PM (your
              local time) for same-day processing. Orders placed after this
              cut-off time will be processed the next business day.
            </p>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <MapPin className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold">4. Change of Address</h2>
            </div>
            <p className="text-gray-600">
              If you need to change your shipping address, please contact us
              within 24 hours of placing your order. Once the order has been
              processed or shipped, we cannot guarantee changes to the delivery
              address.
            </p>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <Clock className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold">5. Cancellations</h2>
            </div>
            <p className="text-gray-600">
              Orders can be canceled within 24 hours of placement. To request a
              cancellation, please contact our customer service team. After 24
              hours, we cannot guarantee a cancellation, as your order may have
              already been processed.
            </p>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold">6. Damaged Goods</h2>
            </div>
            <p className="text-gray-600">
              If your Tiny home arrives damaged, please notify us within 48
              hours of delivery. We will require photos of the damage and a
              description of the issue. We will work with you to resolve the
              situation, which may include a replacement or repair.
            </p>
          </section>

          <section>
            <div className="flex items-center gap-3 mb-4">
              <Phone className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold">7. Contact Us</h2>
            </div>
            <p className="text-gray-600 mb-4">
              For any questions regarding shipping, please reach out to our
              customer service team at:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-600">
                <strong>Email Us:</strong> info@homesonwheelss.com
              </p>
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

export default ShippingPolicyPage;
