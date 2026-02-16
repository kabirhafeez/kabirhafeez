import React, { useEffect, useRef } from 'react';

const InteractiveBackground = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const ballsRef = useRef([]);
  const mouseRef = useRef({ x: 0, y: 0 });

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

    // Ball class
    class Ball {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = Math.random() * 60 + 20; // 20-80px radius
        this.vx = (Math.random() - 0.5) * 2; // velocity x
        this.vy = (Math.random() - 0.5) * 2; // velocity y
        this.opacity = Math.random() * 0.3 + 0.1; // 0.1-0.4 opacity
        
        // Color variations using your green theme
        const colors = [
          'rgba(0, 255, 136, ', // kabir-green
          'rgba(0, 204, 106, ', // kabir-green-dark
          'rgba(51, 255, 170, ', // kabir-green-light
          'rgba(42, 42, 42, ', // kabir-gray
          'rgba(26, 26, 26, ', // kabir-darker
        ];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        // Move the ball
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off edges
        if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
          this.vx = -this.vx;
        }
        if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
          this.vy = -this.vy;
        }

        // Mouse interaction - attract balls to mouse
        const dx = mouseRef.current.x - this.x;
        const dy = mouseRef.current.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 150) {
          const force = (150 - distance) / 150;
          this.vx += dx * force * 0.001;
          this.vy += dy * force * 0.001;
        }

        // Limit velocity
        const maxVelocity = 3;
        this.vx = Math.max(-maxVelocity, Math.min(maxVelocity, this.vx));
        this.vy = Math.max(-maxVelocity, Math.min(maxVelocity, this.vy));

        // Add some friction
        this.vx *= 0.99;
        this.vy *= 0.99;
      }

      draw() {
        ctx.save();
        
        // Create gradient for the ball
        const gradient = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, this.radius
        );
        
        gradient.addColorStop(0, this.color + (this.opacity * 0.8) + ')');
        gradient.addColorStop(0.7, this.color + (this.opacity * 0.4) + ')');
        gradient.addColorStop(1, this.color + '0)');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();

        // Add a subtle glow effect for green balls
        if (this.color.includes('255, 136')) {
          ctx.shadowColor = 'rgba(0, 255, 136, 0.3)';
          ctx.shadowBlur = 20;
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.radius * 0.6, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();
      }
    }

    // Initialize balls
    const initBalls = () => {
      ballsRef.current = [];
      const ballCount = Math.floor((canvas.width * canvas.height) / 50000); // Responsive ball count
      for (let i = 0; i < Math.max(8, Math.min(15, ballCount)); i++) {
        ballsRef.current.push(new Ball());
      }
    };

    initBalls();

    // Mouse move handler
    const handleMouseMove = (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    // Touch move handler for mobile
    const handleTouchMove = (e) => {
      if (e.touches.length > 0) {
        mouseRef.current.x = e.touches[0].clientX;
        mouseRef.current.y = e.touches[0].clientY;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      ballsRef.current.forEach(ball => {
        ball.update();
        ball.draw();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
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

export default InteractiveBackground;
