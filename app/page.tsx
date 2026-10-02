import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-900">
      <div className="mx-auto max-w-6xl px-6 py-10 md:px-8 md:py-14">

        {/* ========================= */}
        {/* HEADER */}
        {/* ========================= */}

        <header className="mb-12">
          <h1 className="text-4xl font-semibold tracking-[-0.03em] text-slate-950 md:text-6xl">
            Clinical Scoring
            <span className="text-slate-400"> & </span>
            Guideline
          </h1>
        </header>


        {/* ========================= */}
        {/* SCORING */}
        {/* ========================= */}

        <section className="mb-16">

          <h2 className="mb-6 text-2xl font-semibold tracking-tight text-slate-900">
            Scoring
          </h2>

          <div className="grid gap-5 md:grid-cols-2">

            {/* ALVARADO */}

            <Link
              href="/scoring/alvarado"
              className="group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-7 shadow-[0_4px_24px_rgba(15,23,42,0.04)] transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_16px_40px_rgba(15,23,42,0.08)]"
            >

              <div className="flex items-start justify-between">

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-xl transition group-hover:bg-slate-900 group-hover:text-white">
                  📊
                </div>

                <span className="rounded-full bg-slate-50 px-3 py-1 text-[11px] font-medium text-slate-400">
                  SCORING
                </span>

              </div>

              <h3 className="mt-7 text-lg font-semibold text-slate-900">
                Alvarado Score
              </h3>

              <div className="mt-7 flex items-center gap-2 text-sm font-medium text-slate-700 transition group-hover:text-slate-950">
                Open scoring
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </div>

            </Link>


            {/* SIRIRAJ */}

            <Link
              href="/scoring/siriraj"
              className="group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-7 shadow-[0_4px_24px_rgba(15,23,42,0.04)] transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_16px_40px_rgba(15,23,42,0.08)]"
            >

              <div className="flex items-start justify-between">

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-xl transition group-hover:bg-slate-900 group-hover:text-white">
                  🧠
                </div>

                <span className="rounded-full bg-slate-50 px-3 py-1 text-[11px] font-medium text-slate-400">
                  SCORING
                </span>

              </div>

              <h3 className="mt-7 text-lg font-semibold text-slate-900">
                Siriraj Stroke Score
              </h3>

              <div className="mt-7 flex items-center gap-2 text-sm font-medium text-slate-700 transition group-hover:text-slate-950">
                Open scoring
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </div>

            </Link>

          </div>

        </section>


        {/* ========================= */}
        {/* GUIDELINE */}
        {/* ========================= */}

        <section>

          <h2 className="mb-6 text-2xl font-semibold tracking-tight text-slate-900">
            Guideline
          </h2>


          <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3">


            {/* DEHIDRASI */}

            <GuidelineCard
              href="/guideline/dehidrasi-anak"
              icon="💧"
              title="Dehidrasi Anak"
              description="Penilaian derajat dehidrasi berdasarkan temuan klinis."
            />


            {/* DBD */}

            <GuidelineCard
              href="/guideline/demam-berdarah-anak"
              icon="🦟"
              title="Demam Berdarah Anak"
              description="Penilaian derajat dan guideline tatalaksana demam berdarah pada anak."
            />


            {/* TIFOID */}

            <GuidelineCard
              href="/guideline/tifoid-anak"
              icon="🦠"
              title="Tifoid Anak"
              description="Clinical assessment dan guideline tatalaksana tifoid pada anak."
            />


            {/* KEJANG DEMAM */}

            <ComingSoonCard
              icon="⚡"
              title="Kejang Demam Anak"
              description="Penilaian klinis dan guideline tatalaksana kejang demam pada anak."
            />


            {/* DIABETES */}

            <ComingSoonCard
              icon="🩸"
              title="Diabetes Mellitus"
              description="Clinical assessment dan guideline diabetes mellitus."
            />


            {/* HIPERTENSI */}

            <ComingSoonCard
              icon="❤️"
              title="Hipertensi"
              description="Klasifikasi tekanan darah dan guideline tatalaksana."
            />

          </div>

        </section>


        {/* ========================= */}
        {/* FOOTER */}
        {/* ========================= */}

        <footer className="mt-20 border-t border-slate-200 pt-7 text-center">

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


/* ================================================= */
/* GUIDELINE CARD */
/* ================================================= */

function GuidelineCard({
  href,
  icon,
  title,
  description,
}: {
  href: string;
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <Link
      href={href}
      className="group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-6 shadow-[0_4px_24px_rgba(15,23,42,0.035)] transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_16px_40px_rgba(15,23,42,0.08)]"
    >

      <div className="flex items-start justify-between">

        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-100 text-lg transition duration-300 group-hover:bg-slate-900 group-hover:text-white">
          {icon}
        </div>

        <span className="rounded-full bg-slate-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-slate-400">
          GUIDELINE
        </span>

      </div>


      <h3 className="mt-6 text-base font-semibold text-slate-900">
        {title}
      </h3>

      <p className="mt-2 min-h-[48px] text-sm leading-6 text-slate-500">
        {description}
      </p>


      <div className="mt-6 flex items-center gap-2 text-sm font-medium text-slate-700 transition group-hover:text-slate-950">

        Open guideline

        <span className="transition-transform group-hover:translate-x-1">
          →
        </span>

      </div>

    </Link>
  );
}


/* ================================================= */
/* COMING SOON CARD */
/* ================================================= */

function ComingSoonCard({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-3xl border border-dashed border-slate-200 bg-white/70 p-6">

      <div className="flex items-start justify-between">

        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-50 text-lg grayscale">
          {icon}
        </div>

        <span className="rounded-full bg-slate-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-slate-400">
          SOON
        </span>

      </div>


      <h3 className="mt-6 text-base font-semibold text-slate-700">
        {title}
      </h3>

      <p className="mt-2 min-h-[48px] text-sm leading-6 text-slate-400">
        {description}
      </p>

      <p className="mt-6 text-sm font-medium text-slate-400">
        Coming soon
      </p>

    </div>
  );
}