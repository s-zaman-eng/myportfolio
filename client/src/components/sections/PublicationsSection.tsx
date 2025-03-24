import { useEffect, useState } from 'react';
import PublicationCard from '@/components/ui/publication-card';
import { motion } from 'framer-motion';

const PublicationsSection = () => {
  const [citationBars, setCitationBars] = useState<boolean>(false);

  useEffect(() => {
    // Trigger the animation when the component is in view
    const timeout = setTimeout(() => {
      setCitationBars(true);
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  const publications = [
    {
      title: "Detection of anemia from image of the anterior conjunctiva of the eye by image processing and thresholding",
      authors: "A Tamir, CS Jahan, MS Saif, SU Zaman, MM Islam, AI Khan, SA Fattah... 2017 IEEE region 10 humanitarian technology conference (R10-HTC), 697-701, 2017",
      tags: ["Computer Vision", "Medical Technology", "Image Processing"],
      citations: 75,
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=WbUqDG8AAAAJ&citation_for_view=WbUqDG8AAAAJ:u-x6o8ySG0sC"
    },
    {
      title: "Predictive real-time beat tracking from music for embedded application",
      authors: "I Al-Hussaini, AI Humayun, S Alam, SI Foysal, A Al Masud, A Mahmud, SU Zaman... 2018 IEEE Conference on multimedia information processing and retrieval..., 2018",
      tags: ["Signal Processing", "Embedded Systems", "Audio Analysis"],
      citations: 10,
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=WbUqDG8AAAAJ&citation_for_view=WbUqDG8AAAAJ:d1gkVwhDpl0C"
    },
    {
      title: "Automatic rail crossing alarming system",
      authors: "SU Zaman, S Hossairr, C Shahnaz... 2018 IEEE International WIE Conference on Electrical and Computer Engineering, 2018",
      tags: ["Transportation Safety", "Embedded Systems", "Signal Processing"],
      citations: 7,
      link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=WbUqDG8AAAAJ&citation_for_view=WbUqDG8AAAAJ:u5HHmVD_uO8C"
    }
  ];

  const citationYears = [
    { year: "2019", count: 8 },
    { year: "2020", count: 14 },
    { year: "2021", count: 7 },
    { year: "2022", count: 15 },
    { year: "2023", count: 20 },
    { year: "2024", count: 25 },
    { year: "2025", count: 3 }
  ];

  // Find the maximum citation count for scaling
  const maxCitations = Math.max(...citationYears.map(year => year.count));

  return (
    <section id="publications" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-serif font-bold mb-12 text-[#14213D] text-center"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Publications
        </motion.h2>
        
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-serif font-bold mb-6 text-[#14213D]">Citation Metrics</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-[#E5E5E5] p-6 rounded-lg shadow-sm">
              <h4 className="text-sm text-[#14213D] mb-2">Total Citations</h4>
              <div className="flex items-end justify-between">
                <div className="text-3xl font-bold text-[#14213D]">92</div>
                <div className="text-sm text-[#FCA311]">+84 since 2020</div>
              </div>
            </div>
            
            <div className="bg-[#E5E5E5] p-6 rounded-lg shadow-sm">
              <h4 className="text-sm text-[#14213D] mb-2">h-index</h4>
              <div className="flex items-end justify-between">
                <div className="text-3xl font-bold text-[#14213D]">3</div>
                <div className="text-sm text-[#FCA311]">+3 since 2020</div>
              </div>
            </div>
            
            <div className="bg-[#E5E5E5] p-6 rounded-lg shadow-sm">
              <h4 className="text-sm text-[#14213D] mb-2">i10-index</h4>
              <div className="flex items-end justify-between">
                <div className="text-3xl font-bold text-[#14213D]">2</div>
                <div className="text-sm text-[#FCA311]">+1 since 2020</div>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-serif font-bold mb-4 text-[#14213D]">Citation Trend</h4>
            <div className="h-64 bg-[#E5E5E5] rounded-lg p-4 flex items-end justify-around">
              {citationYears.map((item, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div 
                    className="w-10 bg-[#FCA311] rounded-t transition-all duration-1000 ease-in-out" 
                    style={{ 
                      height: citationBars ? `${(item.count / maxCitations) * 100}%` : '0%',
                      maxHeight: '80%',
                      minHeight: '8px'
                    }}
                  ></div>
                  <span className="text-xs mt-2">{item.year}</span>
                  <span className="text-xs font-semibold">{item.count}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-2xl font-serif font-bold mb-6 text-[#14213D]">Published Papers</h3>
          
          <div className="space-y-6">
            {publications.map((publication, index) => (
              <PublicationCard 
                key={index}
                title={publication.title}
                authors={publication.authors}
                tags={publication.tags}
                citations={publication.citations}
                link={publication.link}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PublicationsSection;
