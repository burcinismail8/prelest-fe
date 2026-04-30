import Image from "next/image";
import HeroSection from "./components/home/HeroSection";
import BusinessCTA from "./components/home/BusinessCTA";
import PopularCategories from "./components/home/PopularCategories";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <PopularCategories />
      <BusinessCTA />
    </div>
  );
}
