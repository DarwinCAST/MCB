import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import MissionSection from "@/components/MissionSection";
import ObjectivesSection from "@/components/ObjectivesSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Facilitors from "@/components/Facilitors";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* <Header /> */}
      <Header />
      <HeroSection />
      <AboutSection />
      <MissionSection />
      <Facilitors/>
      <ObjectivesSection />
      <Footer />
    </div>
  );
};

export default Index;
