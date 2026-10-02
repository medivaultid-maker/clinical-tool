"use client";

import { useState } from "react";
import ClinicalToolLayout from "../../components/clinical/ClinicalToolLayout";

export default function DehidrasiAnakPage() {
  // =========================
  // DEHIDRASI BERAT
  // =========================

  const [lethargic, setLethargic] = useState(false);
  const [severeSunkenEyes, setSevereSunkenEyes] = useState(false);
  const [unableToDrink, setUnableToDrink] = useState(false);
  const [verySlowSkinPinch, setVerySlowSkinPinch] = useState(false);

  // =========================
  // DEHIDRASI RINGAN / SEDANG
  // =========================

  const [restless, setRestless] = useState(false);
  const [moderateSunkenEyes, setModerateSunkenEyes] = useState(false);
  const [eagerToDrink, setEagerToDrink] = useState(false);
  const [slowSkinPinch, setSlowSkinPinch] = useState(false);

  // =========================
  // CALCULATION
  // =========================

  const severeSigns = [
    lethargic,
    severeSunkenEyes,
    unableToDrink,
    verySlowSkinPinch,
  ];

  const moderateSigns = [
    restless,
    moderateSunkenEyes,
    eagerToDrink,
    slowSkinPinch,
  ];

  const severeCount = severeSigns.filter(Boolean).length;
  const moderateCount = moderateSigns.filter(Boolean).length;

  let classification = "Tanpa Dehidrasi";

  let classificationDescription =
    "Tidak terdapat cukup tanda untuk diklasifikasikan sebagai dehidrasi ringan/sedang atau berat.";

  let treatment = [
    "Beri cairan dan makanan untuk menangani diare di rumah.",
    "Nasihati ibu kapan kembali segera.",
    "Kunjungan ulang dalam waktu 5 hari jika tidak membaik.",
  ];

  if (severeCount >= 2) {
    classification = "Dehidrasi Berat";

    classificationDescription =
      "Terdapat dua atau lebih tanda dehidrasi berat.";

    treatment = [
      "Beri cairan untuk diare dengan dehidrasi berat.",
      "Lihat Rencana Terapi C untuk diare di rumah sakit.",
    ];
  } else if (moderateCount >= 2) {
    classification = "Dehidrasi Ringan/Sedang";

    classificationDescription =
      "Terdapat dua atau lebih tanda dehidrasi ringan/sedang.";

    treatment = [
      "Beri anak cairan dan makanan untuk dehidrasi ringan.",
      "Lihat Rencana Terapi B.",
      "Setelah rehidrasi, nasihati ibu untuk penanganan di rumah dan kapan kembali segera.",
      "Kunjungan ulang dalam waktu 5 hari jika tidak membaik.",
    ];
  }

  const treatmentPlan =
    classification === "Dehidrasi Berat"
      ? "C"
      : classification === "Dehidrasi Ringan/Sedang"
      ? "B"
      : "A";

  // =========================
  // RESET
  // =========================

  const resetAssessment = () => {
    setLethargic(false);
    setSevereSunkenEyes(false);
    setUnableToDrink(false);
    setVerySlowSkinPinch(false);

    setRestless(false);
    setModerateSunkenEyes(false);
    setEagerToDrink(false);
    setSlowSkinPinch(false);
  };

  // =========================
  // ASSESSMENT ITEM
  // =========================

  const AssessmentItem = ({
    checked,
    onChange,
    children,
  }: {
    checked: boolean;
    onChange: (value: boolean) => void;
    children: React.ReactNode;
  }) => (
    <label
      className={`group flex cursor-pointer items-center justify-between gap-4 px-5 py-4 transition-all duration-200 md:px-6 ${
        checked ? "bg-slate-50" : "bg-white hover:bg-slate-50/70"
      }`}
    >
      <div className="flex min-w-0 items-center gap-4">
        <div
          className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border transition-all ${
            checked
              ? "border-slate-900 bg-slate-900"
              : "border-slate-300 bg-white group-hover:border-slate-400"
          }`}
        >
          {checked && (
            <svg
              viewBox="0 0 20 20"
              fill="none"
              className="h-4 w-4 text-white"
            >
              <path
                d="M5 10.5L8.5 14L15 7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </div>

        <span
          className={`text-sm leading-6 ${
            checked
              ? "font-medium text-slate-950"
              : "text-slate-700"
          }`}
        >
          {children}
        </span>
      </div>

      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="sr-only"
      />
    </label>
  );

  return (
    <ClinicalToolLayout
      title="Dehidrasi Anak"
      subtitle="Klasifikasi dehidrasi berdasarkan tanda klinis pada anak."
      category="Guideline"
      icon="💧"
      onReset={resetAssessment}
    >
      {/* ========================= */}
      {/* ASSESSMENT */}
      {/* ========================= */}

      <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">

        {/* DEHIDRASI BERAT */}

        <div className="border-b border-slate-100">
          <div className="flex items-center justify-between gap-4 border-b border-slate-100 px-5 py-5 md:px-7">
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-xs font-semibold text-white">
                01
              </div>

              <div>
                <h2 className="font-semibold text-slate-950">
                  Dehidrasi Berat
                </h2>

                <p className="mt-1 text-xs text-slate-400">
                  Klasifikasi jika terdapat ≥ 2 tanda
                </p>
              </div>
            </div>

            <div className="rounded-full bg-slate-50 px-3 py-1.5">
              <span className="text-sm font-semibold text-slate-900">
                {severeCount}
              </span>

              <span className="ml-1 text-xs text-slate-400">
                / 4
              </span>
            </div>
          </div>

          <div className="divide-y divide-slate-100">
            <AssessmentItem
              checked={lethargic}
              onChange={setLethargic}
            >
              Letargis / tidak sadar
            </AssessmentItem>

            <AssessmentItem
              checked={severeSunkenEyes}
              onChange={setSevereSunkenEyes}
            >
              Mata cekung
            </AssessmentItem>

            <AssessmentItem
              checked={unableToDrink}
              onChange={setUnableToDrink}
            >
              Tidak bisa minum atau malas minum
            </AssessmentItem>

            <AssessmentItem
              checked={verySlowSkinPinch}
              onChange={setVerySlowSkinPinch}
            >
              Cubitan kulit kembali sangat lambat (≥ 2 detik)
            </AssessmentItem>
          </div>
        </div>

        {/* DEHIDRASI RINGAN / SEDANG */}

        <div>
          <div className="flex items-center justify-between gap-4 border-b border-slate-100 px-5 py-5 md:px-7">
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-xs font-semibold text-slate-700">
                02
              </div>

              <div>
                <h2 className="font-semibold text-slate-950">
                  Dehidrasi Ringan/Sedang
                </h2>

                <p className="mt-1 text-xs text-slate-400">
                  Klasifikasi jika terdapat ≥ 2 tanda
                </p>
              </div>
            </div>

            <div className="rounded-full bg-slate-50 px-3 py-1.5">
              <span className="text-sm font-semibold text-slate-700">
                {moderateCount}
              </span>

              <span className="ml-1 text-xs text-slate-400">
                / 4
              </span>
            </div>
          </div>

          <div className="divide-y divide-slate-100">
            <AssessmentItem
              checked={restless}
              onChange={setRestless}
            >
              Rewel / gelisah
            </AssessmentItem>

            <AssessmentItem
              checked={moderateSunkenEyes}
              onChange={setModerateSunkenEyes}
            >
              Mata cekung
            </AssessmentItem>

            <AssessmentItem
              checked={eagerToDrink}
              onChange={setEagerToDrink}
            >
              Minum dengan lahap, haus
            </AssessmentItem>

            <AssessmentItem
              checked={slowSkinPinch}
              onChange={setSlowSkinPinch}
            >
              Cubitan kulit kembali lambat
            </AssessmentItem>
          </div>
        </div>
      </section>

      {/* ========================= */}
      {/* RESULT */}
      {/* ========================= */}

      <section className="mt-6 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">

        <div className="border-b border-slate-100 px-5 py-5 md:px-7">
          <div className="flex items-center gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-xs font-semibold text-slate-700">
              03
            </div>

            <div>
              <h2 className="font-semibold text-slate-950">
                Hasil Klasifikasi
              </h2>

              <p className="mt-1 text-xs text-slate-400">
                Berdasarkan tanda klinis yang dipilih
              </p>
            </div>
          </div>
        </div>

        <div className="p-5 md:p-7">
          <div className="rounded-3xl bg-slate-950 p-6 md:p-8">
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-slate-400">
              Klasifikasi
            </p>

            <h3 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              {classification}
            </h3>

            <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-300">
              {classificationDescription}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2">
                <span className="text-xs text-slate-400">
                  Tanda berat
                </span>

                <span className="ml-2 text-sm font-semibold text-white">
                  {severeCount}/4
                </span>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2">
                <span className="text-xs text-slate-400">
                  Tanda ringan/sedang
                </span>

                <span className="ml-2 text-sm font-semibold text-white">
                  {moderateCount}/4
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================= */}
      {/* TREATMENT */}
      {/* ========================= */}

      <section className="mt-6 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">

        <div className="border-b border-slate-100 px-5 py-5 md:px-7">
          <div className="flex items-center gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-xs font-semibold text-slate-700">
              04
            </div>

            <div>
              <h2 className="font-semibold text-slate-950">
                Guideline Tatalaksana
              </h2>

              <p className="mt-1 text-xs text-slate-400">
                Rencana terapi sesuai hasil klasifikasi
              </p>
            </div>
          </div>
        </div>

        <div className="p-5 md:p-7">

          <div className="space-y-2.5">
            {treatment.map((item, index) => (
              <div
                key={index}
                className="flex gap-4 rounded-2xl border border-slate-100 bg-slate-50/70 p-4"
              >
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white text-[11px] font-semibold text-slate-500 shadow-sm ring-1 ring-slate-100">
                  {index + 1}
                </div>

                <p className="text-sm leading-6 text-slate-700">
                  {item}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-7 border-t border-slate-100 pt-7">

            <div className="mb-4 flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-slate-950">
                  Rencana Terapi {treatmentPlan}
                </p>

                <p className="mt-1 text-xs text-slate-400">
                  Panduan terapi berdasarkan klasifikasi
                </p>
              </div>

              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-100 text-xs font-semibold text-slate-700">
                {treatmentPlan}
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
              <img
                src={
                  classification === "Dehidrasi Berat"
                    ? "/guidelines/rencana-terapi-c.png"
                    : classification === "Dehidrasi Ringan/Sedang"
                    ? "/guidelines/rencana-terapi-b.png"
                    : "/guidelines/rencana-terapi-a.png"
                }
                alt={`Rencana Terapi ${treatmentPlan}`}
                className="h-auto w-full"
              />
            </div>

          </div>
        </div>
      </section>
    </ClinicalToolLayout>
  );
}