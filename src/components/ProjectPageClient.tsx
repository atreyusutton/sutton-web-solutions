'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Calendar, Building, Wrench, Code } from 'lucide-react';
import Button from './ui/Button';
import Card from './ui/Card';
import CTASection from './sections/CTASection';
import { Project } from '@/data/projects';

interface ProjectPageClientProps {
  project: Project;
}

export default function ProjectPageClient({ project }: ProjectPageClientProps) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 lg:pt-32 pb-16 bg-gradient-to-br from-brand-sand via-white to-brand-sand">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link
              href="/work"
              className="inline-flex items-center text-brand-purple hover:text-brand-blue transition-colors mb-8"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to work
            </Link>

            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-ink mb-6">
                {project.title}
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl">
                {project.summary}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Content */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Sidebar */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="lg:sticky lg:top-24 space-y-6">
                <Card className="p-6">
                  <h3 className="font-bold text-brand-ink mb-4 flex items-center">
                    <Building size={20} className="mr-2 text-brand-purple" />
                    Client & Industry
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">{project.client}</p>
                  <p className="text-sm text-brand-purple font-medium">{project.industry}</p>
                </Card>

                <Card className="p-6">
                  <h3 className="font-bold text-brand-ink mb-4 flex items-center">
                    <Calendar size={20} className="mr-2 text-brand-purple" />
                    Timeline
                  </h3>
                  <p className="text-sm text-gray-600">{project.year}</p>
                </Card>

                <Card className="p-6">
                  <h3 className="font-bold text-brand-ink mb-4 flex items-center">
                    <Wrench size={20} className="mr-2 text-brand-purple" />
                    Services
                  </h3>
                  <div className="space-y-2">
                    {project.services.map((service) => (
                      <div key={service} className="text-sm text-gray-600">
                        • {service}
                      </div>
                    ))}
                  </div>
                </Card>

                <Card className="p-6">
                  <h3 className="font-bold text-brand-ink mb-4 flex items-center">
                    <Code size={20} className="mr-2 text-brand-purple" />
                    Technology
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs bg-brand-purple/10 text-brand-purple px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </Card>
              </div>
            </motion.div>

            {/* Main Content */}
            <motion.div
              className="lg:col-span-3"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="prose prose-lg max-w-none">
                {/* Hero Image Placeholder */}
                <div className="aspect-video bg-gradient-to-br from-brand-purple/10 to-brand-blue/10 rounded-2xl mb-12 flex items-center justify-center">
                  <div className="text-6xl font-bold text-brand-purple/20">
                    {project.client.charAt(0)}
                  </div>
                </div>

                {/* Problem Section */}
                <section className="mb-12">
                  <h2 className="text-3xl font-bold text-brand-ink mb-6">The Challenge</h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {project.problem}
                  </p>
                </section>

                {/* Approach Section */}
                <section className="mb-12">
                  <h2 className="text-3xl font-bold text-brand-ink mb-6">Our Approach</h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {project.approach}
                  </p>
                </section>

                {/* Results Section */}
                <section className="mb-12">
                  <h2 className="text-3xl font-bold text-brand-ink mb-6">Results & Impact</h2>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    {project.outcome}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {project.results.map((result, index) => (
                      <Card key={index} className="p-6 text-center">
                        <div className="text-2xl font-bold text-brand-purple mb-2">
                          ✓
                        </div>
                        <p className="text-sm font-medium text-brand-ink">{result}</p>
                      </Card>
                    ))}
                  </div>
                </section>

                {/* Gallery Placeholder */}
                <section className="mb-12">
                  <h2 className="text-3xl font-bold text-brand-ink mb-6">Project Gallery</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {project.gallery.map((image, index) => (
                      <div
                        key={index}
                        className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center"
                      >
                        <span className="text-gray-400 text-sm">{image.alt}</span>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to start your project?"
        subtitle="Let's discuss how I can help bring your vision to life."
        ctaText="Get in touch"
        ctaHref="/contact"
      />
    </div>
  );
}
