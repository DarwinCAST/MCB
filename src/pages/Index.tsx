import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import MissionSection from "@/components/MissionSection";
import ObjectivesSection from "@/components/ObjectivesSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ListOfFacilitors from "@/components/ListOfFacilitors";
import TrainingSection from "@/components/TrainingSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* <Header /> */}
      <Header />
      <HeroSection />
      <AboutSection />
      <MissionSection />
      <ObjectivesSection />
      <TrainingSection />
      <Footer />
    </div>
  );
};

export default Index;
