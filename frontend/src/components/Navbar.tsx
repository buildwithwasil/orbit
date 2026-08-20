function Navbar() {
    return (
        <header className="border-b border-white/10">
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
                <a href="/" className="text-xl font-semibold tracking-tight">
                    ORBIT
                </a>

                <div className="hidden items-center gap-8 md:flex">
                    <a href="#about" className="text-sm text-white/70 transition hover:text-white">
                        About
                    </a>

                    <a href="#skills" className="text-sm text-white/70 transition hover:text-white">
                        Skills
                    </a>

                    <a href="#experience" className="text-sm text-white/70 transition hover:text-white">
                        Experience
                    </a>

                    <a href="#projects" className="text-sm text-white/70 transition hover:text-white">
                        Projects
                    </a>

                    <a href="#contact" className="text-sm text-white/70 transition hover:text-white">
                        Contact
                    </a>
                </div>

                <a
                    href="#contact"
                    className="hidden rounded-full border border-white/20 px-4 py-2 text-sm transition hover:bg-white hover:text-black md:block"
                >
                    Let's Talk
                </a>
            </nav>
        </header>
    );
}

export default Navbar;