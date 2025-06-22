import { useState } from "react";
import attributes from "./data/attributes.json";
import AttributeCard from "./components/AttributeCard";
import AnimatedBackground from "./components/AnimatedBackground"; // الخلفية الجديدة
import "./App.css";

function App() {
  const [search, setSearch] = useState("");

  const filtered = attributes.filter(attr =>
    attr.title.includes(search) || attr.explanation.includes(search)
  );

  return (
    <>
      <AnimatedBackground />
      <div className="container">
        <h1>صفات الله الإلهية في سفر الرؤيا</h1>
        <input
          type="text"
          placeholder="ابحث عن صفة..."
          onChange={(e) => setSearch(e.target.value)}
        />
        {filtered.map((attr, i) => (
          <AttributeCard key={i} {...attr} />
        ))}
      </div>
    </>
  );
}

export default App;
