import { education, certs } from "../data/data";

export default function EducationSection() {
  return (
    <section id="education" className="section">
      <h2 className="section-title">təhsil_</h2>
      <div className="section-label">// akademik yol</div>
      <div className="section-divider" />

      {education.map((item, i) => (
        <div key={i} className="edu-card">
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: 10,
          }}>
            <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
              <span style={{ fontSize: "1.5rem" }}>{item.icon}</span>
              <div>
                <div style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.9rem",
                  color: "var(--pale)",
                  fontWeight: 700,
                  letterSpacing: "0.04em",
                }}>
                  {item.school}
                </div>
                <div style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.7rem",
                  color: "var(--accent)",
                  letterSpacing: "0.09em",
                  marginTop: 4,
                }}>
                  {item.degree}
                </div>
              </div>
            </div>

            <div style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.61rem",
              color: "var(--sand)",
              letterSpacing: "0.09em",
              whiteSpace: "nowrap",
            }}>
              📅 {item.period}
            </div>
          </div>
        </div>
      ))}

      {/* Certificates */}
      <div style={{ marginTop: 38 }}>
        <div style={{
          fontFamily: "var(--font-mono)",
          fontSize: "0.6rem",
          letterSpacing: "0.22em",
          color: "var(--accent)",
          textTransform: "uppercase",
          marginBottom: 14,
        }}>
          sertifikatlar
        </div>

        {certs.map((cert, i) => (
          <div key={i} className="cert-item">⟶ {cert}</div>
        ))}
      </div>
    </section>
  );
}
