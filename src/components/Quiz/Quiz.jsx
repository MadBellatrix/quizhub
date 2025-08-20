import { Link, useParams } from "react-router-dom";
import { quizzes } from "../../data";

export default function Quiz() {
  const { id, q } = useParams();
  const quiz = quizzes[id];

  if (!quiz) return <h2 style={{ maxWidth: 700, margin: "0 auto", padding: 16 }}>Quiz nicht gefunden: {id}</h2>;

  const questions = quiz.questions || [];
  if (!questions.length) {
    return (
      <div style={{ maxWidth: 700, margin: "0 auto", padding: 16 }}>
        <h2>{quiz.title}</h2>
        <p>Keine Fragen vorhanden.</p>
        <Link to="/">Zur Startseite</Link>
      </div>
    );
  }

  const index = clamp(parseInt(q ?? "0", 10), 0, questions.length - 1);
  const current = questions[index];

  return (
    <div style={{ maxWidth: 700, margin: "0 auto", padding: 16 }}>
      <h2>{quiz.title}</h2>
      <p>Frage {index + 1} / {questions.length}</p>
      <p style={{ fontSize: 18 }}>{current.question}</p>
      <Link to="/">Zur Startseite</Link>
    </div>
  );
}

function clamp(n, min, max) {
  if (Number.isNaN(n)) return min;
  return Math.max(min, Math.min(max, n));
}
