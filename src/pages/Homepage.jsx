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
    <section className="flex flex-col items-center justify-center min-h-[60vh]">
      <div className="bg-amber-50 border border-amber-200 rounded-2xl shadow-lg px-12 py-10 flex flex-col items-center gap-8 w-[420px]">
        <h1 className="text-3xl font-bold text-amber-900 mb-2 tracking-wide">Willkommen zu meiner Quiz-App</h1>
        <div className="w-full flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label htmlFor="quiz-select" className="text-amber-900 font-medium">Wähle ein Quiz aus:</label>
            <select
              id="quiz-select"
              value={selectedQuiz}
              onChange={(e) => setSelectedQuiz(e.target.value)}
              className="rounded-lg border border-amber-300 bg-amber-100 px-4 py-2 text-amber-900 focus:outline-none focus:ring-2 focus:ring-amber-400"
            >
              {Object.entries(quizzes).map(([id, quiz]) => (
                <option key={id} value={id}>
                  {quiz.title}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="mode-select" className="text-amber-900 font-medium">Wähle einen Modus:</label>
            <select
              id="mode-select"
              value={selectedMode}
              onChange={(e) => setSelectedMode(e.target.value)}
              className="rounded-lg border border-amber-300 bg-amber-100 px-4 py-2 text-amber-900 focus:outline-none focus:ring-2 focus:ring-amber-400"
            >
              <option value="">-- Bitte wählen --</option>
              {modes.map((m) => (
                <option key={m.id} value={m.id}>
                  {m.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <button
          className="mt-4 bg-amber-600 text-white px-8 py-2 rounded-lg font-semibold shadow hover:bg-lime-700 transition-colors duration-200 text-lg"
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
