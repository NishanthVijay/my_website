import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
// import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import ProjectLab from "@/components/ProjectLab";
import Contact from "@/components/contact"; 

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        {/* <Projects /> */}
        <ProjectLab />
        <Contact />
      </main>

      <Footer />
    </>
  );
}