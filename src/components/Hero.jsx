import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden">
      {/* 3D background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient overlay should not block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/20 to-white/80 dark:from-black/60 dark:via-black/40 dark:to-black/80" />

      <div className="relative">
        <div className="mx-auto flex min-h-[92vh] max-w-7xl items-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/60 px-3 py-1 text-xs font-medium text-slate-700 backdrop-blur dark:border-white/10 dark:bg-white/10 dark:text-white">
              Futuristic Portfolio
            </span>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-6xl">
              Design. Data. Interactions.
            </h1>
            <p className="mt-4 text-base text-slate-700 dark:text-white/80 sm:text-lg">
              I craft immersive experiences at the intersection of UX/UI, analytics, and motion.
              Explore case studies, articles, and prototypes that blend clarity with cutting-edge aesthetics.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-md bg-slate-900 px-6 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-slate-800 dark:bg-white dark:text-black dark:hover:bg-white/90"
              >
                View Projects
              </a>
              <a
                href="#resume"
                className="inline-flex items-center justify-center rounded-md border border-black/10 bg-white/70 px-6 py-3 text-sm font-medium text-slate-900 backdrop-blur transition hover:bg-white/90 dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
