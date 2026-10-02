"use client";

import Link from "next/link";
import React from "react";

type ClinicalToolLayoutProps = {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
  category?: string;
  icon?: string;
  onReset?: () => void;
};

export default function ClinicalToolLayout({
  children,
  title,
  subtitle,
  onReset,
}: ClinicalToolLayoutProps) {
  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-900">
      <div className="mx-auto w-full max-w-5xl px-5 py-7 md:px-8 md:py-10">

        {/* TOP NAV */}
        <div className="mb-10 flex items-center justify-between gap-4">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-slate-950"
          >
            <span className="text-base transition-transform duration-200 group-hover:-translate-x-1">
              ←
            </span>

            Clinical Tools
          </Link>

          {onReset && (
            <button
              type="button"
              onClick={onReset}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-500 shadow-[0_2px_12px_rgba(15,23,42,0.025)] transition hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900"
            >
              ↻
              Reset
            </button>
          )}
        </div>

        {/* HEADER */}
        <header className="mb-10">
          <h1 className="text-3xl font-semibold tracking-[-0.035em] text-slate-950 md:text-5xl">
            {title}
          </h1>

          {subtitle && (
            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500 md:text-base">
              {subtitle}
            </p>
          )}
        </header>

        {/* CONTENT */}
        {children}

        {/* FOOTER */}
        <footer className="mt-16 border-t border-slate-200 pt-7 text-center">
          <p className="text-sm text-slate-400">
            By{" "}
            <span className="font-medium text-slate-600">
              dr. Jasmine Nabila
            </span>
          </p>
        </footer>

      </div>
    </main>
  );
}