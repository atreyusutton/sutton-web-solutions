'use client';

import { motion } from 'framer-motion';
import Hero from '@/components/sections/Hero';

export default function TermsPage() {
  const lastUpdated = 'September 16, 2024';

  return (
    <div className="min-h-screen">
      <Hero
        title="Terms of Service"
        subtitle="The terms and conditions for using my services and this website."
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

            <h2>Acceptance of Terms</h2>
            <p>
              By accessing and using this website or engaging my services, you 
              accept and agree to be bound by the terms and provision of this agreement.
            </p>

            <h2>Services</h2>
            <p>
              I provide web development services including but not limited to:
            </p>
            <ul>
              <li>Website design and development</li>
              <li>Web application development</li>
              <li>Frontend and backend development</li>
              <li>Performance optimization</li>
              <li>Consultation and technical advice</li>
            </ul>

            <h2>Project Terms</h2>
            <p>
              Specific project terms, including scope, timeline, deliverables, 
              and payment terms, will be outlined in separate project agreements 
              or statements of work.
            </p>

            <h2>Payment Terms</h2>
            <ul>
              <li>Payment terms will be specified in individual project agreements</li>
              <li>Late payments may incur additional fees</li>
              <li>Refunds are handled on a case-by-case basis</li>
            </ul>

            <h2>Intellectual Property</h2>
            <p>
              Unless otherwise specified in a project agreement:
            </p>
            <ul>
              <li>You retain ownership of your content and brand materials</li>
              <li>You own the final deliverables upon full payment</li>
              <li>I retain the right to showcase completed work in my portfolio</li>
              <li>I retain ownership of any pre-existing tools or frameworks used</li>
            </ul>

            <h2>Client Responsibilities</h2>
            <p>You agree to:</p>
            <ul>
              <li>Provide necessary materials and information in a timely manner</li>
              <li>Review and provide feedback on deliverables promptly</li>
              <li>Make payments according to agreed terms</li>
              <li>Respect my time and professional boundaries</li>
            </ul>

            <h2>Limitation of Liability</h2>
            <p>
              My liability for any claim, loss, damage, or injury arising from 
              my services shall not exceed the total amount paid for the specific 
              project in question.
            </p>

            <h2>Warranty and Support</h2>
            <p>
              I warrant that my work will be performed in a professional manner. 
              Support terms and warranty periods will be specified in individual 
              project agreements.
            </p>

            <h2>Termination</h2>
            <p>
              Either party may terminate a project agreement with written notice. 
              Termination terms and any applicable fees will be outlined in the 
              project agreement.
            </p>

            <h2>Governing Law</h2>
            <p>
              These terms shall be governed by and construed in accordance with 
              the laws of the State of Colorado, United States.
            </p>

            <h2>Changes to Terms</h2>
            <p>
              I reserve the right to modify these terms at any time. Changes will 
              be effective immediately upon posting to this website.
            </p>

            <h2>Contact Information</h2>
            <p>
              If you have questions about these terms, please contact me at:
            </p>
            <p>
              Email: <a href="mailto:me@atreyusutton.com">me@atreyusutton.com</a><br />
              Phone: <a href="tel:+13039902525">(303) 990-2525</a>
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
