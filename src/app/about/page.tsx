"use client";
import React from "react";
import { Users, Target, Globe, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

const AboutUsPage = () => {
  const features = [
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Nationwide Service",
      description:
        "We deliver and set up homes across the United States, making sustainable living accessible to everyone.",
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Sustainable Living",
      description:
        "Our homes are built with eco-friendly practices, utilizing recycled materials and energy-efficient designs.",
    },
    {
      icon: <Target className="w-12 h-12" />,
      title: "Custom Design",
      description:
        "Each home is thoughtfully designed to match your lifestyle, with flexible layouts and personalized features.",
    },
    {
      icon: <Star className="w-12 h-12" />,
      title: "Quality Assurance",
      description:
        "Every home undergoes rigorous quality checks and meets strict building standards for safety and durability.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0">
          <img
            src="https://containerx-press.com/wp-content/uploads/2024/06/441887605_972558447604383_85966219333880355_n.jpg"
            alt="Modern Tiny Home"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        <div className="relative py-24">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col items-center">
              <h1 className="text-5xl font-bold mb-6 text-center text-white">
                Redefining Mobile Living
              </h1>
              <p className="text-xl text-center text-gray-200 max-w-2xl mx-auto">
                Creating innovative, sustainable tiny homes that combine
                comfort, mobility, and style for modern living.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <p className="text-lg text-gray-600 mb-6">
            Founded in 2020, Homesonwheels emerged from a vision to
            revolutionize mobile living. We saw an opportunity to create homes
            that not only provide freedom and flexibility but also minimize
            environmental impact while maximizing living quality.
          </p>
          <p className="text-lg text-gray-600">
            Today, we're proud to be at the forefront of the tiny home movement,
            crafting spaces that reflect our commitment to sustainability,
            innovation, and exceptional craftsmanship. Each home we build is a
            testament to our belief that living spaces should be both beautiful
            and functional, regardless of their size.
          </p>
        </div>
      </div>

      {/* Features Grid */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            What Sets Us Apart
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-blue-600 flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Sustainability First</h3>
              <p className="text-gray-600">
                We're committed to eco-friendly practices in every aspect of our
                business, from material selection to construction methods.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Innovation</h3>
              <p className="text-gray-600">
                We continuously explore new technologies and design approaches
                to improve our homes and customer experience.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Quality Craftsmanship</h3>
              <p className="text-gray-600">
                Every detail matters. We take pride in building homes that are
                beautiful, durable, and built to last.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Customer Focus</h3>
              <p className="text-gray-600">
                Your satisfaction is our priority. We work closely with each
                client to ensure their vision becomes reality.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
          <p className="text-lg text-gray-600 mb-8">
            Ready to start your tiny home journey? We'd love to hear from you.
          </p>
          <div className="space-y-4">
            <p className="text-gray-600">
              <strong>Address:</strong> Beaumont, Texas
            </p>
            <p className="text-gray-600">
              <strong>Email:</strong> info@homesonwheels.com
            </p>
            <p className="text-gray-600">
              <strong>Phone:</strong> +1 (409) 934-7143
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutUsPage;
