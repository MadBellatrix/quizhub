import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { quizzes } from "../data";

export default function Homepage() {
  const [selectedQuiz, setSelectedQuiz] = useState("math");
  const [selectedMode, setSelectedMode] = useState("");
  const navigate = useNavigate();

  
  const modes = [
    { id: "time", name: "Zeitmodus" },
    { id: "practice", name: "Übungsmodus" },
    { id: "score", name: "Highscore-Modus" }
  ];

  return (
    <section className="flex flex-col items-center justify-center p-5">
      <h1>Willkommen zu meiner Quiz-App</h1>
      <p>Wähle ein Quiz aus:</p>

      <div>
        {/* Dropdown: alle Quizzes */}
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
      </div>

      <div>
        <p>Wähle einen Modus:</p>
        {/* Dropdown: Modi */}
        <select
          value={selectedMode}
          onChange={(e) => setSelectedMode(e.target.value)}
        >
          <option value="">-- Bitte wählen --</option>
          {modes.map((m) => (
            <option key={m.id} value={m.id}>
              {m.name}
            </option>
          ))}
        </select>
      </div>

      {/* Quiz wird erst nach Buttondruck gestartet */}
      <div>
        <button
          onClick={() => {
            if (!selectedMode) {
              alert("Bitte zuerst einen Modus auswählen!");
              return;
            }
            navigate(`/quiz/${selectedQuiz}/${selectedMode}/0`);
          }}
        >
          Starten
        </button>
      </div>
    </section>
  );
}
