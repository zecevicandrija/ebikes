import Navbar from "./NavFooter/Navbar";
import Footer from "./NavFooter/Footer";
import "./globals.css";

export const metadata = {
  title: "E-Bike Rental | Belgrade Tours & Premium E-Bikes",
  description: "Experience Belgrade like never before with our premium e-bike rentals and guided tours. Book your adventure today!",
  keywords: "e-bike rental, Belgrade tours, electric bikes, adventure tours, Belgrade sightseeing",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
