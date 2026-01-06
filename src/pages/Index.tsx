import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ClientLogos from "@/components/ClientLogos";
import Manifesto from "@/components/Manifesto";
import FeaturedProject from "@/components/FeaturedProject";
import Services from "@/components/Services";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="bg-background text-foreground">
      <Navbar />
      <Hero />
      <ClientLogos />
      <Manifesto />
      <FeaturedProject
        brandLogo="https://cdn.prod.website-files.com/5dabd332d26b0a27c9d3ef10/64b8199e3c1b16509973d45d_Adidas-White-Logo.wine.svg"
        brandName="Adidas"
        title="International Women's Day Broadcast :30s"
        videoUrl="https://youtu.be/7kVG571frGE"
      />
      <Services />
      <FeaturedProject
        brandLogo="https://cdn.prod.website-files.com/5dabd332d26b0a27c9d3ef10/64b818ddac2030ed5e8106c5_Royal_Bank_of_Canada-Logo.wine.svg"
        brandName="RBC"
        title="Growing Support Cinema :30s"
        videoUrl="https://youtu.be/auJvioranyk"
      />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
