"use client";

import React from 'react';
import { motion } from 'framer-motion';

const GlowBackground = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-black">
      {/* Deep Ambient Gradients */}
      <motion.div 
        animate={{ 
          x: [0, 50, 0],
          y: [0, -30, 0],
          opacity: [0.15, 0.2, 0.15]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-10%] left-[-5%] w-[80%] h-[80%] rounded-full bg-red-900/20 blur-[160px]"
      />
      <motion.div 
        animate={{ 
          x: [0, -60, 0],
          y: [0, 40, 0],
          opacity: [0.08, 0.12, 0.08]
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[-15%] right-[-5%] w-[90%] h-[90%] rounded-full bg-white/5 blur-[180px]"
      />

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" 
        style={{ 
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.5) 1px, transparent 0)`,
          backgroundSize: '60px 60px'
        }} 
      />
      
      {/* Cinematic Noise Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none mix-blend-overlay" />
    </div>
  );
};

export default GlowBackground;