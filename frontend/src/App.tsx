import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skill from "./components/Skill";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
    const [darkMode, setDarkMode] = useState(true);

    useEffect(() => {
        document.documentElement.classList.toggle("dark", darkMode);
        document.documentElement.classList.toggle("light", !darkMode);

        document.body.classList.toggle("dark", darkMode);
        document.body.classList.toggle("light", !darkMode);
    }, [darkMode]);

    return (
        <div
            className={
                darkMode
                    ? "min-h-screen bg-[#0a0a0a] text-[#f5f5f5]"
                    : "min-h-screen bg-white text-[#111111]"
            }
        >
            <Navbar
                darkMode={darkMode}
                setDarkMode={setDarkMode}
            />

            <main>
                <Hero />
                <About />
                <Skill />
                <Experience />
                <Projects />
                <Education />
                <Contact />
            </main>

            <Footer />
        </div>
    );
}

export default App;