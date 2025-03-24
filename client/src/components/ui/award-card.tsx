import { ReactNode } from 'react';

interface AwardCardProps {
  title: string;
  year: string;
  icon: ReactNode;
}

const AwardCard = ({ title, year, icon }: AwardCardProps) => {
  return (
    <div className="flex items-center p-4 border-l-4 border-[#FCA311] bg-[#E5E5E5]">
      <div className="mr-4 text-[#FCA311]">
        {icon}
      </div>
      <div>
        <h4 className="font-serif font-bold mb-1">{title}</h4>
        <p className="text-sm text-gray-600">{year}</p>
      </div>
    </div>
  );
};

export default AwardCard;
