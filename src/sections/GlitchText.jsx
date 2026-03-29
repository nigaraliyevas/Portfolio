import { useState, useEffect } from "react";

export default function GlitchText({ text }) {
  const [glitching, setGlitching] = useState(false);

  useEffect(() => {
    const trigger = () => {
      setGlitching(true);
      setTimeout(() => setGlitching(false), 180);
    };
    const id = setInterval(trigger, 3500 + Math.random() * 3000);
    return () => clearInterval(id);
  }, []);

  return (
    <span style={{ position: "relative", display: "inline-block" }}>
      {text}
      {glitching && (
        <>
          <span style={{
            position: "absolute", top: 0, left: "-3px",
            color: "#ff6b6b", clipPath: "inset(30% 0 50% 0)", opacity: 0.85,
          }}>
            {text}
          </span>
          <span style={{
            position: "absolute", top: 0, left: "3px",
            color: "#52b788", clipPath: "inset(60% 0 20% 0)", opacity: 0.85,
          }}>
            {text}
          </span>
        </>
      )}
    </span>
  );
}
