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

    // PARTÍCULAS - REDUZIDO de 80 para 40
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
    const particleCount = 40; // REDUZIDO

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        hue: Math.random() * 60 + 220,
        opacity: Math.random() * 0.5 + 0.3,
        pulsePhase: Math.random() * Math.PI * 2
      });
    }

    // Grid 3D - OTIMIZADO
    const gridSize = 60;
    const gridDepth = 12; // REDUZIDO de 15
    const perspective = 500;

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

      // Grid 3D - SEM SOMBRAS (grande economia)
      ctx.save();
      ctx.translate(canvas.width / 2, canvas.height * 0.75);

      const parallaxX = (mouseX - canvas.width / 2) * 0.03;
      const parallaxY = (mouseY - canvas.height / 2) * 0.015;

      // Linhas horizontais
      for (let z = 0; z < gridDepth; z++) {
        const zPos = z * gridSize - (time * 60) % gridSize;
        const scale = perspective / (perspective + zPos);
        
        if (scale > 0 && scale < 2) {
          const y = zPos * scale + parallaxY;
          const width = canvas.width * scale * 1.2;
          const opacity = Math.max(0, Math.min(0.5, scale - 0.15));
          const wave = Math.sin(time * 1.5 + z * 0.4) * 4;
          const colorMix = (z / gridDepth) + Math.sin(time * 0.5) * 0.3;
          const hue = 220 + colorMix * 60;
          
          ctx.beginPath();
          ctx.moveTo(-width / 2 + parallaxX, y + wave);
          ctx.lineTo(width / 2 + parallaxX, y + wave);
          ctx.strokeStyle = `hsla(${hue}, 100%, 65%, ${opacity})`;
          ctx.lineWidth = scale * 2.5;
          ctx.stroke(); // SEM shadowBlur
        }
      }

      // Linhas verticais - REDUZIDO
      for (let x = -8; x <= 8; x += 2) { // MENOS LINHAS (era -12 a 12)
        ctx.beginPath();
        for (let z = 0; z < gridDepth; z++) {
          const zPos = z * gridSize - (time * 60) % gridSize;
          const scale = perspective / (perspective + zPos);
          
          if (scale > 0 && scale < 2) {
            const xPos = x * gridSize * scale + parallaxX;
            const y = zPos * scale + parallaxY;
            const wave = Math.sin(time * 1.5 + z * 0.4 + x * 0.3) * 4;
            
            if (z === 0) {
              ctx.moveTo(xPos, y + wave);
            } else {
              ctx.lineTo(xPos, y + wave);
            }
          }
        }
        
        const hue = 240 + x * 3 + time * 10;
        ctx.strokeStyle = `hsla(${hue}, 100%, 60%, 0.25)`;
        ctx.lineWidth = 1.8;
        ctx.stroke(); // SEM shadowBlur
      }

      ctx.restore();

      // Partículas - SEM SOMBRAS
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
        ctx.fill(); // SEM shadowBlur
      });

      // Ondas - REDUZIDO de 6 para 3
      const waveCount = 3;
      for (let i = 0; i < waveCount; i++) {
        const waveY = canvas.height * (0.2 + i * 0.2) + Math.sin(time * 1.2 + i) * 40;
        const waveOpacity = 0.12 + Math.sin(time * 2.5 + i * 0.7) * 0.08;
        
        ctx.beginPath();
        for (let x = 0; x < canvas.width; x += 8) { // MENOS PONTOS (era 4)
          const amplitude = 25 + Math.sin(time + i * 0.5) * 15;
          const frequency = 0.008 + i * 0.002;
          const y = waveY + Math.sin(x * frequency + time * 3 + i * 0.8) * amplitude;
          
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        
        const hue = 220 + i * 15 + Math.sin(time) * 20;
        ctx.strokeStyle = `hsla(${hue}, 100%, 65%, ${waveOpacity})`;
        ctx.lineWidth = 2.5;
        ctx.stroke(); // SEM shadowBlur
      }

      // REMOVIDO: Feixes de luz (economia significativa)
      // REMOVIDO: Pulsos radiais (economia significativa)
      // REMOVIDO: Scanlines (não adiciona muito valor)

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
