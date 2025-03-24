import { useState } from 'react';
import ProjectCard from '@/components/ui/project-card';
import { Cpu, AlertTriangle, Wifi, Cloud, Database, Bluetooth, Activity, Search } from 'lucide-react';
import { motion } from 'framer-motion';

const ProjectsSection = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);

  const initialProjects = [
    {
      title: "AI-Based Intrusion Detection System",
      year: "2024",
      description: "Designed and implemented an AI-powered IDS using Python, TensorFlow, and network simulation tools, significantly boosting real-time threat detection accuracy. Tailored for IoT and self-driving car systems, enabling the early detection of zero-day attacks.",
      technologies: ["Python", "TensorFlow", "Network Security", "IoT"],
      icon: <Cpu className="h-16 w-16 text-[#FCA311]" />
    },
    {
      title: "Malware Reverse Engineering",
      year: "2024",
      description: "Analyzed advanced malware samples (Operation Triangulation/Pegasus, DoublePulsar) in a sandboxed environment. Examined assembly code, runtime behavior, and network activity to develop mitigation strategies. Documented findings and recommended countermeasures.",
      technologies: ["Reverse Engineering", "IDA Pro", "Ghidra", "Malware Analysis"],
      icon: <AlertTriangle className="h-16 w-16 text-[#FCA311]" />
    },
    {
      title: "Wireless Security Survey",
      year: "2023",
      description: "Executed vulnerability assessments on private Wi-Fi networks using Aircrack-ng and Wireshark. Identified security weaknesses and implemented enhancements to mitigate risks, improving overall network resilience.",
      technologies: ["Aircrack-ng", "Wireshark", "Network Security", "Penetration Testing"],
      icon: <Wifi className="h-16 w-16 text-[#FCA311]" />
    },
    {
      title: "Web App Incident Response",
      year: "2023",
      description: "Contributed to a red team/blue team exercise focused on cloud security and IAM. Investigated misconfigurations and cyber-attacks in cloud environments, leveraging cloud-native and third-party tools. Demonstrated effective incident response in a simulated real-world scenario.",
      technologies: ["Cloud Security", "IAM", "Red Team", "Incident Response"],
      icon: <Cloud className="h-16 w-16 text-[#FCA311]" />
    }
  ];

  const additionalProjects = [
    {
      title: "Private Blockchain Project",
      year: "2022",
      description: "Developed a scalable private Ethereum blockchain using Solidity, Truffle, and VirtualBox. Demonstrated robust smart contract deployment and efficient handling of increased transactional loads, underscoring blockchain security principles.",
      technologies: ["Blockchain", "Solidity", "Ethereum", "Smart Contracts"],
      icon: <Database className="h-16 w-16 text-[#FCA311]" />
    },
    {
      title: "Bluetooth Low Energy Sniffer Device",
      year: "2022",
      description: "Designed a BLE sniffer with an nRF51822 SoC and Wireshark for packet analysis. Captured BLE communications from nearby devices and logged results for further examination. Implemented a user-friendly GUI using Qt.",
      technologies: ["BLE", "IoT", "Wireshark", "Embedded Systems"],
      icon: <Bluetooth className="h-16 w-16 text-[#FCA311]" />
    },
    {
      title: "MMWave Radar Development",
      year: "2022",
      description: "Created firmware and APIs for a 77 GHz radar sensor using the NXP S32R2XX 32-bit processor. Optimized sensor data processing and user interface design, improving detection accuracy in advanced sensor applications.",
      technologies: ["Radar", "Embedded Systems", "Signal Processing", "API Development"],
      icon: <Activity className="h-16 w-16 text-[#FCA311]" />
    },
    {
      title: "TrashNet Object Detection",
      year: "2022",
      description: "Built a real-time object detection system for recyclables using Python, OpenCV, and machine learning. Achieved over 90% classification accuracy, enabling automated identification of recyclable items in various environments.",
      technologies: ["Computer Vision", "Python", "OpenCV", "Machine Learning"],
      icon: <Search className="h-16 w-16 text-[#FCA311]" />
    }
  ];

  const handleLoadMore = () => {
    setLoadingMore(true);
    setTimeout(() => {
      setShowAllProjects(true);
      setLoadingMore(false);
    }, 1000);
  };

  const projects = showAllProjects ? [...initialProjects, ...additionalProjects] : initialProjects;

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
    <section id="projects" className="py-16 bg-[#E5E5E5]">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-serif font-bold mb-12 text-[#14213D] text-center"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <ProjectCard
                title={project.title}
                year={project.year}
                description={project.description}
                technologies={project.technologies}
                icon={project.icon}
              />
            </motion.div>
          ))}
        </motion.div>
        
        {!showAllProjects && (
          <motion.div 
            className="mt-8 text-center"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <button 
              onClick={handleLoadMore} 
              className={`bg-[#14213D] text-white px-6 py-3 rounded shadow hover:bg-opacity-90 transition-all duration-300 ${loadingMore ? 'opacity-75 cursor-wait' : ''}`}
              disabled={loadingMore}
            >
              {loadingMore ? 'Loading...' : 'Load More Projects'}
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
