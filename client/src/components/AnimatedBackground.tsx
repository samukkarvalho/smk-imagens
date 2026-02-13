import { useEffect, useRef } from 'react';

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    let mouseX = canvas.width / 2;
    let mouseY = canvas.height / 2;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // PARTÍCULAS FLUTUANTES
    interface Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      hue: number;
      opacity: number;
      pulsePhase: number;
    }

    const particles: Particle[] = [];
    const particleCount = 50; // Aumentado para compensar a remoção do grid

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 4 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        hue: Math.random() * 60 + 220,
        opacity: Math.random() * 0.6 + 0.3,
        pulsePhase: Math.random() * Math.PI * 2
      });
    }

    const animate = () => {
      time += 0.015;

      // Background gradiente
      const bgGradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, canvas.width
      );
      bgGradient.addColorStop(0, '#0a0015');
      bgGradient.addColorStop(0.4, '#000510');
      bgGradient.addColorStop(1, '#000000');
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // REMOVIDO: Grid 3D completo

      // Partículas flutuantes
      particles.forEach(p => {
        p.x += p.speedX;
        p.y += p.speedY;
        
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        
        const pulse = Math.sin(time * 2 + p.pulsePhase) * 0.3 + 0.7;
        
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * pulse, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 100%, 70%, ${p.opacity * pulse})`;
        ctx.fill();
      });

      // ONDAS EM TODA A PÁGINA (aumentadas de 3 para 8)
      const waveCount = 8;
      for (let i = 0; i < waveCount; i++) {
        // Distribuir ondas uniformemente pela altura
        const waveY = (canvas.height / (waveCount + 1)) * (i + 1) + Math.sin(time * 1.2 + i) * 50;
        const waveOpacity = 0.15 + Math.sin(time * 2.5 + i * 0.7) * 0.1;
        
        ctx.beginPath();
        for (let x = 0; x < canvas.width; x += 6) {
          const amplitude = 30 + Math.sin(time + i * 0.5) * 20;
          const frequency = 0.006 + i * 0.001;
          const y = waveY + Math.sin(x * frequency + time * 3 + i * 0.8) * amplitude;
          
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        
        const hue = 220 + i * 8 + Math.sin(time) * 20;
        ctx.strokeStyle = `hsla(${hue}, 100%, 65%, ${waveOpacity})`;
        ctx.lineWidth = 2.5;
        ctx.stroke();
      }

      // ONDAS VERTICAIS (novo - para criar efeito de grade fluida)
      const verticalWaveCount = 5;
      for (let i = 0; i < verticalWaveCount; i++) {
        const waveX = (canvas.width / (verticalWaveCount + 1)) * (i + 1) + Math.sin(time * 0.8 + i) * 40;
        const waveOpacity = 0.08 + Math.sin(time * 2 + i * 0.5) * 0.05;
        
        ctx.beginPath();
        for (let y = 0; y < canvas.height; y += 6) {
          const amplitude = 25 + Math.sin(time + i * 0.3) * 15;
          const frequency = 0.005 + i * 0.001;
          const x = waveX + Math.sin(y * frequency + time * 2.5 + i * 0.6) * amplitude;
          
          if (y === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        
        const hue = 230 + i * 10 + Math.sin(time * 1.5) * 15;
        ctx.strokeStyle = `hsla(${hue}, 100%, 60%, ${waveOpacity})`;
        ctx.lineWidth = 2;
        ctx.stroke();
      }

      // Pulsos radiais sutis (mantidos)
      const beatFrequency = 2.5;
      const beatPhase = Math.sin(time * beatFrequency);
      
      if (beatPhase > 0.85) {
        const pulseProgress = (beatPhase - 0.85) / 0.15;
        const pulseRadius = 100 + pulseProgress * 400;
        const pulseOpacity = Math.max(0, 0.3 - pulseProgress * 0.3);
        
        for (let ring = 0; ring < 2; ring++) {
          const ringRadius = pulseRadius + ring * 80;
          const ringHue = 250 - ring * 15;
          
          ctx.beginPath();
          ctx.arc(canvas.width / 2, canvas.height / 2, ringRadius, 0, Math.PI * 2);
          ctx.strokeStyle = `hsla(${ringHue}, 100%, 70%, ${pulseOpacity * (1 - ring * 0.3)})`;
          ctx.lineWidth = 2 - ring;
          ctx.stroke();
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
      style={{ background: '#000' }}
    />
  );
}
