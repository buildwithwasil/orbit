import LeetCodeCard from "./coding/LeetCodeCard";
import GitHubCard from "./coding/GitHubCard";

function CodingProfiles() {
    return (
        <section
            id="coding-profiles"
            className="border-b border-black/10 dark:border-white/10"
        >
            <div className="mx-auto max-w-7xl px-6 py-24">

                {/* Section Heading */}
                <div>
                    <p className="text-sm uppercase tracking-[0.25em] text-black/40 dark:text-white/40">
                        Coding Profiles
                    </p>

                    <h2 className="mt-4 text-3xl font-semibold tracking-tight text-black dark:text-white sm:text-4xl">
                        Problem solving & open source.
                    </h2>

                    <p className="mt-4 max-w-2xl leading-7 text-black/60 dark:text-white/60">
                        My coding practice and open-source activity.
                    </p>
                </div>

                {/* Coding Profile Cards */}
                <div className="mt-12 grid gap-6 lg:grid-cols-2">
                    <LeetCodeCard />
                    <GitHubCard />
                </div>

            </div>
        </section>
    );
}

export default CodingProfiles;