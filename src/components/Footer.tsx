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
        <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="mb-6">
                            <h3 className="text-2xl font-bold text-white mb-2">Luthfi Surya</h3>
              <div className="w-16 h-1 bg-gray-700 mb-4"></div>
              <p className="text-gray-300 leading-relaxed">
                Creative designer and developer passionate about bringing ideas to life through 
                visual storytelling and innovative digital experiences.
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-2 text-sm text-gray-300">
                            <div className="flex items-center">
                <FaEnvelope className="mr-3" />
                <a href="mailto:hello@luthfisurya.my.id" className="hover:text-white transition-colors duration-200">
                  hello@luthfisurya.my.id
                </a>
              </div>
              <div className="flex items-center">
                <FaMapMarkerAlt className="mr-3" />
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
            
            {/* Social Links */}
                        <div className="flex flex-wrap gap-3 mb-8">
              {socialLinks.map((social, index) => (
                                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                                    className="w-10 h-10 bg-gray-800 hover:bg-gray-700 flex items-center justify-center rounded-md transition-all duration-300 hover:text-white"
                  title={social.name}
                >
                  <span className="text-xl">{social.icon}</span>
                </a>
              ))}
            </div>

            {/* Newsletter Signup */}
            <div>
              <h5 className="text-sm font-medium mb-3 text-gray-300">Stay Updated</h5>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 text-white text-sm focus:border-white focus:outline-none transition-colors duration-200"
                />
                <button className="px-4 py-2 bg-white text-black hover:bg-gray-200 transition-colors duration-200 text-sm font-medium">
                  →
                </button>
              </div>
              <p className="text-xs text-gray-400 mt-2">
                Get notified about new projects and updates.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-sm text-gray-400">
              <p>
                © {currentYear} Luthfi Surya. All rights reserved. |
                <a href="#" className="hover:text-white transition-colors duration-200 ml-1">
                  Privacy Policy
                </a>
                |
                <a href="#" className="hover:text-white transition-colors duration-200 ml-1">
                  Terms of Service
                </a>
              </p>
            </div>

            {/* Back to Top */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center space-x-2 text-sm text-gray-400 hover:text-white transition-colors duration-200 group"
            >
              <span>Back to Top</span>
              <span className="transform group-hover:-translate-y-1 transition-transform duration-200">↑</span>
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      
    </footer>
  );
};

export default Footer;