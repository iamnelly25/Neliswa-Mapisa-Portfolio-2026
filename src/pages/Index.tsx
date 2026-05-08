"use client";

import React, { useState } from 'react';
import GlowBackground from '@/components/GlowBackground';
import IntroScreen from '@/components/IntroScreen';
import AppLayout from '@/components/AppLayout';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import ExperienceSection from '@/components/ExperienceSection';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <IntroScreen onEnter={() => setActiveSection('about')} />;
      case 'about':
        return <AboutSection />;
      case 'experience':
        return <ExperienceSection />;
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
      
      <AppLayout 
        activeSection={activeSection} 
        setActiveSection={setActiveSection}
      >
        {renderSection()}
      </AppLayout>
    </div>
  );
};

export default Index;