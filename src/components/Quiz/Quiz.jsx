import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { quizzes } from "../../data";

export default function Quiz() {
  const { id, q } = useParams();        
  const navigate = useNavigate();
  const quiz = quizzes[id];

  if (!quiz) return <h2>Quiz nicht gefunden: {id}</h2>;
  const questions = quiz.questions || [];
  if (!questions.length) return <h2>Keine Fragen für: {quiz.title}</h2>;

  const index = clamp(parseInt(q ?? "0", 10), 0, questions.length - 1);
  const current = questions[index];

  const [inputValue, setInputValue] = useState("");
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    setInputValue("");
    setSelected(null);
    if (q === undefined) navigate(`/quiz/${id}/0`, { replace: true });
  }, [id, q, navigate]);

  const next = () => {
    const nextIndex = index + 1;
    if (nextIndex < questions.length) {
      navigate(`/quiz/${id}/${nextIndex}`);
    } else {
      navigate("/", { replace: true });
    }
  };

  return (
    <div style={{ maxWidth: 700, margin: "0 auto", padding: 16 }}>
      <h2>{quiz.title}</h2>
      <p>Frage {index + 1} / {questions.length}</p>

      <p style={{ fontSize: 18 }}>{current.question}</p>

      {current.type === "input" ? (
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Antwort eingeben"
        />
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {(current.answers || []).map(a => (
            <li key={a.id} style={{ marginBottom: 8 }}>
              <label style={{ cursor: "pointer" }}>
                <input
                  type="radio"
                  name={`q-${current.id}`}
                  checked={selected === a.id}
                  onChange={() => setSelected(a.id)}
                  style={{ marginRight: 8 }}
                />
                {a.text}
              </label>
            </li>
          ))}
        </ul>
      )}

      <div style={{ marginTop: 12, display: "flex", gap: 8 }}>
        <button onClick={next}>Weiter</button>
        <Link to="/">Zur Startseite</Link>
      </div>
    </div>
  );
}

function clamp(n, min, max) {
  if (Number.isNaN(n)) return min;
  return Math.max(min, Math.min(max, n));
}
