import React from "react";

type ClinicalSectionProps = {
  number?: string;
  title: string;
  description?: string;
  count?: string;
  children: React.ReactNode;
};

export default function ClinicalSection({
  number,
  title,
  description,
  count,
  children,
}: ClinicalSectionProps) {
  return (
    <section className="mb-6 overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-[0_6px_28px_rgba(15,23,42,0.035)]">

      <div className="flex items-center justify-between gap-4 border-b border-slate-100 px-5 py-5 md:px-6">

        <div className="flex min-w-0 items-center gap-4">

          {number && (
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-[11px] font-semibold text-slate-600">
              {number}
            </div>
          )}

          <div>
            <h2 className="text-sm font-semibold text-slate-950 md:text-base">
              {title}
            </h2>

            {description && (
              <p className="mt-1 text-xs leading-5 text-slate-400">
                {description}
              </p>
            )}
          </div>

        </div>

        {count && (
          <span className="shrink-0 rounded-full bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-500 ring-1 ring-slate-100">
            {count}
          </span>
        )}

      </div>

      <div className="p-5 md:p-6">
        {children}
      </div>

    </section>
  );
}