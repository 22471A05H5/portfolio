import React, { useState, useRef } from 'react';
import { Award, X } from 'lucide-react';
import { useInView } from '../utils/useInView';

import cert1 from "../assets/Enterprise_Design_Thinking_Practitioner_Badge_page-0001.jpg";
import cert2 from "../assets/Introduction To Internet Of Things_page-0001.jpg";
import cert3 from "../assets/python_basic certificate_page-0001.jpg";
import cert4 from "../assets/Machine Learning Training - Certificate of Completion (1)_page-0001.jpg";
import cert5 from "../assets/sql_basic certificate_page-0001.jpg";
import cert6 from "../assets/javascript_basic certificate_page-0001.jpg";

interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  description: string;
  image: string;
  pdf?: string;
}

const certificates: Certificate[] = [
  {
    id: 1,
    title: 'Enterprise Design Thinking',
    issuer: 'IBM',
    date: 'July 2024',
    description: 'Practitioner-level badge from IBM validating design thinking methodologies.',
    image: cert1
  },
  {
    id: 2,
    title: 'Introduction to Internet of Things',
    issuer: 'NPTEL',
    date: 'April 2024',
    description: 'An introductory course to the Internet of Things concepts and applications.',
    image: cert2
  },
  {
    id: 3,
    title: 'Python Basics',
    issuer: 'HackerRank',
    date: 'June 2023',
    description: 'Certificate of completion for basic Python programming concepts.',
    image: cert3
  },
  {
    id: 4,
    title: 'Machine Learning Training',
    issuer: 'SkillUp',
    date: 'Feb 2025',
    description: 'Completed machine learning training including supervised and unsupervised algorithms.',
    image: cert4
  },
  {
    id: 5,
    title: 'SQL Basics',
    issuer: 'HackerRank',
    date: 'August 2024',
    description: 'Demonstrated proficiency in writing basic SQL queries and database management.',
    image: cert5
  },
  {
    id: 6,
    title: 'JavaScript Basics',
    issuer: 'HackerRank',
    date: 'Nov 2023',
    description: 'Completed the basics of JavaScript programming language on HackerRank.',
    image: cert6
  }
];

const Certificates: React.FC = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  const openModal = (certificate: Certificate) => {
    setSelectedCertificate(certificate);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedCertificate(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section
      id="certificates"
      ref={sectionRef}
      className="py-20 bg-black"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-300">Certificates</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-2 mb-4"></div>
          <p className="text-blue-300 max-w-2xl mx-auto">
            Professional certifications that validate my skills and expertise in various technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((certificate, index) => (
            <div
              key={certificate.id}
              className={`bg-gray-900 rounded-lg shadow-md overflow-hidden transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={() => openModal(certificate)}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center mb-2">
                  <Award size={20} className="text-blue-300 mr-2" />
                  <h3 className="text-lg font-semibold text-blue-300">{certificate.title}</h3>
                </div>
                <p className="text-blue-300 text-sm mb-2">Issued by {certificate.issuer}</p>
                <p className="text-blue-200 text-sm">{certificate.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certificate Modal */}
      {selectedCertificate && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-auto text-blue-300">
            <div className="relative">
              <img
                src={selectedCertificate.image}
                alt={selectedCertificate.title}
                className="w-full h-64 object-cover"
              />
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 bg-white text-black rounded-full p-1 shadow-md hover:bg-gray-100 transition-colors"
                aria-label="Close modal"
              >
                <X size={24} />
              </button>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-blue-300 mb-2">{selectedCertificate.title}</h3>
              <p className="text-blue-300 mb-4">
                Issued by {selectedCertificate.issuer} • {selectedCertificate.date}
              </p>
              <p className="text-blue-200 mb-6">{selectedCertificate.description}</p>
              <div className="flex justify-end">
                <button
                  onClick={closeModal}
                  className="bg-gray-200 text-black px-4 py-2 rounded-md hover:bg-gray-300 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;
