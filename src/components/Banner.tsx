"use client";
import Image from "next/image";
import React from "react";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

function Banner() {
  const router = useRouter();

  const scrollToQuote = () => {
    const quoteSection = document.getElementById("quote");
    if (quoteSection) {
      quoteSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="h-[100svh] bg-[#FAF5EF] relative">
      <div className="max-w-[1300px] h-full relative mx-auto">
        {/* Background container */}
        <div className="w-full h-full relative overflow-hidden">
          <Image
            src="/images/pexels-pixabay-209296.jpg"
            alt="Luxury Tiny Home"
            fill
            priority
            className="object-cover absolute inset-0 transform scale-105 hover:scale-100 transition-transform duration-700"
          />
          {/* Gradient overlay for better contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />

          {/* Main content container */}
          <div className="relative h-full flex flex-col items-center justify-center px-4">
            <div className="text-center transform translate-y-[-50%] space-y-4">
              <h4 className="text-blue-400 font-semibold tracking-wider uppercase text-lg md:text-xl mb-2 animate-fade-in">
                Homes on wheels
              </h4>
              <h1 className="text-white text-4xl md:text-6xl lg:text-[80px] font-bold tracking-tight whitespace-nowrap animate-slide-up">
                TINY HOMES
              </h1>
              <div className="w-24 h-1 bg-blue-500 mx-auto mt-4 animate-expand" />
            </div>
          </div>
        </div>

        {/* Bottom info box */}
        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[-80px] w-[90%] md:w-[85%] bg-white rounded-lg shadow-2xl">
          <div className="flex flex-col md:flex-row items-center p-8 md:p-10">
            <div className="flex-1 pr-0 md:pr-10">
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                Our expansive portfolio features a diverse selection of TINY
                HOMES designs, floorplans, and customization options to suit the
                unique needs and preferences of every individual and family.
                Whether you're seeking a cozy starter home, a spacious family
                retreat, or a versatile investment property, our knowledgeable
                team is here to guide you through the process.
              </p>
            </div>
            <div className="mt-6 md:mt-0 md:pl-10 md:border-l border-gray-200">
              <button
                onClick={scrollToQuote}
                className="group bg-[#D37643] hover:bg-[#C26532] text-white px-8 py-4 rounded-md transition-all duration-300 flex items-center space-x-2"
              >
                <span className="uppercase font-semibold tracking-wide">
                  Request Quote
                </span>
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slide-up {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes expand {
          from {
            width: 0;
          }
          to {
            width: 6rem;
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 1s ease-out;
        }

        .animate-expand {
          animation: expand 1.5s ease-out;
        }
      `}</style>
    </div>
  );
}

export default Banner;
