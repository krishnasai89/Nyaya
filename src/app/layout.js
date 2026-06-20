"use client";
import React, { useState, useEffect } from "react";
import Preloader from "@/components/Preloader";
import "@/app/globals.css"; // Ensure your Tailwind styles load into the document body
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({ children }) {
  const [isBooted, setIsBooted] = useState(false);

  useEffect(() => {
    // Complete the boot phase sequence after the layout parameters initialize cleanly
    const bootTimeout = setTimeout(() => {
      setIsBooted(true);
    }, 3400); // Syncs perfectly with the Nyāya error neutralization timeline loop

    return () => clearTimeout(bootTimeout);
  }, []);

  return (
    <html lang="en" className="dark">
      <body className="bg-[#050507] antialiased">
        {/* Conditional state mask layer handles the deconstruction logs */}
        {!isBooted && <Preloader />}

        {/* Render main viewports smoothly once the kernel is online */}
        <div
          className={`transition-opacity duration-700  ${isBooted ? "opacity-100" : "opacity-0"}`}
        >
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
