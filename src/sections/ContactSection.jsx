import Turtle from "../components/Turtle";
import { contactLinks } from "../data/data";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="section"
      style={{ display: "flex", flexDirection: "column", justifyContent: "center", textAlign: "center", alignItems: "center" }}
    >
      <h2 className="section-title">əlaqə_</h2>
      <div className="section-label">// məni tap</div>

      <div style={{ width: 60, height: 2, background: "var(--turtle)", margin: "16px auto 36px" }} />

      <p style={{
        fontFamily: "var(--font-mono)",
        fontSize: "0.7rem",
        color: "var(--dim)",
        letterSpacing: "0.12em",
        marginBottom: 36,
      }}>
        // tısbağalar həmişə evini tapır
      </p>

      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
        {contactLinks.map((link, i) => (
          <div key={i} className="contact-line">
            <a href={link.href} target="_blank" rel="noreferrer">
              {link.icon} {link.label}
            </a>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 56 }}>
        <Turtle style={{
          width: 140,
          height: 94,
          filter: "drop-shadow(0 0 22px rgba(82,183,136,0.38))",
        }} />
      </div>

      <p style={{
        fontFamily: "var(--font-mono)",
        fontSize: "0.56rem",
        color: "rgba(82,183,136,0.16)",
        letterSpacing: "0.3em",
        marginTop: 38,
        textTransform: "uppercase",
      }}>
        vaxt · səbr · Java · Python · tısbağalar ilə inşa edilmişdir
      </p>
    </section>
  );
}
