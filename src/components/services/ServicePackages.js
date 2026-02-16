import React from 'react';
import { Link } from 'react-router-dom';

// Service data with engaging hollow icons and descriptions
const services = [
    {
        id: 1,
        title: "Social Media Management",
        description: "Full-stack social strategy, content creation, scheduling, and growth plans to maximize your social media presence and drive engagement.",
        icon: (
            <svg className="w-14 h-14 text-kabir-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.627 2.707-3.227V6.741c0-1.6-1.123-2.994-2.707-3.227A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.514C3.373 3.747 2.25 5.141 2.25 6.741v6.018z" />
            </svg>
        ),
        link: "/services/social-media-management",
        gradient: "from-pink-500 to-rose-500"
    },
    {
        id: 2,
        title: "SEO Optimization",
        description: "Technical and content SEO strategies designed for long-term organic growth, higher search rankings, and increased visibility.",
        icon: (
            <svg className="w-14 h-14 text-kabir-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
            </svg>
        ),
        link: "/services/seo-optimization",
        gradient: "from-blue-500 to-cyan-500"
    },
    {
        id: 3,
        title: "Meta & Google Ads",
        description: "ROI-focused ad campaigns with advanced targeting, lead generation, retargeting strategies, and performance optimization for maximum returns.",
        icon: (
            <svg className="w-14 h-14 text-kabir-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46" />
            </svg>
        ),
        link: "/services/meta-google-ads",
        gradient: "from-purple-500 to-indigo-500"
    },
    {
        id: 4,
        title: "Website Development",
        description: "High-performing, responsive, and SEO-friendly websites built with cutting-edge technologies, modern design principles, and best practices.",
        icon: (
            <svg className="w-14 h-14 text-kabir-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
            </svg>
        ),
        link: "/services/website-development",
        gradient: "from-emerald-500 to-teal-500"
    },
    {
        id: 5,
        title: "Consulting & Strategy",
        description: "1-on-1 strategic consulting sessions to plan, optimize, and launch your brand with expert guidance, market insights, and actionable roadmaps.",
        icon: (
            <svg className="w-14 h-14 text-kabir-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189 6.01 6.01 0 01.75 2.815c-.537.192-.832.53-.832.944 0 .414.295.752.832.944a6.01 6.01 0 01-.75 2.815A6.015 6.015 0 0112 18.75M12 12.75a6.01 6.01 0 01-1.5-.189 6.01 6.01 0 01-.75-2.815c.537-.192.832-.53.832-.944 0-.414-.295-.752-.832-.944a6.01 6.01 0 01.75-2.815A6.015 6.015 0 0112 5.25m0 7.5V3" />
            </svg>
        ),
        link: "/services/consulting-strategy",
        gradient: "from-orange-500 to-red-500"
    },
    {
        id: 6,
        title: "AI & Automations",
        description: "Cutting-edge AI solutions and intelligent automation systems to streamline operations, boost efficiency, and drive innovation in your business.",
        icon: (
            <svg className="w-14 h-14 text-kabir-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423L16.5 15.75l.394 1.183a2.25 2.25 0 001.423 1.423L19.5 18.75l-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
            </svg>
        ),
        link: "/services/ai-automations",
        gradient: "from-violet-500 to-purple-500"
    }
];

