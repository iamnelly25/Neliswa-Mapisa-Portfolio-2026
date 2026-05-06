"use client";

import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import GlowBackground from '@/components/GlowBackground';
import IntroScreen from '@/components/IntroScreen';
import AppLayout from '@/components/AppLayout';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  const [hasEntered, setHasEntered] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  const renderSection = () => {
    switch (activeSection) {
      case 'about':
        return <AboutSection />;
      case 'skills':
        return <SkillsSection />;
      case 'projects':
        return <ProjectsSection />;
      case 'contact':
        return <ContactSection />;
      default:
        return <AboutSection />;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-red-500/30">
      <GlowBackground />
      
      <AnimatePresence mode="wait">
        {!hasEntered ? (
          <IntroScreen key="intro" onEnter={() => setHasEntered(true)} />
        ) : (
          <AppLayout 
            key="app" 
            activeSection={activeSection} 
            setActiveSection={setActiveSection}
          >
            {renderSection()}
          </AppLayout>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;