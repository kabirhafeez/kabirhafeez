import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CalendlyButton from '../components/CalendlyButton';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentAnalyticsSlide, setCurrentAnalyticsSlide] = useState(0);

  // Combined portfolio items from all service pages and home page
  const portfolioItems = [
    // From Hero.js
    { 
      id: 1, 
      src: "/assets/liberty.png", 
      alt: "Liberty - Past Work Showcase", 
      title: "Liberty Project", 
      category: "web-development",
      description: "We developed a modern, responsive website for Liberty with custom functionality and seamless user experience. Our team implemented advanced features.",
      clientImage: "/assets/Christopher.jpeg",
      clientName: "Christopher Johnson",
      clientRole: "CEO, Liberty Corp",
      testimonial: "The team delivered an exceptional website that exceeded our expectations. The attention to detail and professional approach made all the difference.",
      technologies: ["React", "Node.js", "WordPress", "SEO"]
    },
    { 
      id: 2, 
      src: "/assets/septic.png", 
      alt: "Advance Septic Services", 
      title: "Advance Septic Services", 
      category: "social-media",
      description: "We transformed Advance Septic Services' digital presence through comprehensive marketing campaigns and targeted advertising strategies.",
      clientImage: "/assets/Hesham.jpeg",
      clientName: "Hesham Al-Rashid",
      clientRole: "Owner, Advance Septic",
      testimonial: "Our business has grown tremendously since working with this team. The marketing strategies they implemented brought us more qualified leads than ever before.",
      technologies: ["Social Media", "Google Ads", "Content Marketing", "Analytics"]
    },
    { 
      id: 3, 
      src: "/assets/gamehero1.png", 
      alt: "Game Hero", 
      title: "Game Hero", 
      category: "social-media",
      description: "We created engaging social media designs and brand identity for Game Hero, establishing their presence across multiple platforms with consistent.",
      clientImage: "/assets/Joshua.jpeg",
      clientName: "Joshua Martinez",
      clientRole: "Founder, Game Hero",
      testimonial: "The social media designs completely transformed our brand image. Our engagement rates increased by 250% and we gained thousands of new followers.",
      technologies: ["Brand Design", "Social Media", "Content Creation", "Visual Identity"]
    },
    { 
      id: 4, 
      src: "/assets/canary.png", 
      alt: "Canary B Active", 
      title: "Canary B Active", 
      category: "ecommerce",
      description: "We built a custom Shopify store for Canary B Active with advanced e-commerce features, inventory management, and seamless checkout experience.",
      clientImage: "/assets/Christopher.jpeg",
      clientName: "Sarah Williams",
      clientRole: "Marketing Director, Canary B Active",
      testimonial: "The new Shopify store is incredible! Our conversion rates improved by 180% and the user experience is so much smoother. Highly recommend their services.",
      technologies: ["Shopify", "E-commerce", "Payment Integration", "Inventory Management"]
    },
    // From SocialMediaManagement.js
    { 
      id: 5, 
      src: "/assets/caygadgets.png", 
      alt: "Cay Gadgets - E-commerce Store", 
      title: "Cay Gadgets", 
      category: "ecommerce",
      description: "I worked with Henrik Butz to elevate the CAY Gadgets brand through a mix of SEO strategy, engaging product video creation, and visual branding refinement.",
      clientImage: "/assets/cay.png",
      clientName: "Henrik Butz",
      clientRole: "Founder of CAY Gadgets",
      testimonial: "Kabir has been an incredible asset to CAY Gadgets. From sharpening our brand identity to creating high-quality product videos and optimizing our site for SEO.",
      technologies: ["SEO", "Video Creation", "E-commerce", "Brand Identity"]
    },
    { 
      id: 6, 
      src: "/assets/jetlifee.png", 
      alt: "Jetlifee Flags", 
      title: "Jetlifee Flags", 
      category: "ecommerce",
      description: "I partnered with Jet to build the JetLifee brand from the ground up, delivering a full e-commerce solution with a sleek, user-friendly website, impactful branding, and a cohesive social media presence.",
      clientImage: "/assets/jetli.jpg",
      clientName: "Jet",
      clientRole: "Founder of JetLifee",
      testimonial: "He gave JetLifee a modern brand identity, a clean and functional e-commerce website, and a strong social media presence. Kabir handled everything with professionalism, creativity.",
      technologies: ["E-commerce", "Branding", "Social Media", "Web Development"]
    },
    { 
      id: 7, 
      src: "/assets/katcruz.png", 
      alt: "Books By Katcruz", 
      title: "Books By Katcruz", 
      category: "social-media",
      description: "Professionally managed social media presence for a book author with patient, informative, and knowledgeable approach. Delivered comprehensive social media services with expertise and professionalism.",
      clientImage: "/assets/katrina.jpeg",
      clientName: "Katrina Nyby",
      clientRole: "Children's book author",
      testimonial: "Kabir professionally managed my social media. He was patient, informative and knowledgeable in his field. I would recommend him to anyone who would need the same services.",
      technologies: ["Social Media Management", "Content Creation", "Author Marketing", "Brand Building"]
    },
    { 
      id: 8, 
      src: "/assets/cargosavvy.png", 
      alt: "Cargosavvy Solutions", 
      title: "Cargosavvy Solutions", 
      category: "consulting",
      description: "Provided clear solutions and professional guidance with excellent organization skills. Delivered well-planned and organized work that was easier to execute, resulting in great success for the client.",
      clientImage: "/assets/shree.png",
      clientName: "Sreekanth Menon",
      clientRole: "CEO, Cargosavvy",
      testimonial: "Kabir is a very professional guy with clear solutions for our needs. He is very active and have excellent organization skills. His works are very well planned and organized and easier to execute.",
      technologies: ["Business Consulting", "Strategy Planning", "Process Optimization", "Project Management"]
    },
    // From WebsiteDevelopment.js
    { 
      id: 9, 
      src: "/assets/libertyweb.png", 
      alt: "Liberty Tuition", 
      title: "Liberty Tuition", 
      category: "web-development",
      description: "I partnered with Liberty Tuition to revamp their website with a modern, user-friendly design that highlights their tutoring services and builds trust with parents and students.",
      clientImage: "/assets/alex.png",
      clientName: "Alexander",
      clientRole: "CEO, Liberty Corp",
      testimonial: "His design sense, responsiveness, and attention to detail made the entire process smooth and efficient. Kabir also brought valuable marketing insights that helped us improve how we present our brand online.",
      technologies: ["Web Development", "UI/UX Design", "Mobile Optimization", "Conversion Optimization"]
    },
    { 
      id: 10, 
      src: "/assets/canaryweb.png", 
      alt: "Canary B Active Website", 
      title: "Canary B Active Website", 
      category: "web-development",
      description: "Design and developed a clean, responsive website that showcases the brand's mission and products effectively. Alongside the website, I managed their Instagram strategy by focusing on content creation and engagement.",
      clientImage: "/assets/jack.png",
      clientName: "Jack Austin",
      clientRole: "Founder, Canary B Active",
      testimonial: "From day one, he brought clarity, creativity, and technical skill to the table. He helped us build a clean, user-friendly, and visually striking website, also helped us grow our presence with strategic, consistent content.",
      technologies: ["Web Development", "Instagram Marketing", "Content Strategy", "Brand Development"]
    },
    { 
      id: 11, 
      src: "/assets/enjoybali.gif", 
      alt: "Just Enjoy Bali", 
      title: "Just Enjoy Bali", 
      category: "web-development",
      description: "I worked with Just Enjoy Bali to design and develop a visually captivating website that reflects the premium feel of their luxury experiences in Bali. The focus was on creating a seamless, mobile-friendly user journey with strong visual storytelling.",
      clientImage: "/assets/margus.png",
      clientName: "Margaux Benitah",
      clientRole: "Marketing Director, Just Enjoy Bali",
      testimonial: "Collaborating with Kabir was exactly what our brand needed. He took our vision and turned it into a stunning website that feels both premium and easy to use. From layout to visuals to mobile responsiveness, every detail was handled with care and precision.",
      technologies: ["Web Development", "Visual Storytelling", "Mobile Design", "Booking Systems"]
    }
  ];

  // Filter categories
  const filters = [
    { key: 'all', label: 'All Projects', count: portfolioItems.length },
    { key: 'web-development', label: 'Web Development', count: portfolioItems.filter(item => item.category === 'web-development').length },
    { key: 'social-media', label: 'Social Media', count: portfolioItems.filter(item => item.category === 'social-media').length },
    { key: 'ecommerce', label: 'E-commerce', count: portfolioItems.filter(item => item.category === 'ecommerce').length },
    { key: 'consulting', label: 'Consulting', count: portfolioItems.filter(item => item.category === 'consulting').length }
  ];

  // Filter projects based on active filter
  const filteredProjects = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(project => project.category === activeFilter);

  // Analytics data
  const analyticsData = [
    {
      id: 1,
      image: "/assets/analytics1.png",
      title: "Social Media Growth",
      description: "Exponential follower growth and engagement increase for client's Instagram account",
      metrics: ["300% Follower Growth", "450% Engagement Rate", "2.5M+ Impressions"]
    },
    {
      id: 2,
      image: "/assets/analytics2.png",
      title: "E-commerce Performance",
      description: "Shopify store optimization resulting in significant conversion improvements",
      metrics: ["180% Conversion Rate", "65% Cart Recovery", "$50K+ Revenue"]
    },
    {
      id: 3,
      image: "/assets/analytics3.png",
      title: "SEO Success",
      description: "Organic traffic growth and keyword ranking improvements for client website",
      metrics: ["400% Organic Traffic", "Top 3 Rankings", "85% Click-Through Rate"]
    },
    {
      id: 4,
      image: "/assets/analytics4.png",
      title: "Ad Campaign Results",
      description: "Meta and Google Ads performance showing exceptional ROI and cost efficiency",
      metrics: ["5.2x ROAS", "60% Lower CPC", "250% Lead Generation"]
    },
    {
      id: 5,
      image: "/assets/analytics5.png",
      title: "Business Growth",
      description: "Overall business performance metrics showcasing comprehensive digital transformation",
      metrics: ["300% Revenue Growth", "85% Client Retention", "40+ New Customers"]
    },
    {
      id: 6,
      image: "/assets/analytics6.png",
      title: "Content Marketing Success",
      description: "Strategic content creation and distribution resulting in massive audience engagement",
      metrics: ["500% Content Reach", "75% Share Rate", "150K+ Video Views"]
    },
    {
      id: 7,
      image: "/assets/analytics7.png",
      title: "Lead Generation Campaign",
      description: "Targeted lead generation campaign delivering high-quality prospects and conversions",
      metrics: ["320% Lead Quality", "45% Conversion Rate", "1,200+ Qualified Leads"]
    },
    {
      id: 8,
      image: "/assets/analytics8.png",
      title: "Brand Awareness Campaign",
      description: "Comprehensive brand awareness strategy resulting in massive reach and engagement growth",
      metrics: ["800% Brand Reach", "90% Brand Recognition", "2.8M+ Impressions"]
    },
    {
      id: 9,
      image: "/assets/analytics9.png",
      title: "Multi-Platform Success",
      description: "Cross-platform marketing campaign delivering exceptional results across all social channels",
      metrics: ["450% Cross-Platform Growth", "75% Engagement Rate", "500K+ Total Reach"]
    }
  ];

  // Auto-advance featured slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.min(6, portfolioItems.length));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Auto-advance analytics slider
  useEffect(() => {
    const analyticsInterval = setInterval(() => {
      setCurrentAnalyticsSlide((prev) => (prev + 1) % analyticsData.length);
    }, 5000);
    return () => clearInterval(analyticsInterval);
  }, [analyticsData.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.min(6, portfolioItems.length));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.min(6, portfolioItems.length)) % Math.min(6, portfolioItems.length));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Analytics slider navigation functions
  const nextAnalyticsSlide = () => {
    setCurrentAnalyticsSlide((prev) => (prev + 1) % analyticsData.length);
  };

  const prevAnalyticsSlide = () => {
    setCurrentAnalyticsSlide((prev) => (prev - 1 + analyticsData.length) % analyticsData.length);
  };

  const goToAnalyticsSlide = (index) => {
    setCurrentAnalyticsSlide(index);
  };

  return (
    <div className="min-h-screen bg-kabir-dark">

      {/* Analytics Showcase Section */}
      <section className="pt-32 md:pt-52 pb-12 md:pb-16 px-4 md:px-6 bg-kabir-darker/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 md:mb-16">
            <div className="inline-flex items-center space-x-2 bg-kabir-green/10 px-3 py-1 md:px-4 md:py-2 rounded-full border border-kabir-green/20 mb-4 md:mb-6">
              <div className="w-2 h-2 bg-kabir-green rounded-full animate-pulse"></div>
              <span className="text-kabir-green text-xs md:text-sm font-semibold uppercase tracking-wider">Proven Results</span>
            </div>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-kabir-text mb-4 md:mb-6">
              Real <span className="text-gradient-green">Analytics</span> & Results
            </h2>
            <p className="text-sm md:text-lg text-kabir-text-muted max-w-2xl mx-auto mb-4 md:mb-6">
              Don't just take our word for it. Here are real analytics and performance metrics from our successful client campaigns showing measurable growth and ROI.
            </p>
          </div>

          {/* Analytics Slider */}
          <div className="relative overflow-hidden rounded-lg md:rounded-xl mb-6 md:mb-10">
            <div className="flex transition-transform duration-700 ease-in-out"
                 style={{ transform: `translateX(-${currentAnalyticsSlide * 100}%)` }}>
              {analyticsData.map((analytics, index) => (
                <div key={analytics.id} className="min-w-full">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 items-center">
                    {/* Left Side - Analytics Image */}
                    <div className="flex justify-center lg:justify-start order-2 lg:order-1">
                      <div className="w-full max-w-xs sm:max-w-sm md:max-w-lg">
                        <div className="relative rounded-lg overflow-hidden shadow-md transform hover:scale-105 transition-all duration-300">
                          <img 
                            src={analytics.image}
                            alt={analytics.title}
                            className="w-full h-auto object-contain bg-gradient-to-br from-kabir-gray/50 to-kabir-darker/50"
                          />
                          {/* Floating Badge */}
                          <div className="absolute top-2 right-2 md:top-4 md:right-4">
                            <div className="bg-kabir-green/90 text-kabir-dark px-2 py-1 md:px-3 md:py-1 rounded-full text-xs font-bold flex items-center space-x-1">
                              <svg className="w-2 h-2 md:w-3 md:h-3" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                              </svg>
                              <span className="hidden md:inline">VERIFIED</span>
                              <span className="md:hidden">✓</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Side - Analytics Details */}
                    <div className="space-y-3 md:space-y-4 order-1 lg:order-2">
                      <div>
                        <span className="inline-block px-3 py-1 md:px-4 md:py-2 bg-kabir-green/10 text-kabir-green text-xs md:text-sm font-semibold rounded-full mb-3 md:mb-4">
                          Analytics Report #{analytics.id}
                        </span>
                        <h3 className="font-bold text-kabir-text text-lg md:text-xl lg:text-2xl mb-2 md:mb-3">
                          {analytics.title}
                        </h3>
                        <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-3 md:mb-4">
                          {analytics.description}
                        </p>
                      </div>

                      {/* Key Metrics */}
                      <div className="bg-gray-800/10 backdrop-blur-sm p-3 md:p-4 rounded-lg shadow-lg border border-gray-600/20">
                        <h4 className="text-kabir-green text-sm md:text-base font-bold mb-3 flex items-center">
                          <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 mr-1 sm:mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          Key Results Achieved
                        </h4>
                        <div className="grid grid-cols-1 gap-2">
                          {analytics.metrics.map((metric, idx) => (
                            <div key={idx} className="flex items-center space-x-2 p-2 bg-kabir-green/5 rounded-lg border border-kabir-green/10">
                              <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-kabir-green rounded-full flex-shrink-0"></div>
                              <span className="text-kabir-text font-medium text-sm">{metric}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Performance Badge */}
                      <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4 text-xs sm:text-xs md:text-sm">
                        <div className="flex items-center space-x-1 md:space-x-2">
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-3 md:h-3 bg-green-500 rounded-full animate-pulse"></div>
                          <span className="text-green-400 font-semibold">Live Results</span>
                        </div>
                        <div className="flex items-center space-x-1 md:space-x-2">
                          <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 text-kabir-green" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-kabir-text-muted">Client Verified</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Controls */}
            <div className="flex justify-between items-center mt-6 md:mt-12 px-1 md:px-2">
              <button 
                onClick={prevAnalyticsSlide}
                className="flex items-center space-x-1 md:space-x-2 px-3 py-2 md:px-6 md:py-3 bg-gray-800/20 backdrop-blur-sm border border-gray-600/30 rounded-full hover:bg-gray-700/30 transition-all duration-300 shadow-lg text-sm md:text-base"
              >
                <svg className="w-4 h-4 md:w-5 md:h-5 text-kabir-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <span className="text-kabir-text font-medium hidden sm:inline">Previous</span>
              </button>

              <div className="flex space-x-2 md:space-x-3">
                {analyticsData.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToAnalyticsSlide(index)}
                    className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                      index === currentAnalyticsSlide 
                        ? 'bg-kabir-green scale-125' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>

              <button 
                onClick={nextAnalyticsSlide}
                className="flex items-center space-x-1 md:space-x-2 px-3 py-2 md:px-6 md:py-3 bg-gray-800/20 backdrop-blur-sm border border-gray-600/30 rounded-full hover:bg-gray-700/30 transition-all duration-300 shadow-lg text-sm md:text-base"
              >
                <span className="text-kabir-text font-medium hidden sm:inline">Next</span>
                <svg className="w-4 h-4 md:w-5 md:h-5 text-kabir-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Stats Summary */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mt-6 md:mt-8">
            {[
              { 
                number: "500+", 
                label: "Campaigns Managed", 
                icon: (
                  <svg className="w-5 h-5 text-kabir-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                )
              },
              { 
                number: "300%", 
                label: "Average Growth", 
                icon: (
                  <svg className="w-5 h-5 text-kabir-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                )
              },
              { 
                number: "50+", 
                label: "Happy Clients", 
                icon: (
                  <svg className="w-5 h-5 text-kabir-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                )
              },
              { 
                number: "5.2x", 
                label: "Average ROAS", 
                icon: (
                  <svg className="w-5 h-5 text-kabir-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-kabir-gray/20 rounded-lg p-4 border border-kabir-green/30 hover:border-kabir-green transition-colors duration-300">
                  <div className="flex justify-center mb-3">
                    {stat.icon}
                  </div>
                  <div className="text-lg md:text-xl font-bold text-kabir-text mb-1">
                    {stat.number}
                  </div>
                  <div className="text-kabir-text-muted text-xs font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>

          
        </div>
      </section>

      {/* Hero Section with Featured Portfolio Slider */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-kabir-green/10 px-4 py-2 rounded-full border border-kabir-green/20 mb-6">
              <div className="w-2 h-2 bg-kabir-green rounded-full animate-pulse"></div>
              <span className="text-kabir-green text-sm font-semibold uppercase tracking-wider">Portfolio Showcase</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-kabir-text leading-tight mb-6">
              Our <span className="text-gradient-green">Portfolio</span>
            </h1>
            <p className="text-lg md:text-xl text-kabir-text-muted leading-relaxed max-w-3xl mx-auto mb-8">
              Explore our comprehensive collection of successful projects across web development, social media management, e-commerce solutions, and strategic consulting.
            </p>
          </div>

          {/* Featured Portfolio Slider */}
          <div className="relative overflow-hidden rounded-2xl mb-16">
            <div className="flex transition-transform duration-700 ease-in-out"
                 style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
              {portfolioItems.slice(0, 6).map((item, index) => (
                <div key={item.id} className="min-w-full">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Side - Project Details */}
                    <div className="space-y-6 lg:space-y-8">
                      <div>
                        <span className="inline-block px-3 py-1 lg:px-4 lg:py-2 bg-kabir-green/10 text-kabir-green text-xs lg:text-sm font-semibold rounded-full mb-3 lg:mb-4 capitalize">
                          {item.category.replace('-', ' ')}
                        </span>
                        <h3 className="font-bold text-kabir-text text-2xl lg:text-4xl mb-4 lg:mb-6">
                          {item.title}
                        </h3>
                        <p className="text-gray-300 text-sm lg:text-lg leading-relaxed">
                          {item.description}
                        </p>
                      </div>

                      {/* Client Testimonial */}
                      <div className="bg-gray-800/10 backdrop-blur-sm p-4 lg:p-8 rounded-xl lg:rounded-2xl shadow-lg border border-gray-600/20">
                        <div className="flex items-start space-x-3 lg:space-x-4">
                          <div className="flex-shrink-0">
                            <img 
                              src={item.clientImage}
                              alt={item.clientName}
                              className="w-12 h-12 lg:w-16 lg:h-16 rounded-full object-cover"
                            />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center mb-2 lg:mb-3">
                              {[...Array(5)].map((_, i) => (
                                <svg key={i} className="w-4 h-4 lg:w-5 lg:h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                </svg>
                              ))}
                            </div>
                            <p className="text-gray-200 italic mb-3 lg:mb-4 text-sm lg:text-lg leading-relaxed">
                              "{item.testimonial}"
                            </p>
                            <div>
                              <p className="font-semibold text-kabir-text text-sm lg:text-lg">
                                {item.clientName}
                              </p>
                              <p className="text-kabir-green text-xs lg:text-sm font-medium">
                                {item.clientRole}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Side - Project Image */}
                    <div className="flex justify-center lg:justify-end">
                      <div className="w-2/3 max-w-xs sm:w-3/4 sm:max-w-sm md:w-full md:max-w-lg">
                        <div className="relative rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-300">
                          <img 
                            src={item.src}
                            alt={item.alt}
                            className="w-full h-auto object-contain"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Controls */}
            <div className="flex justify-between items-center mt-6 md:mt-12 px-2">
              <button 
                onClick={prevSlide}
                className="flex items-center space-x-1 md:space-x-2 px-2 py-2 md:px-6 md:py-3 bg-gray-800/20 backdrop-blur-sm border border-gray-600/30 rounded-full hover:bg-gray-700/30 transition-all duration-300 shadow-lg text-xs md:text-base"
              >
                <svg className="w-3 h-3 md:w-5 md:h-5 text-kabir-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <span className="text-kabir-text font-medium hidden sm:inline">Previous</span>
              </button>

              <div className="flex space-x-1 md:space-x-3">
                {portfolioItems.slice(0, 6).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide 
                        ? 'bg-kabir-green scale-125' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>

              <button 
                onClick={nextSlide}
                className="flex items-center space-x-1 md:space-x-2 px-2 py-2 md:px-6 md:py-3 bg-gray-800/20 backdrop-blur-sm border border-gray-600/30 rounded-full hover:bg-gray-700/30 transition-all duration-300 shadow-lg text-xs md:text-base"
              >
                <span className="text-kabir-text font-medium hidden sm:inline">Next</span>
                <svg className="w-3 h-3 md:w-5 md:h-5 text-kabir-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid Section */}
      <section className="py-20 px-6 bg-kabir-darker/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-kabir-text mb-6">
              Complete <span className="text-gradient-green">Project Gallery</span>
            </h2>
            <p className="text-xl text-kabir-text-muted max-w-3xl mx-auto">
              Browse through all our projects by category and discover the diverse range of solutions we've delivered.
            </p>
          </div>

          {/* Filter Buttons - Hidden on Mobile */}
          <div className="hidden md:flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center space-x-2 ${
                  activeFilter === filter.key
                    ? 'bg-kabir-green text-kabir-dark shadow-lg shadow-kabir-green/25'
                    : 'bg-gray-800/30 text-gray-300 hover:bg-gray-700/40 hover:text-white border border-gray-600/30'
                }`}
              >
                <span>{filter.label}</span>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  activeFilter === filter.key 
                    ? 'bg-kabir-dark/20 text-kabir-dark' 
                    : 'bg-kabir-green/20 text-kabir-green'
                }`}>
                  {filter.count}
                </span>
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-6 lg:gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="group card-modern overflow-hidden hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-kabir-green/10">
                {/* Project Image */}
                <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden">
                  <img 
                    src={project.src}
                    alt={project.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-kabir-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-3 left-3">
                    <span className="px-2 py-1 bg-kabir-green/90 text-kabir-dark text-xs font-semibold rounded-full capitalize">
                      {project.category.replace('-', ' ')}
                    </span>
                  </div>
                </div>
                
                {/* Project Content */}
                <div className="p-4 sm:p-5 lg:p-6">
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-kabir-text group-hover:text-kabir-green transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed line-clamp-2 sm:line-clamp-3">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                    {project.technologies.slice(0, 2).map((tech, index) => (
                      <span key={index} className="text-xs bg-kabir-green/10 text-kabir-green px-2 py-1 rounded-full border border-kabir-green/20">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 2 && (
                      <span className="text-xs bg-gray-700/50 text-gray-400 px-2 py-1 rounded-full">
                        +{project.technologies.length - 2}
                      </span>
                    )}
                  </div>
                  
                  {/* Client Info */}
                  <div className="flex items-center space-x-2 sm:space-x-3 pt-3 sm:pt-4 border-t border-gray-700/30">
                    <img 
                      src={project.clientImage}
                      alt={project.clientName}
                      className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-kabir-text font-medium text-xs sm:text-sm">{project.clientName}</p>
                      <p className="text-gray-400 text-xs">{project.clientRole}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No results message */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-6">🔍</div>
              <h3 className="text-2xl font-bold text-kabir-text mb-4">
                No projects found
              </h3>
              <p className="text-kabir-text-muted mb-8">
                Try selecting a different category to see more projects.
              </p>
              <button 
                onClick={() => setActiveFilter('all')}
                className="btn-primary"
              >
                Show All Projects
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-10 md:py-20 overflow-hidden">
        {/* Header - Centered */}
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-8 md:mb-16">
            <div className="inline-flex items-center space-x-2 bg-kabir-green/10 px-3 py-1 md:px-4 md:py-2 rounded-full border border-kabir-green/20 mb-4 md:mb-6">
              <div className="w-2 h-2 bg-kabir-green rounded-full animate-pulse"></div>
              <span className="text-kabir-green text-xs md:text-sm font-semibold uppercase tracking-wider">Client Success Stories</span>
            </div>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-kabir-text mb-4 md:mb-6">
              What Our <span className="text-gradient-green">Clients Say</span>
            </h2>
            <p className="text-sm md:text-xl text-kabir-text-muted max-w-3xl mx-auto">
              Real testimonials from real businesses who've experienced transformational growth with our services.
            </p>
          </div>
        </div>

        {/* Scrolling Testimonials - Full Width */}
        <div className="relative overflow-hidden w-full">
          <div className="flex animate-scroll-left" style={{gap: '2rem', minWidth: 'max-content'}}>
            {/* Create multiple sets for truly seamless loop */}
            {[...Array(3)].map((_, setIndex) => (
              [
                {
                  quote: "Kabir has been an invaluable asset to our company in the live streaming industry. His dedication to providing exceptional customer support and technical assistance has not gone unnoticed. In addition to his outstanding work in customer and tech support, Kabir has also been instrumental in setting up successful events for our clients. His attention to detail and commitment to ensuring that every aspect of the event runs smoothly has been greatly appreciated. Kabir consistently goes above and beyond in his work and consistently demonstrates a positive attitude and a willingness to help others. He has shown himself to be a true team player and an important member of our organization. Overall, Kabir has made a significant impact on our company and we are grateful to have him as a part of our team.",
                  author: "Jordan Bar Avraham",
                  company: "Playstream.gg",
                  rating: 5,
                  gif: "/assets/jordan.png",
                  bgColor: "from-purple-500/20 to-pink-500/20"
                },
                {
                  quote: "Kabir was a great person to work with and id recommend him to anyone looking to grow their Instagram. There are a lot of things I liked about Kabir. First, his communication was excellent. He was always available whenever I needed something. He was also very organized and did such a great job scheduling and creating colorful content that matched my brands image. He checked in to see if the content was to my liking before posting, which I really appreciated. Kabir was also very open to feedback, which was very nice. It made me feel comfortable working with him. Overall, Kabir was a guy to work with! He really does care about the work he does and is very professional. Thanks for your hard work and effort!",
                  author: "Alexia Holeso",
                  company: "Business Owner",
                  rating: 5,
                  gif: "/assets/alexia.png",
                  bgColor: "from-green-500/20 to-emerald-500/20"
                },
                {
                  quote: "Kabir jumped in quickly to manage my stagnant social media channels. He was very cooperative and patient.",
                  author: "Aishah Hight",
                  company: "Book Author",
                  rating: 5,
                  gif: "/assets/aisha.png",
                  bgColor: "from-green-500/20 to-emerald-500/20"
                },
                {
                  quote: "Extremely hard working and eager to please! Re-Designed banner again and again up until i was absolutely satisfied!",
                  author: "Mohammad Latif",
                  company: "Zikr",
                  rating: 5,
                  gif: "/assets/latif.webp",
                  bgColor: "from-green-500/20 to-emerald-500/20"
                },
                {
                  quote: "Kabir professionally managed my social media. He was patient, informative and knowledgeable in his field. I would recommend him to anyone who would need the same services.",
                  author: "Katrina Nyby",
                  company: "Book Author",
                  rating: 5,
                  gif: "/assets/katrina.jpeg",
                  bgColor: "from-green-500/20 to-emerald-500/20"
                },
                {
                  quote: "Kabir is a very professional guy with clear solutions for our needs. He is very active and have excellent organization skills. His works are very well planned and organized and easier to execute . We have great success working with Kabir",
                  author: "Sreekanth Menon",
                  company: "Cargosavvy",
                  rating: 5,
                  gif: "/assets/shree.png",
                  bgColor: "from-green-500/20 to-emerald-500/20"
                },
                {
                  quote: "Kabir was delightful to work with, knowledgeable, responsive and eager to get the job done well.",
                  author: "Kerri White",
                  company: "Bright Partners",
                  rating: 5,
                  gif: "/assets/kerri.jpeg",
                  bgColor: "from-blue-500/20 to-cyan-500/20"
                },
                {
                  quote: "Kabir did a very detailed piece of analysis on my target audience and knows his way around Facebook extremely well. He presents his output very professionally and goes to great lengths to get exactly the right audience analysis. Well done Kabir - great, helpful and insightful analysis!",
                  author: "Christopher Pereira",
                  company: "Roccabox Property Group S.L",
                  rating: 5,
                  gif: "/assets/christopher.jpeg",
                  bgColor: "from-purple-500/20 to-pink-500/20"
                },
                {
                  quote: "Professional setup and ongoing optimization. Our cost per acquisition dropped by 60%.",
                  author: "Jey Lee",
                  company: "Jetlifee Flags",
                  rating: 5,
                  gif: "/assets/jetli.jpg",
                  bgColor: "from-green-500/20 to-emerald-500/20"
                },
                {
                  quote: "On time. What's to learn and grow with the company. Fantastic communication. When given a task, Kabir asks questions to clarify, rather than going ahead, guessing, doing it wrong, and wasting time and money. Kabir also has experience running and optimizing Facebook ads. This is also a plus for us.",
                  author: "Joey Myers",
                  company: "Hitting Performance Lab",
                  rating: 5,
                  gif: "/assets/joey.gif",
                  bgColor: "from-green-500/20 to-emerald-500/20"
                },
                {
                  quote: "Our organic traffic increased by 300% in 6 months. Rankings improved across all target keywords!",
                  author: "Ayana Truesdell",
                  company: "True Massage Bodywork",
                  rating: 5,
                  gif: "/assets/ayana.jpeg",
                  bgColor: "from-blue-500/20 to-cyan-500/20"
                },
                {
                  quote: "Great experience working with Kabir, His work quality is excellent, and he helped us a lot with content creation, improving our SEO rankings, and also with social media management, graphic designs and managing Google and social media ad campaigns. Kabir was very flexible, always ready to make changes when needed, and ensured that everything met our expectations. His communication was fantastic—he was quick to respond and always available whenever we needed help, just a text away. This made working with him very easy and smooth. Overall, Kabir played a key role in our project's success. His wide range of skills and commitment make him a great freelancer to work with, and I highly recommend him to anyone looking for a reliable and talented professional.",
                  author: "Hesham Eldash",
                  company: "Medical Specialist",
                  rating: 5,
                  gif: "/assets/Hesham.jpeg",
                  bgColor: "from-green-500/20 to-emerald-500/20"
                },
                {
                  quote: "Very nice person to work with. Good quality work and a team player. Work done in time too!",
                  author: "Seong Kwon Sam An",
                  company: "Content Creator",
                  rating: 5,
                  gif: "/assets/sam.jpeg",
                  bgColor: "from-blue-500/20 to-cyan-500/20"
                },
                {
                  quote: "Kabir has been amazing with his helping me between Shopify, Meta ads setup, and overall consulting support. He even has set up virtual calls with me and has walked me through things on the back end that I didn't understand. Extremely helpful and trustworthy- I appreciate all his help and looking forward to what we will be working on next. Literally, fantastic customer services.",
                  author: "Natasha Maxwell",
                  company: "E-commerce Store Owner",
                  rating: 5,
                  gif: "/assets/natasha.jpeg",
                  bgColor: "from-purple-500/20 to-pink-500/20"
                },
                {
                  quote: "Kabir's strategic insights helped us pivot our business model and increase revenue by 250%.",
                  author: "Nika Corbett",
                  company: "The Black Owned Business Box",
                  rating: 5,
                  gif: "/assets/nika.jpeg",
                  bgColor: "from-blue-500/20 to-cyan-500/20"
                },
                {
                  quote: "Kabir has been amazing to work with. We have worked with him a few times - he's always available, delivers work on time, has a great attitude and his work is of high quality. Thank you Kabir for your support.",
                  author: "Sabine Kuhn",
                  company: "Marketing Director",
                  rating: 5,
                  gif: "/assets/sabine.webp",
                  bgColor: "from-purple-500/20 to-pink-500/20"
                },
                {
                  quote: "Kabir, was amazing. He started off the contract by getting a to-do-list of everything that he and I needed to do to make this as successful as possible. He was very creative with his posts, always wanted feedback, and very responsive. Will absolutely be using him again.",
                  author: "Joshua Staneart",
                  company: "Staneart Real Estate",
                  rating: 5,
                  gif: "/assets/Joshua.jpeg",
                  bgColor: "from-blue-500/20 to-cyan-500/20"
                },
                {
                  quote: "Kabir did a great job at adapting to many changes and staying patient with the process. He is extremely attentive and knows a great deal about marketing overall. I enjoyed working with Kabir very much and highly recommend him to anyone looking for help",
                  author: "Aaron Robertson",
                  company: "Tech Startup CEO",
                  rating: 5,
                  gif: "/assets/aron.jpeg",
                  bgColor: "from-blue-500/20 to-cyan-500/20"
                },
                {
                  quote: "Kabir is a superstar in everything he does. He grew our channel exponentially in record time!",
                  author: "Jason Schappert",
                  company: "Fintech Business Owner",
                  rating: 5,
                  gif: "/assets/jason.jpeg",
                  bgColor: "from-purple-500/20 to-pink-500/20"
                },
                {
                  quote: "Fantastic experience working with Kabir! His marketing expertise, creativity, and attention to detail helped elevate my company and what I was looking for. He delivered high-quality work on time and went above and beyond my expectations. Definitely took the weight off my shoulders, highly recommend and would definitely work with him again!",
                  author: "Cianna Elwin",
                  company: "Tax Consultant",
                  rating: 5,
                  gif: "/assets/ciana.png",
                  bgColor: "from-green-500/20 to-emerald-500/20"
                }
              ].map((testimonial, index) => (
                <div key={`set-${setIndex}-${index}`} className="flex-shrink-0 w-64 sm:w-80">
                  <div className="bg-gradient-to-br from-kabir-gray/90 to-kabir-darker/90 backdrop-blur-sm border border-kabir-green/30 rounded-xl sm:rounded-2xl p-4 sm:p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300 h-80 sm:h-96 flex flex-col">
                    {/* Profile Image */}
                    <div className="flex justify-center mb-4 sm:mb-6">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-3 sm:border-4 border-kabir-green/40">
                        <img 
                          src={testimonial.gif} 
                          alt={`${testimonial.author} testimonial`}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iNTAiIGN5PSI1MCIgcj0iNTAiIGZpbGw9IiMwMGZmODgiLz48dGV4dCB4PSI1MCIgeT0iNTUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiMwYTBhMGEiIGZvbnQtc2l6ZT0iMzAiIGZvbnQtd2VpZ2h0PSJib2xkIj7wn5GLIC48L3RleHQ+PC9zdmc+';
                          }}
                        />
                      </div>
                    </div>

                    {/* Client Name & Title */}
                    <div className="mb-3 sm:mb-4">
                      <h3 className="font-bold text-kabir-text text-base sm:text-lg mb-1">{testimonial.author}</h3>
                      <p className="text-kabir-green text-xs sm:text-sm font-medium">{testimonial.company}</p>
                    </div>

                    {/* Quote - Flexible height with overflow handling */}
                    <blockquote className="text-kabir-text-muted text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 italic flex-grow overflow-hidden">
                      <div className="line-clamp-3 sm:line-clamp-4">
                        "{testimonial.quote}"
                      </div>
                    </blockquote>

                    {/* Rating Stars - Fixed at bottom */}
                    <div className="flex justify-center mt-auto">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 mx-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              ))
            )).flat()}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-10 md:py-20 px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="card-modern p-6 sm:p-8 md:p-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-kabir-text mb-4 md:mb-6">
              Ready to Start Your <span className="text-gradient-green">Next Project</span>?
            </h2>
            <p className="text-sm sm:text-lg md:text-xl text-kabir-text-muted mb-6 md:mb-8 leading-relaxed">
              Let's discuss your vision and create something amazing together. From concept to completion, we're here to bring your ideas to life.
            </p>
            <div className="flex justify-center">
              <CalendlyButton 
                className="bg-gradient-to-r from-kabir-green to-green-400 hover:from-green-400 hover:to-kabir-green text-kabir-dark shadow-lg hover:shadow-xl glow-green px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-semibold w-full sm:w-auto min-h-[48px] flex items-center justify-center"
                buttonText="Book Free Consultation"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
