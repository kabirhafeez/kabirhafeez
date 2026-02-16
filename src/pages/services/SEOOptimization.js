import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PurchaseButton from '../../components/PurchaseButton';
import CalendlyButton from '../../components/CalendlyButton';
import { FaGoogle, FaSearch, FaChartLine, FaKeyboard, FaLink, FaBullseye } from 'react-icons/fa';
import { SiGoogleanalytics, SiGooglesearchconsole } from 'react-icons/si';

const SEOOptimization = () => {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPortfolioSlide, setCurrentPortfolioSlide] = useState(0);

  // Hardcoded SEO Optimization packages data
  const hardcodedPackages = [
    {
      id: 4,
      name: 'SEO Starter',
      short_description: 'Essential SEO foundation for small businesses',
      description: 'Fundamental SEO optimization package to improve your search engine rankings and online visibility.',
      price: 399,
      original_price: 499,
      duration_days: 30,
      duration_type: 'month',
      category_id: 2,
      features: [
        'Website SEO audit',
        'Keyword research (50 keywords)',
        'On-page optimization (10 pages)',
        'Meta tags optimization',
        'Google Analytics setup',
        'Google Search Console setup',
        'Basic competitor analysis',
        'Monthly ranking report',
        'Technical SEO recommendations'
      ],
      is_active: true,
      is_featured: false,
      created_at: '2024-01-01T00:00:00Z',
      updated_at: '2024-01-01T00:00:00Z'
    },
    {
      id: 5,
      name: 'SEO Growth',
      short_description: 'Comprehensive SEO strategy for sustainable growth',
      description: 'Advanced SEO package with ongoing optimization, content strategy, and performance tracking.',
      price: 799,
      original_price: 999,
      duration_days: 30,
      duration_type: 'month',
      category_id: 2,
      features: [
        'Comprehensive website audit',
        'Advanced keyword research (200+ keywords)',
        'On-page optimization (25 pages)',
        'Content strategy and planning',
        'Blog post optimization (4 posts per month)',
        'Backlink analysis and building',
        'Local SEO optimization',
        'Technical SEO implementation',
        'Competitor analysis and monitoring',
        'Bi-weekly reporting',
        'Schema markup implementation',
        'Page speed optimization'
      ],
      is_active: true,
      is_featured: true,
      created_at: '2024-01-01T00:00:00Z',
      updated_at: '2024-01-01T00:00:00Z'
    },
    {
      id: 6,
      name: 'SEO Enterprise',
      short_description: 'Advanced SEO solution for competitive markets',
      description: 'Enterprise-level SEO with comprehensive strategy, advanced analytics, and dedicated support.',
      price: 1599,
      original_price: 1999,
      duration_days: 30,
      duration_type: 'month',
      category_id: 2,
      features: [
        'Enterprise website audit',
        'Extensive keyword research (500+ keywords)',
        'Unlimited on-page optimization',
        'Advanced content strategy',
        'Content creation and marketing',
        'Advanced backlink strategy',
        'International SEO support',
        'E-commerce SEO optimization',
        'Advanced technical SEO',
        'Weekly reporting and analysis',
        'Dedicated SEO specialist',
        'SEO training and consultation',
        'Conversion rate optimization'
      ],
      is_active: true,
      is_featured: false,
      created_at: '2024-01-01T00:00:00Z',
      updated_at: '2024-01-01T00:00:00Z'
    }
  ];

  useEffect(() => {
    fetchSEOPackages();
  }, []);


  const fetchSEOPackages = () => {
    try {
      setLoading(true);
      setError('');
      
      console.log('Using hardcoded SEO Optimization packages data');
      
      // Use hardcoded data directly
      setPackages(hardcodedPackages);
      
      console.log('Found SEO Optimization packages:', hardcodedPackages);
      
      if (hardcodedPackages.length > 0) {
        setPackages(hardcodedPackages);
      } else {
        setError('No packages available for this service');
      }
    } catch (err) {
      console.error('Error fetching SEO packages:', err);
      setError('Failed to load service packages. Please try again later.');
    } finally {
      setLoading(false);
    }
  };



  const parseFeatures = (features) => {
    if (typeof features === 'string') {
      try {
        return JSON.parse(features);
      } catch {
        return features.split(',').map(f => f.trim());
      }
    }
    return features || [];
  };

  // Dynamic icon function for SEO Optimization packages
  const getPackageIcon = (packageName, features) => {
    const name = packageName.toLowerCase();
    
    // Return multiple SEO tool icons based on package tier
    if (name.includes('basic') || name.includes('starter')) {
      // Basic: Google Search + Keyword Research (2 tools)
      return (
        <div className="flex space-x-3 justify-center">
          <FaGoogle className="text-kabir-green" size={24} />
          <FaKeyboard className="text-kabir-green" size={24} />
        </div>
      );
    } else if (name.includes('standard') || name.includes('professional')) {
      // Standard/Professional: Google + Keywords + Analytics (3 tools)
      return (
        <div className="flex space-x-2 justify-center">
          <FaGoogle className="text-kabir-green" size={22} />
          <FaKeyboard className="text-kabir-green" size={22} />
          <SiGoogleanalytics className="text-kabir-green" size={22} />
        </div>
      );
    } else if (name.includes('premium') || name.includes('enterprise')) {
      // Premium/Enterprise: Full SEO toolkit (5 tools)
      return (
        <div className="flex space-x-1.5 justify-center">
          <FaGoogle className="text-kabir-green" size={20} />
          <FaKeyboard className="text-kabir-green" size={20} />
          <SiGoogleanalytics className="text-kabir-green" size={20} />
          <SiGooglesearchconsole className="text-kabir-green" size={20} />
          <FaChartLine className="text-kabir-green" size={20} />
        </div>
      );
    } else {
      // Default fallback - single SEO target icon
      return <FaBullseye className="text-kabir-green" size={32} />;
    }
  };

  const getPackageColor = (index) => {
    const colors = [
      {
        gradient: "from-kabir-green/80 to-kabir-green",
        border: "border-kabir-green/50"
      },
      {
        gradient: "from-kabir-green to-kabir-green-dark",
        border: "border-kabir-green"
      },
      {
        gradient: "from-kabir-green-dark to-kabir-darker",
        border: "border-kabir-green"
      }
    ];
    return colors[index % colors.length];
  };

  const testimonials = [
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
    }
  ];

  // Portfolio slider data
  const portfolioItems = [
    { 
      id: 1, 
      src: "/assets/truemassageseo.png", 
      alt: "True Massage Bodywork - SEO Success", 
      title: "True Massage Bodywork", 
      category: "SEO Optimization",
      description: "Implemented comprehensive SEO strategy that resulted in 300% organic traffic increase in 6 months. Focused on keyword optimization, content strategy, and technical SEO improvements to boost search rankings across all target keywords.",
      clientImage: "/assets/ayana.jpeg",
      clientName: "Ayana Truesdell",
      clientRole: "Owner, True Massage Bodywork",
      testimonial: "Our organic traffic increased by 300% in 6 months. Rankings improved across all target keywords!"
    },
    { 
      id: 2, 
      src: "/assets/upmedixseo.png", 
      alt: "Medical Specialist - SEO & Digital Marketing", 
      title: "Upmedix - Medical Practice", 
      category: "SEO & Digital Marketing",
      description: "Delivered comprehensive digital marketing solution including SEO optimization, content creation, social media management, and Google Ads campaigns. Improved search rankings and online visibility for medical practice with focus on local SEO and patient acquisition.",
      clientImage: "/assets/Hesham.jpeg",
      clientName: "Hesham Eldash",
      clientRole: "Medical Specialist",
      testimonial: "Great experience working with Kabir, His work quality is excellent, and he helped us a lot with content creation, improving our SEO rankings, and also with social media management, graphic designs and managing Google and social media ad campaigns."
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
    }, 8000); // Change slide every 8 seconds

    return () => clearInterval(portfolioInterval);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-kabir-dark flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-kabir-green mx-auto"></div>
          <p className="text-kabir-text mt-4">Loading SEO Optimization packages...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-kabir-dark flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-400 text-xl mb-4">{typeof error === 'string' ? error : (error?.message || JSON.stringify(error))}</p>
          <button 
            onClick={fetchSEOPackages}
            className="btn-primary"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

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
                  SEO <span className="text-gradient-green">Optimization</span>
                </h1>
                <p className="text-lg md:text-xl text-kabir-text-muted leading-relaxed mb-8">
                  Technical + content SEO for long-term organic growth with proven strategies that drive sustainable traffic.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 md:w-6 md:h-6 bg-kabir-green rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 md:w-4 md:h-4 text-kabir-dark" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-kabir-text">Technical SEO audits & optimization</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 md:w-6 md:h-6 bg-kabir-green rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 md:w-4 md:h-4 text-kabir-dark" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-kabir-text">Keyword research & content strategy</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 md:w-6 md:h-6 bg-kabir-green rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 md:w-4 md:h-4 text-kabir-dark" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-kabir-text">Link building & authority development</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 md:w-6 md:h-6 bg-kabir-green rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 md:w-4 md:h-4 text-kabir-dark" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-kabir-text">Performance tracking & reporting</span>
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
                src="/assets/smilestudioseo.gif"
                alt="SEO Optimization Showcase"
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
            <span className="text-kabir-green text-sm font-semibold uppercase tracking-wider">SEO Packages</span>
            <h2 className="text-4xl md:text-5xl font-black text-kabir-text mt-4 mb-6">
              Choose Your <span className="text-gradient-green">SEO Strategy</span>
            </h2>
            <p className="text-xl text-kabir-text-muted max-w-3xl mx-auto">
              Professional SEO packages designed to boost your organic search rankings
            </p>
          </div>

          {packages.length > 0 ? (
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
                        
                        {/* Dynamic SEO Tool Icons */}
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
                No SEO packages available yet
              </h3>
              <p className="text-kabir-text-muted mb-8">
                We're working on adding SEO optimization packages. Check back soon!
              </p>
              <Link to="/services" className="btn-primary">
                View All Services
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Portfolio/Past Work Section */}
      <section className="py-8 md:py-20 overflow-hidden relative">
        {/* Full-width background with low opacity */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
        <div className="relative z-10">
        <div className="relative max-w-7xl mx-auto px-4 md:px-6">
          <div className="relative overflow-hidden">
            <div className="flex transition-transform duration-700 ease-in-out"
                 style={{ transform: `translateX(-${currentPortfolioSlide * 100}%)` }}>
              {portfolioItems.map((item, index) => (
                <div key={item.id} className="min-w-full">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-center">
                    {/* Left Side - Project Details */}
                    <div className="space-y-4 md:space-y-8">
                      {/* Project Header */}
                      <div>
                        <span className="inline-block px-3 py-1 md:px-4 md:py-2 bg-kabir-green/10 text-kabir-green text-xs md:text-sm font-semibold rounded-full mb-2 md:mb-4">
                          {item.category}
                        </span>
                        <h3 className="font-bold text-kabir-text text-2xl md:text-4xl mb-3 md:mb-6">
                          {item.title}
                        </h3>
                        <p className="text-gray-300 text-sm md:text-lg leading-relaxed">
                          {item.description}
                        </p>
                      </div>

                      {/* Client Testimonial */}
                      <div className="bg-gray-800/10 backdrop-blur-sm p-4 md:p-8 rounded-xl md:rounded-2xl shadow-lg border border-gray-600/20">
                        <div className="flex items-start space-x-3 md:space-x-4">
                          <div className="flex-shrink-0">
                            <img 
                              src={item.clientImage}
                              alt={item.clientName}
                              className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover"
                            />
                          </div>
                          <div className="flex-1">
                            {/* 5-Star Rating */}
                            <div className="flex items-center mb-2 md:mb-3">
                              {[...Array(5)].map((_, i) => (
                                <svg key={i} className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                </svg>
                              ))}
                            </div>
                            <p className="text-gray-200 italic mb-3 md:mb-4 text-sm md:text-lg leading-relaxed">
                              "{item.testimonial}"
                            </p>
                            <div>
                              <p className="font-semibold text-kabir-text text-sm md:text-lg">
                                {item.clientName}
                              </p>
                              <p className="text-kabir-green text-xs md:text-sm font-medium">
                                {item.clientRole}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Side - Project Image */}
                    <div className="flex justify-center lg:justify-end mt-4 lg:mt-0">
                      <div className="w-3/4 max-w-xs md:w-full md:max-w-lg">
                        <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-300">
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
          <div className="flex justify-between items-center mt-6 md:mt-12">
            {/* Previous Button */}
            <button 
              onClick={prevPortfolioSlide}
              className="flex items-center space-x-1 md:space-x-2 px-3 py-2 md:px-6 md:py-3 bg-gray-800/20 backdrop-blur-sm border border-gray-600/30 rounded-full hover:bg-gray-700/30 transition-all duration-300 shadow-lg"
            >
              <svg className="w-4 h-4 md:w-5 md:h-5 text-kabir-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="text-kabir-text font-medium text-sm md:text-base">Previous</span>
            </button>

            {/* Slide Indicators */}
            <div className="flex space-x-2 md:space-x-3">
              {portfolioItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToPortfolioSlide(index)}
                  className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
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
              className="flex items-center space-x-1 md:space-x-2 px-3 py-2 md:px-6 md:py-3 bg-gray-800/20 backdrop-blur-sm border border-gray-600/30 rounded-full hover:bg-gray-700/30 transition-all duration-300 shadow-lg"
            >
              <span className="text-kabir-text font-medium text-sm md:text-base">Next</span>
              <svg className="w-4 h-4 md:w-5 md:h-5 text-kabir-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
        </div>
      </section>
    </div>
  );
};

export default SEOOptimization;
