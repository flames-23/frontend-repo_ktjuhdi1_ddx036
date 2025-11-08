import { MapPin, Clock3 } from 'lucide-react';

function formatDate(ts) {
  try {
    return new Date(ts).toLocaleString(undefined, {
      year: 'numeric', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit'
    });
  } catch {
    return String(ts);
  }
}

export default function ActivityList({ activities }) {
  return (
    <section id="list" className="w-full">
      <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">Recent Activities</h3>
          <p className="text-sm text-gray-500">{activities.length} total</p>
        </div>
        {activities.length === 0 ? (
          <p className="text-gray-500">No activities yet. Log your first one!</p>
        ) : (
          <ul className="divide-y divide-gray-100">
            {activities.map((a, idx) => (
              <li key={idx} className="py-3 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-700 font-semibold">
                    {a.type[0]}
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{a.type}</p>
                    <p className="text-sm text-gray-500 flex items-center gap-3">
                      <span className="inline-flex items-center gap-1"><MapPin className="h-3 w-3" /> {a.distance.toFixed(2)} km</span>
                      <span className="inline-flex items-center gap-1"><Clock3 className="h-3 w-3" /> {a.duration.toFixed(0)} min</span>
                    </p>
                  </div>
                </div>
                <div className="text-sm text-gray-500">
                  {formatDate(a.date)}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
