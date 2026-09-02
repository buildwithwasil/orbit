function About() {
    return (
        <section
            id="about"
            className="border-b border-black/10 dark:border-white/10"
        >
            <div className="mx-auto max-w-7xl px-6 py-24">

                <p className="text-sm uppercase tracking-[0.25em] text-black/40 dark:text-white/40">
                    About
                </p>

                <div className="mt-6 grid gap-12 md:grid-cols-2">

                    <div>
                        <h2 className="text-3xl font-semibold tracking-tight text-black dark:text-white sm:text-4xl">
                            Building software with curiosity and purpose.
                        </h2>
                    </div>

                    <div className="space-y-5 leading-7 text-black/60 dark:text-white/60">

                        <p>
                            I'm Wasil Ahmad, a software engineer and Information
                            Science & Engineering graduate interested in backend
                            development, web technologies, cloud computing, and AI.
                        </p>

                        <p>
                            I enjoy turning ideas into practical software and
                            continuously improving my engineering skills through
                            projects, problem solving, and hands-on learning.
                        </p>

                        <div className="grid grid-cols-2 gap-6 pt-4">

                            <div>
                                <p className="text-sm text-black/40 dark:text-white/40">
                                    Degree
                                </p>

                                <p className="mt-1 text-black dark:text-white">
                                    B.E. Information Science
                                </p>
                            </div>

                            <div>
                                <p className="text-sm text-black/40 dark:text-white/40">
                                    Graduation
                                </p>

                                <p className="mt-1 text-black dark:text-white">
                                    2026
                                </p>
                            </div>

                            <div>
                                <p className="text-sm text-black/40 dark:text-white/40">
                                    CGPA
                                </p>

                                <p className="mt-1 text-black dark:text-white">
                                    8.77
                                </p>
                            </div>

                            <div>
                                <p className="text-sm text-black/40 dark:text-white/40">
                                    Focus
                                </p>

                                <p className="mt-1 text-black dark:text-white">
                                    Software Engineering
                                </p>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default About;