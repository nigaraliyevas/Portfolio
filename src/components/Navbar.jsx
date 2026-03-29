import { useState } from "react";
import { navItems } from "../data/data";

export default function Navbar({ activeNav }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      <nav className="nav-bar">
        <div className="nav-logo">
          N.Ə <span style={{ color: "var(--accent)", fontSize: "0.58rem" }}>// backend.dev</span>
        </div>

        <div className="nav-links">
          {navItems.map((n) => (
            <button
              key={n.id}
              className={`nav-btn ${activeNav === n.id ? "active" : ""}`}
              onClick={() => scrollTo(n.id)}
            >
              {n.label}
            </button>
          ))}
        </div>

        <button className="hamburger" onClick={() => setMenuOpen((m) => !m)}>
          ☰
        </button>
      </nav>

      {menuOpen && (
        <div className="mob-menu">
          {navItems.map((n) => (
            <button key={n.id} className="nav-btn" onClick={() => scrollTo(n.id)}>
              {n.label}
            </button>
          ))}
        </div>
      )}
    </>
  );
}
