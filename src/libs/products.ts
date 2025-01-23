// lib/products.ts
export interface Construction {
  walls?: string;
  floorJoists?: string;
  roofLoad?: string;
  roofPitch?: {
    main: string;
    secondary: string;
  };
  insulation?: {
    ceiling: string;
    walls: string;
    floor: string;
  };
  flooring?: string;
  frame?: string;
  floors?: string;
  decking?: string;
  foundation?: string;
  mobility?: string;
  features?: string;
  durability?: string;
  structure?: string;
}

export interface ProductImage {
  id: string;
  url: string;
  alt: string;
}

export interface FeatureCategory {
  category: string;
  items: string[];
}

export interface SpecificationCategory {
  category: string;
  items: {
    label: string;
    value: string;
  }[];
}

export interface Specifications {
  bedrooms: number;
  bathrooms: number;
  squareFootage?: number;
  squareFeet?: number;
  ceilingHeight?: number;
  construction?: Construction;
  additionalSpaces?: string[];
  dimensions?: {
    deck?: string;
    wallHeight?: string;
    overhangs?: string;
  };
  chassis?: string;
  hitch?: string;
  certification?: string;
  eaves?: {
    frontRear: string;
    sides: string;
  };
  sections?: {
    section1?: {
      width: string;
      roofPitch: string;
    };
    section2?: {
      width: string;
      roofPitch: string;
    };
  };
}

export interface Features {
  exterior?: FeatureCategory;
  interior?: FeatureCategory;
  kitchen?: FeatureCategory;
  construction?: FeatureCategory;
  systems?: FeatureCategory;
  bedroom?: FeatureCategory;
  utility?: FeatureCategory;
}

export interface Warranty {
  duration: string;
  coverage: string[];
}

export interface BuyerProtection {
  features: string[];
}

