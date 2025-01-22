"use client";
import React from "react";
import {
  Truck,
  PackageCheck,
  Calendar,
  MapPin,
  ClipboardCheck,
  HeartHandshake,
  AlertCircle,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ShippingPage = () => {
  const shippingSteps = [
    {
      icon: <PackageCheck className="w-8 h-8" />,
      title: "Order Confirmation",
      description:
        "Once an order is placed, you will receive a confirmation email detailing your order, shipping options, and estimated delivery time.",
    },
    {
      icon: <ClipboardCheck className="w-8 h-8" />,
      title: "Preparation for Shipping",
      description:
        "Our team will prepare your container or container home for shipment. This includes inspection, cleaning, and any necessary modifications.",
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Shipping Options",
      description:
        "We offer various shipping methods, including Flatbed Truck Delivery for local or regional deliveries.",
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Scheduling Delivery",
      description:
        "After your container is ready, our logistics team will coordinate a delivery schedule that works for you.",
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Tracking",
      description:
        "You'll receive tracking information to monitor the progress of your shipment.",
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Delivery",
      description:
        "Upon arrival, our delivery team will ensure proper placement of the Tiny Home. Please ensure that the delivery site is accessible.",
    },
    {
      icon: <HeartHandshake className="w-8 h-8" />,
      title: "Post-Delivery Support",
      description:
        "If you have any issues or questions after delivery, our customer support team is here to help.",
    },
  ];

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
                Shipping Process
              </h1>
              <p className="text-xl text-center text-gray-200 max-w-2xl mx-auto">
                Learn about our shipping process for Tiny Homes
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Shipping Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Shipping Process for Homesonwheels
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {shippingSteps.map((step, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-blue-600">{step.icon}</div>
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                </div>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Important Considerations */}
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <div className="flex items-center gap-3 mb-6">
            <AlertCircle className="w-8 h-8 text-blue-600" />
            <h2 className="text-2xl font-bold">Important Considerations</h2>
          </div>
          <div className="space-y-4">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Shipping Costs</h3>
              <p className="text-gray-600">
                Shipping costs vary based on distance, delivery method, and
                container size. You will be informed of these costs during the
                checkout process.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Delivery Time</h3>
              <p className="text-gray-600">
                Delivery times can vary based on location and availability. We
                strive to provide accurate estimates.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">
                Permits and Regulations
              </h3>
              <p className="text-gray-600">
                Customers are responsible for obtaining any necessary permits or
                adhering to local regulations regarding placement and use of
                Tiny Homes.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ShippingPage;
