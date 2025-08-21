// src/pages/HighscoresPage.jsx
import { quizzes, loadHighscores } from "../data";

const MODES = [
  { id: "score", name: "Highscore-Modus" },
  { id: "time",  name: "Zeitmodus" }
];

export default function HighscoresPage() {
  const quizEntries = Object.entries(quizzes);

  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: 16 }}>
      <h2>Highscores</h2>

      {quizEntries.map(([qid, qmeta]) => (
        <section key={qid} style={{ marginBottom: 24 }}>
          <h3 style={{ marginBottom: 8 }}>{qmeta.title}</h3>

          {MODES.map((m) => {
            const rows = loadHighscores(qid, m.id).slice(0, 10);
            return (
              <div
                key={`${qid}-${m.id}`}
                style={{ border: "1px solid #ddd", borderRadius: 12, padding: 12, marginBottom: 12 }}
              >
                <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
                  <h4 style={{ margin: 0 }}>{m.name}</h4>
                  <small style={{ opacity: 0.7, marginLeft: 6 }}>{qid} / {m.id}</small>
                </div>

                {rows.length === 0 ? (
                  <p style={{ opacity: 0.8 }}>Noch keine Einträge.</p>
                ) : (
                  <table style={{ width: "100%", borderCollapse: "collapse", marginTop: 8 }}>
                    <thead>
                      <tr>
                        <th style={{ textAlign: "left", borderBottom: "1px solid #eee", padding: "6px 4px" }}>#</th>
                        <th style={{ textAlign: "left", borderBottom: "1px solid #eee", padding: "6px 4px" }}>Name</th>
                        <th style={{ textAlign: "right", borderBottom: "1px solid #eee", padding: "6px 4px" }}>Score</th>
                        <th style={{ textAlign: "right", borderBottom: "1px solid #eee", padding: "6px 4px" }}>Datum</th>
                      </tr>
                    </thead>
                    <tbody>
                      {rows.map((r, i) => (
                        <tr key={i}>
                          <td style={{ padding: "6px 4px" }}>{i + 1}</td>
                          <td style={{ padding: "6px 4px" }}>{r.name}</td>
                          <td style={{ padding: "6px 4px", textAlign: "right" }}>{r.score} / {r.total}</td>
                          <td style={{ padding: "6px 4px", textAlign: "right" }}>
                            {new Date(r.date).toLocaleString()}
                          </td>
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
