'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Button from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="min-h-screen pt-24 lg:pt-32 pb-16 bg-gradient-to-br from-brand-sand via-white to-brand-sand flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-8xl sm:text-9xl font-bold text-brand-purple/20 mb-8">
            404
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-bold text-brand-ink mb-6">
            Page not found
          </h1>
          
          <p className="text-xl text-gray-600 mb-8">
            Sorry, I couldn't find the page you're looking for. 
            It might have been moved or doesn't exist.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/">
              Go home
            </Button>
            <Button href="/work" variant="ghost">
              View my work
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
