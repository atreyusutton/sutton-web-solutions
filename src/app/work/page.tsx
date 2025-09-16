'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Hero from '@/components/sections/Hero';
import ProjectCard from '@/components/sections/ProjectCard';
import { projects } from '@/data/projects';
import Button from '@/components/ui/Button';

const industries = [
  'All',
  'Automotive',
  'Travel',
  'Real Estate',
  'Nonprofit',
];

export default function WorkPage() {
  const [selectedIndustry, setSelectedIndustry] = useState('All');

  const filteredProjects = selectedIndustry === 'All' 
    ? projects 
    : projects.filter(project => 
        project.industry.toLowerCase().includes(selectedIndustry.toLowerCase())
      );

  return (
    <div className="min-h-screen">
      <Hero
        title="Case Studies"
        subtitle="Real projects, real results. See how I help businesses launch and scale their digital products."
        className="pt-20 pb-12"
      />

      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Buttons */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {industries.map((industry) => (
              <button
                key={industry}
                onClick={() => setSelectedIndustry(industry)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                  selectedIndustry === industry
                    ? 'bg-brand-purple text-white shadow-lg'
                    : 'bg-brand-sand text-brand-ink hover:bg-gray-100'
                }`}
              >
                {industry}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <ProjectCard project={project} index={index} />
              </motion.div>
            ))}
          </motion.div>

          {filteredProjects.length === 0 && (
            <motion.div
              className="text-center py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-gray-500 mb-4">No projects found for this industry.</p>
              <Button onClick={() => setSelectedIndustry('All')} variant="ghost">
                View all projects
              </Button>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}
