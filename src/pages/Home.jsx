import React from "react";

import Navbar from "../components/Navbar"
import Footer from "../components/Footer";
import HeroSlider from "../components/HeroSlider"; 


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <HeroSlider />
      <Gallery />
      <Footer />
    </div>
  );
}
