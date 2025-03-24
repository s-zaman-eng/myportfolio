import { ReactNode } from 'react';

interface TimelineItemProps {
  title: string;
  organization?: string;
  date: string;
  icon: ReactNode;
  children: ReactNode;
}

const TimelineItem = ({ title, organization, date, icon, children }: TimelineItemProps) => {
  return (
    <div className="timeline-item relative">
      <div className="timeline-bullet">
        {icon}
      </div>
      
      <div>
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
          <h3 className="text-xl font-serif font-bold text-[#FCA311]">{title}</h3>
          <span className="text-sm text-[#E5E5E5]">{date}</span>
        </div>
        {organization && <h4 className="text-lg mb-4">{organization}</h4>}
        {children}
      </div>
    </div>
  );
};

export default TimelineItem;
