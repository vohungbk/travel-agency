import { Metadata } from "next";
import React, { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Tourist - Travel Agency",
  description:
    "Embark on a journey to breathtaking destinations with Web Travel Tourist. Our Destination page provides a comprehensive guide to the most captivating places around the world. Explore detailed information, stunning imagery, and curated travel itineraries for each destination. From hidden gems to popular hotspots, discover the perfect location for your next adventure. Immerse yourself in diverse cultures, awe-inspiring landscapes, and extraordinary experiences. Start planning your dream trip with Web Travel Tourist today.",
};

function DestinationLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

export default DestinationLayout;
