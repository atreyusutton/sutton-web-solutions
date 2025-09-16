'use client';

import { motion } from 'framer-motion';
import Hero from '@/components/sections/Hero';

export default function PrivacyPage() {
  const lastUpdated = 'September 16, 2024';

  return (
    <div className="min-h-screen">
      <Hero
        title="Privacy Policy"
        subtitle="How I collect, use, and protect your personal information."
        className="pb-12"
      />

      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-4xl mx-auto prose prose-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gray-500 mb-8">Last updated: {lastUpdated}</p>

            <h2>Information I Collect</h2>
            <p>
              When you contact me through this website or work with me on projects, 
              I may collect the following information:
            </p>
            <ul>
              <li>Name and contact information (email, phone number)</li>
              <li>Company information</li>
              <li>Project details and requirements</li>
              <li>Communication preferences</li>
            </ul>

            <h2>How I Use Your Information</h2>
            <p>I use the information I collect to:</p>
            <ul>
              <li>Respond to your inquiries and provide quotes</li>
              <li>Deliver web development services</li>
              <li>Communicate about project progress and updates</li>
              <li>Send occasional updates about my services (with your consent)</li>
            </ul>

            <h2>Information Sharing</h2>
            <p>
              I do not sell, trade, or otherwise transfer your personal information 
              to third parties except:
            </p>
            <ul>
              <li>With your explicit consent</li>
              <li>To trusted service providers who assist in operating my business</li>
              <li>When required by law</li>
            </ul>

            <h2>Data Security</h2>
            <p>
              I implement appropriate security measures to protect your personal 
              information against unauthorized access, alteration, disclosure, or 
              destruction. However, no method of transmission over the internet 
              is 100% secure.
            </p>

            <h2>Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access the personal information I have about you</li>
              <li>Request corrections to your personal information</li>
              <li>Request deletion of your personal information</li>
              <li>Opt-out of marketing communications</li>
            </ul>

            <h2>Cookies and Analytics</h2>
            <p>
              This website may use cookies and analytics tools to improve user 
              experience and understand website usage. You can control cookie 
              settings through your browser preferences.
            </p>

            <h2>Contact Information</h2>
            <p>
              If you have questions about this privacy policy or wish to exercise 
              your rights, please contact me at:
            </p>
            <p>
              Email: <a href="mailto:me@atreyusutton.com">me@atreyusutton.com</a><br />
              Phone: <a href="tel:+13039902525">(303) 990-2525</a>
            </p>

            <h2>Changes to This Policy</h2>
            <p>
              I may update this privacy policy from time to time. I will notify 
              you of any changes by posting the new policy on this page with an 
              updated revision date.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
