import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import FloatingInsects from "@/components/FloatingInsects";
import BackToTop from "@/components/BackToTop";

const Index = () => (
  <div className="min-h-screen bg-background cursor-none md:cursor-none">
    <CustomCursor />
    <FloatingInsects />
    <Navbar />
    <Hero />
    <About />
    <Skills />
    <Experience />
    <Projects />
    <Services />
    <Contact />
    <Footer />
    <BackToTop />
  </div>
);

export default Index;
