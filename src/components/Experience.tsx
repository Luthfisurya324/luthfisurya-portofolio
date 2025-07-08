import React from 'react';
import { cvData } from '../data/cvData';
import { FaBriefcase, FaLightbulb } from 'react-icons/fa';

const Experience: React.FC = () => {
  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 geometric-pattern opacity-20"></div>
      <div className="absolute top-20 left-20 w-32 h-32 border border-gray-200 rotate-45 opacity-15"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-white rotate-12 opacity-30 shadow-sm"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Enhanced Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display mb-4 tracking-tight text-gray-900 text-shadow-medium relative">
            <span className="relative z-10">Perjalanan Profesional</span>
            <div className="absolute -inset-2 bg-gradient-to-r from-transparent via-gray-100 to-transparent opacity-40 blur-sm"></div>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gray-500 to-transparent mx-auto relative">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-300 via-gray-600 to-gray-300 animate-pulse"></div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Enhanced Work Experience Column */}
          <div className="relative">
            <h3 className="text-2xl font-semibold mb-8 flex items-center text-gray-800 relative group">
              <FaBriefcase className="mr-4 text-black group-hover:scale-110 transition-transform duration-300" />
              <span className="relative z-10">Pengalaman Kerja</span>
              <div className="absolute -bottom-1 left-12 w-0 h-0.5 bg-black group-hover:w-32 transition-all duration-300"></div>
            </h3>
            <div className="relative border-l-2 border-gray-300 ml-3 hover:border-gray-400 transition-colors duration-300">
              {/* Timeline gradient overlay */}
              <div className="absolute top-0 left-0 w-0.5 h-full bg-gradient-to-b from-gray-400 via-gray-500 to-gray-400 -ml-px opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
              
              {cvData.experiences.map((exp, index) => (
                <div key={index} className="mb-10 ml-8 group hover-lift">
                  <span className="absolute flex items-center justify-center w-8 h-8 bg-white border-2 border-gray-300 rounded-full -left-4 ring-4 ring-white group-hover:border-black group-hover:scale-110 transition-all duration-300 shadow-sm">
                    <FaBriefcase className="w-3 h-3 text-gray-600 group-hover:text-black transition-colors duration-300" />
                  </span>
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 group-hover:shadow-md group-hover:border-gray-200 transition-all duration-300">
                    <h4 className="flex items-center mb-2 text-lg font-semibold text-gray-900 group-hover:text-black transition-colors duration-300">
                      {exp.role}
                    </h4>
                    <p className="block mb-3 text-sm font-medium leading-none text-gray-500 group-hover:text-gray-600 transition-colors duration-300">
                      {exp.company} | {exp.period}
                    </p>
                    <p className="text-base font-normal text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      {exp.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Projects Column */}
          <div className="relative">
            <h3 className="text-2xl font-semibold mb-8 flex items-center text-gray-800 relative group">
              <FaLightbulb className="mr-4 text-black group-hover:scale-110 transition-transform duration-300" />
              <span className="relative z-10">Proyek & Kompetisi</span>
              <div className="absolute -bottom-1 left-12 w-0 h-0.5 bg-black group-hover:w-36 transition-all duration-300"></div>
            </h3>
            <div className="relative border-l-2 border-gray-300 ml-3 hover:border-gray-400 transition-colors duration-300">
              {/* Timeline gradient overlay */}
              <div className="absolute top-0 left-0 w-0.5 h-full bg-gradient-to-b from-gray-400 via-gray-500 to-gray-400 -ml-px opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
              
              {cvData.projects.map((proj, index) => (
                <div key={index} className="mb-10 ml-8 group hover-lift">
                  <span className="absolute flex items-center justify-center w-8 h-8 bg-white border-2 border-gray-300 rounded-full -left-4 ring-4 ring-white group-hover:border-black group-hover:scale-110 transition-all duration-300 shadow-sm">
                    <FaLightbulb className="w-3 h-3 text-gray-600 group-hover:text-black transition-colors duration-300" />
                  </span>
                  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 group-hover:shadow-md group-hover:border-gray-200 transition-all duration-300">
                    <h4 className="flex items-center mb-2 text-lg font-semibold text-gray-900 group-hover:text-black transition-colors duration-300">
                      {proj.name}
                    </h4>
                    <p className="block mb-3 text-sm font-medium leading-none text-gray-500 group-hover:text-gray-600 transition-colors duration-300">
                      {proj.role} | {proj.period}
                    </p>
                    <p className="text-base font-normal text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      {proj.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
