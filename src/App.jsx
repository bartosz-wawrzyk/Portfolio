import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Skills from "./sections/Skills";
import AboutMe from "./sections/AboutMe";
import Contact from "./sections/Contact";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <Experience />
      <Skills />
      <AboutMe />
      <Contact />
    </>
  );
};

export default App;