import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail } from "lucide-react";
import { SiFiverr } from "react-icons/si";

function Hero() {
    return (
        <section className="border-b border-black/10 dark:border-white/10">
            <div className="mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-12 px-8 py-16 md:grid-cols-[1.1fr_0.9fr] lg:gap-16">

                {/* Left side */}
                <div>
                    <p className="mb-5 text-sm font-medium uppercase tracking-[0.25em] text-black/50 dark:text-white/50">
                        Software Engineer
                    </p>

                    <h1 className="text-5xl font-bold tracking-tight text-black sm:text-6xl lg:text-7xl dark:text-white">
                        Hi, I'm Wasil
                        <br />
                        Ahmad
                    </h1>

                    <p className="mt-6 max-w-xl text-lg leading-8 text-black/60 dark:text-white/60">
                        I build scalable web applications, backend systems,
                        and AI-powered solutions with a focus on clean and
                        practical engineering.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4">

                        {/* View Projects */}
                        <a
                            href="#projects"
                            className="rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-black/80 dark:bg-white dark:text-black dark:hover:bg-white/80"
                        >
                            View Projects →
                        </a>

                        {/* Contact */}
                        <a
                            href="#contact"
                            className="rounded-full border border-black/20 px-6 py-3 text-sm font-medium text-black transition hover:bg-black hover:text-white dark:border-white/20 dark:text-white dark:hover:bg-white dark:hover:text-black"
                        >
                            Contact Me
                        </a>

                    </div>

                    {/* Social / Location */}
                    <div className="mt-10 flex items-center gap-6 text-black/50 dark:text-white/50">

                        <a
                            href="https://github.com/buildwithwasil"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                            className="transition hover:text-black dark:hover:text-white"
                        >
                            <FaGithub size={28} />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/wasilahmad1/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            className="transition hover:text-black dark:hover:text-white"
                        >
                           <FaLinkedin size={28} />
                        </a>

                        <a
                            href="mailto:wasil.ahmad786@gmail.com"
                            aria-label="Email"
                            className="transition hover:text-black dark:hover:text-white"
                        >
                            <Mail size={28} />
                        </a>

                        <span className="text-black/20 dark:text-white/20">
                            |
                        </span>

                        <span>
                            📍 Bengaluru, India
                        </span>

                    </div>
                </div>

                {/* Right side */}
                <div className="flex justify-center md:justify-center">
                    <div className="h-72 w-72 overflow-hidden rounded-3xl border border-black/10 bg-black/5 dark:border-white/10 dark:bg-white/5 sm:h-80 sm:w-80 lg:h-[420px] lg:w-[420px]">

                        <img
                            src="/images/wasilpersonalphoto.jpeg"
                            alt="Wasil Ahmad"
                            className="h-full w-full object-cover"
                        />

                    </div>
                </div>

            </div>
        </section>
    );
}

export default Hero;