"use client";
import React, { useState, useEffect } from "react";
import { Star } from "lucide-react";
import Footer from "./Footer";
import Navbar from "./Navbar";

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

const formatTimeAgo = (timestamp: any) => {
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
  if (minutes > 0)
    return `${minutes} ${minutes === 1 ? "minute" : "minutes"} ago`;
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
            <h4 className="font-semibold text-gray-900">{review.name}</h4>
            <span className="text-gray-500 text-sm">{timeAgo}</span>
          </div>
        </div>
        <div className="flex items-center gap-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={16}
              className={
                i < review.rating
                  ? "fill-yellow-400 text-yellow-400"
                  : "text-gray-300"
              }
            />
          ))}
        </div>
        <p className="text-gray-600 flex-grow">{review.text}</p>
        {review.verified && (
          <div className="flex items-center gap-2 mt-4">
            <svg
              className="w-5 h-5 text-blue-500"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-sm text-blue-600 font-medium">
              Google Review
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

const ProductReviews = () => {
  const [sortBy, setSortBy] = useState("recent");

  const reviews = [
    {
      name: "Michael Thompson",
      timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
      rating: 5,
      text: "I recently purchased a tiny home on wheels, and I couldn't be happier! The quality is top-notch, and it provides ample space for all my needs. The attention to detail in the construction is impressive.",
      verified: true,
    },
    {
      name: "Sarah Mitchell",
      timestamp: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString(),
      rating: 5,
      text: "The ventilation features are excellent and have made a world of difference for my living experience. The airflow keeps everything fresh and comfortable.",
      verified: true,
    },
    {
      name: "James Anderson",
      timestamp: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
      rating: 5,
      text: "The layout is perfect for my lifestyle. The design makes accessing everything a breeze. Build quality is excellent and I feel very secure.",
      verified: true,
    },
    {
      name: "Emily Johnson",
      timestamp: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString(),
      rating: 5,
      text: "Absolutely thrilled with my tiny home! It's incredibly spacious and perfect for entertaining. The service team was professional and prompt.",
      verified: true,
    },
    {
      name: "Robert Garcia",
      timestamp: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString(),
      rating: 4,
      text: "Fantastic service and product! My tiny home arrived as promised and the layout is perfect. The team was very helpful throughout.",
      verified: true,
    },
    {
      name: "Lisa Wang",
      timestamp: new Date(Date.now() - 35 * 24 * 60 * 60 * 1000).toISOString(),
      rating: 5,
      text: "Outstanding quality and customer service. The attention to detail in my tiny home is remarkable. Highly recommend!",
      verified: true,
    },
    {
      name: "David Kim",
      timestamp: new Date(Date.now() - 40 * 24 * 60 * 60 * 1000).toISOString(),
      rating: 5,
      text: "Perfect solution for modern living. Energy efficient and beautifully designed. Couldn't be happier with my purchase.",
      verified: true,
    },
    {
      name: "Maria Rodriguez",
      timestamp: new Date(Date.now() - 45 * 24 * 60 * 60 * 1000).toISOString(),
      rating: 5,
      text: "The craftsmanship is exceptional. Every inch of space is thoughtfully designed. Great investment!",
      verified: true,
    },
    {
      name: "Thomas Wright",
      timestamp: new Date(Date.now() - 50 * 24 * 60 * 60 * 1000).toISOString(),
      rating: 5,
      text: "Excellent build quality and amazing customer support throughout the process. Highly recommended!",
      verified: true,
    },
  ];

  return (
    <>
      <div className="max-w-[1300px] mx-auto px-4 py-12">
        <div className="bg-white rounded-lg border">
          <div className="p-6 border-b">
            <div className="flex-col flex gap-2 md:flex-row md:flex md:items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <GoogleLogo />
                <div>
                  <h2 className="text-2xl font-bold">Google Reviews</h2>
                  <p className="text-gray-600">
                    Displaying 9 out of 2,200 reviews
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={24}
                        className="fill-yellow-400 text-yellow-400"
                      />
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

          {/* Reviews Grid */}
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reviews.map((review, index) => (
                <ReviewCard key={index} review={review} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductReviews;
