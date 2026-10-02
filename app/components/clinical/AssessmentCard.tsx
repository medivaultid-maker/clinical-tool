"use client";

import React from "react";

type AssessmentCardProps = {
  label: string;
  description?: string;
  checked: boolean;
  onChange: (value: boolean) => void;
  badge?: string;
};

export default function AssessmentCard({
  label,
  description,
  checked,
  onChange,
  badge,
}: AssessmentCardProps) {
  return (
    <label
      className={`group flex min-h-[72px] cursor-pointer items-center justify-between gap-4 rounded-2xl border p-4 transition-all duration-200 ${
        checked
          ? "border-slate-300 bg-slate-50 shadow-[0_4px_18px_rgba(15,23,42,0.04)]"
          : "border-slate-200/80 bg-white hover:border-slate-300 hover:bg-slate-50/50"
      }`}
    >
      <div className="min-w-0">

        <p
          className={`text-sm leading-6 ${
            checked
              ? "font-semibold text-slate-950"
              : "font-medium text-slate-700"
          }`}
        >
          {label}
        </p>

        {description && (
          <p className="mt-0.5 text-xs leading-5 text-slate-400">
            {description}
          </p>
        )}

      </div>

      <div className="flex shrink-0 items-center gap-3">

        {badge && (
          <span
            className={`rounded-lg px-2.5 py-1 text-xs font-semibold ${
              checked
                ? "bg-slate-900 text-white"
                : "bg-slate-100 text-slate-500"
            }`}
          >
            {badge}
          </span>
        )}

        <div
          className={`flex h-6 w-6 items-center justify-center rounded-lg border transition ${
            checked
              ? "border-slate-900 bg-slate-900 text-white"
              : "border-slate-300 bg-white text-transparent group-hover:border-slate-400"
          }`}
        >
          <svg
            viewBox="0 0 20 20"
            fill="none"
            className="h-3.5 w-3.5"
          >
            <path
              d="M5 10.5L8.2 13.5L15 6.5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

      </div>

      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="sr-only"
      />

    </label>
  );
}