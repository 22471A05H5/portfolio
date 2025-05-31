import React, { useRef } from 'react';
import { Github, Bookmark } from 'lucide-react';
import { useInView } from '../utils/useInView';
import placement from "../assets/placement.png";
import food from "../assets/food.png";
import android from "../assets/android.png";
import sport from "../assets/sport.png";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  codeLink: string;
  category: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Placement Beacon',
    description: 'A placement management platform using React for frontend, Node.js for backend, and MongoDB as database.',
    image: placement,
    technologies: ['React', 'Node.js', 'MongoDB'],
    codeLink: 'https://github.com/22471A05H5/react',
    category: 'fullstack'
  },
  {
    id: 2,
    title: 'Food Donation Platform',
    description: 'An Angular-based web app for connecting food donors with NGOs. Backend powered by MySQL.',
    image: food,
    technologies: ['Angular', 'MySQL'],
    codeLink: 'https://github.com/22471A05H5/CSP-Project',
    category: 'fullstack'
  },
  {
    id: 3,
    title: 'Android High School App',
    description: 'A school-focused task management app developed in Kotlin with Firebase integration.',
    image: android,
    technologies: ['Kotlin', 'XML', 'Firebase'],
    codeLink: 'https://github.com/22471A05H5/AndroidProject-1',
    category: 'mobile'
  },
  {
    id: 4,
    title: 'Jubli Sports Site',
    description: 'A static sports showcase website using HTML, CSS, and JavaScript.',
    image: sport,
    technologies: ['HTML', 'CSS', 'JavaScript'],
    codeLink: 'https://github.com/22471A05H5/jubli',
    category: 'frontend'
  },
  
];


const Projects: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="py-20 bg-black text-blue-300"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">My Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-2 mb-4"></div>
          <p className="max-w-2xl mx-auto">
            A showcase of my recent work and contributions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className={`bg-gray-900 rounded-lg shadow-md overflow-hidden transform transition-all duration-500 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="h-48 overflow-hidden relative group">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <a 
                    href={project.codeLink} 
                    className="bg-blue-300 text-black p-2 rounded-full hover:bg-blue-400 transition-colors"
                    aria-label="View source code"
                  >
                    <Github size={18} />
                  </a>
                </div>
              </div>
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <span className="bg-blue-800 text-blue-100 text-xs px-2 py-1 rounded capitalize">
                    {project.category}
                  </span>
                </div>
                <p className="text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map(tech => (
                    <span 
                      key={tech} 
                      className="bg-blue-950 text-blue-200 text-xs px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="text-right">
                  <a 
                    href={project.codeLink} 
                    className="text-blue-300 text-sm font-medium hover:text-white transition-colors flex items-center justify-end"
                  >
                    Source Code <Github size={14} className="ml-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default Projects;
