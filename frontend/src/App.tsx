import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skill from "./components/Skill";
import Experience from "./components/Experience";
function App() {
  return (
      <div>
        <Navbar />

        <main>
          <Hero />
          <About />
              <Skill />
            <Experience />
        </main>
      </div>
  );
}

export default App;