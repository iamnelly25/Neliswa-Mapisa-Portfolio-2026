"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Home,
  User, 
  Code2, 
  Briefcase, 
  Mail,
  Github,
  Linkedin,
  Hexagon,
  History
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface AppLayoutProps {
  children: React.ReactNode;
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const AppLayout = ({ children, activeSection, setActiveSection }: AppLayoutProps) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'experience', label: 'Journey', icon: History },
    { id: 'projects', label: 'Works', icon: Briefcase },
    { id: 'skills', label: 'Expertise', icon: Code2 },
    { id: 'contact', label: 'Connect', icon: Mail },
  ];

  const topNavItems = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Let’s Connect' },
  ];

  return (
    <div className="flex min-h-screen bg-black">
      {/* 1. LEFT SIDEBAR NAVIGATION (Icons) */}
      <aside className="fixed left-0 top-0 bottom-0 w-20 md:w-24 border-r border-white/5 bg-black/40 backdrop-blur-3xl z-[100] flex flex-col items-center py-10">
        <div className="mb-12">
          <div 
            onClick={() => setActiveSection('home')}
            className="w-12 h-12 rounded-xl bg-red-600/10 flex items-center justify-center border border-red-500/20 group cursor-pointer hover:bg-red-600/20 transition-all duration-500"
          >
            <Hexagon className="w-6 h-6 text-red-500 fill-red-500/20 group-hover:scale-110 transition-transform duration-500" />
          </div>
        </div>

        <nav className="flex-1 flex flex-col gap-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={cn(
                "group relative p-3.5 rounded-xl transition-all duration-500",
                activeSection === item.id 
                  ? "bg-red-600/10 text-red-500" 
                  : "text-muted-foreground hover:text-white hover:bg-white/5"
              )}
            >
              <item.icon className="w-5 h-5" />
              
              {/* Premium Tooltip */}
              <span className="absolute left-full ml-4 px-3 py-1.5 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-lg text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-500 translate-x-[-10px] group-hover:translate-x-0 whitespace-nowrap z-50">
                {item.label}
              </span>

              {activeSection === item.id && (
                <motion.div 
                  layoutId="activeNav"
                  className="absolute left-0 top-1/4 bottom-1/4 w-0.5 bg-red-500 rounded-full red-glow"
                />
              )}
            </button>
          ))}
        </nav>

        <div className="flex flex-col gap-5 mt-auto">
          <a href="https://github.com/iamnelly25" target="_blank" rel="noopener noreferrer" className="p-2.5 text-muted-foreground hover:text-red-500 transition-all duration-500 hover:scale-110">
            <Github className="w-4 h-4" />
          </a>
          <a href="https://www.linkedin.com/in/neliswa-mapisa-41a09727a" target="_blank" rel="noopener noreferrer" className="p-2.5 text-muted-foreground hover:text-red-500 transition-all duration-500 hover:scale-110">
            <Linkedin className="w-4 h-4" />
          </a>
        </div>
      </aside>

      {/* 2. TOP HEADER NAVIGATION (Text Only) */}
      <header className={cn(
        "fixed top-0 left-20 md:left-24 right-0 h-20 z-[90] transition-all duration-500 flex items-center justify-end px-8 md:px-16",
        isScrolled ? "bg-black/60 backdrop-blur-xl border-b border-white/5" : "bg-transparent"
      )}>
        <nav className="flex items-center gap-10">
          {topNavItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={cn(
                "text-[11px] font-bold uppercase tracking-[0.3em] transition-all duration-300 hover:text-red-500",
                activeSection === item.id ? "text-red-500" : "text-white/60"
              )}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 ml-20 md:ml-24 pt-20">
        <div className="max-w-7xl mx-auto p-8 md:p-16 lg:p-24">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
};

export default AppLayout;