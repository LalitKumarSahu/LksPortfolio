import { useState, useEffect } from "react";
import NavBar from "./componets/NavBar";
import Left from "./componets/Left";
import Right from "./componets/Right";
import HeroSection from "./componets/HeroSection";
import About from "./componets/About";
import Experience from "./componets/Experience";
import Projects from "./componets/Projects";
import Skills from "./componets/Skills";
import Contact from "./componets/Contact";
import CustomCursor from "./componets/Customcursor";
import IntroPage from "./componets/IntroPage";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-[#0a192f] min-h-screen cursor-none">
      {loading ? (
        <IntroPage setLoading={setLoading} /> // Show loader when loading
      ) : (
        <>
          <CustomCursor />
          <div className=" sticky top-0  z-10">
            <NavBar />{" "}
          </div>

          <div className="flex justify-between">
            {/* Left Side */}
            <div className="w-20">
              <Left />
            </div>

            {/* Center Content */}
            <div className="flex flex-col items-center justify-center flex-1 max-w-[80%] gap-8 px-4 md:px-0">
              <section id="hero">
                <HeroSection />
              </section>
              <section id="about">
                <About />
              </section>
              <section id="experience">
                <Experience />
              </section>
              <section id="skills">
                <Skills />
              </section>
              <section id="projects">
                <Projects />
              </section>
              <section id="contact">
                <Contact />
              </section>
            </div>

            {/* Right Side */}
            <div className="w-20">
              <Right />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
