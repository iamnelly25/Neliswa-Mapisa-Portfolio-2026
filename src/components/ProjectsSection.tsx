"use client";

import React from 'react';
import { motion } from 'from-motion';
import { ArrowUpRight, Code2, Layers, Sparkles, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProjectsSection = () => {
  const projects = [
    {
      title: "SAPS Affidavit Generator",
      description: "A specialized tool built using Dyad and Supabase to streamline the creation of structured affidavits with PDF output capabilities.",
      problem: "Manual affidavit creation is time-consuming and prone to formatting errors.",
      solution: "Automates the process with structured inputs and instant PDF generation for legal consistency.",
      tags: ["React", "Supabase", "PDF"],
      status: "Live",
      icon: Code2,
      color: "from-red-600/20",
      link: "#"
    },
    {
      title: "Community Support Portal",
      description: "A platform designed to facilitate community support and resource allocation, currently being prototyped on Lovable.",
      problem: "Communities often lack a centralized, accessible way to request and coordinate local support services.",
      solution: "Provides a streamlined interface for connecting individuals with community resources and volunteers.",
      tags: ["Lovable", "Social Impact", "Web"],
      status: "In Development",
      icon: Globe,
      color: "from-emerald-600/20",
      link: "https://lovable.dev/projects/5e557f5d-7e75-44f5-b2c5-d708442f15e7"
    },
    {
      title: "StyleLab",
      description: "A modern fashion-tech platform currently in development on the Lovable platform, focusing on personalized style discovery.",
      problem: "Users often feel overwhelmed by fashion choices that don't reflect their personal identity.",
      solution: "Leverages AI to curate personalized style recommendations that align with individual preferences.",
      tags: ["Lovable", "UI/UX", "AI"],
      status: "In Development",
      icon: Layers,
      color: "from-blue-600/20",
      link: "#"
    },
    {
      title: "AccessiGo",
      description: "An accessibility-focused platform designed to bridge the gap in digital inclusion, ensuring technology is usable by everyone.",
      problem: "Digital platforms frequently exclude users with disabilities due to poor accessibility standards.",
      solution: "Provides an inclusive framework that prioritizes accessibility as a core feature rather than an afterthought.",
      tags: ["Accessibility", "Inclusive", "Lovable"],
      status: "Coming Soon",
      icon: Sparkles,
      color: "from-purple-600/20",
      link: "#"
    }
  ];

  return (
    <div className="space-y-24">
      <div className="space-y-4">
        <h2 className="text-xs font-bold text-red-500 uppercase tracking-[0.5em]">The Portfolio</h2>
        <h3 className="text-6xl md:text-8xl font-bold text-white tracking-tighter leading-[0.9]">
          Selected <br />
          <span className="text-gradient">Works.</span>
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="ui-card group flex flex-col h-full relative overflow-hidden"
          >
            {/* Background Glow */}
            <div className={`absolute inset-0 bg-gradient-to-br ${project.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

            <div className="relative z-10 flex flex-col h-full">
              <div className="flex justify-between items-start mb-10">
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-red-500/50 transition-all duration-500">
                  <project.icon className="w-7 h-7 text-red-500" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1.5 rounded-full bg-white/5 text-muted-foreground border border-white/5">
                  {project.status}
                </span>
              </div>

              <div className="flex-1 space-y-8">
                <div className="space-y-4">
                  <h4 className="text-3xl font-bold text-white group-hover:text-red-500 transition-colors duration-500">
                    {project.title}
                  </h4>
                  <p className="text-muted-foreground text-lg leading-relaxed font-medium">
                    {project.description}
                  </p>
                </div>

                <div className="space-y-6 pt-4 border-t border-white/5">
                  <div className="space-y-2">
                    <p className="text-[10px] font-bold text-red-500 uppercase tracking-widest">Problem Statement</p>
                    <p className="text-sm text-white/70 leading-relaxed">{project.problem}</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-[10px] font-bold text-red-500 uppercase tracking-widest">Solution</p>
                    <p className="text-sm text-white/70 leading-relaxed">{project.solution}</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-white/5 flex items-center justify-between">
                <div className="flex flex-wrap gap-3">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] text-white/40 font-bold uppercase tracking-widest">#{tag}</span>
                  ))}
                </div>
                <Button 
                  asChild
                  variant="ghost" 
                  size="icon" 
                  className="w-12 h-12 rounded-full bg-white/5 hover:bg-red-600 hover:text-white transition-all duration-500"
                >
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;