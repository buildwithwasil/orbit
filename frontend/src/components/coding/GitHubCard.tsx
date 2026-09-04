import { useEffect, useState } from "react";

interface GitHubUser {
    login: string;
    avatar_url: string;
    html_url: string;
    bio: string | null;
    public_repos: number;
    followers: number;
    following: number;
    created_at: string;
}

function GitHubCard() {
    const [github, setGithub] = useState<GitHubUser | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchGitHubProfile = async () => {
            try {
                const response = await fetch(
                    "https://api.github.com/users/buildwithwasil"
                );

                if (!response.ok) {
                    throw new Error("Failed to fetch GitHub profile");
                }

                const data: GitHubUser = await response.json();

                setGithub(data);
            } catch (error) {
                console.error("GitHub API error:", error);
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        fetchGitHubProfile();
    }, []);

    if (loading) {
        return (
            <div className="rounded-2xl border border-black/10 bg-white p-6 dark:border-white/10 dark:bg-white/[0.02]">
                <p className="text-sm text-black/50 dark:text-white/50">
                    Loading GitHub profile...
                </p>
            </div>
        );
    }

    if (error || !github) {
        return (
            <div className="rounded-2xl border border-black/10 bg-white p-6 dark:border-white/10 dark:bg-white/[0.02]">
                <h3 className="text-lg font-semibold text-black dark:text-white">
                    GitHub
                </h3>

                <p className="mt-3 text-sm text-black/50 dark:text-white/50">
                    GitHub profile could not be loaded.
                </p>
            </div>
        );
    }

    const joinedYear = new Date(github.created_at).getFullYear();

    return (
        <div className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-white/[0.02] dark:shadow-none">

            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h3 className="text-lg font-semibold text-black dark:text-white">
                        GitHub
                    </h3>

                    <p className="mt-1 text-xs text-black/50 dark:text-white/50">
                        @{github.login}
                    </p>
                </div>

                <span className="rounded-full bg-green-50 px-2 py-1 text-[10px] font-medium text-green-600 dark:bg-green-500/10 dark:text-green-400">
                    Active
                </span>
            </div>

            {/* Statistics */}
            <div className="mt-4 grid grid-cols-2 gap-2">

                <div className="rounded-lg border border-black/10 bg-black/[0.02] px-3 py-2 dark:border-white/10 dark:bg-white/[0.02]">
                    <p className="text-[10px] text-black/40 dark:text-white/40">
                        Repositories
                    </p>

                    <p className="mt-1 text-sm font-semibold text-black dark:text-white">
                        {github.public_repos}
                    </p>
                </div>

                <div className="rounded-lg border border-black/10 bg-black/[0.02] px-3 py-2 dark:border-white/10 dark:bg-white/[0.02]">
                    <p className="text-[10px] text-black/40 dark:text-white/40">
                        Followers
                    </p>

                    <p className="mt-1 text-sm font-semibold text-black dark:text-white">
                        {github.followers}
                    </p>
                </div>

                <div className="rounded-lg border border-black/10 bg-black/[0.02] px-3 py-2 dark:border-white/10 dark:bg-white/[0.02]">
                    <p className="text-[10px] text-black/40 dark:text-white/40">
                        Following
                    </p>

                    <p className="mt-1 text-sm font-semibold text-black dark:text-white">
                        {github.following}
                    </p>
                </div>

                <div className="rounded-lg border border-black/10 bg-black/[0.02] px-3 py-2 dark:border-white/10 dark:bg-white/[0.02]">
                    <p className="text-[10px] text-black/40 dark:text-white/40">
                        Joined
                    </p>

                    <p className="mt-1 text-sm font-semibold text-black dark:text-white">
                        {joinedYear}
                    </p>
                </div>

            </div>

            {/* Bio */}
            <div className="mt-4">
                <p className="text-[10px] text-black/40 dark:text-white/40">
                    Bio
                </p>

                <p className="mt-1 text-xs leading-5 text-black/60 dark:text-white/60">
                    {github.bio || "Software engineer building useful things."}
                </p>
            </div>

            {/* GitHub Profile */}
            <a
                href={github.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-xs font-medium text-blue-600 transition hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
            >
                View GitHub Profile →
            </a>

            {/* Contribution Graph */}
            <img
                src="https://ghchart.rshah.org/buildwithwasil"
                alt="GitHub Contribution Graph"
                className="mt-6 w-full rounded-xl"
            />
        </div>
    );
}

export default GitHubCard;