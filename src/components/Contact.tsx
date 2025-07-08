import React, { useEffect, useRef, useState } from 'react';
import { FaEnvelope, FaInstagram, FaWhatsapp, FaLinkedin, FaGithub } from 'react-icons/fa';
import { cvData } from '../data/cvData';

const Contact: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
    
    // Show success message (you can implement a toast notification here)
    alert('Message sent successfully!');
  };

    const contactInfo = [
      {
        icon: <FaEnvelope className="w-6 h-6 text-gray-500 group-hover:text-black transition-colors duration-300" />,
        label: 'Email',
        value: cvData.contact.email,
        link: `mailto:${cvData.contact.email}`
      },
      {
        icon: <FaWhatsapp className="w-6 h-6 text-gray-500 group-hover:text-black transition-colors duration-300" />,
        label: 'WhatsApp',
        value: '0851-5677-3573',
        link: cvData.contact.whatsapp
      },
      {
        icon: <FaLinkedin className="w-6 h-6 text-gray-500 group-hover:text-black transition-colors duration-300" />,
        label: 'LinkedIn',
        value: 'Luthfi Surya Saputra',
        link: cvData.contact.linkedin
      }
    ];

  return (
        <section ref={sectionRef} id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 geometric-pattern opacity-10"></div>
      <div className="absolute top-10 left-10 w-40 h-40 border border-gray-100 rotate-12 opacity-20"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-gray-50 rotate-45 opacity-30"></div>
      <div className="absolute top-1/3 left-1/3 w-2 h-2 bg-gray-300 rounded-full opacity-40"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Enhanced Section Header */}
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display mb-4 tracking-tight text-black text-shadow-medium relative">
            <span className="relative z-10">Get In Touch</span>
            <div className="absolute -inset-2 bg-gradient-to-r from-transparent via-gray-100 to-transparent opacity-30 blur-sm"></div>
          </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gray-500 to-transparent mx-auto mb-6 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-300 via-gray-600 to-gray-300 animate-pulse"></div>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Have a project in mind? Let's discuss how we can bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div
            className={`transform transition-all duration-1000 delay-300 ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
            }`}
          >
            <div className="mb-8">
                          <h3 className="text-2xl font-semibold mb-6 text-black">
                Let's Start a Conversation
              </h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                I'm always excited to work on new projects and collaborate with creative minds. 
                Whether you need a complete brand identity, engaging video content, or a modern website, 
                I'm here to help bring your vision to life.
              </p>
            </div>

            {/* Enhanced Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className={`flex items-center p-5 bg-white border border-gray-100 hover:border-gray-300 hover:bg-gray-50 rounded-lg transition-all duration-500 group transform hover-lift relative overflow-hidden ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  {/* Subtle background effect */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-gray-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 border border-gray-200 rotate-45 opacity-0 group-hover:opacity-30 transition-all duration-300"></div>
                  
                                    <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center bg-gray-100 border border-gray-200 rounded-full group-hover:bg-white group-hover:border-gray-400 group-hover:scale-110 transition-all duration-300 relative z-10 shadow-sm">{info.icon}</div>
                  <div className="ml-5 relative z-10">
                    <h4 className="font-semibold text-black group-hover:text-gray-900 transition-colors duration-300 mb-1">{info.label}</h4>
                    <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300 text-sm">{info.value}</p>
                  </div>
                  
                  {/* Hover indicator */}
                  <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300 relative z-10">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div
              className={`mt-8 transform transition-all duration-1000 delay-900 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
            >
              <h4 className="text-lg font-semibold mb-4 text-gray-900">
                Follow Me
              </h4>
              <div className="flex space-x-4">
                {[
                  { name: 'Instagram', icon: <FaInstagram />, link: cvData.contact.instagram },
                  { name: 'GitHub', icon: <FaGithub />, link: cvData.contact.github },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center group hover:border-gray-400 hover:scale-110 transition-all duration-300"
                    title={social.name}
                  >
                    {React.cloneElement(social.icon, { className: "w-6 h-6 text-gray-500 group-hover:text-black transition-colors duration-300" })}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Enhanced Contact Form */}
          <div
            className={`transform transition-all duration-1000 delay-500 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
            }`}
          >
            <form onSubmit={handleSubmit} className="bg-white p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-500 relative overflow-hidden">
              {/* Form background pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gray-50 to-transparent opacity-50"></div>
              <div className="absolute -top-2 -right-2 w-6 h-6 border border-gray-100 rotate-45 opacity-30"></div>
              
                          <h3 className="text-2xl font-semibold mb-6 text-black relative z-10">
                <span className="relative">
                  Send Me a Message
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-300"></div>
                </span>
              </h3>
              
              <div className="space-y-6">
                {/* Enhanced Name Field */}
                <div className="relative z-10">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2 transition-colors duration-300">
                    Full Name *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-all duration-300 hover:border-gray-400 bg-white focus:bg-gray-50 focus-ring"
                      placeholder="Your full name"
                    />
                    <div className="absolute inset-0 border border-transparent focus-within:border-black pointer-events-none transition-colors duration-300"></div>
                  </div>
                </div>

                {/* Enhanced Email Field */}
                <div className="relative z-10">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2 transition-colors duration-300">
                    Email Address *
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-all duration-300 hover:border-gray-400 bg-white focus:bg-gray-50 focus-ring"
                      placeholder="your.email@example.com"
                    />
                    <div className="absolute inset-0 border border-transparent focus-within:border-black pointer-events-none transition-colors duration-300"></div>
                  </div>
                </div>

                {/* Enhanced Subject Field */}
                <div className="relative z-10">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2 transition-colors duration-300">
                    Subject *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-all duration-300 hover:border-gray-400 bg-white focus:bg-gray-50 focus-ring"
                      placeholder="Project inquiry, collaboration, etc."
                    />
                    <div className="absolute inset-0 border border-transparent focus-within:border-black pointer-events-none transition-colors duration-300"></div>
                  </div>
                </div>

                {/* Enhanced Message Field */}
                <div className="relative z-10">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2 transition-colors duration-300">
                    Message *
                  </label>
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-all duration-300 hover:border-gray-400 bg-white focus:bg-gray-50 resize-none focus-ring"
                      placeholder="Tell me about your project, timeline, budget, and any specific requirements..."
                    />
                    <div className="absolute inset-0 border border-transparent focus-within:border-black pointer-events-none transition-colors duration-300"></div>
                  </div>
                </div>

                {/* Enhanced Submit Button */}
                <div className="relative z-10">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-black text-white py-4 px-6 hover:bg-gray-800 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed font-medium relative overflow-hidden group hover-lift"
                  >
                    {/* Button background effects */}
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                    
                    {/* Button content */}
                    <span className="relative z-10 flex items-center justify-center space-x-2">
                      <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                      {!isSubmitting && (
                        <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                      )}
                    </span>
                    
                    {/* Loading indicator */}
                    {isSubmitting && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      </div>
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;