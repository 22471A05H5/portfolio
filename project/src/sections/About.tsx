import React, { useEffect, useRef } from 'react';
import { Calendar, MapPin, Briefcase, GraduationCap } from 'lucide-react';
import { useInView } from '../utils/useInView';
import resumePDF from '../assets/Pulagorla_Mounica_Resume.pdf';

const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const isInView = useInView(sectionRef, { threshold: 0.1 });

  useEffect(() => {
    if (isInView && contentRef.current) {
      contentRef.current.style.opacity = '1';
      contentRef.current.style.transform = 'translateY(0)';
    }
  }, [isInView]);

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = resumePDF;
    link.download = 'Pulagorla_Mounica_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-20 bg-black"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-300">About Me</h2>
          <div className="w-20 h-1 bg-blue-300 mx-auto mt-2 mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Get to know more about me, my background, and what drives my passion for web development.
          </p>
        </div>

        <div className="flex justify-center">
          <div 
            ref={contentRef}
            className="bg-gray-900 bg-opacity-80 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-blue-300 opacity-0 transform translate-y-10 transition-all duration-700 ease-out max-w-2xl w-full"
          >
            <h3 className="text-2xl font-bold text-blue-200 mb-4">Pulagorla Mounica</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              I'm a passionate Computer Science student with a strong interest in web development, especially in crafting clean user interfaces and adding meaningful animations. 
              I love solving bugs, exploring new technologies, and continuously improving my skills in React, CSS, and modern frontend tools.
            </p>

            <div className="space-y-4 mb-6">
              <div className="flex items-center text-gray-300">
                <Calendar size={20} className="text-blue-300 mr-3" />
                <span>Born: January 15, 1990</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin size={20} className="text-blue-300 mr-3" />
                <span>Location: Narasaraopet</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Briefcase size={20} className="text-blue-300 mr-3" />
                <span>Experience: Academic Projects & Self-Learning</span>
              </div>
              <div className="flex items-center text-gray-300">
                <GraduationCap size={20} className="text-blue-300 mr-3" />
                <span>Degree: B.Tech. in Computer Science</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a 
                href="#contact" 
                className="bg-blue-300 text-black px-6 py-2 rounded-full font-medium shadow-md hover:bg-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2"
              >
                Contact Me
              </a>
              <button
                onClick={downloadResume}
                className="bg-transparent text-blue-300 border border-blue-300 px-6 py-2 rounded-full font-medium hover:bg-blue-300 hover:text-black transition-colors focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2"
              >
                Download CV
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
