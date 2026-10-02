import React from "react";

type ResultCardProps = {
  label?: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
};

export default function ResultCard({
  label = "Assessment Result",
  title,
  description,
  children,
}: ResultCardProps) {
  return (
    <section className="mb-6 overflow-hidden rounded-3xl bg-slate-900 p-6 text-white shadow-[0_14px_35px_rgba(15,23,42,0.10)] md:p-8">

      <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-slate-400">
        {label}
      </p>

      <h2 className="mt-3 text-2xl font-semibold tracking-[-0.025em] md:text-3xl">
        {title}
      </h2>

      {description && (
        <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300">
          {description}
        </p>
      )}

      {children && (
        <div className="mt-6">
          {children}
        </div>
      )}

    </section>
  );
}