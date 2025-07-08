import React from 'react';
import {
  FaInstagram, FaBehance, FaYoutube, FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt
} from 'react-icons/fa';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

    const socialLinks = [
    { name: 'Instagram', icon: <FaInstagram />, url: 'https://instagram.com/luthfisurya' },
    { name: 'Behance', icon: <FaBehance />, url: 'https://behance.net/luthfisurya' },
    { name: 'YouTube', icon: <FaYoutube />, url: 'https://youtube.com/@luthfisurya' },
    { name: 'GitHub', icon: <FaGithub />, url: 'https://github.com/luthfisurya' },
    { name: 'LinkedIn', icon: <FaLinkedin />, url: 'https://linkedin.com/in/luthfisurya' },
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    'Logo Design',
    'Video Editing',
    'Poster Design',
    'Logo Animation',
    'Web Development'
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-white/5 to-transparent rounded-full -translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-white/3 to-transparent rounded-full translate-x-32 translate-y-32"></div>
        <div className="absolute top-1/2 left-1/3 w-2 h-2 bg-white/20 rounded-full"></div>
        <div className="absolute top-1/4 right-1/4 w-1 h-1 bg-white/30 rounded-full"></div>
        <div className="absolute bottom-1/3 left-1/4 w-1.5 h-1.5 bg-white/15 rounded-full"></div>
      </div>
      
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Enhanced Brand Section */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-2 relative">
                <span className="relative z-10">Luthfi Surya</span>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-white to-gray-400 group-hover:w-full transition-all duration-500"></div>
              </h3>
              <div className="w-16 h-1 bg-gradient-to-r from-gray-700 to-gray-600 mb-4 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <p className="text-gray-300 leading-relaxed hover:text-gray-200 transition-colors duration-300">
                Creative designer and developer passionate about bringing ideas to life through 
                visual storytelling and innovative digital experiences.
              </p>
            </div>
            
            {/* Enhanced Contact Info */}
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-center group hover:text-white transition-all duration-300">
                <FaEnvelope className="mr-3 group-hover:scale-110 transition-transform duration-300" />
                <a href="mailto:hello@luthfisurya.my.id" className="relative">
                  hello@luthfisurya.my.id
                  <div className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></div>
                </a>
              </div>
              <div className="flex items-center group hover:text-white transition-all duration-300">
                <FaMapMarkerAlt className="mr-3 group-hover:scale-110 transition-transform duration-300" />
                <span>Indonesia</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-4 h-px bg-white transition-all duration-200 mr-0 group-hover:mr-2"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="text-gray-300 flex items-center">
                  <span className="w-2 h-2 bg-gray-500 mr-3 transform rotate-45"></span>
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Newsletter */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Connect</h4>
            
            {/* Enhanced Social Links */}
            <div className="flex flex-wrap gap-3 mb-8">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 hover:bg-gray-700 flex items-center justify-center rounded-md transition-all duration-300 hover:text-white relative overflow-hidden group hover-lift"
                  title={social.name}
                >
                  {/* Background effects */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md"></div>
                  
                  <span className="text-xl relative z-10 group-hover:scale-110 transition-transform duration-300">{social.icon}</span>
                </a>
              ))}
            </div>

            {/* Enhanced Newsletter Signup */}
            <div>
              <h5 className="text-sm font-medium mb-3 text-gray-300 hover:text-white transition-colors duration-300">Stay Updated</h5>
              <div className="flex relative overflow-hidden rounded-md">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 text-white text-sm focus:border-white focus:outline-none transition-all duration-300 hover:border-gray-600 focus:bg-gray-750"
                />
                <button className="px-4 py-2 bg-white text-black hover:bg-gray-200 transition-all duration-300 text-sm font-medium relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10 group-hover:translate-x-0.5 transition-transform duration-300">→</span>
                </button>
              </div>
              <p className="text-xs text-gray-400 mt-2 hover:text-gray-300 transition-colors duration-300">
                Get notified about new projects and updates.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Bottom Bar */}
      <div className="border-t border-gray-800 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-50"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Enhanced Copyright */}
            <div className="text-sm text-gray-400">
              <p className="flex flex-wrap items-center gap-1">
                <span>© {currentYear} Luthfi Surya. All rights reserved.</span>
                <span className="hidden md:inline">|</span>
                <a href="#" className="hover:text-white transition-all duration-300 relative group">
                  Privacy Policy
                  <div className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></div>
                </a>
                <span>|</span>
                <a href="#" className="hover:text-white transition-all duration-300 relative group">
                  Terms of Service
                  <div className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></div>
                </a>
              </p>
            </div>

            {/* Enhanced Back to Top */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center space-x-2 text-sm text-gray-400 hover:text-white transition-all duration-300 group relative overflow-hidden px-3 py-1 rounded-md hover:bg-white/5"
            >
              <span className="relative z-10">Back to Top</span>
              <span className="transform group-hover:-translate-y-1 transition-transform duration-300 relative z-10">↑</span>
              <div className="absolute inset-0 border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md"></div>
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      
    </footer>
  );
};

export default Footer;