const skillGroups = [
    {
        title: "Languages",
        skills: ["Java", "Python", "C++", "C", "JavaScript", "TypeScript"],
    },
    {
        title: "Frontend",
        skills: ["React", "HTML", "CSS", "JavaScript"],
    },
    {
        title: "Backend",
        skills: ["Spring Boot", "REST APIs", "JDBC", "JPA"],
    },
    {
        title: "Databases",
        skills: ["MySQL", "MongoDB"],
    },
    {
        title: "Tools & DevOps",
        skills: ["Git", "GitHub", "Docker", "Kubernetes", "Postman"],
    },
    {
        title: "AI & Data",
        skills: ["FAISS", "Embeddings", "RAG", "LLM APIs"],
    },
];

function Skills() {
    return (
        <section id="skills" className="border-b border-white/10">
            <div className="mx-auto max-w-7xl px-6 py-24">

                <p className="text-sm uppercase tracking-[0.25em] text-white/40">
                    Skills
                </p>

                <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
                    Technologies I work with.
                </h2>

                <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {skillGroups.map((group) => (
                        <div
                            key={group.title}
                            className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition hover:border-white/20"
                        >
                            <h3 className="text-lg font-medium">
                                {group.title}
                            </h3>

                            <div className="mt-5 flex flex-wrap gap-2">
                                {group.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="rounded-full border border-white/10 px-3 py-1.5 text-sm text-white/60"
                                    >
                    {skill}
                  </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default Skills;