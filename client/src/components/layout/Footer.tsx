const Footer = () => {
  const currentYear = new Date().getFullYear();
  const version = "1.1.0"; // Updated version number

  return (
    <footer className="bg-[#14213D] py-8 text-white border-t border-[#FCA311]">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {currentYear} Sums Uz Zaman. All rights reserved.</p>
        <p className="text-sm text-[#E5E5E5] mt-2">Cybersecurity Professional & Researcher</p>
        <p className="text-xs text-[#E5E5E5] mt-1">v{version}</p>
      </div>
    </footer>
  );
};

export default Footer;
