import { NextResponse } from "next/server";

interface GitHubSearchItem {
  title: string;
  html_url: string;
  number: number;
  state: string;
  created_at: string;
  updated_at: string;
  pull_request?: {
    merged_at: string | null;
  };
  repository_url: string;
  user: {
    login: string;
    avatar_url: string;
  };
}

interface GitHubSearchResponse {
  total_count: number;
  items: GitHubSearchItem[];
}

export async function GET() {
  const token = process.env.GITHUB_TOKEN;
  const username = process.env.GITHUB_USERNAME || "Sravan1011";

  const headers: Record<string, string> = {
    Accept: "application/vnd.github.v3+json",
    "User-Agent": "Portfolio-App",
  };

  if (token && token !== "ghp_your_token_here") {
    headers.Authorization = `token ${token}`;
  }

  try {
    // Search for PRs authored by the user in repos they don't own (open-source contributions)
    const searchQuery = `author:${username} type:pr -user:${username}`;
    const url = `https://api.github.com/search/issues?q=${encodeURIComponent(
      searchQuery
    )}&sort=created&order=desc&per_page=5`;

    const response = await fetch(url, {
      headers,
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!response.ok) {
      throw new Error(`GitHub API responded with ${response.status}`);
    }

    const data: GitHubSearchResponse = await response.json();

    // Extract repo info from repository_url and fetch repo details for avatars
    const pullRequests = await Promise.all(
      data.items.map(async (item) => {
        const repoFullName = item.repository_url.replace(
          "https://api.github.com/repos/",
          ""
        );
        const [owner, repo] = repoFullName.split("/");

        // Determine PR status
        let status: "merged" | "open" | "closed" = "open";
        if (item.pull_request?.merged_at) {
          status = "merged";
        } else if (item.state === "closed") {
          status = "closed";
        }

        // Fetch repo owner avatar
        let ownerAvatarUrl = `https://github.com/${owner}.png?size=48`;

        return {
          title: item.title,
          url: item.html_url,
          number: item.number,
          status,
          createdAt: item.created_at,
          updatedAt: item.updated_at,
          repo: {
            fullName: repoFullName,
            name: repo,
            owner,
            ownerAvatarUrl,
          },
        };
      })
    );

    return NextResponse.json({
      totalCount: data.total_count,
      pullRequests,
    });
  } catch (error) {
    console.error("Failed to fetch GitHub PRs:", error);
    return NextResponse.json(
      { error: "Failed to fetch pull request data" },
      { status: 500 }
    );
  }
}
