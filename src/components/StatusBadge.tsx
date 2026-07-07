import React from "react";

interface StatusBadgeProps {
  status: string;
}

export default function StatusBadge({ status }: StatusBadgeProps) {
  const getStyles = () => {
    switch (status.toLowerCase()) {
      case "active":
      case "approved":
      case "success":
      case "resolved":
      case "completed":
        return {
          bg: "bg-emerald-950/40",
          border: "border-emerald-500/30",
          text: "text-emerald-400",
        };
      case "pending":
      case "submitted":
      case "proposal":
      case "open":
        return {
          bg: "bg-amber-950/40",
          border: "border-amber-500/30",
          text: "text-amber-400",
        };
      case "critical":
      case "error":
      case "disputed":
      case "failed":
        return {
          bg: "bg-rose-950/40",
          border: "border-rose-500/30",
          text: "text-rose-400",
        };
      default:
        return {
          bg: "bg-neutral-900/40",
          border: "border-neutral-700/30",
          text: "text-neutral-400",
        };
    }
  };

  const styles = getStyles();

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2 py-1 rounded text-[10px] font-mono font-medium border uppercase tracking-wider ${styles.bg} ${styles.border} ${styles.text}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${styles.text.replace("text-", "bg-")}`} />
      {status}
    </span>
  );
}
