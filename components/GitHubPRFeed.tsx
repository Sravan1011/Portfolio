"use client";

import React, { useEffect, useState } from "react";
import { GitMerge, GitPullRequest, XCircle, ExternalLink } from "lucide-react";

interface PRRepo {
  fullName: string;
  name: string;
  owner: string;
  ownerAvatarUrl: string;
}

interface PullRequest {
  title: string;
  url: string;
  number: number;
  status: "merged" | "open" | "closed";
  createdAt: string;
  updatedAt: string;
  repo: PRRepo;
}

interface PRData {
  totalCount: number;
  pullRequests: PullRequest[];
}

function timeAgo(dateStr: string): string {
  const now = new Date();
  const date = new Date(dateStr);
  const diffMs = now.getTime() - date.getTime();
  const diffSec = Math.floor(diffMs / 1000);
  const diffMin = Math.floor(diffSec / 60);
  const diffHr = Math.floor(diffMin / 60);
  const diffDay = Math.floor(diffHr / 24);
  const diffWeek = Math.floor(diffDay / 7);
  const diffMonth = Math.floor(diffDay / 30);

  if (diffMonth > 0) return `${diffMonth}mo ago`;
  if (diffWeek > 0) return `${diffWeek}w ago`;
  if (diffDay > 0) return `${diffDay}d ago`;
  if (diffHr > 0) return `${diffHr}h ago`;
  if (diffMin > 0) return `${diffMin}m ago`;
  return "just now";
}

const STATUS_CONFIG = {
  merged: {
    icon: GitMerge,
    label: "Merged",
    color: "var(--pr-merged)",
    bgColor: "var(--pr-merged-bg)",
  },
  open: {
    icon: GitPullRequest,
    label: "Open",
    color: "var(--pr-open)",
    bgColor: "var(--pr-open-bg)",
  },
  closed: {
    icon: XCircle,
    label: "Closed",
    color: "var(--pr-closed)",
    bgColor: "var(--pr-closed-bg)",
  },
};

export default function GitHubPRFeed() {
  const [data, setData] = useState<PRData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPRs() {
      try {
        const res = await fetch("/api/github/pull-requests");
        if (!res.ok) throw new Error("Failed to fetch");
        const json = await res.json();
        if (json.error) throw new Error(json.error);
        setData(json);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load");
      } finally {
        setLoading(false);
      }
    }
    fetchPRs();
  }, []);

  if (loading) {
    return (
      <div className="pr-feed-container">
        <h3 className="pr-feed-title">Recent Activity</h3>
        <div className="pr-feed-list">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="pr-card pr-card-skeleton">
              <div className="pr-card-avatar-skeleton" />
              <div className="pr-card-content-skeleton">
                <div className="pr-card-title-skeleton" />
                <div className="pr-card-meta-skeleton" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="pr-feed-container">
        <h3 className="pr-feed-title">Recent Activity</h3>
        <div className="pr-feed-error">
          <p>Could not load recent PRs</p>
        </div>
      </div>
    );
  }

  if (!data || data.pullRequests.length === 0) {
    return null;
  }

  return (
    <div className="pr-feed-container">
      <div className="pr-feed-header">
        <h3 className="pr-feed-title">Recent Activity</h3>
        <span className="pr-feed-count">{data.totalCount} total PRs</span>
      </div>
      <div className="pr-feed-list">
        {data.pullRequests.map((pr) => {
          const statusCfg = STATUS_CONFIG[pr.status];
          const StatusIcon = statusCfg.icon;

          return (
            <a
              key={`${pr.repo.fullName}-${pr.number}`}
              href={pr.url}
              target="_blank"
              rel="noopener noreferrer"
              className="pr-card"
            >
              <div className="pr-card-avatar">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={pr.repo.ownerAvatarUrl}
                  alt={pr.repo.owner}
                  width={36}
                  height={36}
                  className="pr-card-avatar-img"
                />
              </div>
              <div className="pr-card-content">
                <div className="pr-card-top">
                  <span className="pr-card-repo">{pr.repo.fullName}</span>
                  <span className="pr-card-time">{timeAgo(pr.createdAt)}</span>
                </div>
                <div className="pr-card-title-row">
                  <span className="pr-card-pr-title">{pr.title}</span>
                  <ExternalLink className="pr-card-external-icon" />
                </div>
                <div className="pr-card-bottom">
                  <span
                    className="pr-card-status"
                    style={{
                      color: statusCfg.color,
                      backgroundColor: statusCfg.bgColor,
                    }}
                  >
                    <StatusIcon
                      style={{ width: 12, height: 12 }}
                    />
                    {statusCfg.label}
                  </span>
                  <span className="pr-card-number">#{pr.number}</span>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}
