import BrandCarousel from "@/components/BrandCarousel";
// import Carousel from "@/components/Carousel";
import DesignsHome from "@/components/S_DesignsHome";
import Footer from "@/components/Footer";
import Navbar from "@/components/S_Navbar";
import SiteFeatures from "@/components/S_SiteFeatures";

const Skin = () => {
  return (
    <section>
      <Navbar />
      <BrandCarousel />
      <DesignsHome />
      <SiteFeatures />
      <Footer />
    </section>
  );
};

export default Skin;
