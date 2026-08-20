function Hero() {
    return (
        <section className="border-b border-white/10">
            <div className="mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2">

                {/* Left side */}
                <div>
                    <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-white/50">
                        Software Engineer
                    </p>

                    <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
                        Hi, I'm{" "}
                        <span className="text-white">
              Wasil Ahmad
            </span>
                    </h1>

                    <p className="mt-6 max-w-xl text-lg leading-8 text-white/60">
                        I build scalable web applications, backend systems,
                        and AI-powered solutions with a focus on clean and
                        practical engineering.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4">
                        <a
                            href="#projects"
                            className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-white/80"
                        >
                            View Projects
                        </a>

                        <a
                            href="#contact"
                            className="rounded-full border border-white/20 px-6 py-3 text-sm font-medium transition hover:bg-white hover:text-black"
                        >
                            Let's Work Together
                        </a>
                    </div>

                    <div className="mt-10 flex items-center gap-3 text-sm text-white/50">
                        <span className="h-2 w-2 rounded-full bg-green-400" />
                        Open to opportunities
                    </div>
                </div>

                {/* Right side */}
                <div className="flex justify-center md:justify-end">
                    <div className="relative">
                        <div className="h-64 w-64 overflow-hidden rounded-3xl border border-white/10 bg-white/5 sm:h-80 sm:w-80">
                            <img
                                src="/images/PersonalMyPhoto.jpeg"
                                alt="Wasil Ahmad"
                                className="h-full w-full object-cover"
                            />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Hero;