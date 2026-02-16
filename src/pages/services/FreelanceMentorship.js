import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CalendlyButton from '../../components/CalendlyButton';
import { FaRocket, FaUserTie, FaLaptopCode, FaChartLine, FaUsers, FaHandshake, FaTools, FaGraduationCap, FaCheckCircle, FaArrowRight } from 'react-icons/fa';

const FreelanceMentorship = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah K.',
      role: 'Freelance Web Developer',
      content: 'Kabir\'s mentorship completely transformed my freelance career. I went from struggling to find clients to having a consistent $5k+ monthly income within 3 months!',
      image: '/assets/testimonial1.jpg'
    },
    {
      id: 2,
      name: 'Michael T.',
      role: 'Digital Marketer',
      content: 'The client acquisition strategies I learned helped me land my first international client within weeks. The 1:1 coaching was invaluable!',
      image: '/assets/testimonial2.jpg'
    },
    {
      id: 3,
      name: 'Aisha R.',
      role: 'Graphic Designer',
      content: 'Thanks to this program, I was able to double my rates and work with dream clients. The portfolio review and positioning advice were game-changers.',
      image: '/assets/testimonial3.jpg'
    }
  ];

  const programModules = [
    {
      title: 'Freelance Foundation',
      icon: <FaRocket className="w-8 h-8 text-blue-400 mb-4" />,
      topics: [
        'Setting up your freelance business',
        'Choosing your niche and services',
        'Creating your personal brand',
        'Legal and financial essentials'
      ]
    },
    {
      title: 'Client Acquisition',
      icon: <FaUserTie className="w-8 h-8 text-blue-400 mb-4" />,
      topics: [
        'Finding high-paying clients',
        'Crafting winning proposals',
        'Mastering client discovery calls',
        'Handling negotiations and pricing'
      ]
    },
    {
      title: 'Service Delivery',
      icon: <FaLaptopCode className="w-8 h-8 text-blue-400 mb-4" />,
      topics: [
        'Project management best practices',
        'Setting client expectations',
        'Delivering exceptional value',
        'Getting testimonials and referrals'
      ]
    },
    {
      title: 'Business Growth',
      icon: <FaChartLine className="w-8 h-8 text-blue-400 mb-4" />,
      topics: [
        'Scaling your freelance business',
        'Building passive income streams',
        'Hiring and managing subcontractors',
        'Long-term career planning'
      ]
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '499',
      duration: 'month',
      features: [
        '4 group coaching calls',
        'Access to course materials',
        'Private community access',
        'Weekly Q&A sessions',
        'Resource library'
      ],
      cta: 'Start Learning',
      popular: false
    },
    {
      name: 'Premium',
      price: '1,499',
      duration: '3 months',
      features: [
        'Everything in Starter',
        '4 private 1:1 coaching sessions',
        'Portfolio/website review',
        'LinkedIn profile optimization',
        'Proposal and contract templates',
        'Priority email support'
      ],
      cta: 'Get Started',
      popular: true
    },
    {
      name: 'Elite',
      price: '2,999',
      duration: '6 months',
      features: [
        'Everything in Premium',
        '12 private 1:1 coaching sessions',
        'Unlimited email support',
        'Direct client referrals',
        'Business strategy session',
        'Exclusive mastermind group',
        'Lifetime access to updates'
      ],
      cta: 'Join Elite',
      popular: false
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Form state management
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  const [formStatus, setFormStatus] = useState({
    loading: false,
    success: false,
    error: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ loading: true, success: false, error: '' });
    
    try {
      // Here you would typically make an API call to submit the form
      // For now, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setFormStatus({ loading: false, success: true, error: '' });
      setFormData({ name: '', email: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormStatus(prev => ({ ...prev, success: false }));
      }, 5000);
      
    } catch (error) {
      setFormStatus({
        loading: false,
        success: false,
        error: 'Failed to submit. Please try again.'
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-kabir text-kabir-text">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-kabir-darker opacity-90"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-kabir-green/10 to-kabir-green/5"></div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Freelance <span className="text-kabir-green">Mentorship</span> Program
              </h1>
              
              <h2 className="text-2xl md:text-3xl text-kabir-green font-semibold">
                Launch & Scale Your Freelance Business
              </h2>
              
              
              <ul className="space-y-3">
                {[
                  'Personalized 1:1 coaching sessions',
                  'Proven client acquisition strategies',
                  'Portfolio & profile optimization',
                  'Pricing & negotiation tactics',
                  'Business scaling frameworks'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-kabir-green mr-2 mt-1">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span className="text-kabir-text">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <CalendlyButton 
                  url="https://calendly.com/kabirhafeezco/free-consultation"
                  className="yellow-glow-button relative overflow-hidden group bg-kabir-green hover:bg-kabir-green-dark text-kabir-darker font-bold py-3 px-6 rounded-lg text-base transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                  text={
                    <>
                      <span className="relative z-10">Book Free Consultation</span>
                      <span className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1">
                        <FaArrowRight className="inline-block" />
                      </span>
                    </>
                  }
                />
              </div>
            </div>
            
            {/* Right Column - Signup Form */}
            <div className="bg-kabir-darker/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-2xl border border-kabir-green/20">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-white mb-2">Start Your Freelance Journey</h2>
                <p className="text-kabir-text-muted text-sm">Join our mentorship program and get the first session free</p>
              </div>
              
              {/* Success Message */}
              {formStatus.success && (
                <div className="mb-6 p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-green-400 text-sm">
                  🎉 Thank you for signing up! We'll be in touch within 24 hours.
                </div>
              )}
              
              {/* Error Message */}
              {formStatus.error && typeof formStatus.error === 'string' && (
                <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-sm">
                  {formStatus.error}
                </div>
              )}
              
              {/* Signup Form */}
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-kabir-text-muted mb-1.5">
                    Full Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg className="h-5 w-5 text-kabir-green" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="block w-full pl-10 pr-3 py-3 border border-kabir-light-gray/30 bg-kabir-dark/50 rounded-lg text-white placeholder-kabir-text-muted focus:outline-none focus:ring-2 focus:ring-kabir-green/50 focus:border-transparent"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                </div>
                
                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-kabir-text-muted mb-1.5">
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg className="h-5 w-5 text-kabir-green" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="block w-full pl-10 pr-3 py-3 border border-kabir-light-gray/30 bg-kabir-dark/50 rounded-lg text-white placeholder-kabir-text-muted focus:outline-none focus:ring-2 focus:ring-kabir-green/50 focus:border-transparent"
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                </div>
                
                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={formStatus.loading}
                  className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-kabir-dark bg-kabir-green hover:bg-kabir-green/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-kabir-green/50 transition-colors duration-200"
                >
                  {formStatus.loading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-kabir-dark" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </>
                  ) : (
                    'Get Started Now'
                  )}
                </button>
              </form>
              
              {/* Privacy Notice */}
              <p className="mt-4 text-center text-xs text-kabir-text-muted">
                We respect your privacy. Unsubscribe at any time.
              </p>
              
              {/* Trust Badges */}
              <div className="mt-6 pt-6 border-t border-kabir-light-gray/10">
                <div className="flex flex-wrap justify-center items-center gap-4 opacity-75">
                  <div className="flex items-center">
                    <div className="flex -space-x-2 mr-2">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="w-6 h-6 rounded-full bg-kabir-green/20 flex items-center justify-center text-kabir-green text-xs font-bold">
                          {i}
                        </div>
                      ))}
                    </div>
                    <span className="text-xs text-kabir-text-muted">50+ Mentees</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-xs text-kabir-text-muted">4.9/5 (50+ Reviews)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-kabir-darker border-t border-kabir-light-gray/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {[
              { number: '200+', text: 'Freelancers Trained' },
              { number: '85%', text: 'Increased Income' },
              { number: '4.9/5', text: 'Average Rating' },
              { number: '24/7', text: 'Support Access' }
            ].map((stat, index) => (
              <div key={index} className="p-6 bg-kabir-gray/50 rounded-xl border border-kabir-light-gray/20 hover:border-kabir-green/30 transition-all duration-300 hover:shadow-lg hover:shadow-kabir-green/5">
                <div className="text-4xl font-bold text-kabir-green mb-2">{stat.number}</div>
                <div className="text-kabir-text-muted">{stat.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section id="program-details" className="py-20 bg-gradient-kabir">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Path to <span className="text-kabir-green">Freelance Success</span></h2>
            <div className="w-24 h-1 bg-kabir-green mx-auto"></div>
            <p className="mt-6 text-kabir-text-muted text-lg">
              A comprehensive mentorship program designed to help you build a sustainable and profitable freelance business from the ground up.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-kabir-text">Why Choose Our <span className="text-kabir-green">Mentorship Program?</span></h3>
              <p className="text-kabir-text-muted">
                Our Freelance Personal Mentorship Program is designed to help you build a sustainable and profitable freelance business from the ground up. Whether you're just starting or looking to scale, our personalized approach ensures you get the exact guidance you need.
              </p>
              <ul className="space-y-4">
                {[
                  'Personalized 1:1 coaching sessions with industry experts',
                  'Proven strategies to attract high-paying clients',
                  'Exclusive resources and templates',
                  'Lifetime access to our private community',
                  'Real-world case studies and practical exercises',
                  'Ongoing support and accountability'
                ].map((item, index) => (
                  <li key={index} className="flex items-start group">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-6 h-6 rounded-full bg-kabir-green/10 flex items-center justify-center group-hover:bg-kabir-green/20 transition-colors duration-300">
                        <FaCheckCircle className="text-kabir-green w-4 h-4" />
                      </div>
                    </div>
                    <span className="ml-3 text-kabir-text">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-4">
                <CalendlyButton 
                  url="https://calendly.com/kabirhafeezco/free-consultation"
                  className="inline-flex items-center text-kabir-green hover:text-kabir-green-light font-medium group"
                  text={
                    <>
                      <span>Schedule a Free Consultation</span>
                      <FaArrowRight className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1" />
                    </>
                  }
                />
              </div>
            </div>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-kabir-green to-kabir-green-dark rounded-xl opacity-75 group-hover:opacity-100 blur transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-kabir-darker p-1 rounded-xl">
                <img 
                  src="/assets/freelance-mentorship.jpg" 
                  alt="Freelance Mentorship" 
                  className="rounded-lg w-full h-auto transform transition-transform duration-700 group-hover:scale-102"
                />
              </div>
            </div>
          </div>

          {/* Program Modules */}
          <div className="mt-20">
            <h3 className="text-2xl font-bold text-center mb-12">Program Modules</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {programModules.map((module, index) => (
                <div key={index} className="bg-gray-800 p-6 rounded-xl hover:transform hover:scale-105 transition-transform duration-300">
                  <div className="text-center">
                    {module.icon}
                    <h4 className="text-xl font-bold mb-4">{module.title}</h4>
                    <ul className="space-y-2 text-left">
                      {module.topics.map((topic, i) => (
                        <li key={i} className="flex items-start">
                          <FaCheckCircle className="text-green-400 mt-1 mr-2 flex-shrink-0" />
                          <span className="text-gray-300">{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
            <div className="w-24 h-1 bg-white mx-auto"></div>
          </div>
          
          <div className="max-w-4xl mx-auto relative">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full overflow-hidden border-2 border-white/20">
                <img 
                  src={testimonials[testimonialIndex].image} 
                  alt={testimonials[testimonialIndex].name}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-xl italic mb-6">"{testimonials[testimonialIndex].content}"</p>
              <div className="font-bold text-lg">{testimonials[testimonialIndex].name}</div>
              <div className="text-blue-200">{testimonials[testimonialIndex].role}</div>
              
              <div className="flex justify-center mt-6 space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setTestimonialIndex(index)}
                    className={`w-3 h-3 rounded-full ${index === testimonialIndex ? 'bg-white' : 'bg-white/30'}`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Plan</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Select the mentorship package that best fits your goals and budget
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div 
                key={index} 
                className={`relative rounded-xl overflow-hidden ${plan.popular ? 'transform scale-105 z-10 border-2 border-blue-500' : 'border border-gray-700'}`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs font-bold px-4 py-1 rounded-bl-lg">
                    MOST POPULAR
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">${plan.price}</span>
                    <span className="text-gray-400">/{plan.duration}</span>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <FaCheckCircle className="text-green-400 mt-1 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <CalendlyButton 
                    url="https://calendly.com/kabirhafeezco/free-consultation"
                    className={`w-full py-3 px-6 rounded-lg font-bold transition-all duration-300 ${
                      plan.popular 
                        ? 'bg-blue-500 hover:bg-blue-600 text-white' 
                        : 'bg-gray-700 hover:bg-gray-600 text-white'
                    }`}
                    text={plan.cta}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Freelance Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our mentorship program today and take the first step towards building a successful freelance career
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <CalendlyButton 
              url="https://calendly.com/kabirhafeezco/free-consultation"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105"
              text="Book Free Consultation"
            />
            <a 
              href="#pricing" 
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 font-bold py-4 px-8 rounded-full text-lg transition-all duration-300"
            >
              View Pricing
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
          </div>
          
          <div className="space-y-6">
            {[
              {
                question: "How is this program different from free resources?",
                answer: "While there are many free resources available, our program offers personalized 1:1 mentorship, accountability, and direct access to industry experts. You'll get customized feedback on your specific situation and challenges, which free resources can't provide."
              },
              {
                question: "How soon can I expect to see results?",
                answer: "Most students start seeing results within the first few weeks, with significant progress typically seen within 3 months. However, your results will depend on your commitment and implementation of the strategies we provide."
              },
              {
                question: "What if I can't attend the live sessions?",
                answer: "All live sessions are recorded and available in your member portal, so you can watch them at your convenience. You'll also have access to our private community to ask questions and get support between sessions."
              },
              {
                question: "Is there a money-back guarantee?",
                answer: "Yes, we offer a 14-day money-back guarantee. If you're not satisfied with the program after the first two weeks, we'll issue a full refund, no questions asked."
              },
              {
                question: "What if I need help after the program ends?",
                answer: "You'll have lifetime access to the course materials and our private community. We also offer ongoing support options for graduates who want continued guidance as they grow their freelance business."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-800 rounded-lg overflow-hidden">
                <button 
                  className="w-full px-6 py-4 text-left font-medium text-lg focus:outline-none flex justify-between items-center"
                  onClick={() => setActiveTab(activeTab === index ? null : index)}
                >
                  <span>{faq.question}</span>
                  <svg 
                    className={`w-5 h-5 transition-transform duration-300 ${activeTab === index ? 'transform rotate-180' : ''}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {activeTab === index && (
                  <div className="px-6 pb-4 pt-2 text-gray-300">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FreelanceMentorship;
