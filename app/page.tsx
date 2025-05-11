import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Stats from "@/components/Stats";
import AboutMe from "@/components/AboutMe";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <div className="h-20"></div>
      <Services />
      <div className="h-20"></div>
      <Contact />
      <div className="h-20"></div>
      <AboutMe />
      <div className="h-20"></div>
      <Testimonials />
      <div className="h-20"></div>
    </>
  );
}
