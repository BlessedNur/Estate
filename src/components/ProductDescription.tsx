import React, { useState } from "react";
import type {
  Product,
  FeatureCategory,
  SpecificationCategory,
} from "@/libs/products";

interface ProductDescriptionProps {
  product: Product;
}

type TabType = "description" | "additionalInfo";

interface TabContentProps {
  product: Product;
}

const FeatureList: React.FC<{ category: FeatureCategory }> = ({ category }) => (
  <div>
    <h3 className="text-xl font-bold mb-4">{category.category}</h3>
    <ul className="space-y-3 text-gray-600">
      {category.items.map((item: any, index: any) => (
        <li key={index}>• {item}</li>
      ))}
    </ul>
  </div>
);

const SpecificationTable: React.FC<{ specs: SpecificationCategory }> = ({
  specs,
}) => (
  <div className="space-y-6">
    <h3 className="text-xl font-bold mb-6">{specs.category}</h3>
    <table className="w-full border-collapse mb-8">
      <tbody>
        {specs.items.map((item: any, index: any) => (
          <tr key={index} className="border-b">
            <td className="py-4 w-1/3 font-medium">{item.label}</td>
            <td className="py-4 text-gray-600">{item.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const ConstructionDetails: React.FC<{
  construction: Product["specifications"]["construction"];
}> = ({ construction }) => {
  if (!construction) return null;

  return (
    <div className="space-y-3 text-gray-600">
      {construction.walls && <li>• Walls: {construction.walls}</li>}
      {construction.floorJoists && (
        <li>• Floor Joists: {construction.floorJoists}</li>
      )}
      {construction.roofLoad && <li>• Roof Load: {construction.roofLoad}</li>}
      {construction.insulation && (
        <>
          <li>• Ceiling Insulation: {construction.insulation.ceiling}</li>
          <li>• Wall Insulation: {construction.insulation.walls}</li>
          <li>• Floor Insulation: {construction.insulation.floor}</li>
        </>
      )}
      {construction.flooring && <li>• Flooring: {construction.flooring}</li>}
    </div>
  );
};

const DescriptionTab: React.FC<TabContentProps> = ({ product }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    <div>
      {product.features.construction && (
        <FeatureList category={product.features.construction} />
      )}
      {product.features.exterior && (
        <div className="mt-8">
          <FeatureList category={product.features.exterior} />
        </div>
      )}
    </div>
    <div>
      {product.features.interior && (
        <FeatureList category={product.features.interior} />
      )}
      {product.features.systems && (
        <div className="mt-8">
          <FeatureList category={product.features.systems} />
        </div>
      )}
    </div>

    <div className="md:col-span-2 prose max-w-none mt-6">
      <h3 className="text-xl font-bold mb-4">Overview</h3>
      <p className="text-gray-600 leading-relaxed">{product.overview}</p>

      {product.highlights && product.highlights.length > 0 && (
        <div className="mt-6">
          <h4 className="text-lg font-bold mb-3">Key Highlights</h4>
          <ul className="space-y-2">
            {product.highlights.map((highlight, index) => (
              <li key={index} className="text-gray-600">
                • {highlight}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  </div>
);

const AdditionalInfoTab: React.FC<TabContentProps> = ({ product }) => (
  <div className="space-y-8">
    {product.kitchenSpecs?.map((spec, index) => (
      <SpecificationTable key={index} specs={spec} />
    ))}

    {product.bathroomSpecs?.map((spec, index) => (
      <SpecificationTable key={index} specs={spec} />
    ))}

    {product.utilitySpecs?.map((spec, index) => (
      <SpecificationTable key={index} specs={spec} />
    ))}

    <div className="mt-8">
      <h3 className="text-xl font-bold mb-4">Warranty Information</h3>
      <p className="text-gray-600 mb-2">
        Duration: {product.warranty.duration}
      </p>
      <ul className="space-y-2">
        {product.warranty.coverage.map((item, index) => (
          <li key={index} className="text-gray-600">
            • {item}
          </li>
        ))}
      </ul>
    </div>

    <div className="mt-8">
      <h3 className="text-xl font-bold mb-4">Buyer Protection</h3>
      <ul className="space-y-2">
        {product.buyerProtection.features.map((feature, index) => (
          <li key={index} className="text-gray-600">
            • {feature}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const ProductDescription: React.FC<ProductDescriptionProps> = ({ product }) => {
  const [activeTab, setActiveTab] = useState<TabType>("description");

  const tabContent: Record<TabType, React.ReactNode> = {
    description: <DescriptionTab product={product} />,
    additionalInfo: <AdditionalInfoTab product={product} />,
  };

  return (
    <div className="max-w-[1300px] mx-auto px-4 py-12">
      <div className="border rounded-lg">
        <div className="border-b">
          <div className="flex">
            {[
              { id: "description" as const, label: "Description" },
              {
                id: "additionalInfo" as const,
                label: "Additional Information",
              },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-4 font-medium transition-colors ${
                  activeTab === tab.id
                    ? "text-orange-500 border-b-2 border-orange-500"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="p-6 space-y-6">{tabContent[activeTab]}</div>
      </div>
    </div>
  );
};

export default ProductDescription;
