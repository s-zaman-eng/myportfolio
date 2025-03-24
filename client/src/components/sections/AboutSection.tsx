import { Server, Code, Cloud, FileCheck, Cpu } from 'lucide-react';
import SkillCard from '@/components/ui/skill-card';
import { motion } from 'framer-motion';

const AboutSection = () => {
  const skills = [
    {
      title: "Cybersecurity Tools & Methodologies",
      skills: "Splunk, Metasploit, Wireshark, Nessus, Burp Suite, Reverse Engineering (IDA/Ghidra)"
    },
    {
      title: "Infrastructure & Networking",
      skills: "Firewalls (Cisco, Fortinet), VPNs, IDS/IPS, VLAN, TCP/IP, NAT"
    },
    {
      title: "System Administration",
      skills: "Windows Server (Active Directory, Group Policy), Linux (Kali, Ubuntu), VMware, Hyper-V"
    },
    {
      title: "Scripting & Automation",
      skills: "Python (automation, ML), Bash, PowerShell, Git, GitHub (CI/CD)"
    },
    {
      title: "Cloud Security",
      skills: "AWS, Azure, GCP (IAM, data protection, threat intelligence)"
    },
    {
      title: "EDR & SIEM",
      skills: "CrowdStrike, Carbon Black, Splunk ES, QRadar"
    },
    {
      title: "Identity & Access Management",
      skills: "Okta, Azure AD, MFA, Role-based Access Control"
    },
    {
      title: "Regulatory & Compliance",
      skills: "NIST, HIPAA, GDPR, SOAR Implementation"
    },
    {
      title: "Blockchain & IoT",
      skills: "Solidity (private Ethereum networks), Raspberry Pi, Arduino"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-serif font-bold mb-12 text-[#14213D] text-center"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        
        <div className="flex flex-col md:flex-row gap-12">
          <motion.div 
            className="md:w-2/3"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-serif font-bold mb-4 text-[#14213D]">Professional Summary</h3>
            <p className="mb-6 leading-relaxed">
              Dynamic Cybersecurity professional with expertise in threat intelligence, incident response, 
              and vulnerability management. I specialize in advanced malware analysis and cloud security, 
              backed by multiple CompTIA certifications (Security+, Network+, and CySA+). My expertise spans 
              across applying security frameworks, automation, and emerging technologies to defend critical infrastructure.
            </p>
            <p className="mb-6 leading-relaxed">
              My background in electrical engineering and embedded systems gives me a unique perspective on IoT 
              security and hardware-level vulnerabilities. I approach cybersecurity challenges with a blend of 
              technical depth and practical problem-solving skills.
            </p>
            <p className="mb-6 leading-relaxed">
              I am actively open to research collaboration opportunities in cybersecurity, particularly in areas of IoT security, malware analysis, and emerging threat detection technologies.
            </p>
            <p className="leading-relaxed">
              <span className="font-semibold">Authorized to work in the U.S. without sponsorship.</span>
            </p>
          </motion.div>
          
          <motion.div 
            className="md:w-1/3 bg-[#E5E5E5] p-6 rounded-lg"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-serif font-bold mb-4 text-[#14213D]">Languages</h3>
            <div className="flex flex-wrap gap-2 mb-8">
              <span className="px-3 py-1 bg-white rounded-full shadow-sm">English (Fluent)</span>
              <span className="px-3 py-1 bg-white rounded-full shadow-sm">Bengali (Fluent)</span>
              <span className="px-3 py-1 bg-white rounded-full shadow-sm">Japanese (Intermediate)</span>
            </div>
            
            <h3 className="text-xl font-serif font-bold mb-4 text-[#14213D]">Citations</h3>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm">All Time:</span>
              <span className="font-semibold">92</span>
            </div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm">h-index:</span>
              <span className="font-semibold">3</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">i10-index:</span>
              <span className="font-semibold">2</span>
            </div>
          </motion.div>
        </div>
        
        {/* Technical Skills Section */}
        <motion.div 
          className="mt-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-serif font-bold mb-8 text-[#14213D]">Technical Skills</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div key={index} variants={itemVariants}>
                <SkillCard title={skill.title} skills={skill.skills} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;