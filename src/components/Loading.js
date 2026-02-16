import React, { useState, useEffect } from 'react';

const Loading = () => {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('Initializing...');

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + Math.random() * 15;
        if (newProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return newProgress;
      });
    }, 200);

    const textInterval = setInterval(() => {
      const texts = [
        'Initializing...',
        'Loading amazing content...',
        'Preparing your experience...',
        'Almost ready...',
        'Welcome!'
      ];
      setLoadingText(texts[Math.floor(Math.random() * texts.length)]);
    }, 1500);

    return () => {
      clearInterval(interval);
      clearInterval(textInterval);
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-gradient-kabir flex items-center justify-center z-50 overflow-hidden">
      {/* Animated Background Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-kabir-green rounded-full animate-float opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${4 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Main Loading Container */}
      <div className="text-center relative z-10">
        {/* 3D Rotating Logo Container */}
        <div className="relative mb-12">
          {/* Outer Glow Ring */}
          <div className="absolute inset-0 w-40 h-40 mx-auto rounded-full bg-gradient-to-r from-kabir-green/20 to-kabir-green-light/20 blur-xl animate-pulse-slow"></div>
          
          {/* 3D Logo Image */}
          <div className="relative w-32 h-32 mx-auto mb-8 preserve-3d animate-logo-3d">
            <img 
              src="/assets/whitelogo.png" 
              alt="Kabir Hafeez Logo" 
              className="w-full h-full object-contain filter drop-shadow-2xl glow-green transform-gpu"
              style={{
                filter: 'drop-shadow(0 0 20px rgba(0, 255, 136, 0.4)) drop-shadow(0 0 40px rgba(0, 255, 136, 0.2))'
              }}
            />
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="w-64 mx-auto mb-6">
          <div className="w-full bg-kabir-gray/50 rounded-full h-2 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-kabir-green to-kabir-green-light rounded-full transition-all duration-300 ease-out shadow-lg shadow-kabir-green/50"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="text-kabir-green text-sm mt-2 font-semibold">
            {Math.round(progress)}%
          </div>
        </div>
        
        {/* Loading Text */}
        <p className="text-kabir-text-muted text-lg animate-pulse">{loadingText}</p>
        
        {/* Orbiting Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="w-2 h-2 bg-kabir-green rounded-full animate-orbit-1 opacity-60"></div>
          <div className="w-1.5 h-1.5 bg-kabir-green-light rounded-full animate-orbit-2 opacity-40"></div>
          <div className="w-1 h-1 bg-kabir-green-dark rounded-full animate-orbit-3 opacity-80"></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
