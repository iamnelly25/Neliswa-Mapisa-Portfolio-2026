"use client";

import React from 'react';
import { motion } from 'framer-motion';
import CVCard from './CVCard';

const AboutSection = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-12"
    >
      <div className="space-y-2">
        <h2 className="text-sm font-bold text-red-500 uppercase tracking-[0.3em]">Identity</h2>
        <h3 className="text-4xl md:text-6xl font-bold text-white tracking-tighter">About Me</h3>
      </div>

      <div className="ui-panel red-glow-subtle">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Image & CV */}
          <div className="lg:col-span-5 space-y-8">
            <div className="relative group aspect-square overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5">
              <motion.img 
                src="/profile.jpg" 
                alt="Neliswa Mapisa" 
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
              />
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-red-500/50 rounded-[2.5rem] transition-all duration-500 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            
            <CVCard />
          </div>

          {/* Right Column: Bio & Stats */}
          <div className="lg:col-span-7 space-y-8">
            <p className="text-3xl md:text-4xl font-bold text-white leading-tight tracking-tight">
              Technology with a <span className="text-red-500">human touch.</span>
            </p>
            
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                I'm Neliswa Mapisa — an IT professional, AI enthusiast, and software developer with a genuine heart for people. I don't just build systems; I build bridges between technology and the humans who use it.
              </p>
              <p>
                My journey spans IT system support, AI prompt engineering, and software development — but what sets me apart is a deep understanding of people. I am also a qualified Social Worker, and that shapes how I approach every technical challenge with empathy, patience, and human-centred thinking.
              </p>
              <p>
                Whether troubleshooting systems, building AI tools, or developing software, I bring both technical precision and emotional intelligence to every project.
              </p>
              <p>
                Based in South Africa, I am passionate about using technology for empowerment and real-world impact.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/5 space-y-6">
              <h4 className="text-white font-semibold uppercase tracking-wider text-xs">Core Philosophy</h4>
              <div className="space-y-4">
                {[
                  { label: "Empathy-Driven Support", value: 100 },
                  { label: "Technical Precision", value: 95 },
                  { label: "AI Integration", value: 90 },
                  { label: "Human-Centric Design", value: 100 }
                ].map((item) => (
                  <div key={item.label} className="space-y-2">
                    <div className="flex justify-between text-xs font-medium">
                      <span className="text-muted-foreground">{item.label}</span>
                      <span className="text-red-500">{item.value}%</span>
                    </div>
                    <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${item.value}%` }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                        className="h-full bg-red-600"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutSection;