"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

interface IntroScreenProps {
  onEnter: () => void;
}

const IntroScreen = ({ onEnter }: IntroScreenProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20 }}
      className="relative h-screen w-full flex flex-col items-center justify-center text-center px-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="space-y-6"
      >
        <div className="space-y-2">
          <motion.h1 
            initial={{ letterSpacing: "0.2em", opacity: 0 }}
            animate={{ letterSpacing: "0.05em", opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-white"
          >
            Neliswa Mapisa
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="text-muted-foreground text-lg md:text-xl font-medium uppercase tracking-widest"
          >
            IT System Support | AI Enthusiast | Software Developer
          </motion.p>
        </div>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="text-white/60 italic text-lg"
        >
          "Technology with a human touch."
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2, duration: 0.5 }}
        >
          <Button 
            onClick={onEnter}
            variant="outline"
            className="group relative overflow-hidden border-red-900/50 bg-transparent hover:bg-red-950/20 text-white px-8 py-6 text-lg rounded-full transition-all duration-500 hover:border-red-500 hover:red-glow"
          >
            <span className="relative z-10 flex items-center gap-2">
              Enter Portfolio
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </Button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default IntroScreen;