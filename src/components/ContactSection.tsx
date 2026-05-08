"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CVCard from './CVCard';

const ContactSection = () => {
  const contacts = [
    {
      label: "Email",
      value: "neliswamapisa@outlook.com",
      icon: Mail,
      link: "mailto:neliswamapisa@outlook.com"
    },
    {
      label: "LinkedIn",
      value: "Neliswa Mapisa",
      icon: Linkedin,
      link: "https://www.linkedin.com/in/neliswa-mapisa-41a09727a"
    },
    {
      label: "GitHub",
      value: "iamnelly25",
      icon: Github,
      link: "https://github.com/iamnelly25"
    }
  ];

  return (
    <div className="space-y-24">
      <div className="space-y-4">
        <h2 className="text-xs font-bold text-red-500 uppercase tracking-[0.5em]">The Connection</h2>
        <h3 className="text-6xl md:text-8xl font-bold text-white tracking-tighter leading-[0.9]">
          Let's <br />
          <span className="text-gradient">Connect.</span>
        </h3>
      </div>

      <div className="glass-panel p-12 md:p-20 red-glow-subtle relative overflow-hidden">
        <div className="absolute top-0 right-0 p-12 opacity-[0.02]">
          <Sparkles className="w-64 h-64 text-white" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 relative z-10">
          <div className="space-y-12">
            <p className="text-4xl font-bold text-white leading-tight tracking-tight">
              I'm always open to discussing <span className="text-red-500">new projects</span>, creative ideas, or opportunities to be part of your visions.
            </p>
            
            <div className="space-y-6">
              {contacts.map((contact) => (
                <a 
                  key={contact.label}
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-6 p-6 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-red-500/40 hover:bg-white/[0.04] transition-all duration-500 group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-red-600/10 flex items-center justify-center text-red-500 group-hover:scale-110 transition-transform duration-500">
                    <contact.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <p className="text-[10px] text-muted-foreground uppercase tracking-[0.3em] font-bold mb-1">{contact.label}</p>
                    <p className="text-lg text-white font-bold">{contact.value}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-red-500 group-hover:translate-x-2 transition-all duration-500" />
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-center items-center text-center p-12 rounded-[3rem] bg-red-600/5 border border-red-500/10">
            <div className="space-y-8">
              <div className="w-24 h-24 rounded-full bg-red-600/20 flex items-center justify-center mx-auto animate-pulse">
                <Mail className="w-10 h-10 text-red-500" />
              </div>
              <div className="space-y-4">
                <h4 className="text-3xl font-bold text-white">Start a Conversation</h4>
                <p className="text-muted-foreground text-lg max-w-xs mx-auto font-medium">
                  Based in South Africa, available for remote opportunities worldwide.
                </p>
              </div>
              <Button 
                asChild
                className="w-full h-16 rounded-2xl bg-red-600 hover:bg-red-700 text-white text-lg font-bold red-glow transition-all duration-500"
              >
                <a href="mailto:neliswamapisa@outlook.com">
                  Send an Email
                </a>
              </Button>
              
              <div className="pt-8">
                <CVCard variant="compact" className="bg-transparent border-none p-0" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;