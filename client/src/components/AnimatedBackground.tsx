import { useEffect, useRef } from 'react';

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    // Configuração do canvas
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Mouse position para parallax
    let mouseX = canvas.width / 2;
    let mouseY = canvas.height / 2;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // PARTÍCULAS FLUTUANTES (tipo estrelas/energia)
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
    const particleCount = 80;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        hue: Math.random() * 60 + 220, // Azul → Roxo (220-280)
        opacity: Math.random() * 0.5 + 0.3,
        pulsePhase: Math.random() * Math.PI * 2
      });
    }

    // Grid 3D
    const gridSize = 60;
    const gridDepth = 15;
    const perspective = 500;

    // Animação principal
    const animate = () => {
      time += 0.015;

      // ===== BACKGROUND GRADIENTE DINÂMICO =====
      const bgGradient = ctx.createRadialGradient(
        canvas.width / 2, 
        canvas.height / 2, 
        0, 
        canvas.width / 2, 
        canvas.height / 2, 
        canvas.width
      );
      bgGradient.addColorStop(0, '#0a0015'); // Roxo muito escuro
      bgGradient.addColorStop(0.4, '#000510'); // Azul escuro
      bgGradient.addColorStop(1, '#000000'); // Preto
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // ===== GRID CYBERPUNK 3D =====
      ctx.save();
      ctx.translate(canvas.width / 2, canvas.height * 0.75);

      const parallaxX = (mouseX - canvas.width / 2) * 0.03;
      const parallaxY = (mouseY - canvas.height / 2) * 0.015;

      // Linhas horizontais (profundidade)
      for (let z = 0; z < gridDepth; z++) {
        const zPos = z * gridSize - (time * 60) % gridSize;
        const scale = perspective / (perspective + zPos);
        
        if (scale > 0 && scale < 2) {
          const y = zPos * scale + parallaxY;
          const width = canvas.width * scale * 1.2;
          const opacity = Math.max(0, Math.min(0.5, scale - 0.15));
          
          // Onda sutil
          const wave = Math.sin(time * 1.5 + z * 0.4) * 4;
          
          // Cor variando entre azul e roxo
          const colorMix = (z / gridDepth) + Math.sin(time * 0.5) * 0.3;
          const hue = 220 + colorMix * 60; // 220 (azul) → 280 (roxo)
          
          ctx.beginPath();
          ctx.moveTo(-width / 2 + parallaxX, y + wave);
          ctx.lineTo(width / 2 + parallaxX, y + wave);
          ctx.strokeStyle = `hsla(${hue}, 100%, 65%, ${opacity})`;
          ctx.lineWidth = scale * 2.5;
          ctx.shadowBlur = 15;
          ctx.shadowColor = `hsla(${hue}, 100%, 65%, ${opacity * 0.6})`;
          ctx.stroke();
          ctx.shadowBlur = 0;
        }
      }

      // Linhas verticais
      for (let x = -12; x <= 12; x++) {
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
        ctx.shadowBlur = 10;
        ctx.shadowColor = `hsla(${hue}, 100%, 60%, 0.4)`;
        ctx.stroke();
        ctx.shadowBlur = 0;
      }

      ctx.restore();

      // ===== PARTÍCULAS FLUTUANTES =====
      particles.forEach(p => {
        // Movimento
        p.x += p.speedX;
        p.y += p.speedY;
        
        // Wrap around
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        
        // Pulse
        const pulse = Math.sin(time * 2 + p.pulsePhase) * 0.3 + 0.7;
        
        // Desenhar partícula
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * pulse, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 100%, 70%, ${p.opacity * pulse})`;
        ctx.shadowBlur = 15;
        ctx.shadowColor = `hsla(${p.hue}, 100%, 70%, ${p.opacity})`;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // ===== ONDAS DE EQUALIZAÇÃO (DJ STYLE) =====
      const waveCount = 6;
      for (let i = 0; i < waveCount; i++) {
        const waveY = canvas.height * (0.2 + i * 0.12) + Math.sin(time * 1.2 + i) * 40;
        const waveOpacity = 0.12 + Math.sin(time * 2.5 + i * 0.7) * 0.08;
        
        ctx.beginPath();
        for (let x = 0; x < canvas.width; x += 4) {
          const amplitude = 25 + Math.sin(time + i * 0.5) * 15;
          const frequency = 0.008 + i * 0.002;
          const y = waveY + Math.sin(x * frequency + time * 3 + i * 0.8) * amplitude;
          
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        
        const hue = 220 + i * 10 + Math.sin(time) * 20;
        ctx.strokeStyle = `hsla(${hue}, 100%, 65%, ${waveOpacity})`;
        ctx.lineWidth = 2.5;
        ctx.shadowBlur = 25;
        ctx.shadowColor = `hsla(${hue}, 100%, 65%, ${waveOpacity * 0.8})`;
        ctx.stroke();
        ctx.shadowBlur = 0;
      }

      // ===== FEIXES DE LUZ CRUZADOS (LASER SHOW) =====
      const beamCount = 4;
      for (let i = 0; i < beamCount; i++) {
        const beamX = ((time * 80 + i * 250) % (canvas.width + 300)) - 150;
        const beamAngle = Math.sin(time * 0.7 + i) * 0.4;
        
        ctx.save();
        ctx.translate(beamX, 0);
        ctx.rotate(beamAngle);
        
        const beamHue = 230 + i * 15 + Math.sin(time * 2) * 20;
        const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
        gradient.addColorStop(0, `hsla(${beamHue}, 100%, 70%, 0)`);
        gradient.addColorStop(0.3, `hsla(${beamHue}, 100%, 70%, ${0.08 + Math.sin(time * 3 + i) * 0.04})`);
        gradient.addColorStop(0.7, `hsla(${beamHue}, 100%, 70%, ${0.08 + Math.sin(time * 3 + i) * 0.04})`);
        gradient.addColorStop(1, `hsla(${beamHue}, 100%, 70%, 0)`);
        
        ctx.fillStyle = gradient;
        ctx.fillRect(-3, 0, 6, canvas.height);
        
        ctx.restore();
      }

      // ===== PULSOS RADIAIS (BASS DROP EFFECT) =====
      const beatFrequency = 2.5;
      const beatPhase = Math.sin(time * beatFrequency);
      
      if (beatPhase > 0.85) {
        const pulseProgress = (beatPhase - 0.85) / 0.15; // 0 a 1
        const pulseRadius = 100 + pulseProgress * 400;
        const pulseOpacity = Math.max(0, 0.4 - pulseProgress * 0.4);
        
        for (let ring = 0; ring < 3; ring++) {
          const ringRadius = pulseRadius + ring * 80;
          const ringHue = 250 - ring * 15;
          
          ctx.beginPath();
          ctx.arc(canvas.width / 2, canvas.height / 2, ringRadius, 0, Math.PI * 2);
          ctx.strokeStyle = `hsla(${ringHue}, 100%, 70%, ${pulseOpacity * (1 - ring * 0.3)})`;
          ctx.lineWidth = 3 - ring;
          ctx.shadowBlur = 40;
          ctx.shadowColor = `hsla(${ringHue}, 100%, 70%, ${pulseOpacity})`;
          ctx.stroke();
          ctx.shadowBlur = 0;
        }
      }

      // ===== GLITCH EFFECT SUTIL (GAMER AESTHETIC) =====
      if (Math.random() > 0.97) {
        const glitchY = Math.random() * canvas.height;
        const glitchHeight = 3 + Math.random() * 5;
        const glitchOffset = (Math.random() - 0.5) * 10;
        
        ctx.save();
        const imageData = ctx.getImageData(0, glitchY, canvas.width, glitchHeight);
        ctx.putImageData(imageData, glitchOffset, glitchY);
        ctx.restore();
      }

      // ===== SCANLINES SUTIS (CRT EFFECT) =====
      for (let y = 0; y < canvas.height; y += 4) {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.03)';
        ctx.fillRect(0, y, canvas.width, 1);
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
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
