import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollActive, setScrollActive] = useState(false);
  const [location] = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollActive(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu on section navigation
  const handleNavClick = (sectionId: string) => {
    setIsOpen(false);
    
    // Smooth scroll to section
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const navItems = [
    { label: "About", id: "about" },
    { label: "Experience", id: "experience" },
    { label: "Publications", id: "publications" },
    { label: "Projects", id: "projects" },
    { label: "Education", id: "education" },
    { label: "Certifications", id: "certifications" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <header className={`fixed w-full bg-white shadow-md z-50 transition-all duration-300 ${
      scrollActive ? "py-2" : "py-4"
    }`}>
      <nav className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/">
          <a className="text-xl font-serif font-bold text-[#14213D]">Sums Uz Zaman</a>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="text-[#14213D] hover:text-[#FCA311] transition-colors duration-300"
            >
              {item.label}
            </button>
          ))}
        </div>
        
        {/* Mobile Navigation Toggle */}
        <button 
          onClick={toggleMenu} 
          className="md:hidden text-[#14213D] focus:outline-none"
          aria-label="Toggle mobile menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
      
      {/* Mobile Menu */}
      <div className={`md:hidden bg-white shadow-md ${isOpen ? "block" : "hidden"}`}>
        <div className="container mx-auto px-4 py-2 flex flex-col space-y-3">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="text-[#14213D] hover:text-[#FCA311] py-2 transition-colors duration-300"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
