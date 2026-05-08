"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronRight, MousePointer2 } from 'lucide-react';

interface IntroScreenProps {
  onEnter: () => void;
}

const IntroScreen = ({ onEnter }: IntroScreenProps) => {
  return (
    <div className="relative min-h-[80vh] w-full flex items-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-12">
        
        {/* Content Side */}
        <div className="flex flex-col justify-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-12"
          >
            <div className="space-y-6">
              <h1 className="text-7xl md:text-9xl font-bold tracking-tighter text-white leading-[0.85]">
                Neliswa <br />
                <span className="text-gradient">Mapisa</span>
              </h1>
              
              <p className="text-2xl md:text-3xl text-muted-foreground font-medium leading-tight max-w-lg">
                Bridging the gap between <span className="text-white">human empathy</span> and <span className="text-red-500">technical systems</span>.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
              <Button 
                onClick={onEnter}
                className="group h-16 px-12 text-lg rounded-full bg-red-600 hover:bg-red-700 text-white border-none red-glow transition-all duration-500"
              >
                Explore Journey
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <div className="flex items-center gap-3 text-white/40 text-sm font-medium tracking-widest uppercase">
                <MousePointer2 className="w-4 h-4 animate-bounce" />
                <span>Scroll to discover</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Visual Side */}
        <div className="hidden lg:flex relative items-center justify-center">
          <div className="relative w-full aspect-square max-w-md">
            <motion.div 
              animate={{ 
                rotate: 360,
                scale: [1, 1.05, 1],
              }}
              transition={{ 
                duration: 30, 
                repeat: Infinity, 
                ease: "linear" 
              }}
              className="absolute inset-0 rounded-full bg-gradient-to-tr from-red-600/10 via-transparent to-red-900/5 blur-[100px]"
            />
            
            {/* Floating Geometric Elements */}
            <div className="absolute inset-0 border border-white/5 rounded-[4rem] rotate-12 animate-slow-drift" />
            <div className="absolute inset-0 border border-white/5 rounded-[4rem] -rotate-6 animate-slow-drift" style={{ animationDelay: '-7s' }} />
            
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-48 h-48 rounded-full bg-red-600/10 blur-[80px] animate-pulse" />
              <div className="relative z-10 text-[15rem] font-bold text-white/[0.02] select-none">NM</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroScreen;