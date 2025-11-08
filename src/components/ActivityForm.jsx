import { useState } from 'react';
import { Save } from 'lucide-react';

export default function ActivityForm({ onAdd }) {
  const [form, setForm] = useState({ type: 'Run', distance: '', duration: '', notes: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.distance || !form.duration) return;
    const parsed = {
      ...form,
      distance: parseFloat(form.distance),
      duration: parseFloat(form.duration),
      date: new Date().toISOString(),
    };
    onAdd(parsed);
    setForm({ type: form.type, distance: '', duration: '', notes: '' });
  };

  return (
    <section id="log" className="w-full">
      <form onSubmit={handleSubmit} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
        <div className="grid gap-4 sm:grid-cols-4">
          <div className="sm:col-span-1">
            <label className="block text-sm font-medium text-gray-700">Type</label>
            <select
              name="type"
              value={form.type}
              onChange={handleChange}
              className="mt-1 w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500"
            >
              <option>Run</option>
              <option>Ride</option>
              <option>Swim</option>
              <option>Gym</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Distance (km)</label>
            <input
              type="number"
              step="0.01"
              name="distance"
              value={form.distance}
              onChange={handleChange}
              className="mt-1 w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              placeholder="5"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Duration (min)</label>
            <input
              type="number"
              step="1"
              name="duration"
              value={form.duration}
              onChange={handleChange}
              className="mt-1 w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              placeholder="30"
            />
          </div>

          <div className="sm:col-span-1">
            <label className="block text-sm font-medium text-gray-700">Notes</label>
            <input
              type="text"
              name="notes"
              value={form.notes}
              onChange={handleChange}
              className="mt-1 w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring-blue-500"
              placeholder="Felt strong"
            />
          </div>
        </div>

        <div className="mt-4 flex justify-end">
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-white shadow hover:bg-blue-700"
          >
            <Save className="h-4 w-4" />
            Save Activity
          </button>
        </div>
      </form>
    </section>
  );
}
