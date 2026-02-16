import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CalendlyButton from '../../components/CalendlyButton';
import { FaReact, FaWordpress, FaHtml5, FaCss3Alt, FaJs, FaDatabase } from 'react-icons/fa';
import { SiTailwindcss, SiNodedotjs } from 'react-icons/si';

const WebsiteDevelopment = () => {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPortfolioSlide, setCurrentPortfolioSlide] = useState(0);

  // Hardcoded Website Development packages data
  const hardcodedPackages = [
    {
      id: 10,
      name: 'Starter Website',
      short_description: 'Professional website for small businesses',
      description: 'Clean, modern website designed to establish your online presence and convert visitors.',
      price: 999,
      original_price: 1499,
      duration_days: 30,
      duration_type: 'one-time',
      category_id: 4,
      features: [
        '5-page responsive website',
        'Modern, professional design',
        'Mobile-friendly development',
        'Contact form integration',
        'Social media integration',
        'Basic SEO setup',
        'Content Management System',
        '1 revision round',
        'Stock images (up to 10)',
        'Google Analytics integration',
        'Website training session'
      ],
      is_active: true,
      is_featured: false,
      created_at: '2024-01-01T00:00:00Z',
      updated_at: '2024-01-01T00:00:00Z'
    },
    {
      id: 11,
      name: 'Growth Website',
      short_description: 'Advanced website with custom features',
      description: 'Feature-rich website with custom functionality, advanced design, and optimization.',
      price: 2499,
      original_price: 3299,
      duration_days: 45,
      duration_type: 'one-time',
      category_id: 4,
      features: [
        '15-page custom website',
        'Advanced custom design',
        'Fully responsive and optimized',
        'Custom contact forms',
        'Blog functionality',
        'E-commerce integration (up to 50 products)',
        'Advanced SEO optimization',
        'Performance optimization',
        '2 revision rounds',
        'Custom graphics and branding',
        'Advanced analytics setup',
        'Social media integration',
        'Email marketing integration',
        'Content migration assistance',
        'Priority support (3 months)'
      ],
      is_active: true,
      is_featured: true,
      created_at: '2024-01-01T00:00:00Z',
      updated_at: '2024-01-01T00:00:00Z'
    },
    {
      id: 12,
      name: 'Enterprise Website',
      short_description: 'Custom web application for large businesses',
      description: 'Enterprise-level web solution with custom development, advanced features, and comprehensive support.',
      price: 5999,
      original_price: 7999,
      duration_days: 60,
      duration_type: 'one-time',
      category_id: 4,
      features: [
        'Unlimited pages web application',
        'Custom UI/UX design',
        'Advanced web development',
        'Custom functionality and features',
        'Database integration',
        'API development and integration',
        'Advanced e-commerce solution',
        'Enterprise-level security',
        'Performance and speed optimization',
        'Unlimited revisions',
        'Custom branding and graphics',
        'Advanced SEO and marketing integration',
        'Multi-language support',
        'Content management system',
        'Analytics and reporting dashboard',
        'Training and documentation',
        'Ongoing support (6 months)'
      ],
      is_active: true,
      is_featured: false,
      created_at: '2024-01-01T00:00:00Z',
      updated_at: '2024-01-01T00:00:00Z'
    }
  ];

  // Website Development category ID from local data
  const CATEGORY_ID = 4;

  useEffect(() => {
    const fetchPackages = () => {
      try {
        console.log('Using hardcoded Website Development packages data');
        setLoading(true);
        
        // Use hardcoded data directly
        setPackages(hardcodedPackages);
        
        console.log('Found Website Development packages:', hardcodedPackages);
        
        if (hardcodedPackages && hardcodedPackages.length > 0) {
          console.log('Packages loaded:', hardcodedPackages.length);
        } else {
          console.log('No packages found for Website Development');
          setPackages([]);
        }
      } catch (err) {
        console.error('Error fetching packages:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPackages();
  }, []);

  // Helper function to parse features from string or array
  const parseFeatures = (featuresData) => {
    if (!featuresData) return [];
    
    // If it's already an array, return it
    if (Array.isArray(featuresData)) {
      return featuresData.filter(feature => feature && feature.length > 0);
    }
    
    // If it's a string, split by comma
    if (typeof featuresData === 'string') {
      return featuresData.split(',').map(feature => feature.trim()).filter(feature => feature.length > 0);
    }
    
    // If it's an object or other type, try to convert to string first
    try {
      const stringData = String(featuresData);
      return stringData.split(',').map(feature => feature.trim()).filter(feature => feature.length > 0);
    } catch (error) {
      console.error('Error parsing features:', error, featuresData);
      return [];
    }
  };

    // Portfolio slider data
    const portfolioItems = [
      { 
        id: 1, 
        src: "/assets/libertyweb.png", 
        alt: "Liberty - Past Work Showcase", 
        title: "Liberty Tuition", 
        category: "Web Development",
        description: "I partnered with Liberty Tuition to revamp their website with a modern, user-friendly design that highlights their tutoring services and builds trust with parents and students. The goal was to improve user experience, enhance visual branding, and ensure mobile responsiveness while keeping the site optimized for conversions and inquiries.",
        clientImage: "/assets/alex.png",
        clientName: "Alexander",
        clientRole: "CEO, Liberty Corp",
        testimonial: "His design sense, responsiveness, and attention to detail made the entire process smooth and efficient. Kabir also brought valuable marketing insights that helped us improve how we present our brand online."
      },
      { 
        id: 2, 
        src: "/assets/canaryweb.png", 
        alt: "Canary B Active", 
        title: "Canary B Active", 
        category: "Shopify Development",
        description: "Design and developed a clean, responsive website that showcases the brand’s mission and products effectively. Alongside the website, I managed their Instagram strategy by focusing on content creation, engagement, and follower growth to build a strong and relevant online presence.",
        clientImage: "/assets/jack.png",
        clientName: "Jack Austin",
        clientRole: "Founder, Canary B Active",
        testimonial: "From day one, he brought clarity, creativity, and technical skill to the table. He helped us build a clean, user-friendly, and visually striking website, also helped us grow our presence with strategic, consistent content."
      },
      { 
        id: 3, 
        src: "/assets/enjoybali.gif", 
        alt: "Just Enjoy Bali", 
        title: "Just Enjoy Bali", 
        category: "Website Design & Development",
        description: "I worked with Just Enjoy Bali to design and develop a visually captivating website that reflects the premium feel of their luxury experiences in Bali. The focus was on creating a seamless, mobile-friendly user journey with strong visual storytelling, clear navigation, and inquiry-focused calls to action to drive bookings and trust.",
        clientImage: "/assets/margus.png",
        clientName: "Margaux Benitah",
        clientRole: "Marketing Director, Just Enjoy Bali",
        testimonial: "Collaborating with Kabir was exactly what our brand needed. He took our vision and turned it into a stunning website that feels both premium and easy to use. From layout to visuals to mobile responsiveness, every detail was handled with care and precision."
      }
    ];

    const testimonials = [
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
      }
    ];
  
    // Portfolio slider navigation functions
    const nextPortfolioSlide = () => {
      setCurrentPortfolioSlide((prev) => (prev + 1) % portfolioItems.length);
    };
  
    const prevPortfolioSlide = () => {
      setCurrentPortfolioSlide((prev) => (prev - 1 + portfolioItems.length) % portfolioItems.length);
    };
  
    const goToPortfolioSlide = (index) => {
      setCurrentPortfolioSlide(index);
    };
  
    // Auto-advance portfolio slider
    useEffect(() => {
      const portfolioInterval = setInterval(() => {
        nextPortfolioSlide();
      }, 10000); // Change slide every 10 seconds

      return () => clearInterval(portfolioInterval);
    }, [nextPortfolioSlide]);

  // Dynamic icon function for Website Development packages
  const getPackageIcon = (packageName, features) => {
    const name = packageName.toLowerCase();
    
    // Return multiple web development technology icons based on package tier
    if (name.includes('basic') || name.includes('starter')) {
      // Basic: HTML + CSS + WordPress (3 technologies)
      return (
        <div className="flex space-x-1.5 justify-center">
          <span><FaHtml5 className="text-kabir-green" size={22} /></span>
          <span><FaCss3Alt className="text-kabir-green" size={22} /></span>
          <span><FaWordpress className="text-kabir-green" size={22} /></span>
        </div>
      );
    } else if (name.includes('standard') || name.includes('professional')) {
      // Standard/Professional: HTML + CSS + JS + WordPress + Tailwind (5 technologies)
      return (
        <div className="flex space-x-1.5 justify-center">
          <span><FaHtml5 className="text-kabir-green" size={20} /></span>
          <span><FaCss3Alt className="text-kabir-green" size={20} /></span>
          <span><FaJs className="text-kabir-green" size={20} /></span>
          <span><FaWordpress className="text-kabir-green" size={20} /></span>
          <span><SiTailwindcss className="text-kabir-green" size={20} /></span>
        </div>
      );
    } else if (name.includes('premium') || name.includes('enterprise')) {
      // Premium/Enterprise: Full stack development (6 technologies)
      return (
        <div className="flex space-x-1 justify-center">
          <span><FaReact className="text-kabir-green" size={18} /></span>
          <span><SiNodedotjs className="text-kabir-green" size={18} /></span>
          <span><FaJs className="text-kabir-green" size={18} /></span>
          <span><FaDatabase className="text-kabir-green" size={18} /></span>
          <span><SiTailwindcss className="text-kabir-green" size={18} /></span>
          <span><FaWordpress className="text-kabir-green" size={18} /></span>
        </div>
      );
    } else {
      // Default fallback - single rocket icon
      return <div className="text-kabir-green text-4xl">🚀</div>;
    }
  };

  

  return (
    <div className="min-h-screen bg-kabir-dark">
      {/* Hero Section */}
      <section className="pt-52 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl md:text-6xl font-black text-kabir-text leading-tight mb-6">
                  Website <span className="text-gradient-green">Development</span>
                </h1>
                <p className="text-lg md:text-xl text-kabir-text-muted leading-relaxed mb-8">
                  High-performing, responsive, and SEO-friendly websites in WordPress or custom stacks that drive results.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 md:w-6 md:h-6 bg-kabir-green rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 md:w-4 md:h-4 text-kabir-dark" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-kabir-text">Responsive & mobile-optimized design</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 md:w-6 md:h-6 bg-kabir-green rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 md:w-4 md:h-4 text-kabir-dark" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-kabir-text">WordPress & custom development</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 md:w-6 md:h-6 bg-kabir-green rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 md:w-4 md:h-4 text-kabir-dark" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-kabir-text">SEO optimization & performance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 md:w-6 md:h-6 bg-kabir-green rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 md:w-4 md:h-4 text-kabir-dark" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-kabir-text">E-commerce & CMS integration</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
              <CalendlyButton 
                          className="bg-gradient-to-r from-kabir-green to-green-400 hover:from-green-400 hover:to-kabir-green text-kabir-dark shadow-lg hover:shadow-xl glow-green"
                          buttonText="Book Free Consultation"
                        />
              </div>
            </div>

            {/* Right Content - GIF Element */}
            <div className="relative">
              <img 
                src="/assets/enjoybali.gif"
                alt="Website Development Showcase"
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-kabir-green text-sm font-semibold uppercase tracking-wider">Development Packages</span>
            <h2 className="text-4xl md:text-5xl font-black text-kabir-text mt-4 mb-6">
              Choose Your <span className="text-gradient-green">Website Plan</span>
            </h2>
            <p className="text-xl text-kabir-text-muted max-w-3xl mx-auto">
              Professional website development packages designed to bring your vision to life
            </p>
          </div>

          {loading ? (
            <div className="text-center py-16">
              <div className="text-6xl mb-6">💻</div>
              <h3 className="text-2xl font-bold text-kabir-text mb-4">
                Loading Website Development packages...
              </h3>
              <p className="text-kabir-text-muted">
                Please wait while we fetch the latest packages.
              </p>
            </div>
          ) : error ? (
            <div className="text-center py-16">
              <div className="text-6xl mb-6">❌</div>
              <h3 className="text-2xl font-bold text-kabir-text mb-4">
                Error loading packages
              </h3>
              <p className="text-kabir-text-muted mb-8">
                {typeof error === 'string' ? error : (error?.message || JSON.stringify(error))}
              </p>
              <Link to="/services" className="btn-primary">
                View All Services
              </Link>
            </div>
          ) : packages.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {packages
                .sort((a, b) => {
                  // Sort by price (ascending) so Basic comes first, then Standard, then Professional
                  const priceA = parseFloat(a.price);
                  const priceB = parseFloat(b.price);
                  return priceA - priceB;
                })
                .map((pkg, index) => {
                const features = parseFeatures(pkg.features);
                
                return (
                  <div key={pkg.id} className="relative">
                    {/* Most Popular Badge - Show on middle package (Standard) */}
                    {index === 1 && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                        <div className="bg-kabir-green text-kabir-dark text-xs font-bold px-4 py-2 rounded-full">
                          MOST POPULAR
                        </div>
                      </div>
                    )}
                    
                    <div className="bg-transparent border-2 border-kabir-green rounded-2xl p-8 flex flex-col relative">
                      {/* Package Title */}
                      <div className="text-center mb-4">
                        <h3 className="text-lg font-bold text-kabir-green mb-3 pb-1 border-b-2 border-kabir-green inline-block">
                          {pkg.name}
                        </h3>
                      </div>



                      {/* Description */}
                      <div className="text-center mb-6">
                        <p className="text-white text-sm font-medium leading-relaxed px-2">
                          {pkg.description}
                        </p>
                        
                        {/* Dynamic Web Technology Icons */}
                        <div className="my-6 flex justify-center">
                          {getPackageIcon(pkg.name, features)}
                        </div>
                      </div>

                      {/* Features List */}
                      <div className="space-y-2 mb-6 flex-grow">
                        {features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-2">
                            <div className="w-4 h-4 bg-kabir-green rounded-full flex items-center justify-center flex-shrink-0">
                              <svg className="w-2.5 h-2.5 text-kabir-dark" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <span className="text-gray-300 text-xs">{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* Purchase Button */}
                      <div className="mt-auto">
                        <CalendlyButton 
                          packageName={pkg.name}
                          className="bg-gradient-to-r from-kabir-green to-green-400 hover:from-green-400 hover:to-kabir-green text-kabir-dark shadow-lg hover:shadow-xl glow-green"
                          buttonText="Book Free Consultation"
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-6">📦</div>
              <h3 className="text-2xl font-bold text-kabir-text mb-4">
                No Website Development packages available yet
              </h3>
              <p className="text-kabir-text-muted mb-8">
                We're working on adding development packages. Check back soon!
              </p>
              <Link to="/services" className="btn-primary">
                View All Services
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Portfolio/Past Work Section */}
      <section className="py-20 overflow-hidden relative">
        {/* Full-width background with low opacity */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
        <div className="relative z-10">
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="relative overflow-hidden">
            <div className="flex transition-transform duration-700 ease-in-out"
                 style={{ transform: `translateX(-${currentPortfolioSlide * 100}%)` }}>
              {portfolioItems.map((item, index) => (
                <div key={item.id} className="min-w-full">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Side - Project Details */}
                    <div className="space-y-8">
                      {/* Project Header */}
                      <div>
                        <span className="inline-block px-4 py-2 bg-kabir-green/10 text-kabir-green text-sm font-semibold rounded-full mb-4">
                          {item.category}
                        </span>
                        <h3 className="font-bold text-kabir-text text-4xl mb-6">
                          {item.title}
                        </h3>
                        <p className="text-gray-300 text-lg leading-relaxed">
                          {item.description}
                        </p>
                      </div>

                      {/* Client Testimonial */}
                      <div className="bg-gray-800/10 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-gray-600/20">
                        <div className="flex items-start space-x-4">
                          <div className="flex-shrink-0">
                            <img 
                              src={item.clientImage}
                              alt={item.clientName}
                              className="w-16 h-16 rounded-full object-cover"
                            />
                          </div>
                          <div className="flex-1">
                            {/* 5-Star Rating */}
                            <div className="flex items-center mb-3">
                              {[...Array(5)].map((_, i) => (
                                <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                </svg>
                              ))}
                            </div>
                            <p className="text-gray-200 italic mb-4 text-lg leading-relaxed">
                              "{item.testimonial}"
                            </p>
                            <div>
                              <p className="font-semibold text-kabir-text text-lg">
                                {item.clientName}
                              </p>
                              <p className="text-kabir-green text-sm font-medium">
                                {item.clientRole}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Side - Project Image */}
                    <div className="flex justify-center lg:justify-end">
                      <div className="w-full max-w-lg">
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-300">
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
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-between items-center mt-12">
            {/* Previous Button */}
            <button 
              onClick={prevPortfolioSlide}
              className="flex items-center space-x-2 px-6 py-3 bg-gray-800/20 backdrop-blur-sm border border-gray-600/30 rounded-full hover:bg-gray-700/30 transition-all duration-300 shadow-lg"
            >
              <svg className="w-5 h-5 text-kabir-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="text-kabir-text font-medium">Previous</span>
            </button>

            {/* Slide Indicators */}
            <div className="flex space-x-3">
              {portfolioItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToPortfolioSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentPortfolioSlide 
                      ? 'bg-kabir-green scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button 
              onClick={nextPortfolioSlide}
              className="flex items-center space-x-2 px-6 py-3 bg-gray-800/20 backdrop-blur-sm border border-gray-600/30 rounded-full hover:bg-gray-700/30 transition-all duration-300 shadow-lg"
            >
              <span className="text-kabir-text font-medium">Next</span>
              <svg className="w-5 h-5 text-kabir-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 overflow-hidden">
        {/* Header - Centered */}
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-kabir-text mb-6">
              Client <span className="text-gradient-green">Success Stories</span>
            </h2>
            <p className="text-xl text-kabir-text-muted">
              Real results from real businesses
            </p>
          </div>
        </div>

        {/* Scrolling Testimonials - Full Width */}
        <div className="relative overflow-hidden w-full">
          <div className="flex animate-scroll-left" style={{gap: '2rem', minWidth: 'max-content'}}>
            {/* Create multiple sets for truly seamless loop */}
            {[...Array(3)].map((_, setIndex) => (
              testimonials.map((testimonial, index) => (
                <div key={`set-${setIndex}-${index}`} className="flex-shrink-0 w-80">
                  <div className="bg-gradient-to-br from-kabir-gray/90 to-kabir-darker/90 backdrop-blur-sm border border-kabir-green/30 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300 h-96 flex flex-col">
                    {/* Profile Image */}
                    <div className="flex justify-center mb-6">
                      <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-kabir-green/40">
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
                    <div className="mb-4">
                      <h3 className="font-bold text-kabir-text text-lg mb-1">{testimonial.author}</h3>
                      <p className="text-kabir-green text-sm font-medium">{testimonial.company}</p>
                    </div>

                    {/* Quote - Flexible height with overflow handling */}
                    <blockquote className="text-kabir-text-muted text-sm leading-relaxed mb-6 italic flex-grow overflow-hidden">
                      <div className="line-clamp-4">
                        "{testimonial.quote}"
                      </div>
                    </blockquote>

                    {/* Rating Stars - Fixed at bottom */}
                    <div className="flex justify-center mt-auto">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-400 mx-0.5" fill="currentColor" viewBox="0 0 20 20">
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

        {/* Call to Action - Centered */}
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mt-16">
            <p className="text-kabir-text-muted mb-6">Ready to build your dream website?</p>
            <Link to="/services" className="btn-primary glow-green inline-flex items-center space-x-2">
              <span>Start Your Project</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebsiteDevelopment;
