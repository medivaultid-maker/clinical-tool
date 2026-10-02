"use client";

import { useState } from "react";
import ClinicalToolLayout from "@/app/components/clinical/ClinicalToolLayout";

export default function TifoidPage() {
  const [fever7Days, setFever7Days] = useState(false);
  const [diarrhea, setDiarrhea] = useState(false);
  const [constipation, setConstipation] = useState(false);
  const [vomiting, setVomiting] = useState(false);
  const [abdominalPain, setAbdominalPain] = useState(false);
  const [headache, setHeadache] = useState(false);
  const [cough, setCough] = useState(false);

  const [seriouslyIll, setSeriouslyIll] = useState(false);
  const [delirium, setDelirium] = useState(false);
  const [hepatosplenomegaly, setHepatosplenomegaly] = useState(false);
  const [decreasedConsciousness, setDecreasedConsciousness] =
    useState(false);
  const [seizure, setSeizure] = useState(false);
  const [jaundice, setJaundice] = useState(false);

  // =========================
  // LOGIC
  // =========================

  const hasSupportingSymptom =
    diarrhea ||
    constipation ||
    vomiting ||
    abdominalPain ||
    headache ||
    cough;

  const suspectedTyphoid =
    fever7Days && hasSupportingSymptom;

  const primaryCriteria = [
    {
      label: "Demam ≥ 7 hari",
      description: "Kriteria utama",
      checked: fever7Days,
      setChecked: setFever7Days,
      primary: true,
    },
    {
      label: "Diare",
      checked: diarrhea,
      setChecked: setDiarrhea,
    },
    {
      label: "Konstipasi",
      checked: constipation,
      setChecked: setConstipation,
    },
    {
      label: "Mual / muntah",
      checked: vomiting,
      setChecked: setVomiting,
    },
    {
      label: "Nyeri perut",
      checked: abdominalPain,
      setChecked: setAbdominalPain,
    },
    {
      label: "Sakit kepala",
      checked: headache,
      setChecked: setHeadache,
    },
    {
      label: "Batuk",
      checked: cough,
      setChecked: setCough,
    },
  ];

  const diagnosticFindings = [
    {
      label: "Tampak sakit / kondisi serius tanpa sebab jelas",
      checked: seriouslyIll,
      setChecked: setSeriouslyIll,
    },
    {
      label: "Delirium",
      checked: delirium,
      setChecked: setDelirium,
    },
    {
      label: "Hepatosplenomegali",
      checked: hepatosplenomegaly,
      setChecked: setHepatosplenomegaly,
    },
    {
      label: "Penurunan kesadaran",
      checked: decreasedConsciousness,
      setChecked: setDecreasedConsciousness,
    },
    {
      label: "Kejang",
      checked: seizure,
      setChecked: setSeizure,
    },
    {
      label: "Ikterus",
      checked: jaundice,
      setChecked: setJaundice,
    },
  ];

  const primaryCount = primaryCriteria.filter(
    (item) => item.checked
  ).length;

  const diagnosticCount = diagnosticFindings.filter(
    (item) => item.checked
  ).length;

  // =========================
  // RESET
  // =========================

  const resetAssessment = () => {
    setFever7Days(false);
    setDiarrhea(false);
    setConstipation(false);
    setVomiting(false);
    setAbdominalPain(false);
    setHeadache(false);
    setCough(false);

    setSeriouslyIll(false);
    setDelirium(false);
    setHepatosplenomegaly(false);
    setDecreasedConsciousness(false);
    setSeizure(false);
    setJaundice(false);
  };

  return (
    <ClinicalToolLayout
      title="Demam Tifoid"
      subtitle="Penilaian klinis awal untuk membantu mempertimbangkan diagnosis demam tifoid."
      category="Guideline"
      icon="🌡️"
      onReset={resetAssessment}
    >

      {/* ========================= */}
      {/* KELUHAN UTAMA */}
      {/* ========================= */}

      <section className="mb-6 overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-[0_8px_35px_rgba(15,23,42,0.045)]">

        <div className="flex items-center justify-between gap-4 border-b border-slate-100 px-5 py-5 md:px-6">

          <div className="flex items-center gap-4">

            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-900 text-xs font-semibold text-white">
              01
            </div>

            <div>
              <h2 className="text-sm font-semibold text-slate-950 md:text-base">
                Keluhan Utama
              </h2>

              <p className="mt-1 text-xs text-slate-400">
                Pilih tanda dan gejala yang ditemukan.
              </p>
            </div>

          </div>

          <div className="shrink-0 rounded-full bg-slate-50 px-3 py-1.5 ring-1 ring-slate-100">
            <span className="text-sm font-semibold text-slate-700">
              {primaryCount}
            </span>

            <span className="ml-1 text-xs text-slate-400">
              / 7
            </span>
          </div>

        </div>

        <div className="grid gap-px bg-slate-100 md:grid-cols-2">

          {primaryCriteria.map((item) => (
            <AssessmentCard
              key={item.label}
              label={item.label}
              description={item.description}
              checked={item.checked}
              primary={item.primary}
              onChange={item.setChecked}
            />
          ))}

        </div>

      </section>


      {/* ========================= */}
      {/* TANDA DIAGNOSIS */}
      {/* ========================= */}

      <section className="mb-6 overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-[0_8px_35px_rgba(15,23,42,0.045)]">

        <div className="flex items-center justify-between gap-4 border-b border-slate-100 px-5 py-5 md:px-6">

          <div className="flex items-center gap-4">

            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-xs font-semibold text-slate-700">
              02
            </div>

            <div>
              <h2 className="text-sm font-semibold text-slate-950 md:text-base">
                Tanda Diagnosis Kunci
              </h2>

              <p className="mt-1 text-xs text-slate-400">
                Temuan klinis yang ditemukan pada pasien.
              </p>
            </div>

          </div>

          <div className="shrink-0 rounded-full bg-slate-50 px-3 py-1.5 ring-1 ring-slate-100">
            <span className="text-sm font-semibold text-slate-700">
              {diagnosticCount}
            </span>

            <span className="ml-1 text-xs text-slate-400">
              / 6
            </span>
          </div>

        </div>

        <div className="grid gap-px bg-slate-100 md:grid-cols-2">

          {diagnosticFindings.map((item) => (
            <AssessmentCard
              key={item.label}
              label={item.label}
              checked={item.checked}
              onChange={item.setChecked}
            />
          ))}

        </div>

      </section>


      {/* ========================= */}
      {/* RESULT */}
      {/* ========================= */}

      <section
        className={`mb-6 overflow-hidden rounded-3xl border transition-all duration-300 ${
          suspectedTyphoid
            ? "border-slate-900 bg-slate-950 shadow-[0_16px_40px_rgba(15,23,42,0.10)]"
            : "border-slate-200/80 bg-white shadow-[0_8px_35px_rgba(15,23,42,0.045)]"
        }`}
      >

        <div className="p-6 md:p-7">

          <div className="flex items-start justify-between gap-6">

            <div>

              <div className="flex items-center gap-2">

                <span
                  className={`h-1.5 w-1.5 rounded-full ${
                    suspectedTyphoid
                      ? "bg-white/70"
                      : "bg-slate-400"
                  }`}
                />

                <p
                  className={`text-[10px] font-medium uppercase tracking-[0.2em] ${
                    suspectedTyphoid
                      ? "text-slate-400"
                      : "text-slate-400"
                  }`}
                >
                  Assessment Result
                </p>

              </div>

              <h2
                className={`mt-3 text-2xl font-semibold tracking-[-0.03em] md:text-3xl ${
                  suspectedTyphoid
                    ? "text-white"
                    : "text-slate-950"
                }`}
              >
                {suspectedTyphoid
                  ? "Pertimbangkan Demam Tifoid"
                  : "Belum memenuhi kriteria assessment"}
              </h2>

              <p
                className={`mt-4 max-w-2xl text-sm leading-6 ${
                  suspectedTyphoid
                    ? "text-slate-300"
                    : "text-slate-500"
                }`}
              >
                {suspectedTyphoid
                  ? "Demam ≥7 hari disertai minimal satu keluhan yang mendukung. Lanjutkan penilaian klinis dan pertimbangkan diagnosis banding."
                  : "Berdasarkan parameter yang dipilih, kriteria awal untuk mempertimbangkan demam tifoid belum terpenuhi."}
              </p>

            </div>

            <div
              className={`hidden h-11 w-11 shrink-0 items-center justify-center rounded-2xl text-lg md:flex ${
                suspectedTyphoid
                  ? "bg-white/10 text-white"
                  : "bg-slate-100 text-slate-400"
              }`}
            >
              {suspectedTyphoid ? "✓" : "—"}
            </div>

          </div>

        </div>

      </section>


      {/* ========================= */}
      {/* GUIDELINE */}
      {/* ========================= */}

      {suspectedTyphoid && (
        <section className="overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-[0_8px_35px_rgba(15,23,42,0.045)]">

          <div className="border-b border-slate-100 px-5 py-5 md:px-6">

            <div className="flex items-center gap-4">

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-xs font-semibold text-slate-700">
                03
              </div>

              <div>
                <h2 className="text-sm font-semibold text-slate-950 md:text-base">
                  Guideline Tatalaksana
                </h2>

                <p className="mt-1 text-xs text-slate-400">
                  Panduan diagnosis dan tatalaksana demam tifoid.
                </p>
              </div>

            </div>

          </div>

          <div className="space-y-6 p-5 md:p-6">

            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
              <img
                src="/guidelines/tifoid/tifoid-tatalaksana.png"
                alt="Diagnosis dan tatalaksana demam tifoid"
                className="h-auto w-full"
              />
            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
              <img
                src="/guidelines/tifoid/tifoid-komplikasi.png"
                alt="Perawatan penunjang, pemantauan dan komplikasi demam tifoid"
                className="h-auto w-full"
              />
            </div>

          </div>

        </section>
      )}

    </ClinicalToolLayout>
  );
}


