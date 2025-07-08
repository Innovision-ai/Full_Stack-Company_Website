import React, { useEffect, useRef } from 'react';
import { throttle } from 'lodash';
import './GlowingDots.css';

const GlowingDots = () => {
  const canvasRef = useRef(null);
  const dots = useRef([]);
  const mouse = useRef({ x: null, y: null });
  const animationRef = useRef(null);
  const maxDist = 120;
  const mouseDist = 150;

  const getNumDots = () => {
    const w = window.innerWidth;
    if (w < 480) return 20; // Reduced
    if (w < 768) return 30; // Reduced
    return 60; // Reduced from 100
  };

  const getSpeedFactor = () => (window.innerWidth < 768 ? 0.3 : 0.6); // Slower

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
    const ctx = canvas.getContext('2d', { alpha: true });
    
    // Throttle resize and mouse events
    const resizeCanvas = throttle(() => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initDots();
    }, 200);

    const onMouseMove = throttle((e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    }, 50);

    const onMouseLeave = () => {
      mouse.current.x = null;
      mouse.current.y = null;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseleave', onMouseLeave);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update positions first (single loop)
      for (const d of dots.current) {
        d.x += d.vx;
        d.y += d.vy;
        if (d.x < 0 || d.x > canvas.width) d.vx *= -1;
        if (d.y < 0 || d.y > canvas.height) d.vy *= -1;
      }

      // Draw connections (optimized)
      ctx.lineWidth = 1;
      ctx.beginPath();
      
      for (let i = 0; i < dots.current.length; i++) {
        const a = dots.current[i];
        
        // Only check connections every other frame for half the dots
        if (i % 2 === 0) {
          for (let j = i + 1; j < dots.current.length; j++) {
            const b = dots.current[j];
            const dist = Math.hypot(a.x - b.x, a.y - b.y);
            
            if (dist < maxDist) {
              const alpha = 1 - dist / maxDist;
              ctx.strokeStyle = `rgba(255,255,255,${alpha * 0.2})`;
              ctx.moveTo(a.x, a.y);
              ctx.lineTo(b.x, b.y);
            }
          }
        }
      }
      ctx.stroke();
      
      // Draw dots (single loop, minimal state changes)
      const isMouseActive = mouse.current.x !== null;
      
      // Batch the shadow settings
      ctx.shadowColor = 'white';
      
      for (const d of dots.current) {
        const distToMouse = isMouseActive
          ? Math.hypot(d.x - mouse.current.x, d.y - mouse.current.y)
          : Infinity;
          
        const isNearMouse = distToMouse < mouseDist;
        
        // Only apply shadows to dots near mouse
        ctx.shadowBlur = isNearMouse ? 8 : 0;
        ctx.fillStyle = isNearMouse ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.3)';
        
        ctx.beginPath();
        ctx.arc(d.x, d.y, 2.5, 0, Math.PI * 2);
        ctx.fill();
      }
      
      // Only draw mouse connections if mouse is active
      if (isMouseActive) {
        // Limit the number of connections from mouse
        const nearDots = dots.current
          .filter(d => Math.hypot(d.x - mouse.current.x, d.y - mouse.current.y) < mouseDist)
          .slice(0, 5); // Only connect to 5 closest dots
          
        if (nearDots.length > 0) {
          ctx.beginPath();
          ctx.strokeStyle = 'rgba(0, 255, 255, 0.1)';
          
          for (const d of nearDots) {
            ctx.moveTo(mouse.current.x, mouse.current.y);
            ctx.lineTo(d.x, d.y);
          }
          
          ctx.stroke();
        }
      }
      
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseleave', onMouseLeave);
      cancelAnimationFrame(animationRef.current);
      onMouseMove.cancel && onMouseMove.cancel();
      resizeCanvas.cancel && resizeCanvas.cancel();
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="glowing-dots" 
      style={{ 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        pointerEvents: 'none' 
      }} 
    />
  );
};

export default GlowingDots;
