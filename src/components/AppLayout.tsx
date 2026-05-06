"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
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
  const navItems = [
    { id: 'about', label: 'About', icon: User },
    { id: 'experience', label: 'Experience', icon: History },
    { id: 'skills', label: 'Skills', icon: Code2 },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  return (
    <div className="flex min-h-screen bg-black">
      {/* Persistent Sidebar */}
      <aside className="fixed left-0 top-0 bottom-0 w-20 md:w-24 border-r border-white/5 bg-black/50 backdrop-blur-xl z-50 flex flex-col items-center py-10">
        <div className="mb-12">
          <div className="w-12 h-12 rounded-2xl bg-red-600/10 flex items-center justify-center border border-red-500/20">
            <Hexagon className="w-6 h-6 text-red-500 fill-red-500/20" />
          </div>
        </div>

        <nav className="flex-1 flex flex-col gap-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={cn(
                "group relative p-4 rounded-2xl transition-all duration-300",
                activeSection === item.id 
                  ? "bg-red-600/10 text-red-500" 
                  : "text-muted-foreground hover:text-white hover:bg-white/5"
              )}
            >
              <item.icon className="w-6 h-6" />
              {/* Tooltip */}
              <span className="absolute left-full ml-4 px-3 py-1.5 bg-white/10 backdrop-blur-md border border-white/10 rounded-lg text-xs font-medium opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-50">
                {item.label}
              </span>
              {activeSection === item.id && (
                <motion.div 
                  layoutId="activeNav"
                  className="absolute left-0 top-1/4 bottom-1/4 w-1 bg-red-500 rounded-full"
                />
              )}
            </button>
          ))}
        </nav>

        <div className="flex flex-col gap-4 mt-auto">
          <a href="https://github.com/iamnelly25" target="_blank" rel="noreferrer" className="p-3 text-muted-foreground hover:text-white transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/neliswa-mapisa-41a09727a/" target="_blank" rel="noreferrer" className="p-3 text-muted-foreground hover:text-white transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 ml-20 md:ml-24 p-6 md:p-12 lg:p-20">
        <div className="max-w-6xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
};

export default AppLayout;