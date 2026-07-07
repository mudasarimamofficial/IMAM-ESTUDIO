"use client";

import React, { useState } from "react";

interface Column<T> {
  header: string;
  accessor: keyof T | ((item: T) => React.ReactNode);
  sortable?: boolean;
}

interface DataGridProps<T> {
  columns: Column<T>[];
  data: T[];
  searchPlaceholder?: string;
  searchField?: keyof T;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function DataGrid<T extends Record<string, any>>({
  columns,
  data,
  searchPlaceholder = "Filter results...",
  searchField,
}: DataGridProps<T>) {
  const [query, setQuery] = useState("");
  const [sortConfig, setSortConfig] = useState<{ key: keyof T; direction: "asc" | "desc" } | null>(null);

  const handleSort = (key: keyof T) => {
    let direction: "asc" | "desc" = "asc";
    if (sortConfig && sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const sortedData = React.useMemo(() => {
    let items = [...data];

    // Filter
    if (query && searchField) {
      items = items.filter((item) => {
        const val = item[searchField];
        return val ? String(val).toLowerCase().includes(query.toLowerCase()) : false;
      });
    }

    // Sort
    if (sortConfig) {
      items.sort((a, b) => {
        const aVal = a[sortConfig.key];
        const bVal = b[sortConfig.key];
        if (aVal < bVal) return sortConfig.direction === "asc" ? -1 : 1;
        if (aVal > bVal) return sortConfig.direction === "asc" ? 1 : -1;
        return 0;
      });
    }

    return items;
  }, [data, query, searchField, sortConfig]);

  return (
    <div className="flex flex-col gap-4 w-full">
      {searchField && (
        <div className="relative w-full max-w-sm">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#8e9192] text-[18px]">
            search
          </span>
          <input
            type="text"
            placeholder={searchPlaceholder}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-[#0a0a0a] border border-[#222222] focus:border-white text-white font-mono text-xs rounded pl-10 pr-4 py-2.5 outline-none transition-colors"
          />
        </div>
      )}

      <div className="overflow-x-auto rounded border border-border bg-surface-low">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-border bg-[#0d0e0f]">
              {columns.map((col, idx) => (
                <th
                  key={idx}
                  onClick={() => col.sortable && typeof col.accessor === "string" && handleSort(col.accessor as keyof T)}
                  className={`p-4 font-mono text-[10px] font-semibold uppercase tracking-wider text-[#8e9192] ${
                    col.sortable && typeof col.accessor === "string" ? "cursor-pointer select-none hover:text-white" : ""
                  }`}
                >
                  <div className="flex items-center gap-1">
                    {col.header}
                    {col.sortable && typeof col.accessor === "string" && (
                      <span className="material-symbols-outlined text-[12px]">
                        {sortConfig?.key === col.accessor
                          ? sortConfig.direction === "asc"
                            ? "arrow_drop_up"
                            : "arrow_drop_down"
                          : "unfold_more"}
                      </span>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sortedData.length === 0 ? (
              <tr>
                <td colSpan={columns.length} className="p-8 text-center font-mono text-xs text-[#8e9192]">
                  No matching record entries found.
                </td>
              </tr>
            ) : (
              sortedData.map((row, rowIdx) => (
                <tr
                  key={rowIdx}
                  className="border-b border-[#111111] hover:bg-[#0a0a0a] transition-colors"
                >
                  {columns.map((col, colIdx) => {
                    const cellContent =
                      typeof col.accessor === "function"
                        ? col.accessor(row)
                        : (row[col.accessor] as React.ReactNode);

                    return (
                      <td key={colIdx} className="p-4 text-xs font-mono text-white max-w-xs truncate">
                        {cellContent}
                      </td>
                    );
                  })}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
