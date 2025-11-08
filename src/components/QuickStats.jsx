import { Activity, Flame, Timer, MoveRight } from 'lucide-react';

export default function QuickStats({ totals }) {
  const { count, distance, duration, calories } = totals;
  const stats = [
    { label: 'Activities', value: count, icon: Activity, accent: 'from-blue-500 to-cyan-500' },
    { label: 'Distance (km)', value: distance.toFixed(1), icon: MoveRight, accent: 'from-violet-500 to-fuchsia-500' },
    { label: 'Duration (min)', value: duration.toFixed(0), icon: Timer, accent: 'from-emerald-500 to-teal-500' },
    { label: 'Calories', value: calories.toFixed(0), icon: Flame, accent: 'from-amber-500 to-orange-500' },
  ];

  return (
    <section className="w-full">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <div
            key={s.label}
            className="relative overflow-hidden rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
          >
            <div className={`absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${s.accent} opacity-20`} />
            <div className="relative flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">{s.label}</p>
                <p className="mt-1 text-2xl font-bold text-gray-900">{s.value}</p>
              </div>
              <s.icon className="h-6 w-6 text-gray-700" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