/* ================================================= */
/* ASSESSMENT CARD */
/* ================================================= */

function AssessmentCard({
  label,
  description,
  checked,
  onChange,
  primary = false,
}: {
  label: string;
  description?: string;
  checked: boolean;
  onChange: (value: boolean) => void;
  primary?: boolean;
}) {
  return (
    <label
      className={`group flex min-h-[76px] cursor-pointer items-center justify-between gap-4 p-5 transition-all duration-200 ${
        checked
          ? primary
            ? "bg-slate-900"
            : "bg-slate-50"
          : "bg-white hover:bg-slate-50/70"
      }`}
    >

      <div className="min-w-0">

        <p
          className={`text-sm font-medium ${
            checked && primary
              ? "text-white"
              : "text-slate-800"
          }`}
        >
          {label}
        </p>

        {description && (
          <p
            className={`mt-1 text-xs ${
              checked && primary
                ? "text-slate-400"
                : "text-slate-400"
            }`}
          >
            {description}
          </p>
        )}

      </div>


      <div
        className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border transition-all ${
          checked
            ? primary
              ? "border-white bg-white text-slate-900"
              : "border-slate-900 bg-slate-900 text-white"
            : "border-slate-300 bg-white text-transparent group-hover:border-slate-400"
        }`}
      >
        <span className="text-xs font-bold">
          ✓
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
}