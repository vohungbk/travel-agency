import { Metadata } from "next";
import React, { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Tourist - Travel Agency",
  description:
    "Explore our enticing travel packages at Web Travel Tourist. From adventurous expeditions to cultural immersions, our carefully curated packages offer unforgettable experiences in extraordinary destinations. Discover the perfect blend of accommodation, activities, and local insights tailored to your preferences. Browse our diverse range of packages and embark on a journey of discovery with Web Travel Tourist today.",
};

function PackageLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

export default PackageLayout;
