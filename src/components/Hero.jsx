import Spline from '@splinetool/react-spline';
import { Rocket, Activity } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full h-[70vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4Tf9WOIaWs6LOezG/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient overlay for readability (won't block Spline interactions) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-white/0" />

      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="max-w-2xl text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)]">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm backdrop-blur">
              <Activity className="h-4 w-4" />
              Track your sport. Own your progress.
            </div>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
              High‑energy sport tracker for your daily grind
            </h1>
            <p className="mt-4 text-white/90 text-lg">
              Log runs, rides, and workouts. Visualize effort, celebrate streaks, and keep momentum.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="#log"
                className="inline-flex items-center gap-2 rounded-md bg-white px-5 py-2.5 text-sm font-semibold text-gray-900 shadow hover:shadow-md transition"
              >
                <Rocket className="h-4 w-4" />
                Log an activity
              </a>
              <a
                href="#list"
                className="inline-flex items-center gap-2 rounded-md bg-black/50 px-5 py-2.5 text-sm font-semibold text-white ring-1 ring-white/30 backdrop-blur hover:bg-black/60 transition"
              >
                See recent
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
