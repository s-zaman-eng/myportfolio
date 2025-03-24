import { Briefcase, User, DollarSign, Building, Lightbulb, FileText } from 'lucide-react';
import TimelineItem from '@/components/ui/timeline-item';
import { motion } from 'framer-motion';

const ExperienceSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const affiliations = [
    {
      title: "Assistant General Secretary",
      organization: "BUET Robotics Society (2016)",
      icon: <User className="h-6 w-6" />
    },
    {
      title: "Treasurer",
      organization: "IEEE BUET Student Branch (2016-2017)",
      icon: <DollarSign className="h-6 w-6" />
    },
    {
      title: "Organizing Secretary",
      organization: "BUET Robotics Society (2017)",
      icon: <Building className="h-6 w-6" />
    },
    {
      title: "Student Activity Coordinator",
      organization: "IEEE Robotics & Automation Society (RAS) - Bangladesh (2018-2019)",
      icon: <Lightbulb className="h-6 w-6" />
    },
    {
      title: "Paper Reviewer",
      organization: "ICDCS 2019, PerCom 2020",
      icon: <FileText className="h-6 w-6" />
    }
  ];

  return (
    <section id="experience" className="py-16 bg-[#14213D] text-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-serif font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Professional Experience
        </motion.h2>
        
        <motion.div 
          className="relative pl-10 md:pl-16 space-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Experience Item 1 */}
          <motion.div variants={itemVariants}>
            <TimelineItem 
              title="Network & Server Maintenance Specialist"
              organization="AK Consulting Services Inc., New York, NY"
              date="September 2024 - Present"
              icon={<Briefcase className="h-4 w-4 text-[#14213D]" />}
            >
              <ul className="list-disc pl-5 space-y-2 text-[#E5E5E5]">
                <li>Oversee and maintain routers, switches, firewalls, and VPNs to optimize network performance and security.</li>
                <li>Administer Windows and Linux servers (AD, DNS, DHCP) for seamless operations.</li>
                <li>Implement security best practices, conduct vulnerability assessments, and deploy timely patches.</li>
                <li>Investigated & resolved network incidents, reducing average downtime by 30% improving service availability.</li>
                <li>Collaborate on cybersecurity policies, incident response planning, and penetration tests.</li>
                <li>Contribute to forensic analysis and recovery measures to ensure business continuity.</li>
              </ul>
            </TimelineItem>
          </motion.div>
          
          {/* Experience Item 2 */}
          <motion.div variants={itemVariants}>
            <TimelineItem 
              title="IT Support Specialist / Cybersecurity Intern"
              date="Previous Experience"
              icon={<Briefcase className="h-4 w-4 text-[#14213D]" />}
            >
              <ul className="list-disc pl-5 space-y-2 text-[#E5E5E5]">
                <li>Provided Tier 1 and 2 support for hardware, software, and network issues in a fast-paced environment.</li>
                <li>Managed incident ticketing systems (ServiceNow, Jira) and prioritized technical tasks.</li>
                <li>Assisted with virtualization (VMware, Hyper-V) and endpoint security (CrowdStrike, Symantec).</li>
                <li>Automated administrative tasks via Bash and PowerShell scripting.</li>
              </ul>
            </TimelineItem>
          </motion.div>
        </motion.div>
        
        {/* Affiliations & Leadership Section */}
        <motion.div 
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="text-2xl font-serif font-bold mb-8 text-center">Affiliations & Leadership</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {affiliations.map((affiliation, index) => (
              <div key={index} className="bg-[#14213D] bg-opacity-40 border border-[#FCA311] rounded-lg p-6">
                <div className="flex items-start">
                  <div className="mr-4 text-[#FCA311]">
                    {affiliation.icon}
                  </div>
                  <div>
                    <h4 className="font-serif font-bold mb-1">{affiliation.title}</h4>
                    <p className="text-sm text-[#E5E5E5]">{affiliation.organization}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
