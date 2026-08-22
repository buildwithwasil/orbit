import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skill from "./components/Skill";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education.tsx";
import Contact from "./components/Contact.tsx";
import Footer from "./components/Footer.tsx";
function App() {
  return (
      <div>
        <Navbar />

        <main>
          <Hero />
          <About />
              <Skill />
            <Experience />
            <Projects />
            <Education />
            <Contact />
            <Footer />
        </main>
      </div>
  );
}

export default App;