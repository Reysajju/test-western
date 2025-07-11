'use client';

import { useEffect, useState } from 'react';

export default function Welcome() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="container mx-auto px-4">
        <div 
          className={`max-w-4xl mx-auto text-center transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-800">
            Welcome to Western Medical Writer
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Expert medical writing, editing, and publication support services for healthcare professionals and researchers.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/contact"
              className="btn btn-primary shadow-lg shadow-primary-500/20 hover:shadow-primary-500/30"
            >
              Get Started
            </a>
            <a
              href="/services"
              className="btn btn-secondary"
            >
              Our Services
            </a>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Medical Writing',
              description: 'Professional writing services for clinical research, medical documents, and healthcare communications.',
              icon: (
                <svg className="w-8 h-8 text-primary-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              ),
            },
            {
              title: 'Publication Support',
              description: 'Expert assistance with manuscript preparation, submission, and journal selection.',
              icon: (
                <svg className="w-8 h-8 text-primary-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              ),
            },
            {
              title: 'Medical Editing',
              description: 'Comprehensive editing services to ensure clarity, accuracy, and scientific rigor.',
              icon: (
                <svg className="w-8 h-8 text-primary-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              ),
            },
          ].map((service, index) => (
            <div 
              key={service.title}
              className={`card p-8 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 ${
                isVisible 
                  ? 'translate-y-0 opacity-100' 
                  : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${(index + 1) * 200}ms` }}
            >
              {service.icon}
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-primary-500/5 to-transparent pointer-events-none" aria-hidden="true" />
    </section>
  );
}
