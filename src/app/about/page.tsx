"use client";
import React from "react";
import { Users, Target, Globe, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AboutUsPage = () => {
  const teamMembers = [
    {
      name: "Michael Smith",
      position: "Director",
      image: "/team/michael.jpg",
      quote: "I ensure that our employees have a safe working environment",
      description:
        "Michael's extensive business experience and expertise helped build Homesonwheels into the national company and brand it is today. His drive for company growth and people management skills has been key to the expansion.",
    },
    {
      name: "Greg Friday",
      position: "General Manager",
      image: "/team/greg.jpg",
      quote:
        "As a general manager, I consider all of our employees as part of the Homesonwheels family",
      description:
        "Greg keeps the entire company running smoothly by managing our sales, logistics and accounting teams. He has a broad range of skills and experience. His hard work and dedication ensures our continued success.",
    },
    {
      name: "Sarah Holiday",
      position: "Sales Manager",
      image: "/team/sarah.jpg",
      quote:
        "My goal is to ensure that every client gets what they need and get the best customer experience with our company",
      description:
        "Sarah's skills in people management and communication makes her an ideal sales manager. She has contributed a great deal to our company, and continues to do an outstanding job.",
    },
  ];

  const features = [
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Global Reach",
      description:
        "Access to inventory across the world through established relationships with major steamship lines and leasing companies.",
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Expert Team",
      description:
        "Highly trained staff with over 30 years of combined experience in various fields of expertise.",
    },
    {
      icon: <Target className="w-12 h-12" />,
      title: "Local Service",
      description:
        "Providing friendly local service while maintaining national and international reach.",
    },
    {
      icon: <Star className="w-12 h-12" />,
      title: "Custom Solutions",
      description:
        "Specialized in modifying containers to meet creative and unique needs of our customers.",
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
            alt="Container Yard"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        <div className="relative py-24">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col items-center">
              <h1 className="text-5xl font-bold mb-6 text-center text-white">
                About Homesonwheels
              </h1>
              <p className="text-xl text-center text-gray-200 max-w-2xl mx-auto">
                Connecting people and businesses to the world of shipping
                containers with innovative solutions and exceptional service.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg text-gray-600">
            At Homesonwheels, we believe in providing a friendly local service
            to our customers while giving access to shipping containers and
            container homes both nationally and internationally. Our mission is
            to connect people and businesses to the world of new and used
            shipping containers while modifying them to creative and unique
            needs.
          </p>
        </div>
      </div>

      {/* Features Grid */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
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

      {/* Team Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-blue-600 mb-4">{member.position}</p>
                  <p className="text-gray-600 mb-4">{member.description}</p>
                  <blockquote className="italic text-gray-500 border-l-4 border-blue-600 pl-4">
                    "{member.quote}"
                  </blockquote>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
          <p className="text-lg text-gray-600 mb-8">
            Have questions about our services? We'd love to hear from you.
          </p>
          <div className="space-y-4">
            <p className="text-gray-600">
              <strong>Address:</strong> 2852 Christensen Rd, Cheyenne, Wyoming
              82007
            </p>
            <p className="text-gray-600">
              <strong>Email:</strong> info@homesonwheelss.com
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutUsPage;
