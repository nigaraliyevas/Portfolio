import { useState, useEffect } from "react";
import "./styles/global.css";

import { navItems, multiWords } from "./data/data";

import Navbar        from "./components/Navbar";
import Turtle        from "./components/Turtle";
import HeroSection   from "./sections/HeroSection";
import AboutSection  from "./sections/AboutSection";
import SkillsSection from "./sections/SkillsSection";
import ProjectsSection  from "./sections/ProjectsSection";
import ExperienceSection from "./sections/ExperienceSection";
import EducationSection  from "./sections/EducationSection";
import ContactSection    from "./sections/ContactSection";

export default function App() {
  const [turtlePos, setTurtlePos] = useState(-120);
  const [wordIdx,   setWordIdx]   = useState(0);
  const [langIdx,   setLangIdx]   = useState(0);
  const [activeNav, setActiveNav] = useState("home");

  // Walking turtle across the bottom
  useEffect(() => {
    let pos = -120;
    const walk = setInterval(() => {
      pos += 0.35;
      if (pos > window.innerWidth + 120) pos = -120;
      setTurtlePos(pos);
    }, 16);
    return () => clearInterval(walk);
  }, []);

  // Rotating words in hero
  useEffect(() => {
    const id = setInterval(() => {
      setWordIdx((i) => (i + 1) % multiWords.length);
      setLangIdx((l) => (l + 1) % 3);
    }, 1800);
    return () => clearInterval(id);
  }, []);

  // Active nav highlighting via IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActiveNav(e.target.id); }),
      { threshold: 0.35 }
    );
    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="page">
      {/* Background layers */}
      <div className="bg-grid" />
      <div className="bg-noise" />

      {/* Walking turtle mascot */}
      <Turtle style={{
        position: "fixed",
        bottom: 10,
        left: turtlePos,
        width: 94,
        height: 64,
        pointerEvents: "none",
        zIndex: 100,
        filter: "drop-shadow(0 4px 12px rgba(82,183,136,0.33))",
        transition: "none",
      }} />

      <Navbar activeNav={activeNav} />

      <main>
        <HeroSection wordIdx={wordIdx} langIdx={langIdx} />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <EducationSection />
        <ContactSection />
      </main>
    </div>
  );
}
