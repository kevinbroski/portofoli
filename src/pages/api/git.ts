import type { NextApiRequest, NextApiResponse } from 'next'

type GitHubUser = {
    login: string;
    id: number;
    avatar_url: string;
    html_url: string;
    name: string;
    company: string;
    blog: string;
    location: string;
    email: string | null;
    bio: string;
    public_repos: number;
    followers: number;
    following: number;
}

let cache: { data: GitHubUser | null, timestamp: number } = { data: null, timestamp: 0 };
const CACHE_DURATION = 2 * 60 * 1000;

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const now = Date.now();

    if (cache.data && (now - cache.timestamp < CACHE_DURATION)) {
        res.status(200).json(cache.data);
        return;
    }

    try {
        const response = await fetch(`https://api.github.com/users/Scarlot-Ruskipy`);
        if (!response.ok) {
            res.status(response.status).json({ error: 'Failed to fetch GitHub user' });
            return;
        }

        const data: GitHubUser = await response.json();
        cache = { data, timestamp: now };
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}