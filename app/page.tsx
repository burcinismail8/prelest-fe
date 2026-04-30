import Image from "next/image";
import HeroSection from "./components/home/HeroSection";
import BusinessCTA from "./components/home/BusinessCTA";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <BusinessCTA />
    </div>
  );
}
