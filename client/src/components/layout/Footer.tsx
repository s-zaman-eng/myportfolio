import { SiLinkedin, SiGooglescholar, SiGithub } from "react-icons/si";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary py-8 text-primary-foreground border-t border-accent">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a 
            href="https://www.linkedin.com/in/sumszaman/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
            aria-label="LinkedIn Profile"
          >
            <SiLinkedin size={24} />
          </a>
          <a 
            href="https://scholar.google.com/citations?user=hh5z1UUAAAAJ" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
            aria-label="Google Scholar Profile"
          >
            <SiGooglescholar size={24} />
          </a>
          <a 
            href="https://github.com/szaman-uw" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
            aria-label="GitHub Profile"
          >
            <SiGithub size={24} />
          </a>
        </div>
        <p>&copy; {currentYear} Sums Uz Zaman. All rights reserved.</p>
        <p className="text-sm mt-2 opacity-80">Cybersecurity Professional & Researcher</p>
      </div>
    </footer>
  );
};

export default Footer;
