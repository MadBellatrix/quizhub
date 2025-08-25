import { quizzes, loadHighscores } from "../data";

const MODES = [
  { id: "score", name: "Highscore-Modus" },
  { id: "time",  name: "Zeitmodus" }
];

export default function HighscoresPage() {
  const quizEntries = Object.entries(quizzes);

  return (
     <div className="max-w-4xl mx-auto px-6 py-10 pb-24">
      <h2 className="text-3xl font-bold text-amber-900 mb-8 text-center tracking-wide">Highscores</h2>

      {quizEntries.map(([qid, qmeta]) => (
        <section key={qid} className="mb-10">
          <h3 className="text-xl font-semibold text-amber-800 mb-3">{qmeta.title}</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {MODES.map((m) => {
              const rows = loadHighscores(qid, m.id).slice(0, 10);
              return (
                <div
                  key={`${qid}-${m.id}`}
                  className="border border-amber-200 rounded-xl bg-amber-50 shadow p-4"
                >
                  <div className="flex items-baseline gap-3 mb-2">
                    <h4 className="text-lg font-medium text-lime-700 m-0">{m.name}</h4>
                    <small className="opacity-70 ml-2 text-xs">{qid} / {m.id}</small>
                  </div>

                  {rows.length === 0 ? (
                    <p className="opacity-80 text-amber-900">Noch keine Einträge.</p>
                  ) : (
                    <div className="overflow-x-auto">
                      <table className="w-full border-separate border-spacing-y-1 mt-2">
                        <thead>
                          <tr className="bg-amber-200 text-amber-900">
                            <th className="text-left px-2 py-1 rounded-l-lg text-sm">#</th>
                            <th className="text-left px-2 py-1 text-sm">Name</th>
                            <th className="text-right px-2 py-1 text-sm">Score</th>
                            <th className="text-right px-2 py-1 rounded-r-lg text-sm">Datum</th>
                          </tr>
                        </thead>
                        <tbody>
                          {rows.map((r, i) => (
                            <tr key={i} className="even:bg-amber-100">
                              <td className="px-2 py-1 text-sm">{i + 1}</td>
                              <td className="px-2 py-1 text-sm">{r.name}</td>
                              <td className="px-2 py-1 text-right text-sm">{r.score} / {r.total}</td>
                              <td className="px-2 py-1 text-right text-sm">{new Date(r.date).toLocaleDateString()}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
}
