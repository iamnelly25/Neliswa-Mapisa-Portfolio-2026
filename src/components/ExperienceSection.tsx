"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Candidate IT System Support",
      company: "CAPACITI Programme",
      period: "Current",
      description: "Training and practical work in IT systems support. Assisting with troubleshooting, technical support, and system maintenance. Developing skills in software systems, IT infrastructure, and user support environments. Transitioning into software and systems development."
    },
    {
      title: "Masters in Counselling Psychology (In Progress)",
      company: "Academic Training",
      period: "2025",
      description: "Advanced academic training in counselling psychology. Focus on mental health, human behaviour, and therapeutic practice. Developing deeper understanding of psychological support frameworks."
    },
    {
      title: "Provincial Facilitator (Cape Town)",
      company: "SANAC (South African National AIDS Council)",
      period: "2023 – 2024",
      description: "Facilitated provincial programmes focused on HIV/AIDS awareness and prevention. Worked with communities, NGOs, and government stakeholders. Coordinated workshops, outreach programmes, and community engagement initiatives. Supported public health education and advocacy efforts."
    },
    {
      title: "Social Work Intern",
      company: "Department of Social Development",
      period: "2020 – 2022",
      description: "Assisted with case management processes and community interventions. Supported vulnerable individuals and families through structured social work services. Participated in fieldwork assessments, reports, and intervention planning. Gained experience in public sector social service delivery."
    },
    {
      title: "School Social Worker",
      company: "Government School, Eastern Cape",
      period: "2019 – 2020",
      description: "Provided psychosocial support to learners in a school environment. Worked closely with teachers and parents to address behavioural and emotional challenges. Supported learners facing social and family-related difficulties. Contributed to learner wellbeing and school support systems."
    }
  ];

  const education = [
    { degree: "Bachelor of Social Work" },
    { degree: "Honours in Counselling Psychology" }
  ];

  return (
    <div className="space-y-16">
      <div className="space-y-2">
        <h2 className="text-sm font-bold text-red-500 uppercase tracking-[0.3em]">Journey</h2>
        <h3 className="text-4xl md:text-6xl font-bold text-white tracking-tighter">Experience & Education</h3>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Experience Column */}
        <div className="lg:col-span-8 space-y-8">
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="w-5 h-5 text-red-500" />
            <h4 className="text-xl font-bold text-white">Professional Path</h4>
          </div>
          
          <div className="space-y-12 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[1px] before:bg-white/10">
            {experiences.map((exp, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative pl-10 group"
              >
                <div className="absolute left-0 top-1.5 w-[23px] h-[23px] rounded-full bg-black border border-white/20 group-hover:border-red-500 transition-colors z-10 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-red-500 transition-colors" />
                </div>
                
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h5 className="text-lg font-bold text-white group-hover:text-red-500 transition-colors">{exp.title}</h5>
                    <span className="text-xs font-medium text-muted-foreground bg-white/5 px-3 py-1 rounded-full border border-white/5">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-red-500/80">{exp.company}</p>
                  <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education Column */}
        <div className="lg:col-span-4 space-y-8">
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="w-5 h-5 text-red-500" />
            <h4 className="text-xl font-bold text-white">Education</h4>
          </div>

          <div className="space-y-4">
            {education.map((edu, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-red-500/20 transition-all"
              >
                <p className="text-white font-bold">{edu.degree}</p>
                <p className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">Degree Awarded</p>
              </motion.div>
            ))}
          </div>

          <div className="p-8 rounded-3xl bg-red-600/5 border border-red-500/10 mt-12">
            <p className="text-sm text-muted-foreground italic leading-relaxed">
              "My academic background in social work and psychology provides the foundation for my human-centered approach to technical systems."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;