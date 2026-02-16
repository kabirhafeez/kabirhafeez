import React, { useEffect, useRef } from 'react';

const SpaceBackground = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const starsRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Star class
    class Star {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = Math.random() * 2 + 0.5; // 0.5-2.5px radius
        this.opacity = Math.random() * 0.4 + 0.1; // 0.1-0.5 opacity - reduced for subtlety
        this.twinkleSpeed = Math.random() * 0.01 + 0.005; // slower twinkle for less distraction
        this.twinklePhase = Math.random() * Math.PI * 2; // random starting phase
        
        // Different star types with your color scheme
        const starTypes = [
          { color: 'rgba(255, 255, 255, ', weight: 0.6 }, // white stars (most common)
          { color: 'rgba(0, 255, 136, ', weight: 0.2 }, // green accent stars
          { color: 'rgba(51, 255, 170, ', weight: 0.1 }, // light green stars
          { color: 'rgba(160, 160, 160, ', weight: 0.1 }, // muted gray stars
        ];
        
        const rand = Math.random();
        let cumulative = 0;
        for (let type of starTypes) {
          cumulative += type.weight;
          if (rand <= cumulative) {
            this.color = type.color;
            break;
          }
        }
      }

      update() {
        // Twinkle effect
        this.twinklePhase += this.twinkleSpeed;
        this.currentOpacity = this.opacity * (0.5 + 0.5 * Math.sin(this.twinklePhase));
      }

      draw() {
        ctx.save();
        
        // Draw star with twinkle effect
        ctx.globalAlpha = this.currentOpacity * 0.6; // Reduce overall opacity
        ctx.fillStyle = this.color + '1)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();

        // Add subtle glow for larger stars
        if (this.radius > 1.5) {
          ctx.globalAlpha = this.currentOpacity * 0.3;
          ctx.shadowColor = this.color + '0.5)';
          ctx.shadowBlur = 4;
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.radius * 2, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();
      }
    }

    // Nebula class for cosmic dust effects
    class NebulaCloud {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = Math.random() * 200 + 100; // 100-300px radius
        this.opacity = Math.random() * 0.05 + 0.02; // Very low opacity 0.02-0.07
        this.driftSpeed = (Math.random() - 0.5) * 0.2; // Slow drift
        this.color = Math.random() > 0.7 ? 'rgba(0, 255, 136, ' : 'rgba(26, 26, 26, '; // Mostly dark, some green
      }

      update() {
        this.x += this.driftSpeed;
        // Wrap around screen
        if (this.x > canvas.width + this.radius) this.x = -this.radius;
        if (this.x < -this.radius) this.x = canvas.width + this.radius;
      }

      draw() {
        ctx.save();
        
        // Create radial gradient for nebula effect
        const gradient = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, this.radius
        );
        
        gradient.addColorStop(0, this.color + this.opacity + ')');
        gradient.addColorStop(0.5, this.color + (this.opacity * 0.5) + ')');
        gradient.addColorStop(1, this.color + '0)');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
      }
    }

    // Initialize stars and nebula
    const initSpace = () => {
      starsRef.current = [];
      
      // Create stars based on screen size - reduced for less visual clutter
      const starCount = Math.floor((canvas.width * canvas.height) / 15000); // Reduced density
      for (let i = 0; i < Math.max(25, Math.min(100, starCount)); i++) {
        starsRef.current.push(new Star());
      }

      // Add fewer nebula clouds for cleaner background
      for (let i = 0; i < 2; i++) {
        starsRef.current.push(new NebulaCloud());
      }
    };

    initSpace();

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      starsRef.current.forEach(item => {
        item.update();
        item.draw();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{
        background: 'transparent',
      }}
    />
  );
};

export default SpaceBackground;
