import { DollarSign, WrenchIcon, Trophy, Users } from "lucide-react";

const FeatureCard = ({
  icon: Icon,
  title,
  description,
}: {
  icon: any;
  title: string;
  description: string;
}) => (
  <div className="flex flex-col items-center p-6 transition-all duration-300 rounded-lg hover:bg-white hover:shadow-lg">
    <div className="mb-4 p-4 rounded-full bg-blue-100">
      <Icon className="w-8 h-8 text-blue-600" />
    </div>
    <h3 className="font-bold text-xl mb-3 text-gray-800">{title}</h3>
    <p className="text-gray-600 text-center">{description}</p>
  </div>
);

const FeaturesSection = () => {
  const features = [
    {
      icon: DollarSign,
      title: "Best Prices",
      description:
        "Competitive pricing and transparent quotes for all our services with no hidden fees.",
    },
    {
      icon: WrenchIcon,
      title: "Professional Installation",
      description:
        "Expert installation services with attention to detail and quality workmanship.",
    },
    {
      icon: Trophy,
      title: "Rewards Program",
      description:
        "Earn points on every service and get exclusive discounts on future appointments.",
    },
    {
      icon: Users,
      title: "Experienced Technicians",
      description:
        "Certified professionals with years of experience in handling all types of repairs.",
    },
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-[1300px] mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Why Choose Us
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience excellence in service with our comprehensive solutions
            and dedicated team
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
