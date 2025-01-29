import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useCallback } from "react";

// Google Logo SVG Component
const GoogleLogo = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5">
    <path
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      fill="#4285F4"
    />
    <path
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      fill="#34A853"
    />
    <path
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      fill="#FBBC05"
    />
    <path
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      fill="#EA4335"
    />
  </svg>
);

const formatTimeAgo = (timestamp: string) => {
  const now = new Date();
  const date = new Date(timestamp);
  const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);

  if (years > 0) return `${years} ${years === 1 ? "year" : "years"} ago`;
  if (months > 0) return `${months} ${months === 1 ? "month" : "months"} ago`;
  if (days > 0) return `${days} ${days === 1 ? "day" : "days"} ago`;
  if (hours > 0) return `${hours} ${hours === 1 ? "hour" : "hours"} ago`;
  if (minutes > 0) return `${minutes} ${minutes === 1 ? "minute" : "minutes"} ago`;
  return "Just now";
};

const ReviewCard = ({ review }: { review: any }) => {
  const [timeAgo, setTimeAgo] = useState("");

  useEffect(() => {
    const updateTimeAgo = () => {
      setTimeAgo(formatTimeAgo(review.timestamp));
    };

    updateTimeAgo();
    const interval = setInterval(updateTimeAgo, 60000);

    return () => clearInterval(interval);
  }, [review.timestamp]);

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border h-full">
      <div className="flex flex-col h-full">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm border">
            <GoogleLogo />
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">{review.author}</h4>
            <span className="text-gray-500 text-sm">{timeAgo}</span>
          </div>
        </div>
        <div className="flex items-center gap-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={16}
              className={i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
            />
          ))}
        </div>
        <p className="text-gray-600 flex-grow">{review.text}</p>
        <div className="flex items-center gap-2 mt-4">
          <svg className="w-5 h-5 text-blue-500" viewBox="0 0 24 24" fill="none">
            <path
              d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-sm text-blue-600 font-medium">Google Review</span>
        </div>
      </div>
    </div>
  );
};

const ReviewsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [sortBy, setSortBy] = useState("recent");

  const reviews = [
    {
      rating: 5,
      text: "Absolutely love my new tiny home! The craftsmanship is outstanding and the customer service was exceptional throughout the entire process. The attention to detail and quality materials used exceeded all my expectations.",
      author: "Sarah Johnson",
      timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
      location: "California, USA",
    },
    {
      rating: 5,
      text: "The team at Homesonwheels made my dream of owning a tiny home a reality. From design to delivery, everything was handled professionally. The quality exceeded my expectations!",
      author: "Michael Brown",
      timestamp: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString(),
      location: "Texas, USA",
    },
    {
      rating: 5,
      text: "I couldn't be happier with my purchase. The attention to detail and quality of materials used in my tiny home is impressive. The team was helpful and responsive throughout the entire process.",
      author: "Emily Wilson",
      timestamp: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
      location: "Florida, USA",
    },
    {
      rating: 5,
      text: "Outstanding experience from start to finish! The customization options were exactly what I was looking for, and the final product is even better than I imagined.",
      author: "David Martinez",
      timestamp: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString(),
      location: "Arizona, USA",
    },
    {
      rating: 5,
      text: "The quality and craftsmanship of my tiny home is exceptional. The team was professional, responsive, and made the entire process smooth. Best investment I've made!",
      author: "Jennifer Lee",
      timestamp: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString(),
      location: "Washington, USA",
    },
    {
      rating: 5,
      text: "From the initial consultation to the final delivery, everything was perfect. The team's expertise and attention to detail really shows in the final product.",
      author: "Robert Taylor",
      timestamp: new Date(Date.now() - 45 * 24 * 60 * 60 * 1000).toISOString(),
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

  const getSlideReviews = (slideIndex: number) => {
    const start = slideIndex * itemsPerSlide;
    const end = Math.min(start + itemsPerSlide, reviews.length);
    return reviews.slice(start, end);
  };

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-[1300px] mx-auto px-4">
        <div className="bg-white rounded-lg border">
          <div className="p-6 border-b">
            <div className="md:flex-row flex gap-3 flex-col justify-between mb-6">
              <div className="flex items-center gap-3">
                <GoogleLogo />
                <div className="">
                  <h2 className="text-2xl font-bold">Google Reviews</h2>
                  <p className="text-gray-600">Displaying {reviews.length} out of 2,200 reviews</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={24} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-xl font-bold">4.8</span>
                </div>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border rounded-lg px-3 py-2 text-sm"
                >
                  <option value="recent">Most Recent</option>
                  <option value="highest">Highest Rated</option>
                  <option value="lowest">Lowest Rated</option>
                </select>
              </div>
            </div>
          </div>

          <div className="relative p-6">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0">
                    <div className={`grid grid-cols-1 md:grid-cols-3 gap-6`}>
                      {getSlideReviews(slideIndex).map((review, reviewIndex) => (
                        <ReviewCard key={reviewIndex} review={review} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 md:p-3 rounded-full shadow-lg hover:bg-gray-50 transition-colors transform -translate-x-1/2 border border-gray-100"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-gray-600" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 md:p-3 rounded-full shadow-lg hover:bg-gray-50 transition-colors transform translate-x-1/2 border border-gray-100"
              aria-label="Next review"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-gray-600" />
            </button>

            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentSlide === index ? "bg-blue-600 w-6" : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to review slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;