// src/pages/HighscoresPage.jsx
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
            const rows = loadHighscores(qid, m.id);
            return (
              <div key={`${qid}-${m.id}`}>
                <h4>{m.name}</h4>
                {rows.length === 0 ? (
                  <p>Noch keine Einträge.</p>
                ) : (
                  <ul>
                    {rows.map((r, i) => (
                      <li key={i}>
                        {i + 1}. {r.name} – {r.score} / {r.total} – {new Date(r.date).toLocaleString()}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </section>
      ))}
    </div>
  );
}
