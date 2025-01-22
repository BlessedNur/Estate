import { CheckCircle2, ArrowRight } from 'lucide-react';

const WhyChooseSection = () => {
  const features = [
    {
      title: "Quality Guarantee",
      description: "We stand behind our work with a 100% satisfaction guarantee. Every project is completed to the highest standards of quality and craftsmanship."
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock customer support ensures you're never left waiting. Our team is always ready to assist you whenever you need help."
    },
    {
      title: "Licensed Experts",
      description: "Our team consists of fully licensed and certified professionals with years of hands-on experience in the industry."
    },
    {
      title: "Competitive Pricing",
      description: "We offer transparent, competitive pricing without compromising on quality. Get the best value for your investment."
    }
  ];

  return (
    <section className="max-w-[1300px] mx-auto py-20 px-4 lg:px-8">
      <div className="text-center mb-16">
        <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
        <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">What Sets Us Apart</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          With years of experience and a commitment to excellence, we deliver outstanding results that exceed expectations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="flex flex-col gap-4 p-6 rounded-lg hover:shadow-lg transition-all duration-300 bg-white group"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 group-hover:bg-blue-600 transition-colors duration-300">
              <CheckCircle2 className="w-6 h-6 text-blue-600 group-hover:text-white" />
            </div>
            <h3 className="font-bold text-xl">{feature.title}</h3>
            <p className="text-gray-600 leading-relaxed">
              {feature.description}
            </p>
            <div className="mt-auto pt-4 group-hover:text-blue-600 flex items-center gap-2 text-sm font-medium">
              Learn More
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <button className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300">
          Get Started Today
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};

export default WhyChooseSection;