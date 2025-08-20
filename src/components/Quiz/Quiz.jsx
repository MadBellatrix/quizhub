import { Link, useParams } from "react-router-dom";

export default function Quiz() {
  const { id } = useParams();

  return (
    <div style={{ maxWidth: 700, margin: "0 auto", padding: 16 }}>
      <h2>Quiz: {id}</h2>
      <p>Hier entsteht die Quiz-Seite.</p>
      <Link to="/">Zur Startseite</Link>
    </div>
  );
}
