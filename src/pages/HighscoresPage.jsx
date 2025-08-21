import { quizzes, loadHighscores } from "../data";

const MODES = [
  { id: "score", name: "Highscore-Modus" },
  { id: "time",  name: "Zeitmodus" }
];

export default function HighscoresPage() {
  const quizEntries = Object.entries(quizzes);

  return (
    <div>
      <h2>Highscores</h2>

      {quizEntries.map(([qid, qmeta]) => (
        <section key={qid}>
          <h3>{qmeta.title}</h3>

          {MODES.map((m) => {
            const rows = loadHighscores(qid, m.id).slice(0, 10);
            return (
              <div key={`${qid}-${m.id}`}>
                <h4>{m.name}</h4>

                {rows.length === 0 ? (
                  <p>Noch keine Einträge.</p>
                ) : (
                  <table>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Score</th>
                        <th>Datum</th>
                      </tr>
                    </thead>
                    <tbody>
                      {rows.map((r, i) => (
                        <tr key={i}>
                          <td>{i + 1}</td>
                          <td>{r.name}</td>
                          <td>{r.score} / {r.total}</td>
                          <td>{new Date(r.date).toLocaleString()}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            );
          })}
        </section>
      ))}
    </div>
  );
}