const ServicePackages = () => {

    return (
        <div className="pt-24 md:pt-32 pb-16 md:pb-24">
            <div className="container mx-auto px-4 md:px-6">
                {/* Hero Section */}
                <div className="text-center mb-8 md:mb-20 animate-slideUp">
                    <div className="mb-4 md:mb-8">
                        <span className="inline-block px-3 md:px-5 py-2 md:py-3 bg-kabir-green/10 text-kabir-green text-xs md:text-sm font-semibold rounded-full border border-kabir-green/20 mb-4 md:mb-6">
                            ✨ Premium Digital Solutions
                        </span>
                    </div>
                    <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black text-kabir-text mb-4 md:mb-8 leading-tight px-4">
                        Our <span className="text-gradient-green">Services</span>
                    </h1>
                    <p className="text-sm sm:text-base md:text-xl text-kabir-text-muted max-w-4xl mx-auto leading-relaxed mb-4 md:mb-8 px-4">
                        Transform your business with our comprehensive digital solutions. From strategy to execution, we deliver measurable results that drive growth.
                    </p>
                    <div className="flex justify-center items-center gap-2 md:gap-4 mb-4 md:mb-8">
                        <div className="w-12 md:w-16 h-1 bg-gradient-to-r from-kabir-green to-kabir-green-dark rounded-full"></div>
                        <div className="w-2 md:w-3 h-2 md:h-3 bg-kabir-green rounded-full animate-pulse"></div>
                        <div className="w-12 md:w-16 h-1 bg-gradient-to-r from-kabir-green-dark to-kabir-green rounded-full"></div>
                    </div>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 animate-fadeIn">
                    {services.map((service, index) => (
                        <div 
                            key={service.id} 
                            className="group relative overflow-hidden"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {/* Card Background with Gradient Border */}
                            <div className="absolute inset-0 bg-gradient-to-r from-kabir-green/15 via-kabir-green-dark/15 to-kabir-green/15 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            
                            <div className="relative card-modern p-4 md:p-8 h-full hover:scale-[1.01] transition-all duration-300 hover:shadow-xl hover:shadow-kabir-green/10 border border-kabir-gray/50 hover:border-kabir-green/30">
                                {/* Service Icon */}
                                <div className="flex justify-center mb-3 md:mb-6">
                                    <div className="relative">
                                        <div className="w-12 md:w-20 h-12 md:h-20 flex items-center justify-center group-hover:scale-105 transition-all duration-300">
                                            <div className="scale-75 md:scale-90 text-kabir-green">
                                                {service.icon}
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                {/* Service Title */}
                                <h3 className="text-base md:text-xl font-bold text-kabir-text text-center mb-2 md:mb-4 group-hover:text-kabir-green transition-colors duration-300 leading-tight">
                                    {service.title}
                                </h3>

                                {/* Service Description */}
                                <p className="text-kabir-text-muted text-center mb-4 md:mb-8 leading-relaxed text-xs md:text-base">
                                    {service.description}
                                </p>

                                {/* CTA Button */}
                                <div className="text-center">
                                    <Link 
                                        to={service.link}
                                        className="btn-secondary group-hover:shadow-md group-hover:shadow-kabir-green/25 inline-flex items-center gap-1 md:gap-2 font-semibold text-xs md:text-base px-4 md:px-8 py-2 md:py-4 hover:scale-105 transition-all duration-300"
                                    >
                                        Explore Packages
                                        <svg className="w-3 md:w-5 h-3 md:h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Divider */}
                <div className="flex justify-center items-center my-8 md:my-12">
                    <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-kabir-green/30 to-transparent"></div>
                    <div className="mx-4">
                        <div className="w-2 h-2 bg-kabir-green rounded-full animate-pulse"></div>
                    </div>
                    <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-kabir-green/30 to-transparent"></div>
                </div>

                {/* Bottom CTA Section */}
                <div className="text-center mt-8 md:mt-16 animate-fadeIn">
                    <div className="card-modern p-6 md:p-10 max-w-4xl mx-auto">
                        <h2 className="text-2xl md:text-3xl font-bold text-kabir-text mb-4 md:mb-6">
                            Ready to <span className="text-gradient-green">Transform</span> Your Business?
                        </h2>
                        <p className="text-base md:text-lg text-kabir-text-muted mb-6 md:mb-8 leading-relaxed px-4">
                            Let's discuss your project and create a customized solution that drives real results.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch">
                            <Link 
                                to="/services" 
                                className="btn-primary text-sm md:text-base font-semibold hover:scale-105 transition-all duration-300 w-full sm:w-56 h-12 md:h-14 flex items-center justify-center rounded-lg"
                            >
                                Get Started
                            </Link>
                            <Link 
                                to="/about" 
                                className="btn-secondary text-sm md:text-base font-semibold hover:scale-105 transition-all duration-300 w-full sm:w-56 h-12 md:h-14 flex items-center justify-center rounded-lg"
                            >
                                Learn More
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicePackages;
