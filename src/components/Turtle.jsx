export default function Turtle({ style }) {
  return (
    <svg
      viewBox="0 0 120 80"
      style={{ ...style, overflow: "visible" }}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Shell */}
      <ellipse cx="60" cy="38" rx="34" ry="26" fill="#2d6a4f" stroke="#1b4332" strokeWidth="2" />
      <ellipse cx="60" cy="38" rx="22" ry="17" fill="#40916c" stroke="#2d6a4f" strokeWidth="1" />
      {/* Shell pattern */}
      <polygon points="60,22 72,32 68,48 52,48 48,32" fill="none" stroke="#52b788" strokeWidth="1.5" opacity="0.8" />
      <line x1="60" y1="22" x2="60" y2="48" stroke="#52b788" strokeWidth="1" opacity="0.5" />
      <line x1="48" y1="32" x2="72" y2="32" stroke="#52b788" strokeWidth="1" opacity="0.5" />
      {/* Head */}
      <ellipse cx="90" cy="36" rx="12" ry="9" fill="#2d6a4f" stroke="#1b4332" strokeWidth="1.5" />
      <circle cx="95" cy="32" r="2.5" fill="#081c15" />
      <circle cx="96" cy="31" r="0.8" fill="white" />
      {/* Front legs */}
      <ellipse cx="35" cy="58" rx="10" ry="5" fill="#2d6a4f" stroke="#1b4332" strokeWidth="1.5" transform="rotate(-20,35,58)" />
      <ellipse cx="45" cy="62" rx="10" ry="5" fill="#2d6a4f" stroke="#1b4332" strokeWidth="1.5" transform="rotate(10,45,62)" />
      {/* Back legs */}
      <ellipse cx="75" cy="58" rx="10" ry="5" fill="#2d6a4f" stroke="#1b4332" strokeWidth="1.5" transform="rotate(20,75,58)" />
      <ellipse cx="80" cy="62" rx="10" ry="5" fill="#2d6a4f" stroke="#1b4332" strokeWidth="1.5" transform="rotate(-10,80,62)" />
      {/* Tail */}
      <path d="M28,42 Q15,45 10,50" stroke="#2d6a4f" strokeWidth="4" fill="none" strokeLinecap="round" />
    </svg>
  );
}
