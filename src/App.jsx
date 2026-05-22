import Navbar from "./components/Navbar";
import CursorGlow from "./components/CursorGlow";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Education from "./sections/Education";
import Resume from "./sections/Resume";
import Contact from "./sections/Contact";

function App() {
  return (
    <div className="bg-white dark:bg-black text-black dark:text-white transition duration-300">

      {/* Cursor Glow */}
      <CursorGlow />

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 blur-3xl -z-10"></div>

      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Education />
      <Resume />
      <Contact />

    </div>
  );
}

export default App;