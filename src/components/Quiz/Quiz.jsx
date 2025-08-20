import { Link, useParams } from "react-router-dom";
import { quizzes } from "../../data";

export default function Quiz() {
  const { id } = useParams();
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

  return (
    <div style={{ maxWidth: 700, margin: "0 auto", padding: 16 }}>
      <h2>{quiz.title}</h2>
      <p>Fragen insgesamt: {questions.length}</p>
      <Link to="/">Zur Startseite</Link>
    </div>
  );
}
