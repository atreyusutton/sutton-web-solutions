'use client';

import { motion } from 'framer-motion';
import Button from '../ui/Button';

interface CTASectionProps {
  title: string;
  subtitle?: string;
  ctaText: string;
  ctaHref: string;
  className?: string;
}

export default function CTASection({
  title,
  subtitle,
  ctaText,
  ctaHref,
  className = '',
}: CTASectionProps) {
  return (
    <section className={`py-16 lg:py-24 bg-gradient-to-r from-brand-purple to-brand-blue ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-4xl mx-auto text-center text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
          <Button 
            href={ctaHref} 
            variant="secondary" 
            size="lg"
            className="bg-white text-brand-purple hover:bg-gray-50"
          >
            {ctaText}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
