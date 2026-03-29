import { useState } from "react";
import SandClock from "../components/SandClock";
import { skills, workStyle } from "../data/data";

export default function SkillsSection() {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <section id="skills" className="section">
      <div style={{ display: "flex", alignItems: "flex-start", gap: 24 }}>
        <div>
          <h2 className="section-title">bacarıqlar_</h2>
          <div className="section-label">// texniki arsenal</div>
        </div>
        <div style={{ marginTop: 8 }}>
          <SandClock active />
        </div>
      </div>

      <div className="section-divider" />

      {Object.entries(skills).map(([category, list]) => (
        <div key={category} style={{ marginBottom: 34 }}>
          <div className="skill-category-label">{category}</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
            {list.map((skill) => (
              <span
                key={skill}
                className={`skill-tag ${hoveredSkill === skill ? "highlighted" : ""}`}
                onMouseEnter={() => setHoveredSkill(skill)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}

      <div className="work-style-box">
        <div className="work-style-box-label">// iş_üslubu</div>
        <div className="work-style-items">
          {workStyle.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
