import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const CertificationsSection: React.FC = () => {
  const certifications = [
    {
      title: 'CompTIA Security+',
      imageUrl: '/comptia-security-ce-certification.png',
      credlyId: '8c0aebe3-fe5b-49f7-8d16-73c8fb5b3131'
    },
    {
      title: 'CompTIA CySA+',
      imageUrl: '/comptia-cysa-ce-certification.png',
      credlyId: '5d490d6e-c215-4bc2-b009-e1b42bd23375'
    },
    {
      title: 'CompTIA Network+',
      imageUrl: '/comptia-network-ce-certification.1.png',
      credlyId: 'c06bfb3f-1cce-4fa3-938a-155e9c44e8c2'
    },
    {
      title: 'Google Cybersecurity',
      imageUrl: '/google-cybersecurity-certificate-v2.png',
      credlyId: '91a30e25-14c8-4452-899a-7978007f14b6'
    }
  ];

  return (
    <section id="certifications" className="py-16 bg-[#14213D] text-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="flex items-center justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Award className="h-8 w-8 text-[#FCA311]" />
          <h2 className="text-3xl font-serif font-bold text-center">
            Professional Certifications
          </h2>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {certifications.map((cert, index) => (
            <div key={index} className="flex flex-col items-center">
              <a 
                href={`https://www.credly.com/badges/${cert.credlyId}/public_url`}
                target="_blank"
                rel="noopener noreferrer"
                className="block mb-2"
              >
                <div 
                  className="w-32 h-32 rounded-full bg-white border-4 border-[#FCA311] flex items-center justify-center overflow-hidden"
                >
                  <img 
                    src={cert.imageUrl} 
                    alt={cert.title} 
                    className="w-24 h-24 object-contain"
                  />
                </div>
              </a>
              <div className="text-center">
                <div className="text-sm font-medium text-white">
                  {cert.title}
                </div>
                <div className="text-xs text-[#FCA311] mt-1">
                  Verified by Credly
                </div>
              </div>
            </div>
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
            Click any badge to verify or view my complete certification profile on{' '}
            <a 
              href="https://www.credly.com/users/sumsuz" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#FCA311] hover:underline"
            >
              Credly
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CertificationsSection;