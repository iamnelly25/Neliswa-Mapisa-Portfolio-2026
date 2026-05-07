"use client";

import React from 'react';
import { FileText, Eye, Download } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CVCardProps {
  variant?: 'full' | 'compact';
  className?: string;
}

const CVCard = ({ variant = 'full', className }: CVCardProps) => {
  // This path points to the 'public' folder
  const cvPath = "/Neliswa_Mapisa_CV_2026_v3.pdf";

  const buttonBase = "inline-flex items-center justify-center rounded-xl transition-all duration-300 font-medium text-sm h-12 px-6";

  if (variant === 'compact') {
    return (
      <div className={cn(
        "flex items-center justify-between p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-red-500/30 transition-all group",
        className
      )}>
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-red-600/10 text-red-500">
            <FileText className="w-5 h-5" />
          </div>
          <div>
            <p className="text-xs font-bold text-white uppercase tracking-wider">Curriculum Vitae</p>
            <p className="text-[10px] text-muted-foreground">PDF Document</p>
          </div>
        </div>
        <div className="flex gap-2">
          <a 
            href={cvPath} 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 rounded-full text-muted-foreground hover:bg-red-600 hover:text-white transition-colors"
            title="View CV"
          >
            <Eye className="w-4 h-4" />
          </a>
          <a 
            href={cvPath} 
            download
            className="p-2 rounded-full text-muted-foreground hover:bg-red-600 hover:text-white transition-colors"
            title="Download CV"
          >
            <Download className="w-4 h-4" />
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className={cn(
      "ui-card red-glow-subtle flex flex-col gap-6 p-8",
      className
    )}>
      <div className="flex items-center gap-4">
        <div className="p-4 rounded-2xl bg-red-600/10 text-red-500">
          <FileText className="w-8 h-8" />
        </div>
        <div>
          <h4 className="text-xl font-bold text-white">Curriculum Vitae</h4>
          <p className="text-sm text-muted-foreground">Professional Experience & Qualifications</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <a 
          href={cvPath} 
          target="_blank" 
          rel="noopener noreferrer"
          className={cn(buttonBase, "border border-white/10 bg-white/5 text-white hover:bg-red-600 hover:border-red-600 group")}
        >
          <Eye className="mr-2 w-4 h-4 group-hover:scale-110 transition-transform" />
          View CV
        </a>
        <a 
          href={cvPath} 
          download
          className={cn(buttonBase, "bg-red-600 text-white hover:bg-red-700 red-glow group")}
        >
          <Download className="mr-2 w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          Download
        </a>
      </div>
    </div>
  );
};

export default CVCard;