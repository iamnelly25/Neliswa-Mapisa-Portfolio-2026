"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
    <div className="space-y-12 py-12">
      <div className="space-y-4">
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Let’s Connect</h2>
        <div className="h-1 w-20 bg-red-600 rounded-full" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <p className="text-xl text-muted-foreground leading-relaxed">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Whether you have a technical challenge or just want to say hi, feel free to reach out.
          </p>
          
          <div className="space-y-4">
            {contacts.map((contact) => (
              <a 
                key={contact.label}
                href={contact.link}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-6 p-6 glass-panel rounded-2xl border-white/5 hover:border-red-500/30 hover:red-glow transition-all duration-500 group"
              >
                <div className="p-4 rounded-xl bg-red-600/10 text-red-500 group-hover:scale-110 transition-transform duration-500">
                  <contact.icon className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground uppercase tracking-widest font-bold">{contact.label}</p>
                  <p className="text-lg text-white font-medium">{contact.value}</p>
                </div>
                <ArrowRight className="ml-auto w-5 h-5 text-muted-foreground group-hover:text-red-500 group-hover:translate-x-2 transition-all" />
              </a>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-red-600/5 blur-3xl rounded-full" />
          <div className="relative glass-panel rounded-[2.5rem] p-12 border-white/5 flex flex-col items-center text-center space-y-8">
            <div className="w-24 h-24 rounded-full bg-red-600/20 flex items-center justify-center">
              <Mail className="w-10 h-10 text-red-500" />
            </div>
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-white">Start a Conversation</h3>
              <p className="text-muted-foreground">
                Based in South Africa, available for remote opportunities worldwide.
              </p>
            </div>
            <Button 
              asChild
              className="w-full py-8 text-lg rounded-2xl bg-red-600 hover:bg-red-700 text-white red-glow transition-all duration-500"
            >
              <a href="mailto:neliswamapisa@outlook.com">
                Send an Email
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;