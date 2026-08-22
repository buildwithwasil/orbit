const projects = [
    {
        title: "TalentIQ",
        description:
            "AI-powered resume screening and candidate intelligence platform.",
        technologies: ["Java", "Spring Boot", "React", "FAISS"],
        image: "/images/projects/talentiq.png",
        github: "#",
        live: "#",
    },
    {
        title: "VendorFlow",
        description:
            "Cloud vendor lifecycle management platform built around scalable REST APIs.",
        technologies: ["Java", "Spring Boot", "MySQL", "React"],
        image: "/images/projects/vendorflow.png",
        github: "#",
        live: "#",
    },
    {
        title: "TalentIQ",
        description:
            "AI-powered resume screening and candidate intelligence platform.",
        technologies: ["Java", "Spring Boot", "React", "FAISS"],
        image: "/images/projects/talentiq.png",
        github: "#",
        live: "#",
    },
    {
        title: "TalentIQ",
        description:
            "AI-powered resume screening and candidate intelligence platform.",
        technologies: ["Java", "Spring Boot", "React", "FAISS"],
        image: "/images/projects/talentiq.png",
        github: "#",
        live: "#",
    },
];

function Projects() {
    return (
        <section id="projects" className="border-b border-white/10">
            <div className="mx-auto max-w-7xl px-6 py-24">

                <p className="text-sm uppercase tracking-[0.25em] text-white/40">
                    Projects
                </p>

                <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
                    Things I've built.
                </h2>

                <div className="mt-12 grid gap-6 md:grid-cols-2">

                    {projects.map((project) => (
                        <article
                            key={project.title}
                            className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] transition hover:-translate-y-1 hover:border-white/20"
                        >
                            <div className="aspect-video overflow-hidden bg-white/5">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="h-full w-full object-cover transition duration-500 hover:scale-105"
                                />
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-semibold">
                                    {project.title}
                                </h3>

                                <p className="mt-3 leading-7 text-white/60">
                                    {project.description}
                                </p>

                                <div className="mt-5 flex flex-wrap gap-2">
                                    {project.technologies.map((technology) => (
                                        <span
                                            key={technology}
                                            className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/50"
                                        >
                      {technology}
                    </span>
                                    ))}
                                </div>

                                <div className="mt-6 flex gap-5 text-sm">
                                    <a
                                        href={project.github}
                                        className="text-white/70 hover:text-white"
                                    >
                                        GitHub ↗
                                    </a>

                                    <a
                                        href={project.live}
                                        className="text-white/70 hover:text-white"
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