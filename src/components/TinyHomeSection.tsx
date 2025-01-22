import { Home, ArrowRight, Truck, Palette, Leaf } from "lucide-react";

const FeatureItem = ({
  icon: Icon,
  title,
  description,
}: {
  icon: any;
  title: string;
  description: string;
}) => (
  <div className="flex items-start space-x-4">
    <div className="flex-shrink-0">
      <div className="p-2 bg-blue-100 rounded-lg">
        <Icon className="w-5 h-5 text-blue-600" />
      </div>
    </div>
    <div>
      <h4 className="font-semibold text-lg mb-1">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

const TinyHomesSection = () => {
  const features = [
    {
      icon: Truck,
      title: "Mobile Freedom",
      description:
        "Take your home anywhere with our road-ready designs built for adventure.",
    },
    {
      icon: Palette,
      title: "Custom Design",
      description:
        "Personalize every detail to create your perfect living space.",
    },
    {
      icon: Leaf,
      title: "Eco-Friendly",
      description:
        "Sustainable materials and energy-efficient solutions for minimal environmental impact.",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-24">
      <div className="max-w-[1300px] mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
                Experience Tiny Living
              </span>
              <h2 className="text-4xl font-bold mt-4 mb-6 leading-tight">
                Tiny Homes On Wheels:
                <br />
                <span className="text-blue-600">
                  Big Living in Small Spaces
                </span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Discover the freedom of minimal living with our expertly crafted
                tiny homes. Perfect for adventurers, remote workers, or anyone
                seeking a simpler lifestyle without compromising on comfort and
                style.
              </p>
            </div>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <FeatureItem key={index} {...feature} />
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 font-semibold group">
                Explore Our Models
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent" />
              <img
                src="/tiny-home-image.jpg"
                alt="Modern Tiny Home"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-lg shadow-xl">
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Home className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="font-bold text-lg">Starting at</p>
                  <p className="text-blue-600 text-2xl font-bold">$49,999</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TinyHomesSection;
