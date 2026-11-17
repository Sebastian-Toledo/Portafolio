import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import { About, Certifications, Contact, Experience, Skills } from "@/components/Sections";
import Spotlight from "@/components/Spotlight";
import DevBanner from "@/components/DevBanner";

export default function HomePage() {
  return (
    <div className="grain relative isolate min-h-screen">
      <Spotlight />
      <Nav mode="portfolio" />
      <main>
        <Hero />
        <Projects />
        <Experience />
        <Skills />
        <Certifications />
        <About />
        <Contact />
      </main>
      <DevBanner />
    </div>
  );
}
