"use client";

import React from 'react';
import { FileText, Eye, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface CVCardProps {
  variant?: 'full' | 'compact';
  className?: string;
}

const CVCard = ({ variant = 'full', className }: CVCardProps) => {
  // Updated to match the latest filename provided
  const cvPath = "/Neliswa_Mapisa_CV_2026_v3.pdf";

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
          <Button variant="ghost" size="icon" asChild className="h-8 w-8 rounded-full hover:bg-red-600 hover:text-white">
            <a href={cvPath} target="_blank" rel="noreferrer">
              <Eye className="w-4 h-4" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild className="h-8 w-8 rounded-full hover:bg-red-600 hover:text-white">
            <a href={cvPath} download>
              <Download className="w-4 h-4" />
            </a>
          </Button>
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
        <Button 
          asChild
          variant="outline" 
          className="h-12 rounded-xl border-white/10 bg-white/5 hover:bg-red-600 hover:text-white hover:border-red-600 transition-all group"
        >
          <a href={cvPath} target="_blank" rel="noreferrer">
            <Eye className="mr-2 w-4 h-4 group-hover:scale-110 transition-transform" />
            View CV
          </a>
        </Button>
        <Button 
          asChild
          className="h-12 rounded-xl bg-red-600 hover:bg-red-700 text-white red-glow transition-all group"
        >
          <a href={cvPath} download>
            <Download className="mr-2 w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            Download
          </a>
        </Button>
      </div>
    </div>
  );
};

export default CVCard;