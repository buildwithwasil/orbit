function GitHubCard() {
    return (
        <div className="rounded-2xl border border-black/10 bg-black/[0.02] p-6 dark:border-white/10 dark:bg-white/[0.02]">

            {/* Header */}
            <div className="flex items-start justify-between gap-4">

                <div>
                    <p className="text-sm text-black/50 dark:text-white/50">
                        GitHub
                    </p>

                    <h3 className="mt-1 text-2xl font-semibold text-black dark:text-white">
                        Open Source Activity
                    </h3>
                </div>

                <a
                    href="https://github.com/buildwithwasil"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 rounded-full border border-black/10 px-4 py-2 text-sm font-medium text-black transition-colors hover:bg-black hover:text-white dark:border-white/10 dark:text-white dark:hover:bg-white dark:hover:text-black"
                >
                    View Profile ↗
                </a>

            </div>

            {/* GitHub Contribution Graph */}
            <div className="mt-8 overflow-hidden rounded-xl border border-black/10 bg-white p-4 dark:border-white/10 dark:bg-black">

                <img
                    src="https://ghchart.rshah.org/buildwithwasil"
                    alt="GitHub contribution graph"
                    className="w-full"
                />

            </div>

            <p className="mt-4 text-sm leading-6 text-black/50 dark:text-white/50">
                Contributions and activity across my GitHub projects.
            </p>

        </div>
    );
}

export default GitHubCard;