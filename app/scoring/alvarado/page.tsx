"use client";

import { useState } from "react";
import ClinicalToolLayout from "../../components/clinical/ClinicalToolLayout";
import ClinicalSection from "../../components/clinical/ClinicalSection";
import AssessmentCard from "../../components/clinical/AssessmentCard";
import ResultCard from "../../components/clinical/ResultCard";

export default function AlvaradoPage() {
  const [migration, setMigration] = useState(false);
  const [anorexia, setAnorexia] = useState(false);
  const [nausea, setNausea] = useState(false);
  const [tenderness, setTenderness] = useState(false);
  const [rebound, setRebound] = useState(false);
  const [fever, setFever] = useState(false);
  const [leukocytosis, setLeukocytosis] = useState(false);
  const [neutrophilia, setNeutrophilia] = useState(false);

  const resetScore = () => {
    setMigration(false);
    setAnorexia(false);
    setNausea(false);
    setTenderness(false);
    setRebound(false);
    setFever(false);
    setLeukocytosis(false);
    setNeutrophilia(false);
  };

  const score =
    (migration ? 1 : 0) +
    (anorexia ? 1 : 0) +
    (nausea ? 1 : 0) +
    (tenderness ? 2 : 0) +
    (rebound ? 1 : 0) +
    (fever ? 1 : 0) +
    (leukocytosis ? 2 : 0) +
    (neutrophilia ? 1 : 0);

  let interpretation = "—";
  let interpretationDetail =
    "Pilih parameter klinis di atas untuk melihat interpretasi.";

  if (score >= 1 && score <= 4) {
    interpretation = "1–4";
    interpretationDetail =
      "Pasien tidak dianggap kemungkinan besar mengalami apendisitis akut.";
  } else if (score <= 6) {
    interpretation = "5–6";
    interpretationDetail =
      "Diagnosis mengarah ke apendisitis, tetapi belum tampak memerlukan tindakan operasi segera. Lakukan observasi atau pemeriksaan lanjutan.";
  } else if (score <= 8) {
    interpretation = "7–8";
    interpretationDetail =
      "Kemungkinan apendisitis cukup besar. Konsultasi dengan dokter bedah diperlukan.";
  } else if (score >= 9) {
    interpretation = "9–10";
    interpretationDetail =
      "Kemungkinan apendisitis sangat besar dan tindakan operasi perlu dipertimbangkan.";
  }

  return (
    <ClinicalToolLayout
      title="Alvarado Score"
      subtitle="Clinical scoring system untuk membantu penilaian kemungkinan apendisitis akut."
      onReset={resetScore}
    >
      {/* ASSESSMENT */}

      <ClinicalSection
        number="01"
        title="Parameter Klinis"
        description="Pilih temuan klinis yang ditemukan pada pasien."
        count={`${score}/10`}
      >
        <div className="divide-y divide-slate-100">
          <AssessmentCard
            label="Migrasi nyeri ke kuadran kanan bawah"
            checked={migration}
            onChange={setMigration}
            badge="+1"
          />

          <AssessmentCard
            label="Anoreksia"
            checked={anorexia}
            onChange={setAnorexia}
            badge="+1"
          />

          <AssessmentCard
            label="Mual / muntah"
            checked={nausea}
            onChange={setNausea}
            badge="+1"
          />

          <AssessmentCard
            label="Nyeri tekan pada kuadran kanan bawah"
            checked={tenderness}
            onChange={setTenderness}
            badge="+2"
          />

          <AssessmentCard
            label="Nyeri lepas"
            checked={rebound}
            onChange={setRebound}
            badge="+1"
          />

          <AssessmentCard
            label="Peningkatan suhu tubuh (≥ 37,3°C)"
            checked={fever}
            onChange={setFever}
            badge="+1"
          />

          <AssessmentCard
            label="Leukositosis (WBC > 10.000/µL)"
            checked={leukocytosis}
            onChange={setLeukocytosis}
            badge="+2"
          />

          <AssessmentCard
            label="Pergeseran hitung jenis leukosit ke kiri (≥ 75% neutrofil)"
            checked={neutrophilia}
            onChange={setNeutrophilia}
            badge="+1"
          />
        </div>
      </ClinicalSection>

      {/* RESULT */}

      <ResultCard
        label="Alvarado Score"
        title={`${score} / 10`}
        description={
          score === 0
            ? "Belum ada parameter klinis yang dipilih."
            : "Skor berdasarkan parameter klinis yang dipilih."
        }
      />

      {/* INTERPRETATION */}

      <ClinicalSection
        number="02"
        title="Interpretasi"
        description="Interpretasi berdasarkan skor Alvarado."
        count={interpretation}
      >
        <div className="rounded-2xl bg-slate-50 p-5">
          <p className="text-sm leading-6 text-slate-600">
            {interpretationDetail}
          </p>
        </div>
      </ClinicalSection>

    </ClinicalToolLayout>
  );
}