"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Code2, Layers } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProjectsSection = () => {
  const projects = [
    {
      title: "SAPS Affidavit Generator",
      description: "A specialized tool built using Dyad and Supabase to streamline the creation of structured affidavits with PDF output capabilities.",
      tags: ["React", "Supabase", "PDF"],
      status: "Live",
      icon: Code2
    },
    {
      title: "StyleLab",
      description: "A modern fashion-tech platform currently in development on the Lovable platform, focusing on personalized style discovery.",
      tags: ["Lovable", "UI/UX", "AI"],
      status: "Coming Soon",
      icon: Layers
    },
    {
      title: "AccessiGo",
      description: "An accessibility-focused platform designed to bridge the gap in digital inclusion, ensuring technology is usable by everyone.",
      tags: ["Accessibility", "Inclusive", "Lovable"],
      status: "Coming Soon",
      icon: Code2
    }
  ];

  return (
    <div className="space-y-12">
      <div className="space-y-2">
        <h2 className="text-sm font-bold text-red-500 uppercase tracking-[0.3em]">Portfolio</h2>
        <h3 className="text-4xl md:text-6xl font-bold text-white tracking-tighter">Selected Works</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, idx) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="ui-card group flex flex-col h-full"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 rounded-xl bg-red-600/10 text-red-500">
                <project.icon className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded bg-white/5 text-muted-foreground border border-white/5">
                {project.status}
              </span>
            </div>

            <div className="flex-1 space-y-4">
              <h4 className="text-xl font-bold text-white group-hover:text-red-500 transition-colors">
                {project.title}
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {project.description}
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
              <div className="flex gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[10px] text-white/40 font-medium">#{tag}</span>
                ))}
              </div>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-red-600 hover:text-white transition-all">
                <ArrowUpRight className="w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;