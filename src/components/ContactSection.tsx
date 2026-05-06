"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, ArrowRight, Globe } from 'lucide-react';
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
      link: "https://www.linkedin.com/in/neliswa-mapisa-41a09727a/"
    },
    {
      label: "GitHub",
      value: "iamnelly25",
      icon: Github,
      link: "https://github.com/iamnelly25"
    }
  ];

  return (
    <div className="space-y-12">
      <div className="space-y-2">
        <h2 className="text-sm font-bold text-red-500 uppercase tracking-[0.3em]">Connection</h2>
        <h3 className="text-4xl md:text-6xl font-bold text-white tracking-tighter">Let’s Connect</h3>
      </div>

      <div className="ui-panel red-glow-subtle">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <p className="text-2xl text-white font-medium leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
            
            <div className="space-y-4">
              {contacts.map((contact) => (
                <a 
                  key={contact.label}
                  href={contact.link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-red-500/30 hover:bg-white/[0.04] transition-all group"
                >
                  <div className="p-3 rounded-xl bg-red-600/10 text-red-500 group-hover:scale-110 transition-transform">
                    <contact.icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-bold">{contact.label}</p>
                    <p className="text-sm text-white font-medium">{contact.value}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-red-500 group-hover:translate-x-1 transition-all" />
                </a>
              ))}
              
              <div className="pt-4">
                <CVCard variant="compact" />
              </div>
            </div>
          </div>

          <div className="relative flex flex-col justify-center items-center text-center p-12 rounded-[2rem] bg-red-600/5 border border-red-500/10 overflow-hidden">
            <div className="absolute top-0 right-0 p-6">
              <Globe className="w-20 h-20 text-red-500/10" />
            </div>
            
            <div className="relative z-10 space-y-6">
              <div className="w-20 h-20 rounded-full bg-red-600/20 flex items-center justify-center mx-auto">
                <Mail className="w-8 h-8 text-red-500" />
              </div>
              <div className="space-y-2">
                <h4 className="text-2xl font-bold text-white">Start a Conversation</h4>
                <p className="text-muted-foreground text-sm max-w-[250px] mx-auto">
                  Based in South Africa, available for remote opportunities worldwide.
                </p>
              </div>
              <Button 
                asChild
                className="w-full h-14 rounded-xl bg-red-600 hover:bg-red-700 text-white red-glow transition-all"
              >
                <a href="mailto:neliswamapisa@outlook.com">
                  Send an Email
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;