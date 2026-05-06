"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronRight, Sparkles } from 'lucide-react';

interface IntroScreenProps {
  onEnter: () => void;
}

const IntroScreen = ({ onEnter }: IntroScreenProps) => {
  return (
    <div className="relative min-h-screen w-full bg-black overflow-hidden flex items-center">
      {/* Split Layout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full h-full min-h-screen">
        
        {/* LEFT: Content */}
        <div className="flex flex-col justify-center px-8 md:px-16 lg:px-24 py-20 z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8 max-w-xl"
          >
            <div className="space-y-4">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-2 text-red-500 font-semibold tracking-[0.2em] uppercase text-xs"
              >
                <Sparkles className="w-4 h-4" />
                Portfolio 2024
              </motion.div>
              
              <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white leading-[0.9]">
                Neliswa <br />
                <span className="text-white/40">Mapisa</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground font-medium leading-relaxed">
                IT System Support | AI Enthusiast | Software Developer
              </p>
            </div>

            <p className="text-white/60 text-lg italic border-l-2 border-red-600/50 pl-6 py-2">
              "Technology with a human touch."
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Button 
                onClick={onEnter}
                className="group h-16 px-10 text-lg rounded-2xl bg-red-600 hover:bg-red-700 text-white border-none red-glow transition-all duration-500"
              >
                Enter Portfolio
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* RIGHT: Visual Panel */}
        <div className="hidden lg:block relative overflow-hidden bg-white/[0.02] border-l border-white/5">
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Abstract Glowing Visual */}
            <div className="relative w-[80%] aspect-square">
              <motion.div 
                animate={{ 
                  rotate: 360,
                  scale: [1, 1.1, 1],
                }}
                transition={{ 
                  duration: 20, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
                className="absolute inset-0 rounded-full bg-gradient-to-tr from-red-600/20 via-transparent to-red-900/10 blur-[100px]"
              />
              <div className="absolute inset-0 border border-white/5 rounded-[3rem] rotate-12 animate-slow-drift" />
              <div className="absolute inset-0 border border-white/5 rounded-[3rem] -rotate-6 animate-slow-drift" style={{ animationDelay: '-5s' }} />
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-red-600/20 blur-3xl animate-pulse" />
              </div>
            </div>
          </div>
          
          {/* Noise Overlay */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] pointer-events-none" />
        </div>
      </div>
    </div>
  );
};

export default IntroScreen;