export interface Product {
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
  specifications: Specifications;
  images: ProductImage[];
  features: Features;
  kitchenSpecs?: SpecificationCategory[];
  bathroomSpecs?: SpecificationCategory[];
  utilitySpecs?: SpecificationCategory[];
  bedroomSpecs?: SpecificationCategory[];
  loftSpecs?: SpecificationCategory[];
  laundrySpecs?: SpecificationCategory[];
  storageSpecs?: SpecificationCategory[];
  overview: string;
  warranty: Warranty;
  buyerProtection: BuyerProtection;
  highlights?: string[];
  relatedProducts: string[];
}
export const products: Product[] = [
  {
    id: "th-001",
    slug: "roaming-retreat-tiny-house-399sqft",
    name: "Roaming Retreat Fully Furnished Tiny House On Wheels 1 Bed, 1 Bath – 399 sqft",
    shortDescription:
      "Meticulously designed tiny home with vaulted ceilings and premium finishes",
    price: 37000,
    downPayment: {
      full: 14800, // 40% of price
      financing: 11100,
    },
    monthlyPayment: 881,
    specifications: {
      bedrooms: 1,
      bathrooms: 1,
      squareFootage: 399,
      construction: {
        walls: "2×4 exterior walls",
        floorJoists: '2×6 spaced 16" on center',
        roofLoad: "30# capacity",
        roofPitch: {
          main: "6/12 pitch (11'2\" section)",
          secondary: "4/12 pitch (13'4\" section)",
        },
        insulation: {
          ceiling: "R-22",
          walls: "R-13",
          floor: "R-11",
        },
        flooring: '5/8" tongue and groove decking with 7-year warranty',
      },
    },
    images: [
      {
        id: "img-roaming-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/Roaming-retreat36.jpg", // Placeholder for 21 images
        alt: "Roaming Retreat Tiny House Exterior View",
      },
      {
        id: "img-roaming-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/Roaming-retreat17.png", // Placeholder for 21 images
        alt: "Roaming Retreat Tiny House Exterior View",
      },
      {
        id: "img-roaming-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/Roaming-retreat18.jpg", // Placeholder for 21 images
        alt: "Roaming Retreat Tiny House Exterior View",
      },
      {
        id: "img-roaming-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/Roaming-retreat19.jpg", // Placeholder for 21 images
        alt: "Roaming Retreat Tiny House Exterior View",
      },
      {
        id: "img-roaming-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/Roaming-retreat20.jpg", // Placeholder for 21 images
        alt: "Roaming Retreat Tiny House Exterior View",
      },
      {
        id: "img-roaming-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/Roaming-retreat21.jpg", // Placeholder for 21 images
        alt: "Roaming Retreat Tiny House Exterior View",
      },
      {
        id: "img-roaming-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/Roaming-retreat22.jpg", // Placeholder for 21 images
        alt: "Roaming Retreat Tiny House Exterior View",
      },
      {
        id: "img-roaming-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/Roaming-retreat23.jpg", // Placeholder for 21 images
        alt: "Roaming Retreat Tiny House Exterior View",
      },
      {
        id: "img-roaming-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/Roaming-retreat24.jpg", // Placeholder for 21 images
        alt: "Roaming Retreat Tiny House Exterior View",
      },
      {
        id: "img-roaming-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/Roaming-retreat25.jpg", // Placeholder for 21 images
        alt: "Roaming Retreat Tiny House Exterior View",
      },
      {
        id: "img-roaming-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/Roaming-retreat26.jpg", // Placeholder for 21 images
        alt: "Roaming Retreat Tiny House Exterior View",
      },
      {
        id: "img-roaming-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/Roaming-retreat27.jpg", // Placeholder for 21 images
        alt: "Roaming Retreat Tiny House Exterior View",
      },
      {
        id: "img-roaming-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/Roaming-retreat28.jpg", // Placeholder for 21 images
        alt: "Roaming Retreat Tiny House Exterior View",
      },
      {
        id: "img-roaming-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/Roaming-retreat29.jpg", // Placeholder for 21 images
        alt: "Roaming Retreat Tiny House Exterior View",
      },
      {
        id: "img-roaming-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/Roaming-retreat30.jpg", // Placeholder for 21 images
        alt: "Roaming Retreat Tiny House Exterior View",
      },
      {
        id: "img-roaming-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/Roaming-retreat31.jpg", // Placeholder for 21 images
        alt: "Roaming Retreat Tiny House Exterior View",
      },
      {
        id: "img-roaming-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/Roaming-retreat32.jpg", // Placeholder for 21 images
        alt: "Roaming Retreat Tiny House Exterior View",
      },
      {
        id: "img-roaming-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/Roaming-retreat33.jpg", // Placeholder for 21 images
        alt: "Roaming Retreat Tiny House Exterior View",
      },
      {
        id: "img-roaming-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/Roaming-retreat34.jpg", // Placeholder for 21 images
        alt: "Roaming Retreat Tiny House Exterior View",
      },
      {
        id: "img-roaming-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/Roaming-retreat35.jpg", // Placeholder for 21 images
        alt: "Roaming Retreat Tiny House Exterior View",
      },
      {
        id: "img-roaming-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/Roaming-retreat37.jpg", // Placeholder for 21 images
        alt: "Roaming Retreat Tiny House Exterior View",
      },
    ],
    features: {
      exterior: {
        category: "Exterior Features",
        items: [
          "Sliding glass entry door",
          "Deluxe porch light",
          "Class A shingles",
          "Cemplank vertical siding",
          "Low 'E' dual glaze windows",
          '4" Cemplank window trim',
          "Fascia and perforated soffit",
        ],
      },
      interior: {
        category: "Interior Features",
        items: [
          "Vaulted ceiling throughout",
          "Taped and textured walls",
          "Rounded corners",
          '2-1/4" door case molding',
          '3" baseboard molding',
          '2" faux wood blinds',
          "Wood rods with shelves",
          "16 oz Shaw carpet with #6 rebond pad",
          "Mirrored closet doors",
          "Included nightstand and dresser",
        ],
      },
      kitchen: {
        category: "Kitchen Features",
        items: [
          "Deluxe gas range",
          "18 cu. ft. frost-free refrigerator",
          '30" vented range hood with light',
          "Bank of drawers",
          "Lined overhead cabinets",
          "Granite countertops",
          '4" granite backsplash',
          "Brushed nickel faucet",
          "Stainless steel sink",
        ],
      },
    },
    bathroomSpecs: [
      {
        category: "Bathroom Features",
        items: [
          {
            label: "Fixtures",
            value: "Brushed nickel faucets and hardware",
          },
          {
            label: "Shower",
            value: '36" or 48" shower with glass enclosure',
          },
          {
            label: "Design",
            value: "Granite backsplash, modern fixtures",
          },
        ],
      },
    ],
    utilitySpecs: [
      {
        category: "Utility Features",
        items: [
          {
            label: "Heating",
            value: "Gas forced air furnace with toe kick registers",
          },
          {
            label: "Power",
            value: "50 AMP service with 25' power cord",
          },
          {
            label: "Water Heater",
            value: "20-gallon electric",
          },
          {
            label: "Safety",
            value: "GFI receptacles, CO/smoke detectors, fire extinguisher",
          },
        ],
      },
    ],
    overview:
      "This meticulously designed tiny home combines modern amenities with high-quality construction, featuring vaulted ceilings, premium appliances, and comprehensive safety features. Perfect for those seeking a mobile lifestyle without compromising on comfort and style.",
    warranty: {
      duration: "25 years",
      coverage: [
        "Free repairs for wear and tear due to technical faults",
        "Full replacement for severe damage",
        "Quality control inspection before shipping",
        "No-cost repairs for covered issues",
      ],
    },
    buyerProtection: {
      features: [
        "Transparent pricing with no hidden fees",
        "Straightforward return policy",
        "Secure payment processing",
        "Dedicated customer service support",
      ],
    },
    highlights: [
      "Vaulted ceiling throughout",
      "Premium insulation package",
      "Granite countertops",
      "Full appliance package",
      "Comprehensive safety features",
      "Glass shower enclosure",
    ],
    relatedProducts: [
      "th-001",
      "th-002",
      "th-003",
      "th-004",
      "th-005",
      "th-006",
      "th-007",
      "th-008",
      "th-009",
      "th-010",
      "th-011",
      "th-012",
      "th-013",
      "th-014",
      "th-015",
      "th-016",
      "th-017",
      "th-018",
      "th-019",
    ],
  },
  {
    id: "th-002",
    slug: "nomad-nest-tiny-house-399sqft",
    name: "Nomad Nest Tiny House, 1 Bed, 1 Bath – 399 sqft",
    shortDescription:
      "Beautifully designed tiny home with vaulted ceilings and modern amenities",
    price: 30000,
    downPayment: {
      full: 12000, // 40% of price
      financing: 9000,
    },
    monthlyPayment: 714,
    specifications: {
      bedrooms: 1,
      bathrooms: 1,
      squareFootage: 399,
      construction: {
        walls: "2×4 exterior walls",
        floorJoists: '2×6 spaced 16" on center',
        roofLoad: "30# capacity",
        roofPitch: {
          main: "6/12 pitch (11'2\" section)",
          secondary: "4/12 pitch (13'4\" section)",
        },
        insulation: {
          ceiling: "R-22",
          walls: "R-13",
          floor: "R-11",
        },
        flooring: '5/8" tongue and groove decking with 7-year warranty',
      },
    },
    images: [
      {
        id: "img-nomad-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/Nomad-Nest30.jpg", // Placeholder for 20 images
        alt: "Nomad Nest Tiny House Exterior View",
      },
      {
        id: "img-nomad-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/Nomad-Nest36.png", // Placeholder for 20 images
        alt: "Nomad Nest Tiny House Exterior View",
      },
      {
        id: "img-nomad-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/Nomad-Nest17.jpg", // Placeholder for 20 images
        alt: "Nomad Nest Tiny House Exterior View",
      },
      {
        id: "img-nomad-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/Nomad-Nest18.jpg", // Placeholder for 20 images
        alt: "Nomad Nest Tiny House Exterior View",
      },
      {
        id: "img-nomad-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/Nomad-Nest19.jpg", // Placeholder for 20 images
        alt: "Nomad Nest Tiny House Exterior View",
      },
      {
        id: "img-nomad-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/Nomad-Nest20.jpg", // Placeholder for 20 images
        alt: "Nomad Nest Tiny House Exterior View",
      },
      {
        id: "img-nomad-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/Nomad-Nest21.jpg", // Placeholder for 20 images
        alt: "Nomad Nest Tiny House Exterior View",
      },
      {
        id: "img-nomad-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/Nomad-Nest22.jpg", // Placeholder for 20 images
        alt: "Nomad Nest Tiny House Exterior View",
      },
      {
        id: "img-nomad-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/Nomad-Nest23.jpg", // Placeholder for 20 images
        alt: "Nomad Nest Tiny House Exterior View",
      },
      {
        id: "img-nomad-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/Nomad-Nest24.jpg", // Placeholder for 20 images
        alt: "Nomad Nest Tiny House Exterior View",
      },
      {
        id: "img-nomad-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/Nomad-Nest25.jpg", // Placeholder for 20 images
        alt: "Nomad Nest Tiny House Exterior View",
      },
      {
        id: "img-nomad-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/Nomad-Nest26.jpg", // Placeholder for 20 images
        alt: "Nomad Nest Tiny House Exterior View",
      },
      {
        id: "img-nomad-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/Nomad-Nest27.jpg", // Placeholder for 20 images
        alt: "Nomad Nest Tiny House Exterior View",
      },
      {
        id: "img-nomad-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/Nomad-Nest28.jpg", // Placeholder for 20 images
        alt: "Nomad Nest Tiny House Exterior View",
      },
      {
        id: "img-nomad-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/Nomad-Nest29.jpg", // Placeholder for 20 images
        alt: "Nomad Nest Tiny House Exterior View",
      },
      {
        id: "img-nomad-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/Nomad-Nest30.jpg", // Placeholder for 20 images
        alt: "Nomad Nest Tiny House Exterior View",
      },
      {
        id: "img-nomad-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/Nomad-Nest31.jpg", // Placeholder for 20 images
        alt: "Nomad Nest Tiny House Exterior View",
      },
      {
        id: "img-nomad-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/Nomad-Nest32.jpg", // Placeholder for 20 images
        alt: "Nomad Nest Tiny House Exterior View",
      },
      {
        id: "img-nomad-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/Nomad-Nest33.jpg", // Placeholder for 20 images
        alt: "Nomad Nest Tiny House Exterior View",
      },
      {
        id: "img-nomad-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/Nomad-Nest34.jpg", // Placeholder for 20 images
        alt: "Nomad Nest Tiny House Exterior View",
      },
      {
        id: "img-nomad-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/Nomad-Nest35.jpg", // Placeholder for 20 images
        alt: "Nomad Nest Tiny House Exterior View",
      },
    ],
    features: {
      exterior: {
        category: "Exterior Features",
        items: [
          "Sliding glass entry door",
          "Deluxe porch light",
          "Class A shingles",
          "Cemplank vertical siding",
          "Low 'E' dual glaze windows",
          '4" Cemplank window trim',
          "Fascia and perforated soffit",
        ],
      },
      interior: {
        category: "Interior Features",
        items: [
          "Vaulted ceiling throughout",
          "Taped and textured walls",
          "Rounded corners",
          '2-1/4" door case molding',
          '3" baseboard molding',
          '2" faux wood blinds',
          "Wood rods with shelves",
          "16 oz Shaw carpet with #6 rebond pad",
          "Mirrored closet doors",
          "Included nightstand and dresser",
        ],
      },
      kitchen: {
        category: "Kitchen Features",
        items: [
          "Deluxe gas range",
          "18 cu. ft. frost-free refrigerator",
          '30" vented range hood with light',
          "Bank of drawers",
          "Lined overhead cabinets",
          "Granite countertops",
          '4" granite backsplash',
          "Brushed nickel faucet",
          "Stainless steel sink",
        ],
      },
    },
    bathroomSpecs: [
      {
        category: "Bathroom Features",
        items: [
          {
            label: "Fixtures",
            value: "Brushed nickel faucets and hardware",
          },
          {
            label: "Shower",
            value: '36" or 48" shower with glass enclosure',
          },
          {
            label: "Design",
            value: "Granite backsplash, modern fixtures",
          },
        ],
      },
    ],
    utilitySpecs: [
      {
        category: "Utility Features",
        items: [
          {
            label: "Heating",
            value: "Gas forced air furnace with toe kick registers",
          },
          {
            label: "Power",
            value: "50 AMP service with 25' power cord",
          },
          {
            label: "Water Heater",
            value: "20-gallon electric",
          },
          {
            label: "Safety",
            value: "GFI receptacles, CO/smoke detectors, fire extinguisher",
          },
        ],
      },
    ],
    overview:
      "This beautifully designed tiny home combines modern amenities with thoughtful construction, perfect for anyone looking to embrace a minimalist lifestyle. Features vaulted ceilings, premium finishes, and comprehensive safety features.",
    warranty: {
      duration: "25 years",
      coverage: [
        "Free repairs for wear and tear due to technical faults",
        "Full replacement for severe damage",
        "Quality control inspection before shipping",
        "No-cost repairs for covered issues",
      ],
    },
    buyerProtection: {
      features: [
        "Transparent pricing with no hidden fees",
        "Straightforward return policy",
        "Secure payment processing",
        "Dedicated customer service support",
      ],
    },
    highlights: [
      "Vaulted ceiling throughout",
      "Premium insulation package",
      "Granite countertops",
      "Full appliance package",
      "Comprehensive safety features",
      "Glass shower enclosure",
    ],
    relatedProducts: [
      "th-001",
      "th-002",
      "th-003",
      "th-004",
      "th-005",
      "th-006",
      "th-007",
      "th-008",
      "th-009",
      "th-010",
      "th-011",
      "th-012",
      "th-013",
      "th-014",
      "th-015",
      "th-016",
      "th-017",
      "th-018",
      "th-019",
    ],
  },
  {
    id: "th-003",
    slug: "wanderluxe-mobile-tiny-house-399sqft",
    name: "WanderLuxe Fully Furnished Mobile Tiny House, 1 Bed, 1 Bath – 399 sqft",
    shortDescription:
      "Meticulously crafted tiny home combining quality construction with stylish amenities",
    price: 37000,
    downPayment: {
      full: 14800, // 40% of price
      financing: 11100,
    },
    monthlyPayment: 881,
    specifications: {
      bedrooms: 1,
      bathrooms: 1,
      squareFootage: 399,
      construction: {
        walls: "2×4 exterior walls",
        floorJoists: '2×6 spaced 16" on center',
        roofLoad: "30# capacity",
        roofPitch: {
          main: "6/12 pitch (11'2\" section)",
          secondary: "4/12 pitch (13'4\" section)",
        },
        insulation: {
          ceiling: "R-22",
          walls: "R-13",
          floor: "R-11",
        },
        flooring: '5/8" tongue and groove decking with 7-year warranty',
      },
    },
    images: [
      {
        id: "img-wanderluxe-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/wanderluxe25.jpg", // Placeholder for 31 images
        alt: "WanderLuxe Mobile Tiny House Exterior View",
      },
      {
        id: "img-wanderluxe-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/wanderluxe17.jpg", // Placeholder for 31 images
        alt: "WanderLuxe Mobile Tiny House Exterior View",
      },
      {
        id: "img-wanderluxe-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/wanderluxe18.jpg", // Placeholder for 31 images
        alt: "WanderLuxe Mobile Tiny House Exterior View",
      },
      {
        id: "img-wanderluxe-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/wanderluxe19.jpg", // Placeholder for 31 images
        alt: "WanderLuxe Mobile Tiny House Exterior View",
      },
      {
        id: "img-wanderluxe-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/wanderluxe20.jpg", // Placeholder for 31 images
        alt: "WanderLuxe Mobile Tiny House Exterior View",
      },
      {
        id: "img-wanderluxe-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/wanderluxe21.jpg", // Placeholder for 31 images
        alt: "WanderLuxe Mobile Tiny House Exterior View",
      },
      {
        id: "img-wanderluxe-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/wanderluxe22.jpg", // Placeholder for 31 images
        alt: "WanderLuxe Mobile Tiny House Exterior View",
      },
      {
        id: "img-wanderluxe-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/wanderluxe23.jpg", // Placeholder for 31 images
        alt: "WanderLuxe Mobile Tiny House Exterior View",
      },
      {
        id: "img-wanderluxe-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/wanderluxe24.jpg", // Placeholder for 31 images
        alt: "WanderLuxe Mobile Tiny House Exterior View",
      },
      {
        id: "img-wanderluxe-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/wanderluxe25.jpg", // Placeholder for 31 images
        alt: "WanderLuxe Mobile Tiny House Exterior View",
      },
      {
        id: "img-wanderluxe-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/wanderluxe26.jpg", // Placeholder for 31 images
        alt: "WanderLuxe Mobile Tiny House Exterior View",
      },
      {
        id: "img-wanderluxe-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/wanderluxe27.jpg", // Placeholder for 31 images
        alt: "WanderLuxe Mobile Tiny House Exterior View",
      },
      {
        id: "img-wanderluxe-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/wanderluxe28.jpg", // Placeholder for 31 images
        alt: "WanderLuxe Mobile Tiny House Exterior View",
      },
      {
        id: "img-wanderluxe-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/wanderluxe29.jpg", // Placeholder for 31 images
        alt: "WanderLuxe Mobile Tiny House Exterior View",
      },
      {
        id: "img-wanderluxe-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/wanderluxe30.jpg", // Placeholder for 31 images
        alt: "WanderLuxe Mobile Tiny House Exterior View",
      },
      {
        id: "img-wanderluxe-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/wanderluxe31.jpg", // Placeholder for 31 images
        alt: "WanderLuxe Mobile Tiny House Exterior View",
      },
      {
        id: "img-wanderluxe-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/wanderluxe32.jpg", // Placeholder for 31 images
        alt: "WanderLuxe Mobile Tiny House Exterior View",
      },
      {
        id: "img-wanderluxe-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/wanderluxe33.jpg", // Placeholder for 31 images
        alt: "WanderLuxe Mobile Tiny House Exterior View",
      },
      {
        id: "img-wanderluxe-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/wanderluxe34.jpg", // Placeholder for 31 images
        alt: "WanderLuxe Mobile Tiny House Exterior View",
      },
      {
        id: "img-wanderluxe-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/wanderluxe35.jpg", // Placeholder for 31 images
        alt: "WanderLuxe Mobile Tiny House Exterior View",
      },
      {
        id: "img-wanderluxe-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/wanderluxe36.jpg", // Placeholder for 31 images
        alt: "WanderLuxe Mobile Tiny House Exterior View",
      },
      {
        id: "img-wanderluxe-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/wanderluxe37.jpg", // Placeholder for 31 images
        alt: "WanderLuxe Mobile Tiny House Exterior View",
      },
      {
        id: "img-wanderluxe-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/wanderluxe38.jpg", // Placeholder for 31 images
        alt: "WanderLuxe Mobile Tiny House Exterior View",
      },
      {
        id: "img-wanderluxe-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/wanderluxe39.jpg", // Placeholder for 31 images
        alt: "WanderLuxe Mobile Tiny House Exterior View",
      },
      {
        id: "img-wanderluxe-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/wanderluxe40.jpg", // Placeholder for 31 images
        alt: "WanderLuxe Mobile Tiny House Exterior View",
      },
      {
        id: "img-wanderluxe-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/wanderluxe41.jpg", // Placeholder for 31 images
        alt: "WanderLuxe Mobile Tiny House Exterior View",
      },
      {
        id: "img-wanderluxe-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/wanderluxe42.jpg", // Placeholder for 31 images
        alt: "WanderLuxe Mobile Tiny House Exterior View",
      },
      {
        id: "img-wanderluxe-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/wanderluxe43.jpg", // Placeholder for 31 images
        alt: "WanderLuxe Mobile Tiny House Exterior View",
      },
      {
        id: "img-wanderluxe-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/wanderluxe44.jpg", // Placeholder for 31 images
        alt: "WanderLuxe Mobile Tiny House Exterior View",
      },
      {
        id: "img-wanderluxe-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/wanderluxe45.jpg", // Placeholder for 31 images
        alt: "WanderLuxe Mobile Tiny House Exterior View",
      },
      {
        id: "img-wanderluxe-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/wanderluxe46.jpg", // Placeholder for 31 images
        alt: "WanderLuxe Mobile Tiny House Exterior View",
      },
      {
        id: "img-wanderluxe-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/wanderluxe47.jpg", // Placeholder for 31 images
        alt: "WanderLuxe Mobile Tiny House Exterior View",
      },
    ],
    features: {
      exterior: {
        category: "Exterior Features",
        items: [
          "Sliding glass entry door",
          "Deluxe porch light",
          "Class A shingles",
          "Cemplank vertical siding",
          "Low 'E' dual glaze windows",
          '4" Cemplank window trim',
          "Fascia and perforated soffit",
        ],
      },
      interior: {
        category: "Interior Features",
        items: [
          "Vaulted ceiling throughout",
          "Taped and textured walls",
          "Rounded corners",
          '2-1/4" door case molding',
          '3" baseboard molding',
          '2" faux wood blinds',
          "Wood rods with shelves",
          "16 oz Shaw carpet with #6 rebond pad",
          "Mirrored closet doors",
          "Included nightstand and dresser",
        ],
      },
      kitchen: {
        category: "Kitchen Features",
        items: [
          "Deluxe gas range",
          "18 cu. ft. frost-free refrigerator",
          '30" vented range hood with light',
          "Bank of drawers",
          "Lined overhead cabinets",
          "Granite countertops",
          '4" granite backsplash',
          "Brushed nickel faucet",
          "Stainless steel sink",
        ],
      },
    },
    bathroomSpecs: [
      {
        category: "Bathroom Features",
        items: [
          {
            label: "Fixtures",
            value: "Brushed nickel faucets and hardware",
          },
          {
            label: "Shower",
            value: '36" or 48" shower with glass enclosure',
          },
          {
            label: "Design",
            value: "Granite backsplash, modern fixtures",
          },
        ],
      },
    ],
    utilitySpecs: [
      {
        category: "Utility Features",
        items: [
          {
            label: "Heating",
            value: "Gas forced air furnace with toe kick registers",
          },
          {
            label: "Power",
            value: "50 AMP service with 25' power cord",
          },
          {
            label: "Water Heater",
            value: "20-gallon electric",
          },
          {
            label: "Safety",
            value: "GFI receptacles, CO/smoke detectors, fire extinguisher",
          },
        ],
      },
    ],
    overview:
      "This meticulously crafted tiny home combines quality construction with stylish amenities, making it perfect for those seeking a cozy yet functional living environment. Features vaulted ceilings, premium finishes, and comprehensive safety features.",
    warranty: {
      duration: "25 years",
      coverage: [
        "Free repairs for wear and tear due to technical faults",
        "Full replacement for severe damage",
        "Quality control inspection before shipping",
        "No-cost repairs for covered issues",
      ],
    },
    buyerProtection: {
      features: [
        "Transparent pricing with no hidden fees",
        "Straightforward return policy",
        "Secure payment processing",
        "Dedicated customer service support",
      ],
    },
    highlights: [
      "Vaulted ceiling throughout",
      "Premium insulation package",
      "Granite countertops",
      "Full appliance package",
      "Comprehensive safety features",
      "Glass shower enclosure",
    ],
    relatedProducts: [
      "th-001",
      "th-002",
      "th-003",
      "th-004",
      "th-005",
      "th-006",
      "th-007",
      "th-008",
      "th-009",
      "th-010",
      "th-011",
      "th-012",
      "th-013",
      "th-014",
      "th-015",
      "th-016",
      "th-017",
      "th-018",
      "th-019",
    ],
  },
  {
    id: "th-005",
    slug: "roam-haven-tiny-house",
    name: "Roam Haven",
    shortDescription:
      "Fully Furnished 1 Bed, 1 Bath Tiny House On Wheels - 389 SQFT",
    price: 36000,
    downPayment: {
      full: 14400, // 40% of price
      financing: 12000,
    },
    monthlyPayment: 850,
    specifications: {
      bedrooms: 1,
      bathrooms: 1,
      squareFeet: 389,
      ceilingHeight: 8,
    },
    images: [
      {
        id: "img-roam-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/roam-haven18.jpg", // Placeholder for 22 images
        alt: "Roam Haven Tiny House Exterior View",
      },
      {
        id: "img-roam-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/roam-haven24.jpg", // Placeholder for 22 images
        alt: "Roam Haven Tiny House Exterior View",
      },
      {
        id: "img-roam-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/roam-haven35.jpg", // Placeholder for 22 images
        alt: "Roam Haven Tiny House Exterior View",
      },
      {
        id: "img-roam-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/roam-haven36.jpg", // Placeholder for 22 images
        alt: "Roam Haven Tiny House Exterior View",
      },
      {
        id: "img-roam-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/roam-haven20.jpg", // Placeholder for 22 images
        alt: "Roam Haven Tiny House Exterior View",
      },
      {
        id: "img-roam-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/roam-haven21.jpg", // Placeholder for 22 images
        alt: "Roam Haven Tiny House Exterior View",
      },
      {
        id: "img-roam-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/roam-haven22.jpg", // Placeholder for 22 images
        alt: "Roam Haven Tiny House Exterior View",
      },
      {
        id: "img-roam-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/roam-haven23.jpg", // Placeholder for 22 images
        alt: "Roam Haven Tiny House Exterior View",
      },
      {
        id: "img-roam-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/roam-haven24.jpg", // Placeholder for 22 images
        alt: "Roam Haven Tiny House Exterior View",
      },
      {
        id: "img-roam-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/roam-haven25.jpg", // Placeholder for 22 images
        alt: "Roam Haven Tiny House Exterior View",
      },
      {
        id: "img-roam-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/roam-haven27.jpg", // Placeholder for 22 images
        alt: "Roam Haven Tiny House Exterior View",
      },
      {
        id: "img-roam-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/roam-haven28.jpg", // Placeholder for 22 images
        alt: "Roam Haven Tiny House Exterior View",
      },
      {
        id: "img-roam-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/roam-haven29.jpg", // Placeholder for 22 images
        alt: "Roam Haven Tiny House Exterior View",
      },
      {
        id: "img-roam-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/roam-haven30.jpg", // Placeholder for 22 images
        alt: "Roam Haven Tiny House Exterior View",
      },
      {
        id: "img-roam-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/roam-haven31.jpg", // Placeholder for 22 images
        alt: "Roam Haven Tiny House Exterior View",
      },
      {
        id: "img-roam-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/roam-haven32.jpg", // Placeholder for 22 images
        alt: "Roam Haven Tiny House Exterior View",
      },
      {
        id: "img-roam-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/roam-haven33.jpg", // Placeholder for 22 images
        alt: "Roam Haven Tiny House Exterior View",
      },
      {
        id: "img-roam-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/roam-haven34.jpg", // Placeholder for 22 images
        alt: "Roam Haven Tiny House Exterior View",
      },
    ],
    features: {
      construction: {
        category: "Construction Features",
        items: [
          "8' flat ceiling throughout",
          "2×4 exterior walls",
          '2×6 floor joists (16" on center)',
          "20-pound roof load capacity",
          "3/12 nominal roof pitch",
          "R-22 ceiling insulation",
          "R-13 wall insulation",
          "R-11 floor insulation",
          '19/32" tongue and groove floor decking',
          "7-year limited warranty",
        ],
      },
      exterior: {
        category: "Exterior Features",
        items: [
          "In-swing steel front door",
          '4" Cemplank window trim throughout',
          "Cemplank vertical siding",
          "Cemplank fascia",
          "Perforated soffit",
          "30-year architectural shingles",
          "Vinyl dual glazed windows",
        ],
      },
      interior: {
        category: "Interior Features",
        items: [
          "6-panel interior doors with brushed nickel hardware",
          "Linoleum flooring throughout",
          "White flat window and door case molding",
          "Standard heat registers throughout",
          "Tape & texture ceiling",
          "Wire vented shelves throughout",
        ],
      },
      utility: {
        category: "Utility & Safety",
        items: [
          "50 AMP service",
          "20-gallon electric water heater",
          "Carbon monoxide detector",
          "Smoke detector",
          "Rocker switches throughout",
          "Exterior GFI receptacle",
          "Gas furnace",
          "Globe ceiling lights throughout",
        ],
      },
    },
    kitchenSpecs: [
      {
        category: "Kitchen Specifications",
        items: [
          {
            label: "Faucet",
            value: "Dual handle kitchen faucet",
          },
          {
            label: "Cabinetry",
            value: "Picture frame MDF cabinet doors with hidden hinges",
          },
          {
            label: "Countertops",
            value: "Laminate countertop with flat edge",
          },
          {
            label: "Storage",
            value:
              '30" overhead cabinets with lined shelves, refrigerator overhead cabinet',
          },
          {
            label: "Sink",
            value: "Stainless steel deep cell sink",
          },
          {
            label: "Appliances",
            value:
              '18 cu. ft. frost-free refrigerator, 30" range hood with light, deluxe gas range',
          },
        ],
      },
    ],
    bathroomSpecs: [
      {
        category: "Bathroom Specifications",
        items: [
          {
            label: "Fixtures",
            value: "Dual handle faucets, single lever shower diverter",
          },
          {
            label: "Shower",
            value: "Custom shower per plan",
          },
          {
            label: "Countertop",
            value: "Laminate countertop with flat edge",
          },
          {
            label: "Ventilation",
            value: "Exhaust fan",
          },
          {
            label: "Sink",
            value: "Acrylic bath sink",
          },
        ],
      },
    ],
    overview:
      "This thoughtfully constructed tiny home offers a blend of comfort, efficiency, and modern design, making it perfect for those looking to downsize without compromising on quality. Features include an 8' flat ceiling throughout, comprehensive insulation, and modern amenities for comfortable living.",
    warranty: {
      duration: "25 years",
      coverage: [
        "Free repairs for wear and tear due to technical faults",
        "Full replacement for severe damage",
        "Quality control inspection before shipping",
        "No-cost repairs for covered issues",
      ],
    },
    buyerProtection: {
      features: [
        "Transparent pricing with no hidden fees",
        "Straightforward return policy",
        "Secure payment processing",
        "Dedicated customer service support",
      ],
    },
    relatedProducts: ["th-001", "th-002", "th-003", "th-004"],
  },
  {
    id: "th-006",
    slug: "wander-nest-tiny-house",
    name: "Wander Nest",
    shortDescription: "Fully Furnished Tiny House On Wheels, 1 Bed, 1 Bath",
    price: 38000,
    downPayment: {
      full: 15200, // 40% of price
      financing: 12700,
    },
    monthlyPayment: 900,
    specifications: {
      bedrooms: 1,
      bathrooms: 1,
      sections: {
        section1: {
          width: "11'2\"",
          roofPitch: "6/12",
        },
        section2: {
          width: "13'4\"",
          roofPitch: "4/12",
        },
      },
    },
    images: [
      {
        id: "img-wander-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/145.jpg", // Placeholder for 28 images
        alt: "Wander Nest Tiny House Exterior View",
      },
      {
        id: "img-wander-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/136.jpg", // Placeholder for 28 images
        alt: "Wander Nest Tiny House Exterior View",
      },
      {
        id: "img-wander-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/137.jpg", // Placeholder for 28 images
        alt: "Wander Nest Tiny House Exterior View",
      },
      {
        id: "img-wander-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/138.jpg", // Placeholder for 28 images
        alt: "Wander Nest Tiny House Exterior View",
      },
      {
        id: "img-wander-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/139.jpg", // Placeholder for 28 images
        alt: "Wander Nest Tiny House Exterior View",
      },
      {
        id: "img-wander-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/140.jpg", // Placeholder for 28 images
        alt: "Wander Nest Tiny House Exterior View",
      },
      {
        id: "img-wander-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/141.jpg", // Placeholder for 28 images
        alt: "Wander Nest Tiny House Exterior View",
      },
      {
        id: "img-wander-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/142.jpg", // Placeholder for 28 images
        alt: "Wander Nest Tiny House Exterior View",
      },
      {
        id: "img-wander-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/143.jpg", // Placeholder for 28 images
        alt: "Wander Nest Tiny House Exterior View",
      },
      {
        id: "img-wander-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/144.jpg", // Placeholder for 28 images
        alt: "Wander Nest Tiny House Exterior View",
      },
      {
        id: "img-wander-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/145.jpg", // Placeholder for 28 images
        alt: "Wander Nest Tiny House Exterior View",
      },
      {
        id: "img-wander-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/146.jpg", // Placeholder for 28 images
        alt: "Wander Nest Tiny House Exterior View",
      },
      {
        id: "img-wander-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/147.jpg", // Placeholder for 28 images
        alt: "Wander Nest Tiny House Exterior View",
      },
      {
        id: "img-wander-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/148.jpg", // Placeholder for 28 images
        alt: "Wander Nest Tiny House Exterior View",
      },
      {
        id: "img-wander-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/149.jpg", // Placeholder for 28 images
        alt: "Wander Nest Tiny House Exterior View",
      },
      {
        id: "img-wander-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/150.jpg", // Placeholder for 28 images
        alt: "Wander Nest Tiny House Exterior View",
      },
      {
        id: "img-wander-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/151.jpg", // Placeholder for 28 images
        alt: "Wander Nest Tiny House Exterior View",
      },
      {
        id: "img-wander-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/152.jpg", // Placeholder for 28 images
        alt: "Wander Nest Tiny House Exterior View",
      },
      {
        id: "img-wander-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/153.jpg", // Placeholder for 28 images
        alt: "Wander Nest Tiny House Exterior View",
      },
      {
        id: "img-wander-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/154.jpg", // Placeholder for 28 images
        alt: "Wander Nest Tiny House Exterior View",
      },
      {
        id: "img-wander-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/155.jpg", // Placeholder for 28 images
        alt: "Wander Nest Tiny House Exterior View",
      },
      {
        id: "img-wander-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/156.jpg", // Placeholder for 28 images
        alt: "Wander Nest Tiny House Exterior View",
      },
      {
        id: "img-wander-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/157.jpg", // Placeholder for 28 images
        alt: "Wander Nest Tiny House Exterior View",
      },
      {
        id: "img-wander-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/158.jpg", // Placeholder for 28 images
        alt: "Wander Nest Tiny House Exterior View",
      },
      {
        id: "img-wander-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/159.jpg", // Placeholder for 28 images
        alt: "Wander Nest Tiny House Exterior View",
      },
      {
        id: "img-wander-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/160.jpg", // Placeholder for 28 images
        alt: "Wander Nest Tiny House Exterior View",
      },
      {
        id: "img-wander-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/161.jpg", // Placeholder for 28 images
        alt: "Wander Nest Tiny House Exterior View",
      },
      {
        id: "img-wander-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/162.jpg", // Placeholder for 28 images
        alt: "Wander Nest Tiny House Exterior View",
      },
    ],
    features: {
      construction: {
        category: "Construction Features",
        items: [
          "Vaulted ceiling throughout",
          "2×4 exterior walls",
          '2×6 floor joists spaced 16" on center',
          "30# roof load capacity",
          "6/12 roof pitch on 11'2\" section",
          "4/12 pitch on 13'4\" section",
          "R-22 ceiling insulation",
          "R-13 wall insulation",
          "R-11 floor insulation",
          '5/8" tongue and groove floor decking',
          "7-year limited warranty",
        ],
      },
      exterior: {
        category: "Exterior Features",
        items: [
          "Sliding glass entry door",
          "Deluxe porch light",
          "Class A shingles",
          "Cemplank vertical siding",
          "Fascia and perforated soffit",
          'Low "E" dual glaze windows',
          '4" Cemplank trim',
        ],
      },
      interior: {
        category: "Interior Features",
        items: [
          "Tape and textured walls with rounded corners",
          'White 2-1/4" door case molding',
          '3" baseboard molding',
          '2" faux wood blinds',
          "Wood rods with shelves",
          "16 oz Shaw carpet with #6 rebond carpet pad",
          "Mirrored closet doors in bedroom",
          "Nightstand and dresser in bedroom",
        ],
      },
      utility: {
        category: "Utility & Safety",
        items: [
          "Gas forced air furnace",
          "Toe kick heat registers throughout",
          "Shutoff valves throughout",
          "50 AMP service with 25' power cord",
          "20-gallon electric water heater",
          "Exterior GFI receptacles",
          "Carbon monoxide detector",
          "Smoke detector",
          "Fire extinguisher",
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
            value: "Bank of drawers and lined overhead kitchen cabinets",
          },
          {
            label: "Countertops",
            value:
              'Granite counters with single eased edge, 4" granite backsplash',
          },
          {
            label: "Fixtures",
            value:
              "Brushed nickel single lever kitchen faucet, stainless steel sink",
          },
        ],
      },
    ],
    bathroomSpecs: [
      {
        category: "Bathroom Specifications",
        items: [
          {
            label: "Fixtures",
            value: "Brushed nickel faucets and hardware",
          },
          {
            label: "Shower",
            value:
              '36" or 48" shower with glass enclosure and granite backsplash',
          },
        ],
      },
    ],
    overview:
      "This expertly crafted tiny home combines quality construction with stylish amenities, ideal for those embracing a minimalist lifestyle. Features include vaulted ceilings, comprehensive insulation, and high-end finishes throughout.",
    warranty: {
      duration: "25 years",
      coverage: [
        "Free repairs for wear and tear due to technical faults",
        "Full replacement for severe damage",
        "Quality control inspection before shipping",
        "No-cost repairs for covered issues",
      ],
    },
    buyerProtection: {
      features: [
        "Transparent pricing with no hidden fees",
        "Straightforward return policy",
        "Secure payment processing",
        "Dedicated customer service support",
      ],
    },
    relatedProducts: ["th-001", "th-002", "th-003", "th-004", "th-005"],
  },

  {
    id: "th-007",
    slug: "399-sqft-tiny-house",
    name: "Modern Living",
    shortDescription: "Tiny House On Wheels, 1 Bed, 1 Bath – 399 sqft",
    price: 35000,
    downPayment: {
      full: 14000, // 40% of price
      financing: 11700,
    },
    monthlyPayment: 830,
    specifications: {
      bedrooms: 1,
      bathrooms: 1,
      squareFeet: 399,
      sections: {
        section1: {
          width: "11'2\"",
          roofPitch: "6/12",
        },
        section2: {
          width: "13'4\"",
          roofPitch: "4/12",
        },
      },
    },
    images: [
      {
        id: "img-modern-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/t25.jpg", // Placeholder for 11 images
        alt: "Modern Living Tiny House Exterior View",
      },
      {
        id: "img-modern-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/t24.jpg", // Placeholder for 11 images
        alt: "Modern Living Tiny House Exterior View",
      },
      {
        id: "img-modern-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/t26.jpg", // Placeholder for 11 images
        alt: "Modern Living Tiny House Exterior View",
      },

      {
        id: "img-modern-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/t27.jpg", // Placeholder for 11 images
        alt: "Modern Living Tiny House Exterior View",
      },

      {
        id: "img-modern-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/t28.jpg", // Placeholder for 11 images
        alt: "Modern Living Tiny House Exterior View",
      },

      {
        id: "img-modern-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/t29.jpg", // Placeholder for 11 images
        alt: "Modern Living Tiny House Exterior View",
      },

      {
        id: "img-modern-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/t30.jpg", // Placeholder for 11 images
        alt: "Modern Living Tiny House Exterior View",
      },

      {
        id: "img-modern-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/t31.jpg", // Placeholder for 11 images
        alt: "Modern Living Tiny House Exterior View",
      },
    ],
    features: {
      construction: {
        category: "Construction Features",
        items: [
          "Vaulted ceilings throughout",
          "2×4 exterior walls",
          '2×6 floor joists (16" on center)',
          "30# roof load capacity",
          "6/12 roof pitch on 11'2\" section",
          "4/12 pitch on 13'4\" section",
          "R-22 ceiling insulation",
          "R-13 wall insulation",
          "R-11 floor insulation",
          '5/8" tongue and groove floor decking',
          "7-year limited warranty",
        ],
      },
      exterior: {
        category: "Exterior Features",
        items: [
          "Sliding glass entry door",
          "Deluxe porch light",
          "Class A shingles",
          "Cemplank vertical siding",
          "Fascia and perforated soffit",
          'Low "E" dual glaze windows',
          '4" Cemplank window trim',
        ],
      },
      interior: {
        category: "Interior Features",
        items: [
          "Tape and textured walls with rounded corners",
          'White 2-1/4" door case molding',
          '3" baseboard molding',
          '2" faux wood blinds',
          "16 oz Shaw carpet with #6 rebond pad",
          "Mirrored closet doors in bedroom",
          "Nightstand and dresser included",
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
            value: "Bank of drawers and lined overhead kitchen cabinets",
          },
          {
            label: "Countertops",
            value:
              'Granite counters with single eased edge, 4" granite backsplash',
          },
          {
            label: "Fixtures",
            value:
              "Brushed nickel single lever kitchen faucet, stainless steel sink",
          },
        ],
      },
    ],
    bathroomSpecs: [
      {
        category: "Bathroom Specifications",
        items: [
          {
            label: "Fixtures",
            value: "Brushed nickel faucets and hardware",
          },
          {
            label: "Shower",
            value:
              '36" or 48" shower with glass enclosure and granite backsplash',
          },
        ],
      },
    ],
    overview:
      "This meticulously crafted tiny home combines durability and elegance, offering an inviting space that meets all your living needs. With 399 square feet of thoughtfully designed space, it features vaulted ceilings, comprehensive insulation, and high-end finishes throughout.",
    warranty: {
      duration: "25 years",
      coverage: [
        "Free repairs for wear and tear due to technical faults",
        "Full replacement for severe damage",
        "Quality control inspection before shipping",
        "No-cost repairs for covered issues",
      ],
    },
    buyerProtection: {
      features: [
        "Transparent pricing with no hidden fees",
        "Straightforward return policy",
        "Secure payment processing",
        "Dedicated customer service support",
      ],
    },
    relatedProducts: [
      "th-001",
      "th-002",
      "th-003",
      "th-004",
      "th-005",
      "th-006",
    ],
  },
  {
    id: "th-008",
    slug: "spacious-tiny-house",
    name: "Spacious Living",
    shortDescription: "Spacious 1 Bed, 1 Bath Tiny House On Wheels",
    price: 30000,
    downPayment: {
      full: 12000, // 40% of price
      financing: 10000,
    },
    monthlyPayment: 715,
    specifications: {
      bedrooms: 1,
      bathrooms: 1,
      eaves: {
        frontRear: '12"',
        sides: "nominal",
      },
      sections: {
        section1: {
          width: "11'2\"",
          roofPitch: "6/12",
        },
        section2: {
          width: "13'4\"",
          roofPitch: "4/12",
        },
      },
    },
    images: [
      {
        id: "img-spacious-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/s2.jpg", // Placeholder for 11 images
        alt: "Spacious Tiny House Exterior View",
      },
      {
        id: "img-spacious-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/s1.png", // Placeholder for 11 images
        alt: "Spacious Tiny House Exterior View",
      },
      {
        id: "img-spacious-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/s3.jpg", // Placeholder for 11 images
        alt: "Spacious Tiny House Exterior View",
      },
      {
        id: "img-spacious-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/s4.jpg", // Placeholder for 11 images
        alt: "Spacious Tiny House Exterior View",
      },
      {
        id: "img-spacious-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/s5.jpg", // Placeholder for 11 images
        alt: "Spacious Tiny House Exterior View",
      },
      {
        id: "img-spacious-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/s6.jpg", // Placeholder for 11 images
        alt: "Spacious Tiny House Exterior View",
      },
      {
        id: "img-spacious-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/s7.jpg", // Placeholder for 11 images
        alt: "Spacious Tiny House Exterior View",
      },
      {
        id: "img-spacious-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/s8.jpg", // Placeholder for 11 images
        alt: "Spacious Tiny House Exterior View",
      },
      {
        id: "img-spacious-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/s9.jpg", // Placeholder for 11 images
        alt: "Spacious Tiny House Exterior View",
      },
      {
        id: "img-spacious-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/s10.jpg", // Placeholder for 11 images
        alt: "Spacious Tiny House Exterior View",
      },
      {
        id: "img-spacious-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/s11.jpg", // Placeholder for 11 images
        alt: "Spacious Tiny House Exterior View",
      },
    ],
    features: {
      construction: {
        category: "Construction Features",
        items: [
          "Vaulted ceilings throughout",
          "2×4 exterior walls",
          '2×6 floor joists (16" on center)',
          "30# roof load capacity",
          '12" eaves at front and rear',
          "Nominal eaves on sides",
          "6/12 roof pitch on 11'2\" section",
          "4/12 pitch on 13'4\" section",
          "R-22 ceiling insulation",
          "R-13 wall insulation",
          "R-11 floor insulation",
          '5/8" tongue and groove floor decking',
          "7-year limited warranty",
        ],
      },
      exterior: {
        category: "Exterior Features",
        items: [
          "Sliding glass entry door",
          "Deluxe porch light",
          "Class A shingles",
          "Cemplank vertical siding",
          "Fascia and perforated soffit",
          'Low "E" dual glaze windows',
          '4" Cemplank window trim',
        ],
      },
      interior: {
        category: "Interior Features",
        items: [
          "Tape and textured walls with rounded corners",
          'White 2-1/4" door case molding',
          '3" baseboard molding',
          "Rocker light switches throughout",
          '2" faux wood blinds',
          "Wood rods and shelves",
          "16 oz Shaw carpet with #6 rebond pad",
          "Mirrored closet doors in bedroom",
          "Nightstand and dresser included",
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
            value:
              "Bank of drawers, lined overhead kitchen cabinets, cabinet above refrigerator",
          },
          {
            label: "Countertops",
            value:
              'Granite counters with single eased edge, 4" granite backsplash',
          },
          {
            label: "Fixtures",
            value:
              "Brushed nickel single lever kitchen faucet, stainless steel sink",
          },
        ],
      },
    ],
    bathroomSpecs: [
      {
        category: "Bathroom Specifications",
        items: [
          {
            label: "Fixtures",
            value: "Brushed nickel faucets and hardware",
          },
          {
            label: "Shower",
            value:
              '36" or 48" shower with glass enclosure and granite backsplash',
          },
        ],
      },
    ],
    overview:
      "This stunning tiny home is built with a focus on durability and comfort, making it the perfect retreat for those seeking a compact yet luxurious living space. Featuring vaulted ceilings, comprehensive insulation, and high-end finishes throughout, it combines style with practical living.",
    warranty: {
      duration: "25 years",
      coverage: [
        "Free repairs for wear and tear due to technical faults",
        "Full replacement for severe damage",
        "Quality control inspection before shipping",
        "No-cost repairs for covered issues",
      ],
    },
    buyerProtection: {
      features: [
        "Transparent pricing with no hidden fees",
        "Straightforward return policy",
        "Secure payment processing",
        "Dedicated customer service support",
      ],
    },
    relatedProducts: [
      "th-001",
      "th-002",
      "th-003",
      "th-004",
      "th-005",
      "th-006",
      "th-007",
    ],
  },
  {
    id: "th-009",
    slug: "modern-loft-tiny-house",
    name: "Modern Loft Living",
    shortDescription: "Modern 1 Bed, 1 Bath & Loft Tiny House On Wheels",
    price: 30000,
    downPayment: {
      full: 12000, // 40% of price
      financing: 10000,
    },
    monthlyPayment: 715,
    specifications: {
      bedrooms: 1,
      bathrooms: 1,
      additionalSpaces: ["Loft"],
      chassis: 'Full I-beam with transverse 2"x6" floor joists',
      hitch: "Detachable for transport",
    },
    images: [
      {
        id: "img-modern-loft-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/z1.jpg", // Placeholder for 10 images
        alt: "Modern Loft Tiny House Exterior View",
      },
      {
        id: "img-modern-loft-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/z2.jpg", // Placeholder for 10 images
        alt: "Modern Loft Tiny House Exterior View",
      },
      {
        id: "img-modern-loft-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/z3.jpg", // Placeholder for 10 images
        alt: "Modern Loft Tiny House Exterior View",
      },
      {
        id: "img-modern-loft-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/z4.jpg", // Placeholder for 10 images
        alt: "Modern Loft Tiny House Exterior View",
      },
      {
        id: "img-modern-loft-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/z5.jpg", // Placeholder for 10 images
        alt: "Modern Loft Tiny House Exterior View",
      },
      {
        id: "img-modern-loft-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/z6.jpg", // Placeholder for 10 images
        alt: "Modern Loft Tiny House Exterior View",
      },
      {
        id: "img-modern-loft-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/z7.jpg", // Placeholder for 10 images
        alt: "Modern Loft Tiny House Exterior View",
      },
      {
        id: "img-modern-loft-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/z8.jpg", // Placeholder for 10 images
        alt: "Modern Loft Tiny House Exterior View",
      },
      {
        id: "img-modern-loft-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/z9.jpg", // Placeholder for 10 images
        alt: "Modern Loft Tiny House Exterior View",
      },
    ],
    features: {
      interior: {
        category: "Interior Features",
        items: [
          "Tape and textured walls with rounded corners",
          "Flat ceiling in living room with stack windows",
          "Built-in CV-TV entertainment center",
          "White raised panel interior doors",
          '2" white blinds',
          "Linoleum flooring in main areas",
          "Shaw carpet in bedroom",
          '4" recessed can lighting throughout',
          "Smoke detector",
          "Fire extinguisher",
          "LP leak gas detector",
        ],
      },
      bedroom: {
        category: "Bedroom Features",
        items: [
          "Full-width wardrobe with sliding doors",
          "Under-wardrobe drawers",
          "Overhead cabinet (per floor plan)",
          "Egress window",
          "Mirrored wardrobe doors",
        ],
      },
      exterior: {
        category: "Exterior Features",
        items: [
          '"LT" front elevation',
          "Architectural shingled roof",
          "Painted OSB lap siding with underlayment",
          "Rear door with window and internal mini-blind",
          "Deadbolt security",
          'White vinyl framed, low "E" dual-glaze windows',
          "Sliding glass door",
        ],
      },
      systems: {
        category: "Systems & Utilities",
        items: [
          "PEX waterlines",
          "U.L. approved devices",
          "50 amp exterior main panel service",
          "20-gallon electric water heater (fast-recovery)",
          "R-14 floor insulation",
          "R-13 sidewall insulation",
          "R-33 blown roof insulation",
        ],
      },
    },
    kitchenSpecs: [
      {
        category: "Kitchen Specifications",
        items: [
          {
            label: "Appliances",
            value:
              '30" propane gas range (natural gas optional), 16 cu. ft. frost-free refrigerator',
          },
          {
            label: "Ventilation",
            value: '30" range hood',
          },
          {
            label: "Cabinetry",
            value:
              "Hardwood raised panel doors, upgraded pulls, double steel roller guide drawers",
          },
          {
            label: "Countertops",
            value: "Laminate with crescent edge and backsplash",
          },
          {
            label: "Fixtures",
            value:
              'Residential-grade "Kingston Brass" faucet, stainless steel sink',
          },
        ],
      },
    ],
    bathroomSpecs: [
      {
        category: "Bathroom Specifications",
        items: [
          {
            label: "Shower/Tub Options",
            value:
              '48" shower stall or 54" tub/shower combo (optional enclosure)',
          },
          {
            label: "Storage",
            value: "Recessed medicine cabinet",
          },
          {
            label: "Fixtures",
            value:
              'Satin towel bar, 36" tall lavy cabinet with square drop-in sink',
          },
          {
            label: "Countertops",
            value: "Laminate countertops",
          },
        ],
      },
    ],
    overview:
      "With a versatile loft and high-quality finishes throughout, this home is tailored for those who value minimalist living without sacrificing style. Featuring abundant natural light, modern amenities, and thoughtful storage solutions, it's perfect for comfortable tiny living.",
    warranty: {
      duration: "25 years",
      coverage: [
        "Free repairs for wear and tear due to technical faults",
        "Full replacement for severe damage",
        "Quality control inspection before shipping",
        "No-cost repairs for covered issues",
      ],
    },
    buyerProtection: {
      features: [
        "Transparent pricing with no hidden fees",
        "Straightforward return policy",
        "Secure payment processing",
        "Dedicated customer service support",
      ],
    },
    relatedProducts: [
      "th-001",
      "th-002",
      "th-003",
      "th-004",
      "th-005",
      "th-006",
      "th-007",
      "th-008",
    ],
  },
  {
    id: "th-010",
    slug: "roamlite-tiny-house",
    name: "RoamLite",
    shortDescription: "RoamLite Tiny House On Wheels",
    price: 35000,
    downPayment: {
      full: 14000, // 40% of price
      financing: 11000,
    },
    monthlyPayment: 835,
    specifications: {
      bedrooms: 1,
      bathrooms: 1,
      additionalSpaces: ["Loft", "Dining Bay"],
      dimensions: {
        deck: "8'x12'",
      },
      chassis: 'Full I-beam with transverse 2"x6" floor joists',
      hitch: "Detachable for transport",
    },
    images: [
      {
        id: "img-roamlite-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/q3.jpg",
        alt: "RoamLite Tiny House Exterior View",
      },
      {
        id: "img-roamlite-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/q1.jpg",
        alt: "RoamLite Tiny House Exterior View",
      },
      {
        id: "img-roamlite-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/q2.png",
        alt: "RoamLite Tiny House Exterior View",
      },
      {
        id: "img-roamlite-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/q4.png",
        alt: "RoamLite Tiny House Exterior View",
      },
      {
        id: "img-roamlite-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/q5.png",
        alt: "RoamLite Tiny House Exterior View",
      },
      {
        id: "img-roamlite-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/q6.png",
        alt: "RoamLite Tiny House Exterior View",
      },
      {
        id: "img-roamlite-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/q7.png",
        alt: "RoamLite Tiny House Exterior View",
      },
      {
        id: "img-roamlite-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/q8.png",
        alt: "RoamLite Tiny House Exterior View",
      },
      {
        id: "img-roamlite-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/q9.png",
        alt: "RoamLite Tiny House Exterior View",
      },
      {
        id: "img-roamlite-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/q10.png",
        alt: "RoamLite Tiny House Exterior View",
      },
      {
        id: "img-roamlite-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/q11.png",
        alt: "RoamLite Tiny House Exterior View",
      },
      {
        id: "img-roamlite-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/q12.png",
        alt: "RoamLite Tiny House Exterior View",
      },
      {
        id: "img-roamlite-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/q13.png",
        alt: "RoamLite Tiny House Exterior View",
      },
      {
        id: "img-roamlite-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/q14.png",
        alt: "RoamLite Tiny House Exterior View",
      },
      {
        id: "img-roamlite-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/q15.png",
        alt: "RoamLite Tiny House Exterior View",
      },
      {
        id: "img-roamlite-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/q16.png",
        alt: "RoamLite Tiny House Exterior View",
      },
    ],
    features: {
      interior: {
        category: "Interior Features",
        items: [
          "Smooth tape and textured walls with rounded corners",
          "Flat ceiling in living room with stack windows",
          "Built-in CV-TV entertainment center",
          "White raised panel interior doors",
          '2" white blinds throughout',
          "Linoleum flooring in kitchen, bathroom, and dining",
          "Shaw carpet with plush padding in bedroom",
          '4" recessed can lighting',
          "Smoke detector",
          "Fire extinguisher",
          "LP leak gas detector",
          "Optional dining room bay",
          "Pre-wired ceiling fan locations in living room and bedroom",
          "Dining room dimmer switch with 3-light chandelier",
        ],
      },
      exterior: {
        category: "Exterior Features",
        items: [
          '"LT" front elevation with pent and trap details',
          "Architectural shingled roof",
          "Painted OSB lap siding with OSB underlayment",
          "Rear door with window and internal mini-blind",
          "Deadbolt security",
          'White vinyl framed, low "E" dual-glaze windows',
          "Aluminum framed dual-glaze sliding glass door",
          'Front eave and 8" side overhangs',
          "Strategic exterior lighting placement",
        ],
      },
      systems: {
        category: "Systems & Utilities",
        items: [
          "PEX waterlines with low point drain",
          "U.L. approved devices",
          "50 amp exterior main panel service",
          "20-gallon electric water heater (fast-recovery)",
          "R-14 fiberglass floor insulation",
          "R-13 fiberglass sidewall insulation",
          "R-33 blown roof insulation",
        ],
      },
    },
    kitchenSpecs: [
      {
        category: "Kitchen Specifications",
        items: [
          {
            label: "Appliances",
            value:
              '30" propane gas range (natural gas optional), 16 cu. ft. double-door frost-free refrigerator',
          },
          {
            label: "Ventilation",
            value: '30" range hood',
          },
          {
            label: "Cabinetry",
            value:
              "Hardwood raised panel doors with finished bottoms, decorative molding, double steel roller guide drawers",
          },
          {
            label: "Countertops",
            value: "Laminate with crescent edge and single row backsplash",
          },
          {
            label: "Fixtures",
            value:
              'Residential-grade "Kingston Brass" faucet, stainless steel sink',
          },
        ],
      },
    ],
    bathroomSpecs: [
      {
        category: "Bathroom Specifications",
        items: [
          {
            label: "Shower/Tub Options",
            value:
              '48" shower stall or 54" tub/shower combo (optional enclosure)',
          },
          {
            label: "Storage",
            value: "Recessed medicine cabinet",
          },
          {
            label: "Fixtures",
            value:
              '"Kingston Brass" faucet, satin towel bar, 36" tall lavy cabinet with square drop-in sink',
          },
          {
            label: "Countertops",
            value: "Laminate countertops with optional ceramic tile backsplash",
          },
        ],
      },
    ],
    bedroomSpecs: [
      {
        category: "Bedroom Specifications",
        items: [
          {
            label: "Storage",
            value:
              "Full-width wardrobe with sliding doors and single drawer row",
          },
          {
            label: "Additional Storage",
            value: "Overhead cabinet (per floor plan)",
          },
          {
            label: "Windows",
            value: "Egress window, one set of mirrored wardrobe doors",
          },
        ],
      },
    ],
    overview:
      "This charming dwelling features a spacious layout that includes a versatile loft, making it the perfect sanctuary for individuals, couples, or small families. With its comprehensive amenities and thoughtful design, the RoamLite offers both comfort and mobility.",
    warranty: {
      duration: "25 years",
      coverage: [
        "Free repairs for wear and tear due to technical faults",
        "Full replacement for severe damage",
        "Quality control inspection before shipping",
        "No-cost repairs for covered issues",
      ],
    },
    buyerProtection: {
      features: [
        "Transparent pricing with no hidden fees",
        "Straightforward return policy",
        "Secure payment processing",
        "Dedicated customer service support",
      ],
    },
    relatedProducts: [
      "th-001",
      "th-002",
      "th-003",
      "th-004",
      "th-005",
      "th-006",
      "th-007",
      "th-008",
      "th-009",
    ],
  },
  {
    id: "th-011",
    slug: "modern-tiny-home-399sqft",
    name: "Modern Tiny Home",
    shortDescription:
      "Modern Tiny Home On Wheels, 1 Bed, 1 Bath and Loft – 399 sqft",
    price: 35000,
    downPayment: {
      full: 14000, // 40% of price
      financing: 11000,
    },
    monthlyPayment: 835,
    specifications: {
      bedrooms: 1,
      bathrooms: 1,
      additionalSpaces: ["Loft"],
      squareFootage: 399,
      dimensions: {
        deck: "8'x12'",
      },
      chassis: 'Full I-beam with transverse 2"x6" floor joists',
      hitch: "Detachable for transport",
      certification: "RVIA / ANSI 119.5 approved",
    },
    images: [
      {
        id: "img-modern-tiny-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/18-2-600x444.jpg",
        alt: "Modern Tiny Home Exterior View",
      },
      {
        id: "img-modern-tiny-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/17-2.jpg",
        alt: "Modern Tiny Home Exterior View",
      },
      {
        id: "img-modern-tiny-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/16-3.jpg",
        alt: "Modern Tiny Home Exterior View",
      },
      {
        id: "img-modern-tiny-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/15-3.jpg",
        alt: "Modern Tiny Home Exterior View",
      },
      {
        id: "img-modern-tiny-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/14-3.jpg",
        alt: "Modern Tiny Home Exterior View",
      },
      {
        id: "img-modern-tiny-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/14-3.jpg",
        alt: "Modern Tiny Home Exterior View",
      },
      {
        id: "img-modern-tiny-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/13-3.jpg",
        alt: "Modern Tiny Home Exterior View",
      },
      {
        id: "img-modern-tiny-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/12-3.jpg",
        alt: "Modern Tiny Home Exterior View",
      },
      {
        id: "img-modern-tiny-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/11-3.jpg",
        alt: "Modern Tiny Home Exterior View",
      },
      {
        id: "img-modern-tiny-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/10-3.jpg",
        alt: "Modern Tiny Home Exterior View",
      },
      {
        id: "img-modern-tiny-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/9-3.jpg",
        alt: "Modern Tiny Home Exterior View",
      },
      {
        id: "img-modern-tiny-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/7-3.jpg",
        alt: "Modern Tiny Home Exterior View",
      },
      {
        id: "img-modern-tiny-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/6-3.jpg",
        alt: "Modern Tiny Home Exterior View",
      },
      {
        id: "img-modern-tiny-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/5-3.jpg",
        alt: "Modern Tiny Home Exterior View",
      },
      {
        id: "img-modern-tiny-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/4-3.jpg",
        alt: "Modern Tiny Home Exterior View",
      },
      {
        id: "img-modern-tiny-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/3-3.jpg",
        alt: "Modern Tiny Home Exterior View",
      },
      {
        id: "img-modern-tiny-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/2-2.jpg",
        alt: "Modern Tiny Home Exterior View",
      },
      {
        id: "img-modern-tiny-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/19-1.jpg",
        alt: "Modern Tiny Home Exterior View",
      },
    ],
    features: {
      interior: {
        category: "Interior Features",
        items: [
          "Smooth tape and textured walls with rounded corners",
          "Flat ceiling in living room with stack windows",
          "Built-in CV-TV entertainment center",
          "White raised panel passage doors",
          '2" white blinds throughout',
          "Linoleum flooring in main living spaces",
          "Shaw carpet with padding in bedroom",
          '4" recessed can lighting',
          "Smoke detector",
          "Fire extinguisher",
          "LP leak gas detector",
          "Optional dining room bay",
          "Pre-wired ceiling fan locations in living room and bedroom",
          "Dining room dimmer switch with 3-light chandelier",
        ],
      },
      exterior: {
        category: "Exterior Features",
        items: [
          '"LT" front elevation with pent and trap details',
          "Architectural shingled roof",
          "Painted OSB lap siding with underlayment and wrap",
          "Rear door with window and internal mini-blind",
          "Deadbolt security",
          'White vinyl framed, low "E" dual-glaze windows',
          "Aluminum framed dual-glaze sliding glass door",
          'Front eave and 8" side overhangs',
          "Strategic exterior lighting placement",
        ],
      },
      construction: {
        category: "Construction Features",
        items: [
          "Full I-beam chassis construction",
          'Transverse 2"x6" floor joists',
          '2"x4" sidewalls spaced 16" O.C.',
          'Pre-engineered scissor trusses spaced 16" O.C.',
          "8'x12' high-density floor decking",
          "RVIA / ANSI 119.5 certified construction",
        ],
      },
      systems: {
        category: "Systems & Utilities",
        items: [
          "PEX waterlines with low point drain",
          "U.L. approved devices",
          "50 amp exterior main panel service",
          "20-gallon electric water heater (fast-recovery)",
          "R-14 fiberglass floor insulation",
          "R-13 fiberglass sidewall insulation",
          "R-33 blown roof insulation",
        ],
      },
    },
    kitchenSpecs: [
      {
        category: "Kitchen Specifications",
        items: [
          {
            label: "Appliances",
            value:
              '30" propane gas range (natural gas optional), 16 cu. ft. double-door frost-free refrigerator',
          },
          {
            label: "Ventilation",
            value: '30" range hood',
          },
          {
            label: "Cabinetry",
            value:
              "Hardwood raised panel doors with finished bottoms, decorative molding, double steel roller guide drawers",
          },
          {
            label: "Countertops",
            value: "Laminate with crescent edge and single row backsplash",
          },
          {
            label: "Fixtures",
            value:
              'Residential-grade "Kingston Brass" faucet, stainless steel sink',
          },
        ],
      },
    ],
    bathroomSpecs: [
      {
        category: "Bathroom Specifications",
        items: [
          {
            label: "Shower/Tub Options",
            value:
              '48" shower stall or 54" tub/shower combo (optional enclosure)',
          },
          {
            label: "Storage",
            value: "Recessed medicine cabinet",
          },
          {
            label: "Fixtures",
            value:
              '"Kingston Brass" faucet, satin towel bar and tissue holder, 36" tall lavy cabinet with square drop-in sink',
          },
          {
            label: "Countertops",
            value: "Laminate countertops with optional ceramic tile backsplash",
          },
        ],
      },
    ],
    bedroomSpecs: [
      {
        category: "Bedroom Specifications",
        items: [
          {
            label: "Storage",
            value:
              "Full-width wardrobe with sliding doors and single drawer row",
          },
          {
            label: "Additional Storage",
            value: "Overhead cabinet (per floor plan)",
          },
          {
            label: "Windows",
            value: "Egress window, one set of mirrored wardrobe doors",
          },
        ],
      },
    ],
    overview:
      "This meticulously crafted 399 square foot tiny home offers a perfect blend of style and functionality. With its spacious 1 bedroom, 1 bathroom layout and versatile loft space, it's ideal for those seeking a minimalist lifestyle without compromising on quality and comfort. The home features modern amenities throughout, from the gourmet kitchen to the tranquil bathroom oasis.",
    warranty: {
      duration: "25 years",
      coverage: [
        "Free repairs for wear and tear due to technical faults",
        "Full replacement for severe damage",
        "Quality control inspection before shipping",
        "No-cost repairs for covered issues",
      ],
    },
    buyerProtection: {
      features: [
        "Transparent pricing with no hidden fees",
        "Straightforward return policy",
        "Secure payment processing",
        "Dedicated customer service support",
      ],
    },
    relatedProducts: [
      "th-001",
      "th-002",
      "th-003",
      "th-004",
      "th-005",
      "th-006",
      "th-007",
      "th-008",
      "th-009",
      "th-010",
    ],
  },
  {
    id: "th-012",
    slug: "modern-tiny-home-loft",
    name: "Modern Tiny Home",
    shortDescription: "1 Bed, 1 Bath & Loft Modern Tiny Home On Wheels",
    price: 30000,
    downPayment: {
      full: 12000, // 40% of price
      financing: 9000,
    },
    monthlyPayment: 715,
    specifications: {
      bedrooms: 1,
      bathrooms: 1,
      additionalSpaces: ["Loft"],
      dimensions: {
        deck: "8'x12'",
      },
      chassis: 'Full I-beam with transverse 2"x6" floor joists',
      hitch: "Detachable for transport",
    },
    images: [
      {
        id: "img-modern-tiny-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/36.jpg",
        alt: "Modern Tiny Home Exterior View",
      },
      {
        id: "img-modern-tiny-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/35.jpg",
        alt: "Modern Tiny Home Exterior View",
      },
      {
        id: "img-modern-tiny-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/34.jpg",
        alt: "Modern Tiny Home Exterior View",
      },
      {
        id: "img-modern-tiny-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/33.jpg",
        alt: "Modern Tiny Home Exterior View",
      },
      {
        id: "img-modern-tiny-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/31.jpg",
        alt: "Modern Tiny Home Exterior View",
      },
      {
        id: "img-modern-tiny-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/30.jpg",
        alt: "Modern Tiny Home Exterior View",
      },
      {
        id: "img-modern-tiny-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/28.jpg",
        alt: "Modern Tiny Home Exterior View",
      },
      {
        id: "img-modern-tiny-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/27.jpg",
        alt: "Modern Tiny Home Exterior View",
      },
      {
        id: "img-modern-tiny-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/26.jpg",
        alt: "Modern Tiny Home Exterior View",
      },
      {
        id: "img-modern-tiny-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/25.jpg",
        alt: "Modern Tiny Home Exterior View",
      },
      {
        id: "img-modern-tiny-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/24-1.jpg",
        alt: "Modern Tiny Home Exterior View",
      },
      {
        id: "img-modern-tiny-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/23-1.jpg",
        alt: "Modern Tiny Home Exterior View",
      },
      {
        id: "img-modern-tiny-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/22-2.jpg",
        alt: "Modern Tiny Home Exterior View",
      },
      {
        id: "img-modern-tiny-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/21-1.jpg",
        alt: "Modern Tiny Home Exterior View",
      },
    ],
    features: {
      interior: {
        category: "Interior Features",
        items: [
          "Smooth tape and textured walls with rounded corners",
          "Flat ceiling in living room with stack windows",
          "Built-in CV-TV entertainment center",
          "White raised panel interior passage doors",
          '2" white blinds throughout',
          "Linoleum flooring in living areas",
          "Shaw carpeting with plush padding and tack strip in bedroom",
          '4" recessed can lighting',
          "Smoke detector",
          "Fire extinguisher",
          "LP leak gas detector",
          "Optional dining room bay",
          "Pre-wired ceiling fan locations in living room and bedroom",
          "Dining room dimmer switch with 3-light chandelier",
        ],
      },
      exterior: {
        category: "Exterior Features",
        items: [
          '"LT" front elevation with pent and trap details',
          "Architectural shingled roof",
          "Painted OSB lap siding with underlayment and wrap",
          "Rear door with window and internal mini-blind",
          "Deadbolt security",
          'White vinyl framed, low "E" dual-glaze windows',
          "Aluminum framed dual-glaze sliding glass door",
          'Front eave and 8" side overhangs',
          "Strategic exterior lighting placement",
        ],
      },
      construction: {
        category: "Construction Features",
        items: [
          "Full I-beam chassis construction",
          'Transverse 2"x6" floor joists',
          "High-density floor decking (8'x12')",
          "Detachable hitch system",
        ],
      },
      systems: {
        category: "Systems & Utilities",
        items: [
          "PEX waterlines with low point drain",
          "U.L. approved devices",
          "50 amp exterior main panel service",
          "20-gallon electric water heater (fast-recovery)",
          "R-14 fiberglass floor insulation",
          "R-13 fiberglass sidewall insulation",
          "R-33 blown roof insulation",
        ],
      },
    },
    kitchenSpecs: [
      {
        category: "Kitchen Specifications",
        items: [
          {
            label: "Appliances",
            value:
              '30" propane gas range (natural gas optional), 16 cu. ft. double-door frost-free refrigerator',
          },
          {
            label: "Ventilation",
            value: '30" range hood',
          },
          {
            label: "Cabinetry",
            value:
              "Hardwood raised panel doors with finished bottoms, decorative molding, double steel roller guide drawers",
          },
          {
            label: "Countertops",
            value: "Laminate with crescent edge and single row backsplash",
          },
          {
            label: "Fixtures",
            value:
              'Residential-grade "Kingston Brass" faucet, stainless steel sink',
          },
        ],
      },
    ],
    bathroomSpecs: [
      {
        category: "Bathroom Specifications",
        items: [
          {
            label: "Shower/Tub Options",
            value:
              '48" shower stall or 54" tub/shower combo (optional enclosure)',
          },
          {
            label: "Storage",
            value: "Recessed medicine cabinet",
          },
          {
            label: "Fixtures",
            value:
              '"Kingston Brass" faucet, satin towel bar and tissue holder, 36" tall lavy cabinet with square drop-in sink',
          },
          {
            label: "Countertops",
            value: "Laminate countertops with optional ceramic tile backsplash",
          },
        ],
      },
    ],
    bedroomSpecs: [
      {
        category: "Bedroom Specifications",
        items: [
          {
            label: "Storage",
            value:
              "Full-width wardrobe with sliding doors and single drawer row",
          },
          {
            label: "Additional Storage",
            value: "Overhead cabinet (per floor plan)",
          },
          {
            label: "Windows",
            value: "Egress window, one set of mirrored wardrobe doors",
          },
        ],
      },
    ],
    overview:
      "This thoughtfully designed tiny home offers the perfect blend of comfort and style. Featuring a spacious 1 bedroom, 1 bathroom layout with a versatile loft space, it's ideal for those seeking a minimalist lifestyle without compromising on quality. Every detail has been carefully crafted to enhance your living experience.",
    warranty: {
      duration: "25 years",
      coverage: [
        "Free repairs for wear and tear due to technical faults",
        "Full replacement for severe damage",
        "Quality control inspection before shipping",
        "No-cost repairs for covered issues",
      ],
    },
    buyerProtection: {
      features: [
        "Transparent pricing with no hidden fees",
        "Straightforward return policy",
        "Secure payment processing",
        "Dedicated customer service support",
      ],
    },
    relatedProducts: [
      "th-001",
      "th-002",
      "th-003",
      "th-004",
      "th-005",
      "th-006",
      "th-007",
      "th-008",
      "th-009",
      "th-010",
      "th-011",
    ],
  },
  {
    id: "th-013",
    slug: "fully-furnished-tiny-home-400sqft",
    name: "Fully Furnished Tiny Home",
    shortDescription:
      "Fully Furnished Tiny Home With 1 Bed, 1 Bath & Loft – 400 sqft",
    price: 37000,
    downPayment: {
      full: 14800, // 40% of price
      financing: 11100,
    },
    monthlyPayment: 880,
    specifications: {
      bedrooms: 1,
      bathrooms: 1,
      additionalSpaces: ["Loft"],
      squareFootage: 400,
      dimensions: {
        wallHeight: '114"',
        overhangs: '12" front and rear',
      },
      construction: {
        frame: '10" steel I-beam',
        floors: '2x6, 16" on center',
        decking: '5/8" tongue and groove OSB',
      },
    },
    images: [
      {
        id: "img-furnished-tiny-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/1-2-600x401.jpg", // Placeholder for 22 images
        alt: "Fully Furnished Tiny Home Exterior View",
      },
      {
        id: "img-furnished-tiny-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/2-1.jpg", // Placeholder for 22 images
        alt: "Fully Furnished Tiny Home Exterior View",
      },
      {
        id: "img-furnished-tiny-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/3-2.jpg", // Placeholder for 22 images
        alt: "Fully Furnished Tiny Home Exterior View",
      },
      {
        id: "img-furnished-tiny-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/4-2.jpg", // Placeholder for 22 images
        alt: "Fully Furnished Tiny Home Exterior View",
      },
      {
        id: "img-furnished-tiny-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/5-2.jpg", // Placeholder for 22 images
        alt: "Fully Furnished Tiny Home Exterior View",
      },
      {
        id: "img-furnished-tiny-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/6-2.jpg", // Placeholder for 22 images
        alt: "Fully Furnished Tiny Home Exterior View",
      },
      {
        id: "img-furnished-tiny-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/7-2.jpg", // Placeholder for 22 images
        alt: "Fully Furnished Tiny Home Exterior View",
      },
      {
        id: "img-furnished-tiny-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/8-2.jpg", // Placeholder for 22 images
        alt: "Fully Furnished Tiny Home Exterior View",
      },
      {
        id: "img-furnished-tiny-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/9-2.jpg", // Placeholder for 22 images
        alt: "Fully Furnished Tiny Home Exterior View",
      },
      {
        id: "img-furnished-tiny-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/10-2.jpg", // Placeholder for 22 images
        alt: "Fully Furnished Tiny Home Exterior View",
      },
      {
        id: "img-furnished-tiny-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/11-2.jpg", // Placeholder for 22 images
        alt: "Fully Furnished Tiny Home Exterior View",
      },
      {
        id: "img-furnished-tiny-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/12-2.jpg", // Placeholder for 22 images
        alt: "Fully Furnished Tiny Home Exterior View",
      },
      {
        id: "img-furnished-tiny-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/13-2.jpg", // Placeholder for 22 images
        alt: "Fully Furnished Tiny Home Exterior View",
      },
      {
        id: "img-furnished-tiny-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/14-2.jpg", // Placeholder for 22 images
        alt: "Fully Furnished Tiny Home Exterior View",
      },
      {
        id: "img-furnished-tiny-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/15-2.jpg", // Placeholder for 22 images
        alt: "Fully Furnished Tiny Home Exterior View",
      },
      {
        id: "img-furnished-tiny-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/16-2.jpg", // Placeholder for 22 images
        alt: "Fully Furnished Tiny Home Exterior View",
      },
      {
        id: "img-furnished-tiny-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/17-1.jpg", // Placeholder for 22 images
        alt: "Fully Furnished Tiny Home Exterior View",
      },
      {
        id: "img-furnished-tiny-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/18-1.jpg", // Placeholder for 22 images
        alt: "Fully Furnished Tiny Home Exterior View",
      },
      {
        id: "img-furnished-tiny-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/19.jpg", // Placeholder for 22 images
        alt: "Fully Furnished Tiny Home Exterior View",
      },
      {
        id: "img-furnished-tiny-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/20-1.jpg", // Placeholder for 22 images
        alt: "Fully Furnished Tiny Home Exterior View",
      },
      {
        id: "img-furnished-tiny-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/22-1.jpg", // Placeholder for 22 images
        alt: "Fully Furnished Tiny Home Exterior View",
      },
      {
        id: "img-furnished-tiny-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/Shadow-Creek.png", // Placeholder for 22 images
        alt: "Fully Furnished Tiny Home Exterior View",
      },
    ],
    features: {
      interior: {
        category: "Interior Features",
        items: [
          "Flat ceiling layout",
          "Ceiling fan with light in living area",
          "Reading lights in bedroom",
          "Nightstands included",
          "Tape and texture painted walls",
          "Rounded corner drywall",
          "3-panel doors with 150 lb. hinges",
          "Brushed chrome doorknobs",
          '2" faux blinds throughout',
          "Elements vinyl tile flooring",
          "15 oz. carpet in loft",
        ],
      },
      exterior: {
        category: "Exterior Features",
        items: [
          "Smart panel siding with two color choices",
          "Composition shingle roof",
          '12" front and rear overhangs',
          "Trim on all windows and doors",
          "Exterior lights at all entrances",
          "Vinyl Low-E windows",
        ],
      },
      systems: {
        category: "Systems & Utilities",
        items: [
          "PEX plumbing systems",
          "100 Amp electrical with copper wiring",
          "R-22 roof insulation",
          "R-11 wall insulation",
          "R-11 floor insulation",
        ],
      },
    },
    kitchenSpecs: [
      {
        category: "Kitchen Specifications",
        items: [
          {
            label: "Appliances",
            value: "16' double-door refrigerator, 30\" gas range",
          },
          {
            label: "Ventilation",
            value: '30" range hood with fan and light',
          },
          {
            label: "Cabinetry",
            value:
              '42" large overhead cabinets with hidden hinges and adjustable shelves',
          },
          {
            label: "Countertops",
            value: "High-pressure laminate with crescent edge",
          },
          {
            label: "Backsplash",
            value: "Full ceramic tile",
          },
          {
            label: "Sink",
            value: "Stainless steel with single-lever faucet and sprayer",
          },
        ],
      },
    ],
    bathroomSpecs: [
      {
        category: "Bathroom Specifications",
        items: [
          {
            label: "Shower",
            value: "One-piece fiberglass shower",
          },
          {
            label: "Toilet",
            value: "Elongated toilet",
          },
          {
            label: "Sink",
            value: "China sink with single-lever faucet",
          },
          {
            label: "Countertops",
            value: "Laminate with crescent edge",
          },
          {
            label: "Backsplash",
            value: "Ceramic tile",
          },
        ],
      },
    ],
    loftSpecs: [
      {
        category: "Loft Specifications",
        items: [
          {
            label: "Capacity",
            value: "Accommodates two single beds",
          },
          {
            label: "Flooring",
            value: "15 oz. carpet",
          },
        ],
      },
    ],
    overview:
      "This meticulously crafted 400 square foot tiny home offers the perfect blend of comfort and functionality. Featuring a spacious 1 bedroom, 1 bathroom layout with a versatile loft that can transform into a second bedroom, it's ideal for singles, couples, or small families. Every inch is maximized without sacrificing style or quality.",
    warranty: {
      duration: "25 years",
      coverage: [
        "Free repairs for wear and tear due to technical faults",
        "Full replacement for severe damage",
        "Quality control inspection before shipping",
        "No-cost repairs for covered issues",
      ],
    },
    buyerProtection: {
      features: [
        "Transparent pricing with no hidden fees",
        "Straightforward return policy",
        "Secure payment processing",
        "Dedicated customer service support",
      ],
    },
    relatedProducts: [
      "th-001",
      "th-002",
      "th-003",
      "th-004",
      "th-005",
      "th-006",
      "th-007",
      "th-008",
      "th-009",
      "th-010",
      "th-011",
      "th-012",
    ],
  },
  {
    id: "th-014",
    slug: "399sqft-tiny-home-on-wheels",
    name: "399 sqft Tiny Home On Wheels",
    shortDescription: "1 Bed, 2 Bath 399 sqft Tiny Home On Wheels",
    price: 35000,
    downPayment: {
      full: 14000, // 40% of price
      financing: 10500,
    },
    monthlyPayment: 833,
    specifications: {
      bedrooms: 1,
      bathrooms: 2,
      squareFootage: 399,
      construction: {
        frame: '10" steel I-beam',
        floors: '2x6, 16" on center',
        decking: '5/8" tongue and groove OSB',
      },
    },
    images: [
      {
        id: "img-399tiny-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/5-1-600x418.jpg",
        alt: "399 sqft Tiny Home On Wheels Exterior View",
      },
      {
        id: "img-399tiny-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/1-1.jpg",
        alt: "399 sqft Tiny Home On Wheels Exterior View",
      },
      {
        id: "img-399tiny-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/24.jpg",
        alt: "399 sqft Tiny Home On Wheels Exterior View",
      },
      {
        id: "img-399tiny-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/23.jpg",
        alt: "399 sqft Tiny Home On Wheels Exterior View",
      },
      {
        id: "img-399tiny-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/22.jpg",
        alt: "399 sqft Tiny Home On Wheels Exterior View",
      },
      {
        id: "img-399tiny-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/20.jpg",
        alt: "399 sqft Tiny Home On Wheels Exterior View",
      },
      {
        id: "img-399tiny-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/21.jpg",
        alt: "399 sqft Tiny Home On Wheels Exterior View",
      },
      {
        id: "img-399tiny-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/17.jpg",
        alt: "399 sqft Tiny Home On Wheels Exterior View",
      },
      {
        id: "img-399tiny-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/18.jpg",
        alt: "399 sqft Tiny Home On Wheels Exterior View",
      },
      {
        id: "img-399tiny-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/16-1.jpg",
        alt: "399 sqft Tiny Home On Wheels Exterior View",
      },
      {
        id: "img-399tiny-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/14-1.jpg",
        alt: "399 sqft Tiny Home On Wheels Exterior View",
      },
      {
        id: "img-399tiny-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/15-1.jpg",
        alt: "399 sqft Tiny Home On Wheels Exterior View",
      },
      {
        id: "img-399tiny-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/13-1.jpg",
        alt: "399 sqft Tiny Home On Wheels Exterior View",
      },
      {
        id: "img-399tiny-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/11-1.jpg",
        alt: "399 sqft Tiny Home On Wheels Exterior View",
      },
      {
        id: "img-399tiny-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/9-1.jpg",
        alt: "399 sqft Tiny Home On Wheels Exterior View",
      },
      {
        id: "img-399tiny-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/8-1.jpg",
        alt: "399 sqft Tiny Home On Wheels Exterior View",
      },
      {
        id: "img-399tiny-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/7-1.jpg",
        alt: "399 sqft Tiny Home On Wheels Exterior View",
      },
      {
        id: "img-399tiny-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/2.png",
        alt: "399 sqft Tiny Home On Wheels Exterior View",
      },
    ],
    features: {
      interior: {
        category: "Interior Features",
        items: [
          "Vaulted ceilings throughout",
          "Tape and texture painted walls",
          "Rounded drywall corners",
          "Brushed chrome doorknobs",
          "White beveled residential door trim",
          "Wood closet shelves and rods",
          "Lined cabinet interiors",
          "Vinyl Low-E windows",
        ],
      },
      exterior: {
        category: "Exterior Features",
        items: [
          "Smart panel siding with two color choices",
          "Composition shingle roof",
          "Trim on all windows and doors",
          "Exterior lights at all entrances",
        ],
      },
      systems: {
        category: "Systems & Utilities",
        items: [
          "R-22 roof insulation",
          "R-11 wall insulation",
          "R-11 floor insulation",
          "Energy-efficient design",
        ],
      },
    },
    kitchenSpecs: [
      {
        category: "Kitchen Specifications",
        items: [
          {
            label: "Appliances",
            value: "16' double-door refrigerator, 30\" gas range",
          },
          {
            label: "Cabinetry",
            value: "Factory-built cabinets with hidden hinges",
          },
          {
            label: "Countertops",
            value: "High-pressure laminate with crescent edge",
          },
          {
            label: "Backsplash",
            value: "Ceramic tile",
          },
          {
            label: "Sink",
            value: "Stainless steel with single-lever faucet",
          },
        ],
      },
    ],
    bathroomSpecs: [
      {
        category: "Bathroom Specifications",
        items: [
          {
            label: "Quantity",
            value: "Two full bathrooms",
          },
          {
            label: "Shower",
            value: "One-piece fiberglass shower in each bathroom",
          },
          {
            label: "Toilet",
            value: "Elongated toilets",
          },
          {
            label: "Sink",
            value: "China sinks with single-lever faucets",
          },
          {
            label: "Countertops",
            value: "Laminate with crescent edge",
          },
          {
            label: "Backsplash",
            value: "Ceramic tile",
          },
        ],
      },
    ],
    overview:
      "Welcome to your new sanctuary—a stylish 399 sqft tiny home that redefines modern living. This meticulously designed one-bedroom, two-bathroom abode combines comfort, convenience, and elegance. Built on a robust steel frame with high-quality materials throughout, this home is perfect for those seeking a luxurious yet efficient living space.",
    warranty: {
      duration: "25 years",
      coverage: [
        "Free repairs for wear and tear due to technical faults",
        "Full replacement for severe damage",
        "Quality control inspection before shipping",
        "No-cost repairs for covered issues",
      ],
    },
    buyerProtection: {
      features: [
        "Transparent pricing with no hidden fees",
        "Straightforward return policy",
        "Secure payment processing",
        "Dedicated customer service support",
      ],
    },
    relatedProducts: [
      "th-001",
      "th-002",
      "th-003",
      "th-004",
      "th-005",
      "th-006",
      "th-007",
      "th-008",
      "th-009",
      "th-010",
      "th-011",
      "th-012",
      "th-013",
    ],
  },
  {
    id: "th-015",
    slug: "400sqft-2bed-tiny-home",
    name: "2 Beds, 1 Bath Tiny Home",
    shortDescription: "2 Beds, 1 Bath Tiny Home - 400 sqft",
    price: 38000,
    downPayment: {
      full: 15200, // 40% of price
      financing: 11400,
    },
    monthlyPayment: 902,
    specifications: {
      bedrooms: 2,
      bathrooms: 1,
      squareFootage: 400,
      dimensions: {
        wallHeight: '96"', // 8' side walls
      },
      construction: {
        frame: '10" steel I-beam',
        floors: '2x6, 16" on center',
        decking: "5/8\" 4'x8' tongue and groove OSB",
      },
    },
    images: [
      {
        id: "img-400-2bed-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/6.jpeg", // Placeholder for 12 images
        alt: "2 Beds, 1 Bath Tiny Home Exterior View",
      },
      {
        id: "img-400-2bed-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/1.png", // Placeholder for 12 images
        alt: "2 Beds, 1 Bath Tiny Home Exterior View",
      },
      {
        id: "img-400-2bed-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/13.jpeg", // Placeholder for 12 images
        alt: "2 Beds, 1 Bath Tiny Home Exterior View",
      },
      {
        id: "img-400-2bed-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/12.jpeg", // Placeholder for 12 images
        alt: "2 Beds, 1 Bath Tiny Home Exterior View",
      },
      {
        id: "img-400-2bed-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/11.jpeg", // Placeholder for 12 images
        alt: "2 Beds, 1 Bath Tiny Home Exterior View",
      },
      {
        id: "img-400-2bed-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/10.jpeg", // Placeholder for 12 images
        alt: "2 Beds, 1 Bath Tiny Home Exterior View",
      },
      {
        id: "img-400-2bed-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/9.jpeg", // Placeholder for 12 images
        alt: "2 Beds, 1 Bath Tiny Home Exterior View",
      },
      {
        id: "img-400-2bed-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/8.jpeg", // Placeholder for 12 images
        alt: "2 Beds, 1 Bath Tiny Home Exterior View",
      },
      {
        id: "img-400-2bed-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/7.jpeg", // Placeholder for 12 images
        alt: "2 Beds, 1 Bath Tiny Home Exterior View",
      },
      {
        id: "img-400-2bed-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/6.jpeg", // Placeholder for 12 images
        alt: "2 Beds, 1 Bath Tiny Home Exterior View",
      },
      {
        id: "img-400-2bed-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/5.jpeg", // Placeholder for 12 images
        alt: "2 Beds, 1 Bath Tiny Home Exterior View",
      },
      {
        id: "img-400-2bed-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/4.jpeg", // Placeholder for 12 images
        alt: "2 Beds, 1 Bath Tiny Home Exterior View",
      },
      {
        id: "img-400-2bed-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/3.jpeg", // Placeholder for 12 images
        alt: "2 Beds, 1 Bath Tiny Home Exterior View",
      },
      {
        id: "img-400-2bed-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/2.jpeg", // Placeholder for 12 images
        alt: "2 Beds, 1 Bath Tiny Home Exterior View",
      },
    ],
    features: {
      interior: {
        category: "Interior Features",
        items: [
          "Vaulted ceiling design",
          "Tape and texture painted walls",
          "Rounded corners on drywall",
          "3-panel interior doors with 150 lb. hinges",
          "Elements vinyl tile flooring",
          "15oz. carpet with rebond pad in loft units",
          "Wood closet shelves and rods",
          "Lined cabinet interiors",
          "Adjustable shelves in overhead cabinets",
        ],
      },
      exterior: {
        category: "Exterior Features",
        items: [
          "Smart panel siding",
          "Two color options available",
          "Composition shingle roof",
          "Trim on all exterior windows and doors",
          "Exterior lights at all entrances",
          "Vinyl Low-E windows",
        ],
      },
      systems: {
        category: "Systems & Utilities",
        items: [
          "100 amp electric service with copper wires",
          "PEX plumbing system",
          "20-gallon electric water heater",
          "R-22 roof insulation",
          "R-11 wall insulation",
          "R-11 floor insulation",
        ],
      },
    },
    kitchenSpecs: [
      {
        category: "Kitchen Specifications",
        items: [
          {
            label: "Appliances",
            value: "16' double door refrigerator, 30\" gas range",
          },
          {
            label: "Ventilation",
            value: '30" range hood with fan and light',
          },
          {
            label: "Cabinetry",
            value: "Factory-built cabinets with hidden hinges",
          },
          {
            label: "Countertops",
            value: "High-pressure laminate with crescent edge",
          },
          {
            label: "Backsplash",
            value: "Ceramic tile",
          },
        ],
      },
    ],
    overview:
      "Step into a world of modern living with this expertly crafted 400 sqft tiny home, featuring two bedrooms and one bathroom. Built with durability and style in mind, this home offers the perfect blend of comfort and functionality. The thoughtful design includes vaulted ceilings, modern amenities, and energy-efficient features, making it ideal for small families or those seeking a spacious tiny living solution.",
    warranty: {
      duration: "25 years",
      coverage: [
        "Free repairs for wear and tear due to technical faults",
        "Full replacement for severe damage",
        "Quality control inspection before shipping",
        "No-cost repairs for covered issues",
      ],
    },
    buyerProtection: {
      features: [
        "Transparent pricing with no hidden fees",
        "Straightforward return policy",
        "Secure payment processing",
        "Dedicated customer service support",
      ],
    },
    relatedProducts: [
      "th-001",
      "th-002",
      "th-003",
      "th-004",
      "th-005",
      "th-006",
      "th-007",
      "th-008",
      "th-009",
      "th-010",
      "th-011",
      "th-012",
      "th-013",
      "th-014",
    ],
  },
  {
    id: "th-016",
    slug: "399sqft-mobile-tiny-home",
    name: "1 Bed, 1 Bath Spacious Mobile Tiny Home",
    shortDescription:
      "399 sqft Mobile Tiny Home with Bay Window and French Door",
    price: 35000,
    downPayment: {
      full: 14000, // 40% of price
      financing: 10500,
    },
    monthlyPayment: 833,
    specifications: {
      bedrooms: 1,
      bathrooms: 1,
      squareFootage: 399,
      construction: {
        foundation: "Rust-resistant steel frame",
        mobility: "Mobile/Transportable design",
      },
    },
    images: [
      {
        id: "img-399mobile-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/6.jpg",
        alt: "399 sqft Mobile Tiny Home Exterior View",
      },
      {
        id: "img-399mobile-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/4.jpg",
        alt: "399 sqft Mobile Tiny Home Exterior View",
      },
      {
        id: "img-399mobile-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/3.jpg",
        alt: "399 sqft Mobile Tiny Home Exterior View",
      },
      {
        id: "img-399mobile-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/2.jpg",
        alt: "399 sqft Mobile Tiny Home Exterior View",
      },
      {
        id: "img-399mobile-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/1.jpg",
        alt: "399 sqft Mobile Tiny Home Exterior View",
      },
      {
        id: "img-399mobile-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/16.jpg",
        alt: "399 sqft Mobile Tiny Home Exterior View",
      },
      {
        id: "img-399mobile-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/15.jpg",
        alt: "399 sqft Mobile Tiny Home Exterior View",
      },
      {
        id: "img-399mobile-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/14.jpg",
        alt: "399 sqft Mobile Tiny Home Exterior View",
      },
      {
        id: "img-399mobile-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/13.jpg",
        alt: "399 sqft Mobile Tiny Home Exterior View",
      },
      {
        id: "img-399mobile-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/12.jpg",
        alt: "399 sqft Mobile Tiny Home Exterior View",
      },
      {
        id: "img-399mobile-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/11.jpg",
        alt: "399 sqft Mobile Tiny Home Exterior View",
      },
      {
        id: "img-399mobile-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/10.jpg",
        alt: "399 sqft Mobile Tiny Home Exterior View",
      },
      {
        id: "img-399mobile-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/9.jpg",
        alt: "399 sqft Mobile Tiny Home Exterior View",
      },
      {
        id: "img-399mobile-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/8.jpg",
        alt: "399 sqft Mobile Tiny Home Exterior View",
      },
      {
        id: "img-399mobile-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/7.jpg",
        alt: "399 sqft Mobile Tiny Home Exterior View",
      },
      {
        id: "img-399mobile-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/6.jpg",
        alt: "399 sqft Mobile Tiny Home Exterior View",
      },
      {
        id: "img-399mobile-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/5.jpg",
        alt: "399 sqft Mobile Tiny Home Exterior View",
      },
    ],
    features: {
      interior: {
        category: "Interior Features",
        items: [
          "Stunning bay window with natural lighting",
          "Elegant French door entry",
          "L-shaped kitchen layout",
          "Cozy living area with single couch",
          "Comfortable bedroom space",
          "Modern bathroom with sliding glass shower",
          "Washer and dryer hookups",
          "Open concept design",
        ],
      },
      exterior: {
        category: "Exterior Features",
        items: [
          "Charming front porch",
          "Architectural bay window",
          "French door entrance",
          "Durable steel construction",
          "Mobile-ready design",
        ],
      },
      kitchen: {
        category: "Kitchen Features",
        items: [
          "L-shaped efficient layout",
          "Full-size refrigerator",
          "Gas cooker",
          "Built-in microwave",
          "Maximized counter space",
          "Ample storage solutions",
        ],
      },
    },
    bathroomSpecs: [
      {
        category: "Bathroom Specifications",
        items: [
          {
            label: "Fixtures",
            value: "Modern toilet, sleek sink, sliding glass door shower",
          },
          {
            label: "Design",
            value: "Contemporary styling with practical layout",
          },
        ],
      },
    ],
    laundrySpecs: [
      {
        category: "Laundry Features",
        items: [
          {
            label: "Appliance Hookups",
            value: "Washer and dryer combo ready",
          },
          {
            label: "Location",
            value: "Dedicated laundry area",
          },
        ],
      },
    ],
    overview:
      "Step into a world of cozy living with this exquisite 399 sqft tiny home, featuring thoughtful design elements that enhance both comfort and style. The stunning bay window, elegant French door, and functional L-shaped kitchen create a perfect balance of aesthetics and practicality. This beautifully crafted mobile home is ideal for those who appreciate fine details while maintaining the flexibility of a mobile lifestyle.",
    warranty: {
      duration: "25 years",
      coverage: [
        "Free repairs for wear and tear due to technical faults",
        "Full replacement for severe damage",
        "Quality control inspection before shipping",
        "No-cost repairs for covered issues",
      ],
    },
    buyerProtection: {
      features: [
        "Transparent pricing with no hidden fees",
        "Straightforward return policy",
        "Secure payment processing",
        "Dedicated customer service support",
      ],
    },
    highlights: [
      "Bay window feature",
      "French door entrance",
      "L-shaped kitchen",
      "Built-in laundry facilities",
      "Front porch",
      "Mobile-ready design",
    ],
    relatedProducts: [
      "th-001",
      "th-002",
      "th-003",
      "th-004",
      "th-005",
      "th-006",
      "th-007",
      "th-008",
      "th-009",
      "th-010",
      "th-011",
      "th-012",
      "th-013",
      "th-014",
      "th-015",
    ],
  },
  {
    id: "th-017",
    slug: "399sqft-spacious-tiny-home",
    name: "Spacious 1 Bed, 1 Bath 399 sqft Tiny Home",
    shortDescription:
      "399 sqft Tiny Home with U-Shaped Kitchen and Front Porch",
    price: 35000,
    downPayment: {
      full: 14000, // 40% of price
      financing: 10500,
    },
    monthlyPayment: 833,
    specifications: {
      bedrooms: 1,
      bathrooms: 1,
      squareFootage: 399,
      construction: {
        foundation: "Rust-resistant steel frame",
        structure: "Durable all-weather construction",
      },
    },
    images: [
      {
        id: "img-399space-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/a5-1.jpg",
        alt: "Spacious 399 sqft Tiny Home Exterior View",
      },
      {
        id: "img-399space-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/a1-1.jpg",
        alt: "Spacious 399 sqft Tiny Home Exterior View",
      },
      {
        id: "img-399space-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/a20.jpg",
        alt: "Spacious 399 sqft Tiny Home Exterior View",
      },
      {
        id: "img-399space-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/a17-1.jpg",
        alt: "Spacious 399 sqft Tiny Home Exterior View",
      },
      {
        id: "img-399space-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/a16-1.jpg",
        alt: "Spacious 399 sqft Tiny Home Exterior View",
      },
      {
        id: "img-399space-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/a15-1.jpg",
        alt: "Spacious 399 sqft Tiny Home Exterior View",
      },
      {
        id: "img-399space-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/a14-1.jpg",
        alt: "Spacious 399 sqft Tiny Home Exterior View",
      },
      {
        id: "img-399space-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/a13-1.jpg",
        alt: "Spacious 399 sqft Tiny Home Exterior View",
      },
      {
        id: "img-399space-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/a12-1.jpg",
        alt: "Spacious 399 sqft Tiny Home Exterior View",
      },
      {
        id: "img-399space-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/a11-1.jpg",
        alt: "Spacious 399 sqft Tiny Home Exterior View",
      },
      {
        id: "img-399space-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/a10-1.jpg",
        alt: "Spacious 399 sqft Tiny Home Exterior View",
      },
      {
        id: "img-399space-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/a9-1.jpg",
        alt: "Spacious 399 sqft Tiny Home Exterior View",
      },
      {
        id: "img-399space-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/a8-1.jpg",
        alt: "Spacious 399 sqft Tiny Home Exterior View",
      },
      {
        id: "img-399space-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/a7-1.jpg",
        alt: "Spacious 399 sqft Tiny Home Exterior View",
      },
      {
        id: "img-399space-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/a6-1.jpg",
        alt: "Spacious 399 sqft Tiny Home Exterior View",
      },
      {
        id: "img-399space-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/a4-1.jpg",
        alt: "Spacious 399 sqft Tiny Home Exterior View",
      },
      {
        id: "img-399space-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/a3-1.jpg",
        alt: "Spacious 399 sqft Tiny Home Exterior View",
      },
      {
        id: "img-399space-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/a2-1.jpg",
        alt: "Spacious 399 sqft Tiny Home Exterior View",
      },
    ],
    features: {
      interior: {
        category: "Interior Features",
        items: [
          "U-shaped front kitchen layout",
          "Large windows for natural lighting",
          "Cozy living area with single couch",
          "Comfortable bedroom space",
          "Modern bathroom with sliding glass shower",
          "Washer and dryer combo",
          "Open concept design",
        ],
      },
      exterior: {
        category: "Exterior Features",
        items: [
          "Welcoming front porch",
          "Durable steel construction",
          "Weather-resistant materials",
          "Large windows throughout",
        ],
      },
      kitchen: {
        category: "Kitchen Features",
        items: [
          "U-shaped efficient layout",
          "Full-size refrigerator",
          "Gas cooker",
          "Built-in microwave",
          "Extensive counter space",
          "Abundant storage solutions",
        ],
      },
    },
    bathroomSpecs: [
      {
        category: "Bathroom Specifications",
        items: [
          {
            label: "Fixtures",
            value: "Modern toilet, sleek sink, sliding glass door shower",
          },
          {
            label: "Water System",
            value: "Heated water system",
          },
          {
            label: "Design",
            value: "Contemporary styling with practical layout",
          },
        ],
      },
    ],
    laundrySpecs: [
      {
        category: "Laundry Features",
        items: [
          {
            label: "Appliances",
            value: "Washer and dryer combo included",
          },
          {
            label: "Hookups",
            value: "Additional laundry appliance connections available",
          },
        ],
      },
    ],
    overview:
      "Step into a new lifestyle with this meticulously designed 399 sqft tiny home, where modern convenience meets cozy living. The spacious U-shaped kitchen, comfortable living area, and private front porch create the perfect balance between functionality and comfort. This thoughtfully crafted home offers everything needed for a comfortable living experience.",
    warranty: {
      duration: "25 years",
      coverage: [
        "Free repairs for wear and tear due to technical faults",
        "Full replacement for severe damage",
        "Quality control inspection before shipping",
        "No-cost repairs for covered issues",
      ],
    },
    buyerProtection: {
      features: [
        "Transparent pricing with no hidden fees",
        "Straightforward return policy",
        "Secure payment processing",
        "Dedicated customer service support",
      ],
    },
    highlights: [
      "U-shaped kitchen design",
      "Included washer/dryer combo",
      "Front porch",
      "Heated water system",
      "Large windows",
      "Ample storage space",
    ],
    relatedProducts: [
      "th-001",
      "th-002",
      "th-003",
      "th-004",
      "th-005",
      "th-006",
      "th-007",
      "th-008",
      "th-009",
      "th-010",
      "th-011",
      "th-012",
      "th-013",
      "th-014",
      "th-015",
      "th-016",
    ],
  },
  {
    id: "th-018",
    slug: "399sqft-mobile-tiny-home-wheels",
    name: "399 sqft Mobile Tiny Home On Wheels 1 Bed, 1 Bath",
    shortDescription:
      "Mobile tiny home featuring modern amenities and front porch",
    price: 35000,
    downPayment: {
      full: 14000, // 40% of price
      financing: 10500,
    },
    monthlyPayment: 833,
    specifications: {
      bedrooms: 1,
      bathrooms: 1,
      squareFootage: 399,
      construction: {
        foundation: "Top-grade steel foundation",
        mobility: "Fully mobile on wheels",
        durability: "Weather-resistant construction",
      },
    },
    images: [
      {
        id: "img-399mobile-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/a2.jpg",
        alt: "399 sqft Mobile Tiny Home On Wheels Exterior View",
      },
      {
        id: "img-399mobile-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/a17.jpg",
        alt: "399 sqft Mobile Tiny Home On Wheels Exterior View",
      },
      {
        id: "img-399mobile-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/a16.jpg",
        alt: "399 sqft Mobile Tiny Home On Wheels Exterior View",
      },
      {
        id: "img-399mobile-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/a15.jpg",
        alt: "399 sqft Mobile Tiny Home On Wheels Exterior View",
      },
      {
        id: "img-399mobile-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/a14.jpg",
        alt: "399 sqft Mobile Tiny Home On Wheels Exterior View",
      },
      {
        id: "img-399mobile-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/a13.jpg",
        alt: "399 sqft Mobile Tiny Home On Wheels Exterior View",
      },
      {
        id: "img-399mobile-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/a12.jpg",
        alt: "399 sqft Mobile Tiny Home On Wheels Exterior View",
      },
      {
        id: "img-399mobile-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/a11.jpg",
        alt: "399 sqft Mobile Tiny Home On Wheels Exterior View",
      },
      {
        id: "img-399mobile-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/a9.jpg",
        alt: "399 sqft Mobile Tiny Home On Wheels Exterior View",
      },
      {
        id: "img-399mobile-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/a8.jpg",
        alt: "399 sqft Mobile Tiny Home On Wheels Exterior View",
      },
      {
        id: "img-399mobile-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/a7.jpg",
        alt: "399 sqft Mobile Tiny Home On Wheels Exterior View",
      },
      {
        id: "img-399mobile-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/a6.jpg",
        alt: "399 sqft Mobile Tiny Home On Wheels Exterior View",
      },
      {
        id: "img-399mobile-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/a5.jpg",
        alt: "399 sqft Mobile Tiny Home On Wheels Exterior View",
      },
      {
        id: "img-399mobile-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/a4.jpg",
        alt: "399 sqft Mobile Tiny Home On Wheels Exterior View",
      },
    ],
    features: {
      interior: {
        category: "Interior Features",
        items: [
          "Bright and airy living space",
          "Comfortable single couch",
          "Cozy bed area",
          "Built-in wardrobe",
          "Modern bathroom",
          "Washer and dryer combo",
          "Open concept design",
        ],
      },
      exterior: {
        category: "Exterior Features",
        items: [
          "Inviting front porch",
          "Durable steel foundation",
          "Mobile wheel system",
          "Weather-resistant construction",
        ],
      },
      kitchen: {
        category: "Kitchen Features",
        items: [
          "Full-size refrigerator",
          "Gas cooker",
          "Built-in microwave",
          "Functional kitchen sink",
          "Ample storage space",
        ],
      },
    },
    bathroomSpecs: [
      {
        category: "Bathroom Specifications",
        items: [
          {
            label: "Fixtures",
            value: "Modern toilet, sleek sink, sliding glass door shower",
          },
          {
            label: "Water System",
            value: "Heated water system",
          },
          {
            label: "Design",
            value: "Efficient layout with modern amenities",
          },
        ],
      },
    ],
    laundrySpecs: [
      {
        category: "Laundry Features",
        items: [
          {
            label: "Appliances",
            value: "Washer and dryer combo included",
          },
          {
            label: "Integration",
            value: "Built-in laundry solution",
          },
        ],
      },
    ],
    overview:
      "Discover the perfect blend of modern convenience and cozy living in this stunning 399 sqft mobile tiny home, designed for those who crave mobility without sacrificing comfort. This fully-equipped home features everything needed for a fulfilling lifestyle, from a comfortable living space to modern appliances.",
    warranty: {
      duration: "25 years",
      coverage: [
        "Free repairs for wear and tear due to technical faults",
        "Full replacement for severe damage",
        "Quality control inspection before shipping",
        "No-cost repairs for covered issues",
      ],
    },
    buyerProtection: {
      features: [
        "Transparent pricing with no hidden fees",
        "Straightforward return policy",
        "Secure payment processing",
        "Dedicated customer service support",
      ],
    },
    highlights: [
      "Mobile design on wheels",
      "Full-size appliances",
      "Washer/dryer combo",
      "Front porch",
      "Heated water system",
      "Built-in wardrobe",
    ],
    relatedProducts: [
      "th-001",
      "th-002",
      "th-003",
      "th-004",
      "th-005",
      "th-006",
      "th-007",
      "th-008",
      "th-009",
      "th-010",
      "th-011",
      "th-012",
      "th-013",
      "th-014",
      "th-015",
      "th-016",
      "th-017",
    ],
  },
  {
    id: "th-019",
    slug: "399sqft-tiny-home-loft-bedroom",
    name: "399 sqft Tiny Home with Loft Bedroom",
    shortDescription:
      "Beautifully crafted tiny home with loft bedroom and modern amenities",
    price: 35000,
    downPayment: {
      full: 14000, // 40% of price
      financing: 10500,
    },
    monthlyPayment: 833,
    specifications: {
      bedrooms: 1,
      bathrooms: 1,
      squareFootage: 399,
      construction: {
        foundation: "Robust rust-resistant top-grade steel",
        mobility: "Mobile design",
        features: "Loft bedroom configuration",
      },
    },
    images: [
      {
        id: "img-399loft-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/t1.jpg",
        alt: "399 sqft Tiny Home with Loft Bedroom Exterior View",
      },

      {
        id: "img-399loft-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/t13.jpg",
        alt: "399 sqft Tiny Home with Loft Bedroom Exterior View",
      },

      {
        id: "img-399loft-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/t12.jpg",
        alt: "399 sqft Tiny Home with Loft Bedroom Exterior View",
      },

      {
        id: "img-399loft-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/t11.jpg",
        alt: "399 sqft Tiny Home with Loft Bedroom Exterior View",
      },

      {
        id: "img-399loft-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/t10.jpg",
        alt: "399 sqft Tiny Home with Loft Bedroom Exterior View",
      },

      {
        id: "img-399loft-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/t9.jpg",
        alt: "399 sqft Tiny Home with Loft Bedroom Exterior View",
      },

      {
        id: "img-399loft-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/t8.jpg",
        alt: "399 sqft Tiny Home with Loft Bedroom Exterior View",
      },

      {
        id: "img-399loft-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/t7.jpg",
        alt: "399 sqft Tiny Home with Loft Bedroom Exterior View",
      },

      {
        id: "img-399loft-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/t6.jpg",
        alt: "399 sqft Tiny Home with Loft Bedroom Exterior View",
      },

      {
        id: "img-399loft-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/t5.jpg",
        alt: "399 sqft Tiny Home with Loft Bedroom Exterior View",
      },

      {
        id: "img-399loft-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/t4.jpg",
        alt: "399 sqft Tiny Home with Loft Bedroom Exterior View",
      },

      {
        id: "img-399loft-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/t3.jpg",
        alt: "399 sqft Tiny Home with Loft Bedroom Exterior View",
      },

      {
        id: "img-399loft-001",
        url: "https://containerx-press.com/wp-content/uploads/2025/01/t2.jpg",
        alt: "399 sqft Tiny Home with Loft Bedroom Exterior View",
      },
    ],
    features: {
      interior: {
        category: "Interior Features",
        items: [
          "Loft bedroom space",
          "Cozy living area with stylish single couch",
          "Built-in wardrobe storage",
          "Modern bathroom",
          "Full plumbing installation",
          "Complete electrical system",
          "Quality paint finishes",
          "Durable flooring",
        ],
      },
      exterior: {
        category: "Exterior Features",
        items: [
          "Mobile foundation",
          "Durable steel construction",
          "Weather-resistant materials",
          "Modern exterior design",
        ],
      },
      kitchen: {
        category: "Kitchen Features",
        items: [
          "High-quality gas cooker",
          "Stylish kitchen sink with modern faucet",
          "Ample storage solutions",
          "Efficient layout",
        ],
      },
    },
    bathroomSpecs: [
      {
        category: "Bathroom Specifications",
        items: [
          {
            label: "Fixtures",
            value: "Modern toilet, functional sink, sliding glass door shower",
          },
          {
            label: "Water System",
            value: "Heated water system",
          },
          {
            label: "Design",
            value: "Compact and efficient layout",
          },
        ],
      },
    ],
    storageSpecs: [
      {
        category: "Storage Features",
        items: [
          {
            label: "Wardrobe",
            value: "Built-in wardrobe system",
          },
          {
            label: "Kitchen Storage",
            value: "Multiple cabinet solutions",
          },
          {
            label: "Additional Storage",
            value: "Integrated storage throughout",
          },
        ],
      },
    ],
    overview:
      "Step into a new lifestyle with this beautifully crafted 399 sqft tiny home, designed for comfort, convenience, and modern living. The loft bedroom configuration maximizes living space while providing a cozy sleeping area. Built on a robust, rust-resistant steel foundation, this mobile sanctuary combines style with practicality.",
    warranty: {
      duration: "25 years",
      coverage: [
        "Free repairs for wear and tear due to technical faults",
        "Full replacement for severe damage",
        "Quality control inspection before shipping",
        "No-cost repairs for covered issues",
      ],
    },
    buyerProtection: {
      features: [
        "Transparent pricing with no hidden fees",
        "Straightforward return policy",
        "Secure payment processing",
        "Dedicated customer service support",
      ],
    },
    highlights: [
      "Loft bedroom design",
      "Complete plumbing system",
      "Full electrical installation",
      "Built-in storage solutions",
      "Heated water system",
      "Quality finishes",
    ],
    relatedProducts: [
      "th-001",
      "th-002",
      "th-003",
      "th-004",
      "th-005",
      "th-006",
      "th-007",
      "th-008",
      "th-009",
      "th-010",
      "th-011",
      "th-012",
      "th-013",
      "th-014",
      "th-015",
      "th-016",
      "th-017",
      "th-018",
    ],
  },
];
