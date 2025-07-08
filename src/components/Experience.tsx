import React from 'react';
import { cvData } from '../data/cvData';
import { FaBriefcase, FaLightbulb } from 'react-icons/fa';

const Experience: React.FC = () => {
  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 tracking-tight text-gray-900">
            Perjalanan Profesional
          </h2>
          <div className="w-24 h-1 bg-gray-300 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Work Experience Column */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 flex items-center text-gray-800">
              <FaBriefcase className="mr-4 text-black" />
              Pengalaman Kerja
            </h3>
            <div className="relative border-l-2 border-gray-200 ml-3">
              {cvData.experiences.map((exp, index) => (
                <div key={index} className="mb-10 ml-8">
                  <span className="absolute flex items-center justify-center w-6 h-6 bg-gray-100 rounded-full -left-3 ring-8 ring-white">
                    <FaBriefcase className="w-3 h-3 text-gray-600" />
                  </span>
                  <h4 className="flex items-center mb-1 text-lg font-semibold text-gray-900">
                    {exp.role}
                  </h4>
                  <p className="block mb-2 text-sm font-normal leading-none text-gray-500">
                    {exp.company} | {exp.period}
                  </p>
                  <p className="text-base font-normal text-gray-600">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Projects Column */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 flex items-center text-gray-800">
              <FaLightbulb className="mr-4 text-black" />
              Proyek & Kompetisi
            </h3>
            <div className="relative border-l-2 border-gray-200 ml-3">
              {cvData.projects.map((proj, index) => (
                <div key={index} className="mb-10 ml-8">
                  <span className="absolute flex items-center justify-center w-6 h-6 bg-gray-100 rounded-full -left-3 ring-8 ring-white">
                    <FaLightbulb className="w-3 h-3 text-gray-600" />
                  </span>
                  <h4 className="flex items-center mb-1 text-lg font-semibold text-gray-900">
                    {proj.name}
                  </h4>
                  <p className="block mb-2 text-sm font-normal leading-none text-gray-500">
                    {proj.role} | {proj.period}
                  </p>
                  <p className="text-base font-normal text-gray-600">
                    {proj.description}
                  </p>
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
