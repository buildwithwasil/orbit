const experiences = [
    {
        year: "Feb 2026 – May 2026",
        company: "MindMatrix",
        role: "Android Developer Intern",
        description:
            "Developed Android applications using Kotlin and Jetpack Compose, exploring Generative AI integration with Google AI Studio and Google Cloud Labs.",
        technologies: [
            "Kotlin",
            "Jetpack Compose",
            "Generative AI",
            "Google AI Studio",
            "Google Cloud",
        ],
    },
    {
        year: "Nov 2025 – Dec 2025",
        company: "Edunet Foundation (AICTE)",
        role: "AI Intern",
        description:
            "Completed AI-focused training covering AI fundamentals, machine learning, data preparation, and exploratory data analysis (EDA) through IBM SkillsBuild.",
        technologies: [
            "AI",
            "Machine Learning",
            "Data Preparation",
            "EDA",
            "IBM SkillsBuild",
        ],
    },
];

function Experience() {
    return (
        <section
            id="experience"
            className="border-b border-black/10 dark:border-white/10"
        >
            <div className="mx-auto max-w-6xl px-6 py-24">

                {/* Section Header */}
                <div className="text-center">
                    <p className="text-xs font-medium uppercase tracking-[0.25em] text-black/40 dark:text-white/40">
                        Experience
                    </p>

                    <h2 className="mt-4 text-3xl font-semibold tracking-tight text-black dark:text-white sm:text-4xl">
                        Career Journey
                    </h2>

                    <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-black/50 dark:text-white/50">
                        Building software, exploring new technologies, and
                        continuously learning through hands-on experience.
                    </p>
                </div>

                {/* Timeline */}
                <div className="relative mx-auto mt-16 max-w-5xl">

                    {/* Center Line */}
                    <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-black/10 dark:bg-white/10 md:block" />

                    <div className="space-y-12 md:space-y-20">

                        {experiences.map((experience, index) => {
                            const isLeft = index % 2 === 0;

                            return (
                                <div
                                    key={`${experience.company}-${experience.year}`}
                                    className="relative flex flex-col md:flex-row"
                                >

                                    {/* Timeline Dot */}
                                    <span
                                        className="
                                            absolute left-[-5px] top-8
                                            h-2.5 w-2.5 rounded-full
                                            border-2 border-black
                                            bg-white
                                            dark:border-white
                                            dark:bg-black
                                            md:left-1/2
                                            md:top-8
                                            md:-translate-x-1/2
                                        "
                                    />

                                    {/* Left Card */}
                                    {isLeft ? (
                                        <>
                                            <div className="w-full md:w-1/2 md:pr-8">
                                                <ExperienceCard
                                                    experience={experience}
                                                />
                                            </div>

                                            <div className="hidden md:block md:w-1/2" />
                                        </>
                                    ) : (
                                        <>
                                            <div className="hidden md:block md:w-1/2 md:pr-8" />

                                            <div className="w-full md:w-1/2 md:pl-8">
                                                <ExperienceCard
                                                    experience={experience}
                                                />
                                            </div>
                                        </>
                                    )}

                                </div>
                            );
                        })}

                    </div>
                </div>
            </div>
        </section>
    );
}

function ExperienceCard({ experience }) {
    return (
        <article
            className="
                ml-6 rounded-2xl
                border border-black/10
                bg-black/[0.02]
                p-5
                shadow-sm
                transition
                hover:-translate-y-1
                hover:border-black/20
                dark:border-white/10
                dark:bg-white/[0.02]
                dark:hover:border-white/20
                md:ml-0
            "
        >

            {/* Company */}
            <h3 className="text-lg font-semibold tracking-tight text-black dark:text-white">
                {experience.company}
            </h3>

            {/* Date */}
            <p className="mt-1 text-xs text-black/40 dark:text-white/40">
                {experience.year}
            </p>

            {/* Role */}
            <p className="mt-3 text-sm font-medium text-black/60 dark:text-white/60">
                {experience.role}
            </p>

            {/* Description */}
            <p className="mt-4 text-sm leading-6 text-black/60 dark:text-white/60">
                {experience.description}
            </p>

            {/* Technologies */}
            <div className="mt-5 flex flex-wrap gap-2">
                {experience.technologies.map((technology) => (
                    <span
                        key={technology}
                        className="
                            rounded-full
                            border border-black/10
                            px-2.5 py-1
                            text-[11px]
                            text-black/60
                            dark:border-white/10
                            dark:text-white/60
                        "
                    >
                        {technology}
                    </span>
                ))}
            </div>

        </article>
    );
}

export default Experience;