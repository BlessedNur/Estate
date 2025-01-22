"use client";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useCallback } from "react";

const ReviewsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const reviews = [
    {
      rating: 5,
      text: "Absolutely love my new tiny home! The craftsmanship is outstanding and the customer service was exceptional throughout the entire process. The attention to detail and quality materials used exceeded all my expectations.",
      author: "Sarah Johnson",
      date: "December 15, 2024",
      location: "California, USA",
    },
    {
      rating: 5,
      text: "The team at Homesonwheels made my dream of owning a tiny home a reality. From design to delivery, everything was handled professionally. The quality exceeded my expectations!",
      author: "Michael Brown",
      date: "December 10, 2024",
      location: "Texas, USA",
    },
    {
      rating: 5,
      text: "I couldn't be happier with my purchase. The attention to detail and quality of materials used in my tiny home is impressive. The team was helpful and responsive throughout the entire process.",
      author: "Emily Wilson",
      date: "December 5, 2024",
      location: "Florida, USA",
    },
    {
      rating: 5,
      text: "Outstanding experience from start to finish! The customization options were exactly what I was looking for, and the final product is even better than I imagined.",
      author: "David Martinez",
      date: "November 28, 2024",
      location: "Arizona, USA",
    },
    {
      rating: 5,
      text: "The quality and craftsmanship of my tiny home is exceptional. The team was professional, responsive, and made the entire process smooth. Best investment I've made!",
      author: "Jennifer Lee",
      date: "November 20, 2024",
      location: "Washington, USA",
    },
    {
      rating: 5,
      text: "From the initial consultation to the final delivery, everything was perfect. The team's expertise and attention to detail really shows in the final product.",
      author: "Robert Taylor",
      date: "November 15, 2024",
      location: "Colorado, USA",
    },
  ];

  const checkMobile = useCallback(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  useEffect(() => {
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, [checkMobile]);

  const itemsPerSlide = isMobile ? 1 : 3;
  const totalSlides = Math.ceil(reviews.length / itemsPerSlide);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(timer);
  }, [totalSlides]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const getSlideReviews = (slideIndex: any) => {
    const start = slideIndex * itemsPerSlide;
    const end = Math.min(start + itemsPerSlide, reviews.length);
    return reviews.slice(start, end);
  };

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-[1300px] mx-auto px-4 lg:px-0">
        <div className="text-center mb-12">
          <div className="header text-center relative mb-8">
            <div className="line h-0.5 w-full bg-gray-300 absolute bottom-2 -z-1"></div>
            <h2 className="font-bold text-2xl md:text-[30px] bg-white z-10 relative w-fit mx-auto p-4 px-8">
              Customer Reviews
            </h2>
          </div>
          <p className="text-gray-600 text-lg px-4">
            Discover what our satisfied customers have to say about their
            experience
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden mx-auto">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0 px-4">
                  <div className={`grid grid-cols-1 md:grid-cols-3 gap-6`}>
                    {getSlideReviews(slideIndex).map((review, reviewIndex) => (
                      <div
                        key={reviewIndex}
                        className="bg-white rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                      >
                        <div className="flex justify-center gap-1 mb-4">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-5 h-5 fill-yellow-400 text-yellow-400"
                            />
                          ))}
                        </div>
                        <p className="text-gray-700 text-sm md:text-base mb-6 italic leading-relaxed">
                          "{review.text}"
                        </p>
                        <div className="text-center">
                          <h4 className="font-bold text-lg mb-1 text-blue-600">
                            {review.author}
                          </h4>
                          <p className="text-gray-500 text-sm mb-1">
                            {review.location}
                          </p>
                          <p className="text-gray-400 text-xs">{review.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 md:p-3 rounded-full shadow-lg hover:bg-blue-50 transition-colors transform -translate-x-1/2 border border-gray-100 z-10"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 md:p-3 rounded-full shadow-lg hover:bg-blue-50 transition-colors transform translate-x-1/2 border border-gray-100 z-10"
            aria-label="Next review"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
          </button>

          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? "bg-blue-600 w-6"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
