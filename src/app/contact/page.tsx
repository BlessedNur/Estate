"use client";
import React, { useState } from "react";
import { Mail, MapPin, Clock, Phone, Send, ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "sonner";

const ContactPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      setIsSubmitting(true);
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitting(false);
        toast.success("Your message has been sent successfully!");
      } else {
        setIsSubmitting(false);
        toast.error("Failed to send message. Please try again later.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("An error occurred. Please try again.");
    }
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
            <h1 className="text-5xl font-bold mb-6 text-center text-white">
              Get In Touch
            </h1>
            <p className="text-xl text-center text-gray-200 max-w-2xl mx-auto">
              Have questions about our container homes? We're here to help you
              24/7.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Info Cards */}
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:border-orange-500 transition-all">
            <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mb-6">
              <Mail className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Email Us</h3>
            <p className="text-gray-600 mb-4">
              Available 24/7 for your inquiries
            </p>
            <a
              href="mailto:info@homesonwheelss.com"
              className="text-orange-600 hover:text-orange-700 font-semibold flex items-center gap-2"
            >
              info@homesonwheelss.com
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:border-orange-500 transition-all">
            <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mb-6">
              <MapPin className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Visit Us</h3>
            <p className="text-gray-600 mb-4">Our Locations</p>
            <div className="space-y-4">
              <address className="text-gray-600 not-italic">
                <strong>Texas Office:</strong>
                <br />
                6819 Tram Rd, Beaumont, TX 77713, USA{" "}
              </address>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:border-orange-500 transition-all">
            <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center mb-6">
              <Phone className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Contact Numbers</h3>
            <div className="space-y-2">
              <a
                href="sms:14099347143"
                className="text-gray-600 hover:text-orange-600 block"
              >
                <span className="font-semibold">SMS:</span> +1 (409) 934-7143
              </a>

              <p className="text-gray-600">
                <span className="font-semibold">Support:</span> 24/7
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
            <h2 className="text-3xl font-bold mb-8">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              {isSubmitting ? (
                <button
                  disabled
                  type="submit"
                  className="w-full bg-orange-600 text-white py-4 px-6 rounded-lg hover:bg-orange-700 transition-colors flex items-center justify-center gap-2 text-lg font-semibold"
                >
                  {" "}
                  <Send className="w-5 h-5" />
                  Please wait while submitting the form...
                </button>
              ) : (
                <button
                  type="submit"
                  className="w-full bg-orange-600 text-white py-4 px-6 rounded-lg hover:bg-orange-700 transition-colors flex items-center justify-center gap-2 text-lg font-semibold"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              )}
            </form>
          </div>

          {/* Map Section */}
          <div className="space-y-8">
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
              <h2 className="text-3xl font-bold mb-8">Find Us</h2>
              {/* Replace with actual map component */}
              <div className="aspect-video bg-gray-100 rounded-lg mb-6">
                <iframe
                  src="https://www.google.com/maps?q=6819+Tram+Rd,+Beaumont,+TX+77713,+USA&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                  title="Texas Office Location"
                ></iframe>
              </div>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Texas Office</h3>
                    <p className="text-gray-600">
                      6819 Tram Rd, Beaumont, TX 77713, USA
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact */}
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
              <h2 className="text-3xl font-bold mb-8">Quick Contact</h2>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Support</h3>
                    <a
                      href="sms:14099347143"
                      className="text-gray-600 hover:text-orange-600 block"
                    >
                      <span className="font-semibold">SMS:</span> +1 (409)
                      934-7143
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Email Support</h3>
                    <a
                      href="mailto:info@homesonwheelss.com"
                      className="text-orange-600 hover:text-orange-700"
                    >
                      info@homesonwheelss.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
