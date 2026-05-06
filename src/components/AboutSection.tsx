"use client";

import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <div className="space-y-12 py-12">
      <div className="space-y-4">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-4xl md:text-5xl font-bold text-white tracking-tight"
        >
          About Me
        </motion.h2>
        <div className="h-1 w-20 bg-red-600 rounded-full" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div className="space-y-8">
          <p className="text-2xl md:text-3xl font-medium text-white leading-tight">
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
        </div>

        <div className="relative group">
          <div className="absolute -inset-4 bg-red-600/10 rounded-3xl blur-2xl group-hover:bg-red-600/20 transition-all duration-500" />
          <div className="relative glass-panel rounded-3xl p-8 space-y-6 border-white/5">
            <h3 className="text-xl font-semibold text-white">The Human-Tech Intersection</h3>
            <div className="space-y-4">
              {[
                { label: "Technical Precision", value: "95%" },
                { label: "Emotional Intelligence", value: "100%" },
                { label: "Problem Solving", value: "90%" },
                { label: "User Empathy", value: "100%" }
              ].map((stat) => (
                <div key={stat.label} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">{stat.label}</span>
                    <span className="text-red-500">{stat.value}</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: stat.value }}
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
  );
};

export default AboutSection;