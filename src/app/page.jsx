import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import ServiceCategories from "@/components/home/ServiceCategories";
import SupplierLogos from "@/components/home/SupplierLogos";
import Statistics from "@/components/home/Statistics";
import BusinessServices from "@/components/home/BusinessServices";
import Benefits from "@/components/home/Benefits";
import QuoteSection from "@/components/home/QuoteSection";
import AdditionalServices from "@/components/home/AdditionalServices";
import Newsletter from "@/components/home/Newsletter";
import FAQ from "@/components/home/FAQ";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <ServiceCategories />
        <SupplierLogos />
        <Statistics />
        <BusinessServices />
        <Benefits />
        <QuoteSection />
        <AdditionalServices />
        <Newsletter />
        <FAQ />
      </main>

      <Footer />
    </>
  );
}