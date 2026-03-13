import { useEffect, useRef } from "react";

export default function Starfield() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let stars = [];
    let rafId = 0;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const initStars = () => {
      stars = [];
      const count = Math.floor((canvas.width + canvas.height) / 10);
      for (let i = 0; i < count; i += 1) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          r: Math.random() * 1.5 + 0.2,
          a: Math.random(),
          da: (Math.random() * 0.02 + 0.005) * (Math.random() < 0.5 ? 1 : -1),
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach((star) => {
        star.a += star.da;
        if (star.a <= 0 || star.a >= 1) {
          star.da *= -1;
          star.a = Math.max(0, Math.min(1, star.a));
        }
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${star.a})`;
        ctx.fill();
      });
      rafId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      resizeCanvas();
      initStars();
    };

    resizeCanvas();
    initStars();
    animate();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return <canvas id="starfield" ref={canvasRef} />;
}
