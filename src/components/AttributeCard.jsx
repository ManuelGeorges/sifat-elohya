import "./AttributeCard.css";

function AttributeCard({ icon, title, explanation, references, source }) {
  return (
    <div className="card">
      <h2>{icon} {title}</h2>
      <p className="explanation">{explanation}</p>
      <ul className="refs">
        {references.map((verse, i) => (
          <li key={i}>📖 {verse}</li>
        ))}
      </ul>
      <p className="source">✍️ <strong>المصدر:</strong> {source}</p>
    </div>
  );
}

export default AttributeCard;
