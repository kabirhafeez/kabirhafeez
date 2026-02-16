import React, { useState } from 'react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "E-commerce Social Campaign",
      category: "social-media",
      image: "project1",
      description: "Complete social media strategy for fashion e-commerce brand resulting in 300% engagement increase.",
      technologies: ["Instagram", "Facebook", "TikTok", "Analytics"]
    },
    {
      id: 2,
      title: "Restaurant Website & SEO",
      category: "web-development",
      image: "project2",
      description: "Modern restaurant website with online ordering system and local SEO optimization.",
      technologies: ["React", "Node.js", "SEO", "Google Ads"]
    },
    {
      id: 3,
      title: "Tech Startup Branding",
      category: "branding",
      image: "project3",
      description: "Complete brand identity and digital marketing strategy for AI startup company.",
      technologies: ["Brand Design", "Content Strategy", "LinkedIn", "PR"]
    },
    {
      id: 4,
      title: "Healthcare Digital Marketing",
      category: "digital-marketing",
      image: "project4",
      description: "HIPAA-compliant digital marketing campaign for healthcare provider with 200% lead increase.",
      technologies: ["Google Ads", "Email Marketing", "Content Marketing", "Analytics"]
    },
    {
      id: 5,
      title: "Real Estate Social Strategy",
      category: "social-media",
      image: "project5",
      description: "Social media management and lead generation for luxury real estate agency.",
      technologies: ["Instagram", "Facebook", "Lead Generation", "CRM Integration"]
    },
    {
      id: 6,
      title: "SaaS Product Launch",
      category: "digital-marketing",
      image: "project6",
      description: "Full product launch campaign including website, social media, and paid advertising.",
      technologies: ["Product Marketing", "PPC", "Content Creation", "Conversion Optimization"]
    }
  ];

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'social-media', label: 'Social Media' },
    { key: 'web-development', label: 'Web Development' },
    { key: 'digital-marketing', label: 'Digital Marketing' },
    { key: 'branding', label: 'Branding' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">My Portfolio</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Explore some of my recent projects and success stories across different industries and platforms.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                activeFilter === filter.key
                  ? 'bg-blue-600 text-white'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group bg-white/5 rounded-xl overflow-hidden border border-white/10 hover:bg-white/10 transition-all duration-300">
              {/* Project Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-blue-600/30 to-purple-600/30 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-lg mx-auto mb-2 flex items-center justify-center">
                    <svg className="w-8 h-8 text-white/60" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M4 4h16v12H4V4zm16-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM4 20h16v2H4v-2z"/>
                    </svg>
                  </div>
                  <p className="text-white/50 text-xs">Project Image</p>
                </div>
              </div>
              
              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="text-xs bg-white/10 px-2 py-1 rounded-full text-gray-300">
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Project Link */}
                <button className="text-blue-400 hover:text-blue-300 text-sm font-medium flex items-center group-hover:translate-x-1 transition-transform duration-200">
                  View Details
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
          <p className="text-gray-300 mb-8 max-w-lg mx-auto">
            Let's discuss how I can help you achieve your digital marketing goals and grow your business online.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200">
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
