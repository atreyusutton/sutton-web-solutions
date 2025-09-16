'use client';

import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Code, 
  Palette, 
  Zap, 
  Award,
  MapPin,
  Mail,
  Phone
} from 'lucide-react';
import Hero from '@/components/sections/Hero';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import CTASection from '@/components/sections/CTASection';

const skills = [
  {
    category: 'Frontend',
    items: ['JavaScript/TypeScript', 'React/Next.js', 'Vue.js', 'Tailwind CSS', 'Framer Motion']
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'REST/GraphQL APIs']
  },
  {
    category: 'Tools & Platform',
    items: ['Git', 'AWS', 'Vercel', 'Docker', 'Figma']
  },
  {
    category: 'Specialties',
    items: ['Performance optimization', 'SEO', 'Accessibility', 'UI/UX Design']
  }
];

const education = [
  {
    degree: 'M.S. Engineering, Creative Technology & Design',
    school: 'University of Colorado Boulder',
    status: 'In Progress',
    icon: GraduationCap
  },
  {
    degree: 'B.A. Computer Science',
    school: 'Rollins College',
    status: 'Summa Cum Laude',
    icon: Award
  }
];

const values = [
  {
    icon: Code,
    title: 'Clean Code',
    description: 'Writing maintainable, scalable code that stands the test of time.'
  },
  {
    icon: Zap,
    title: 'Performance First',
    description: 'Optimizing for speed, accessibility, and user experience from day one.'
  },
  {
    icon: Palette,
    title: 'Design Thinking',
    description: 'Bridging the gap between beautiful design and functional implementation.'
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Hero
        title="Hi, I'm Atreyu"
        subtitle="A software engineer and creative technologist in Boulder, CO. I build web products that are fast, clean, and maintainable."
        primaryCTA={{
          text: "Let's work together",
          href: "/contact"
        }}
        secondaryCTA={{
          text: "View my work",
          href: "/work"
        }}
      />

      {/* Introduction */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-brand-ink mb-6">
                Building the web, one pixel at a time
              </h2>
              <div className="prose prose-lg text-gray-600 space-y-4">
                <p>
                  I specialize in frontend architecture and performance optimization, 
                  with a focus on creating rich content experiences that delight users 
                  and drive business results.
                </p>
                <p>
                  My background spans both technical implementation and creative design, 
                  allowing me to bridge the gap between what's possible and what's beautiful. 
                  I believe great software should be both powerful and intuitive.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring Colorado's mountains, 
                  experimenting with new technologies, or contributing to open-source projects.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="p-8">
                <div className="flex items-center mb-6">
                  <MapPin className="w-6 h-6 text-brand-purple mr-3" />
                  <span className="text-lg font-medium text-brand-ink">Boulder, Colorado</span>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-brand-purple mr-3" />
                    <a 
                      href="mailto:me@atreyusutton.com"
                      className="text-brand-purple hover:text-brand-blue transition-colors"
                    >
                      me@atreyusutton.com
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-brand-purple mr-3" />
                    <a 
                      href="tel:+13039902525"
                      className="text-brand-purple hover:text-brand-blue transition-colors"
                    >
                      (303) 990-2525
                    </a>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-24 bg-brand-sand">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-4xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-ink mb-6">
              What drives me
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide my work and approach to every project.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="p-8 text-center h-full">
                    <Icon className="w-12 h-12 text-brand-purple mx-auto mb-6" />
                    <h3 className="text-xl font-bold text-brand-ink mb-4">
                      {value.title}
                    </h3>
                    <p className="text-gray-600">
                      {value.description}
                    </p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-4xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-ink mb-6">
              Education
            </h2>
            <p className="text-xl text-gray-600">
              Continuous learning is at the heart of staying current in technology.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {education.map((edu, index) => {
              const Icon = edu.icon;
              return (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="p-6 h-full">
                    <Icon className="w-8 h-8 text-brand-purple mb-4" />
                    <h3 className="text-lg font-bold text-brand-ink mb-2">
                      {edu.degree}
                    </h3>
                    <p className="text-gray-600 mb-2">{edu.school}</p>
                    <span className="text-sm text-brand-purple font-medium">
                      {edu.status}
                    </span>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-16 lg:py-24 bg-brand-sand">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-4xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-ink mb-6">
              Skills & Technologies
            </h2>
            <p className="text-xl text-gray-600">
              The tools and technologies I use to bring ideas to life.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full">
                  <h3 className="text-lg font-bold text-brand-ink mb-4">
                    {skillGroup.category}
                  </h3>
                  <ul className="space-y-2">
                    {skillGroup.items.map((skill) => (
                      <li key={skill} className="text-sm text-gray-600">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Let's talk about your roadmap"
        subtitle="Ready to discuss how I can help bring your next project to life?"
        ctaText="Get in touch"
        ctaHref="/contact"
      />
    </div>
  );
}
