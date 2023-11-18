import { Metadata } from "next";
import React, { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Tourist - Travel Agency",
  description:
    "Discover our comprehensive range of travel services at Web Travel Tourist. From personalized itineraries and handpicked accommodations to guided tours and transportation options, we provide everything you need for a seamless and unforgettable travel experience. Explore our diverse offerings and let us take care of the details, while you focus on creating lifelong memories. Plan your dream vacation with Web Travel Tourist today.",
};

function ServiceLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

export default ServiceLayout;
