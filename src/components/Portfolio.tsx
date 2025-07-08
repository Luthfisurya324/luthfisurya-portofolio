import React, { useEffect, useRef, useState } from 'react';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
}

const Portfolio: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  const categories = ['All', 'Logo Design', 'Video Editing', 'Flyer/Poster', 'Animation', 'Website'];

  const projects: Project[] = [
    {
      id: 1,
      title: 'Modern Brand Identity',
      category: 'Logo Design',
      description: 'Complete brand identity design for a tech startup including logo, color palette, and brand guidelines.',
      image: '/api/placeholder/400/300',
      tags: ['Branding', 'Logo', 'Identity'],
      link: '#'
    },
    {
      id: 2,
      title: 'Corporate Video Campaign',
      category: 'Video Editing',
      description: 'Professional corporate video with motion graphics and color grading for a financial services company.',
      image: '/api/placeholder/400/300',
      tags: ['Video', 'Motion Graphics', 'Corporate'],
      link: '#'
    },
    {
      id: 3,
      title: 'Event Promotion Poster',
      category: 'Flyer/Poster',
      description: 'Eye-catching poster design for a music festival with bold typography and vibrant imagery.',
      image: '/api/placeholder/400/300',
      tags: ['Print Design', 'Typography', 'Event'],
      link: '#'
    },
    {
      id: 4,
      title: 'Animated Logo Reveal',
      category: 'Animation',
      description: 'Dynamic logo animation with smooth transitions and modern motion design principles.',
      image: '/api/placeholder/400/300',
      tags: ['Animation', 'Motion Design', 'Logo'],
      link: '#'
    },
    {
      id: 5,
      title: 'E-commerce Website',
      category: 'Website',
      description: 'Responsive e-commerce website built with React and modern web technologies.',
      image: '/api/placeholder/400/300',
      tags: ['React', 'E-commerce', 'Responsive'],
      link: '#'
    },
    {
      id: 6,
      title: 'Restaurant Menu Design',
      category: 'Flyer/Poster',
      description: 'Elegant menu design with clean typography and appetizing food photography layout.',
      image: '/api/placeholder/400/300',
      tags: ['Menu Design', 'Typography', 'Food'],
      link: '#'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
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

  useEffect(() => {
    if (activeFilter === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === activeFilter));
    }
  }, [activeFilter]);

  return (
    <section ref={sectionRef} id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
            My Portfolio
          </h2>
          <div className="w-24 h-1 bg-black mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A collection of my recent work across different creative disciplines
          </p>
        </div>

        {/* Filter Buttons */}
        <div
          className={`flex flex-wrap justify-center gap-4 mb-12 transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2 text-sm font-medium transition-all duration-300 border-2 ${
                activeFilter === category
                  ? 'bg-black text-white border-black'
                  : 'bg-white text-black border-gray-300 hover:border-black'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group bg-white border border-gray-200 overflow-hidden hover:border-gray-400 transition-all duration-500 transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
              style={{ transitionDelay: `${500 + index * 100}ms` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden aspect-[4/3] bg-gray-100">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <div className="text-gray-500 text-center">
                    <div className="text-4xl mb-2">🎨</div>
                    <div className="text-sm font-medium">{project.category}</div>
                  </div>
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center">
                  <div className="transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <a
                      href={project.link}
                      className="inline-flex items-center px-4 py-2 bg-white text-black font-medium hover:bg-gray-100 transition-colors duration-200"
                    >
                      View Project
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-gray-700 transition-colors duration-200">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div
          className={`text-center mt-16 transform transition-all duration-1000 delay-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <p className="text-lg text-gray-600 mb-6">
            Interested in working together?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-3 bg-black text-white font-medium hover:bg-gray-800 transition-all duration-300"
          >
            Start a Project
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;