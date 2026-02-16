import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PurchaseButton from '../../components/PurchaseButton';
import CalendlyButton from '../../components/CalendlyButton';
import { FaGoogle, FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn, FaBullhorn } from 'react-icons/fa';

const MetaGoogleAds = () => {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Hardcoded Meta Google Ads packages data
  const hardcodedPackages = [
    {
      id: 7,
      name: 'Ads Starter',
      short_description: 'Launch your advertising campaigns effectively',
      description: 'Essential advertising package to get your ads running and generating initial results.',
      price: 499,
      original_price: 699,
      duration_days: 30,
      duration_type: 'month',
      category_id: 3,
      features: [
        'Campaign setup and configuration',
        'Basic audience research',
        '2 Ad campaigns (Google + Meta)',
        'Ad copy creation',
        'Basic landing page optimization',
        'Conversion tracking setup',
        'Weekly performance reports',
        'Budget management (up to $1000 ad spend)',
        'A/B testing (basic)',
        'Campaign optimization'
      ],
      is_active: true,
      is_featured: false,
      created_at: '2024-01-01T00:00:00Z',
      updated_at: '2024-01-01T00:00:00Z'
    },
    {
      id: 8,
      name: 'Ads Growth',
      short_description: 'Scale your advertising with advanced strategies',
      description: 'Comprehensive advertising package with advanced targeting, optimization, and scaling strategies.',
      price: 999,
      original_price: 1299,
      duration_days: 30,
      duration_type: 'month',
      category_id: 3,
      features: [
        'Advanced campaign strategy',
        'Detailed audience research and segmentation',
        '4 Ad campaigns (Google, Meta, LinkedIn, Twitter)',
        'Advanced ad copy and creative development',
        'Landing page optimization and testing',
        'Advanced conversion tracking',
        'Retargeting campaigns',
        'Lookalike audience targeting',
        'Bi-weekly performance reports',
        'Budget management (up to $3000 ad spend)',
        'Advanced A/B testing',
        'Competitor ad analysis',
        'Seasonal campaign planning'
      ],
      is_active: true,
      is_featured: true,
      created_at: '2024-01-01T00:00:00Z',
      updated_at: '2024-01-01T00:00:00Z'
    },
    {
      id: 9,
      name: 'Ads Enterprise',
      short_description: 'Full-service advertising management for maximum ROI',
      description: 'Enterprise advertising solution with comprehensive management across all platforms and advanced analytics.',
      price: 1999,
      original_price: 2499,
      duration_days: 30,
      duration_type: 'month',
      category_id: 3,
      features: [
        'Enterprise advertising strategy',
        'Comprehensive market research',
        'Unlimited ad campaigns across all platforms',
        'Creative production and video ads',
        'Advanced landing page development',
        'Multi-touch attribution tracking',
        'Advanced retargeting and segmentation',
        'Custom audience development',
        'Weekly detailed reporting',
        'Budget management (unlimited ad spend)',
        'Advanced testing and optimization',
        'Cross-platform integration',
        'Dedicated ads manager',
        'Advertising automation',
        'ROI optimization and forecasting'
      ],
      is_active: true,
      is_featured: false,
      created_at: '2024-01-01T00:00:00Z',
      updated_at: '2024-01-01T00:00:00Z'
    }
  ];

  useEffect(() => {
    fetchMetaGoogleAdsPackages();
  }, []);


  const fetchMetaGoogleAdsPackages = () => {
    try {
      setLoading(true);
      setError('');
      
      console.log('Using hardcoded Meta Google Ads packages data');
      
      // Use hardcoded data directly
      setPackages(hardcodedPackages);
      
      console.log('Found Meta Google Ads packages:', hardcodedPackages);
      
      if (hardcodedPackages.length > 0) {
        setPackages(hardcodedPackages);
      } else {
        setError('No packages available for this service');
      }
    } catch (err) {
      console.error('Error fetching Meta & Google Ads packages:', err);
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

  // Dynamic icon function for Meta Google Ads packages
  const getPackageIcon = (packageName, features) => {
    const name = packageName.toLowerCase();
    
    // Return multiple advertising platform icons based on package tier
    if (name.includes('basic') || name.includes('starter')) {
      // Basic: Google + Facebook (2 platforms)
      return (
        <div className="flex space-x-3 justify-center">
          <FaGoogle className="text-kabir-green" size={24} />
          <FaFacebookF className="text-kabir-green" size={24} />
        </div>
      );
    } else if (name.includes('standard') || name.includes('professional')) {
      // Standard/Professional: Google + Facebook + Instagram (3 platforms)
      return (
        <div className="flex space-x-2 justify-center">
          <FaGoogle className="text-kabir-green" size={22} />
          <FaFacebookF className="text-kabir-green" size={22} />
          <FaInstagram className="text-kabir-green" size={22} />
        </div>
      );
    } else if (name.includes('premium') || name.includes('enterprise')) {
      // Premium/Enterprise: Google + Facebook + Instagram + YouTube + LinkedIn (5 platforms)
      return (
        <div className="flex space-x-1.5 justify-center">
          <FaGoogle className="text-kabir-green" size={20} />
          <FaFacebookF className="text-kabir-green" size={20} />
          <FaInstagram className="text-kabir-green" size={20} />
          <FaYoutube className="text-kabir-green" size={20} />
          <FaLinkedinIn className="text-kabir-green" size={20} />
        </div>
      );
    } else {
      // Default fallback - single advertising icon
      return <FaBullhorn className="text-kabir-green" size={32} />;
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
    }
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-kabir-dark flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-kabir-green mx-auto"></div>
          <p className="text-kabir-text mt-4">Loading Meta & Google Ads packages...</p>
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
            onClick={fetchMetaGoogleAdsPackages}
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
                  Meta & <span className="text-gradient-green">Google Ads</span>
                </h1>
                <p className="text-lg md:text-xl text-kabir-text-muted leading-relaxed mb-8">
                  Ad campaigns built for ROI — lead generation, retargeting, and scaling with data-driven strategies that deliver results.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 md:w-6 md:h-6 bg-kabir-green rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 md:w-4 md:h-4 text-kabir-dark" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-kabir-text">Google Ads & Facebook Ads management</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 md:w-6 md:h-6 bg-kabir-green rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 md:w-4 md:h-4 text-kabir-dark" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-kabir-text">Advanced targeting & audience segmentation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 md:w-6 md:h-6 bg-kabir-green rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 md:w-4 md:h-4 text-kabir-dark" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-kabir-text">Conversion tracking & optimization</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 md:w-6 md:h-6 bg-kabir-green rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 md:w-4 md:h-4 text-kabir-dark" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-kabir-text">ROI-focused campaign strategies</span>
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
                src="/assets/ads.gif"
                alt="Meta & Google Ads Showcase"
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
            <span className="text-kabir-green text-sm font-semibold uppercase tracking-wider">Advertising Packages</span>
            <h2 className="text-4xl md:text-5xl font-black text-kabir-text mt-4 mb-6">
              Choose Your <span className="text-gradient-green">Ad Strategy</span>
            </h2>
            <p className="text-xl text-kabir-text-muted max-w-3xl mx-auto">
              Professional advertising packages designed to maximize your return on ad spend
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
                        
                        {/* Dynamic Ads Platform Icons */}
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
                No advertising packages available yet
              </h3>
              <p className="text-kabir-text-muted mb-8">
                We're working on adding Meta & Google Ads packages. Check back soon!
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
            <p className="text-kabir-text-muted mb-6">Ready to scale your advertising?</p>
            <Link to="/services" className="btn-primary glow-green inline-flex items-center space-x-2">
              <span>Start Your Campaign</span>
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

export default MetaGoogleAds;
