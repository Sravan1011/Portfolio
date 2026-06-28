"use client";

import React, { useEffect, useState, useCallback } from "react";

interface ContributionDay {
  count: number;
  date: string;
  color: string;
  level: number;
}

interface ContributionWeek {
  days: ContributionDay[];
}

interface ContributionData {
  totalContributions: number;
  weeks: ContributionWeek[];
}

const CELL_SIZE = 11;
const CELL_GAP = 3;
const CELL_ROUND = 2;
const MONTH_LABEL_HEIGHT = 20;
const DAY_LABEL_WIDTH = 32;

const LEVEL_COLORS = [
  "var(--contrib-level-0)",
  "var(--contrib-level-1)",
  "var(--contrib-level-2)",
  "var(--contrib-level-3)",
  "var(--contrib-level-4)",
];

const MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

function getMonthLabels(weeks: ContributionWeek[]) {
  const labels: { text: string; x: number }[] = [];
  let lastMonth = -1;

  weeks.forEach((week, i) => {
    if (week.days.length === 0) return;
    const firstDay = new Date(week.days[0].date);
    const month = firstDay.getMonth();
    if (month !== lastMonth) {
      labels.push({
        text: MONTHS[month],
        x: DAY_LABEL_WIDTH + i * (CELL_SIZE + CELL_GAP),
      });
      lastMonth = month;
    }
  });

  return labels;
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function GitHubContributions() {
  const [data, setData] = useState<ContributionData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [tooltip, setTooltip] = useState<{
    text: string;
    x: number;
    y: number;
  } | null>(null);
  const [containerRef, setContainerRef] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    async function fetchContributions() {
      try {
        const res = await fetch("/api/github/contributions");
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
    fetchContributions();
  }, []);

  const handleMouseEnter = useCallback(
    (day: ContributionDay, e: React.MouseEvent<SVGRectElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const containerRect = containerRef?.getBoundingClientRect();
      if (!containerRect) return;

      setTooltip({
        text: `${day.count} contribution${day.count !== 1 ? "s" : ""} on ${formatDate(day.date)}`,
        x: rect.left - containerRect.left + CELL_SIZE / 2,
        y: rect.top - containerRect.top - 8,
      });
    },
    [containerRef]
  );

  const handleMouseLeave = useCallback(() => {
    setTooltip(null);
  }, []);

  if (loading) {
    return (
      <div className="contrib-container">
        <div className="contrib-skeleton">
          <div className="contrib-skeleton-grid">
            {Array.from({ length: 7 }).map((_, row) => (
              <div key={row} className="contrib-skeleton-row">
                {Array.from({ length: 52 }).map((_, col) => (
                  <div
                    key={col}
                    className="contrib-skeleton-cell"
                    style={{ animationDelay: `${(row * 52 + col) * 5}ms` }}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="contrib-container">
        <div className="contrib-error">
          <p>⚠️ {error}</p>
          <p className="contrib-error-hint">
            Add a valid GITHUB_TOKEN to your .env.local file
          </p>
        </div>
      </div>
    );
  }

  if (!data) return null;

  const { weeks, totalContributions } = data;
  const monthLabels = getMonthLabels(weeks);

  const svgWidth = DAY_LABEL_WIDTH + weeks.length * (CELL_SIZE + CELL_GAP);
  const svgHeight = MONTH_LABEL_HEIGHT + 7 * (CELL_SIZE + CELL_GAP);

  return (
    <div className="contrib-container" ref={setContainerRef}>
      <div className="contrib-header">
        <span className="contrib-total">
          <strong>{totalContributions.toLocaleString()}</strong> contributions in the last year
        </span>
      </div>

      <div className="contrib-graph-wrapper">
        <svg
          width={svgWidth}
          height={svgHeight}
          className="contrib-graph"
          role="img"
          aria-label="GitHub contribution graph"
        >
          {/* Month labels */}
          {monthLabels.map((label, i) => (
            <text
              key={i}
              x={label.x}
              y={14}
              className="contrib-month-label"
            >
              {label.text}
            </text>
          ))}

          {/* Day labels */}
          {["Mon", "", "Wed", "", "Fri", "", ""].map((day, i) =>
            day ? (
              <text
                key={i}
                x={0}
                y={MONTH_LABEL_HEIGHT + i * (CELL_SIZE + CELL_GAP) + CELL_SIZE - 1}
                className="contrib-day-label"
              >
                {day}
              </text>
            ) : null
          )}

          {/* Contribution cells */}
          {weeks.map((week, weekIdx) =>
            week.days.map((day, dayIdx) => (
              <rect
                key={`${weekIdx}-${dayIdx}`}
                x={DAY_LABEL_WIDTH + weekIdx * (CELL_SIZE + CELL_GAP)}
                y={MONTH_LABEL_HEIGHT + dayIdx * (CELL_SIZE + CELL_GAP)}
                width={CELL_SIZE}
                height={CELL_SIZE}
                rx={CELL_ROUND}
                ry={CELL_ROUND}
                fill={LEVEL_COLORS[day.level]}
                className="contrib-cell"
                onMouseEnter={(e) => handleMouseEnter(day, e)}
                onMouseLeave={handleMouseLeave}
              />
            ))
          )}
        </svg>
      </div>

      {/* Tooltip */}
      {tooltip && (
        <div
          className="contrib-tooltip"
          style={{
            left: tooltip.x,
            top: tooltip.y,
          }}
        >
          {tooltip.text}
        </div>
      )}

      {/* Legend */}
      <div className="contrib-legend">
        <span className="contrib-legend-label">Less</span>
        {LEVEL_COLORS.map((color, i) => (
          <div
            key={i}
            className="contrib-legend-cell"
            style={{ backgroundColor: color }}
          />
        ))}
        <span className="contrib-legend-label">More</span>
      </div>
    </div>
  );
}
