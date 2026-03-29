import { useState } from "react";
import { projects } from "../data/data";

export default function ProjectsSection() {
  const [projectIdx, setProjectIdx] = useState(0);
  const [slideKey, setSlideKey] = useState(0);

  const navigate = (dir) => {
    setProjectIdx((i) => (i + dir + projects.length) % projects.length);
    setSlideKey((k) => k + 1);
  };

  const pickProject = (i) => {
    setProjectIdx(i);
    setSlideKey((k) => k + 1);
  };

  const cur = projects[projectIdx];

  return (
    <section id="projects" className="section--full" style={{ paddingLeft: "clamp(20px,4vw,60px)", paddingRight: "clamp(20px,4vw,60px)" }}>
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        <h2 className="section-title">layihələr_</h2>
        <div className="section-label">
          // {String(projectIdx + 1).padStart(2, "0")} / {projects.length}
        </div>
        <div className="section-divider" />

        {/* Main carousel card */}
        <div className="proj-wrap slide-in" key={slideKey}>
          <div className="proj-num">{cur.num}</div>

          <div className="proj-body">
            <div className="proj-title">{cur.title}</div>
            <p className="proj-desc">{cur.desc}</p>

            <div className="proj-stack">
              {cur.stack.map((t) => (
                <span key={t} className="proj-tag">{t}</span>
              ))}
            </div>

            {cur.comingSoon ? (
              <span className="proj-soon">⟶ tezliklə // coming soon</span>
            ) : (
              <a href={cur.url} target="_blank" rel="noreferrer" className="proj-link">
                ⟶ Sayta bax
              </a>
            )}
          </div>

          <div className="proj-footer">
            <button className="carousel-btn" onClick={() => navigate(-1)}>← əvvəlki</button>
            <div className="dots">
              {projects.map((_, i) => (
                <button
                  key={i}
                  className={`dot ${i === projectIdx ? "active" : ""}`}
                  onClick={() => pickProject(i)}
                />
              ))}
            </div>
            <button className="carousel-btn" onClick={() => navigate(1)}>növbəti →</button>
          </div>
        </div>

        {/* Mini project jump buttons */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 7, marginTop: 22 }}>
          {projects.map((p, i) => (
            <button
              key={i}
              className={`mini-proj-btn ${i === projectIdx ? "active" : ""}`}
              onClick={() => pickProject(i)}
            >
              {p.num} {p.title}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
