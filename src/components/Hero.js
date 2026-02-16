import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CalendlyPopup from './CalendlyPopup';

// CSS for yellow glow animation
const glowStyles = `
  @keyframes yellowGlow {
    0% {
      box-shadow: 0 0 8px rgba(255, 255, 0, 0.3), 0 0 16px rgba(255, 255, 0, 0.2), 0 0 24px rgba(255, 255, 0, 0.1);
    }
    100% {
      box-shadow: 0 0 12px rgba(255, 255, 0, 0.4), 0 0 20px rgba(255, 255, 0, 0.3), 0 0 32px rgba(255, 255, 0, 0.2);
    }
  }
  
  .yellow-glow-button {
    animation: yellowGlow 2s ease-in-out infinite alternate;
    background-color: transparent !important;
    border: 2px solid #00ff88 !important;
    color: #00ff88 !important;
  }
  
  .yellow-glow-button:hover {
    box-shadow: 0 0 16px rgba(255, 255, 0, 0.5), 0 0 24px rgba(255, 255, 0, 0.4), 0 0 40px rgba(255, 255, 0, 0.3) !important;
    background-color: rgba(0, 255, 136, 0.1) !important;
  }
`;

// Clean Scrolling Logos Component
const ScrollingLogos = () => {
  // Array of logo objects - easily expandable for future additions
  const logos = [
    {
      id: 1,
      name: 'Upwork',
      src: '/assets/upwork logo.png',
      alt: 'Upwork Logo'
    },
    {
      id: 2,
      name: 'PeoplePerHour',
      src: '/assets/peopleperhourlogo.png',
      alt: 'PeoplePerHour Logo'
    },
    {
      id: 3,
      name: 'Fiverr',
      src: '/assets/fiverrlogo.png',
      alt: 'Fiverr Logo'
    }, 
    {
      id: 4,
      name: 'Freelancer',
      src: '/assets/freelancerlogo.png',
      alt: 'Freelancer Logo'
    }
    // Add more logos here in the future
  ];

  // Create enough duplicates for seamless infinite scrolling
  const extendedLogos = [...logos, ...logos, ...logos, ...logos, ...logos];

  return (
    <div className="w-full overflow-hidden">
      <div className="flex animate-scroll-seamless items-center" style={{animationDuration: '5s'}}>
        {extendedLogos.map((logo, index) => (
          <div
            key={`${logo.id}-${index}`}
            className="flex-shrink-0 flex items-center justify-center px-8"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="h-40 w-auto object-contain opacity-40 hover:opacity-80 transition-opacity duration-300 filter grayscale"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const Hero = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [videoRef, setVideoRef] = useState(null);
  const [currentGifSlide, setCurrentGifSlide] = useState(0);
  const [currentPortfolioSlide, setCurrentPortfolioSlide] = useState(0);
  const [currentAnalyticsSlide, setCurrentAnalyticsSlide] = useState(0);
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  // Video control functions
  const handlePlayPause = () => {
    if (videoRef) {
      if (isVideoPlaying) {
        videoRef.pause();
      } else {
        videoRef.play();
      }
    }
  };

  const handleVideoRef = (ref) => {
    setVideoRef(ref);
  };

  const handleBookConsultation = () => {
    setIsCalendlyOpen(true);
  };

  const handleCloseCalendly = () => {
    setIsCalendlyOpen(false);
  };

  // Analytics data
  const analyticsData = [
    {
      id: 1,
      image: "/assets/analytics1.png",
      metrics: ["300% Follower Growth", "450% Engagement Rate", "2.5M+ Impressions"]
    },
    {
      id: 2,
      image: "/assets/analytics2.png",
      metrics: ["180% Conversion Rate", "65% Cart Recovery", "$50K+ Revenue"]
    },
    {
      id: 3,
      image: "/assets/analytics3.png",
      metrics: ["400% Organic Traffic", "Top 3 Rankings", "85% Click-Through Rate"]
    },
    {
      id: 4,
      image: "/assets/analytics4.png",
      metrics: ["5.2x ROAS", "60% Lower CPC", "250% Lead Generation"]
    },
    {
      id: 5,
      image: "/assets/analytics5.png",
      metrics: ["300% Revenue Growth", "85% Client Retention", "40+ New Customers"]
    },
    {
      id: 6,
      image: "/assets/analytics6.png",
      metrics: ["500% Content Reach", "75% Share Rate", "150K+ Video Views"]
    },
    {
      id: 7,
      image: "/assets/analytics7.png",
      metrics: ["320% Lead Quality", "45% Conversion Rate", "1,200+ Qualified Leads"]
    },
    {
      id: 8,
      image: "/assets/analytics8.png",
      metrics: ["800% Brand Reach", "90% Brand Recognition", "2.8M+ Impressions"]
    },
    {
      id: 9,
      image: "/assets/analytics9.png",
      metrics: ["450% Cross-Platform Growth", "75% Engagement Rate", "500K+ Total Reach"]
    }
  ];

  // Analytics slider data for hero section - All 9 images
  const heroGifs = [
    {
      id: 1,
      src: "/assets/analytics1.png",
      alt: "Social Media Growth Analytics - 300% Follower Growth"
    },
    {
      id: 2,
      src: "/assets/analytics2.png", 
      alt: "E-commerce Performance Analytics - 180% Conversion Rate"
    },
    {
      id: 3,
      src: "/assets/analytics3.png", 
      alt: "SEO Success Analytics - 400% Organic Traffic Growth"
    },
    {
      id: 4,
      src: "/assets/analytics4.png", 
      alt: "Ad Campaign Results - 5.2x ROAS Performance"
    },
    {
      id: 5,
      src: "/assets/analytics5.png", 
      alt: "Business Growth Analytics - 300% Revenue Growth"
    },
    {
      id: 6,
      src: "/assets/analytics6.png",
      alt: "Content Marketing Success - 500% Content Reach"
    },
    {
      id: 7,
      src: "/assets/analytics7.png",
      alt: "Lead Generation Campaign - 320% Lead Quality"
    },
    {
      id: 8,
      src: "/assets/analytics8.png",
      alt: "Brand Awareness Campaign - 800% Brand Reach"
    },
    {
      id: 9,
      src: "/assets/analytics9.png",
      alt: "Multi-Platform Success - 450% Cross-Platform Growth"
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
    }, 5000); // Change slide every 8 seconds

    return () => clearInterval(gifInterval);
  }, []);

  // Portfolio slider data
  const portfolioItems = [
    { 
      id: 1, 
      src: "/assets/liberty.png", 
      alt: "Liberty - Past Work Showcase", 
      title: "Liberty Project", 
      category: "Web Development",
      description: "We developed a modern, responsive website for Liberty with custom functionality and seamless user experience. Our team implemented advanced features.",
      clientImage: "/assets/Christopher.jpeg",
      clientName: "Christopher Johnson",
      clientRole: "CEO, Liberty Corp",
      testimonial: "The team delivered an exceptional website that exceeded our expectations. The attention to detail and professional approach made all the difference."
    },
    { 
      id: 2, 
      src: "/assets/septic.png", 
      alt: "Advance Septic Services", 
      title: "Advance Septic Services", 
      category: "Marketing & Ads",
      description: "We transformed Advance Septic Services' digital presence through comprehensive marketing campaigns and targeted advertising strategies.",
      clientImage: "/assets/Hesham.jpeg",
      clientName: "Hesham Al-Rashid",
      clientRole: "Owner, Advance Septic",
      testimonial: "Our business has grown tremendously since working with this team. The marketing strategies they implemented brought us more qualified leads than ever before."
    },
    { 
      id: 3, 
      src: "/assets/gamehero1.png", 
      alt: "Game Hero", 
      title: "Game Hero", 
      category: "Social Media Design",
      description: "We created engaging social media designs and brand identity for Game Hero, establishing their presence across multiple platforms with consistent.",
      clientImage: "/assets/Joshua.jpeg",
      clientName: "Joshua Martinez",
      clientRole: "Founder, Game Hero",
      testimonial: "The social media designs completely transformed our brand image. Our engagement rates increased by 250% and we gained thousands of new followers."
    },
    { 
      id: 4, 
      src: "/assets/canary.png", 
      alt: "Canary B Active", 
      title: "Canary B Active", 
      category: "Shopify Development",
      description: "We built a custom Shopify store for Canary B Active with advanced e-commerce features, inventory management, and seamless checkout experience that boosted their online sales significantly.",
      clientImage: "/assets/Christopher.jpeg",
      clientName: "Sarah Williams",
      clientRole: "Marketing Director, Canary B Active",
      testimonial: "The new Shopify store is incredible! Our conversion rates improved by 180% and the user experience is so much smoother. Highly recommend their services."
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
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(portfolioInterval);
  }, []);

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

  


  // Testimonials

  const testimonialss = [
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
  ];

  // Manual navigation only - no auto-advance

  const services = [
    {
      icon: (
        <svg className="w-12 h-12 text-kabir-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: "Social Media Management",
      description: "Full-stack social strategy, content creation, scheduling, and growth plans.",
      route: "/services/social-media-management"
    },
    {
      icon: (
        <svg className="w-12 h-12 text-kabir-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "Meta & Google Ads",
      description: "Ad campaigns built for ROI — lead generation, retargeting, and scaling.",
      route: "/services/meta-google-ads"
    },
    {
      icon: (
        <svg className="w-12 h-12 text-kabir-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      title: "SEO Optimization",
      description: "Technical + content SEO for long-term organic growth.",
      route: "/services/seo-optimization"
    },
    {
      icon: (
        <svg className="w-12 h-12 text-kabir-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Website Development",
      description: "High-performing, responsive, and SEO-friendly websites in WordPress or custom stacks.",
      route: "/services/website-development"
    },
    {
      icon: (
        <svg className="w-12 h-12 text-kabir-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "Consulting & Strategy",
      description: "1-on-1 strategy sessions to plan, fix, or launch your brand online.",
      route: "/services/consulting-strategy"
    },
    {
      icon: (
        <svg className="w-12 h-12 text-kabir-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
      title: "AI & Automations",
      description: "Smart AI solutions and workflow automations to streamline operations and boost productivity.",
      route: "/services/ai-automations"
    }
  ];

  const testimonials = [
    {
      quote: "Kabir helped scale our Instagram to 40k followers with real engagement. Highly recommended!",
      author: "Sophie",
      company: "Wellness Brand"
    },
    {
      quote: "He doesn't just deliver — he thinks for your business like it's his own.",
      author: "James",
      company: "Ecom Startup"
    }
  ];

  const faqs = [
    {
      question: "How long does each service take?",
      answer: "It depends on the package, but you'll see timelines before checkout."
    },
    {
      question: "Can I contact you before buying?",
      answer: "Yes! Use the contact button or DM me on Instagram @kabirhafeez.co"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Inject CSS for yellow glow animation */}
      <style dangerouslySetInnerHTML={{ __html: glowStyles }} />
      
      {/* Hero Section */}
      <section className="pt-32 md:pt-52 pb-12 md:pb-20 px-6 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 md:space-y-8 text-center lg:text-left">
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-kabir-text leading-tight mb-4 md:mb-6">
                  Digital Growth <span className="text-gradient-green">Expert</span>
                </h1>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-kabir-text-muted leading-relaxed mb-6 md:mb-8">
                  Transform your business with expert digital marketing, web development, and strategic consulting services.
                </p>
              </div>
              
              <div className="space-y-3 md:space-y-4 max-w-sm mx-auto lg:mx-0 lg:max-w-none ml-6 lg:ml-0">
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 md:w-6 md:h-6 bg-kabir-green rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 md:w-4 md:h-4 text-kabir-dark" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm md:text-base text-kabir-text leading-relaxed">Expert digital marketing strategies</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 md:w-6 md:h-6 bg-kabir-green rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 md:w-4 md:h-4 text-kabir-dark" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm md:text-base text-kabir-text leading-relaxed">Custom web development solutions</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 md:w-6 md:h-6 bg-kabir-green rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 md:w-4 md:h-4 text-kabir-dark" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm md:text-base text-kabir-text leading-relaxed">Data-driven growth strategies</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 md:w-6 md:h-6 bg-kabir-green rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 md:w-4 md:h-4 text-kabir-dark" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm md:text-base text-kabir-text leading-relaxed">Comprehensive business consulting</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 items-center lg:items-start">
                <Link to="/services" className="btn-primary glow-green text-sm md:text-base px-4 py-2 md:px-6 md:py-3 w-64 sm:w-auto text-center">
                  Explore Services
                </Link>
                <button 
                  onClick={handleBookConsultation}
                  className="btn-secondary yellow-glow-button text-sm md:text-base px-4 py-2 md:px-6 md:py-3 w-64 sm:w-auto text-center relative overflow-hidden group"
                >
                  Book Free Consultation
                  {/* Subtle glow overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 via-yellow-300/10 to-yellow-400/5 opacity-30 group-hover:opacity-50 transition-opacity duration-300 rounded-lg"></div>
                </button>
              </div>
            </div>
            
            {/* Right Content - Analytics Display */}
            <div className="relative mt-8 lg:mt-0">
              <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg mx-auto">
                {/* Analytics Container */}
                <div className="bg-gradient-to-br from-kabir-darker to-kabir-dark rounded-xl lg:rounded-2xl p-4 sm:p-5 lg:p-6 shadow-xl lg:shadow-2xl border border-kabir-green/20">
                  {/* Analytics Image */}
                  <div className="mb-4 lg:mb-6">
                    <div className="relative rounded-lg overflow-hidden shadow-md lg:shadow-lg">
                      <img 
                        src={analyticsData[currentGifSlide].image}
                        alt={analyticsData[currentGifSlide].title}
                        className="w-full h-auto object-contain bg-white rounded-lg"
                      />
                      {/* Verified Badge */}
                      <div className="absolute top-2 right-2 lg:top-3 lg:right-3">
                        <div className="bg-kabir-green text-kabir-dark px-2 py-0.5 lg:px-3 lg:py-1 rounded-full text-xs font-bold flex items-center space-x-1">
                          <svg className="w-2.5 h-2.5 lg:w-3 lg:h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="hidden sm:inline">VERIFIED</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Analytics Details */}
                  <div className="space-y-3 lg:space-y-4">
                    {/* Title */}
                    <div>
                      <div className="text-kabir-green text-xs sm:text-sm font-semibold mb-1">Analytics Report #{currentGifSlide + 1}</div>
                      <h3 className="text-white text-lg sm:text-xl font-bold mb-2">{analyticsData[currentGifSlide].title}</h3>
                      <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">{analyticsData[currentGifSlide].description}</p>
                    </div>
                    
                    {/* Key Results */}
                    <div>
                      <div className="flex items-center space-x-2 mb-2 lg:mb-3">
                        <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-kabir-green rounded-full"></div>
                        <span className="text-kabir-green text-xs sm:text-sm font-semibold">Key Results Achieved</span>
                      </div>
                      <div className="space-y-1.5 lg:space-y-2">
                        {analyticsData[currentGifSlide].metrics.map((metric, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <div className="w-1 h-1 lg:w-1.5 lg:h-1.5 bg-kabir-green rounded-full flex-shrink-0"></div>
                            <span className="text-white text-xs sm:text-sm font-medium">{metric}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Status Indicators */}
                    <div className="flex items-center space-x-3 sm:space-x-4 pt-2">
                      <div className="flex items-center space-x-1.5">
                        <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-green-400 rounded-full"></div>
                        <span className="text-green-400 text-xs font-medium">Live Results</span>
                      </div>
                      <div className="flex items-center space-x-1.5">
                        <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 bg-kabir-green rounded-full"></div>
                        <span className="text-kabir-green text-xs font-medium">Client Verified</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Navigation Controls */}
                <div className="flex items-center justify-between mt-4 lg:mt-6">
                  {/* Previous Button */}
                  <button
                    onClick={() => setCurrentGifSlide((prev) => (prev - 1 + analyticsData.length) % analyticsData.length)}
                    className="flex items-center space-x-2 px-3 py-2 bg-kabir-darker/50 hover:bg-kabir-darker/70 text-white rounded-lg border border-kabir-green/20 hover:border-kabir-green/40 transition-all duration-300 text-sm font-medium"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    <span className="hidden sm:inline">Previous</span>
                  </button>
                  
                  {/* Navigation Dots */}
                  <div className="flex space-x-1.5 sm:space-x-2">
                    {analyticsData.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentGifSlide(index)}
                        className={`w-2 h-2 sm:w-2.5 sm:h-2.5 lg:w-3 lg:h-3 rounded-full transition-all duration-300 ${
                          index === currentGifSlide 
                            ? 'bg-kabir-green scale-125' 
                            : 'bg-gray-400 hover:bg-gray-300'
                        }`}
                        aria-label={`View analytics ${index + 1}`}
                      />
                    ))}
                  </div>
                  
                  {/* Next Button */}
                  <button
                    onClick={() => setCurrentGifSlide((prev) => (prev + 1) % analyticsData.length)}
                    className="flex items-center space-x-2 px-3 py-2 bg-kabir-darker/50 hover:bg-kabir-darker/70 text-white rounded-lg border border-kabir-green/20 hover:border-kabir-green/40 transition-all duration-300 text-sm font-medium"
                  >
                    <span className="hidden sm:inline">Next</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What I Offer Section */}
      <section className="py-12 md:py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced Section Header */}
          <div className="text-center mb-8 md:mb-16">
            <div className="inline-flex items-center space-x-2 bg-kabir-green/10 px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-kabir-green/20 mb-4 md:mb-6">
              <div className="w-2 h-2 bg-kabir-green rounded-full animate-pulse"></div>
              <span className="text-kabir-green text-xs md:text-sm font-semibold uppercase tracking-wider">Core Services</span>
            </div>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-kabir-text mb-3 md:mb-4">What I Offer</h2>
            <p className="text-kabir-text-muted text-sm md:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
              Comprehensive digital solutions designed to accelerate your business growth and online presence.
            </p>
          </div>
          
          {/* Enhanced Service Cards */}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {services.map((service, index) => (
              <Link 
                key={index}
                to={service.route}
                className="group relative card-modern p-3 md:p-8 hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-kabir-green/10 cursor-pointer block"
              >
                {/* Icon Container */}
                <div className="flex justify-center mb-3 md:mb-6">
                  <div className="w-12 h-12 md:w-20 md:h-20 bg-kabir-green/10 rounded-2xl flex items-center justify-center group-hover:bg-kabir-green/20 transition-all duration-300 group-hover:scale-110 border border-kabir-green/20 group-hover:border-kabir-green/40">
                    <div className="w-6 h-6 md:w-12 md:h-12 flex items-center justify-center">{service.icon}</div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="text-center space-y-2 md:space-y-4">
                  <h3 className="text-base md:text-xl font-bold text-kabir-text group-hover:text-kabir-green transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-kabir-text-muted group-hover:text-kabir-text transition-colors duration-300 leading-relaxed text-xs md:text-sm">
                    {service.description}
                  </p>
                </div>
                
                {/* Learn More Indicator */}
                <div className="text-center mt-1 md:mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-kabir-green text-xs md:text-sm font-semibold flex items-center justify-center space-x-1 md:space-x-2">
                    <span>Learn More</span>
                    <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
                
                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-kabir-green/30 transition-all duration-300 pointer-events-none"></div>
              </Link>
            ))}
          </div>
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

         {/* Why Work With Me Section */}
         <section className="py-12 md:py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-black text-kabir-text mb-4 md:mb-6">Why Work With Me</h2>
          </div>
          <div className="card-modern p-6 md:p-12">
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-12">
              <div className="text-center space-y-3 md:space-y-4">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto bg-kabir-green/10 rounded-full flex items-center justify-center border border-kabir-green/30">
                  <svg className="w-6 h-6 md:w-8 md:h-8 text-kabir-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-lg md:text-2xl font-bold text-kabir-green">12+ Years</h3>
                <p className="text-sm md:text-base text-kabir-text-muted">of experience across the globe</p>
              </div>
              <div className="text-center space-y-3 md:space-y-4">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto bg-kabir-green/10 rounded-full flex items-center justify-center border border-kabir-green/30">
                  <svg className="w-6 h-6 md:w-8 md:h-8 text-kabir-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h3 className="text-lg md:text-2xl font-bold text-kabir-green">100+</h3>
                <p className="text-sm md:text-base text-kabir-text-muted">positive testimonials</p>
              </div>
              <div className="text-center space-y-3 md:space-y-4">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto bg-kabir-green/10 rounded-full flex items-center justify-center border border-kabir-green/30">
                  <svg className="w-6 h-6 md:w-8 md:h-8 text-kabir-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg md:text-2xl font-bold text-kabir-green">Clear Pricing</h3>
                <p className="text-sm md:text-base text-kabir-text-muted">no hidden fees</p>
              </div>
              <div className="text-center space-y-3 md:space-y-4">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto bg-kabir-green/10 rounded-full flex items-center justify-center border border-kabir-green/30">
                  <svg className="w-6 h-6 md:w-8 md:h-8 text-kabir-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-lg md:text-2xl font-bold text-kabir-green">Result-focused</h3>
                <p className="text-sm md:text-base text-kabir-text-muted">strategies (not fluff)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

        {/* Testimonials Section */}
        <section className="py-8 md:py-20 overflow-hidden">
        {/* Header - Centered */}
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-2xl md:text-5xl font-black text-kabir-text mb-3 md:mb-6">
              Client <span className="text-gradient-green">Success Stories</span>
            </h2>
            <p className="text-sm md:text-xl text-kabir-text-muted">
              Real results from real businesses
            </p>
          </div>
        </div>

        {/* Scrolling Testimonials - Full Width */}
        <div className="relative overflow-hidden w-full">
          <div className="flex animate-scroll-left" style={{gap: '1rem', minWidth: 'max-content', animationDuration: '180s'}}>
            {/* Create multiple sets for truly seamless loop */}
            {[...Array(3)].map((_, setIndex) => (
              testimonialss.map((testimonial, index) => (
                <div key={`set-${setIndex}-${index}`} className="flex-shrink-0 w-64 md:w-80">
                  <div className="bg-gradient-to-br from-kabir-gray/90 to-kabir-darker/90 backdrop-blur-sm border border-kabir-green/30 rounded-2xl p-4 md:p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300 h-80 md:h-96 flex flex-col">
                    {/* Profile Image */}
                    <div className="flex justify-center mb-3 md:mb-6">
                      <div className="w-14 h-14 md:w-20 md:h-20 rounded-full overflow-hidden border-2 md:border-4 border-kabir-green/40">
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
                    <div className="mb-3 md:mb-4">
                      <h3 className="font-bold text-kabir-text text-sm md:text-lg mb-1">{testimonial.author}</h3>
                      <p className="text-kabir-green text-xs md:text-sm font-medium">{testimonial.company}</p>
                    </div>

                    {/* Quote - Flexible height with overflow handling */}
                    <blockquote className="text-kabir-text-muted text-xs md:text-sm leading-relaxed mb-3 md:mb-6 italic flex-grow overflow-hidden">
                      <div className="line-clamp-3 md:line-clamp-4">
                        "{testimonial.quote}"
                      </div>
                    </blockquote>

                    {/* Rating Stars - Fixed at bottom */}
                    <div className="flex justify-center mt-auto">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 mx-0.5" fill="currentColor" viewBox="0 0 20 20">
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
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mt-8 md:mt-16">
            <p className="text-kabir-text-muted mb-4 md:mb-6 text-sm md:text-base">Ready to transform your social media presence?</p>
            <button 
              onClick={handleBookConsultation}
              className="btn-primary glow-green inline-flex items-center space-x-2 text-sm md:text-base px-4 md:px-6 py-2 md:py-3"
            >
              <span>Start Your Social Media Journey</span>
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </section>
      

      {/* Combined Trusted Platforms & CTA Section */}
      <section className="py-12 md:py-16 px-6 md:px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="card-modern p-6 md:p-8 glow-green">
            {/* Trusted Platforms Header */}
            <div className="mb-4 md:mb-8 space-y-1 md:space-y-3">
              <div className="inline-flex items-center space-x-2 bg-kabir-green/10 px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-kabir-green/20 mb-2 md:mb-3">
                <div className="w-2 h-2 bg-kabir-green rounded-full animate-pulse"></div>
                <span className="text-kabir-green text-xs md:text-sm font-semibold uppercase tracking-wider">Trusted Platforms</span>
              </div>
              <h2 className="text-lg md:text-3xl lg:text-4xl font-black text-kabir-text mb-2 md:mb-3">
                Partnered with Industry Leaders
              </h2>
              <p className="text-kabir-text-muted text-xs md:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
                Delivering exceptional results through established partnerships with top freelancing platforms worldwide.
              </p>
            </div>
            
            {/* Scrolling Logos */}
            <div className="mb-4 md:mb-12">
              <ScrollingLogos />
            </div>

            {/* CTA Content */}
            <div className="border-t border-kabir-green/20 pt-4 md:pt-12">
              <h3 className="text-base md:text-2xl lg:text-3xl font-black text-kabir-text mb-2 md:mb-4">
                Ready to grow your business with expert-backed services?
              </h3>
              <p className="text-xs md:text-base lg:text-lg text-kabir-text-muted mb-3 md:mb-6 max-w-2xl mx-auto leading-relaxed">
                Get started in 60 seconds — explore packages and see what fits.
              </p>
              <div className="flex flex-col sm:flex-row gap-2 md:gap-3 justify-center items-center">
                <Link
                  to="/services"
                  className="btn-primary glow-green px-4 md:px-6 py-2 text-sm md:text-base w-full sm:w-auto"
                >
                  View Services
                </Link>
                <Link
                  to="/contact"
                  className="btn-secondary px-4 md:px-6 py-2 text-sm md:text-base w-full sm:w-auto"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calendly Popup */}
      <CalendlyPopup 
        isOpen={isCalendlyOpen}
        onClose={handleCloseCalendly}
        calendlyUrl="https://calendly.com/kabirhafeez/kabirhafeez-co-consultation"
      />
    </div>
  );
};

export default Hero;
