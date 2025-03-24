import React from 'react';
import { motion } from 'framer-motion';
import { Info } from 'lucide-react';

interface CertificationBadgeProps {
  imageUrl: string;
  altText: string;
  title: string;
  credlyId?: string;
}

const CertificationBadge: React.FC<CertificationBadgeProps> = ({ 
  imageUrl, 
  altText, 
  title, 
  credlyId 
}) => {
  const handleBadgeClick = () => {
    if (credlyId) {
      window.open(`https://www.credly.com/badges/${credlyId}/public_url`, '_blank');
    }
  };

  return (
    <motion.div 
      className="flex flex-col items-center"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <div 
        className={`relative mb-2 rounded-full overflow-hidden border-2 border-[#FCA311] bg-white p-1 shadow-md ${credlyId ? 'cursor-pointer' : ''}`}
        onClick={handleBadgeClick}
      >
        <img 
          src={imageUrl} 
          alt={altText} 
          className="w-24 h-24 md:w-32 md:h-32 object-contain"
        />
        {credlyId && (
          <div className="absolute top-0 right-0 bg-[#FCA311] rounded-full p-1 m-1" title="Click to view on Credly">
            <Info className="h-4 w-4 text-[#14213D]" />
          </div>
        )}
      </div>
      <span className="text-center text-sm font-medium">
        {title}
      </span>
      {credlyId && (
        <span className="text-xs text-[#FCA311] mt-1">
          Verified by Credly
        </span>
      )}
    </motion.div>
  );
};

export default CertificationBadge;