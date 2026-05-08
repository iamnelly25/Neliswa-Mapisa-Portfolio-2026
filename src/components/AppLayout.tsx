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
  History,
  Sparkles
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
    { id: 'experience', label: 'Journey', icon: History },
    { id: 'skills', label: 'Expertise', icon: Code2 },
    { id: 'projects', label: 'Works', icon: Briefcase },
    { id: 'contact', label: 'Connect', icon: Mail },
  ];

  return (
    <div className="flex min-h-screen bg-black">
      {/* Premium Sidebar */}
      <aside className="fixed left-0 top-0 bottom-0 w-20 md:w-28 border-r border-white/5 bg-black/40 backdrop-blur-3xl z-50 flex flex-col items-center py-12">
        <div className="mb-16">
          <div className="w-14 h-14 rounded-2xl bg-red-600/10 flex items-center justify-center border border-red-500/20 group cursor-pointer">
            <Hexagon className="w-7 h-7 text-red-500 fill-red-500/20 group-hover:scale-110 transition-transform duration-500" />
          </div>
        </div>

        <nav className="flex-1 flex flex-col gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={cn(
                "group relative p-4 rounded-2xl transition-all duration-500",
                activeSection === item.id 
                  ? "bg-red-600/10 text-red-500" 
                  : "text-muted-foreground hover:text-white hover:bg-white/5"
              )}
            >
              <item.icon className="w-6 h-6" />
              
              {/* Premium Tooltip */}
              <span className="absolute left-full ml-6 px-4 py-2 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-xl text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-500 translate-x-[-10px] group-hover:translate-x-0 whitespace-nowrap z-50">
                {item.label}
              </span>

              {activeSection === item.id && (
                <motion.div 
                  layoutId="activeNav"
                  className="absolute left-0 top-1/4 bottom-1/4 w-1 bg-red-500 rounded-full red-glow"
                />
              )}
            </button>
          ))}
        </nav>

        <div className="flex flex-col gap-6 mt-auto">
          <a href="https://github.com/iamnelly25" target="_blank" rel="noreferrer" className="p-3 text-muted-foreground hover:text-red-500 transition-all duration-500 hover:scale-110">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/neliswa-mapisa-41a09727a/" target="_blank" rel="noreferrer" className="p-3 text-muted-foreground hover:text-red-500 transition-all duration-500 hover:scale-110">
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 ml-20 md:ml-28 p-8 md:p-16 lg:p-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {children}
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default AppLayout;