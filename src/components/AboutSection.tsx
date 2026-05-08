"use client";

import React from 'react';
import { motion } from 'framer-motion';
import CVCard from './CVCard';
import ProfileImage from './ProfileImage';
import { Heart, Shield, Users, Zap, Quote } from 'lucide-react';

const AboutSection = () => {
  const values = [
    { icon: Heart, title: "Empathy", desc: "Understanding user needs beyond the interface." },
    { icon: Shield, title: "Integrity", desc: "Building reliable, ethical digital systems." },
    { icon: Users, title: "Inclusion", desc: "Ensuring technology is accessible to everyone." },
    { icon: Zap, title: "Impact", desc: "Focusing on solutions that drive social change." }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-24"
    >
      <div className="space-y-4">
        <h2 className="text-xs font-bold text-red-500 uppercase tracking-[0.5em]">The Narrative</h2>
        <h3 className="text-6xl md:text-8xl font-bold text-white tracking-tighter leading-[0.9]">
          Human-Centered <br />
          <span className="text-gradient">By Design.</span>
        </h3>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
        {/* Visual Column */}
        <div className="lg:col-span-5 space-y-12">
          <ProfileImage />
          <div className="hidden lg:block">
            <CVCard variant="compact" />
          </div>
        </div>

        {/* Story Column */}
        <div className="lg:col-span-7 space-y-12">
          <div className="space-y-8">
            <div className="relative">
              <Quote className="absolute -top-8 -left-8 w-16 h-16 text-red-500/10" />
              <p className="text-3xl md:text-4xl font-bold text-white leading-tight tracking-tight relative z-10">
                I don't just build systems; I build <span className="text-red-500">bridges</span> between technology and the humans who use it.
              </p>
            </div>
            
            <div className="space-y-6 text-muted-foreground text-xl leading-relaxed font-medium">
              <p>
                I'm Neliswa Mapisa — an IT professional and software developer with a deep-rooted foundation in social work. My journey is defined by a unique intersection of technical precision and emotional intelligence.
              </p>
              <p>
                As a qualified Social Worker, I approach every technical challenge with empathy and patience. Whether I'm troubleshooting complex IT infrastructure or developing accessible software, my goal is always the same: ensuring technology serves the user, not the other way around.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((val, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:border-red-500/30 transition-all duration-500 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-red-600/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <val.icon className="w-6 h-6 text-red-500" />
                </div>
                <h5 className="text-white font-bold text-lg mb-2">{val.title}</h5>
                <p className="text-sm text-muted-foreground leading-relaxed">{val.desc}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="lg:hidden">
            <CVCard />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutSection;