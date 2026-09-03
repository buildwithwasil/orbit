import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail } from "lucide-react";

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

                    {/* Buttons */}
                    <div className="mt-8 flex flex-wrap gap-4">

                        {/* View Projects */}
                        <a
                            href="#projects"
                            className="
                                inline-flex items-center justify-center
                                rounded-full
                                border border-black/20
                                bg-transparent
                                px-6 py-3
                                text-sm font-medium
                                text-black
                                transition-colors duration-200
                                hover:bg-black
                                hover:text-white
                                dark:border-white/20
                                dark:bg-transparent
                                dark:text-white
                                dark:hover:bg-white
                                dark:hover:text-black
                            "
                        >
                            View Projects →
                        </a>

                        {/* Contact */}
                        <a
                            href="#contact"
                            className="
                                inline-flex items-center justify-center
                                rounded-full
                                border border-black/20
                                px-6 py-3
                                text-sm font-medium
                                text-black
                                transition-colors duration-200
                                hover:bg-black
                                hover:text-white
                                dark:border-white/20
                                dark:text-white
                                dark:hover:bg-white
                                dark:hover:text-black
                            "
                        >
                            Contact Me
                        </a>

                    </div>

                    {/* Social / Location */}
                    <div className="mt-10 flex items-center gap-6">

                        {/* GitHub */}
                        <a
                            href="https://github.com/buildwithwasil"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                            className="
                                text-black/50
                                transition-colors duration-200
                                hover:text-black
                                dark:text-white/50
                                dark:hover:text-white
                            "
                        >
                            <FaGithub size={28} />
                        </a>

                        {/* LinkedIn */}
                        <a
                            href="https://www.linkedin.com/in/wasilahmad1/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            className="
                                text-black/50
                                transition-colors duration-200
                                hover:text-black
                                dark:text-white/50
                                dark:hover:text-white
                            "
                        >
                            <FaLinkedin size={28} />
                        </a>

                        {/* Email */}
                        <a
                            href="mailto:wasil.ahmad786@gmail.com"
                            aria-label="Email"
                            className="
                                text-black/50
                                transition-colors duration-200
                                hover:text-black
                                dark:text-white/50
                                dark:hover:text-white
                            "
                        >
                            <Mail size={28} />
                        </a>

                        {/* Divider */}
                        <span className="text-black dark:text-white">
                            |
                        </span>

                        {/* Location */}
                        <span className="text-base font-semibold text-black dark:text-white">
                            📍 Bengaluru, India
                        </span>

                    </div>
                </div>

                {/* Right side */}
                <div className="flex justify-center md:justify-center">
                    <div
                        className="
                            h-72 w-72
                            overflow-hidden
                            rounded-3xl
                            border border-black/10
                            bg-black/5
                            dark:border-white/10
                            dark:bg-white/5
                            sm:h-80 sm:w-80
                            lg:h-[420px] lg:w-[420px]
                        "
                    >
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