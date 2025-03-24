import { ReactNode } from 'react';

interface ProjectCardProps {
  title: string;
  year: string;
  description: string;
  technologies: string[];
  icon: ReactNode;
}

const ProjectCard = ({ title, year, description, technologies, icon }: ProjectCardProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="h-48 bg-[#14213D] flex items-center justify-center">
        {icon}
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-serif font-bold text-lg text-[#14213D]">{title}</h3>
          <span className="text-xs bg-[#FCA311] text-[#14213D] px-2 py-1 rounded-full font-semibold">{year}</span>
        </div>
        <p className="text-sm mb-4">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span key={index} className="px-2 py-1 bg-[#E5E5E5] text-xs rounded">{tech}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
