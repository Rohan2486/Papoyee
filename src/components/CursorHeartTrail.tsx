import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  age: number;
  maxAge: number;
  size: number;
  vx: number;
  vy: number;
  opacity: number;
  rotation: number;
  rotationSpeed: number;
  color: string;
}

const glitterColors = [
  "#FFD700", "#FFF8DC", "#FFFACD", "#F0E68C",
  "#E6E6FA", "#DDA0DD", "#FFB6C1", "#FFFFFF",
  "#C0C0C0", "#F5F5DC",
];

const CursorGlitterTrail = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const lastSpawn = useRef(0);
  const raf = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const spawnParticles = (x: number, y: number) => {
      const now = Date.now();
      if (now - lastSpawn.current > 30) {
        lastSpawn.current = now;
        for (let i = 0; i < 3; i++) {
          particles.current.push({
            x: x + (Math.random() - 0.5) * 12,
            y: y + (Math.random() - 0.5) * 12,
            age: 0,
            maxAge: 30 + Math.random() * 25,
            size: 2 + Math.random() * 4,
            vx: (Math.random() - 0.5) * 2,
            vy: -0.3 - Math.random() * 1.5,
            opacity: 1,
            rotation: Math.random() * Math.PI * 2,
            rotationSpeed: (Math.random() - 0.5) * 0.2,
            color: glitterColors[Math.floor(Math.random() * glitterColors.length)],
          });
        }
      }
    };

    const onMove = (e: MouseEvent) => spawnParticles(e.clientX, e.clientY);
    const onTouch = (e: TouchEvent) => {
      const t = e.touches[0];
      if (t) spawnParticles(t.clientX, t.clientY);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("touchmove", onTouch, { passive: true });

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.current = particles.current.filter((p) => {
        p.age++;
        p.x += p.vx;
        p.y += p.vy;
        p.rotation += p.rotationSpeed;
        p.opacity = 1 - p.age / p.maxAge;

        if (p.age >= p.maxAge) return false;

        ctx.save();
        ctx.globalAlpha = p.opacity;
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);

        // Draw a 4-point star glitter
        const s = p.size;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        for (let i = 0; i < 4; i++) {
          const angle = (i * Math.PI) / 2;
          const outerX = Math.cos(angle) * s;
          const outerY = Math.sin(angle) * s;
          const innerAngle = angle + Math.PI / 4;
          const innerX = Math.cos(innerAngle) * s * 0.3;
          const innerY = Math.sin(innerAngle) * s * 0.3;
          if (i === 0) ctx.moveTo(outerX, outerY);
          else ctx.lineTo(outerX, outerY);
          ctx.lineTo(innerX, innerY);
        }
        ctx.closePath();
        ctx.fill();

        // Add a bright center glow
        ctx.globalAlpha = p.opacity * 0.6;
        ctx.fillStyle = "#FFFFFF";
        ctx.beginPath();
        ctx.arc(0, 0, s * 0.3, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
        return true;
      });

      raf.current = requestAnimationFrame(animate);
    };

    raf.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("touchmove", onTouch);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[60] pointer-events-none"
      style={{ width: "100vw", height: "100vh" }}
    />
  );
};

export default CursorGlitterTrail;
