"use client"
import Banner from "@/components/Banner";
import ReviewsSection from "@/components/CustomerReviews";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProductsSection from "@/components/ProductsSection";
import QuoteRequestSection from "@/components/QouteRequestSection";
import TinyHomesSection from "@/components/TinyHomeSection";
import WhyChooseSection from "@/components/WhyChooseUs";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

export default function Home() {
  const features = [
    {
      title: "Uncompromising Quality",
      description:
        "We pride ourselves on offering only the highest-quality mobile home models, crafted with superior materials and meticulous attention to detail.",
    },
    {
      title: "Free Cancelation",
      description:
        "You will not be charged for order cancelation. You will receive a full refund of the payment you made if canceled 24 hours before processing.",
    },
    {
      title: "Customer Support",
      description:
        "We pride ourselves on providing outstanding customer support to all of our customers. Offering 24/7 customer service to answer all your questions.",
    },
    {
      title: "Refund & Return Policy",
      description:
        "If upon delivery of your Home, you are dissatisfied with the product. We have a refund and return policy that covers you.",
    },
  ];

  return (
    <>
      <Navbar />
      <Banner />

      <ProductsSection />

      <FeaturesSection />
      {/* Why Choose Us Section */}
      <WhyChooseSection />
      <TinyHomesSection />
      <QuoteRequestSection />
      <ReviewsSection />

      <Footer />
    </>
  );
}
