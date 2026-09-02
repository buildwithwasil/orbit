const projects = [
    {
        title: "Orbit",
        description:
            "The Universe Of My Engineering Journey",
        technologies: ["Python", "LangChain", "OpenAI"],
        image: "/images/OrbitMyPortfolio.jpg",
        github: "https://github.com/buildwithwasil/orbit",
        live: "#",
    },
    {
        title: "NovaChatAI",
        description:
            "Generative AI conversational assistant.",
        technologies: ["Python", "LangChain", "OpenAI"],
        image: "/images/NovaChatAI.jpg",
        github: "#",
        live: "https://wasil-aichatbot.netlify.app/",
    },
    {
        title: "HireLensAI",
        description:
            "AI-powered resume screening and candidate intelligence platform.",
        technologies: ["Java", "Spring Boot", "React", "FAISS"],
        image: "/images/InDevelopment.jpeg",
        github: "https://github.com/buildwithwasil/HireLensAI",
        live: "#",
    },
    {
        title: "VendorFlow",
        description:
            "Cloud vendor lifecycle management platform built around scalable REST APIs.",
        technologies: ["Java", "Spring Boot", "MySQL", "React"],
        image: "/images/InDevelopment.jpeg",
        github: "#",
        live: "#",
    },
    {
        title: "EVORA",
        description:
            "Smart assignment and productivity management platform.",
        technologies: ["Python", "LangChain", "OpenAI"],
        image: "/images/InDevelopment.jpeg",
        github: "#",
        live: "#",
    },
    {
        title: "More Projects",
        description:
            "More projects and experiments are currently in development.",
        technologies: ["Java", "Spring Boot", "React"],
        image: "/images/InDevelopment.jpeg",
        github: "#",
        live: "#",
    },
];

function Projects() {
    return (
        <section
            id="projects"
            className="border-b border-black/10 dark:border-white/10"
        >
            <div className="mx-auto max-w-6xl px-6 py-20">

                {/* Section Heading */}
                <div className="text-center">
                    <p className="text-xs font-medium uppercase tracking-[0.25em] text-black/40 dark:text-white/40">
                        Selected Work
                    </p>

                    <h2 className="mt-3 text-4xl font-semibold tracking-tight text-black dark:text-white sm:text-5xl">
                        Projects
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-black/50 dark:text-white/50 sm:text-base">
                        A collection of projects showcasing backend engineering,
                        cloud-native applications, and AI solutions.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

                    {projects.map((project, index) => (
                        <article
                            key={`${project.title}-${index}`}
                            className="group overflow-hidden rounded-2xl border border-black/10 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/[0.03]"
                        >

                            {/* Image */}
                            <div className="aspect-[16/10] overflow-hidden bg-black/5 dark:bg-white/5">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-4">

                                <div className="flex items-start justify-between gap-3">

                                    <h3 className="text-lg font-semibold tracking-tight text-black dark:text-white">
                                        {project.title}
                                    </h3>

                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`${project.title} GitHub`}
                                        className="shrink-0 text-black/50 transition hover:text-black dark:text-white/50 dark:hover:text-white"
                                    >
                                        ↗
                                    </a>

                                </div>

                                <p className="mt-2 line-clamp-2 text-sm leading-6 text-black/55 dark:text-white/55">
                                    {project.description}
                                </p>

                                {/* Technologies */}
                                <div className="mt-4 flex flex-wrap gap-1.5">
                                    {project.technologies.map((technology) => (
                                        <span
                                            key={technology}
                                            className="rounded-full border border-black/10 px-2.5 py-1 text-[11px] text-black/55 dark:border-white/10 dark:text-white/55"
                                        >
                                            {technology}
                                        </span>
                                    ))}
                                </div>

                                {/* Links */}
                                <div className="mt-4 flex gap-4 text-xs font-medium">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-black/60 transition hover:text-black dark:text-white/60 dark:hover:text-white"
                                    >
                                        GitHub ↗
                                    </a>

                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-black/60 transition hover:text-black dark:text-white/60 dark:hover:text-white"
                                    >
                                        Live Demo ↗
                                    </a>
                                </div>

                            </div>
                        </article>
                    ))}

                </div>
            </div>
        </section>
    );
}

export default Projects;