import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { quizzes } from "../data";

export default function Homepage() {
  const [selectedQuiz, setSelectedQuiz] = useState("math");
  const navigate = useNavigate();

  return (
    <div>
      <h1>Willkommen zu meiner Quiz-App</h1>
      <p>Wähle ein Quiz aus:</p>

      {/* Dropdown: mit der Liste alle Quizzes */}
      <select
        value={selectedQuiz}
        onChange={(e) => setSelectedQuiz(e.target.value)}
      >
        {Object.entries(quizzes).map(([id, quiz]) => (
          <option key={id} value={id}>
            {quiz.title}
          </option>
        ))}
      </select>

      {/* Quiz wird erst nach Buttondruck gestartet */}
      <button onClick={() => navigate(`/quiz/${selectedQuiz}`)}>
        Starten
      </button>
    </div>
  );
}
