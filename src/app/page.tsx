'use client';

import { motion } from 'framer-motion';
import Hero from '@/components/sections/Hero';
import ProjectCard from '@/components/sections/ProjectCard';
import CTASection from '@/components/sections/CTASection';
import Card from '@/components/ui/Card';
import { projects } from '@/data/projects';
import { CheckCircle, Zap, Shield, TrendingUp } from 'lucide-react';

const services = [
  'Frontend (React/Next)',
  'Product sites',
  'Listings/marketplaces',
  'Booking flows',
  'CMS integration',
  'Performance & SEO',
];

const stats = [
  {
    icon: Zap,
    label: '<50ms CLS',
    description: 'Lightning-fast load times',
  },
  {
    icon: Shield,
    label: 'A11y first',
    description: 'Accessible by design',
  },
  {
    icon: CheckCircle,
    label: 'Static-export friendly',
    description: 'Deploy anywhere',
  },
  {
    icon: TrendingUp,
    label: '99+ Lighthouse',
    description: 'Performance optimized',
  },
];

const clients = [
  'FuelFed Motor Market',
  'Ute Pass Vacation Rentals',
  'The Real Estate Collaborative',
  'Nest Messages',
];

export default function HomePage() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero
        title="Web development that actually ships."
        subtitle="I help teams launch performant, polished web apps and sites — from concept to production."
        primaryCTA={{
          text: "Start your project",
          href: "/contact"
        }}
        secondaryCTA={{
          text: "View work",
          href: "/work"
        }}
      />

      {/* Clients/Credentials Strip */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm text-gray-500 mb-8">Trusted by forward-thinking companies</p>
            <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
              {clients.map((client) => (
                <motion.div
                  key={client}
                  className="text-gray-400 font-medium hover:text-brand-purple transition-colors cursor-default"
                  whileHover={{ scale: 1.05 }}
                >
                  {client}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Snapshot */}
      <section className="py-16 lg:py-24 bg-brand-sand">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-4xl mx-auto text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-ink mb-6">
              Full-stack expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From initial concept to production deployment, I handle every aspect of modern web development.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {services.map((service, index) => (
              <motion.div
                key={service}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-4 text-center h-full">
                  <span className="text-sm font-medium text-brand-ink">{service}</span>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-4xl mx-auto text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-ink mb-6">
              Featured work
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real projects, real results. See how I help businesses launch and scale their digital products.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Row */}
      <section className="py-16 lg:py-24 bg-brand-sand">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="p-6 text-center h-full">
                    <Icon className="w-8 h-8 text-brand-purple mx-auto mb-4" />
                    <div className="text-2xl font-bold text-brand-ink mb-2">
                      {stat.label}
                    </div>
                    <p className="text-sm text-gray-600">{stat.description}</p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Have a timeline in mind?"
        subtitle="Let's scope it out and build something great together."
        ctaText="Start your project"
        ctaHref="/contact"
      />
    </div>
  );
}
