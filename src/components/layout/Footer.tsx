'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

const navigation = {
  main: [
    { name: 'Work', href: '/work' as const },
    { name: 'Services', href: '/services' as const },
    { name: 'About', href: '/about' as const },
    { name: 'Contact', href: '/contact' as const },
  ],
  legal: [
    { name: 'Privacy', href: '/privacy' as const },
    { name: 'Terms', href: '/terms' as const },
  ],
} as const;

const social = [
  {
    name: 'LinkedIn',
    href: '#' as const,
    icon: Linkedin,
  },
  {
    name: 'GitHub',
    href: '#' as const,
    icon: Github,
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-ink text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo and description */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center mb-4">
              <img 
                src="/logo.svg" 
                alt="Sutton Web Solutions" 
                className="w-8 h-8"
                onError={(e) => {
                  // Fallback to text logo if SVG fails to load
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <div className="w-8 h-8 bg-gradient-to-r from-brand-purple to-brand-blue rounded-lg flex items-center justify-center hidden">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="ml-3 text-xl font-bold">
                Sutton Web Solutions
              </span>
            </Link>
            <p className="text-gray-300 mb-6 max-w-md">
              Web development that ships — clean, fast, and built to scale.
            </p>
            <div className="space-y-2 text-sm text-gray-300">
              <p>Boulder, CO • Available for select projects</p>
              <div className="flex items-center space-x-4">
                <a 
                  href="mailto:me@atreyusutton.com" 
                  className="flex items-center hover:text-white transition-colors"
                >
                  <Mail size={16} className="mr-2" />
                  me@atreyusutton.com
                </a>
                <a 
                  href="tel:+13039902525" 
                  className="flex items-center hover:text-white transition-colors"
                >
                  <Phone size={16} className="mr-2" />
                  (303) 990-2525
                </a>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 mb-6">
              {navigation.legal.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            <div className="flex space-x-4">
              {social.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={item.name}
                  >
                    <Icon size={20} />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Sutton Web Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
