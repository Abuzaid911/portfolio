'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, ExternalLink, Github } from 'lucide-react';
import { type Project } from '@/types';
import { Badge } from '@/components/badge';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  project: Project;
  onOpen: (project: Project) => void;
  index: number;
}

const categoryLabel: Record<Project['category'], string> = {
  ai: 'AI & Data',
  web: 'Web',
  mobile: 'Mobile',
};

export function ProjectCard({ project, onOpen, index }: ProjectCardProps) {
  return (
    <motion.article
      layout
      className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-border/50 bg-surface/80 p-6 transition hover:-translate-y-1 hover:shadow-glow"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ delay: index * 0.05, type: 'spring', stiffness: 220, damping: 26 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-accent/0 via-accent/5 to-transparent opacity-0 transition group-hover:opacity-100" aria-hidden />
      <div className="relative flex flex-col gap-4">
        <div className="flex items-center justify-between gap-3">
          <Badge variant="accent">{categoryLabel[project.category]}</Badge>
        </div>
        <div className="space-y-2">
          <h3 className="font-display text-2xl text-text">{project.title}</h3>
          <p className="text-sm text-muted/90">{project.description}</p>
        </div>
        <ul className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <li key={tech}>
              <Badge variant="outline">{tech}</Badge>
            </li>
          ))}
        </ul>
        <ul className="flex flex-wrap gap-3">
          {project.metrics.map((metric) => (
            <li key={metric.label} className="rounded-full border border-border/40 px-3 py-1 text-xs text-muted">
              {metric.label}
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}
