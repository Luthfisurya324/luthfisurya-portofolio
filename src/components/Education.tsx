import React from 'react';
import { cvData } from '../data/cvData';
import { FaGraduationCap } from 'react-icons/fa';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-gray-50 to-transparent rounded-full translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-gray-100/50 to-transparent rounded-full -translate-x-32 translate-y-32"></div>
        <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-gray-300 rounded-full opacity-60"></div>
        <div className="absolute top-2/3 right-1/3 w-1 h-1 bg-gray-400 rounded-full opacity-40"></div>
        <div className="absolute bottom-1/4 right-1/4 w-1.5 h-1.5 bg-gray-200 rounded-full opacity-50"></div>
      </div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Enhanced Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 tracking-tight text-black font-display relative">
            <span className="relative">
              Riwayat Pendidikan
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-transparent via-black to-transparent group-hover:w-full transition-all duration-500"></div>
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-gray-400 via-gray-600 to-gray-400 mx-auto relative">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Perjalanan akademis yang membentuk fondasi pengetahuan dan keterampilan
          </p>
        </div>

        <div className="space-y-6">
          {cvData.educations.map((edu, index) => (
            <div key={index} className="group relative">
              {/* Enhanced Education Card */}
              <div className="flex items-start p-8 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-xl transition-all duration-500 relative overflow-hidden hover-lift">
                {/* Background effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-gray-100/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -top-1 -right-1 w-4 h-4 border border-gray-200 rotate-45 opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                
                <div className="flex-shrink-0 relative z-10">
                  <span className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full border border-gray-300 group-hover:border-gray-400 transition-all duration-500 group-hover:scale-110">
                    <FaGraduationCap className="w-7 h-7 text-black group-hover:scale-110 transition-transform duration-500" />
                  </span>
                </div>
                
                <div className="ml-8 relative z-10 flex-1">
                  <h3 className="text-xl font-semibold text-black group-hover:text-gray-900 transition-colors duration-300 relative">
                    {edu.institution}
                    <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-500"></div>
                  </h3>
                  <p className="text-lg text-gray-700 mt-2 group-hover:text-gray-800 transition-colors duration-300 font-medium">{edu.major}</p>
                  <p className="text-sm text-gray-500 mt-2 group-hover:text-gray-600 transition-colors duration-300 flex items-center">
                    <span className="w-2 h-2 bg-gray-400 rounded-full mr-2 group-hover:bg-gray-500 transition-colors duration-300"></span>
                    {edu.period}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
