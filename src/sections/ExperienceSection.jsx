import { experience } from "../data/data";

export default function ExperienceSection() {
  return (
    <section id="experience" className="section">
      <h2 className="section-title">təcrübə_</h2>
      <div className="section-label">// iş tarixi</div>
      <div className="section-divider" />

      {experience.map((item, i) => (
        <div key={i} className="exp-card">
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: 8,
          }}>
            <div>
              <div style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.9rem",
                color: "var(--pale)",
                fontWeight: 700,
                letterSpacing: "0.05em",
              }}>
                {item.company}
              </div>
              <div style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.67rem",
                color: "var(--accent)",
                letterSpacing: "0.11em",
                marginTop: 3,
              }}>
                {item.role}
              </div>
            </div>

            <div style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.61rem",
              color: "var(--sand)",
              letterSpacing: "0.09em",
              whiteSpace: "nowrap",
            }}>
              ⏳ {item.period}
            </div>
          </div>

          <p style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.74rem",
            color: "var(--dim)",
            lineHeight: 1.85,
            marginTop: 10,
            letterSpacing: "0.03em",
          }}>
            {item.desc}
          </p>
        </div>
      ))}
    </section>
  );
}
