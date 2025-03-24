import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const CertificationsSection: React.FC = () => {
  // Hardcoded certifications data
  const certifications = [
    {
      title: 'CompTIA Security+',
      credlyId: '8c0aebe3-fe5b-49f7-8d16-73c8fb5b3131'
    },
    {
      title: 'CompTIA CySA+',
      credlyId: '5d490d6e-c215-4bc2-b009-e1b42bd23375'
    },
    {
      title: 'CompTIA Network+',
      credlyId: 'c06bfb3f-1cce-4fa3-938a-155e9c44e8c2'
    },
    {
      title: 'Google Cybersecurity',
      credlyId: '91a30e25-14c8-4452-899a-7978007f14b6'
    }
  ];

  return (
    <section id="certifications" className="py-16 bg-[#14213D] text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-3 mb-12">
          <Award className="h-8 w-8 text-[#FCA311]" />
          <h2 className="text-3xl font-serif font-bold text-center">
            Professional Certifications
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
          {/* CompTIA Security+ */}
          <div className="flex flex-col items-center">
            <a 
              href="https://www.credly.com/badges/8c0aebe3-fe5b-49f7-8d16-73c8fb5b3131/public_url"
              target="_blank"
              rel="noopener noreferrer"
              className="block mb-2"
            >
              <div className="w-32 h-32 rounded-full bg-white border-4 border-[#FCA311]"></div>
            </a>
            <div className="text-center">
              <div className="text-sm font-medium text-white">
                CompTIA Security+
              </div>
              <div className="text-xs text-[#FCA311] mt-1">
                Verified by Credly
              </div>
            </div>
          </div>
          
          {/* CompTIA CySA+ */}
          <div className="flex flex-col items-center">
            <a 
              href="https://www.credly.com/badges/5d490d6e-c215-4bc2-b009-e1b42bd23375/public_url"
              target="_blank"
              rel="noopener noreferrer"
              className="block mb-2"
            >
              <div className="w-32 h-32 rounded-full bg-white border-4 border-[#FCA311]"></div>
            </a>
            <div className="text-center">
              <div className="text-sm font-medium text-white">
                CompTIA CySA+
              </div>
              <div className="text-xs text-[#FCA311] mt-1">
                Verified by Credly
              </div>
            </div>
          </div>
          
          {/* CompTIA Network+ */}
          <div className="flex flex-col items-center">
            <a 
              href="https://www.credly.com/badges/c06bfb3f-1cce-4fa3-938a-155e9c44e8c2/public_url"
              target="_blank"
              rel="noopener noreferrer"
              className="block mb-2"
            >
              <div className="w-32 h-32 rounded-full bg-white border-4 border-[#FCA311]"></div>
            </a>
            <div className="text-center">
              <div className="text-sm font-medium text-white">
                CompTIA Network+
              </div>
              <div className="text-xs text-[#FCA311] mt-1">
                Verified by Credly
              </div>
            </div>
          </div>
          
          {/* Google Cybersecurity */}
          <div className="flex flex-col items-center">
            <a 
              href="https://www.credly.com/badges/91a30e25-14c8-4452-899a-7978007f14b6/public_url"
              target="_blank"
              rel="noopener noreferrer"
              className="block mb-2"
            >
              <div className="w-32 h-32 rounded-full bg-white border-4 border-[#FCA311]"></div>
            </a>
            <div className="text-center">
              <div className="text-sm font-medium text-white">
                Google Cybersecurity
              </div>
              <div className="text-xs text-[#FCA311] mt-1">
                Verified by Credly
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
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
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;