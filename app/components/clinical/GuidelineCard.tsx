import React from "react";

type GuidelineCardProps = {
  title?: string;
  description?: string;
  children: React.ReactNode;
};

export default function GuidelineCard({
  title = "Guideline Tatalaksana",
  description = "Panduan berdasarkan hasil assessment.",
  children,
}: GuidelineCardProps) {
  return (
    <section className="mb-6 overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-[0_6px_28px_rgba(15,23,42,0.035)]">

      <div className="border-b border-slate-100 px-5 py-5 md:px-6">

        <h2 className="text-base font-semibold tracking-tight text-slate-950 md:text-lg">
          {title}
        </h2>

        <p className="mt-1 text-xs leading-5 text-slate-400">
          {description}
        </p>

      </div>

      <div className="p-5 md:p-6">
        {children}
      </div>

    </section>
  );
}