"use client";

import React from 'react';
import { motion } from 'framer-motion';
import CVCard from './CVCard';
import ProfileImage from './ProfileImage';
import { Heart, Shield, Users, Zap } from 'lucide-react';

const AboutSection = () => {
  const values = [
    { icon: Heart, title: "Empathy", desc: "Understanding user needs beyond the interface." },
    { icon: Shield, title: "Integrity", desc: "Building reliable, ethical digital systems." },
    { icon: Users, title: "Inclusion", desc: "Ensuring technology is accessible to everyone." },
    { icon: Zap, title: "Impact", desc: "Focusing on solutions that drive social change." }
  ];

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

      <div className="ui-panel border-white/5 bg-white/[0.01]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Image & CV */}
          <div className="lg:col-span-5 space-y-8">
            <ProfileImage />
            <CVCard />
          </div>

          {/* Right Column: Bio */}
          <div className="lg:col-span-7 space-y-8">
            <p className="text-3xl md:text-4xl font-bold text-white leading-tight tracking-tight">
              Building <span className="text-red-500">human-centered</span> digital systems.
            </p>
            
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                I'm Neliswa Mapisa — an IT professional and software developer with a social work foundation. I don't just build systems; I build bridges between technology and the humans who use it.
              </p>
              <p>
                My journey spans IT system support and software development, but what sets me apart is a deep understanding of people. As a qualified Social Worker, I approach every technical challenge with empathy, patience, and human-centred thinking.
              </p>
              <p>
                Whether troubleshooting systems or developing software, I bring both technical precision and emotional intelligence to every project, ensuring technology serves the user, not the other way around.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4">
              {values.map((val, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                  <val.icon className="w-5 h-5 text-red-500 mb-3" />
                  <h5 className="text-white font-bold text-sm mb-1">{val.title}</h5>
                  <p className="text-xs text-muted-foreground leading-relaxed">{val.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutSection;