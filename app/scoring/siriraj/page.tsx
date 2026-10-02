"use client";

import { useState, type ReactNode } from "react";
import ClinicalToolLayout from "../../components/clinical/ClinicalToolLayout";

export default function SirirajPage() {
  const [consciousness, setConsciousness] = useState(0);
  const [vomiting, setVomiting] = useState(0);
  const [headache, setHeadache] = useState(0);
  const [dbp, setDbp] = useState("");

  const [angina, setAngina] = useState(0);
  const [claudication, setClaudication] = useState(0);
  const [diabetes, setDiabetes] = useState(0);

  // Jika terdapat ≥1 tanda ateroma → bernilai 1
  const atheroma = Math.max(
    angina,
    claudication,
    diabetes
  );

  const diastolicBP = Number(dbp);

  const score =
    2.5 * consciousness +
    2 * vomiting +
    2 * headache +
    0.1 * (dbp === "" ? 0 : diastolicBP) -
    3 * atheroma -
    12;

  const resetScore = () => {
    setConsciousness(0);
    setVomiting(0);
    setHeadache(0);
    setDbp("");
    setAngina(0);
    setClaudication(0);
    setDiabetes(0);
  };

  let interpretation = "";
  let interpretationDetail = "";

  if (score > 1) {
    interpretation = "Hemoragik";
    interpretationDetail =
      "Skor > +1 mengarah pada stroke hemoragik supratentorial.";
  } else if (score < -1) {
    interpretation = "Infark";
    interpretationDetail =
      "Skor < −1 mengarah pada stroke infark serebral.";
  } else {
    interpretation = "Meragukan";
    interpretationDetail =
      "Skor antara −1 hingga +1 bersifat meragukan. Pemeriksaan neuroimaging diperlukan untuk membedakan stroke hemoragik dan infark.";
  }

  const OptionButton = ({
    selected,
    onClick,
    children,
    points,
  }: {
    selected: boolean;
    onClick: () => void;
    children: ReactNode;
    points?: string;
  }) => (
    <button
      type="button"
      onClick={onClick}
      className={`group rounded-2xl border px-4 py-4 text-left transition-all duration-200 ${
        selected
          ? "border-slate-900 bg-slate-900 text-white shadow-lg shadow-slate-900/10"
          : "border-slate-200 bg-white text-slate-700 hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50 hover:shadow-sm"
      }`}
    >
      <div className="flex items-center justify-between gap-3">
        <span className="font-medium">{children}</span>

        {points && (
          <span
            className={`rounded-lg px-2 py-1 text-xs font-semibold ${
              selected
                ? "bg-white/10 text-white"
                : "bg-slate-100 text-slate-500"
            }`}
          >
            {points}
          </span>
        )}
      </div>
    </button>
  );

  return (
    <ClinicalToolLayout
      title="Siriraj Stroke Score"
      subtitle="Penilaian klinis untuk membantu membedakan stroke hemoragik dan infark."
      onReset={resetScore}
    >
      <div className="space-y-6">

        {/* PARAMETER KLINIS */}
        <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">

          {/* Kesadaran */}
          <div className="border-b border-slate-100 px-5 py-6 md:px-7">
            <div className="mb-4">
              <p className="font-semibold text-slate-900">
                A. Derajat Kesadaran
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              <OptionButton
                selected={consciousness === 0}
                onClick={() => setConsciousness(0)}
                points="0"
              >
                Sadar
              </OptionButton>

              <OptionButton
                selected={consciousness === 1}
                onClick={() => setConsciousness(1)}
                points="1"
              >
                Apatis
              </OptionButton>

              <OptionButton
                selected={consciousness === 2}
                onClick={() => setConsciousness(2)}
                points="2"
              >
                Koma
              </OptionButton>
            </div>
          </div>

          {/* Muntah */}
          <div className="border-b border-slate-100 px-5 py-6 md:px-7">
            <div className="mb-4">
              <p className="font-semibold text-slate-900">
                B. Muntah
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <OptionButton
                selected={vomiting === 0}
                onClick={() => setVomiting(0)}
                points="0"
              >
                (−) Tidak
              </OptionButton>

              <OptionButton
                selected={vomiting === 1}
                onClick={() => setVomiting(1)}
                points="1"
              >
                (+) Ya
              </OptionButton>
            </div>
          </div>

          {/* Sakit kepala */}
          <div className="border-b border-slate-100 px-5 py-6 md:px-7">
            <div className="mb-4">
              <p className="font-semibold text-slate-900">
                C. Sakit Kepala
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <OptionButton
                selected={headache === 0}
                onClick={() => setHeadache(0)}
                points="0"
              >
                (−) Tidak
              </OptionButton>

              <OptionButton
                selected={headache === 1}
                onClick={() => setHeadache(1)}
                points="1"
              >
                (+) Ya
              </OptionButton>
            </div>
          </div>

          {/* DBP */}
          <div className="border-b border-slate-100 px-5 py-6 md:px-7">
            <div className="mb-4">
              <p className="font-semibold text-slate-900">
                D. Tekanan Darah Diastolik
              </p>

              <p className="mt-1 text-xs text-slate-400">
                Masukkan tekanan darah diastolik pasien.
              </p>
            </div>

            <div className="flex max-w-sm items-center gap-3">
              <input
                type="number"
                min="0"
                value={dbp}
                onChange={(e) => setDbp(e.target.value)}
                placeholder="Contoh: 90"
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-base font-medium text-slate-900 outline-none transition placeholder:text-slate-300 focus:border-slate-400 focus:bg-white focus:ring-4 focus:ring-slate-100"
              />

              <span className="text-sm font-medium text-slate-500">
                mmHg
              </span>
            </div>

            <div className="mt-3 inline-flex rounded-lg bg-slate-50 px-3 py-1.5 text-xs text-slate-500">
              DBP × 0,1
            </div>
          </div>

          {/* Ateroma */}
          <div className="px-5 py-6 md:px-7">
            <div className="mb-4">
              <p className="font-semibold text-slate-900">
                E. Tanda-Tanda Ateroma
              </p>

              <p className="mt-1 text-xs leading-5 text-slate-400">
                Pilih jika terdapat salah satu kondisi berikut.
              </p>
            </div>

            <div className="space-y-3">

              {/* Angina */}
              <div className="flex flex-col gap-3 rounded-2xl border border-slate-100 bg-slate-50/70 p-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="font-medium text-slate-800">
                  Angina pectoris
                </p>

                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setAngina(0)}
                    className={`rounded-xl px-4 py-2.5 text-sm font-medium transition ${
                      angina === 0
                        ? "bg-slate-900 text-white"
                        : "bg-white text-slate-600 ring-1 ring-slate-200 hover:bg-slate-100"
                    }`}
                  >
                    (−)
                  </button>

                  <button
                    type="button"
                    onClick={() => setAngina(1)}
                    className={`rounded-xl px-4 py-2.5 text-sm font-medium transition ${
                      angina === 1
                        ? "bg-slate-900 text-white"
                        : "bg-white text-slate-600 ring-1 ring-slate-200 hover:bg-slate-100"
                    }`}
                  >
                    (+)
                  </button>
                </div>
              </div>

              {/* Claudication */}
              <div className="flex flex-col gap-3 rounded-2xl border border-slate-100 bg-slate-50/70 p-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="font-medium text-slate-800">
                  Claudicatio intermittens
                </p>

                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setClaudication(0)}
                    className={`rounded-xl px-4 py-2.5 text-sm font-medium transition ${
                      claudication === 0
                        ? "bg-slate-900 text-white"
                        : "bg-white text-slate-600 ring-1 ring-slate-200 hover:bg-slate-100"
                    }`}
                  >
                    (−)
                  </button>

                  <button
                    type="button"
                    onClick={() => setClaudication(1)}
                    className={`rounded-xl px-4 py-2.5 text-sm font-medium transition ${
                      claudication === 1
                        ? "bg-slate-900 text-white"
                        : "bg-white text-slate-600 ring-1 ring-slate-200 hover:bg-slate-100"
                    }`}
                  >
                    (+)
                  </button>
                </div>
              </div>

              {/* Diabetes */}
              <div className="flex flex-col gap-3 rounded-2xl border border-slate-100 bg-slate-50/70 p-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="font-medium text-slate-800">
                  Diabetes Mellitus
                </p>

                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setDiabetes(0)}
                    className={`rounded-xl px-4 py-2.5 text-sm font-medium transition ${
                      diabetes === 0
                        ? "bg-slate-900 text-white"
                        : "bg-white text-slate-600 ring-1 ring-slate-200 hover:bg-slate-100"
                    }`}
                  >
                    (−)
                  </button>

                  <button
                    type="button"
                    onClick={() => setDiabetes(1)}
                    className={`rounded-xl px-4 py-2.5 text-sm font-medium transition ${
                      diabetes === 1
                        ? "bg-slate-900 text-white"
                        : "bg-white text-slate-600 ring-1 ring-slate-200 hover:bg-slate-100"
                    }`}
                  >
                    (+)
                  </button>
                </div>
              </div>

            </div>

            <div className="mt-4 rounded-xl bg-slate-50 px-4 py-3">
              <p className="text-xs leading-5 text-slate-500">
                Jika terdapat ≥1 tanda ateroma, komponen ateroma
                bernilai <strong>−3 poin</strong>.
              </p>
            </div>
          </div>

          {/* Rumus */}
          <div className="border-t border-slate-100 bg-slate-50 px-5 py-5 md:px-7">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
              Rumus
            </p>

            <p className="mt-2 text-sm font-medium leading-6 text-slate-700">
              (2,5 × kesadaran) + (2 × muntah) + (2 × sakit kepala)
              + (0,1 × tekanan darah diastolik) − (3 × ateroma) − 12
            </p>
          </div>
        </section>

        {/* SCORE */}
        <section className="rounded-3xl bg-slate-950 p-6 text-white shadow-xl">
          <p className="text-sm font-medium text-slate-400">
            Siriraj Score
          </p>

          <p className="mt-2 text-5xl font-bold tracking-tight">
            {score.toFixed(1)}
          </p>

          <p className="mt-2 text-xs text-slate-500">
            Nilai skor berdasarkan parameter yang dipilih.
          </p>
        </section>

        {/* INTERPRETATION */}
        <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-100 px-5 py-5 md:px-7">
            <h2 className="font-semibold text-slate-900">
              Interpretasi
            </h2>

            <p className="mt-1 text-xs text-slate-400">
              Interpretasi berdasarkan nilai Siriraj Score.
            </p>
          </div>

          <div className="grid md:grid-cols-[160px_1fr]">
            <div className="flex items-center justify-center border-b border-slate-100 bg-slate-50 p-7 text-center md:border-b-0 md:border-r">
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                  Hasil
                </p>

                <p className="mt-2 text-xl font-bold text-slate-900">
                  {interpretation}
                </p>
              </div>
            </div>

            <div className="p-6 md:p-7">
              <p className="text-sm leading-7 text-slate-600">
                {interpretationDetail}
              </p>

              <div className="mt-5 grid gap-3 sm:grid-cols-3">

                <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                  <p className="text-xs text-slate-400">
                    &lt; −1
                  </p>

                  <p className="mt-1 text-sm font-semibold text-slate-800">
                    Infark
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                  <p className="text-xs text-slate-400">
                    −1 hingga +1
                  </p>

                  <p className="mt-1 text-sm font-semibold text-slate-800">
                    Meragukan
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                  <p className="text-xs text-slate-400">
                    &gt; +1
                  </p>

                  <p className="mt-1 text-sm font-semibold text-slate-800">
                    Hemoragik
                  </p>
                </div>

              </div>
            </div>
          </div>
        </section>

      </div>
    </ClinicalToolLayout>
  );
}