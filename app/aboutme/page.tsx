import Hero from "./components/Hero";
import Stats from "./components/Stats";
import AboutSection from "./components/AboutSection";
import WhyMe from "./components/WhyMe";
import Skills from "./components/Skills";
import Certificates from "./components/Certificates";
import ContactCTA from "./components/ContactCTA";
import TechStack from "./components/TechStack";

export const metadata = {
  title: "About Me",
  description: "Frontend Developer | React | Next.js | TypeScript",
};

export default function AboutPage() {
  return (
    <main className="overflow-x-hidden">

      <Hero image="/images/about/profile.jpg" />

      <Stats />

      <AboutSection image="/images/about/about.jpg" />

      <WhyMe />

      <Skills />

      <TechStack />

      <Certificates />

      <ContactCTA />

    </main>
  );
}