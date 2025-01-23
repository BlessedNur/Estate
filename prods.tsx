interface ProductImage {
  id: string;
  url: string;
  alt: string;
}

interface Specification {
  category: string;
  items: {
    label: string;
    value: string;
  }[];
}

interface Feature {
  category: string;
  items: string[];
}

interface Product {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  price: number;
  downPayment: {
    full: number;
    financing: number;
  };
  monthlyPayment: number;
  specifications: {
    bedrooms: number;
    bathrooms: number;
    squareFeet: number;
  };
  images: ProductImage[];
  features: {
    construction: Feature;
    exterior: Feature;
    interior: Feature;
    utility: Feature;
  };
  kitchenSpecs: Specification[];
  bathroomSpecs: Specification[];
  overview: string;
  relatedProducts: string[]; // Array of product IDs
}

// Example of a single product:
const productExample: Product = {
  id: "th-001",
  slug: "roaming-retreat-tiny-house",
  name: "Roaming Retreat Fully Furnished Tiny House On Wheels",
  shortDescription: "1 Bed, 1 Bath, 399 SQFT",
  price: 37000,
  downPayment: {
    full: 15000,
    financing: 13000,
  },
  monthlyPayment: 875,
  specifications: {
    bedrooms: 1,
    bathrooms: 1,
    squareFeet: 399,
  },
  images: [
    {
      id: "img-001",
      url: "https://images.dwell.com/photos/6313690802401849344/6319601487229923328/large.jpg",
      alt: "Luxury Tiny Home",
    },
    {
      id: "img-002",
      url: "https://cdn.shopify.com/s/files/1/1561/8759/files/4_Modern_Bohemian_Tiny_House_on_Wheels_by_Summit_Tiny_Homes_1024x1024.png?v=1575315236",
      alt: "Modern Bohemian Tiny House",
    },
    {
      id: "img-003",
      url: "https://tinyhousetalk.com/wp-content/uploads/Breezeway-Tiny-House-on-Wheels-by-Tiny-Heirloom-001.jpg",
      alt: "Breezeway Tiny House",
    },
    {
      id: "img-004",
      url: "https://inhabitat.com/wp-content/blogs.dir/1/files/2018/11/Cumberland-Tiny-Home100.jpg",
      alt: "Cumberland Tiny Home",
    },
  ],
  features: {
    construction: {
      category: "Construction Features",
      items: [
        "Vaulted Ceiling Throughout",
        "2×4 Exterior Walls",
        '2×6 Floor Joists (16" on center)',
        "30# Roof Load Capacity",
        "R-22 Ceiling Insulation",
        "R-13 Wall Insulation",
        "R-11 Floor Insulation",
        '5/8" Tongue and Groove Floor Decking',
        "7-Year Limited Warranty on Flooring",
      ],
    },
    exterior: {
      category: "Exterior Features",
      items: [
        "Sliding Glass Entry Door",
        "Deluxe Porch Light",
        "Class A Shingles",
        "Cemplank Vertical Siding",
        'Low "E" Dual Glaze Windows',
        '4" Cemplank Window Trim',
      ],
    },
    interior: {
      category: "Interior Features",
      items: [
        "Taped and Textured Walls",
        "Rounded Corners",
        '2-1/4" Door Case Molding',
        '3" Baseboard Molding',
        '2" Faux Wood Blinds',
        "16 oz Shaw Carpet",
        "Mirrored Closet Doors",
        "Built-in Storage Solutions",
      ],
    },
    utility: {
      category: "Utility & Safety",
      items: [
        "Gas Forced Air Furnace",
        "50 AMP Service",
        "20-Gallon Electric Water Heater",
        "GFI Exterior Receptacles",
        "Carbon Monoxide Detector",
        "Smoke Detectors",
        "Fire Extinguisher",
      ],
    },
  },
  kitchenSpecs: [
    {
      category: "Kitchen Specifications",
      items: [
        {
          label: "Appliances",
          value: "Deluxe gas range, 18 cu. ft. frost-free refrigerator",
        },
        {
          label: "Ventilation",
          value: '30" vented range hood with light',
        },
        {
          label: "Storage",
          value: "Bank of drawers, lined overhead cabinets",
        },
        {
          label: "Countertops",
          value: 'Granite with single eased edge, 4" granite backsplash',
        },
        {
          label: "Fixtures",
          value: "Brushed nickel faucet, stainless steel sink",
        },
      ],
    },
  ],
  bathroomSpecs: [
    {
      category: "Bathroom Specifications",
      items: [
        {
          label: "Shower Options",
          value: '36" or 48" shower with glass enclosure',
        },
        {
          label: "Fixtures",
          value: "Brushed nickel faucets and hardware",
        },
        {
          label: "Features",
          value: "Granite backsplash, modern fixtures",
        },
      ],
    },
  ],
  overview:
    "This meticulously designed tiny home combines modern amenities with high-quality construction, perfect for those looking to downsize without sacrificing comfort. The thoughtful design incorporates a vaulted ceiling throughout, creating an open and airy feel while maintaining structural integrity with premium construction materials and methods.",
  relatedProducts: ["th-002", "th-003", "th-004", "th-005"],
};

export const products: { [key: string]: Product } = {
  "roaming-retreat-tiny-house": productExample,
  // Add more products here
};
