import { useEffect, useRef } from "react";

interface SparklesProps {
  className?: string;
  color?: string;
  density?: number;
  speed?: number;
  opacity?: number;
}

interface Particle {
  x: number;
  y: number;
  size: number;
  vx: number;
  vy: number;
  alpha: number;
  alphaDir: number;
  alphaSpeed: number;
}

export function Sparkles({
  className,
  color = "#ffffff",
  density = 120,
  speed = 0.4,
  opacity = 0.5,
}: SparklesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let particles: Particle[] = [];

    const hex = color.replace("#", "");
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    function resize() {
      canvas!.width = canvas!.offsetWidth;
      canvas!.height = canvas!.offsetHeight;
      spawn();
    }

    function spawn() {
      particles = Array.from({ length: density }, () => ({
        x: Math.random() * canvas!.width,
        y: Math.random() * canvas!.height,
        size: 0.5 + Math.random() * 1.2,
        vx: (Math.random() - 0.5) * speed,
        vy: (Math.random() - 0.5) * speed,
        alpha: Math.random() * opacity,
        alphaDir: Math.random() > 0.5 ? 1 : -1,
        alphaSpeed: 0.003 + Math.random() * 0.008,
      }));
    }

    function draw() {
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        p.alpha += p.alphaDir * p.alphaSpeed;
        if (p.alpha >= opacity) { p.alpha = opacity; p.alphaDir = -1; }
        if (p.alpha <= 0) { p.alpha = 0; p.alphaDir = 1; }
        if (p.x < 0) p.x = canvas!.width;
        if (p.x > canvas!.width) p.x = 0;
        if (p.y < 0) p.y = canvas!.height;
        if (p.y > canvas!.height) p.y = 0;

        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(${r},${g},${b},${p.alpha})`;
        ctx!.fill();
      }
      animId = requestAnimationFrame(draw);
    }

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    resize();
    draw();

    return () => {
      cancelAnimationFrame(animId);
      ro.disconnect();
    };
  }, [color, density, speed, opacity]);

  return <canvas ref={canvasRef} className={className} />;
}
