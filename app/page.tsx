import Image from "next/image";
import Hero from "./components/Hero";
import TechStacks from "./components/TechStacks";
import Services from "./components/Services"
import ProcessTimeline from "./components/ProcessTimeline";
import Footer from "./components/Footer";
import Faq from "./components/Faq";
import BlogPreview from "./components/BlogPreview";

export default function Home() {
  return (
    <div>
      <Hero />
      <TechStacks />
      <Services />
      <ProcessTimeline />
      <BlogPreview />
      <Faq />
      <Footer />
    </div>
  );
}
