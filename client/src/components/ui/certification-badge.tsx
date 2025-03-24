import React from 'react';
import { motion } from 'framer-motion';

interface CertificationBadgeProps {
  imageUrl: string;
  altText: string;
  title: string;
}

const CertificationBadge: React.FC<CertificationBadgeProps> = ({ imageUrl, altText, title }) => {
  return (
    <motion.div 
      className="flex flex-col items-center"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <div className="mb-2 rounded-full overflow-hidden border-2 border-[#FCA311] bg-white p-1 shadow-md">
        <img 
          src={imageUrl} 
          alt={altText} 
          className="w-24 h-24 md:w-32 md:h-32 object-contain"
        />
      </div>
      <span className="text-center text-sm font-medium">{title}</span>
    </motion.div>
  );
};

export default CertificationBadge;