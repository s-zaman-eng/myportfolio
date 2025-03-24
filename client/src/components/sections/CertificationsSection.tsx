import React from 'react';
import CertificationBadge from '@/components/ui/certification-badge';
import { motion } from 'framer-motion';

const CertificationsSection: React.FC = () => {
  const certifications = [
    {
      imageUrl: '/attached_assets/comptia-security-ce-certification.png',
      altText: 'CompTIA Security+ Certification',
      title: 'CompTIA Security+'
    },
    {
      imageUrl: '/attached_assets/comptia-cysa-ce-certification.png',
      altText: 'CompTIA CySA+ Certification',
      title: 'CompTIA CySA+'
    },
    {
      imageUrl: '/attached_assets/comptia-network-ce-certification.1.png',
      altText: 'CompTIA Network+ Certification',
      title: 'CompTIA Network+'
    },
    {
      imageUrl: '/attached_assets/google-cybersecurity-certificate-v2.png',
      altText: 'Google Cybersecurity Certificate',
      title: 'Google Cybersecurity'
    }
  ];

  return (
    <section id="certifications" className="py-16 bg-[#14213D] text-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-serif font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Professional Certifications
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {certifications.map((cert, index) => (
            <CertificationBadge 
              key={index}
              imageUrl={cert.imageUrl}
              altText={cert.altText}
              title={cert.title}
            />
          ))}
        </motion.div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-[#E5E5E5] max-w-2xl mx-auto">
            View my complete certification profile on <a href="https://www.credly.com" target="_blank" rel="noopener noreferrer" className="text-[#FCA311] hover:underline">Credly</a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CertificationsSection;