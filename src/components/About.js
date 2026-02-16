import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBehance } from 'react-icons/fa';
import CalendlyPopup from './CalendlyPopup';

const About = () => {
  const [currentExpertise, setCurrentExpertise] = useState(0);
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  
  const expertiseTitles = [
    { text: 'SOCIAL MEDIA', color: 'text-blue-400' },
    { text: 'SEO', color: 'text-purple-400' },
    { text: 'AI AUTOMATION', color: 'text-indigo-400' },
    { text: 'DEV', color: 'text-pink-400' },
    { text: 'MARKETING', color: 'text-kabir-green' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentExpertise((prev) => (prev + 1) % expertiseTitles.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [expertiseTitles.length]);

  const skills = [
    { name: 'Digital Marketing', level: 95 },
    { name: 'Social Media Management', level: 90 },
    { name: 'SEO Optimization', level: 85 },
    { name: 'Content Strategy', level: 88 },
    { name: 'Web Development', level: 80 },
    { name: 'Brand Development', level: 92 }
  ];

  const achievements = [
    { number: '5+', label: 'Years Experience' },
    { number: '100+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '95%', label: 'Success Rate' }
  ];

  return (
    <div className="min-h-screen bg-kabir-dark">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center px-8 md:px-6 pt-0 md:pt-24 pb-0 md:py-16 bg-gradient-to-br from-kabir-dark via-kabir-darker to-kabir-dark">
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center justify-center">
            {/* Left Content */}
            <div className="space-y-3 md:space-y-8">
              <div>
                <div className="flex items-center space-x-2 md:space-x-3 mb-3 md:mb-6">
                  <div className="relative">
                    <div className="w-2 md:w-3 h-2 md:h-3 bg-kabir-green rounded-full animate-pulse"></div>
                    <div className="absolute inset-0 w-2 md:w-3 h-2 md:h-3 bg-kabir-green rounded-full animate-ping opacity-75"></div>
                  </div>
                  <span className="text-kabir-green text-sm md:text-lg font-semibold uppercase tracking-wide">Online</span>
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-kabir-text leading-tight mb-3 md:mb-6">
                  Kabir Hafeez
                </h1>
                <h2 className="text-2xl md:text-3xl lg:text-5xl font-semibold leading-tight mb-4 md:mb-8">
                  <span className={`inline-block transition-all duration-700 ease-out transform translate-y-0 opacity-100 animate-slideUp ${expertiseTitles[currentExpertise]?.color || 'text-kabir-green'}`} key={currentExpertise}>
                    {expertiseTitles[currentExpertise]?.text || 'DEV'}
                  </span>{' '}
                  <span className="text-kabir-text">Expert</span>
                </h2>
                <div className="w-12 md:w-16 h-1 bg-kabir-green mb-4 md:mb-8"></div>
                <p className="text-base md:text-xl text-kabir-text-muted leading-relaxed mb-6 md:mb-10 max-w-lg">
                  I am a creative Freelance Digital Marketing & IT Professional to help 
                  you with your business, online presence and more..
                </p>
              </div>
              
              <div className="flex justify-start mb-8 md:mb-8">
                <button 
                  onClick={() => setIsCalendlyOpen(true)}
                  className="border-2 border-kabir-green text-kabir-green hover:bg-kabir-green hover:text-kabir-dark transition-all duration-300 px-8 md:px-10 py-3 md:py-3 rounded-lg text-sm md:text-sm font-medium uppercase tracking-wider"
                >
                  FREE CONSULTATION
                </button>
              </div>

              {/* Social Media Links */}
              <div className="flex space-x-3 md:space-x-4">
                 {/* LinkedIn */}
                 <a href="https://www.linkedin.com/in/kabirhafeez" target="_blank" rel="noopener noreferrer" className="w-10 md:w-12 h-10 md:h-12 bg-kabir-gray/30 rounded-full flex items-center justify-center hover:bg-kabir-green transition-colors duration-300 group border border-kabir-gray/20">
                  <svg className="w-4 md:w-5 h-4 md:h-5 text-kabir-text-muted group-hover:text-kabir-dark" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                {/* Instagram */}
                <a href="https://www.instagram.com/kabirhafeez.co" target="_blank" rel="noopener noreferrer" className="w-10 md:w-12 h-10 md:h-12 bg-kabir-gray/30 rounded-full flex items-center justify-center hover:bg-kabir-green transition-colors duration-300 group border border-kabir-gray/20">
                  <svg className="w-4 md:w-5 h-4 md:h-5 text-kabir-text-muted group-hover:text-kabir-dark" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                {/* Facebook */}
                <a href="https://www.facebook.com/kabirhafeez.co" target="_blank" rel="noopener noreferrer" className="w-10 md:w-12 h-10 md:h-12 bg-kabir-gray/30 rounded-full flex items-center justify-center hover:bg-kabir-green transition-colors duration-300 group border border-kabir-gray/20">
                  <svg className="w-4 md:w-5 h-4 md:h-5 text-kabir-text-muted group-hover:text-kabir-dark" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                {/* YouTube */}
                <a href="https://www.youtube.com/@kabirhafeez" target="_blank" rel="noopener noreferrer" className="w-10 md:w-12 h-10 md:h-12 bg-kabir-gray/30 rounded-full flex items-center justify-center hover:bg-kabir-green transition-colors duration-300 group border border-kabir-gray/20">
                  <svg className="w-4 md:w-5 h-4 md:h-5 text-kabir-text-muted group-hover:text-kabir-dark" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
                 {/* Behance */}
                 <a href="https://www.behance.net/kabirhafeez" target="_blank" rel="noopener noreferrer" className="w-10 md:w-12 h-10 md:h-12 bg-kabir-gray/30 rounded-full flex items-center justify-center hover:bg-kabir-green transition-colors duration-300 group border border-kabir-gray/20">
                  <FaBehance className="w-4 md:w-5 h-4 md:h-5 text-kabir-text-muted group-hover:text-kabir-dark" />
                </a>
              </div>
            </div>

            {/* Right Content - Image Area */}
            <div className="relative hidden md:flex justify-center lg:justify-end items-end">
              <div className="relative w-full max-w-sm md:max-w-lg">
                {/* Image Container */}
                <div className="w-full h-[250px] md:h-[400px] lg:h-[600px] flex items-end justify-center">
                  <img 
                    src="/assets/whitelogo.png" 
                    alt="Kabir Hafeez - Professional Portrait" 
                    className="w-full h-full object-cover object-bottom"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Journey Roadmap */}
      <section className="py-20 bg-gradient-to-b from-kabir-dark to-kabir-darker relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-kabir-green/5 via-transparent to-kabir-green/5"></div>
          <div className="absolute top-20 left-10 w-64 h-64 bg-kabir-green/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-kabir-green/8 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-kabir-green to-green-400 rounded-2xl mb-6 shadow-xl shadow-kabir-green/30">
              <svg className="w-8 h-8 text-kabir-dark" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 11H7v8h2v-8zm4-4H11v12h2V7zm4-4H15v16h2V3z"/>
              </svg>
            </div>
            <h2 className="text-2xl md:text-5xl font-bold text-kabir-text mb-4">
              My Professional 
              <span className="bg-gradient-to-r from-kabir-green to-green-400 bg-clip-text text-transparent">
                Journey
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-kabir-green to-green-400 mx-auto mb-6 rounded-full"></div>
            <p className="text-sm md:text-xl text-kabir-text-muted max-w-3xl mx-auto leading-relaxed">
              From freelance beginnings to entrepreneurial success — a decade of growth, learning, and innovation.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Central Timeline Line - Desktop */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-kabir-green to-green-400 rounded-full opacity-30">
              <div className="absolute inset-0 bg-gradient-to-b from-kabir-green to-green-400 rounded-full blur-sm"></div>
            </div>
            
            {/* Mobile Timeline Line */}
            <div className="md:hidden absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-kabir-green to-green-400 rounded-full opacity-30">
              <div className="absolute inset-0 bg-gradient-to-b from-kabir-green to-green-400 rounded-full blur-sm"></div>
            </div>
            
            {/* Milestones */}
            <div className="space-y-12 md:space-y-12">
              
              {/* 2012 - The Beginning */}
              <div className="flex items-center group">
                {/* Desktop Layout */}
                <div className="hidden md:flex w-1/2 pr-8 text-right">
                  <div className="bg-gradient-to-br from-kabir-gray/40 to-kabir-gray/20 backdrop-blur-xl border-2 border-kabir-green/30 rounded-2xl p-4 lg:p-6 hover:border-kabir-green/60 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-kabir-green/20 group-hover:bg-gradient-to-br group-hover:from-kabir-green/10 group-hover:to-transparent w-full">
                    <div className="flex items-center justify-end mb-4">
                      <div>
                        <span className="text-xs lg:text-sm font-bold text-kabir-green uppercase tracking-wide">Foundation</span>
                        <h3 className="text-xl lg:text-2xl font-bold text-kabir-text group-hover:text-kabir-green transition-colors duration-300">The Beginning</h3>
                      </div>
                      <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-kabir-green to-green-400 rounded-xl flex items-center justify-center ml-4 shadow-lg">
                        <svg className="w-4 h-4 lg:w-5 lg:h-5 text-kabir-dark" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                      </div>
                    </div>
                    <p className="text-sm lg:text-base text-kabir-text-muted leading-relaxed">
                      Started freelancing as a designer, working with local clients in Pakistan.
                    </p>
                  </div>
                </div>
                
                {/* Desktop Center Dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-kabir-green to-green-400 rounded-full border-4 border-kabir-dark shadow-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  
                </div>
                
                {/* Desktop Year Badge */}
                <div className="hidden md:flex w-1/2 pl-8">
                  <div className="bg-gradient-to-r from-kabir-green to-green-400 text-kabir-dark px-3 lg:px-4 py-2 rounded-full font-bold text-base lg:text-lg shadow-lg inline-block">
                    2012
                  </div>
                </div>
                
                {/* Mobile Layout */}
                <div className="md:hidden flex items-start w-full pl-16">
                  <div className="absolute left-8 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-br from-kabir-green to-green-400 rounded-full border-3 border-kabir-dark shadow-lg flex items-center justify-center">
                    <span className="text-kabir-dark font-bold text-xs"></span>
                  </div>
                  <div className="w-full">
                    <div className="bg-gradient-to-r from-kabir-green to-green-400 text-kabir-dark px-3 py-1 rounded-full font-bold text-sm shadow-lg inline-block mb-4">
                      2012
                    </div>
                    <div className="bg-gradient-to-br from-kabir-gray/40 to-kabir-gray/20 backdrop-blur-xl border-2 border-kabir-green/30 rounded-2xl p-4 hover:border-kabir-green/60 transition-all duration-500">
                      <div className="flex items-center mb-4">
                        <div className="w-8 h-8 bg-gradient-to-br from-kabir-green to-green-400 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                          <svg className="w-4 h-4 text-kabir-dark" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                          </svg>
                        </div>
                        <div>
                          <span className="text-xs font-bold text-kabir-green uppercase tracking-wider">Foundation</span>
                          <h3 className="text-lg font-bold text-kabir-text">The Beginning</h3>
                        </div>
                      </div>
                      <p className="text-sm text-kabir-text-muted leading-relaxed">
                        Started freelancing as a designer, working with local clients in Pakistan.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 2014 - Academic Pursuit */}
              <div className="flex items-center group">
                {/* Desktop Layout */}
                <div className="hidden md:flex w-1/2 text-right justify-end pr-8">
                  <div className="bg-gradient-to-r from-kabir-green to-green-400 text-kabir-dark px-3 lg:px-4 py-2 rounded-full font-bold text-base lg:text-lg shadow-lg inline-block">
                    2014
                  </div>
                </div>
                
                {/* Desktop Center Dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-kabir-green to-green-400 rounded-full border-4 border-kabir-dark shadow-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  
                </div>
                
                {/* Desktop Content */}
                <div className="hidden md:flex w-1/2 pl-8">
                  <div className="bg-gradient-to-br from-kabir-gray/40 to-kabir-gray/20 backdrop-blur-xl border-2 border-kabir-green/30 rounded-2xl p-4 lg:p-6 hover:border-kabir-green/60 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-kabir-green/20 group-hover:bg-gradient-to-br group-hover:from-kabir-green/10 group-hover:to-transparent w-full">
                    <div className="flex items-center mb-4">
                      <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-kabir-green to-green-400 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                        <svg className="w-4 h-4 lg:w-5 lg:h-5 text-kabir-dark" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
                        </svg>
                      </div>
                      <div>
                        <span className="text-xs lg:text-sm font-bold text-kabir-green uppercase tracking-wider">Education</span>
                        <h3 className="text-xl lg:text-2xl font-bold text-kabir-text group-hover:text-kabir-green transition-colors duration-300">Academic Pursuit</h3>
                      </div>
                    </div>
                    <p className="text-sm lg:text-base text-kabir-text-muted leading-relaxed">
                      Enrolled in a Bachelor's degree in Software Engineering.
                    </p>
                  </div>
                </div>
                
                {/* Mobile Layout */}
                <div className="md:hidden flex items-start w-full pl-16">
                  <div className="absolute left-8 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-br from-kabir-green to-green-400 rounded-full border-3 border-kabir-dark shadow-lg flex items-center justify-center">
                    
                  </div>
                  <div className="w-full">
                    <div className="bg-gradient-to-r from-kabir-green to-green-400 text-kabir-dark px-3 py-1 rounded-full font-bold text-sm shadow-lg inline-block mb-4">
                      2014
                    </div>
                    <div className="bg-gradient-to-br from-kabir-gray/40 to-kabir-gray/20 backdrop-blur-xl border-2 border-kabir-green/30 rounded-2xl p-4 hover:border-kabir-green/60 transition-all duration-500">
                      <div className="flex items-center mb-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-kabir-green to-green-400 rounded-xl flex items-center justify-center mr-3 shadow-lg">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
                          </svg>
                        </div>
                        <div>
                          <span className="text-xs font-bold text-kabir-green uppercase tracking-wider">Education</span>
                          <h3 className="text-lg font-bold text-kabir-text">Academic Pursuit</h3>
                        </div>
                      </div>
                      <p className="text-sm text-kabir-text-muted leading-relaxed">
                        Enrolled in a Bachelor's degree in Software Engineering.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 2014-2018 - Balancing Act */}
              <div className="flex items-center group">
                {/* Desktop Layout */}
                <div className="hidden md:flex w-1/2 pr-8 text-right">
                  <div className="bg-gradient-to-br from-kabir-gray/40 to-kabir-gray/20 backdrop-blur-xl border-2 border-kabir-green/30 rounded-2xl p-4 lg:p-6 hover:border-kabir-green/60 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-kabir-green/20 group-hover:bg-gradient-to-br group-hover:from-kabir-green/10 group-hover:to-transparent w-full">
                    <div className="flex items-center justify-end mb-4">
                      <div>
                        <span className="text-xs lg:text-sm font-bold text-kabir-green uppercase tracking-wider">Growth</span>
                        <h3 className="text-xl lg:text-2xl font-bold text-kabir-text group-hover:text-kabir-green transition-colors duration-300">Balancing Act</h3>
                      </div>
                      <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-kabir-green to-green-400 rounded-xl flex items-center justify-center ml-4 shadow-lg">
                        <svg className="w-4 h-4 lg:w-5 lg:h-5 text-kabir-dark" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6h-6z"/>
                        </svg>
                      </div>
                    </div>
                    <p className="text-sm lg:text-base text-kabir-text-muted leading-relaxed">
                      Continued freelancing while studying, gaining hands-on experience with international clients as a Mobile App Developer.
                    </p>
                  </div>
                </div>
                
                {/* Desktop Center Dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-kabir-green to-green-400 rounded-full border-4 border-kabir-dark shadow-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                
                </div>
                
                {/* Desktop Year Badge */}
                <div className="hidden md:flex w-1/2 pl-8">
                  <div className="bg-gradient-to-r from-kabir-green to-green-400 text-kabir-dark px-3 lg:px-4 py-2 rounded-full font-bold text-base lg:text-lg shadow-lg inline-block">
                    2014–2018
                  </div>
                </div>
                
                {/* Mobile Layout */}
                <div className="md:hidden flex items-start w-full pl-16">
                  <div className="absolute left-8 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-br from-kabir-green to-green-400 rounded-full border-3 border-kabir-dark shadow-lg flex items-center justify-center">
                   
                  </div>
                  <div className="w-full">
                    <div className="bg-gradient-to-r from-kabir-green to-green-400 text-kabir-dark px-3 py-1 rounded-full font-bold text-sm shadow-lg inline-block mb-4">
                      2014–2018
                    </div>
                    <div className="bg-gradient-to-br from-kabir-gray/40 to-kabir-gray/20 backdrop-blur-xl border-2 border-kabir-green/30 rounded-2xl p-4 hover:border-kabir-green/60 transition-all duration-500">
                      <div className="flex items-center mb-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-kabir-green to-green-400 rounded-xl flex items-center justify-center mr-3 shadow-lg">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6h-6z"/>
                          </svg>
                        </div>
                        <div>
                          <span className="text-xs font-bold text-purple-400 uppercase tracking-wider">Growth</span>
                          <h3 className="text-lg font-bold text-kabir-text">Balancing Act</h3>
                        </div>
                      </div>
                      <p className="text-sm text-kabir-text-muted leading-relaxed">
                        Continued freelancing while studying, gaining hands-on experience with international clients as a Mobile App Developer.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 2019 - Entrepreneurial Leap */}
              <div className="flex items-center group">
                {/* Desktop Layout */}
                <div className="hidden md:flex w-1/2 text-right  justify-end pr-8">
                  <div className="bg-gradient-to-r from-kabir-green to-green-400 text-kabir-dark px-3 lg:px-4 py-2 rounded-full font-bold text-base lg:text-lg shadow-lg inline-block">
                    2019
                  </div>
                </div>
                
                {/* Desktop Center Dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-kabir-green to-green-400 rounded-full border-4 border-kabir-dark shadow-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                 
                </div>
                
                {/* Desktop Content */}
                <div className="hidden md:flex w-1/2 pl-8">
                  <div className="bg-gradient-to-br from-kabir-gray/40 to-kabir-gray/20 backdrop-blur-xl border-2 border-kabir-green/30 rounded-2xl p-4 lg:p-6 hover:border-kabir-green/60 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-kabir-green/20 group-hover:bg-gradient-to-br group-hover:from-kabir-green/10 group-hover:to-transparent w-full">
                    <div className="flex items-center mb-4">
                      <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-kabir-green to-green-400 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                        <svg className="w-4 h-4 lg:w-5 lg:h-5 text-kabir-dark" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14,12L10,8V11H2V13H10V16M20,19H4V5H14V3H4A2,2 0 0,0 2,5V19A2,2 0 0,0 4,21H20A2,2 0 0,0 22,19V7L20,5V19Z"/>
                        </svg>
                      </div>
                      <div>
                        <span className="text-xs lg:text-sm font-bold text-kabir-green uppercase tracking-wider">Entrepreneurship</span>
                        <h3 className="text-xl lg:text-2xl font-bold text-kabir-text group-hover:text-kabir-green transition-colors duration-300">Entrepreneurial Leap</h3>
                      </div>
                    </div>
                    <p className="text-sm lg:text-base text-kabir-text-muted leading-relaxed">
                      Launched my own IT services agency, Multidex Technologies.
                    </p>
                  </div>
                </div>
                
                {/* Mobile Layout */}
                <div className="md:hidden flex items-start w-full pl-16">
                  <div className="absolute left-8 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-br from-kabir-green to-green-400 rounded-full border-3 border-kabir-dark shadow-lg flex items-center justify-center">
                   
                  </div>
                  <div className="w-full">
                    <div className="bg-gradient-to-r from-kabir-green to-green-400 text-kabir-dark px-3 py-1 rounded-full font-bold text-sm shadow-lg inline-block mb-4">
                      2019
                    </div>
                    <div className="bg-gradient-to-br from-kabir-gray/40 to-kabir-gray/20 backdrop-blur-xl border-2 border-kabir-green/30 rounded-2xl p-4 hover:border-kabir-green/60 transition-all duration-500">
                      <div className="flex items-center mb-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-kabir-green to-green-400 rounded-xl flex items-center justify-center mr-3 shadow-lg">
                          <svg className="w-4 h-4 text-kabir-dark" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M14,12L10,8V11H2V13H10V16M20,19H4V5H14V3H4A2,2 0 0,0 2,5V19A2,2 0 0,0 4,21H20A2,2 0 0,0 22,19V7L20,5V19Z"/>
                          </svg>
                        </div>
                        <div>
                          <span className="text-xs font-bold text-kabir-green uppercase tracking-wider">Entrepreneurship</span>
                          <h3 className="text-lg font-bold text-kabir-text">Entrepreneurial Leap</h3>
                        </div>
                      </div>
                      <p className="text-sm text-kabir-text-muted leading-relaxed">
                        Launched my own IT services agency, Multidex Technologies.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 2020 - Expanding Services */}
              <div className="flex items-center group">
                {/* Desktop Layout */}
                <div className="hidden md:flex w-1/2 pr-8 text-right">
                  <div className="bg-gradient-to-br from-kabir-gray/40 to-kabir-gray/20 backdrop-blur-xl border-2 border-kabir-green/30 rounded-2xl p-4 lg:p-6 hover:border-kabir-green/60 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-kabir-green/20 group-hover:bg-gradient-to-br group-hover:from-kabir-green/10 group-hover:to-transparent w-full">
                    <div className="flex items-center justify-end mb-4">
                      <div>
                        <span className="text-xs lg:text-sm font-bold text-kabir-green uppercase tracking-wider">Expansion</span>
                        <h3 className="text-xl lg:text-2xl font-bold text-kabir-text group-hover:text-kabir-green transition-colors duration-300">Expanding Services</h3>
                      </div>
                      <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-kabir-green to-green-400 rounded-xl flex items-center justify-center ml-4 shadow-lg">
                        <svg className="w-4 h-4 lg:w-5 lg:h-5 text-kabir-dark" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12,2A3,3 0 0,1 15,5V11A3,3 0 0,1 12,14A3,3 0 0,1 9,11V5A3,3 0 0,1 12,2M19,11C19,14.53 16.39,17.44 13,17.93V21H11V17.93C7.61,17.44 5,14.53 5,11H7A5,5 0 0,0 12,16A5,5 0 0,0 17,11H19Z"/>
                        </svg>
                      </div>
                    </div>
                    <p className="text-sm lg:text-base text-kabir-text-muted leading-relaxed">
                      Introduced Social Media Marketing services, earned certifications, and worked with clients in the US, UK, and Canada.
                    </p>
                  </div>
                </div>
                
                {/* Desktop Center Dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-kabir-green to-green-400 rounded-full border-4 border-kabir-dark shadow-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                
                </div>
                
                {/* Desktop Year Badge */}
                <div className="hidden md:flex w-1/2 pl-8">
                  <div className="bg-gradient-to-r from-kabir-green to-green-400 text-kabir-dark px-3 lg:px-4 py-2 rounded-full font-bold text-base lg:text-lg shadow-lg inline-block">
                    2020
                  </div>
                </div>
                
                {/* Mobile Layout */}
                <div className="md:hidden flex items-start w-full pl-16">
                  <div className="absolute left-8 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-br from-kabir-green to-green-400 rounded-full border-3 border-kabir-dark shadow-lg flex items-center justify-center">
                    
                  </div>
                  <div className="w-full">
                    <div className="bg-gradient-to-r from-kabir-green to-green-400 text-kabir-dark px-3 py-1 rounded-full font-bold text-sm shadow-lg inline-block mb-4">
                      2020
                    </div>
                    <div className="bg-gradient-to-br from-kabir-gray/40 to-kabir-gray/20 backdrop-blur-xl border-2 border-kabir-green/30 rounded-2xl p-4 hover:border-kabir-green/60 transition-all duration-500">
                      <div className="flex items-center mb-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-kabir-green to-green-400 rounded-xl flex items-center justify-center mr-3 shadow-lg">
                          <svg className="w-4 h-4 text-kabir-dark" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12,2A3,3 0 0,1 15,5V11A3,3 0 0,1 12,14A3,3 0 0,1 9,11V5A3,3 0 0,1 12,2M19,11C19,14.53 16.39,17.44 13,17.93V21H11V17.93C7.61,17.44 5,14.53 5,11H7A5,5 0 0,0 12,16A5,5 0 0,0 17,11H19Z"/>
                          </svg>
                        </div>
                        <div>
                          <span className="text-xs font-bold text-kabir-green uppercase tracking-wider">Expansion</span>
                          <h3 className="text-lg font-bold text-kabir-text">Expanding Services</h3>
                        </div>
                      </div>
                      <p className="text-sm text-kabir-text-muted leading-relaxed">
                        Introduced Social Media Marketing services, earned certifications, and worked with clients in the US, UK, and Canada.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 2021 - Professional Growth */}
              <div className="flex items-center group">
                <div className="hidden md:flex w-1/2 pr-8 text-right justify-end pr-8">
                  <div className="bg-gradient-to-r from-kabir-green to-green-400 text-kabir-dark px-3 lg:px-4 py-2 rounded-full font-bold text-base lg:text-lg shadow-lg inline-block">
                    2021
                  </div>
                </div>
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-kabir-green to-green-400 rounded-full border-4 border-kabir-dark shadow-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  
                </div>
                <div className="hidden md:flex w-1/2 pl-8">
                  <div className="bg-gradient-to-br from-kabir-gray/40 to-kabir-gray/20 backdrop-blur-xl border-2 border-kabir-green/30 rounded-2xl p-4 lg:p-6 hover:border-kabir-green/60 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-kabir-green/20 group-hover:bg-gradient-to-br group-hover:from-kabir-green/10 group-hover:to-transparent w-full">
                    <div className="flex items-center mb-4">
                      <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-kabir-green to-green-400 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                        <svg className="w-4 h-4 lg:w-5 lg:h-5 text-kabir-dark" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M16,6L18.29,8.29L13.41,13.17L9.41,9.17L2,16.59L3.41,18L9.41,12L13.41,16L19.71,9.71L22,12V6H16Z"/>
                        </svg>
                      </div>
                      <div>
                        <span className="text-xs lg:text-sm font-bold text-kabir-green uppercase tracking-wider">Recognition</span>
                        <h3 className="text-xl lg:text-2xl font-bold text-kabir-text group-hover:text-kabir-green transition-colors duration-300">Professional Growth</h3>
                      </div>
                    </div>
                    <p className="text-sm lg:text-base text-kabir-text-muted leading-relaxed">
                      Joined top platforms like Upwork, becoming a Top Rated Seller across all major freelance marketplaces.
                    </p>
                  </div>
                </div>
                <div className="md:hidden flex items-start w-full pl-16">
                  <div className="absolute left-8 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-br from-kabir-green to-green-400 rounded-full border-3 border-kabir-dark shadow-lg flex items-center justify-center">
                   
                  </div>
                  <div className="w-full">
                    <div className="bg-gradient-to-r from-kabir-green to-green-400 text-kabir-dark px-3 py-1 rounded-full font-bold text-sm shadow-lg inline-block mb-4">
                      2021
                    </div>
                    <div className="bg-gradient-to-br from-kabir-gray/40 to-kabir-gray/20 backdrop-blur-xl border-2 border-kabir-green/30 rounded-2xl p-4 hover:border-kabir-green/60 transition-all duration-500">
                      <div className="flex items-center mb-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-kabir-green to-green-400 rounded-xl flex items-center justify-center mr-3 shadow-lg">
                          <svg className="w-4 h-4 text-kabir-dark" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M16,6L18.29,8.29L13.41,13.17L9.41,9.17L2,16.59L3.41,18L9.41,12L13.41,16L19.71,9.71L22,12V6H16Z"/>
                          </svg>
                        </div>
                        <div>
                          <span className="text-xs font-bold text-kabir-green uppercase tracking-wider">Recognition</span>
                          <h3 className="text-lg font-bold text-kabir-text">Professional Growth</h3>
                        </div>
                      </div>
                      <p className="text-sm text-kabir-text-muted leading-relaxed">
                        Joined top platforms like Upwork, becoming a Top Rated Seller across all major freelance marketplaces.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 2022 - Embracing AI */}
              <div className="flex items-center group">
                <div className="hidden md:flex w-1/2 pr-8 text-right">
                  <div className="bg-gradient-to-br from-kabir-gray/40 to-kabir-gray/20 backdrop-blur-xl border-2 border-kabir-green/30 rounded-2xl p-4 lg:p-6 hover:border-kabir-green/60 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-kabir-green/20 group-hover:bg-gradient-to-br group-hover:from-kabir-green/10 group-hover:to-transparent w-full">
                    <div className="flex items-center justify-end mb-4">
                      <div>
                        <span className="text-xs lg:text-sm font-bold text-kabir-green uppercase tracking-wider">Innovation</span>
                        <h3 className="text-xl lg:text-2xl font-bold text-kabir-text group-hover:text-kabir-green transition-colors duration-300">Embracing AI</h3>
                      </div>
                      <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-kabir-green to-green-400 rounded-xl flex items-center justify-center ml-4 shadow-lg">
                        <svg className="w-4 h-4 lg:w-5 lg:h-5 text-kabir-dark" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12,2A2,2 0 0,1 14,4C14,4.74 13.6,5.39 13,5.73V7H14A7,7 0 0,1 21,14H22A1,1 0 0,1 23,15V18A1,1 0 0,1 22,19H21V20A2,2 0 0,1 19,22H5A2,2 0 0,1 3,20V19H2A1,1 0 0,1 1,18V15A1,1 0 0,1 2,14H3A7,7 0 0,1 10,7H11V5.73C10.4,5.39 10,4.74 10,4A2,2 0 0,1 12,2M7.5,13A2.5,2.5 0 0,0 5,15.5A2.5,2.5 0 0,0 7.5,18A2.5,2.5 0 0,0 10,15.5A2.5,2.5 0 0,0 7.5,13M16.5,13A2.5,2.5 0 0,0 14,15.5A2.5,2.5 0 0,0 16.5,18A2.5,2.5 0 0,0 19,15.5A2.5,2.5 0 0,0 16.5,13Z"/>
                        </svg>
                      </div>
                    </div>
                    <p className="text-sm lg:text-base text-kabir-text-muted leading-relaxed">
                      Completed certifications in AI and Automation, integrating advanced tools to scale my agency and client success.
                    </p>
                  </div>
                </div>
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-kabir-green to-green-400 rounded-full border-4 border-kabir-dark shadow-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                 
                </div>
                <div className="hidden md:flex w-1/2 pl-8">
                  <div className="bg-gradient-to-r from-kabir-green to-green-400 text-kabir-dark px-3 lg:px-4 py-2 rounded-full font-bold text-base lg:text-lg shadow-lg inline-block">
                    2022
                  </div>
                </div>
                <div className="md:hidden flex items-start w-full pl-16">
                  <div className="absolute left-8 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-br from-kabir-green to-green-400 rounded-full border-3 border-kabir-dark shadow-lg flex items-center justify-center">
                  
                  </div>
                  <div className="w-full">
                    <div className="bg-gradient-to-r from-kabir-green to-green-400 text-kabir-dark px-3 py-1 rounded-full font-bold text-sm shadow-lg inline-block mb-4">
                      2022
                    </div>
                    <div className="bg-gradient-to-br from-kabir-gray/40 to-kabir-gray/20 backdrop-blur-xl border-2 border-kabir-green/30 rounded-2xl p-4 hover:border-kabir-green/60 transition-all duration-500">
                      <div className="flex items-center mb-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-kabir-green to-green-400 rounded-xl flex items-center justify-center mr-3 shadow-lg">
                          <svg className="w-4 h-4 text-kabir-dark" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12,2A2,2 0 0,1 14,4C14,4.74 13.6,5.39 13,5.73V7H14A7,7 0 0,1 21,14H22A1,1 0 0,1 23,15V18A1,1 0 0,1 22,19H21V20A2,2 0 0,1 19,22H5A2,2 0 0,1 3,20V19H2A1,1 0 0,1 1,18V15A1,1 0 0,1 2,14H3A7,7 0 0,1 10,7H11V5.73C10.4,5.39 10,4.74 10,4A2,2 0 0,1 12,2M7.5,13A2.5,2.5 0 0,0 5,15.5A2.5,2.5 0 0,0 7.5,18A2.5,2.5 0 0,0 10,15.5A2.5,2.5 0 0,0 7.5,13M16.5,13A2.5,2.5 0 0,0 14,15.5A2.5,2.5 0 0,0 16.5,18A2.5,2.5 0 0,0 19,15.5A2.5,2.5 0 0,0 16.5,13Z"/>
                          </svg>
                        </div>
                        <div>
                          <span className="text-xs font-bold text-kabir-green uppercase tracking-wider">Innovation</span>
                          <h3 className="text-lg font-bold text-kabir-text">Embracing AI</h3>
                        </div>
                      </div>
                      <p className="text-sm text-kabir-text-muted leading-relaxed">
                        Completed certifications in AI and Automation, integrating advanced tools to scale my agency and client success.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 2025 - Today */}
              <div className="flex items-center group">
                <div className="hidden md:flex w-1/2 pr-8 text-right justify-end pr-8">
                  <div className="bg-gradient-to-r from-kabir-green via-green-400 to-kabir-green text-kabir-dark px-3 lg:px-4 py-2 rounded-full font-bold text-base lg:text-lg shadow-lg inline-block animate-pulse">
                    2025
                  </div>
                </div>
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-kabir-green to-green-400 rounded-full border-4 border-kabir-dark shadow-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 animate-pulse">
               
                </div>
                <div className="hidden md:flex w-1/2 pl-8">
                  <div className="bg-gradient-to-br from-kabir-green/20 to-kabir-green/10 backdrop-blur-xl border-2 border-kabir-green/50 rounded-2xl p-4 lg:p-6 hover:border-kabir-green/80 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-kabir-green/30 group-hover:bg-gradient-to-br group-hover:from-kabir-green/20 group-hover:to-transparent w-full">
                    <div className="flex items-center mb-4">
                      <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-kabir-green to-green-400 rounded-xl flex items-center justify-center mr-4 shadow-lg animate-pulse">
                        <svg className="w-4 h-4 lg:w-5 lg:h-5 text-kabir-dark" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12,2A2,2 0 0,1 14,4C14,4.74 13.6,5.39 13,5.73V7H14A7,7 0 0,1 21,14H22A1,1 0 0,1 23,15V18A1,1 0 0,1 22,19H21V20A2,2 0 0,1 19,22H5A2,2 0 0,1 3,20V19H2A1,1 0 0,1 1,18V15A1,1 0 0,1 2,14H3A7,7 0 0,1 10,7H11V5.73C10.4,5.39 10,4.74 10,4A2,2 0 0,1 12,2M7.5,13A2.5,2.5 0 0,0 5,15.5A2.5,2.5 0 0,0 7.5,18A2.5,2.5 0 0,0 10,15.5A2.5,2.5 0 0,0 7.5,13M16.5,13A2.5,2.5 0 0,0 14,15.5A2.5,2.5 0 0,0 16.5,18A2.5,2.5 0 0,0 19,15.5A2.5,2.5 0 0,0 16.5,13Z"/>
                        </svg>
                      </div>
                      <div>
                        <span className="text-xs lg:text-sm font-bold text-kabir-green uppercase tracking-wider">Present</span>
                        <h3 className="text-xl lg:text-2xl font-bold text-kabir-text group-hover:text-kabir-green transition-colors duration-300">Today</h3>
                      </div>
                    </div>
                    <p className="text-sm lg:text-base text-kabir-text-muted leading-relaxed">
                      Now a certified professional helping businesses worldwide scale, automate, and grow through strategic digital solutions.
                    </p>
                  </div>
                </div>
                <div className="md:hidden flex items-start w-full pl-16">
                  <div className="absolute left-8 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-kabir-green to-green-400 rounded-full border-3 border-kabir-dark shadow-lg flex items-center justify-center animate-pulse">
                   
                  </div>
                  <div className="w-full">
                    <div className="bg-gradient-to-r from-kabir-green via-green-400 to-kabir-green text-kabir-dark px-3 py-1 rounded-full font-bold text-sm shadow-lg inline-block mb-4 animate-pulse">
                      2025
                    </div>
                    <div className="bg-gradient-to-br from-kabir-green/20 to-kabir-green/10 backdrop-blur-xl border-2 border-kabir-green/50 rounded-2xl p-4 hover:border-kabir-green/80 transition-all duration-500">
                      <div className="flex items-center mb-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-kabir-green to-green-400 rounded-xl flex items-center justify-center mr-3 shadow-lg animate-pulse">
                          <svg className="w-4 h-4 text-kabir-dark" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12,2A2,2 0 0,1 14,4C14,4.74 13.6,5.39 13,5.73V7H14A7,7 0 0,1 21,14H22A1,1 0 0,1 23,15V18A1,1 0 0,1 22,19H21V20A2,2 0 0,1 19,22H5A2,2 0 0,1 3,20V19H2A1,1 0 0,1 1,18V15A1,1 0 0,1 2,14H3A7,7 0 0,1 10,7H11V5.73C10.4,5.39 10,4.74 10,4A2,2 0 0,1 12,2M7.5,13A2.5,2.5 0 0,0 5,15.5A2.5,2.5 0 0,0 7.5,18A2.5,2.5 0 0,0 10,15.5A2.5,2.5 0 0,0 7.5,13M16.5,13A2.5,2.5 0 0,0 14,15.5A2.5,2.5 0 0,0 16.5,18A2.5,2.5 0 0,0 19,15.5A2.5,2.5 0 0,0 16.5,13Z"/>
                          </svg>
                        </div>
                        <div>
                          <span className="text-xs font-bold text-kabir-green uppercase tracking-wider">Present</span>
                          <h3 className="text-lg font-bold text-kabir-text">Today</h3>
                        </div>
                      </div>
                      <p className="text-sm text-kabir-text-muted leading-relaxed">
                        Now a certified professional helping businesses worldwide scale, automate, and grow through strategic digital solutions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 md:py-20 bg-gradient-to-br from-kabir-darker via-kabir-dark to-kabir-darker relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-kabir-green/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 md:px-6 text-center relative z-10">
          {/* Main CTA Content */}
          <div className="bg-gradient-to-br from-kabir-gray/30 to-kabir-gray/10 backdrop-blur-xl border border-kabir-green/20 rounded-3xl p-4 md:p-8 lg:p-12 shadow-2xl hover:shadow-kabir-green/10 transition-all duration-500 hover:border-kabir-green/40">
            {/* Icon */}
            <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-kabir-green to-green-400 rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 shadow-lg animate-pulse">
              <svg className="w-6 h-6 md:w-8 md:h-8 text-kabir-dark" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4M20,8L12,13L4,8V6L12,11L20,6V8Z"/>
              </svg>
            </div>
            
            {/* Heading */}
            <h2 className="text-xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-kabir-text mb-3 md:mb-4">
              Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-kabir-green via-green-400 to-kabir-green animate-pulse">Scale Your Business</span>?
            </h2>
            
            {/* Subheading */}
            <p className="text-sm md:text-lg lg:text-xl text-kabir-text-muted mb-4 md:mb-8 leading-relaxed max-w-3xl mx-auto">
              Let's discuss how I can help you grow your business with proven digital marketing strategies, automation, and expert guidance.
            </p>
            
            {/* Features List */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6 mb-4 md:mb-8 mx-2 md:mx-0">
              <div className="flex items-center justify-start space-x-3">
                <div className="w-5 h-5 md:w-6 md:h-6 bg-kabir-green rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-2.5 h-2.5 md:w-3 md:h-3 text-kabir-dark" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z"/>
                  </svg>
                </div>
                <span className="text-sm md:text-base text-kabir-text font-medium">100% Free Consultation</span>
              </div>
              <div className="flex items-center justify-start space-x-3">
                <div className="w-5 h-5 md:w-6 md:h-6 bg-kabir-green rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-2.5 h-2.5 md:w-3 md:h-3 text-kabir-dark" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z"/>
                  </svg>
                </div>
                <span className="text-sm md:text-base text-kabir-text font-medium">Custom Strategy Plan</span>
              </div>
              <div className="flex items-center justify-start space-x-3">
                <div className="w-5 h-5 md:w-6 md:h-6 bg-kabir-green rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-2.5 h-2.5 md:w-3 md:h-3 text-kabir-dark" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z"/>
                  </svg>
                </div>
                <span className="text-sm md:text-base text-kabir-text font-medium">No Commitment Required</span>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mx-2 md:mx-0">
              <button 
                onClick={() => setIsCalendlyOpen(true)}
                className="btn-primary text-base px-8 py-4 hover:scale-105 transition-all duration-300 w-full sm:w-auto min-w-[200px] flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Explore Our Services
              </button>
              
              <a 
                href="https://wa.me/923150180299?text=Hi%20Kabir,%20I'm%20interested%20in%20your%20services.%20Can%20we%20discuss%20my%20project?" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-base px-8 py-4 hover:scale-105 transition-all duration-300 w-full sm:w-auto min-w-[200px] flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.785"/>
                </svg>
                WhatsApp Us
              </a>
            </div>
            
            {/* Trust Indicators */}
            <div className="mt-4 md:mt-8 pt-4 md:pt-6 border-t border-kabir-green/20 mx-2 md:mx-0">
              <p className="text-xs md:text-sm text-kabir-text-muted mb-3 md:mb-4">Trusted by 500+ businesses worldwide</p>
              <div className="flex items-center justify-center space-x-3 md:space-x-6 text-kabir-text-muted">
                <div className="flex items-center space-x-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-3 h-3 md:w-4 md:h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
                        <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.46,13.97L5.82,21L12,17.27Z"/>
                      </svg>
                    ))}
                  </div>
                  <span className="text-xs md:text-sm font-medium">5.0 Rating</span>
                </div>
                <div className="w-px h-4 bg-kabir-green/30"></div>
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-kabir-green" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M11,16.5L6.5,12L7.91,10.59L11,13.67L16.59,8.09L18,9.5L11,16.5Z"/>
                  </svg>
                  <span className="text-xs md:text-sm font-medium">Certified Expert</span>
                </div>
                <div className="w-px h-4 bg-kabir-green/30"></div>
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-kabir-green" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11.5C15.4,11.5 16,12.1 16,12.7V16.2C16,16.8 15.4,17.3 14.8,17.3H9.2C8.6,17.3 8,16.8 8,16.2V12.7C8,12.1 8.6,11.5 9.2,11.5V10C9.2,8.6 10.6,7 12,7M12,8.2C11.2,8.2 10.5,8.7 10.5,10V11.5H13.5V10C13.5,8.7 12.8,8.2 12,8.2Z"/>
                  </svg>
                  <span className="text-xs md:text-sm font-medium">100% Secure</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calendly Popup */}
      <CalendlyPopup 
        isOpen={isCalendlyOpen}
        onClose={() => setIsCalendlyOpen(false)}
        calendlyUrl="https://calendly.com/kabirhafeez/kabirhafeez-co-consultation"
      />

    </div>
  );
};

export default About;
