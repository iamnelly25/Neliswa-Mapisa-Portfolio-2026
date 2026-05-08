"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar, ArrowRight } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Candidate IT System Support",
      company: "CAPACITI Programme",
      period: "Current",
      description: "Bridging the gap between technical infrastructure and user needs. Specializing in system troubleshooting, maintenance, and the transition into full-stack software development."
    },
    {
      title: "Masters in Counselling Psychology",
      company: "Academic Training",
      period: "2025 (In Progress)",
      description: "Deepening my understanding of human behavior and therapeutic frameworks to better design human-centric digital solutions."
    },
    {
      title: "Provincial Facilitator",
      company: "SANAC (South African National AIDS Council)",
      period: "2023 – 2024",
      description: "Coordinating large-scale public health initiatives. Managing stakeholders and facilitating community engagement across Cape Town."
    },
    {
      title: "Social Work Intern",
      company: "Department of Social Development",
      period: "2020 – 2022",
      description: "Managing complex cases and community interventions. Developing the empathy and problem-solving skills that now define my technical approach."
    },
    {
      title: "School Social Worker",
      company: "Government School, Eastern Cape",
      period: "2019 – 2020",
      description: "Providing psychosocial support in high-pressure environments. Supporting learner wellbeing through structured intervention planning."
    }
  ];

  const education = [
    { degree: "Bachelor of Social Work", school: "University Level" },
    { degree: "Honours in Counselling Psychology", school: "University Level" }
  ];

  return (
    <div className="space-y-24">
      <div className="space-y-4">
        <h2 className="text-xs font-bold text-red-500 uppercase tracking-[0.5em]">The Journey</h2>
        <h3 className="text-6xl md:text-8xl font-bold text-white tracking-tighter leading-[0.9]">
          Experience <br />
          <span className="text-gradient">& Education.</span>
        </h3>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
        {/* Experience Timeline */}
        <div className="lg:col-span-8 space-y-16">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-12 rounded-2xl bg-red-600/10 flex items-center justify-center">
              <Briefcase className="w-6 h-6 text-red-500" />
            </div>
            <h4 className="text-2xl font-bold text-white">Professional Path</h4>
          </div>
          
          <div className="space-y-20 relative before:absolute before:left-[23px] before:top-4 before:bottom-4 before:w-[1px] before:bg-gradient-to-b before:from-red-500/50 before:via-white/10 before:to-transparent">
            {experiences.map((exp, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative pl-16 group"
              >
                <div className="absolute left-0 top-1 w-12 h-12 rounded-full bg-black border border-white/10 group-hover:border-red-500 transition-all duration-500 z-10 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-white/20 group-hover:bg-red-500 group-hover:scale-150 transition-all duration-500" />
                </div>
                
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <h5 className="text-2xl font-bold text-white group-hover:text-red-500 transition-colors duration-500">{exp.title}</h5>
                    <span className="text-xs font-bold text-muted-foreground bg-white/5 px-4 py-1.5 rounded-full border border-white/5 tracking-widest uppercase">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-lg font-bold text-red-500/60 tracking-wide">{exp.company}</p>
                  <p className="text-muted-foreground leading-relaxed text-lg max-w-2xl">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education & Philosophy */}
        <div className="lg:col-span-4 space-y-12">
          <div className="space-y-12">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-red-600/10 flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-red-500" />
              </div>
              <h4 className="text-2xl font-bold text-white">Education</h4>
            </div>

            <div className="space-y-6">
              {education.map((edu, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-red-500/20 transition-all duration-500 group"
                >
                  <p className="text-xl font-bold text-white group-hover:text-red-500 transition-colors">{edu.degree}</p>
                  <div className="flex items-center gap-2 mt-2 text-muted-foreground">
                    <ArrowRight className="w-4 h-4 text-red-500" />
                    <span className="text-sm font-medium uppercase tracking-widest">Degree Awarded</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="p-10 rounded-[2.5rem] bg-red-600/5 border border-red-500/10 relative overflow-hidden group">
            <div className="absolute -right-8 -bottom-8 opacity-[0.03] group-hover:scale-110 transition-transform duration-1000">
              <GraduationCap className="w-48 h-48 text-white" />
            </div>
            <p className="text-xl text-white/80 italic leading-relaxed relative z-10">
              "My academic background in psychology provides the foundation for my human-centered approach to technical systems."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;