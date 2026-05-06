"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProjectsSection = () => {
  const projects = [
    {
      title: "SAPS Affidavit Generator",
      description: "A specialized tool built using Dyad and Supabase to streamline the creation of structured affidavits with PDF output capabilities.",
      tags: ["React", "Supabase", "PDF Generation"],
      status: "Live",
      link: "#"
    },
    {
      title: "StyleLab",
      description: "A modern fashion-tech platform currently in development on the Lovable platform, focusing on personalized style discovery.",
      tags: ["Lovable", "UI/UX", "AI"],
      status: "Coming Soon",
      link: "#"
    },
    {
      title: "AccessiGo",
      description: "An accessibility-focused platform designed to bridge the gap in digital inclusion, ensuring technology is usable by everyone regardless of ability.",
      tags: ["Accessibility", "Inclusive Design", "Lovable"],
      status: "Coming Soon",
      link: "#"
    }
  ];

  return (
    <div className="space-y-12 py-12">
      <div className="space-y-4">
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Selected Works</h2>
        <div className="h-1 w-20 bg-red-600 rounded-full" />
      </div>

      <div className="grid grid-cols-1 gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2 }}
            className="group relative glass-panel rounded-[2rem] overflow-hidden border-white/5 hover:border-red-500/30 transition-all duration-700"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="relative p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1 space-y-6">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-red-600/10 text-red-500 text-xs font-bold uppercase tracking-wider border border-red-500/20">
                    {project.status}
                  </span>
                  <div className="flex gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs text-muted-foreground">#{tag}</span>
                    ))}
                  </div>
                </div>

                <h3 className="text-3xl font-bold text-white group-hover:text-red-500 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl">
                  {project.description}
                </p>

                <Button 
                  variant="outline" 
                  className="border-white/10 bg-white/5 hover:bg-red-600 hover:text-white hover:border-red-600 rounded-full px-8 transition-all duration-300 group/btn"
                >
                  View Project
                  <ArrowUpRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                </Button>
              </div>

              <div className="w-full md:w-1/3 aspect-video md:aspect-square rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-105 transition-transform duration-700 overflow-hidden relative">
                <div className="absolute inset-0 bg-red-600/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <Code2 className="w-16 h-16 text-white/10 group-hover:text-red-500/20 transition-colors duration-700" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

import { Code2 } from 'lucide-react';
export default ProjectsSection;