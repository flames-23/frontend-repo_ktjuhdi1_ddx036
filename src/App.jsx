import { useMemo, useState } from 'react';
import Hero from './components/Hero';
import QuickStats from './components/QuickStats';
import ActivityForm from './components/ActivityForm';
import ActivityList from './components/ActivityList';

function App() {
  const [activities, setActivities] = useState([]);

  const totals = useMemo(() => {
    const count = activities.length;
    const distance = activities.reduce((s, a) => s + (a.distance || 0), 0);
    const duration = activities.reduce((s, a) => s + (a.duration || 0), 0);
    // rough calories: 60 kcal per km as a simple estimate
    const calories = activities.reduce((s, a) => s + (a.distance || 0) * 60, 0);
    return { count, distance, duration, calories };
  }, [activities]);

  const addActivity = (a) => setActivities((prev) => [a, ...prev]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-900">
      <Hero />

      <main className="mx-auto w-full max-w-6xl px-6 py-10 space-y-8">
        <QuickStats totals={totals} />
        <ActivityForm onAdd={addActivity} />
        <ActivityList activities={activities} />
      </main>

      <footer className="py-10">
        <div className="mx-auto max-w-6xl px-6 text-center text-sm text-gray-500">
          Built for athletes who love momentum.
        </div>
      </footer>
    </div>
  );
}

export default App;
