import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
const videoWebM = 'public/video/Rainbow_Nebula_4K_Motion_Background.webm';

const Loader = () => {
  const videoRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [currentLine, setCurrentLine] = useState(0);

  // Code lines to display
  const codeLines = [
  { text: 'import Hizbullah from "./portfolio";', color: '#ec4899' },
  { text: 'const developer = new FullStackDev();', color: '#a855f7' },
  { text: 'developer.skills = ["React", "Node", "Express","MongoDB"];', color: '#6366f1' },
  { text: 'developer.build("Modern Web Apps");', color: '#10b981' },
  { text: '// Turning ideas into reality...', color: '#8b5cf6' },
];


  // Simulate loading progress
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  // Update current code line
  useEffect(() => {
    const lineInterval = setInterval(() => {
      setCurrentLine((prev) => (prev + 1) % codeLines.length);
    }, 800);

    return () => clearInterval(lineInterval);
  }, []);

  return (
    <motion.div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 100%)',
        zIndex: 9999,
        overflow: 'hidden',
      }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
    >
      {/* Video Background */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          overflow: 'hidden',
        }}
      >
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            filter: 'brightness(0.25) contrast(1.1)',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
          aria-hidden="true"
        >
          <source src={videoWebM} type="video/webm" />
        </video>
      </div>

      {/* Dark Overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.4) 100%)',
          zIndex: 1,
        }}
        aria-hidden="true"
      />

      {/* Animated Grid Background */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: 'linear-gradient(rgba(99, 102, 241, 0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(99, 102, 241, 0.06) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          zIndex: 2,
          opacity: 0.6,
        }}
      />

      {/* Main Content */}
      <div style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '3rem', maxWidth: '90vw' }}>
        
        {/* Code Terminal Window */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            width: '100%',
            maxWidth: '550px',
            background: 'rgba(30, 30, 30, 0.85)',
            borderRadius: '12px',
            border: '1px solid rgba(99, 102, 241, 0.2)',
            backdropFilter: 'blur(10px)',
            overflow: 'hidden',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
          }}
        >
          {/* Terminal Header */}
          <div
            style={{
              background: 'rgba(50, 50, 51, 0.9)',
              padding: '12px 16px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              borderBottom: '1px solid rgba(99, 102, 241, 0.1)',
            }}
          >
            <div style={{ display: 'flex', gap: '6px' }}>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ef4444' }} />
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#eab308' }} />
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#22c55e' }} />
            </div>
            <span style={{ color: '#9ca3af', fontSize: '13px', fontFamily: 'monospace', marginLeft: '8px' }}>
              portfolio.jsx
            </span>
          </div>

          {/* Terminal Body - Code Lines */}
          <div style={{ padding: '20px 24px', fontFamily: 'monospace', fontSize: '14px', minHeight: '180px' }}>
            {codeLines.map((line, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ 
                  opacity: index <= currentLine ? 1 : 0.3,
                  x: 0,
                }}
                transition={{ delay: index * 0.15, duration: 0.4 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '12px',
                  position: 'relative',
                }}
              >
                <span style={{ color: '#6b7280', marginRight: '16px', minWidth: '20px' }}>
                  {index + 1}
                </span>
                <span style={{ color: line.color }}>
                  {line.text}
                </span>
                {index === currentLine && (
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ repeat: Infinity, duration: 0.8 }}
                    style={{
                      display: 'inline-block',
                      width: '8px',
                      height: '16px',
                      background: '#22c55e',
                      marginLeft: '4px',
                    }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Name and Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          style={{ textAlign: 'center', maxWidth: '90vw' }}
        >
          <h1
            style={{
              fontSize: 'clamp(1.8rem, 5vw, 3.2rem)',
              fontWeight: 700,
              color: '#ffffff',
              marginBottom: '0.8rem',
              letterSpacing: '-0.02em',
              lineHeight: 1.2,
            }}
          >
            <span
              style={{
                background: 'linear-gradient(135deg, #6366f1, #a855f7, #ec4899)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                display: 'inline-block',
              }}
            >
              Hizbullah Khalifa
            </span>
          </h1>
          <p
            style={{
              color: '#d1d5db',
              fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
              fontWeight: 400,
              letterSpacing: '0.02em',
              marginBottom: '0.5rem',
            }}
          >
            Web Developer & Problem Solver
          </p>
          <motion.div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
              color: '#9ca3af',
              fontSize: '0.9rem',
              fontFamily: 'monospace',
            }}
          >
            <span style={{ color: '#22c55e' }}>$</span>
            <span>npm run portfolio</span>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
              style={{
                width: '16px',
                height: '16px',
                border: '2px solid transparent',
                borderTopColor: '#6366f1',
                borderRadius: '50%',
              }}
            />
          </motion.div>
        </motion.div>

        {/* Loading Progress Bar with Percentage */}
        <div style={{ width: '100%', maxWidth: '400px' }}>
          {/* Progress Bar */}
          <div
            style={{
              height: '4px',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '9999px',
              overflow: 'hidden',
              position: 'relative',
              marginBottom: '12px',
            }}
          >
            <motion.div
              style={{
                height: '100%',
                width: `${progress}%`,
                background: 'linear-gradient(90deg, #6366f1, #a855f7, #ec4899)',
                borderRadius: '9999px',
                boxShadow: '0 0 10px rgba(99, 102, 241, 0.5)',
              }}
              transition={{ duration: 0.3 }}
            />
          </div>

          {/* Stats Display */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <motion.p 
              style={{
                color: 'rgba(255, 255, 255, 0.7)',
                fontSize: '0.85rem',
                fontFamily: 'monospace',
              }}
            >
              Loading: {progress}%
            </motion.p>
            <motion.p 
              style={{
                color: '#22c55e',
                fontSize: '0.85rem',
                fontFamily: 'monospace',
              }}
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              ● Building
            </motion.p>
          </div>
        </div>
      </div>

      {/* Floating Code Symbols */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 3 }}>
        {['{ }', '< />', '[ ]', '( )', '=>', '&&', '||', '++'].map((symbol, i) => (
          <motion.div
            key={`symbol-${i}`}
            style={{
              position: 'absolute',
              color: i % 2 === 0 ? '#6366f1' : '#ec4899',
              fontSize: '1.5rem',
              fontFamily: 'monospace',
              fontWeight: 'bold',
              opacity: 0.15,
              left: `${(i * 12) % 90 + 5}%`,
              top: `${(i * 15) % 80 + 10}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.1, 0.25, 0.1],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 4,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: 'easeInOut',
            }}
          >
            {symbol}
          </motion.div>
        ))}
      </div>

      {/* Binary Rain Effect */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 2 }}>
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`binary-${i}`}
            style={{
              position: 'absolute',
              left: `${i * 12}%`,
              top: '-10%',
              color: '#22c55e',
              fontSize: '12px',
              fontFamily: 'monospace',
              opacity: 0.2,
            }}
            animate={{
              y: ['0vh', '110vh'],
            }}
            transition={{
              duration: Math.random() * 8 + 6,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: 'linear',
            }}
          >
            {Math.random() > 0.5 ? '1010' : '0101'}
          </motion.div>
        ))}
      </div>

      {/* Top Gradient Border */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '2px',
          background: 'linear-gradient(90deg, transparent, #6366f1, #a855f7, #ec4899, transparent)',
          zIndex: 4,
        }}
      />

      {/* Bottom Gradient Border */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '2px',
          background: 'linear-gradient(90deg, transparent, #ec4899, #a855f7, #6366f1, transparent)',
          zIndex: 4,
        }}
      />
    </motion.div>
  );
};

export default Loader;