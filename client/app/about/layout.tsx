import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Tourist - Travel Agency",
  description:
    "Discover the world with Web Travel Tourist - your trusted travel companion. Our About Us page showcases our commitment to providing unforgettable travel experiences tailored to your unique preferences. Explore our diverse travel styles, handpicked accommodations, and personalized services. Join us on a journey of discovery and create cherished memories with Web Travel Tourist, your gateway to extraordinary destinations.",
};

export default function AboutLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
