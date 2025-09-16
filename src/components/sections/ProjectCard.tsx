'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Card from '../ui/Card';
import { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Link href={`/work/${project.slug}`}>
        <Card hover className="p-0 overflow-hidden group">
          <div className="aspect-video bg-gradient-to-br from-brand-purple/10 to-brand-blue/10 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-purple to-brand-blue opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-6xl font-bold text-brand-purple/20 group-hover:text-brand-purple/30 transition-colors duration-300">
                {project.client.charAt(0)}
              </div>
            </div>
          </div>
          
          <div className="p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-brand-purple bg-brand-purple/10 px-3 py-1 rounded-full">
                {project.industry}
              </span>
              <span className="text-sm text-gray-500">{project.year}</span>
            </div>
            
            <h3 className="text-xl font-bold text-brand-ink mb-2 group-hover:text-brand-purple transition-colors duration-200">
              {project.title}
            </h3>
            
            <p className="text-gray-600 mb-4 line-clamp-2">
              {project.summary}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {project.services.slice(0, 3).map((service) => (
                <span
                  key={service}
                  className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded"
                >
                  {service}
                </span>
              ))}
              {project.services.length > 3 && (
                <span className="text-xs text-gray-500">
                  +{project.services.length - 3} more
                </span>
              )}
            </div>
            
            <div className="flex items-center text-brand-purple font-medium group-hover:text-brand-blue transition-colors duration-200">
              <span>View case study</span>
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </div>
          </div>
        </Card>
      </Link>
    </motion.div>
  );
}
