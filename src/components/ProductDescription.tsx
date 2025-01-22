import React, { useState } from "react";

const ProductDescription = () => {
  const [activeTab, setActiveTab] = useState<string>("description");

  const tabContent: { [key: string]: any } = {
    description: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">Construction Features</h3>
          <ul className="space-y-3 text-gray-600">
            <li>• Vaulted Ceiling Throughout</li>
            <li>• 2×4 Exterior Walls</li>
            <li>• 2×6 Floor Joists (16" on center)</li>
            <li>• 30# Roof Load Capacity</li>
            <li>• R-22 Ceiling Insulation</li>
            <li>• R-13 Wall Insulation</li>
            <li>• R-11 Floor Insulation</li>
            <li>• 5/8" Tongue and Groove Floor Decking</li>
            <li>• 7-Year Limited Warranty on Flooring</li>
          </ul>

          <h3 className="text-xl font-bold mb-4 mt-8">Exterior Features</h3>
          <ul className="space-y-3 text-gray-600">
            <li>• Sliding Glass Entry Door</li>
            <li>• Deluxe Porch Light</li>
            <li>• Class A Shingles</li>
            <li>• Cemplank Vertical Siding</li>
            <li>• Low "E" Dual Glaze Windows</li>
            <li>• 4" Cemplank Window Trim</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Interior Features</h3>
          <ul className="space-y-3 text-gray-600">
            <li>• Taped and Textured Walls</li>
            <li>• Rounded Corners</li>
            <li>• 2-1/4" Door Case Molding</li>
            <li>• 3" Baseboard Molding</li>
            <li>• 2" Faux Wood Blinds</li>
            <li>• 16 oz Shaw Carpet</li>
            <li>• Mirrored Closet Doors</li>
            <li>• Built-in Storage Solutions</li>
          </ul>

          <h3 className="text-xl font-bold mb-4 mt-8">Utility & Safety</h3>
          <ul className="space-y-3 text-gray-600">
            <li>• Gas Forced Air Furnace</li>
            <li>• 50 AMP Service</li>
            <li>• 20-Gallon Electric Water Heater</li>
            <li>• GFI Exterior Receptacles</li>
            <li>• Carbon Monoxide Detector</li>
            <li>• Smoke Detectors</li>
            <li>• Fire Extinguisher</li>
          </ul>
        </div>

        <div className="md:col-span-2 prose max-w-none mt-6">
          <h3 className="text-xl font-bold mb-4">Overview</h3>
          <p className="text-gray-600 leading-relaxed">
            This meticulously designed tiny home combines modern amenities with
            high-quality construction, perfect for those looking to downsize
            without sacrificing comfort. The thoughtful design incorporates a
            vaulted ceiling throughout, creating an open and airy feel while
            maintaining structural integrity with premium construction materials
            and methods.
          </p>
        </div>
      </div>
    ),
    additionalInfo: (
      <div className="space-y-6">
        <h3 className="text-xl font-bold mb-6">Kitchen Specifications</h3>
        <table className="w-full border-collapse mb-8">
          <tbody>
            <tr className="border-b">
              <td className="py-4 w-1/3 font-medium">Appliances</td>
              <td className="py-4 text-gray-600">
                Deluxe gas range, 18 cu. ft. frost-free refrigerator
              </td>
            </tr>
            <tr className="border-b">
              <td className="py-4 w-1/3 font-medium">Ventilation</td>
              <td className="py-4 text-gray-600">
                30" vented range hood with light
              </td>
            </tr>
            <tr className="border-b">
              <td className="py-4 w-1/3 font-medium">Storage</td>
              <td className="py-4 text-gray-600">
                Bank of drawers, lined overhead cabinets
              </td>
            </tr>
            <tr className="border-b">
              <td className="py-4 w-1/3 font-medium">Countertops</td>
              <td className="py-4 text-gray-600">
                Granite with single eased edge, 4" granite backsplash
              </td>
            </tr>
            <tr className="border-b">
              <td className="py-4 w-1/3 font-medium">Fixtures</td>
              <td className="py-4 text-gray-600">
                Brushed nickel faucet, stainless steel sink
              </td>
            </tr>
          </tbody>
        </table>

        <h3 className="text-xl font-bold mb-6">Bathroom Specifications</h3>
        <table className="w-full border-collapse">
          <tbody>
            <tr className="border-b">
              <td className="py-4 w-1/3 font-medium">Shower Options</td>
              <td className="py-4 text-gray-600">
                36" or 48" shower with glass enclosure
              </td>
            </tr>
            <tr className="border-b">
              <td className="py-4 w-1/3 font-medium">Fixtures</td>
              <td className="py-4 text-gray-600">
                Brushed nickel faucets and hardware
              </td>
            </tr>
            <tr className="border-b">
              <td className="py-4 w-1/3 font-medium">Features</td>
              <td className="py-4 text-gray-600">
                Granite backsplash, modern fixtures
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    ),
  };

  return (
    <div className="max-w-[1300px] mx-auto px-4 py-12">
      <div className="border rounded-lg">
        {/* Description Tabs */}
        <div className="border-b">
          <div className="flex">
            <button
              onClick={() => setActiveTab("description")}
              className={`px-6 py-4 font-medium transition-colors ${
                activeTab === "description"
                  ? "text-orange-500 border-b-2 border-orange-500"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Description
            </button>
            <button
              onClick={() => setActiveTab("additionalInfo")}
              className={`px-6 py-4 font-medium transition-colors ${
                activeTab === "additionalInfo"
                  ? "text-orange-500 border-b-2 border-orange-500"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Additional Information
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="p-6 space-y-6">{tabContent[activeTab]}</div>
      </div>
    </div>
  );
};

export default ProductDescription;
