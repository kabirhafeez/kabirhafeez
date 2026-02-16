import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PurchaseButton from '../../components/PurchaseButton';
import CalendlyButton from '../../components/CalendlyButton';
import { FaRobot, FaBrain, FaCogs, FaLightbulb, FaChartLine, FaCode } from 'react-icons/fa';
import { SiOpenai, SiTensorflow } from 'react-icons/si';

const AIAutomations = () => {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Hardcoded AI & Automations packages data
  const hardcodedPackages = [
    {
      id: 16,
      name: 'AI Starter',
      short_description: 'Introduction to AI and basic automation',
      description: 'Get started with AI tools and basic automation to improve efficiency and productivity.',
      price: 399,
      original_price: 599,
      duration_days: 30,
      duration_type: 'setup',
      category_id: 6,
      features: [
        'AI opportunity assessment',
        'Basic automation setup (3 workflows)',
        'AI tool recommendations',
        'Chatbot integration (basic)',
        'Email automation setup',
        'Social media scheduling automation',
        'Data collection automation',
        'Basic reporting automation',
        'Team training session',
        'Documentation and guides',
        '30-day support'
      ],
      is_active: true,
      is_featured: false,
      created_at: '2024-01-01T00:00:00Z',
      updated_at: '2024-01-01T00:00:00Z'
    },
    {
      id: 17,
      name: 'AI Growth',
      short_description: 'Advanced AI solutions and workflow automation',
      description: 'Comprehensive AI implementation with advanced automation and custom workflow development.',
      price: 999,
      original_price: 1399,
      duration_days: 45,
      duration_type: 'implementation',
      category_id: 6,
      features: [
        'Advanced AI strategy development',
        'Custom workflow automation (10+ workflows)',
        'AI model integration',
        'Advanced chatbot development',
        'CRM automation setup',
        'Marketing automation implementation',
        'Sales process automation',
        'Customer service automation',
        'Data analysis and insights automation',
        'Custom dashboard development',
        'API integration and development',
        'Team training and documentation',
        'Performance monitoring setup',
        '60-day support and optimization'
      ],
      is_active: true,
      is_featured: true,
      created_at: '2024-01-01T00:00:00Z',
      updated_at: '2024-01-01T00:00:00Z'
    },
    {
      id: 18,
      name: 'AI Enterprise',
      short_description: 'Complete AI transformation and automation',
      description: 'Enterprise-level AI implementation with custom solutions, advanced automation, and comprehensive support.',
      price: 2999,
      original_price: 3999,
      duration_days: 90,
      duration_type: 'transformation',
      category_id: 6,
      features: [
        'Enterprise AI transformation strategy',
        'Custom AI solution development',
        'Advanced automation architecture',
        'Machine learning model development',
        'Predictive analytics implementation',
        'Business process automation',
        'Advanced AI chatbot and voice assistant',
        'Custom AI tool development',
        'Data pipeline automation',
        'Advanced security implementation',
        'Custom AI dashboard and analytics',
        'API development and integration',
        'Team training and certification',
        'Change management support',
        'Continuous optimization and updates',
        '90-day premium support',
        'AI governance framework'
      ],
      is_active: true,
      is_featured: false,
      created_at: '2024-01-01T00:00:00Z',
      updated_at: '2024-01-01T00:00:00Z'
    }
  ];

  // AI & Automations category ID from local data
  const CATEGORY_ID = 6;


  useEffect(() => {
    const fetchPackages = () => {
      try {
        setLoading(true);
        
        // Use hardcoded data directly
        const packagesData = hardcodedPackages;
        
        console.log('AI Automations hardcoded data response:', packagesData);
        
        if (packagesData && packagesData.length > 0) {
          setPackages(packagesData);
          console.log('AI Automations packages loaded:', packagesData.length);
        } else {
          console.log('No packages found for AI Automations');
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

  // Dynamic icon function for AI Automations packages
  const getPackageIcon = (packageName, features) => {
    const name = packageName.toLowerCase();
    
    // Return multiple AI/automation icons based on package tier
    if (name.includes('basic') || name.includes('starter')) {
      // Basic: Robot + Cogs (2 concepts)
      return (
        <div className="flex space-x-3 justify-center">
          <FaRobot className="text-kabir-green" size={24} />
          <FaCogs className="text-kabir-green" size={24} />
        </div>
      );
    } else if (name.includes('standard') || name.includes('professional')) {
      // Standard/Professional: Robot + Brain + OpenAI (3 concepts)
      return (
        <div className="flex space-x-2 justify-center">
          <FaRobot className="text-kabir-green" size={22} />
          <FaBrain className="text-kabir-green" size={22} />
          <SiOpenai className="text-kabir-green" size={22} />
        </div>
      );
    } else if (name.includes('premium') || name.includes('enterprise') || name.includes('advanced')) {
      // Premium/Enterprise/Advanced: Full AI toolkit (5 concepts)
      return (
        <div className="flex space-x-1.5 justify-center">
          <FaRobot className="text-kabir-green" size={20} />
          <FaBrain className="text-kabir-green" size={20} />
          <SiOpenai className="text-kabir-green" size={20} />
          <SiTensorflow className="text-kabir-green" size={20} />
          <FaChartLine className="text-kabir-green" size={20} />
        </div>
      );
    } else {
      // Default fallback - single robot icon
      return <FaRobot className="text-kabir-green" size={32} />;
    }
  };

  const testimonials = [
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
  ];

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
                  AI & <span className="text-gradient-green">Automation</span> Solutions
                </h1>
                <p className="text-lg md:text-xl text-kabir-text-muted leading-relaxed mb-8">
                  Transform your business with intelligent automation, custom AI solutions, and workflow optimization that saves time and increases productivity.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 md:w-6 md:h-6 bg-kabir-green rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 md:w-4 md:h-4 text-kabir-dark" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-kabir-text">Custom AI chatbots & virtual assistants</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 md:w-6 md:h-6 bg-kabir-green rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 md:w-4 md:h-4 text-kabir-dark" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-kabir-text">Workflow automation & integration</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 md:w-6 md:h-6 bg-kabir-green rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 md:w-4 md:h-4 text-kabir-dark" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-kabir-text">Machine learning & data analysis</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 md:w-6 md:h-6 bg-kabir-green rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 md:w-4 md:h-4 text-kabir-dark" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-kabir-text">API development & system integration</span>
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
                src="/assets/whitelogo.png"
                alt="AI & Automation Showcase"
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
            <span className="text-kabir-green text-sm font-semibold uppercase tracking-wider">AI Automation Packages</span>
            <h2 className="text-4xl md:text-5xl font-black text-kabir-text mt-4 mb-6">
              Choose Your <span className="text-gradient-green">AI Solution</span>
            </h2>
            <p className="text-xl text-kabir-text-muted max-w-3xl mx-auto">
              Professional AI automation packages designed to transform your business operations
            </p>
          </div>

          {loading ? (
            <div className="text-center py-16">
              <div className="text-6xl mb-6">⚡</div>
              <h3 className="text-2xl font-bold text-kabir-text mb-4">
                Loading AI Automation packages...
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
                        
                        {/* Dynamic AI Automation Icons */}
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
                No AI Automation packages available yet
              </h3>
              <p className="text-kabir-text-muted mb-8">
                We're working on adding AI automation packages. Check back soon!
              </p>
              <Link to="/services" className="btn-primary">
                View All Services
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-kabir-darker/50">
        {/* Header - Centered */}
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-kabir-green text-sm font-semibold uppercase tracking-wider">Client Success Stories</span>
            <h2 className="text-4xl md:text-5xl font-black text-kabir-text mt-4 mb-6">
              What Our <span className="text-gradient-green">Clients Say</span>
            </h2>
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
            <p className="text-kabir-text-muted mb-6">Ready to automate your business?</p>
            <Link to="/services" className="btn-primary glow-green inline-flex items-center space-x-2">
              <span>Start Your AI Journey</span>
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

export default AIAutomations;
