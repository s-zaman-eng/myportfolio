import React from 'react';
import { motion } from 'framer-motion';

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
        className={`relative mb-3 rounded-full overflow-hidden bg-white shadow-md ${credlyId ? 'cursor-pointer' : ''}`}
        onClick={handleBadgeClick}
        style={{
          width: '120px',
          height: '120px',
          boxShadow: '0 0 0 3px var(--accent)',
          padding: '3px'
        }}
      >
        <img 
          src={imageUrl} 
          alt={altText} 
          className="w-full h-full object-contain rounded-full"
        />
      </div>
      <div className="text-center">
        <div className="text-sm font-medium text-foreground">
          {title}
        </div>
        {credlyId && (
          <div className="text-xs text-accent mt-1 hover:underline">
            Verified by Credly
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default CertificationBadge;