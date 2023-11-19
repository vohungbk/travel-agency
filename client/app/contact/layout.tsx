import { Metadata } from "next";
import React, { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Tourist - Travel Agency",
  description:
    "Get in touch with our friendly team at Web Travel Tourist. Contact us for any inquiries, travel assistance, or to plan your next adventure. We are here to provide personalized recommendations, answer your questions, and ensure your travel needs are met. Reach out to us today and let us help you create unforgettable memories on your upcoming journey.",
};

function ContactLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

export default ContactLayout;
