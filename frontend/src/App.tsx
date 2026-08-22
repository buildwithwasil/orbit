import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skill from "./components/Skill";
function App() {
  return (
      <div>
        <Navbar />

        <main>
          <Hero />
          <About />
              <Skill />
        </main>
      </div>
  );
}

export default App;