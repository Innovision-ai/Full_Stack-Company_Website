import React, { useEffect, useRef, useState } from 'react';
import './GlowingDots.css'; // CSS file for media queries

const GlowingDots = () => {
  const canvasRef = useRef(null);
  const dots = useRef([]);
  const mouse = useRef({ x: null, y: null });
  const maxDist = 120;
  const mouseDist = 150;

  const getNumDots = () => {
    const w = window.innerWidth;
    if (w < 480) return 30;
    if (w < 768) return 50;
    return 100;
  };

  const getSpeedFactor = () => (window.innerWidth < 768 ? 0.5 : 1);

  const initDots = () => {
    const w = window.innerWidth;
    const h = window.innerHeight;
    const speed = getSpeedFactor();
    const numDots = getNumDots();

    dots.current = Array.from({ length: numDots }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * speed,
      vy: (Math.random() - 0.5) * speed,
    }));
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initDots(); // reinit on resize for responsiveness
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const onMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    const onMouseLeave = () => {
      mouse.current.x = null;
      mouse.current.y = null;
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseleave', onMouseLeave);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const d of dots.current) {
        d.x += d.vx;
        d.y += d.vy;
        if (d.x < 0 || d.x > canvas.width) d.vx *= -1;
        if (d.y < 0 || d.y > canvas.height) d.vy *= -1;
      }

      for (const d of dots.current) {
        const distToMouse = mouse.current.x !== null
          ? Math.hypot(d.x - mouse.current.x, d.y - mouse.current.y)
          : Infinity;

        ctx.beginPath();
        ctx.arc(d.x, d.y, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = distToMouse < mouseDist ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.3)';
        ctx.shadowColor = 'white';
        ctx.shadowBlur = distToMouse < mouseDist ? 12 : 6;
        ctx.fill();
      }

      for (let i = 0; i < dots.current.length; i++) {
        const a = dots.current[i];
        for (let j = i + 1; j < dots.current.length; j++) {
          const b = dots.current[j];
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < maxDist) {
            const alpha = 1 - dist / maxDist;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(255,255,255,${alpha * 0.2})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      if (mouse.current.x !== null) {
        const nearDots = dots.current.filter(
          (d) => Math.hypot(d.x - mouse.current.x, d.y - mouse.current.y) < mouseDist
        );

        for (let i = 0; i < nearDots.length; i++) {
          for (let j = i + 1; j < nearDots.length; j++) {
            const a = nearDots[i];
            const b = nearDots[j];
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = 'rgba(0, 255, 255, 0.2)';
            ctx.lineWidth = 1;
            ctx.stroke();
          }

          const d = nearDots[i];
          ctx.beginPath();
          ctx.moveTo(mouse.current.x, mouse.current.y);
          ctx.lineTo(d.x, d.y);
          ctx.strokeStyle = 'rgba(0, 255, 255, 0.1)';
          ctx.stroke();
        }
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  return (
    <canvas ref={canvasRef} className="glowing-dots" />
  );
};

export default GlowingDots;
