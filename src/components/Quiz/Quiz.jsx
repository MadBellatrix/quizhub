import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { quizzes } from "../../data";

export default function Quiz() {
  const { id, mode, q } = useParams();
  const navigate = useNavigate();
  const quiz = quizzes[id];

  if (!quiz) return <h2>Quiz nicht gefunden: {id}</h2>;
  const questions = quiz.questions || [];
  if (!questions.length) return <h2>Keine Fragen für: {quiz.title}</h2>;

  const index = clamp(parseInt(q ?? "0", 10), 0, questions.length - 1);
  const current = questions[index];

  const [inputValue, setInputValue] = useState("");
  const [selected, setSelected] = useState(null);
  const [timer, setTimer] = useState(10);
  const [score, setScore] = useState(0);

  useEffect(() => {
    setInputValue("");
    setSelected(null);

    if (q === undefined) navigate(`/quiz/${id}/${mode}/0`, { replace: true });

    if (mode === "time") {
      setTimer(10);
      const interval = setInterval(() => {
        setTimer((t) => {
          if (t <= 1) {
            clearInterval(interval);
            next();
            return 10;
          }
          return t - 1;
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [id, q, mode, navigate]);

  function isAnswerCorrect(question, { selected, inputValue }) {
    if (question.type === "input") {
      return String(inputValue ?? "").trim().toLowerCase() === String(question.answer ?? "").trim().toLowerCase();
    }
    const correctId = (question.answers || []).find(a => a.correct)?.id;
    return selected === correctId;
  }

  const next = () => {
    const correctNow = isAnswerCorrect(current, { selected, inputValue });
    if (mode === "score" && correctNow) setScore(s => s + 1);

    const nextIndex = index + 1;
    if (nextIndex < questions.length) {
      navigate(`/quiz/${id}/${mode}/${nextIndex}`);
    } else {
      navigate("/", { replace: true });
    }
  };

  return (
    <div style={{ maxWidth: 700, margin: "0 auto", padding: 16 }}>
      <h2>{quiz.title} ({mode})</h2>
      <p>Frage {index + 1} / {questions.length}</p>
      {mode === "time" && <p>Verbleibende Zeit: {timer} Sekunden</p>}
      {mode === "score" && <p>Aktueller Score: {score}</p>}

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