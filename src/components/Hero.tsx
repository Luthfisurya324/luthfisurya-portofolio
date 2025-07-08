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
        <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-white text-black">
      <div className="max-w-4xl mx-auto text-center">
        <div
          className={`transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <p className="text-lg sm:text-xl text-gray-500 mb-4 font-light tracking-wide">
            Hello, I'm
          </p>
        </div>

        <div
          className={`transform transition-all duration-1000 delay-500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tight text-black">
            {cvData.name}
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
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a
              href="#portfolio"
              className="group relative px-8 py-3 bg-black text-white font-semibold rounded-lg transition-all duration-300 hover:bg-gray-800 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              View My Work
            </a>
            
            <a
              href="#contact"
              className="group px-8 py-3 border-2 border-black text-black font-semibold rounded-lg transition-all duration-300 hover:bg-black hover:text-white"
            >
              Get In Touch
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