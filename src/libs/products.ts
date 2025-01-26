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
    name: "Roaming Retreat Fully Furnished Tiny House On Wheels",
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
    images:[
      {
        "id": "img-roaming-001",
        "url": "/images/image-1.jpg",
        "alt": "Roaming Retreat Tiny House Exterior View"
      },
      {
        "id": "img-roaming-001",
        "url": "/images/image-2.png",
        "alt": "Roaming Retreat Tiny House Exterior View"
      },
      {
        "id": "img-roaming-001",
        "url": "/images/image-3.jpg",
        "alt": "Roaming Retreat Tiny House Exterior View"
      },
      {
        "id": "img-roaming-001",
        "url": "/images/image-4.jpg",
        "alt": "Roaming Retreat Tiny House Exterior View"
      },
      {
        "id": "img-roaming-001",
        "url": "/images/image-5.jpg",
        "alt": "Roaming Retreat Tiny House Exterior View"
      },
      {
        "id": "img-roaming-001",
        "url": "/images/image-6.jpg",
        "alt": "Roaming Retreat Tiny House Exterior View"
      },
      {
        "id": "img-roaming-001",
        "url": "/images/image-7.jpg",
        "alt": "Roaming Retreat Tiny House Exterior View"
      },
      {
        "id": "img-roaming-001",
        "url": "/images/image-8.jpg",
        "alt": "Roaming Retreat Tiny House Exterior View"
      },
      {
        "id": "img-roaming-001",
        "url": "/images/image-9.jpg",
        "alt": "Roaming Retreat Tiny House Exterior View"
      },
      {
        "id": "img-roaming-001",
        "url": "/images/image-10.jpg",
        "alt": "Roaming Retreat Tiny House Exterior View"
      },
      {
        "id": "img-roaming-001",
        "url": "/images/image-11.jpg",
        "alt": "Roaming Retreat Tiny House Exterior View"
      },
      {
        "id": "img-roaming-001",
        "url": "/images/image-12.jpg",
        "alt": "Roaming Retreat Tiny House Exterior View"
      },
      {
        "id": "img-roaming-001",
        "url": "/images/image-13.jpg",
        "alt": "Roaming Retreat Tiny House Exterior View"
      },
      {
        "id": "img-roaming-001",
        "url": "/images/image-14.jpg",
        "alt": "Roaming Retreat Tiny House Exterior View"
      },
      {
        "id": "img-roaming-001",
        "url": "/images/image-15.jpg",
        "alt": "Roaming Retreat Tiny House Exterior View"
      },
      {
        "id": "img-roaming-001",
        "url": "/images/image-16.jpg",
        "alt": "Roaming Retreat Tiny House Exterior View"
      },
      {
        "id": "img-roaming-001",
        "url": "/images/image-17.jpg",
        "alt": "Roaming Retreat Tiny House Exterior View"
      },
      {
        "id": "img-roaming-001",
        "url": "/images/image-18.jpg",
        "alt": "Roaming Retreat Tiny House Exterior View"
      },
      {
        "id": "img-roaming-001",
        "url": "/images/image-19.jpg",
        "alt": "Roaming Retreat Tiny House Exterior View"
      },
      {
        "id": "img-roaming-001",
        "url": "/images/image-20.jpg",
        "alt": "Roaming Retreat Tiny House Exterior View"
      },
      {
        "id": "img-roaming-001",
        "url": "/images/image-21.jpg",
        "alt": "Roaming Retreat Tiny House Exterior View"
      }
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
      "1 Bed, 1 Bath – 399 sqft ,this meticulously designed tiny home combines modern amenities with high-quality construction, featuring vaulted ceilings, premium appliances, and comprehensive safety features. Perfect for those seeking a mobile lifestyle without compromising on comfort and style.",
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
    name: "Nomad Nest: 399 sq ft Vaulted Ceiling Tiny Home",
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
        "id": "img-nomad-001",
        "url": "/images/image-22.jpg",
        "alt": "Nomad Nest Tiny House Exterior View"
      },
      {
        "id": "img-nomad-001",
        "url": "/images/image-23.png",
        "alt": "Nomad Nest Tiny House Exterior View"
      },
      {
        "id": "img-nomad-001",
        "url": "/images/image-24.jpg",
        "alt": "Nomad Nest Tiny House Exterior View"
      },
      {
        "id": "img-nomad-001",
        "url": "/images/image-25.jpg",
        "alt": "Nomad Nest Tiny House Exterior View"
      },
      {
        "id": "img-nomad-001",
        "url": "/images/image-26.jpg",
        "alt": "Nomad Nest Tiny House Exterior View"
      },
      {
        "id": "img-nomad-001",
        "url": "/images/image-27.jpg",
        "alt": "Nomad Nest Tiny House Exterior View"
      },
      {
        "id": "img-nomad-001",
        "url": "/images/image-28.jpg",
        "alt": "Nomad Nest Tiny House Exterior View"
      },
      {
        "id": "img-nomad-001",
        "url": "/images/image-29.jpg",
        "alt": "Nomad Nest Tiny House Exterior View"
      },
      {
        "id": "img-nomad-001",
        "url": "/images/image-30.jpg",
        "alt": "Nomad Nest Tiny House Exterior View"
      },
      {
        "id": "img-nomad-001",
        "url": "/images/image-31.jpg",
        "alt": "Nomad Nest Tiny House Exterior View"
      },
      {
        "id": "img-nomad-001",
        "url": "/images/image-32.jpg",
        "alt": "Nomad Nest Tiny House Exterior View"
      },
      {
        "id": "img-nomad-001",
        "url": "/images/image-33.jpg",
        "alt": "Nomad Nest Tiny House Exterior View"
      },
      {
        "id": "img-nomad-001",
        "url": "/images/image-34.jpg",
        "alt": "Nomad Nest Tiny House Exterior View"
      },
      {
        "id": "img-nomad-001",
        "url": "/images/image-35.jpg",
        "alt": "Nomad Nest Tiny House Exterior View"
      },
      {
        "id": "img-nomad-001",
        "url": "/images/image-36.jpg",
        "alt": "Nomad Nest Tiny House Exterior View"
      },
      {
        "id": "img-nomad-001",
        "url": "/images/image-37.jpg",
        "alt": "Nomad Nest Tiny House Exterior View"
      },
      {
        "id": "img-nomad-001",
        "url": "/images/image-38.jpg",
        "alt": "Nomad Nest Tiny House Exterior View"
      },
      {
        "id": "img-nomad-001",
        "url": "/images/image-39.jpg",
        "alt": "Nomad Nest Tiny House Exterior View"
      },
      {
        "id": "img-nomad-001",
        "url": "/images/image-40.jpg",
        "alt": "Nomad Nest Tiny House Exterior View"
      },
      {
        "id": "img-nomad-001",
        "url": "/images/image-41.jpg",
        "alt": "Nomad Nest Tiny House Exterior View"
      },
      {
        "id": "img-nomad-001",
        "url": "/images/image-42.jpg",
        "alt": "Nomad Nest Tiny House Exterior View"
      }
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
      " 1 Bed, 1 Bath – 399 sqft, this beautifully designed tiny home combines modern amenities with thoughtful construction, perfect for anyone looking to embrace a minimalist lifestyle. Features vaulted ceilings, premium finishes, and comprehensive safety features.",
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
    name: "WanderLuxe Fully Furnished Mobile Tiny House",
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
        "id": "img-wanderluxe-001",
        "url": "/images/image-43.jpg",
        "alt": "WanderLuxe Mobile Tiny House Exterior View"
      },
      {
        "id": "img-wanderluxe-001",
        "url": "/images/image-44.jpg",
        "alt": "WanderLuxe Mobile Tiny House Exterior View"
      },
      {
        "id": "img-wanderluxe-001",
        "url": "/images/image-45.jpg",
        "alt": "WanderLuxe Mobile Tiny House Exterior View"
      },
      {
        "id": "img-wanderluxe-001",
        "url": "/images/image-46.jpg",
        "alt": "WanderLuxe Mobile Tiny House Exterior View"
      },
      {
        "id": "img-wanderluxe-001",
        "url": "/images/image-47.jpg",
        "alt": "WanderLuxe Mobile Tiny House Exterior View"
      },
      {
        "id": "img-wanderluxe-001",
        "url": "/images/image-48.jpg",
        "alt": "WanderLuxe Mobile Tiny House Exterior View"
      },
      {
        "id": "img-wanderluxe-001",
        "url": "/images/image-49.jpg",
        "alt": "WanderLuxe Mobile Tiny House Exterior View"
      },
      {
        "id": "img-wanderluxe-001",
        "url": "/images/image-50.jpg",
        "alt": "WanderLuxe Mobile Tiny House Exterior View"
      },
      {
        "id": "img-wanderluxe-001",
        "url": "/images/image-51.jpg",
        "alt": "WanderLuxe Mobile Tiny House Exterior View"
      },
      {
        "id": "img-wanderluxe-001",
        "url": "/images/image-52.jpg",
        "alt": "WanderLuxe Mobile Tiny House Exterior View"
      },
      {
        "id": "img-wanderluxe-001",
        "url": "/images/image-53.jpg",
        "alt": "WanderLuxe Mobile Tiny House Exterior View"
      },
      {
        "id": "img-wanderluxe-001",
        "url": "/images/image-54.jpg",
        "alt": "WanderLuxe Mobile Tiny House Exterior View"
      },
      {
        "id": "img-wanderluxe-001",
        "url": "/images/image-55.jpg",
        "alt": "WanderLuxe Mobile Tiny House Exterior View"
      },
      {
        "id": "img-wanderluxe-001",
        "url": "/images/image-56.jpg",
        "alt": "WanderLuxe Mobile Tiny House Exterior View"
      },
      {
        "id": "img-wanderluxe-001",
        "url": "/images/image-57.jpg",
        "alt": "WanderLuxe Mobile Tiny House Exterior View"
      },
      {
        "id": "img-wanderluxe-001",
        "url": "/images/image-58.jpg",
        "alt": "WanderLuxe Mobile Tiny House Exterior View"
      },
      {
        "id": "img-wanderluxe-001",
        "url": "/images/image-59.jpg",
        "alt": "WanderLuxe Mobile Tiny House Exterior View"
      },
      {
        "id": "img-wanderluxe-001",
        "url": "/images/image-60.jpg",
        "alt": "WanderLuxe Mobile Tiny House Exterior View"
      },
      {
        "id": "img-wanderluxe-001",
        "url": "/images/image-61.jpg",
        "alt": "WanderLuxe Mobile Tiny House Exterior View"
      },
      {
        "id": "img-wanderluxe-001",
        "url": "/images/image-62.jpg",
        "alt": "WanderLuxe Mobile Tiny House Exterior View"
      },
      {
        "id": "img-wanderluxe-001",
        "url": "/images/image-63.jpg",
        "alt": "WanderLuxe Mobile Tiny House Exterior View"
      },
      {
        "id": "img-wanderluxe-001",
        "url": "/images/image-64.jpg",
        "alt": "WanderLuxe Mobile Tiny House Exterior View"
      },
      {
        "id": "img-wanderluxe-001",
        "url": "/images/image-65.jpg",
        "alt": "WanderLuxe Mobile Tiny House Exterior View"
      },
      {
        "id": "img-wanderluxe-001",
        "url": "/images/image-66.jpg",
        "alt": "WanderLuxe Mobile Tiny House Exterior View"
      },
      {
        "id": "img-wanderluxe-001",
        "url": "/images/image-67.jpg",
        "alt": "WanderLuxe Mobile Tiny House Exterior View"
      },
      {
        "id": "img-wanderluxe-001",
        "url": "/images/image-68.jpg",
        "alt": "WanderLuxe Mobile Tiny House Exterior View"
      },
      {
        "id": "img-wanderluxe-001",
        "url": "/images/image-69.jpg",
        "alt": "WanderLuxe Mobile Tiny House Exterior View"
      },
      {
        "id": "img-wanderluxe-001",
        "url": "/images/image-70.jpg",
        "alt": "WanderLuxe Mobile Tiny House Exterior View"
      },
      {
        "id": "img-wanderluxe-001",
        "url": "/images/image-71.jpg",
        "alt": "WanderLuxe Mobile Tiny House Exterior View"
      },
      {
        "id": "img-wanderluxe-001",
        "url": "/images/image-72.jpg",
        "alt": "WanderLuxe Mobile Tiny House Exterior View"
      },
      {
        "id": "img-wanderluxe-001",
        "url": "/images/image-73.jpg",
        "alt": "WanderLuxe Mobile Tiny House Exterior View"
      },
      {
        "id": "img-wanderluxe-001",
        "url": "/images/image-74.jpg",
        "alt": "WanderLuxe Mobile Tiny House Exterior View"
      }
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
      ", 1 Bed, 1 Bath – 399 sqft, this meticulously crafted tiny home combines quality construction with stylish amenities, making it perfect for those seeking a cozy yet functional living environment. Features vaulted ceilings, premium finishes, and comprehensive safety features.",
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
    name: "Roam Haven: 389 sq ft Fully Furnished Tiny Home",
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
        "id": "img-roam-001",
        "url": "/images/image-75.jpg",
        "alt": "Roam Haven Tiny House Exterior View"
      },
      {
        "id": "img-roam-001",
        "url": "/images/image-76.jpg",
        "alt": "Roam Haven Tiny House Exterior View"
      },
      {
        "id": "img-roam-001",
        "url": "/images/image-77.jpg",
        "alt": "Roam Haven Tiny House Exterior View"
      },
      {
        "id": "img-roam-001",
        "url": "/images/image-78.jpg",
        "alt": "Roam Haven Tiny House Exterior View"
      },
      {
        "id": "img-roam-001",
        "url": "/images/image-79.jpg",
        "alt": "Roam Haven Tiny House Exterior View"
      },
      {
        "id": "img-roam-001",
        "url": "/images/image-80.jpg",
        "alt": "Roam Haven Tiny House Exterior View"
      },
      {
        "id": "img-roam-001",
        "url": "/images/image-81.jpg",
        "alt": "Roam Haven Tiny House Exterior View"
      },
      {
        "id": "img-roam-001",
        "url": "/images/image-82.jpg",
        "alt": "Roam Haven Tiny House Exterior View"
      },
      {
        "id": "img-roam-001",
        "url": "/images/image-83.jpg",
        "alt": "Roam Haven Tiny House Exterior View"
      },
      {
        "id": "img-roam-001",
        "url": "/images/image-84.jpg",
        "alt": "Roam Haven Tiny House Exterior View"
      },
      {
        "id": "img-roam-001",
        "url": "/images/image-85.jpg",
        "alt": "Roam Haven Tiny House Exterior View"
      },
      {
        "id": "img-roam-001",
        "url": "/images/image-86.jpg",
        "alt": "Roam Haven Tiny House Exterior View"
      },
      {
        "id": "img-roam-001",
        "url": "/images/image-87.jpg",
        "alt": "Roam Haven Tiny House Exterior View"
      },
      {
        "id": "img-roam-001",
        "url": "/images/image-88.jpg",
        "alt": "Roam Haven Tiny House Exterior View"
      },
      {
        "id": "img-roam-001",
        "url": "/images/image-89.jpg",
        "alt": "Roam Haven Tiny House Exterior View"
      },
      {
        "id": "img-roam-001",
        "url": "/images/image-90.jpg",
        "alt": "Roam Haven Tiny House Exterior View"
      },
      {
        "id": "img-roam-001",
        "url": "/images/image-91.jpg",
        "alt": "Roam Haven Tiny House Exterior View"
      },
      {
        "id": "img-roam-001",
        "url": "/images/image-92.jpg",
        "alt": "Roam Haven Tiny House Exterior View"
      }
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
    name: "Wander Nest: Fully Furnished 1-Bed Tiny Home on Wheels",
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
        "id": "img-wander-001",
        "url": "/images/image-93.jpg",
        "alt": "Wander Nest Tiny House Exterior View"
      },
      {
        "id": "img-wander-001",
        "url": "/images/image-94.jpg",
        "alt": "Wander Nest Tiny House Exterior View"
      },
      {
        "id": "img-wander-001",
        "url": "/images/image-95.jpg",
        "alt": "Wander Nest Tiny House Exterior View"
      },
      {
        "id": "img-wander-001",
        "url": "/images/image-96.jpg",
        "alt": "Wander Nest Tiny House Exterior View"
      },
      {
        "id": "img-wander-001",
        "url": "/images/image-97.jpg",
        "alt": "Wander Nest Tiny House Exterior View"
      },
      {
        "id": "img-wander-001",
        "url": "/images/image-98.jpg",
        "alt": "Wander Nest Tiny House Exterior View"
      },
      {
        "id": "img-wander-001",
        "url": "/images/image-99.jpg",
        "alt": "Wander Nest Tiny House Exterior View"
      },
      {
        "id": "img-wander-001",
        "url": "/images/image-100.jpg",
        "alt": "Wander Nest Tiny House Exterior View"
      },
      {
        "id": "img-wander-001",
        "url": "/images/image-101.jpg",
        "alt": "Wander Nest Tiny House Exterior View"
      },
      {
        "id": "img-wander-001",
        "url": "/images/image-102.jpg",
        "alt": "Wander Nest Tiny House Exterior View"
      },
      {
        "id": "img-wander-001",
        "url": "/images/image-103.jpg",
        "alt": "Wander Nest Tiny House Exterior View"
      },
      {
        "id": "img-wander-001",
        "url": "/images/image-104.jpg",
        "alt": "Wander Nest Tiny House Exterior View"
      },
      {
        "id": "img-wander-001",
        "url": "/images/image-105.jpg",
        "alt": "Wander Nest Tiny House Exterior View"
      },
      {
        "id": "img-wander-001",
        "url": "/images/image-106.jpg",
        "alt": "Wander Nest Tiny House Exterior View"
      },
      {
        "id": "img-wander-001",
        "url": "/images/image-107.jpg",
        "alt": "Wander Nest Tiny House Exterior View"
      },
      {
        "id": "img-wander-001",
        "url": "/images/image-108.jpg",
        "alt": "Wander Nest Tiny House Exterior View"
      },
      {
        "id": "img-wander-001",
        "url": "/images/image-109.jpg",
        "alt": "Wander Nest Tiny House Exterior View"
      },
      {
        "id": "img-wander-001",
        "url": "/images/image-110.jpg",
        "alt": "Wander Nest Tiny House Exterior View"
      },
      {
        "id": "img-wander-001",
        "url": "/images/image-111.jpg",
        "alt": "Wander Nest Tiny House Exterior View"
      },
      {
        "id": "img-wander-001",
        "url": "/images/image-112.jpg",
        "alt": "Wander Nest Tiny House Exterior View"
      },
      {
        "id": "img-wander-001",
        "url": "/images/image-113.jpg",
        "alt": "Wander Nest Tiny House Exterior View"
      },
      {
        "id": "img-wander-001",
        "url": "/images/image-114.jpg",
        "alt": "Wander Nest Tiny House Exterior View"
      },
      {
        "id": "img-wander-001",
        "url": "/images/image-115.jpg",
        "alt": "Wander Nest Tiny House Exterior View"
      },
      {
        "id": "img-wander-001",
        "url": "/images/image-116.jpg",
        "alt": "Wander Nest Tiny House Exterior View"
      },
      {
        "id": "img-wander-001",
        "url": "/images/image-117.jpg",
        "alt": "Wander Nest Tiny House Exterior View"
      },
      {
        "id": "img-wander-001",
        "url": "/images/image-118.jpg",
        "alt": "Wander Nest Tiny House Exterior View"
      },
      {
        "id": "img-wander-001",
        "url": "/images/image-119.jpg",
        "alt": "Wander Nest Tiny House Exterior View"
      },
      {
        "id": "img-wander-001",
        "url": "/images/image-120.jpg",
        "alt": "Wander Nest Tiny House Exterior View"
      }
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
    name: "Modern Living: 399 sq ft Tiny Home on Wheels",
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
        "id": "img-modern-001",
        "url": "/images/image-121.jpg",
        "alt": "Modern Living Tiny House Exterior View"
      },
      {
        "id": "img-modern-001",
        "url": "/images/image-122.jpg",
        "alt": "Modern Living Tiny House Exterior View"
      },
      {
        "id": "img-modern-001",
        "url": "/images/image-123.jpg",
        "alt": "Modern Living Tiny House Exterior View"
      },
      {
        "id": "img-modern-001",
        "url": "/images/image-124.jpg",
        "alt": "Modern Living Tiny House Exterior View"
      },
      {
        "id": "img-modern-001",
        "url": "/images/image-125.jpg",
        "alt": "Modern Living Tiny House Exterior View"
      },
      {
        "id": "img-modern-001",
        "url": "/images/image-126.jpg",
        "alt": "Modern Living Tiny House Exterior View"
      },
      {
        "id": "img-modern-001",
        "url": "/images/image-127.jpg",
        "alt": "Modern Living Tiny House Exterior View"
      },
      {
        "id": "img-modern-001",
        "url": "/images/image-128.jpg",
        "alt": "Modern Living Tiny House Exterior View"
      }
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
    name: "Luxurious 1-Bed Tiny Home with Vaulted Ceilings",
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
        "id": "img-spacious-001",
        "url": "/images/image-129.jpg",
        "alt": "Spacious Tiny House Exterior View"
      },
      {
        "id": "img-spacious-001",
        "url": "/images/image-130.png",
        "alt": "Spacious Tiny House Exterior View"
      },
      {
        "id": "img-spacious-001",
        "url": "/images/image-131.jpg",
        "alt": "Spacious Tiny House Exterior View"
      },
      {
        "id": "img-spacious-001",
        "url": "/images/image-132.jpg",
        "alt": "Spacious Tiny House Exterior View"
      },
      {
        "id": "img-spacious-001",
        "url": "/images/image-133.jpg",
        "alt": "Spacious Tiny House Exterior View"
      },
      {
        "id": "img-spacious-001",
        "url": "/images/image-134.jpg",
        "alt": "Spacious Tiny House Exterior View"
      },
      {
        "id": "img-spacious-001",
        "url": "/images/image-135.jpg",
        "alt": "Spacious Tiny House Exterior View"
      },
      {
        "id": "img-spacious-001",
        "url": "/images/image-136.jpg",
        "alt": "Spacious Tiny House Exterior View"
      },
      {
        "id": "img-spacious-001",
        "url": "/images/image-137.jpg",
        "alt": "Spacious Tiny House Exterior View"
      },
      {
        "id": "img-spacious-001",
        "url": "/images/image-138.jpg",
        "alt": "Spacious Tiny House Exterior View"
      },
      {
        "id": "img-spacious-001",
        "url": "/images/image-139.jpg",
        "alt": "Spacious Tiny House Exterior View"
      }
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
    name: "Modern Loft Living: Stylish 1-Bed Tiny Home",
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
        "id": "img-modern-loft-001",
        "url": "/images/image-140.jpg",
        "alt": "Modern Loft Tiny House Exterior View"
      },
      {
        "id": "img-modern-loft-001",
        "url": "/images/image-141.jpg",
        "alt": "Modern Loft Tiny House Exterior View"
      },
      {
        "id": "img-modern-loft-001",
        "url": "/images/image-142.jpg",
        "alt": "Modern Loft Tiny House Exterior View"
      },
      {
        "id": "img-modern-loft-001",
        "url": "/images/image-143.jpg",
        "alt": "Modern Loft Tiny House Exterior View"
      },
      {
        "id": "img-modern-loft-001",
        "url": "/images/image-144.jpg",
        "alt": "Modern Loft Tiny House Exterior View"
      },
      {
        "id": "img-modern-loft-001",
        "url": "/images/image-145.jpg",
        "alt": "Modern Loft Tiny House Exterior View"
      },
      {
        "id": "img-modern-loft-001",
        "url": "/images/image-146.jpg",
        "alt": "Modern Loft Tiny House Exterior View"
      },
      {
        "id": "img-modern-loft-001",
        "url": "/images/image-147.jpg",
        "alt": "Modern Loft Tiny House Exterior View"
      },
      {
        "id": "img-modern-loft-001",
        "url": "/images/image-148.jpg",
        "alt": "Modern Loft Tiny House Exterior View"
      }
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
    name: "Modern 1-Bed RoamLite with Loft",
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
        "id": "img-roamlite-001",
        "url": "/images/image-295.jpg",
        "alt": "RoamLite Tiny House Exterior View"
      },
      {
        "id": "img-roamlite-001",
        "url": "/images/image-296.jpg",
        "alt": "RoamLite Tiny House Exterior View"
      },
      {
        "id": "img-roamlite-001",
        "url": "/images/image-297.jpg",
        "alt": "RoamLite Tiny House Exterior View"
      },
      {
        "id": "img-roamlite-001",
        "url": "/images/image-298.jpg",
        "alt": "RoamLite Tiny House Exterior View"
      },
      {
        "id": "img-roamlite-001",
        "url": "/images/image-299.jpg",
        "alt": "RoamLite Tiny House Exterior View"
      },
      {
        "id": "img-roamlite-001",
        "url": "/images/image-300.jpg",
        "alt": "RoamLite Tiny House Exterior View"
      },
      {
        "id": "img-roamlite-001",
        "url": "/images/image-301.jpg",
        "alt": "RoamLite Tiny House Exterior View"
      },
      {
        "id": "img-roamlite-001",
        "url": "/images/image-302.jpg",
        "alt": "RoamLite Tiny House Exterior View"
      },
      {
        "id": "img-roamlite-001",
        "url": "/images/image-303.jpg",
        "alt": "RoamLite Tiny House Exterior View"
      },
      {
        "id": "img-roamlite-001",
        "url": "/images/image-304.jpg",
        "alt": "RoamLite Tiny House Exterior View"
      },
      {
        "id": "img-roamlite-001",
        "url": "/images/image-305.jpg",
        "alt": "RoamLite Tiny House Exterior View"
      },
      {
        "id": "img-roamlite-001",
        "url": "/images/image-306.jpg",
        "alt": "RoamLite Tiny House Exterior View"
      },
      {
        "id": "img-roamlite-001",
        "url": "/images/image-307.jpg",
        "alt": "RoamLite Tiny House Exterior View"
      },
      {
        "id": "img-roamlite-001",
        "url": "/images/image-308.jpg",
        "alt": "RoamLite Tiny House Exterior View"
      },
      {
        "id": "img-roamlite-001",
        "url": "/images/image-309.jpg",
        "alt": "RoamLite Tiny House Exterior View"
      },
      {
        "id": "img-roamlite-001",
        "url": "/images/image-310.jpg",
        "alt": "RoamLite Tiny House Exterior View"
      },
      {
        "id": "img-roamlite-001",
        "url": "/images/image-311.png",
        "alt": "RoamLite Tiny House Exterior View"
      }
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
    name: "Modern 1-Bed Tiny Home with Loft",
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
        "id": "img-modern-tiny-001",
        "url": "/images/image-149.jpg",
        "alt": "Modern Tiny Home Exterior View"
      },
      {
        "id": "img-modern-tiny-001",
        "url": "/images/image-150.jpg",
        "alt": "Modern Tiny Home Exterior View"
      },
      {
        "id": "img-modern-tiny-001",
        "url": "/images/image-151.jpg",
        "alt": "Modern Tiny Home Exterior View"
      },
      {
        "id": "img-modern-tiny-001",
        "url": "/images/image-152.jpg",
        "alt": "Modern Tiny Home Exterior View"
      },
      {
        "id": "img-modern-tiny-001",
        "url": "/images/image-153.jpg",
        "alt": "Modern Tiny Home Exterior View"
      },
      {
        "id": "img-modern-tiny-001",
        "url": "/images/image-154.jpg",
        "alt": "Modern Tiny Home Exterior View"
      },
      {
        "id": "img-modern-tiny-001",
        "url": "/images/image-155.jpg",
        "alt": "Modern Tiny Home Exterior View"
      },
      {
        "id": "img-modern-tiny-001",
        "url": "/images/image-156.jpg",
        "alt": "Modern Tiny Home Exterior View"
      },
      {
        "id": "img-modern-tiny-001",
        "url": "/images/image-157.jpg",
        "alt": "Modern Tiny Home Exterior View"
      },
      {
        "id": "img-modern-tiny-001",
        "url": "/images/image-158.jpg",
        "alt": "Modern Tiny Home Exterior View"
      },
      {
        "id": "img-modern-tiny-001",
        "url": "/images/image-159.jpg",
        "alt": "Modern Tiny Home Exterior View"
      },
      {
        "id": "img-modern-tiny-001",
        "url": "/images/image-160.jpg",
        "alt": "Modern Tiny Home Exterior View"
      },
      {
        "id": "img-modern-tiny-001",
        "url": "/images/image-161.jpg",
        "alt": "Modern Tiny Home Exterior View"
      },
      {
        "id": "img-modern-tiny-001",
        "url": "/images/image-162.jpg",
        "alt": "Modern Tiny Home Exterior View"
      },
      {
        "id": "img-modern-tiny-001",
        "url": "/images/image-163.jpg",
        "alt": "Modern Tiny Home Exterior View"
      },
      {
        "id": "img-modern-tiny-001",
        "url": "/images/image-164.jpg",
        "alt": "Modern Tiny Home Exterior View"
      }
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
    name: "Luxe Loft Tiny Home on Wheels",
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
        "id": "img-modern-tiny-001",
        "url": "/images/image-165.jpg",
        "alt": "Modern Tiny Home Exterior View"
      },
      {
        "id": "img-modern-tiny-001",
        "url": "/images/image-166.jpg",
        "alt": "Modern Tiny Home Exterior View"
      },
      {
        "id": "img-modern-tiny-001",
        "url": "/images/image-167.jpg",
        "alt": "Modern Tiny Home Exterior View"
      },
      {
        "id": "img-modern-tiny-001",
        "url": "/images/image-168.jpg",
        "alt": "Modern Tiny Home Exterior View"
      },
      {
        "id": "img-modern-tiny-001",
        "url": "/images/image-169.jpg",
        "alt": "Modern Tiny Home Exterior View"
      },
      {
        "id": "img-modern-tiny-001",
        "url": "/images/image-170.jpg",
        "alt": "Modern Tiny Home Exterior View"
      },
      {
        "id": "img-modern-tiny-001",
        "url": "/images/image-171.jpg",
        "alt": "Modern Tiny Home Exterior View"
      },
      {
        "id": "img-modern-tiny-001",
        "url": "/images/image-172.jpg",
        "alt": "Modern Tiny Home Exterior View"
      },
      {
        "id": "img-modern-tiny-001",
        "url": "/images/image-173.jpg",
        "alt": "Modern Tiny Home Exterior View"
      },
      {
        "id": "img-modern-tiny-001",
        "url": "/images/image-174.jpg",
        "alt": "Modern Tiny Home Exterior View"
      },
      {
        "id": "img-modern-tiny-001",
        "url": "/images/image-175.jpg",
        "alt": "Modern Tiny Home Exterior View"
      },
      {
        "id": "img-modern-tiny-001",
        "url": "/images/image-176.jpg",
        "alt": "Modern Tiny Home Exterior View"
      },
      {
        "id": "img-modern-tiny-001",
        "url": "/images/image-177.jpg",
        "alt": "Modern Tiny Home Exterior View"
      },
      {
        "id": "img-modern-tiny-001",
        "url": "/images/image-178.jpg",
        "alt": "Modern Tiny Home Exterior View"
      }
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
        "id": "img-furnished-tiny-001",
        "url": "/images/image-179.jpg",
        "alt": "Fully Furnished Tiny Home Exterior View"
      },
      {
        "id": "img-furnished-tiny-001",
        "url": "/images/image-180.jpg",
        "alt": "Fully Furnished Tiny Home Exterior View"
      },
      {
        "id": "img-furnished-tiny-001",
        "url": "/images/image-181.jpg",
        "alt": "Fully Furnished Tiny Home Exterior View"
      },
      {
        "id": "img-furnished-tiny-001",
        "url": "/images/image-182.jpg",
        "alt": "Fully Furnished Tiny Home Exterior View"
      },
      {
        "id": "img-furnished-tiny-001",
        "url": "/images/image-183.jpg",
        "alt": "Fully Furnished Tiny Home Exterior View"
      },
      {
        "id": "img-furnished-tiny-001",
        "url": "/images/image-184.jpg",
        "alt": "Fully Furnished Tiny Home Exterior View"
      },
      {
        "id": "img-furnished-tiny-001",
        "url": "/images/image-185.jpg",
        "alt": "Fully Furnished Tiny Home Exterior View"
      },
      {
        "id": "img-furnished-tiny-001",
        "url": "/images/image-186.jpg",
        "alt": "Fully Furnished Tiny Home Exterior View"
      },
      {
        "id": "img-furnished-tiny-001",
        "url": "/images/image-187.jpg",
        "alt": "Fully Furnished Tiny Home Exterior View"
      },
      {
        "id": "img-furnished-tiny-001",
        "url": "/images/image-188.jpg",
        "alt": "Fully Furnished Tiny Home Exterior View"
      },
      {
        "id": "img-furnished-tiny-001",
        "url": "/images/image-189.jpg",
        "alt": "Fully Furnished Tiny Home Exterior View"
      },
      {
        "id": "img-furnished-tiny-001",
        "url": "/images/image-190.jpg",
        "alt": "Fully Furnished Tiny Home Exterior View"
      },
      {
        "id": "img-furnished-tiny-001",
        "url": "/images/image-191.jpg",
        "alt": "Fully Furnished Tiny Home Exterior View"
      },
      {
        "id": "img-furnished-tiny-001",
        "url": "/images/image-192.jpg",
        "alt": "Fully Furnished Tiny Home Exterior View"
      },
      {
        "id": "img-furnished-tiny-001",
        "url": "/images/image-193.jpg",
        "alt": "Fully Furnished Tiny Home Exterior View"
      },
      {
        "id": "img-furnished-tiny-001",
        "url": "/images/image-194.jpg",
        "alt": "Fully Furnished Tiny Home Exterior View"
      },
      {
        "id": "img-furnished-tiny-001",
        "url": "/images/image-195.jpg",
        "alt": "Fully Furnished Tiny Home Exterior View"
      },
      {
        "id": "img-furnished-tiny-001",
        "url": "/images/image-196.jpg",
        "alt": "Fully Furnished Tiny Home Exterior View"
      },
      {
        "id": "img-furnished-tiny-001",
        "url": "/images/image-197.jpg",
        "alt": "Fully Furnished Tiny Home Exterior View"
      },
      {
        "id": "img-furnished-tiny-001",
        "url": "/images/image-198.jpg",
        "alt": "Fully Furnished Tiny Home Exterior View"
      },
      {
        "id": "img-furnished-tiny-001",
        "url": "/images/image-199.jpg",
        "alt": "Fully Furnished Tiny Home Exterior View"
      },
      {
        "id": "img-furnished-tiny-001",
        "url": "/images/image-200.png",
        "alt": "Fully Furnished Tiny Home Exterior View"
      }
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
    name: "Modern 1-Bed Tiny Home with Dual Bathrooms",
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
        "id": "img-399tiny-001",
        "url": "/images/image-201.jpg",
        "alt": "399 sqft Tiny Home On Wheels Exterior View"
      },
      {
        "id": "img-399tiny-001",
        "url": "/images/image-202.jpg",
        "alt": "399 sqft Tiny Home On Wheels Exterior View"
      },
      {
        "id": "img-399tiny-001",
        "url": "/images/image-203.jpg",
        "alt": "399 sqft Tiny Home On Wheels Exterior View"
      },
      {
        "id": "img-399tiny-001",
        "url": "/images/image-204.jpg",
        "alt": "399 sqft Tiny Home On Wheels Exterior View"
      },
      {
        "id": "img-399tiny-001",
        "url": "/images/image-205.jpg",
        "alt": "399 sqft Tiny Home On Wheels Exterior View"
      },
      {
        "id": "img-399tiny-001",
        "url": "/images/image-206.jpg",
        "alt": "399 sqft Tiny Home On Wheels Exterior View"
      },
      {
        "id": "img-399tiny-001",
        "url": "/images/image-207.jpg",
        "alt": "399 sqft Tiny Home On Wheels Exterior View"
      },
      {
        "id": "img-399tiny-001",
        "url": "/images/image-208.jpg",
        "alt": "399 sqft Tiny Home On Wheels Exterior View"
      },
      {
        "id": "img-399tiny-001",
        "url": "/images/image-209.jpg",
        "alt": "399 sqft Tiny Home On Wheels Exterior View"
      },
      {
        "id": "img-399tiny-001",
        "url": "/images/image-210.jpg",
        "alt": "399 sqft Tiny Home On Wheels Exterior View"
      },
      {
        "id": "img-399tiny-001",
        "url": "/images/image-211.jpg",
        "alt": "399 sqft Tiny Home On Wheels Exterior View"
      },
      {
        "id": "img-399tiny-001",
        "url": "/images/image-212.jpg",
        "alt": "399 sqft Tiny Home On Wheels Exterior View"
      },
      {
        "id": "img-399tiny-001",
        "url": "/images/image-213.jpg",
        "alt": "399 sqft Tiny Home On Wheels Exterior View"
      },
      {
        "id": "img-399tiny-001",
        "url": "/images/image-214.jpg",
        "alt": "399 sqft Tiny Home On Wheels Exterior View"
      },
      {
        "id": "img-399tiny-001",
        "url": "/images/image-215.jpg",
        "alt": "399 sqft Tiny Home On Wheels Exterior View"
      },
      {
        "id": "img-399tiny-001",
        "url": "/images/image-216.jpg",
        "alt": "399 sqft Tiny Home On Wheels Exterior View"
      },
      {
        "id": "img-399tiny-001",
        "url": "/images/image-217.jpg",
        "alt": "399 sqft Tiny Home On Wheels Exterior View"
      },
      {
        "id": "img-399tiny-001",
        "url": "/images/image-218.png",
        "alt": "399 sqft Tiny Home On Wheels Exterior View"
      }
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
      "399 sqft ,welcome to your new sanctuary—a stylish 399 sqft tiny home that redefines modern living. This meticulously designed one-bedroom, two-bathroom abode combines comfort, convenience, and elegance. Built on a robust steel frame with high-quality materials throughout, this home is perfect for those seeking a luxurious yet efficient living space.",
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
    name: "Modern 2-Bed Tiny Home with Single Bath",
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
        "id": "img-400-2bed-001",
        "url": "/images/image-219.jpeg",
        "alt": "2 Beds, 1 Bath Tiny Home Exterior View"
      },
      {
        "id": "img-400-2bed-001",
        "url": "/images/image-220.png",
        "alt": "2 Beds, 1 Bath Tiny Home Exterior View"
      },
      {
        "id": "img-400-2bed-001",
        "url": "/images/image-221.jpeg",
        "alt": "2 Beds, 1 Bath Tiny Home Exterior View"
      },
      {
        "id": "img-400-2bed-001",
        "url": "/images/image-222.jpeg",
        "alt": "2 Beds, 1 Bath Tiny Home Exterior View"
      },
      {
        "id": "img-400-2bed-001",
        "url": "/images/image-223.jpeg",
        "alt": "2 Beds, 1 Bath Tiny Home Exterior View"
      },
      {
        "id": "img-400-2bed-001",
        "url": "/images/image-224.jpeg",
        "alt": "2 Beds, 1 Bath Tiny Home Exterior View"
      },
      {
        "id": "img-400-2bed-001",
        "url": "/images/image-225.jpeg",
        "alt": "2 Beds, 1 Bath Tiny Home Exterior View"
      },
      {
        "id": "img-400-2bed-001",
        "url": "/images/image-226.jpeg",
        "alt": "2 Beds, 1 Bath Tiny Home Exterior View"
      },
      {
        "id": "img-400-2bed-001",
        "url": "/images/image-227.jpeg",
        "alt": "2 Beds, 1 Bath Tiny Home Exterior View"
      },
      {
        "id": "img-400-2bed-001",
        "url": "/images/image-228.jpeg",
        "alt": "2 Beds, 1 Bath Tiny Home Exterior View"
      },
      {
        "id": "img-400-2bed-001",
        "url": "/images/image-229.jpeg",
        "alt": "2 Beds, 1 Bath Tiny Home Exterior View"
      },
      {
        "id": "img-400-2bed-001",
        "url": "/images/image-230.jpeg",
        "alt": "2 Beds, 1 Bath Tiny Home Exterior View"
      },
      {
        "id": "img-400-2bed-001",
        "url": "/images/image-231.jpeg",
        "alt": "2 Beds, 1 Bath Tiny Home Exterior View"
      },
      {
        "id": "img-400-2bed-001",
        "url": "/images/image-232.jpeg",
        "alt": "2 Beds, 1 Bath Tiny Home Exterior View"
      }
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
      "2 Beds, 1 Bath , step into a world of modern living with this expertly crafted 400 sqft tiny home, featuring two bedrooms and one bathroom. Built with durability and style in mind, this home offers the perfect blend of comfort and functionality. The thoughtful design includes vaulted ceilings, modern amenities, and energy-efficient features, making it ideal for small families or those seeking a spacious tiny living solution.",
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
    name: "Modern 1-Bed Mobile Tiny Home with Bay Window",
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
        "id": "img-399mobile-001",
        "url": "/images/image-234.jpg",
        "alt": "399 sqft Mobile Tiny Home Exterior View"
      },
      {
        "id": "img-399mobile-001",
        "url": "/images/image-233.jpg",
        "alt": "399 sqft Mobile Tiny Home Exterior View"
      },
      {
        "id": "img-399mobile-001",
        "url": "/images/image-235.jpg",
        "alt": "399 sqft Mobile Tiny Home Exterior View"
      },
      {
        "id": "img-399mobile-001",
        "url": "/images/image-236.jpg",
        "alt": "399 sqft Mobile Tiny Home Exterior View"
      },
      {
        "id": "img-399mobile-001",
        "url": "/images/image-237.jpg",
        "alt": "399 sqft Mobile Tiny Home Exterior View"
      },
      {
        "id": "img-399mobile-001",
        "url": "/images/image-238.jpg",
        "alt": "399 sqft Mobile Tiny Home Exterior View"
      },
      {
        "id": "img-399mobile-001",
        "url": "/images/image-239.jpg",
        "alt": "399 sqft Mobile Tiny Home Exterior View"
      },
      {
        "id": "img-399mobile-001",
        "url": "/images/image-240.jpg",
        "alt": "399 sqft Mobile Tiny Home Exterior View"
      },
      {
        "id": "img-399mobile-001",
        "url": "/images/image-241.jpg",
        "alt": "399 sqft Mobile Tiny Home Exterior View"
      },
      {
        "id": "img-399mobile-001",
        "url": "/images/image-242.jpg",
        "alt": "399 sqft Mobile Tiny Home Exterior View"
      },
      {
        "id": "img-399mobile-001",
        "url": "/images/image-243.jpg",
        "alt": "399 sqft Mobile Tiny Home Exterior View"
      },
      {
        "id": "img-399mobile-001",
        "url": "/images/image-244.jpg",
        "alt": "399 sqft Mobile Tiny Home Exterior View"
      },
      {
        "id": "img-399mobile-001",
        "url": "/images/image-245.jpg",
        "alt": "399 sqft Mobile Tiny Home Exterior View"
      },
      {
        "id": "img-399mobile-001",
        "url": "/images/image-246.jpg",
        "alt": "399 sqft Mobile Tiny Home Exterior View"
      },
      {
        "id": "img-399mobile-001",
        "url": "/images/image-247.jpg",
        "alt": "399 sqft Mobile Tiny Home Exterior View"
      },
      {
        "id": "img-399mobile-001",
        "url": "/images/image-248.jpg",
        "alt": "399 sqft Mobile Tiny Home Exterior View"
      },
      {
        "id": "img-399mobile-001",
        "url": "/images/image-249.jpg",
        "alt": "399 sqft Mobile Tiny Home Exterior View"
      }
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
      "1 Bed, 1 Bath  ,step into a world of cozy living with this exquisite 399 sqft tiny home, featuring thoughtful design elements that enhance both comfort and style. The stunning bay window, elegant French door, and functional L-shaped kitchen create a perfect balance of aesthetics and practicality. This beautifully crafted mobile home is ideal for those who appreciate fine details while maintaining the flexibility of a mobile lifestyle.",
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
    name: "Modern 399 sqft Tiny Home with Front Porch",
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
        "id": "img-399space-001",
        "url": "/images/image-265.jpg",
        "alt": "Spacious 399 sqft Tiny Home Exterior View"
      },
      {
        "id": "img-399space-001",
        "url": "/images/image-250.jpg",
        "alt": "Spacious 399 sqft Tiny Home Exterior View"
      },
      {
        "id": "img-399space-001",
        "url": "/images/image-251.jpg",
        "alt": "Spacious 399 sqft Tiny Home Exterior View"
      },
      {
        "id": "img-399space-001",
        "url": "/images/image-252.jpg",
        "alt": "Spacious 399 sqft Tiny Home Exterior View"
      },
      {
        "id": "img-399space-001",
        "url": "/images/image-253.jpg",
        "alt": "Spacious 399 sqft Tiny Home Exterior View"
      },
      {
        "id": "img-399space-001",
        "url": "/images/image-254.jpg",
        "alt": "Spacious 399 sqft Tiny Home Exterior View"
      },
      {
        "id": "img-399space-001",
        "url": "/images/image-255.jpg",
        "alt": "Spacious 399 sqft Tiny Home Exterior View"
      },
      {
        "id": "img-399space-001",
        "url": "/images/image-256.jpg",
        "alt": "Spacious 399 sqft Tiny Home Exterior View"
      },
      {
        "id": "img-399space-001",
        "url": "/images/image-257.jpg",
        "alt": "Spacious 399 sqft Tiny Home Exterior View"
      },
      {
        "id": "img-399space-001",
        "url": "/images/image-258.jpg",
        "alt": "Spacious 399 sqft Tiny Home Exterior View"
      },
      {
        "id": "img-399space-001",
        "url": "/images/image-259.jpg",
        "alt": "Spacious 399 sqft Tiny Home Exterior View"
      },
      {
        "id": "img-399space-001",
        "url": "/images/image-260.jpg",
        "alt": "Spacious 399 sqft Tiny Home Exterior View"
      },
      {
        "id": "img-399space-001",
        "url": "/images/image-261.jpg",
        "alt": "Spacious 399 sqft Tiny Home Exterior View"
      },
      {
        "id": "img-399space-001",
        "url": "/images/image-262.jpg",
        "alt": "Spacious 399 sqft Tiny Home Exterior View"
      },
      {
        "id": "img-399space-001",
        "url": "/images/image-263.jpg",
        "alt": "Spacious 399 sqft Tiny Home Exterior View"
      },
      {
        "id": "img-399space-001",
        "url": "/images/image-264.jpg",
        "alt": "Spacious 399 sqft Tiny Home Exterior View"
      },
      {
        "id": "img-399space-001",
        "url": "/images/image-266.jpg",
        "alt": "Spacious 399 sqft Tiny Home Exterior View"
      },
      {
        "id": "img-399space-001",
        "url": "/images/image-267.jpg",
        "alt": "Spacious 399 sqft Tiny Home Exterior View"
      }
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
      "1 Bed, 1 Bath 399 sqft ,step into a new lifestyle with this meticulously designed 399 sqft tiny home, where modern convenience meets cozy living. The spacious U-shaped kitchen, comfortable living area, and private front porch create the perfect balance between functionality and comfort. This thoughtfully crafted home offers everything needed for a comfortable living experience.",
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
    name: "Fully Mobile 399 sqft Tiny Home on Wheels",
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
        "id": "img-399mobile-001",
        "url": "/images/image-268.jpg",
        "alt": "399 sqft Mobile Tiny Home On Wheels Exterior View"
      },
      {
        "id": "img-399mobile-001",
        "url": "/images/image-269.jpg",
        "alt": "399 sqft Mobile Tiny Home On Wheels Exterior View"
      },
      {
        "id": "img-399mobile-001",
        "url": "/images/image-270.jpg",
        "alt": "399 sqft Mobile Tiny Home On Wheels Exterior View"
      },
      {
        "id": "img-399mobile-001",
        "url": "/images/image-271.jpg",
        "alt": "399 sqft Mobile Tiny Home On Wheels Exterior View"
      },
      {
        "id": "img-399mobile-001",
        "url": "/images/image-272.jpg",
        "alt": "399 sqft Mobile Tiny Home On Wheels Exterior View"
      },
      {
        "id": "img-399mobile-001",
        "url": "/images/image-273.jpg",
        "alt": "399 sqft Mobile Tiny Home On Wheels Exterior View"
      },
      {
        "id": "img-399mobile-001",
        "url": "/images/image-274.jpg",
        "alt": "399 sqft Mobile Tiny Home On Wheels Exterior View"
      },
      {
        "id": "img-399mobile-001",
        "url": "/images/image-275.jpg",
        "alt": "399 sqft Mobile Tiny Home On Wheels Exterior View"
      },
      {
        "id": "img-399mobile-001",
        "url": "/images/image-276.jpg",
        "alt": "399 sqft Mobile Tiny Home On Wheels Exterior View"
      },
      {
        "id": "img-399mobile-001",
        "url": "/images/image-277.jpg",
        "alt": "399 sqft Mobile Tiny Home On Wheels Exterior View"
      },
      {
        "id": "img-399mobile-001",
        "url": "/images/image-278.jpg",
        "alt": "399 sqft Mobile Tiny Home On Wheels Exterior View"
      },
      {
        "id": "img-399mobile-001",
        "url": "/images/image-279.jpg",
        "alt": "399 sqft Mobile Tiny Home On Wheels Exterior View"
      },
      {
        "id": "img-399mobile-001",
        "url": "/images/image-280.jpg",
        "alt": "399 sqft Mobile Tiny Home On Wheels Exterior View"
      },
      {
        "id": "img-399mobile-001",
        "url": "/images/image-281.jpg",
        "alt": "399 sqft Mobile Tiny Home On Wheels Exterior View"
      }
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
      "1 Bed, 1 Bath, 399 sqft ,discover the perfect blend of modern convenience and cozy living in this stunning 399 sqft mobile tiny home, designed for those who crave mobility without sacrificing comfort. This fully-equipped home features everything needed for a fulfilling lifestyle, from a comfortable living space to modern appliances.",
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
    name: "Compact 399 sqft Tiny Home with Loft Bedroom",
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
        "id": "img-399loft-001",
        "url": "/images/image-282.jpg",
        "alt": "399 sqft Tiny Home with Loft Bedroom Exterior View"
      },
      {
        "id": "img-399loft-001",
        "url": "/images/image-283.jpg",
        "alt": "399 sqft Tiny Home with Loft Bedroom Exterior View"
      },
      {
        "id": "img-399loft-001",
        "url": "/images/image-284.jpg",
        "alt": "399 sqft Tiny Home with Loft Bedroom Exterior View"
      },
      {
        "id": "img-399loft-001",
        "url": "/images/image-285.jpg",
        "alt": "399 sqft Tiny Home with Loft Bedroom Exterior View"
      },
      {
        "id": "img-399loft-001",
        "url": "/images/image-286.jpg",
        "alt": "399 sqft Tiny Home with Loft Bedroom Exterior View"
      },
      {
        "id": "img-399loft-001",
        "url": "/images/image-287.jpg",
        "alt": "399 sqft Tiny Home with Loft Bedroom Exterior View"
      },
      {
        "id": "img-399loft-001",
        "url": "/images/image-288.jpg",
        "alt": "399 sqft Tiny Home with Loft Bedroom Exterior View"
      },
      {
        "id": "img-399loft-001",
        "url": "/images/image-289.jpg",
        "alt": "399 sqft Tiny Home with Loft Bedroom Exterior View"
      },
      {
        "id": "img-399loft-001",
        "url": "/images/image-290.jpg",
        "alt": "399 sqft Tiny Home with Loft Bedroom Exterior View"
      },
      {
        "id": "img-399loft-001",
        "url": "/images/image-291.jpg",
        "alt": "399 sqft Tiny Home with Loft Bedroom Exterior View"
      },
      {
        "id": "img-399loft-001",
        "url": "/images/image-292.jpg",
        "alt": "399 sqft Tiny Home with Loft Bedroom Exterior View"
      },
      {
        "id": "img-399loft-001",
        "url": "/images/image-293.jpg",
        "alt": "399 sqft Tiny Home with Loft Bedroom Exterior View"
      },
      {
        "id": "img-399loft-001",
        "url": "/images/image-294.jpg",
        "alt": "399 sqft Tiny Home with Loft Bedroom Exterior View"
      }
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
      "399 sqft ,step into a new lifestyle with this beautifully crafted 399 sqft tiny home, designed for comfort, convenience, and modern living. The loft bedroom configuration maximizes living space while providing a cozy sleeping area. Built on a robust, rust-resistant steel foundation, this mobile sanctuary combines style with practicality.",
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
