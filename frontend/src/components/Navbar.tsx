import {
    Moon,
    Sun,
} from "lucide-react";

interface NavbarProps {
    darkMode: boolean;
    setDarkMode: (value: boolean) => void;
}

function Navbar({ darkMode, setDarkMode }: NavbarProps) {
    return (
        <header className="border-b border-black/10 dark:border-white/10">
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">

                {/* Logo */}
                <a
                    href="/"
                    className="text-xl font-semibold tracking-tight text-black dark:text-white"
                >
                    ORBIT
                </a>

                {/* Navigation */}
                <div className="hidden items-center gap-8 md:flex">

                    <a
                        href="#about"
                        className="text-sm text-black/60 transition hover:text-black dark:text-white/70 dark:hover:text-white"
                    >
                        About
                    </a>

                    <a
                        href="#skills"
                        className="text-sm text-black/60 transition hover:text-black dark:text-white/70 dark:hover:text-white"
                    >
                        Skills
                    </a>

                    <a
                        href="#experience"
                        className="text-sm text-black/60 transition hover:text-black dark:text-white/70 dark:hover:text-white"
                    >
                        Experience
                    </a>

                    <a
                        href="#projects"
                        className="text-sm text-black/60 transition hover:text-black dark:text-white/70 dark:hover:text-white"
                    >
                        Projects
                    </a>
                    <a
                        href="#coding-profiles"
                        className="text-sm text-black/60 transition hover:text-black dark:text-white/70 dark:hover:text-white"
                    >
                        CodingProfiles
                    </a>

                    <a
                        href="#contact"
                        className="text-sm text-black/60 transition hover:text-black dark:text-white/70 dark:hover:text-white"
                    >
                        Contact
                    </a>

                </div>

                {/* Theme Toggle */}
                {/* Theme Toggle */}
                <button
                    type="button"
                    onClick={() => setDarkMode(!darkMode)}
                    aria-label={
                        darkMode
                            ? "Switch to light mode"
                            : "Switch to dark mode"
                    }
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-black/15 text-black transition hover:bg-black hover:text-white dark:border-white/20 dark:text-white dark:hover:bg-white dark:hover:text-black"
                >
                    {darkMode ? (
                        <Sun size={20} strokeWidth={1.8} />
                    ) : (
                        <Moon size={20} strokeWidth={1.8} />
                    )}
                </button>
            </nav>
        </header>
    );
}

export default Navbar;