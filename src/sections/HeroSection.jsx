import GlitchText from "./GlitchText";
import SandClock from "../components/SandClock";
import { multiWords, heroTags, decoSymbols } from "../data/data";

export default function HeroSection({ wordIdx, langIdx }) {
  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        padding: "100px clamp(24px,6vw,80px) 80px",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      {/* Background hourglass */}
      <div style={{
        position: "absolute",
        right: "clamp(40px,8vw,120px)",
        top: "50%",
        transform: "translateY(-50%)",
        opacity: 0.33,
      }}>
        <SandClock active />
      </div>

      {/* Main content */}
      <div style={{ position: "relative", zIndex: 1, maxWidth: 880 }}>
        <div className="word-rotate" key={`${wordIdx}-${langIdx}`}>
          ⟶ {multiWords[wordIdx][langIdx]}
        </div>

        <h1 style={{
          fontFamily: "var(--font-serif)",
          fontStyle: "italic",
          fontWeight: 900,
          fontSize: "clamp(3.5rem, 13vw, 10rem)",
          color: "var(--sand)",
          lineHeight: 0.9,
          letterSpacing: "-0.02em",
          marginTop: 14,
        }}>
          <GlitchText text="NIGAR" />
          <br />
          <span style={{ color: "var(--accent)", fontSize: "0.52em" }}>ƏLIYEVA</span>
        </h1>

        <p style={{
          fontFamily: "var(--font-mono)",
          fontSize: "clamp(0.68rem,2vw,0.9rem)",
          letterSpacing: "0.24em",
          textTransform: "uppercase",
          color: "var(--accent)",
          marginTop: 16,
        }}>
          Java Backend Developer · C# · Python
          <span className="cursor-blink" />
        </p>

        <p className="text-dim" style={{ maxWidth: 460, marginTop: 18 }}>
          Heç kim görmür. Sistem çökmür —<br />
          İş bitdi.
        </p>

        <div style={{ display: "flex", gap: 9, marginTop: 28, flexWrap: "wrap" }}>
          {heroTags.map((t) => (
            <span key={t} style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.61rem",
              letterSpacing: "0.14em",
              color: "var(--turtle)",
              border: "1px solid var(--turtle)",
              padding: "4px 10px",
            }}>
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Decorative floating symbols */}
      {decoSymbols.map((sym, i) => (
        <span
          key={i}
          className="deco-symbol"
          style={{
            left: `${8 + i * 11}%`,
            top: `${12 + (i % 3) * 26}%`,
            transform: `rotate(${-12 + i * 6}deg)`,
          }}
        >
          {sym}
        </span>
      ))}

      <div className="scroll-hint">aşağı get ↓</div>
    </section>
  );
}
