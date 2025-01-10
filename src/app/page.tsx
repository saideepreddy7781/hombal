import FeaturesSection from "@/components/layout/FeaturesSection";
import Footer from "@/components/layout/Footer";
import HomeLayout from "@/components/layout/HomeLayout";
import MissionAndVisionSection from "@/components/layout/MissionAndVisionSection";
import Navbar from "@/components/layout/Navbar";
import ServicesOffered from "@/components/layout/ServicesOffered";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HomeLayout />
      <FeaturesSection />
      <MissionAndVisionSection />
      <ServicesOffered />
      <Footer />
    </div>
  );
}
