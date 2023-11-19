import { Metadata } from "next";
import React, { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Tourist - Travel Agency",
  description:
    "Read the glowing testimonials from our satisfied customers at Web Travel Tourist. Our Testimonial page showcases the incredible experiences and memories created by our valued travelers. Discover firsthand accounts of their adventures, personalized service, and exceptional travel experiences. Gain insights and inspiration from their stories to plan your own unforgettable journey. Join the community of happy travelers and start your remarkable travel experience with Web Travel Tourist today.",
};

function TestimonialLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

export default TestimonialLayout;
