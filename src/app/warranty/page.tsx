import React from "react";
import {
  Shield,
  CheckCircle,
  AlertCircle,
  Clock,
  FileCheck,
  Settings,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const WarrantyPage = () => {
  const coverageItems = [
    {
      title: "Structural Integrity",
      description:
        "Full coverage for the structural components including walls, roof, and foundation connections.",
    },
    {
      title: "Plumbing Systems",
      description:
        "Complete protection for all installed plumbing fixtures and water systems.",
    },
    {
      title: "Electrical Systems",
      description:
        "Coverage for electrical wiring, outlets, and installed lighting fixtures.",
    },
    {
      title: "Windows & Doors",
      description:
        "Protection against manufacturing defects in all windows and door installations.",
    },
  ];

  const maintenanceItems = [
    {
      title: "Regular Inspections",
      description:
        "Annual professional inspections to maintain warranty validity.",
    },
    {
      title: "Documentation",
      description:
        "Keep records of all maintenance and repairs for warranty claims.",
    },
    {
      title: "Approved Modifications",
      description:
        "Any modifications must be approved to maintain warranty coverage.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0">
          <img
            src="/images/441887605_972558447604383_85966219333880355_n.jpg"
            alt="Tiny Home Quality"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        <div className="relative py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col items-center">
              <Shield className="w-16 h-16 text-white mb-6" />
              <h1 className="text-5xl font-bold mb-6 text-center text-white">
                Our Warranty Protection
              </h1>
              <p className="text-xl text-center text-gray-200 max-w-2xl mx-auto">
                Protecting your investment with industry-leading coverage and
                peace of mind.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Warranty Tiers */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
            <div className="text-center">
              <Clock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">5-Year</h3>
              <p className="text-gray-600">Comprehensive Coverage</p>
              <p className="mt-4 text-sm text-gray-500">
                Full protection for all major systems and structural components
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
            <div className="text-center">
              <Settings className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">10-Year</h3>
              <p className="text-gray-600">Structural Warranty</p>
              <p className="mt-4 text-sm text-gray-500">
                Extended coverage for all structural elements
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
            <div className="text-center">
              <FileCheck className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Limited Lifetime</h3>
              <p className="text-gray-600">Frame Warranty</p>
              <p className="mt-4 text-sm text-gray-500">
                Lifetime protection for the main steel frame structure
              </p>
            </div>
          </div>
        </div>

        {/* Coverage Details */}
        <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 mb-12">
          <h2 className="text-2xl font-bold mb-8 text-center">
            What's Covered
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coverageItems.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Maintenance Requirements */}
        <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 mb-12">
          <h2 className="text-2xl font-bold mb-8 text-center">
            Warranty Maintenance
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {maintenanceItems.map((item, index) => (
              <div key={index} className="text-center">
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Exclusions */}
        <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
          <div className="flex items-start gap-4">
            <AlertCircle className="w-8 h-8 text-red-500 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-2xl font-bold mb-4">Warranty Exclusions</h2>
              <ul className="text-gray-600 space-y-2">
                <li>
                  • Damage from natural disasters or extreme weather events
                </li>
                <li>• Unauthorized modifications or repairs</li>
                <li>• Normal wear and tear</li>
                <li>• Cosmetic changes or deterioration</li>
                <li>• Damage from improper maintenance or neglect</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Need More Information?</h2>
          <p className="text-gray-600 mb-8">
            Download our detailed warranty guide or speak with our warranty
            specialists.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="/contact"
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              Contact Us
            </a>
            <a
              href="/warranty-guide.pdf"
              className="inline-block bg-gray-100 text-gray-800 px-8 py-4 rounded-lg hover:bg-gray-200 transition-colors font-semibold"
            >
              Download Guide
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default WarrantyPage;
