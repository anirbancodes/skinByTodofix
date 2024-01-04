import BrandCarousel from "@/components/BrandCarousel";
import Carousel from "@/components/Carousel";
import DesignsHome from "@/components/DesignsHome";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SiteFeatures from "@/components/SiteFeatures";

export default function Home() {
  return (
    <main>
      <Navbar />
      <BrandCarousel />
      <DesignsHome />
      <SiteFeatures />
      <Footer />
    </main>
  );
}
