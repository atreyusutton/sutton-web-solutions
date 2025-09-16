'use client';

import { motion } from 'framer-motion';
import { 
  Globe, 
  Database, 
  Zap, 
  Puzzle,
  Search,
  Layers,
  FileText,
  Settings,
  Shield,
  Rocket,
  CheckCircle,
  Clock,
  Users,
  Home
} from 'lucide-react';
import Hero from '@/components/sections/Hero';
import Card from '@/components/ui/Card';
import CTASection from '@/components/sections/CTASection';

const serviceGroups = [
  {
    icon: Globe,
    title: 'Product & Marketing Sites',
    description: 'React/Next, component libraries, Tailwind design systems.',
    features: [
      'Custom React/Next.js applications',
      'Responsive design systems',
      'Component libraries',
      'Modern UI/UX implementation'
    ]
  },
  {
    icon: Database,
    title: 'Data & Content',
    description: 'Headless CMS, content models, authoring workflows.',
    features: [
      'Headless CMS integration',
      'Content modeling',
      'Editorial workflows',
      'API development'
    ]
  },
  {
    icon: Zap,
    title: 'Performance & SEO',
    description: 'Core Web Vitals, image/CDN strategy, build pipelines.',
    features: [
      'Core Web Vitals optimization',
      'SEO implementation',
      'Image optimization',
      'Build pipeline setup'
    ]
  },
  {
    icon: Puzzle,
    title: 'Integrations',
    description: 'Auth, payments, booking engines, email/notifications.',
    features: [
      'Authentication systems',
      'Payment processing',
      'Third-party APIs',
      'Notification systems'
    ]
  }
];

const processSteps = [
  {
    icon: Search,
    title: 'Discover',
    description: 'Understanding your goals, users, and technical requirements.'
  },
  {
    icon: Layers,
    title: 'Design System',
    description: 'Creating a scalable design system and component architecture.'
  },
  {
    icon: Settings,
    title: 'Build',
    description: 'Developing with modern tools and best practices.'
  },
  {
    icon: Shield,
    title: 'QA/Accessibility',
    description: 'Testing, accessibility audits, and performance optimization.'
  },
  {
    icon: Rocket,
    title: 'Launch',
    description: 'Deployment, monitoring, and go-live support.'
  },
  {
    icon: CheckCircle,
    title: 'Iterate',
    description: 'Ongoing improvements based on user feedback and analytics.'
  }
];

const faqs = [
  {
    question: 'What are typical project timelines?',
    answer: 'Most projects range from 4-12 weeks depending on scope. Simple marketing sites can be completed in 2-4 weeks, while complex applications may take 3-6 months. I provide detailed timelines during the discovery phase.'
  },
  {
    question: 'Do clients own the code?',
    answer: 'Absolutely. You own all code, designs, and assets created for your project. I provide complete documentation and can assist with knowledge transfer to your team.'
  },
  {
    question: 'What hosting options do you recommend?',
    answer: 'I typically recommend Vercel, Netlify, or Cloudflare Pages for static sites, and AWS or Railway for full-stack applications. I can help with deployment and ongoing hosting management.'
  },
  {
    question: 'How do you handle project handoffs?',
    answer: 'Every project includes comprehensive documentation, deployment guides, and a handoff session. I also offer post-launch support packages for ongoing maintenance and updates.'
  },
  {
    question: 'Do you work with existing development teams?',
    answer: 'Yes! I often collaborate with in-house teams, providing specialized frontend expertise, code reviews, or handling specific project phases while maintaining your existing workflows.'
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Hero
        title="From idea to launch"
        subtitle="Comprehensive web development services that take your project from concept to production with clean code, modern design, and scalable architecture."
        primaryCTA={{
          text: "Start your project",
          href: "/contact"
        }}
        secondaryCTA={{
          text: "View work",
          href: "/work"
        }}
      />

      {/* Service Groups */}
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
              What I do
            </h2>
            <p className="text-xl text-gray-600">
              Full-stack development services tailored to your business needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {serviceGroups.map((group, index) => {
              const Icon = group.icon;
              return (
                <motion.div
                  key={group.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="p-8 h-full">
                    <Icon className="w-12 h-12 text-brand-purple mb-6" />
                    <h3 className="text-2xl font-bold text-brand-ink mb-4">
                      {group.title}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {group.description}
                    </p>
                    <ul className="space-y-2">
                      {group.features.map((feature) => (
                        <li key={feature} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-brand-purple mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
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
              How I work
            </h2>
            <p className="text-xl text-gray-600">
              A proven process that delivers results on time and on budget.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="p-6 text-center h-full">
                    <div className="w-16 h-16 bg-gradient-to-br from-brand-purple to-brand-blue rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-brand-ink mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {step.description}
                    </p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
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
              Frequently asked questions
            </h2>
            <p className="text-xl text-gray-600">
              Common questions about working together.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-8">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6">
                  <h3 className="text-lg font-bold text-brand-ink mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600">
                    {faq.answer}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to get started?"
        subtitle="Let's discuss your project and see how I can help bring your vision to life."
        ctaText="Start your project"
        ctaHref="/contact"
      />
    </div>
  );
}
