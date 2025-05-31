import React, { useEffect, useRef } from 'react';
import { ArrowDown, Github, Linkedin, Twitter } from 'lucide-react';
import heroImage from '../assets/me.jpeg'; // Replace with your image path

const Hero: React.FC = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (headingRef.current) {
      headingRef.current.style.opacity = '1';
      headingRef.current.style.transform = 'translateY(0)';
    }

    setTimeout(() => {
      if (subheadingRef.current) {
        subheadingRef.current.style.opacity = '1';
        subheadingRef.current.style.transform = 'translateY(0)';
      }
    }, 300);

    setTimeout(() => {
      if (buttonRef.current) {
        buttonRef.current.style.opacity = '1';
        buttonRef.current.style.transform = 'translateY(0)';
      }
    }, 600);
  }, []);


  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      window.scrollTo({
        top: aboutSection.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center bg-black text-white overflow-hidden px-6">
  {/* Background Glow */}
  <div className="absolute top-0 left-0 w-80 h-80 bg-blue-500 rounded-full opacity-20 blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-700 rounded-full opacity-10 blur-3xl translate-x-1/2 translate-y-1/2"></div>

  {/* Content Wrapper */}
  <div className="container mx-auto z-10 flex flex-col-reverse md:flex-row items-center justify-between">
    {/* Text Content */}
    <div className="md:w-1/2 text-center md:text-left space-y-6 animate-fadeInLeft">
      <h1
        ref={headingRef}
        className="text-4xl md:text-5xl font-bold opacity-0 transform translate-y-8 transition-all duration-700 ease-out"
      >
        <span className="text-blue-300">Mounica</span> – Java Full Stack Developer
      </h1>
      <p
        ref={subheadingRef}
        className="text-lg text-gray-300 opacity-0 transform translate-y-8 transition-all duration-700 ease-out delay-200"
      >
         A passionate Java Full Stack Developer with a love for building clean, efficient, and user-friendly web applications.
      </p>
      <div
        className="flex justify-center md:justify-start gap-5 opacity-0 transform translate-y-4 transition-all duration-700 ease-out delay-[400ms] animate-slideUp"
      >
        <a
  href="https://github.com/22471A05H5"
  target="_blank"
  rel="noopener noreferrer"
  className="text-blue-300 mr-3 hover:text-blue-500 transition-transform hover:-translate-y-1 duration-300"
>
  <Github size={24} />
</a>
<a
  href="https://www.linkedin.com/in/mounica-pulagorla-3a8272276/"
  target="_blank"
  rel="noopener noreferrer"
  className="text-blue-300 mr-3 hover:text-blue-500 transition-transform hover:-translate-y-1 duration-300"
>
  <Linkedin size={24} />
</a>

      </div>

      <button
        ref={buttonRef}
        onClick={scrollToAbout}
        className="group mt-4 bg-blue-300 text-black px-6 py-3 rounded-full font-medium shadow-lg hover:bg-blue-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 opacity-0 transform translate-y-8 transition-all duration-700 ease-out delay-500"
      >
        <span className="flex items-center justify-center">
          Explore My Work
          <ArrowDown size={18} className="ml-2 group-hover:animate-bounce" />
        </span>
      </button>
    </div>

    {/* Profile Image (unchanged as requested) */}
    {/* Profile Image with Blob and Background Glow */}
{/* Profile Image with Blob and Glow */}
<div className="md:w-1/2 flex justify-center relative mb-10 md:mb-0">
  {/* Wrapper around image and blobs */}
  <div className="relative w-[300px] h-[356px] z-10">
    
    {/* Top Left Blob */}
    <svg
      className="absolute top-0 left-0 w-[150px] h-[150px] text-blue-300 opacity-30 z-0 blur-[2px] animate-float"
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="currentColor"
        d="M48.1,-57.6C62.5,-45.2,74,-30.4,76.8,-14.9C79.7,0.7,73.8,16.9,64.7,30.9C55.5,44.9,43.2,56.6,28.6,64.2C14,71.7,-2.9,75,-18.5,70.4C-34.1,65.9,-48.4,53.4,-58.5,38.4C-68.6,23.4,-74.4,5.9,-71.9,-10.1C-69.3,-26.1,-58.4,-40.6,-45,-53.6C-31.5,-66.6,-15.7,-78.1,0.4,-78.6C16.6,-79.1,33.1,-68,48.1,-57.6Z"
        transform="translate(100 100)"
      />
    </svg>

    {/* Bottom Right Blob */}
    <svg
      className="absolute bottom-0 right-0 w-[180px] h-[180px] text-blue-300 opacity-40 z-0 blur-[2px] animate-float-slow"
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="currentColor"
        d="M48.1,-57.6C62.5,-45.2,74,-30.4,76.8,-14.9C79.7,0.7,73.8,16.9,64.7,30.9C55.5,44.9,43.2,56.6,28.6,64.2C14,71.7,-2.9,75,-18.5,70.4C-34.1,65.9,-48.4,53.4,-58.5,38.4C-68.6,23.4,-74.4,5.9,-71.9,-10.1C-69.3,-26.1,-58.4,-40.6,-45,-53.6C-31.5,-66.6,-15.7,-78.1,0.4,-78.6C16.6,-79.1,33.1,-68,48.1,-57.6Z"
        transform="translate(100 100)"
      />
    </svg>

    {/* Image on top */}
    <img
      src={heroImage}
      alt="Mounica"
      className="relative w-full h-full object-cover rounded-3xl shadow-[0_0_60px_rgba(59,130,246,0.8)] hover:shadow-[0_0_100px_rgba(59,130,246,0.9)] transition-transform duration-500 ease-in-out hover:scale-105 z-10"
    />
  </div>
</div>

  </div>

  
  
</section>

  );
};

export default Hero;
