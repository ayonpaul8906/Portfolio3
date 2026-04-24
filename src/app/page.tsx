import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Skills from "@/components/sections/skills";
import Academics from "@/components/sections/academics";
import ExperiencePreview from "@/components/sections/experience-preview";
import ProjectsPreview from "@/components/sections/projects-preview";
import Journey from "@/components/sections/journey";
import Certifications from "@/components/sections/certifications";
import Contact from "@/components/sections/contact";
import Footer from "@/components/footer";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Academics />
      <ExperiencePreview />
      <ProjectsPreview />
      <Journey />
      <Certifications />
      <Contact />
      <Footer />
    </>
  );
}
