"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Code, Database, HeartHandshake } from 'lucide-react';

const SkillsSection = () => {
  const skillGroups = [
    {
      title: "IT Support",
      icon: Cpu,
      skills: ["System Troubleshooting", "Network Support", "Hardware Maintenance", "OS Management"]
    },
    {
      title: "Development",
      icon: Code,
      skills: ["React / TypeScript", "Node.js", "Tailwind CSS", "Python"]
    },
    {
      title: "AI & Data",
      icon: Database,
      skills: ["Prompt Engineering", "AI Tool Integration", "Supabase", "Database Design"]
    },
    {
      title: "Human-Centric",
      icon: HeartHandshake,
      skills: ["Social Work Background", "User Empathy", "Technical Training", "Conflict Resolution"]
    }
  ];

  return (
    <div className="space-y-12 py-12">
      <div className="space-y-4">
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Expertise</h2>
        <div className="h-1 w-20 bg-red-600 rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillGroups.map((group, idx) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="glass-panel p-8 rounded-3xl border-white/5 hover:border-red-500/30 transition-all duration-500 group"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-2xl bg-red-600/10 text-red-500 group-hover:scale-110 transition-transform duration-500">
                <group.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-white">{group.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span 
                  key={skill}
                  className="px-4 py-2 rounded-full bg-white/5 text-muted-foreground text-sm border border-white/5 hover:border-red-500/20 hover:text-white transition-all duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;