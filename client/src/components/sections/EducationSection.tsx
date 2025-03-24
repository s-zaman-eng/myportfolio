import { GraduationCap, Award } from 'lucide-react';
import AwardCard from '@/components/ui/award-card';
import { motion } from 'framer-motion';

const EducationSection = () => {
  const education = [
    {
      degree: "M.S. in Cybersecurity",
      institution: "The City College of New York",
      year: "May 2024"
    },
    {
      degree: "B.Sc. in Electrical & Electronic Engineering",
      institution: "Bangladesh University of Engineering & Technology",
      year: "2018"
    }
  ];

  const awards = [
    {
      title: "1st Place — International Autonomous Robotics Challenge (iARC)",
      year: "2015"
    },
    {
      title: "Honorable Mention — IEEE Signal Processing Cup",
      year: "2017"
    },
    {
      title: "4th Place — International Robotics Challenge (iRC)",
      year: "2015"
    },
    {
      title: "National Finalist (Top 4) — Microsoft Imagine Cup Bangladesh",
      year: "2016"
    }
  ];

  return (
    <section id="education" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-serif font-bold mb-12 text-[#14213D] text-center"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Education & Honors
        </motion.h2>
        
        <div className="flex flex-col md:flex-row gap-12">
          {/* Education */}
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-serif font-bold mb-8 text-[#14213D]">Education</h3>
            
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="bg-[#E5E5E5] p-6 rounded-lg shadow-sm">
                  <div className="flex items-start">
                    <div className="mr-4 text-[#FCA311]">
                      <GraduationCap className="h-8 w-8" />
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-lg mb-1">{edu.degree}</h4>
                      <p className="mb-1">{edu.institution}</p>
                      <p className="text-sm text-gray-600">{edu.year}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
          {/* Honors & Awards */}
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-serif font-bold mb-8 text-[#14213D]">Honors & Awards</h3>
            
            <div className="space-y-4">
              {awards.map((award, index) => (
                <AwardCard 
                  key={index}
                  title={award.title}
                  year={award.year}
                  icon={<Award className="h-6 w-6" />}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
