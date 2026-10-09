import { langs } from "../data/data";

export default function AboutSection() {
  return (
    <section id="about" className="section">
      <h2 className="section-title">haqqımda_</h2>
      <div className="section-label">// kim mənəm</div>
      <div className="section-divider" />

      <blockquote className="about-quote">
        "Heç bir bug məni bloklamır. Mən async işləyirəm — nəticə gəlir, gec də olsa."
      </blockquote>

      <p className="text-dim" style={{ marginBottom: 18 }}>
        Azərbaycan Universitetinin Kompüter Mühəndisliyi tələbəsi (2021–2025).
        ADNSU nəzdindəki Sənaye və Texnologiya Kollecini Kompüter Şəbəkələri ixtisası
        üzrə bitirmişəm. Code Academy-də Fullstack Proqramlaşdırma kursunu tamamlamışam.
      </p>

      <p style={{
        fontFamily: "var(--font-mono)",
        fontSize: "0.8rem",
        color: "var(--pale)",
        lineHeight: 2,
        letterSpacing: "0.04em",
        marginBottom: 36,
      }}>
        Java ilə backend inkişafı sahəsində biliklərə malikəm. C# (.NET Core) və
        Python (FastAPI, Django) ilə də işləmişəm. API-lərin yaradılması, verilənlər bazası ilə işləmək
        və kod keyfiyyətinə diqqət yetirmək əsas prioritetlərimdəndir.
      </p>

      <div style={{ marginBottom: 34 }}>
        <div style={{
          fontFamily: "var(--font-mono)",
          fontSize: "0.6rem",
          letterSpacing: "0.22em",
          color: "var(--accent)",
          textTransform: "uppercase",
          marginBottom: 13,
        }}>
          dil bilikləri
        </div>

        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {langs.map((l) => (
            <div key={l.code} className="lang-chip">
              <span style={{ fontSize: "1.1rem" }}>{l.flag}</span>
              <span>{l.name}</span>
              <span style={{ color: "var(--turtle)", fontSize: "0.6rem" }}>// {l.level}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
