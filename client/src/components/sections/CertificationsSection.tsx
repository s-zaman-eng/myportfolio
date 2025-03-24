import React from 'react';
import { Award, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CertificationsSection: React.FC = () => {
  const certifications = [
    {
      title: 'CompTIA CySA+',
      imagePath: 'public/comptia-cysa.png',
      credlyId: '5d490d6e-c215-4bc2-b009-e1b42bd23375'
    },
    {
      title: 'CompTIA Security+',
      imagePath: '/comptia-security.png',
      credlyId: '8c0aebe3-fe5b-49f7-8d16-73c8fb5b3131'
    },
    {
      title: 'CompTIA Network+',
      imagePath: './comptia-network.png',
      credlyId: 'c06bfb3f-1cce-4fa3-938a-155e9c44e8c2'
    },
    {
      title: 'Google Cybersecurity',
      imagePath: 'https://raw.githubusercontent.com/s-zaman-eng/myportfolio/public/google-cybersecurity.png',
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
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 justify-items-center">
          {certifications.map((cert, index) => (
            <div key={index} className="flex flex-col items-center max-w-[220px]">
              <div className="mb-6 w-40 h-40 flex items-center justify-center">
                <img 
                  src={cert.imagePath} 
                  alt={cert.title} 
                  className="w-full h-full object-contain"
                />
              </div>
              
              <h3 className="text-lg font-medium text-white text-center mb-1">
                {cert.title}
              </h3>
              
              <p className="text-sm text-[#FCA311] mb-3 text-center">
                Verified by Credly
              </p>
              
              <Button 
                asChild
                variant="outline"
                size="sm"
                className="bg-transparent border-[#FCA311] text-[#FCA311] hover:bg-[#FCA311] hover:text-white flex items-center gap-1"
              >
                <a 
                  href={`https://www.credly.com/badges/${cert.credlyId}/public_url`}
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="h-3.5 w-3.5 mr-1" />
                  Verify
                </a>
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <p className="text-[#E5E5E5] max-w-2xl mx-auto">
            View my complete certification profile on{' '}
            <a 
              href="https://www.credly.com/users/sums-uz-zaman/" 
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
