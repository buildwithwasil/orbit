import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

function Footer() {
    return (
        <footer className="border-t border-black/10 dark:border-white/10">
            <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:justify-between">

                {/* Logo / Description */}
                <div>
                    <h2 className="text-lg font-semibold text-black dark:text-white">
                        ORBIT
                    </h2>

                    <p className="mt-2 text-sm text-black/60 dark:text-white/60">
                        The universe of my engineering journey.
                    </p>
                </div>

                {/* Social Icons */}
                <div className="flex gap-5 text-black/60 dark:text-white/60">

                    {/* GitHub */}
                    <a
                        href="https://github.com/buildwithwasil"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="transition-colors duration-200 hover:text-black dark:hover:text-white"
                    >
                        <FaGithub size={20} />
                    </a>

                    {/* LinkedIn */}
                    <a
                        href="https://www.linkedin.com/in/wasilahmad1/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="transition-colors duration-200 hover:text-black dark:hover:text-white"
                    >
                        <FaLinkedin size={20} />
                    </a>

                    {/* Email */}
                    <a
                        href="mailto:wasil.ahmad786@gmail.com"
                        aria-label="Email"
                        className="transition hover:text-black dark:hover:text-white"
                    >
                        <FiMail size={20} />
                    </a>

                </div>

            </div>

            {/* Copyright */}
            <div className="border-t border-black/10 dark:border-white/10">
                <div className="mx-auto max-w-7xl px-6 py-6 text-sm text-black/50 dark:text-white/50">
                    © 2026 Wasil Ahmad. All rights reserved.
                </div>
            </div>
        </footer>
    );
}

export default Footer;