import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="pt-24 bg-[#14213D] text-white">
      <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center">
        <motion.div 
          className="md:w-1/2 mb-8 md:mb-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Sums Uz Zaman</h1>
          <h2 className="text-xl md:text-2xl mb-6 text-[#FCA311] font-light">
            Cybersecurity Professional & Researcher
          </h2>
          <p className="text-lg mb-8 text-[#E5E5E5]">
            Specializing in threat intelligence, malware analysis, and cloud security with a 
            strong background in embedded systems and IoT security.
          </p>
          <div className="flex flex-wrap gap-3">
            <button 
              onClick={() => {
                const contactSection = document.getElementById("contact");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="bg-[#FCA311] text-[#14213D] font-semibold px-6 py-3 rounded shadow hover:bg-opacity-90 transition-all duration-300"
            >
              Get in Touch
            </button>
            <button 
              onClick={() => {
                const publicationsSection = document.getElementById("publications");
                if (publicationsSection) {
                  publicationsSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="bg-transparent border-2 border-[#E5E5E5] text-white font-semibold px-6 py-3 rounded hover:bg-white hover:text-[#14213D] transition-all duration-300"
            >
              View Publications
            </button>
          </div>
        </motion.div>
        <motion.div 
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="w-64 h-64 rounded-full bg-[#FCA311] flex items-center justify-center text-[#14213D] text-5xl font-bold">
            SUZ
          </div>
        </motion.div>
      </div>
      <svg className="w-full h-16 text-white" preserveAspectRatio="none" viewBox="0 0 100 100">
        <path d="M0,0 C50,100 80,100 100,0 L100,100 L0,100 Z" fill="currentColor"></path>
      </svg>
    </section>
  );
};

export default HeroSection;
