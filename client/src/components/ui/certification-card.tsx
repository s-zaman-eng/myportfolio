import { ReactNode } from "react";

interface CertificationCardProps {
  title: string;
  icon: ReactNode;
}

const CertificationCard = ({ title, icon }: CertificationCardProps) => {
  return (
    <div className="bg-white border border-[#E5E5E5] rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="mb-4 text-[#FCA311]">
        {icon}
      </div>
      <h4 className="font-serif font-bold mb-2">{title}</h4>
    </div>
  );
};

export default CertificationCard;
