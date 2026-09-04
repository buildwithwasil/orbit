function LeetCodeCard() {
    const stats = {
        total: 250,
        easy: 120,
        medium: 105,
        hard: 25,
    };

    return (
        <div className="rounded-2xl border border-black/10 bg-black/[0.02] p-6 dark:border-white/10 dark:bg-white/[0.02]">

            {/* Header */}
            <div className="flex items-start justify-between gap-4">

                <div>
                    <p className="text-sm text-black/50 dark:text-white/50">
                        LeetCode
                    </p>

                    <h3 className="mt-1 text-2xl font-semibold text-black dark:text-white">
                        Problem Solving
                    </h3>
                </div>

                <a
                    href="https://leetcode.com/u/wasilahmad/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 rounded-full border border-black/10 px-4 py-2 text-sm font-medium text-black transition-colors hover:bg-black hover:text-white dark:border-white/10 dark:text-white dark:hover:bg-white dark:hover:text-black"
                >
                    View Profile ↗
                </a>

            </div>

            {/* Total */}
            <div className="mt-8">
                <p className="text-sm text-black/50 dark:text-white/50">
                    Problems Solved
                </p>

                <p className="mt-1 text-5xl font-bold text-black dark:text-white">
                    {stats.total}
                </p>
            </div>

            {/* Difficulty */}
            <div className="mt-8 grid grid-cols-3 gap-3">

                <div className="rounded-xl border border-black/10 p-4 dark:border-white/10">
                    <p className="text-sm text-black/50 dark:text-white/50">
                        Easy
                    </p>

                    <p className="mt-2 text-2xl font-semibold text-black dark:text-white">
                        {stats.easy}
                    </p>
                </div>

                <div className="rounded-xl border border-black/10 p-4 dark:border-white/10">
                    <p className="text-sm text-black/50 dark:text-white/50">
                        Medium
                    </p>

                    <p className="mt-2 text-2xl font-semibold text-black dark:text-white">
                        {stats.medium}
                    </p>
                </div>

                <div className="rounded-xl border border-black/10 p-4 dark:border-white/10">
                    <p className="text-sm text-black/50 dark:text-white/50">
                        Hard
                    </p>

                    <p className="mt-2 text-2xl font-semibold text-black dark:text-white">
                        {stats.hard}
                    </p>
                </div>

            </div>

            {/* Difficulty Graph */}
            <div className="mt-8">

                <div className="flex justify-between text-sm">
                    <span className="text-black/50 dark:text-white/50">
                        Difficulty breakdown
                    </span>

                    <span className="font-medium text-black dark:text-white">
                        {stats.total} solved
                    </span>
                </div>

                <div className="mt-3 flex h-2 overflow-hidden rounded-full bg-black/10 dark:bg-white/10">

                    <div
                        className="bg-black dark:bg-white"
                        style={{
                            width: `${(stats.easy / stats.total) * 100}%`,
                        }}
                    />

                    <div
                        className="bg-black/60 dark:bg-white/60"
                        style={{
                            width: `${(stats.medium / stats.total) * 100}%`,
                        }}
                    />

                    <div
                        className="bg-black/30 dark:bg-white/30"
                        style={{
                            width: `${(stats.hard / stats.total) * 100}%`,
                        }}
                    />

                </div>

                <div className="mt-3 flex gap-5 text-xs text-black/50 dark:text-white/50">
                    <span>Easy</span>
                    <span>Medium</span>
                    <span>Hard</span>
                </div>

            </div>

        </div>
    );
}

export default LeetCodeCard;