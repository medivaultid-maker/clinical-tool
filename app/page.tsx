import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8fafc] text-slate-900">
      <div className="mx-auto max-w-6xl px-4 py-8 md:px-8 md:py-14">

        {/* ========================= */}
        {/* HEADER */}
        {/* ========================= */}

        <header className="mb-10 md:mb-12">
          <h1 className="text-3xl font-semibold tracking-[-0.03em] text-slate-950 md:text-6xl">
            Clinical Scoring
            <span className="text-slate-400"> & </span>
            Guideline
          </h1>
        </header>


        {/* ========================= */}
        {/* SCORING */}
        {/* ========================= */}

        <section className="mb-12">

          <h2 className="mb-5 text-xl font-semibold tracking-tight text-slate-900 md:text-2xl">
            Scoring
          </h2>

          <div className="grid grid-cols-2 gap-3 md:gap-5">

            {/* ALVARADO */}

            <Link
              href="/scoring/alvarado"
              className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-4 shadow-[0_4px_20px_rgba(15,23,42,0.035)] transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_16px_40px_rgba(15,23,42,0.08)] md:rounded-3xl md:p-7"
            >

              <div className="flex items-start justify-between gap-2">

                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-100 text-sm transition group-hover:bg-slate-900 group-hover:text-white md:h-12 md:w-12 md:rounded-2xl md:text-xl">
                  📊
                </div>

                <span className="rounded-full bg-slate-50 px-2 py-1 text-[8px] font-medium text-slate-400 md:px-3 md:text-[11px]">
                  SCORING
                </span>

              </div>

              <h3 className="mt-4 text-sm font-semibold leading-5 text-slate-900 md:mt-7 md:text-lg">
                Alvarado Score
              </h3>

            </Link>


            {/* SIRIRAJ */}

            <Link
              href="/scoring/siriraj"
              className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-4 shadow-[0_4px_20px_rgba(15,23,42,0.035)] transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_16px_40px_rgba(15,23,42,0.08)] md:rounded-3xl md:p-7"
            >

              <div className="flex items-start justify-between gap-2">

                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-100 text-sm transition group-hover:bg-slate-900 group-hover:text-white md:h-12 md:w-12 md:rounded-2xl md:text-xl">
                  🧠
                </div>

                <span className="rounded-full bg-slate-50 px-2 py-1 text-[8px] font-medium text-slate-400 md:px-3 md:text-[11px]">
                  SCORING
                </span>

              </div>

              <h3 className="mt-4 text-sm font-semibold leading-5 text-slate-900 md:mt-7 md:text-lg">
                Siriraj Stroke Score
              </h3>

            </Link>

          </div>

        </section>


        {/* ========================= */}
        {/* GUIDELINE */}
        {/* ========================= */}

        <section>

          <h2 className="mb-5 text-xl font-semibold tracking-tight text-slate-900 md:text-2xl">
            Guideline
          </h2>


          <div className="grid grid-cols-2 gap-3 md:gap-5 lg:grid-cols-3">


            {/* DEHIDRASI */}

            <GuidelineCard
              href="/guideline/dehidrasi-anak"
              icon="💧"
              title="Dehidrasi Anak"
            />


            {/* DBD */}

            <GuidelineCard
              href="/guideline/demam-berdarah-anak"
              icon="🦟"
              title="Demam Berdarah Anak"
            />


            {/* TIFOID */}

            <GuidelineCard
              href="/guideline/tifoid-anak"
              icon="🦠"
              title="Tifoid Anak"
            />


            {/* KEJANG DEMAM */}

            <ComingSoonCard
              icon="⚡"
              title="Kejang Demam Anak"
            />


            {/* DIABETES */}

            <ComingSoonCard
              icon="🩸"
              title="Diabetes Mellitus"
            />


            {/* HIPERTENSI */}

            <ComingSoonCard
              icon="❤️"
              title="Hipertensi"
            />

          </div>

        </section>


        {/* ========================= */}
        {/* FOOTER */}
        {/* ========================= */}

        <footer className="mt-14 border-t border-slate-200 pt-6 text-center md:mt-20 md:pt-7">

          <p className="text-xs text-slate-400 md:text-sm">
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
}: {
  href: string;
  icon: string;
  title: string;
}) {
  return (
    <Link
      href={href}
      className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-4 shadow-[0_4px_20px_rgba(15,23,42,0.035)] transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_16px_40px_rgba(15,23,42,0.08)] md:rounded-3xl md:p-6"
    >

      <div className="flex items-start justify-between gap-2">

        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-100 text-base transition duration-300 group-hover:bg-slate-900 group-hover:text-white md:h-11 md:w-11 md:rounded-2xl md:text-lg">
          {icon}
        </div>

        <span className="rounded-full bg-slate-50 px-2 py-1 text-[8px] font-semibold uppercase tracking-wider text-slate-400 md:px-3 md:text-[10px]">
          GUIDELINE
        </span>

      </div>


      <h3 className="mt-4 text-sm font-semibold leading-5 text-slate-900 md:mt-6 md:text-base">
        {title}
      </h3>

    </Link>
  );
}


/* ================================================= */
/* COMING SOON CARD */
/* ================================================= */

function ComingSoonCard({
  icon,
  title,
}: {
  icon: string;
  title: string;
}) {
  return (
    <div className="rounded-2xl border border-dashed border-slate-200 bg-white/70 p-4 md:rounded-3xl md:p-6">

      <div className="flex items-start justify-between gap-2">

        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-50 text-base grayscale md:h-11 md:w-11 md:rounded-2xl md:text-lg">
          {icon}
        </div>

        <span className="rounded-full bg-slate-50 px-2 py-1 text-[8px] font-semibold uppercase tracking-wider text-slate-400 md:px-3 md:text-[10px]">
          SOON
        </span>

      </div>


      <h3 className="mt-4 text-sm font-semibold leading-5 text-slate-700 md:mt-6 md:text-base">
        {title}
      </h3>

    </div>
  );
}