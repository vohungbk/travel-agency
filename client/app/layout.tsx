import { Footer, Nav, Spinner } from "@/components";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import Script from "next/script";
import "../public/lib/animate/animate.min.css";
import "../public/lib/owlcarousel/assets/owl.carousel.min.css";
import "../public/lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css";
import "../public/css/bootstrap.min.css";
import "./globals.css";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tourist - Travel Agency",
  description: "Enjoy Your Vacation With Us",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css"
          integrity="sha512-..."
          crossOrigin="anonymous"
        />
        <link rel="stylesheet" crossOrigin="anonymous" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css"></link>
      </head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <body className={nunito.className}>
        <Spinner />
        <Nav />
        {children}
        <Footer />
      </body>
      <Script src="https://code.jquery.com/jquery-3.4.1.min.js" />
      <Script src="../lib/wow/wow.min.js"></Script>
      <Script src="../lib/easing/easing.min.js"></Script>
      <Script src="../lib/waypoints/waypoints.min.js"></Script>
      <Script src="../lib/owlcarousel/owl.carousel.min.js"></Script>
      <Script src="../lib/tempusdominus/js/moment.min.js"></Script>
      <Script src="../lib/tempusdominus/js/moment-timezone.min.js"></Script>
      <Script src="../lib/tempusdominus/js/tempusdominus-bootstrap-4.min.js"></Script>
      <Script src="../js/main.js"></Script>
    </html>
  );
}
