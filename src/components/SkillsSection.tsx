"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Code, Database, HeartHandshake, Sparkles, ShieldCheck, Terminal } from 'lucide-react';

const SkillsSection = () => {
  const skillGroups = [
    {
      title: "AI & Innovation",
      icon: Sparkles,
      skills: ["AI Prompt Engineering", "AI Tool Integration", "LLM Optimization", "Future-Tech Research"]
    },
    {
      title: "Technical Systems",
      icon: Terminal,
      skills: ["System Support", "IT Infrastructure", "Network Troubleshooting", "Hardware Maintenance"]
    },
    {
      title: "Development",
      icon: Code,
      skills: ["Software Development", "React / TypeScript", "Node.js", "Tailwind CSS", "Supabase"]
    },
    {
      title: "Human-Centered",
      icon: HeartHandshake,
      skills: ["Human-Centered Design", "User Empathy", "Psychological Frameworks", "Social Impact Strategy"]
    }
  ];

  return (
    <div className="space-y-24">
      <div className="space-y-4">
        <h2 className="text-xs font-bold text-red-500 uppercase tracking-[0.5em]">The Toolkit</h2>
        <h3 className="text-6xl md:text-8xl font-bold text-white tracking-tighter leading-[0.9]">
          Expertise <br />
          <span className="text-gradient">& Skills.</span>
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillGroups.map((group, idx) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="glass-panel p-10 rounded-[2.5rem] border-white/5 hover:border-red-500/30 transition-all duration-700 group"
          >
            <div className="flex items-center gap-5 mb-10">
              <div className="p-4 rounded-2xl bg-red-600/10 text-red-500 group-hover:scale-110 transition-transform duration-500">
                <group.icon className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-white">{group.title}</h3>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {group.skills.map((skill) => (
                <span 
                  key={skill}
                  className="px-5 py-2.5 rounded-full bg-white/[0.03] text-muted-foreground text-sm font-medium border border-white/5 hover:border-red-500/40 hover:bg-red-600/10 hover:text-white transition-all duration-300 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Philosophy Card */}
      <div className="p-12 rounded-[3rem] bg-red-600/5 border border-red-500/10 relative overflow-hidden group">
        <div className="absolute -right-10 -bottom-10 opacity-[0.02] group-hover:scale-110 transition-transform duration-1000">
          <ShieldCheck className="w-64 h-64 text-white" />
        </div>
        <div className="relative z-10 max-w-3xl">
          <p className="text-2xl md:text-3xl text-white font-bold leading-tight mb-6">
            "My technical skills are amplified by my <span className="text-red-500">social work background</span>, allowing me to build systems that are as intuitive as they are powerful."
          </p>
          <div className="h-1 w-20 bg-red-600 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;