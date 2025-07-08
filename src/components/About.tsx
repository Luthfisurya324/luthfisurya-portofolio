import React, { useEffect, useRef, useState } from 'react';
import { cvData } from '../data/cvData';
import { FaPencilRuler, FaVideo, FaBroadcastTower, FaTools } from 'react-icons/fa';

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

      const getSkillIcon = (category: string) => {
    switch (category) {
      case 'Desain Grafis':
        return <FaPencilRuler className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300 text-black" />;
      case 'Video Editing & Motion':
        return <FaVideo className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300 text-black" />;
      case 'Live Production':
        return <FaBroadcastTower className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300 text-black" />;
      default:
        return <FaTools className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300 text-black" />;
    }
  };

  const stats = [
    { number: '6+', label: 'Tahun Pengalaman' },
    { number: '10+', label: 'Proyek Terselesaikan' },
    { number: '4', label: 'Organisasi Terlibat' },
    { number: '100%', label: 'Passion Driven' }
  ];

  return (
        <section ref={sectionRef} id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-10 right-10 w-40 h-40 border border-gray-100 rotate-12 opacity-30"></div>
      <div className="absolute bottom-20 left-10 w-20 h-20 bg-gray-50 rotate-45 opacity-40"></div>
      <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-gray-300 rounded-full opacity-50"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Enhanced Section Header */}
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display mb-4 tracking-tight text-shadow-medium relative">
            <span className="relative z-10">About Me</span>
            <div className="absolute -inset-2 bg-gradient-to-r from-transparent via-gray-100 to-transparent opacity-30 blur-sm"></div>
          </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gray-400 to-transparent mx-auto relative">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-500 to-gray-200 animate-pulse"></div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div
            className={`transform transition-all duration-1000 delay-300 ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
            }`}
          >
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Dengan pengalaman lebih dari 6 tahun di industri kreatif, saya telah berkembang dari seorang desainer grafis menjadi spesialis digital yang serba bisa. Perjalanan saya dimulai dari bangku SMK Multimedia, berlanjut ke proyek-proyek nyata seperti menjadi Digital Imaging Technician untuk Screenplay Films, hingga memimpin tim kreatif di berbagai festival.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Saat ini, saya sedang mendalami Bisnis Digital di Universitas Ibn Khaldun untuk memadukan kreativitas dengan strategi bisnis yang solid. Saya bersemangat untuk menerjemahkan ide-ide kompleks menjadi solusi visual yang fungsional dan menarik.
              </p>

              <div className="pt-6">
                <a
                  href="#contact"
                  className="inline-flex items-center px-6 py-3 border-2 border-black text-black font-medium hover:bg-black hover:text-white transition-all duration-300"
                >
                  Let's Work Together
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Skills Grid */}
          <div
            className={`transform transition-all duration-1000 delay-500 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
            }`}
          >
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {cvData.skills.map((skill, index) => (
                <div
                  key={skill.category}
                  className={`bg-white p-6 border border-gray-100 hover:border-gray-300 shadow-md hover:shadow-2xl transition-all duration-500 group transform hover:-translate-y-2 hover-lift relative overflow-hidden ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  }`}
                  style={{ transitionDelay: `${700 + index * 100}ms` }}
                >
                  {/* Subtle background pattern */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-gray-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute -top-2 -right-2 w-4 h-4 border border-gray-200 rotate-45 opacity-0 group-hover:opacity-30 transition-all duration-300"></div>
                  
                  <div className="relative z-10">
                    {getSkillIcon(skill.category)}
                    <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-black transition-colors duration-300">
                      {skill.category}
                    </h3>
                    <ul className="space-y-2">
                      {skill.technologies.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="text-gray-600 text-sm flex items-center group-hover:text-gray-800 transition-colors duration-300"
                        >
                                                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-3 group-hover:bg-black transition-all duration-300 group-hover:scale-125"></span>
                          <span className="relative">
                            {item}
                            <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gray-300 group-hover:w-full transition-all duration-500" style={{ transitionDelay: `${itemIndex * 50}ms` }}></span>
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
                <div
          className={`mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center transform transition-all duration-1000 delay-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          {stats.map((stat, index) => (
            <div key={index} className="group">
                            <div className="text-3xl sm:text-4xl font-bold text-black mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.number}
              </div>
              <div className="text-gray-600 text-sm font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;