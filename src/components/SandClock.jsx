import { useEffect, useRef } from "react";

export default function SandClock({ active }) {
  const canvasRef = useRef(null);
  const particles = useRef([]);
  const raf = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    canvas.width = 80;
    canvas.height = 120;

    const spawnParticles = () => {
      for (let i = 0; i < 2; i++) {
        particles.current.push({
          x:     40 + (Math.random() - 0.5) * 8,
          y:     30,
          vy:    0.5 + Math.random() * 1.5,
          vx:    (Math.random() - 0.5) * 0.5,
          r:     1 + Math.random() * 1.5,
          alpha: 1,
          color: `hsl(${35 + Math.random() * 20}, 80%, ${55 + Math.random() * 20}%)`,
        });
      }
    };

    const drawFrame = () => {
      ctx.clearRect(0, 0, 80, 120);

      // Hourglass outline
      ctx.save();
      ctx.strokeStyle = "rgba(210,180,120,0.6)";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(10, 5);
      ctx.lineTo(70, 5);
      ctx.lineTo(45, 58);
      ctx.lineTo(70, 115);
      ctx.lineTo(10, 115);
      ctx.lineTo(35, 58);
      ctx.closePath();
      ctx.stroke();
      ctx.restore();

      if (active) spawnParticles();

      particles.current = particles.current.filter((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.08;

        if (p.y > 110) {
          p.vy = 0;
          p.vx = 0;
          p.alpha -= 0.015;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.max(0, p.alpha);
        ctx.fill();
        ctx.globalAlpha = 1;

        return p.alpha > 0;
      });

      raf.current = requestAnimationFrame(drawFrame);
    };

    drawFrame();
    return () => cancelAnimationFrame(raf.current);
  }, [active]);

  return <canvas ref={canvasRef} style={{ width: 80, height: 120 }} />;
}
