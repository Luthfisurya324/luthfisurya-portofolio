import React from 'react';
import { cvData } from '../data/cvData';
import { FaGraduationCap } from 'react-icons/fa';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 tracking-tight text-black">
            Riwayat Pendidikan
          </h2>
                    <div className="w-24 h-1 bg-gray-300 mx-auto"></div>
        </div>

        <div className="space-y-8">
          {cvData.educations.map((edu, index) => (
                        <div key={index} className="flex items-start p-6 bg-gray-100 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex-shrink-0">
                                <span className="flex items-center justify-center w-12 h-12 bg-gray-200 rounded-full">
                                    <FaGraduationCap className="w-6 h-6 text-black" />
                </span>
              </div>
              <div className="ml-6">
                                <h3 className="text-xl font-semibold text-black">{edu.institution}</h3>
                <p className="text-md text-gray-700 mt-1">{edu.major}</p>
                <p className="text-sm text-gray-500 mt-1">{edu.period}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
