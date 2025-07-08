import React, { useEffect, useState } from 'react';
import { cvData } from '../data/cvData';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const texts = ['Graphic Designer', 'Video Editor', 'Digital Specialist', 'Creative'];
  const typingSpeed = 150;
  const deletingSpeed = 100;
  const pauseTime = 2000;

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const handleTyping = () => {
      const current = texts[currentIndex];
      
      if (isDeleting) {
        setCurrentText(current.substring(0, currentText.length - 1));
        
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }
      } else {
        setCurrentText(current.substring(0, currentText.length + 1));
        
        if (currentText === current) {
          setTimeout(() => setIsDeleting(true), pauseTime);
          return;
        }
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, currentIndex, isDeleting, texts]);

  return (
        <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-white text-black relative overflow-hidden">
      {/* Geometric Background Elements */}
      <div className="absolute inset-0 geometric-pattern opacity-30"></div>
      <div className="absolute top-20 left-10 w-32 h-32 border border-gray-200 rotate-45 opacity-20"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 border border-gray-300 rotate-12 opacity-25"></div>
      <div className="absolute top-1/2 left-20 w-2 h-2 bg-gray-400 rounded-full opacity-40"></div>
      <div className="absolute top-1/3 right-32 w-1 h-1 bg-gray-500 rounded-full opacity-50"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div
          className={`transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <p className="text-lg sm:text-xl text-gray-500 mb-4 font-light tracking-wide relative">
            <span className="relative z-10">Hello, I'm</span>
            <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-16 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></span>
          </p>
        </div>

        <div
          className={`transform transition-all duration-1000 delay-500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display mb-6 tracking-tight text-black text-shadow-medium relative">
            <span className="relative z-10">{cvData.name}</span>
            <div className="absolute -inset-4 bg-gradient-to-r from-transparent via-gray-50 to-transparent opacity-20 blur-xl"></div>
          </h1>
        </div>

        <div
          className={`transform transition-all duration-1000 delay-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <div className="text-xl sm:text-2xl lg:text-3xl text-gray-700 mb-8 h-12">
            <span className="font-light">I'm a </span>
                        <span className="font-semibold ml-2 text-black">
              {currentText}
              <span className="animate-pulse">|</span>
            </span>
          </div>
        </div>

        <div
          className={`transform transition-all duration-1000 delay-900 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            {cvData.summary}
          </p>
        </div>

        <div
          className={`transform transition-all duration-1000 delay-1100 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <a
              href="#portfolio"
              className="group relative px-8 py-4 bg-black text-white font-semibold transition-all duration-500 hover:bg-gray-800 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 hover-lift overflow-hidden"
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-black via-gray-600 to-black opacity-20 blur group-hover:opacity-40 transition-opacity duration-300"></div>
            </a>
            
            <a
              href="#contact"
              className="group relative px-8 py-4 border-2 border-black text-black font-semibold transition-all duration-500 hover:bg-black hover:text-white overflow-hidden hover-lift"
            >
              <span className="relative z-10">Get In Touch</span>
              <div className="absolute inset-0 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              <div className="absolute -top-1 -left-1 w-2 h-2 bg-gray-300 transform rotate-45 group-hover:bg-white transition-colors duration-300"></div>
            </a>
          </div>
        </div>

        <div
          className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <div className="flex flex-col items-center animate-bounce">
            <span className="text-sm text-gray-500 mb-2 font-light">Scroll Down</span>
            <svg className="w-6 h-6 text-gray-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;