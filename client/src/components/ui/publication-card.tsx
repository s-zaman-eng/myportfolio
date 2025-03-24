import { Eye } from 'lucide-react';

interface PublicationCardProps {
  title: string;
  authors: string;
  tags: string[];
  citations: number;
  link: string;
}

const PublicationCard = ({ title, authors, tags, citations, link }: PublicationCardProps) => {
  return (
    <div className="bg-white border border-[#E5E5E5] rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
      <h4 className="font-serif font-bold text-lg mb-3 text-[#14213D]">{title}</h4>
      <p className="text-sm mb-4">{authors}</p>
      <div className="flex flex-wrap items-center gap-3 text-sm">
        {tags.map((tag, index) => (
          <span key={index} className="px-3 py-1 bg-[#E5E5E5] rounded-full">{tag}</span>
        ))}
      </div>
      <div className="mt-4 pt-4 border-t border-[#E5E5E5] flex justify-between items-center">
        <div className="flex items-center">
          <Eye className="h-5 w-5 text-[#FCA311] mr-1" />
          <span>{citations} citations</span>
        </div>
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-[#FCA311] hover:underline font-semibold"
        >
          View Paper →
        </a>
      </div>
    </div>
  );
};

export default PublicationCard;
