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

    // Mouse position
    let mouseX = canvas.width / 2;
    let mouseY = canvas.height / 2;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Configuração do grid 3D
    const gridSize = 50;
    const gridDepth = 20;
    const perspective = 400;

    // Animação principal
    const animate = () => {
      time += 0.01;

      // Background gradient (preto -> azul profundo)
      const bgGradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      bgGradient.addColorStop(0, '#000000');
      bgGradient.addColorStop(0.5, '#000510');
      bgGradient.addColorStop(1, '#001020');
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Desenhar GRID CYBERPUNK 3D
      ctx.save();
      ctx.translate(canvas.width / 2, canvas.height * 0.7);

      // Parallax com mouse
      const parallaxX = (mouseX - canvas.width / 2) * 0.05;
      const parallaxY = (mouseY - canvas.height / 2) * 0.02;

      // Linhas horizontais do grid (profundidade)
      for (let z = 0; z < gridDepth; z++) {
        const zPos = z * gridSize - (time * 50) % gridSize;
        const scale = perspective / (perspective + zPos);
        
        if (scale > 0 && scale < 2) {
          const y = zPos * scale + parallaxY;
          const width = canvas.width * scale;
          const opacity = Math.max(0, Math.min(0.6, scale - 0.2));
          
          // Onda de energia no grid
          const wave = Math.sin(time * 2 + z * 0.3) * 3;
          
          // Cor neon variando
          const hue = (180 + z * 10 + time * 20) % 60 + 180; // Azul -> Cyan
          
          ctx.beginPath();
          ctx.moveTo(-width / 2 + parallaxX, y + wave);
          ctx.lineTo(width / 2 + parallaxX, y + wave);
          ctx.strokeStyle = `hsla(${hue}, 100%, 60%, ${opacity})`;
          ctx.lineWidth = scale * 2;
          ctx.shadowBlur = 10;
          ctx.shadowColor = `hsla(${hue}, 100%, 60%, ${opacity * 0.8})`;
          ctx.stroke();
          ctx.shadowBlur = 0;
        }
      }

      // Linhas verticais do grid
      for (let x = -10; x <= 10; x++) {
        ctx.beginPath();
        for (let z = 0; z < gridDepth; z++) {
          const zPos = z * gridSize - (time * 50) % gridSize;
          const scale = perspective / (perspective + zPos);
          
          if (scale > 0 && scale < 2) {
            const xPos = x * gridSize * scale + parallaxX;
            const y = zPos * scale + parallaxY;
            const wave = Math.sin(time * 2 + z * 0.3 + x * 0.2) * 3;
            
            if (z === 0) {
              ctx.moveTo(xPos, y + wave);
            } else {
              ctx.lineTo(xPos, y + wave);
            }
          }
        }
        
        const hue = (200 + x * 5 + time * 15) % 60 + 180;
        ctx.strokeStyle = `hsla(${hue}, 100%, 60%, 0.3)`;
        ctx.lineWidth = 1.5;
        ctx.shadowBlur = 8;
        ctx.shadowColor = `hsla(${hue}, 100%, 60%, 0.5)`;
        ctx.stroke();
        ctx.shadowBlur = 0;
      }

      ctx.restore();

      // ONDAS DE ENERGIA flutuando (tipo equalizador)
      const waveCount = 5;
      for (let i = 0; i < waveCount; i++) {
        ctx.save();
        
        const waveY = canvas.height * 0.3 + Math.sin(time + i) * 50;
        const waveOpacity = 0.15 + Math.sin(time * 2 + i) * 0.1;
        
        ctx.beginPath();
        for (let x = 0; x < canvas.width; x += 5) {
          const y = waveY + Math.sin(x * 0.01 + time * 3 + i * 0.5) * 30;
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        
        const hue = 190 + i * 15;
        ctx.strokeStyle = `hsla(${hue}, 100%, 60%, ${waveOpacity})`;
        ctx.lineWidth = 3;
        ctx.shadowBlur = 20;
        ctx.shadowColor = `hsla(${hue}, 100%, 60%, ${waveOpacity})`;
        ctx.stroke();
        ctx.shadowBlur = 0;
        
        ctx.restore();
      }

      // FEIXES DE LUZ atravessando (tipo laser show)
      const beamCount = 3;
      for (let i = 0; i < beamCount; i++) {
        const beamX = ((time * 100 + i * 300) % (canvas.width + 200)) - 100;
        const beamAngle = Math.sin(time + i) * 0.3;
        
        ctx.save();
        ctx.translate(beamX, 0);
        ctx.rotate(beamAngle);
        
        const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
        gradient.addColorStop(0, 'rgba(0, 200, 255, 0)');
        gradient.addColorStop(0.5, `rgba(0, 200, 255, ${0.1 + Math.sin(time * 2 + i) * 0.05})`);
        gradient.addColorStop(1, 'rgba(0, 200, 255, 0)');
        
        ctx.fillStyle = gradient;
        ctx.fillRect(-2, 0, 4, canvas.height);
        
        ctx.restore();
      }

      // PULSOS DE ENERGIA radiais (tipo drop da música)
      if (Math.sin(time * 1.5) > 0.9) {
        const pulseRadius = ((time * 100) % 300) + 50;
        const pulseOpacity = Math.max(0, 0.3 - (pulseRadius / 300) * 0.3);
        
        ctx.beginPath();
        ctx.arc(canvas.width / 2, canvas.height / 2, pulseRadius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(0, 255, 255, ${pulseOpacity})`;
        ctx.lineWidth = 2;
        ctx.shadowBlur = 30;
        ctx.shadowColor = `rgba(0, 255, 255, ${pulseOpacity})`;
        ctx.stroke();
        ctx.shadowBlur = 0;
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
