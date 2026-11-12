import Hero from "@/components/home/Hero";
import TrustStrip from "@/components/home/TrustStrip";
import Services from "@/components/home/Services";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Process from "@/components/home/Process";
import Audience from "@/components/home/Audience";
import Testimonials from "@/components/home/Testimonials";
import FAQ from "@/components/home/FAQ";
import FinalCTA from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustStrip />
      <Services />
      <WhyChooseUs />
      <Process />
      <Audience />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </main>
  );
}
