import React, { useRef, useState } from "react";
import { useInView } from "../utils/useInView";

// Icon imports
import { FaJava } from "react-icons/fa";
import {
  SiPython,
  SiC,
  SiCplusplus,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiReact,
  SiAngular,
  SiTailwindcss,
  SiFirebase,
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
  SiGraphql,
  SiMysql,
  SiGithub,
  SiDocker,
  SiJest,
  SiCss3,
} from "react-icons/si";

// Skill interface
interface Skill {
  name: string; // lowercase name matching CSS variables
  percentage: number;
  Icon: React.ComponentType<{ size?: number; color?: string }>;
}

// Skills data with names matching CSS variables
const programmingSkills: Skill[] = [
  { name: "java", percentage: 85, Icon: FaJava },
  { name: "python", percentage: 90, Icon: SiPython },
  { name: "c", percentage: 80, Icon: SiC },
  
  { name: "typescript", percentage: 85, Icon: SiTypescript },
  { name: "javascript", percentage: 90, Icon: SiJavascript },
];

const frontendSkills: Skill[] = [
  { name: "html", percentage: 95, Icon: SiHtml5 },
  { name: "css", percentage: 95, Icon: SiCss3},
  { name: "react", percentage: 88, Icon: SiReact },
  { name: "angular", percentage: 80, Icon: SiAngular },
  
  
];

const backendSkills: Skill[] = [
  { name: "nodedotjs", percentage: 82, Icon: SiNodedotjs },
  { name: "mongodb", percentage: 75, Icon: SiMongodb },
  
  { name: "mysql", percentage: 82, Icon: SiMysql },
];

const otherSkills: Skill[] = [
  { name: "github", percentage: 88, Icon: SiGithub },
  {name:"Firebase", percentage: 80, Icon: SiFirebase },
];

// Circular skill component
const CircularSkill: React.FC<{ skill: Skill; delay: number; isVisible: boolean }> = ({
  skill,
  delay,
  isVisible,
}) => {
  const [hovered, setHovered] = useState(false);
  const radius = 50;
  const stroke = 8;
  const normalizedRadius = radius - stroke;
  const circumference = normalizedRadius * 2 * Math.PI;
  const offset = isVisible
    ? circumference - (skill.percentage / 100) * circumference
    : circumference;

  return (
    <div
      className="flex flex-col items-center text-center mb-6 cursor-pointer select-none"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <svg height={radius * 2} width={radius * 2} className="mb-2">
        <defs>
          <linearGradient id={`${skill.name}-gradient`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={`rgb(var(--gradient-${skill.name}-from))`} />
            <stop offset="100%" stopColor={`rgb(var(--gradient-${skill.name}-to))`} />
          </linearGradient>
        </defs>
        <circle
          stroke="#1f2937"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          stroke={`url(#${skill.name}-gradient)`}
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          className="transition-all duration-1000 ease-out"
          style={{ transitionDelay: `${delay}ms` }}
        />
        {/* Show icon or percentage on hover */}
        {!hovered ? (
          <foreignObject x={radius - 20} y={radius - 20} width="40" height="40">
            <skill.Icon size={40} color="#7dd3fc" />
          </foreignObject>
        ) : (
          <text
            x="50%"
            y="50%"
            dominantBaseline="middle"
            textAnchor="middle"
            fill="#7dd3fc"
            fontSize="18"
            fontWeight="bold"
            className="pointer-events-none"
          >
            {skill.percentage}%
          </text>
        )}
      </svg>
      <span className="text-blue-300 text-sm font-medium capitalize">{skill.name.replace(/dot/g, ".")}</span>
    </div>
  );
};

const Skills: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-300">My Skills</h2>
          <div className="w-20 h-1 bg-blue-300 mx-auto mt-2 mb-4"></div>
          <p className="text-blue-300 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: "Programming Languages", skills: programmingSkills },
            { title: "Frontend Development", skills: frontendSkills },
            { title: "Backend Development", skills: backendSkills },
            { title: "Other Skills", skills: otherSkills },
          ].map((section, sectionIndex) => (
            <div
              key={section.title}
              className="bg-gray-900 p-6 rounded-lg shadow-lg hover:-translate-y-1 transform transition-transform duration-300"
            >
              <h3 className="text-xl font-bold text-blue-300 mb-4 pb-2 border-b border-gray-700">
                {section.title}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {section.skills.map((skill, index) => (
                  <CircularSkill
                    key={skill.name}
                    skill={skill}
                    delay={index * 100 + sectionIndex * 300}
                    isVisible={isInView}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
