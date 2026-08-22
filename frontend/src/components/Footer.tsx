import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

function Footer() {
    return (
        <footer>
            <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:justify-between">

                <div>
                    <h2 className="text-lg font-semibold">
                        ORBIT
                    </h2>

                    <p className="mt-2 text-sm text-white/40">
                        The universe of my engineering journey.
                    </p>
                </div>

                <div className="flex gap-5 text-white/50">

                    <a
                        href="#"
                        aria-label="GitHub"
                        className="transition hover:text-white"
                    >
                        <FaGithub size={20} />
                    </a>

                    <a
                        href="#"
                        aria-label="LinkedIn"
                        className="transition hover:text-white"
                    >
                        <FaLinkedin size={20} />
                    </a>

                    <a
                        href="#contact"
                        aria-label="Email"
                        className="transition hover:text-white"
                    >
                        <FiMail size={20} />
                    </a>

                </div>

            </div>

            <div className="border-t border-white/10">
                <div className="mx-auto max-w-7xl px-6 py-6 text-sm text-white/30">
                    © 2026 Wasil Ahmad. All rights reserved.
                </div>
            </div>
        </footer>
    );
}

export default Footer;