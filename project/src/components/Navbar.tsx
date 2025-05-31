import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import '../sections/navbar.css';


const navLinks = [
  { id: 'about', name: 'About Me' },
  { id: 'skills', name: 'Skills' },
  { id: 'certificates', name: 'Certificates' },
  { id: 'projects', name: 'Projects' },
  { id: 'contact', name: 'Contact' }
];

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Update navbar style based on scroll position
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id') || '';

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavLinkClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
  isScrolled ? 'bg-black/80 shadow-lg py-2' : 'bg-transparent py-4'
}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a 
          href="#" 
          className="text-2xl font-bold text-blue-300 hover:text-blue-700 transition-colors"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          Mounica
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navLinks.map(link => (
              <li key={link.id}>
                <button
  onClick={() => handleNavLinkClick(link.id)}
  className={`navbar-link ${activeSection === link.id ? 'navbar-link-active' : ''}`}
>
  {link.name}
</button>

              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Navigation Toggle */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div 
        className={`md:hidden bg-white absolute w-full left-0 shadow-md transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <nav className="container mx-auto px-4 py-3">
          <ul className="space-y-3">
            {navLinks.map(link => (
              <li key={link.id}>
                <button
  onClick={() => handleNavLinkClick(link.id)}
  className={`mobile-link ${activeSection === link.id ? 'mobile-link-active' : ''}`}
>
  {link.name}
</button>

              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;