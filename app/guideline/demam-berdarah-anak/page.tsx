"use client";

import { useState } from "react";
import ClinicalToolLayout from "../../components/clinical/ClinicalToolLayout";

export default function DemamBerdarahPage() {
  // =========================
  // KLINIS
  // =========================

  const [fever, setFever] = useState(false);
  const [hepatomegaly, setHepatomegaly] = useState(false);

  // Manifestasi perdarahan
  const [tourniquet, setTourniquet] = useState(false);
  const [petechiae, setPetechiae] = useState(false);
  const [mucosalBleeding, setMucosalBleeding] = useState(false);
  const [epistaxis, setEpistaxis] = useState(false);
  const [gumBleeding, setGumBleeding] = useState(false);
  const [hematemesis, setHematemesis] = useState(false);
  const [melena, setMelena] = useState(false);

  // Syok
  const [weakPulse, setWeakPulse] = useState(false);
  const [narrowPulsePressure, setNarrowPulsePressure] = useState(false);
  const [hypotension, setHypotension] = useState(false);
  const [coldExtremities, setColdExtremities] = useState(false);
  const [moistSkin, setMoistSkin] = useState(false);
  const [prolongedCRT, setProlongedCRT] = useState(false);
  const [restlessness, setRestlessness] = useState(false);

  // Profound shock
  const [unpalpablePulse, setUnpalpablePulse] = useState(false);
  const [unmeasurableBP, setUnmeasurableBP] = useState(false);

  // =========================
  // LABORATORIUM
  // =========================

  const [thrombocytopenia, setThrombocytopenia] = useState(false);
  const [hematocritIncrease, setHematocritIncrease] = useState(false);
  const [hematocritDecrease, setHematocritDecrease] = useState(false);
  const [pleuralEffusion, setPleuralEffusion] = useState(false);
  const [ascites, setAscites] = useState(false);
  const [hypoproteinemia, setHypoproteinemia] = useState(false);

  // =========================
  // LOGIC
  // =========================

  const bleedingPresent =
    tourniquet ||
    petechiae ||
    mucosalBleeding ||
    epistaxis ||
    gumBleeding ||
    hematemesis ||
    melena;

  const spontaneousBleeding =
    petechiae ||
    mucosalBleeding ||
    epistaxis ||
    gumBleeding ||
    hematemesis ||
    melena;

  const plasmaLeakage =
    hematocritIncrease ||
    hematocritDecrease ||
    pleuralEffusion ||
    ascites ||
    hypoproteinemia;

  const compensatedShock =
    weakPulse ||
    narrowPulsePressure ||
    hypotension ||
    coldExtremities ||
    moistSkin ||
    prolongedCRT ||
    restlessness;

  const profoundShock =
    unpalpablePulse || unmeasurableBP;

  const dengueWorkingDiagnosis =
    fever &&
    bleedingPresent &&
    (thrombocytopenia || plasmaLeakage);

  // =========================
  // CLASSIFICATION
  // =========================

  let classification = "Belum dapat diklasifikasikan";

  let classificationDetail =
    "Lengkapi data klinis dan laboratorium pasien.";

  if (dengueWorkingDiagnosis) {
    if (profoundShock) {
      classification = "DBD Derajat IV";

      classificationDetail =
        "Syok berat dengan nadi tidak dapat diraba dan/atau tekanan darah tidak terukur.";
    } else if (compensatedShock) {
      classification = "DBD Derajat III";

      classificationDetail =
        "Didapatkan tanda kegagalan sirkulasi atau syok.";
    } else if (spontaneousBleeding) {
      classification = "DBD Derajat II";

      classificationDetail =
        "Disertai perdarahan spontan pada kulit dan/atau perdarahan lainnya.";
    } else if (tourniquet) {
      classification = "DBD Derajat I";

      classificationDetail =
        "Demam disertai manifestasi perdarahan berupa uji bendung positif.";
    }
  }

  // =========================
  // RESET
  // =========================

  const resetAll = () => {
    setFever(false);
    setHepatomegaly(false);

    setTourniquet(false);
    setPetechiae(false);
    setMucosalBleeding(false);
    setEpistaxis(false);
    setGumBleeding(false);
    setHematemesis(false);
    setMelena(false);

    setWeakPulse(false);
    setNarrowPulsePressure(false);
    setHypotension(false);
    setColdExtremities(false);
    setMoistSkin(false);
    setProlongedCRT(false);
    setRestlessness(false);

    setUnpalpablePulse(false);
    setUnmeasurableBP(false);

    setThrombocytopenia(false);
    setHematocritIncrease(false);
    setHematocritDecrease(false);
    setPleuralEffusion(false);
    setAscites(false);
    setHypoproteinemia(false);
  };

  return (
    <ClinicalToolLayout
      title="Demam Berdarah Dengue"
      subtitle="Penilaian klinis dan klasifikasi derajat penyakit berdasarkan temuan klinis dan laboratorium."
      category="Guideline"
      icon="🩸"
      onReset={resetAll}
    >
      {/* ========================= */}
      {/* KLINIS */}
      {/* ========================= */}

      <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-100 px-5 py-5 md:px-7">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 text-sm font-bold text-white">
              01
            </div>

            <div>
              <h2 className="font-semibold text-slate-900">
                Gejala Klinis
              </h2>

              <p className="mt-0.5 text-xs text-slate-400">
                Temuan klinis yang ditemukan pada pasien.
              </p>
            </div>
          </div>
        </div>

        <div className="divide-y divide-slate-100">
          <ClinicalCheckbox
            checked={fever}
            onChange={setFever}
            label="Demam tinggi mendadak"
            description="Berlangsung 2–7 hari"
          />

          <ClinicalCheckbox
            checked={hepatomegaly}
            onChange={setHepatomegaly}
            label="Pembesaran hati"
          />
        </div>
      </section>

      {/* ========================= */}
      {/* PERDARAHAN */}
      {/* ========================= */}

      <section className="mt-6 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        <SectionHeader
          number="02"
          title="Manifestasi Perdarahan"
          description="Pilih manifestasi perdarahan yang ditemukan."
        />

        <div className="divide-y divide-slate-100">
          <ClinicalCheckbox
            checked={tourniquet}
            onChange={setTourniquet}
            label="Uji bendung positif"
          />

          <ClinicalCheckbox
            checked={petechiae}
            onChange={setPetechiae}
            label="Petekie / ekimosis / purpura"
          />

          <ClinicalCheckbox
            checked={mucosalBleeding}
            onChange={setMucosalBleeding}
            label="Perdarahan mukosa"
          />

          <ClinicalCheckbox
            checked={epistaxis}
            onChange={setEpistaxis}
            label="Epistaksis"
          />

          <ClinicalCheckbox
            checked={gumBleeding}
            onChange={setGumBleeding}
            label="Perdarahan gusi"
          />

          <ClinicalCheckbox
            checked={hematemesis}
            onChange={setHematemesis}
            label="Hematemesis"
          />

          <ClinicalCheckbox
            checked={melena}
            onChange={setMelena}
            label="Melena"
          />
        </div>
      </section>

      {/* ========================= */}
      {/* SYOK */}
      {/* ========================= */}

      <section className="mt-6 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        <SectionHeader
          number="03"
          title="Tanda Kegagalan Sirkulasi / Syok"
          description="Temuan yang mengarah pada syok terkompensasi."
        />

        <div className="divide-y divide-slate-100">
          <ClinicalCheckbox
            checked={weakPulse}
            onChange={setWeakPulse}
            label="Nadi cepat dan lemah"
          />

          <ClinicalCheckbox
            checked={narrowPulsePressure}
            onChange={setNarrowPulsePressure}
            label="Tekanan nadi ≤ 20 mmHg"
          />

          <ClinicalCheckbox
            checked={hypotension}
            onChange={setHypotension}
            label="Hipotensi"
          />

          <ClinicalCheckbox
            checked={coldExtremities}
            onChange={setColdExtremities}
            label="Kaki dan tangan dingin"
          />

          <ClinicalCheckbox
            checked={moistSkin}
            onChange={setMoistSkin}
            label="Kulit lembap"
          />

          <ClinicalCheckbox
            checked={prolongedCRT}
            onChange={setProlongedCRT}
            label="Capillary refill time > 2 detik"
          />

          <ClinicalCheckbox
            checked={restlessness}
            onChange={setRestlessness}
            label="Pasien tampak gelisah"
          />
        </div>

        <div className="border-t border-slate-100 bg-slate-50 p-5 md:p-6">
          <p className="mb-3 text-sm font-semibold text-slate-800">
            Profound Shock — Derajat IV
          </p>

          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <ClinicalCheckbox
              checked={unpalpablePulse}
              onChange={setUnpalpablePulse}
              label="Nadi tidak dapat diraba"
            />

            <div className="border-t border-slate-100">
              <ClinicalCheckbox
                checked={unmeasurableBP}
                onChange={setUnmeasurableBP}
                label="Tekanan darah tidak terukur"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========================= */}
      {/* LABORATORIUM */}
      {/* ========================= */}

      <section className="mt-6 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        <SectionHeader
          number="04"
          title="Laboratorium"
          description="Temuan laboratorium dan tanda kebocoran plasma."
        />

        <div className="divide-y divide-slate-100">
          <ClinicalCheckbox
            checked={thrombocytopenia}
            onChange={setThrombocytopenia}
            label="Trombosit ≤ 100.000/µL"
          />

          <ClinicalCheckbox
            checked={hematocritIncrease}
            onChange={setHematocritIncrease}
            label="Hematokrit meningkat ≥ 20%"
          />

          <ClinicalCheckbox
            checked={hematocritDecrease}
            onChange={setHematocritDecrease}
            label="Hematokrit turun ≥ 20% setelah terapi cairan"
          />

          <ClinicalCheckbox
            checked={pleuralEffusion}
            onChange={setPleuralEffusion}
            label="Efusi pleura / perikardial"
          />

          <ClinicalCheckbox
            checked={ascites}
            onChange={setAscites}
            label="Asites"
          />

          <ClinicalCheckbox
            checked={hypoproteinemia}
            onChange={setHypoproteinemia}
            label="Hipoproteinemia"
          />
        </div>
      </section>

      {/* ========================= */}
      {/* RESULT */}
      {/* ========================= */}

      <section className="mt-6 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        <SectionHeader
          number="05"
          title="Hasil Assessment"
          description="Klasifikasi berdasarkan data yang dimasukkan."
        />

        <div className="p-5 md:p-6">
          <div className="rounded-3xl bg-slate-950 p-6 text-white md:p-8">
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-slate-400">
              Klasifikasi
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              {classification}
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-300">
              {classificationDetail}
            </p>

            <div className="mt-6">
              {!dengueWorkingDiagnosis ? (
                <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-4">
                  <p className="text-sm leading-6 text-slate-300">
                    Diagnosis kerja DBD belum terpenuhi berdasarkan
                    data yang dimasukkan. Pastikan demam,
                    manifestasi perdarahan, dan kriteria laboratorium
                    telah dinilai.
                  </p>
                </div>
              ) : (
                <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-4">
                  <p className="text-xs text-slate-400">
                    Diagnosis kerja
                  </p>

                  <p className="mt-1 font-semibold text-white">
                    DBD
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ========================= */}
      {/* GUIDELINE */}
      {/* ========================= */}

      {dengueWorkingDiagnosis && (
        <section className="mt-6 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <SectionHeader
            number="06"
            title="Guideline Tatalaksana"
            description="Panduan tatalaksana berdasarkan kondisi klinis pasien."
          />

          <div className="p-5 md:p-6">
            {!compensatedShock && !profoundShock && (
              <>
                <div className="mb-5 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                    Kondisi
                  </p>

                  <p className="mt-1 text-lg font-semibold text-slate-900">
                    DBD tanpa syok
                  </p>
                </div>

                <GuidelineImage
                  src="/guidelines/dbd/dbd-tanpa-syok.png"
                  alt="Guideline tatalaksana DBD tanpa syok"
                />
              </>
            )}

            {(compensatedShock || profoundShock) && (
              <>
                <div className="mb-5 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                    Kondisi
                  </p>

                  <p className="mt-1 text-lg font-semibold text-slate-900">
                    DBD dengan syok
                  </p>

                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    Memerlukan penanganan segera sesuai kondisi
                    klinis dan monitoring ketat.
                  </p>
                </div>

                <GuidelineImage
                  src="/guidelines/dbd/dbd-dengan-syok.png"
                  alt="Guideline tatalaksana DBD dengan syok"
                />
              </>
            )}

            <div className="mt-8 border-t border-slate-100 pt-7">
              <h3 className="text-lg font-semibold text-slate-900">
                Komplikasi & Pemantauan
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Referensi tambahan untuk komplikasi dan monitoring pasien.
              </p>

              <div className="mt-6 space-y-7">
                <div>
                  <p className="mb-3 text-sm font-semibold text-slate-800">
                    Komplikasi perdarahan & kelebihan cairan
                  </p>

                  <GuidelineImage
                    src="/guidelines/dbd/komplikasi-dbd.png"
                    alt="Komplikasi DBD"
                  />
                </div>

                <div>
                  <p className="mb-3 text-sm font-semibold text-slate-800">
                    Pemantauan
                  </p>

                  <GuidelineImage
                    src="/guidelines/dbd/monitoring-dbd.png"
                    alt="Monitoring DBD"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </ClinicalToolLayout>
  );
}

/* =========================================================
   COMPONENTS
========================================================= */

function SectionHeader({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="border-b border-slate-100 px-5 py-5 md:px-7">
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-900 text-sm font-bold text-white">
          {number}
        </div>

        <div>
          <h2 className="font-semibold text-slate-900">
            {title}
          </h2>

          <p className="mt-0.5 text-xs text-slate-400">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

function ClinicalCheckbox({
  checked,
  onChange,
  label,
  description,
}: {
  checked: boolean;
  onChange: (value: boolean) => void;
  label: string;
  description?: string;
}) {
  return (
    <label
      className={`group flex cursor-pointer items-center justify-between gap-4 px-5 py-4 transition-colors md:px-7 ${
        checked
          ? "bg-slate-50"
          : "bg-white hover:bg-slate-50/70"
      }`}
    >
      <div className="min-w-0">
        <p
          className={`text-sm leading-6 ${
            checked
              ? "font-medium text-slate-950"
              : "text-slate-700"
          }`}
        >
          {label}
        </p>

        {description && (
          <p className="mt-0.5 text-xs text-slate-400">
            {description}
          </p>
        )}
      </div>

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

      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="sr-only"
      />
    </label>
  );
}

function GuidelineImage({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
      <img
        src={src}
        alt={alt}
        className="h-auto w-full"
      />
    </div>
  );
}