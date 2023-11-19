import { Metadata } from "next";
import React, { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Tourist - Travel Agency",
  description:
    "Book your dream vacation with ease at Web Travel Tourist. Our Booking page offers a seamless and secure platform to reserve your preferred accommodations, transportation, and activities. Discover a wide range of options tailored to your travel preferences and budget. Start your journey today by selecting your desired dates and exploring our available booking options. Create lasting memories with Web Travel Tourist.",
};

function BookingLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

export default BookingLayout;
