import Navbar from "./NavFooter/Navbar";
import Footer from "./NavFooter/Footer";
import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://www.belgrade-ebikes.com"),
  title: "Belgrade E-Bike Rental | #1 Electric Bike Tours & Rent in Serbia",
  description: "Best E-Bike Rental in Belgrade! Experience the city with our premium electric bikes. Guided tours, flexible rental rates, and 24/7 support. Book your e-bike today!",
  keywords: [
    "e-bike rental belgrade",
    "rent ebike belgrade",
    "electric bike rental serbia",
    "belgrade cycling tours",
    "hire electric bike belgrade",
    "bicycle rental belgrade",
    "ada ciganlija bike rent",
    "belgrade fortress bike tour",
    "premium e-bikes belgrade",
    "rent a bike novi beograd",
    "electric bicycle hire serbia",
    "belgrade sightseeing by bike",
    "riverside bike riding"
  ].join(", "),
  openGraph: {
    title: "Belgrade E-Bike Rental | #1 Electric Bike Tours & Rent in Serbia",
    description: "Explore Belgrade effortlessly with our premium e-bikes. Rent by the hour or day. Guided tours available.",
    url: "https://www.belgrade-ebikes.com",
    siteName: "Belgrade E-Bikes",
    images: [
      {
        url: "/Assets/bikerental.jpg",
        width: 1200,
        height: 630,
        alt: "Belgrade E-Bike Rental & Tours",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Belgrade E-Bike Rental",
    description: "Premium E-Bike Rental & Tours in Belgrade. Book now!",
    images: ["/Assets/bikerental.jpg"],
  },
  alternates: {
    canonical: './',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  // JSON-LD for Local Business (Rentals)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Belgrade E-Bikes",
    "image": "https://www.belgrade-ebikes.com/Assets/bikerental.jpg",
    "telephone": "+381 65 9782 432",
    "email": "info@belgrade-ebikes.com",
    "url": "https://www.belgrade-ebikes.com/",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Belgrade",
      "addressCountry": "RS"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "44.8125",
      "longitude": "20.4612"
    },
    "priceRange": "$$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "09:00",
      "closes": "21:00"
    },
    "description": "Premier e-bike rental service in Belgrade offering high-quality electric bicycles and guided city tours."
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
