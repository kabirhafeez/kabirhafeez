import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CalendlyButton from '../../components/CalendlyButton';
import { 
  FaFacebookF, 
  FaInstagram, 
  FaLinkedinIn,
  FaTiktok,
  FaYoutube,
  FaBullhorn
} from 'react-icons/fa';

const SocialMediaManagement = () => {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentGifSlide, setCurrentGifSlide] = useState(0);
  const [currentPortfolioSlide, setCurrentPortfolioSlide] = useState(0);
  const [currentAnalyticsSlide, setCurrentAnalyticsSlide] = useState(0);

  // Hardcoded Social Media Management packages data
  const hardcodedPackages = [
    {
      id: 1,
      name: 'Starter Social',
      short_description: 'Perfect for small businesses getting started with social media',
      description: 'Essential social media management package designed to establish your online presence and engage with your audience effectively.',
      price: 299,
      original_price: 399,
      duration_days: 30,
      duration_type: 'month',
      category_id: 1,
      features: [
        '3 Social Media Platforms (Facebook, Instagram, Twitter)',
        '12 Posts per month (4 per platform)',
        'Basic content creation and scheduling',
        'Community management and monitoring',
        'Monthly performance report',
        'Basic hashtag research',
        'Image and graphic design (2 revisions per post)'
      ],
      is_active: true,
      is_featured: false,
      created_at: '2024-01-01T00:00:00Z',
      updated_at: '2024-01-01T00:00:00Z'
    },
    {
      id: 2,
      name: 'Growth Social',
      short_description: 'Accelerate your social media presence with comprehensive management',
      description: 'Advanced social media management package focused on growth, engagement, and brand building across multiple platforms.',
      price: 599,
      original_price: 799,
      duration_days: 30,
      duration_type: 'month',
      category_id: 1,
      features: [
        '5 Social Media Platforms',
        '24 Posts per month',
        'Advanced content strategy and planning',
        'Influencer outreach and collaboration',
        'Social media advertising management',
        'Weekly analytics and insights',
        'Video content creation (2 videos per month)',
        'Story and reel creation',
        'Competitor analysis',
        'Crisis management support'
      ],
      is_active: true,
      is_featured: true,
      created_at: '2024-01-01T00:00:00Z',
      updated_at: '2024-01-01T00:00:00Z'
    },
    {
      id: 3,
      name: 'Enterprise Social',
      short_description: 'Complete social media solution for large businesses',
      description: 'Full-service social media management with dedicated team, advanced analytics, and comprehensive strategy.',
      price: 1299,
      original_price: 1599,
      duration_days: 30,
      duration_type: 'month',
      category_id: 1,
      features: [
        '8+ Social Media Platforms',
        '40+ Posts per month',
        'Dedicated social media manager',
        'Advanced social listening and monitoring',
        'Comprehensive content calendar',
        'Paid social media campaign management',
        'Influencer marketing program',
        'Social media audit and strategy',
        'Monthly strategy calls',
        'Custom reporting dashboard',
        'Crisis management and PR support',
        'Social media training for team'
      ],
      is_active: true,
      is_featured: false,
      created_at: '2024-01-01T00:00:00Z',
      updated_at: '2024-01-01T00:00:00Z'
    }
  ];

  // Analytics data - moved here to be available for useEffect
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

  useEffect(() => {
    fetchPackages();
  }, []);

  const fetchPackages = () => {
    try {
      setLoading(true);
      setError('');
      
      console.log('Using hardcoded Social Media Management packages data');
      
      // Use hardcoded data directly
      setPackages(hardcodedPackages);
      
      console.log('Found Social Media Management packages:', hardcodedPackages);
      
      if (hardcodedPackages.length > 0) {
        console.log('Packages loaded successfully');
      } else {
        setError('No packages available for this service');
      }
    } catch (err) {
      console.error('Error fetching social media packages:', err);
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

  const getPackageIcon = (packageName, features) => {
    const name = packageName.toLowerCase();
    
    // Return multiple social media icons based on package tier
    if (name.includes('basic') || name.includes('starter')) {
      // Basic: Instagram + Facebook (2 platforms)
      return (
        <div className="flex space-x-3 justify-center">
          <FaInstagram className="text-kabir-green" size={24} />
          <FaFacebookF className="text-kabir-green" size={24} />
        </div>
      );
    } else if (name.includes('standard')) {
      // Standard: Instagram + Facebook + TikTok (3 platforms)
      return (
        <div className="flex space-x-2 justify-center">
          <FaInstagram className="text-kabir-green" size={22} />
          <FaFacebookF className="text-kabir-green" size={22} />
          <FaTiktok className="text-kabir-green" size={22} />
        </div>
      );
    } else if (name.includes('professional') || name.includes('premium')) {
      // Professional/Premium: Instagram + Facebook + TikTok + LinkedIn + YouTube (5 platforms)
      return (
        <div className="flex space-x-1.5 justify-center">
          <FaInstagram className="text-kabir-green" size={20} />
          <FaFacebookF className="text-kabir-green" size={20} />
          <FaTiktok className="text-kabir-green" size={20} />
          <FaLinkedinIn className="text-kabir-green" size={20} />
          <FaYoutube className="text-kabir-green" size={20} />
        </div>
      );
    } else {
      // Default fallback - single social media icon
      return <FaBullhorn className="text-kabir-green" size={32} />;
    }
  };

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


  // Social Media GIF slider data
  const heroGifs = [
    {
      id: 1,
      src: "/assets/beforeafterseptic.gif",
      alt: "Before After Septic - Digital Growth Results"
    },
    {
      id: 2,
      src: "/assets/justenjoybaligif.gif", 
      alt: "Enjoy Bali - Social Media Management"
    },
    {
      id: 3,
      src: "/assets/canarygif.gif", 
      alt: "Canary B - Shopify Store"
    },
    {
      id: 4,
      src: "/assets/libertygif.gif", 
      alt: "Liberty Tuition - Social Media Management"
    },
    {
      id: 5,
      src: "/assets/justenjoybaligif.gif", 
      alt: "Enjoy Bali - Social Media Management"
    }
  ];

  // GIF slider navigation functions
  const nextGifSlide = () => {
    setCurrentGifSlide((prev) => (prev + 1) % heroGifs.length);
  };

  const prevGifSlide = () => {
    setCurrentGifSlide((prev) => (prev - 1 + heroGifs.length) % heroGifs.length);
  };

  const goToGifSlide = (index) => {
    setCurrentGifSlide(index);
  };

  // Auto-advance GIF slider
  useEffect(() => {
    const gifInterval = setInterval(() => {
      nextGifSlide();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(gifInterval);
  }, [nextGifSlide]);

  // Auto-advance portfolio slider
  useEffect(() => {
    const portfolioInterval = setInterval(() => {
      nextPortfolioSlide();
    }, 10000); // Change slide every 10 seconds

    return () => clearInterval(portfolioInterval);
  }, [nextPortfolioSlide]);

  // Auto-advance analytics slider
  useEffect(() => {
    const analyticsInterval = setInterval(() => {
      setCurrentAnalyticsSlide((prev) => (prev + 1) % analyticsData.length);
    }, 5000);
    return () => clearInterval(analyticsInterval);
  }, [analyticsData.length]);

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

      // Portfolio slider data
      const portfolioItems = [
        { 
          id: 1, 
          src: "/assets/caygadgets.png", 
          alt: "Cay Gadgets - E-commerce Store", 
          title: "Cay Gadgets - E-commerce Store", 
          category: "Video Creation & SEO",
          description: "I worked with Henrik Butz to elevate the CAY Gadgets brand through a mix of SEO strategy, engaging product video creation, and visual branding refinement. The focus was on showcasing the uniqueness of each gadget while driving traffic, improving search visibility, and creating a clean, tech-forward identity that resonates with the modern consumer.",
          clientImage: "/assets/cay.png",
          clientName: "Henrik Butz",
          clientRole: "Founder of CAY Gadgets",
          testimonial: "Kabir has been an incredible asset to CAY Gadgets. From sharpening our brand identity to creating high-quality product videos and optimizing our site for SEO, his work has added real value to our online presence."
        },
        { 
          id: 2, 
          src: "/assets/jetlifee.png", 
          alt: "Instagram Growth - Business Owner", 
          title: "Jetlifee Flags", 
          category: "Social Media & Branding",
          description: "I partnered with Jet to build the JetLifee brand from the ground up, delivering a full e-commerce solution with a sleek, user-friendly website, impactful branding, and a cohesive social media presence. The goal was to create a bold, lifestyle-driven identity while ensuring seamless product browsing, purchasing, and audience engagement across all platforms.",
          clientImage: "/assets/jetli.jpg",
          clientName: "Jet",
          clientRole: "Founder of JetLifee",
          testimonial: "He gave JetLifee a modern brand identity, a clean and functional e-commerce website, and a strong social media presence. Kabir handled everything with professionalism, creativity, and a clear understanding of what the brand needed. I couldn’t be happier with the results."
        },
        { 
          id: 3, 
          src: "/assets/septic.png", 
          alt: "Social Media Management - Septic Services", 
          title: "Advanced Septic Services", 
          category: "Social Media Management",
          description: "I partnered with Advanced Septic Services to strengthen their brand presence through targeted social media design and paid advertising. The focus was on creating clear, engaging visuals tailored to their local audience, along with strategic ad content aimed at generating service inquiries and building trust in a competitive space.",
          clientImage: "/assets/dave.png",
          clientName: "Dave Moorehouse",
          clientRole: "Business Owner",
          testimonial: "His creative approach helped us build a stronger online presence and communicate our services more clearly. Professional, reliable, and easy to work with, I’d definitely recommend him."
        },
        { 
          id: 5, 
          src: "/assets/katcruz.png", 
          alt: "Social Media Management - Book Author", 
          title: "Books By Katcruz", 
          category: "Social Media Management",
          description: "Professionally managed social media presence for a book author with patient, informative, and knowledgeable approach. Delivered comprehensive social media services with expertise and professionalism.",
          clientImage: "/assets/katrina.jpeg",
          clientName: "Katrina Nyby",
          clientRole: "Children’s book author",
          testimonial: "Kabir professionally managed my social media. He was patient, informative and knowledgeable in his field. I would recommend him to anyone who would need the same services."
        },
        { 
          id: 6, 
          src: "/assets/cargosavvy.png", 
          alt: "Cargosavvy - Business Solutions", 
          title: "Cargosavvy Solutions", 
          category: "Business Consulting",
          description: "Provided clear solutions and professional guidance with excellent organization skills. Delivered well-planned and organized work that was easier to execute, resulting in great success for the client.",
          clientImage: "/assets/shree.png",
          clientName: "Sreekanth Menon",
          clientRole: "CEO, Cargosavvy",
          testimonial: "Kabir is a very professional guy with clear solutions for our needs. He is very active and have excellent organization skills. His works are very well planned and organized and easier to execute . We have great success working with Kabir"
        }
      ];

  if (loading) {
    return (
      <div className="min-h-screen bg-kabir-dark flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-kabir-green mx-auto"></div>
          <p className="text-kabir-text mt-4">Loading Social Media Management packages...</p>
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
            onClick={fetchPackages}
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
                  Social Media <span className="text-gradient-green">Management</span>
                </h1>
                <p className="text-lg md:text-xl text-kabir-text-muted leading-relaxed mb-8">
                  Grow your brand's online presence with comprehensive social media strategies that drive engagement, build communities, and deliver measurable results.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 md:w-6 md:h-6 bg-kabir-green rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 md:w-4 md:h-4 text-kabir-dark" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-kabir-text">Content creation & curation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 md:w-6 md:h-6 bg-kabir-green rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 md:w-4 md:h-4 text-kabir-dark" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-kabir-text">Community management & engagement</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 md:w-6 md:h-6 bg-kabir-green rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 md:w-4 md:h-4 text-kabir-dark" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-kabir-text">Analytics & performance tracking</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 md:w-6 md:h-6 bg-kabir-green rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 md:w-4 md:h-4 text-kabir-dark" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-kabir-text">Multi-platform strategy & execution</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                
              <CalendlyButton 
                          className="bg-gradient-to-r from-kabir-green to-green-400 hover:from-green-400 hover:to-kabir-green text-kabir-dark shadow-lg hover:shadow-xl glow-green"
                          buttonText="Book Free Consultation"
                        />
              </div>
            </div>
            
            {/* Right Content - GIF Slider */}
            <div className="relative mt-8 lg:mt-0 hidden lg:block">
              <div className="relative overflow-hidden rounded-2xl">
                {/* GIF Container */}
                <div className="relative">
                  <img 
                    src={heroGifs[currentGifSlide].src}
                    alt={heroGifs[currentGifSlide].alt}
                    className="w-full h-auto rounded-2xl transition-opacity duration-500"
                  />
                </div>
                
                {/* Slide Indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                  {heroGifs.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToGifSlide(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentGifSlide
                          ? 'bg-kabir-green scale-125 shadow-lg shadow-kabir-green/50'
                          : 'bg-white/50 hover:bg-white/80'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

       {/* Analytics Showcase Section */}
       <section className="py-12 md:py-16 px-4 md:px-6 bg-kabir-darker/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-6 md:mb-10">
            <div className="inline-flex items-center space-x-2 bg-kabir-green/10 px-3 py-1 md:px-4 md:py-2 rounded-full border border-kabir-green/20 mb-4 md:mb-6">
              <div className="w-2 h-2 bg-kabir-green rounded-full animate-pulse"></div>
              <span className="text-kabir-green text-xs md:text-sm font-semibold uppercase tracking-wider">Proven Results</span>
            </div>
            <h2 className="text-xl md:text-3xl lg:text-4xl font-black text-kabir-text mb-3 md:mb-4">
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
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 items-center">
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
                  >
                  </button>
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

      {/* Packages Section */}
      <section id="packages" className="py-20 px-6 bg-kabir-darker/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-kabir-text mb-6">
              Choose Your <span className="text-gradient-green">Package</span>
            </h2>
            <p className="text-xl text-kabir-text-muted max-w-3xl mx-auto">
              From startups to enterprises, we have the perfect social media management solution for your business needs.
            </p>
          </div>

          {packages.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {packages
                .sort((a, b) => {
                  // Sort by price (ascending) so Basic ($120) comes first, then Standard ($210), then Professional ($300)
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
                        
                        {/* Dynamic Package Icon */}
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
                No packages available yet
              </h3>
              <p className="text-kabir-text-muted mb-8">
                We're working on adding social media management packages. Check back soon!
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

      {/* Call to Action Section */}
      <section className="py-12 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-kabir-text mb-4">
            Ready to grow your social media presence?
          </h3>
          <CalendlyButton 
            className="bg-gradient-to-r from-kabir-green to-green-400 hover:from-green-400 hover:to-kabir-green text-kabir-dark shadow-lg hover:shadow-xl glow-green"
            buttonText="Book Free Consultation"
          />
        </div>
      </section>

    </div>
  );
};

export default SocialMediaManagement;
