import { Mail, Phone, MapPin, Linkedin, BookOpen, Github } from 'lucide-react';
import ContactForm from '@/components/ui/contact-form';
import { motion } from 'framer-motion';

const ContactSection = () => {
  const contactInfo = {
    email: 's.u.zaman@ieee.org',
    phone: '978-942-8150',
    location: 'Manhattan, New York'
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/suzaman',
      icon: <Linkedin className="h-5 w-5" />
    },
    {
      name: 'Google Scholar',
      url: 'https://scholar.google.com/citations?user=WbUqDG8AAAAJ&hl=en',
      icon: <BookOpen className="h-5 w-5" />
    },
    {
      name: 'GitHub',
      url: '#',
      icon: <Github className="h-5 w-5" />
    }
  ];

  return (
    <section id="contact" className="py-16 bg-[#14213D] text-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-serif font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Get In Touch
        </motion.h2>
        
        <div className="flex flex-col md:flex-row gap-8 md:gap-16">
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-serif font-bold mb-6 text-[#FCA311]">Contact Information</h3>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="mr-4 text-[#FCA311]">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Email</h4>
                  <a 
                    href={`mailto:${contactInfo.email}`} 
                    className="text-[#E5E5E5] hover:text-[#FCA311] transition-colors duration-300"
                  >
                    {contactInfo.email}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 text-[#FCA311]">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Phone</h4>
                  <a 
                    href={`tel:+1${contactInfo.phone.replace(/-/g, '')}`} 
                    className="text-[#E5E5E5] hover:text-[#FCA311] transition-colors duration-300"
                  >
                    {contactInfo.phone}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 text-[#FCA311]">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Location</h4>
                  <p className="text-[#E5E5E5]">{contactInfo.location}</p>
                </div>
              </div>
            </div>
            
            <h3 className="text-2xl font-serif font-bold mb-6 text-[#FCA311]">Connect</h3>
            
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 rounded-full bg-[#E5E5E5] bg-opacity-20 flex items-center justify-center hover:bg-[#FCA311] hover:text-[#14213D] transition-all duration-300"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-serif font-bold mb-6 text-[#FCA311]">Send a Message</h3>
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
