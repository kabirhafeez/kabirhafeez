import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PurchaseButton from '../PurchaseButton';
import { 
    getCategoryBySlugSync, 
    getPackagesByCategorySync,
    getCategoriesSync 
} from '../../data/servicesData';

const ServiceCategoryPage = ({ 
  categoryName, 
  categorySlug, 
  heroTitle, 
  heroDescription, 
  categoryDescription,
  testimonials = []
}) => {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [category, setCategory] = useState(null);

  useEffect(() => {
    fetchCategoryPackages();
  }, [categoryName]);

  const fetchCategoryPackages = () => {
    try {
      setLoading(true);
      
      // Get category by slug or name
      let foundCategory = getCategoryBySlugSync(categorySlug);
      
      // If not found by slug, try finding by name
      if (!foundCategory) {
        const categories = getCategoriesSync();
        foundCategory = categories.find(cat => 
          cat.name.toLowerCase().includes(categoryName.toLowerCase())
        );
      }
      
      if (foundCategory) {
        setCategory(foundCategory);
        
        // Get packages for this category
        const categoryPackages = getPackagesByCategorySync(foundCategory.id);
        setPackages(categoryPackages);
      } else {
        setError(`Category "${categoryName}" not found`);
      }
    } catch (err) {
      console.error('Error fetching category packages:', err);
      setError('Failed to load service packages. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const formatPrice = (price) => {
    return `$${parseFloat(price).toFixed(0)}`;
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
        gradient: "from-purple-500/80 to-purple-600",
        border: "border-purple-500/50"
      }
    ];
    return colors[index % colors.length];
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-kabir-dark flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-kabir-green mx-auto"></div>
          <p className="text-kabir-text mt-4">Loading {categoryName} packages...</p>
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
            onClick={fetchCategoryPackages}
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
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-kabir-green/5 to-transparent"></div>
        <div className="container mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-black text-kabir-text mb-6">
              {heroTitle || `${categoryName} Services`}
            </h1>
            <p className="text-xl text-kabir-text-muted leading-relaxed mb-8">
              {heroDescription || `Professional ${categoryName.toLowerCase()} solutions to grow your business and maximize your online presence.`}
            </p>
            
            {category && (
              <div className="inline-flex items-center space-x-2 bg-kabir-green/10 border border-kabir-green/30 rounded-full px-6 py-3">
                <span className="w-2 h-2 bg-kabir-green rounded-full"></span>
                <span className="text-kabir-green font-semibold">{category.name}</span>
                <span className="text-kabir-text-muted">•</span>
                <span className="text-kabir-text-muted">{packages.length} Package{packages.length !== 1 ? 's' : ''} Available</span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-kabir-text mb-6">
              Choose Your Perfect Package
            </h2>
            <p className="text-xl text-kabir-text-muted max-w-3xl mx-auto">
              {categoryDescription || `Select from our carefully crafted ${categoryName.toLowerCase()} packages designed to meet your specific needs and budget.`}
            </p>
          </div>

          {packages.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {packages.map((pkg, index) => {
                const colors = getPackageColor(index);
                const features = parseFeatures(pkg.features);
                
                return (
                  <div key={pkg.id} className="group relative">
                    <div className={`bg-gradient-to-br ${colors.gradient} p-1 rounded-3xl shadow-2xl hover:shadow-kabir-green/25 transition-all duration-300 hover:scale-105`}>
                      <div className="bg-kabir-dark rounded-3xl p-8 h-full">
                        {/* Package Header */}
                        <div className="text-center mb-8">
                          <h3 className="text-2xl font-black text-kabir-text mb-2 uppercase tracking-wide">
                            {pkg.name}
                          </h3>
                          <div className="text-4xl font-black text-kabir-green mb-4">
                            {formatPrice(pkg.price)}
                            {pkg.original_price && pkg.original_price > pkg.price && (
                              <span className="text-lg text-kabir-text-muted line-through ml-2">
                                {formatPrice(pkg.original_price)}
                              </span>
                            )}
                          </div>
                          <p className="text-kabir-text-muted text-sm">
                            {pkg.duration_days} {pkg.duration_type} access
                          </p>
                        </div>

                        {/* Package Description */}
                        {pkg.short_description && (
                          <div className="mb-6">
                            <p className="text-kabir-text-muted text-center leading-relaxed">
                              {pkg.short_description}
                            </p>
                          </div>
                        )}

                        {/* Features List */}
                        <div className="space-y-4 mb-8">
                          {features.slice(0, 8).map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center space-x-3">
                              <div className="w-5 h-5 rounded-full bg-kabir-green flex items-center justify-center flex-shrink-0">
                                <svg className="w-3 h-3 text-kabir-dark" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                              </div>
                              <span className="text-kabir-text font-medium text-sm">
                                {feature}
                              </span>
                            </div>
                          ))}
                          {features.length > 8 && (
                            <div className="text-center">
                              <span className="text-kabir-green text-sm font-semibold">
                                +{features.length - 8} more features
                              </span>
                            </div>
                          )}
                        </div>

                        {/* Purchase Button */}
                        <div className="mt-auto">
                          <PurchaseButton 
                            packageId={pkg.id}
                            className="w-full bg-kabir-green hover:bg-kabir-green-light text-kabir-dark font-bold py-4 px-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-kabir-green/25"
                          />
                        </div>
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
                We're working on adding {categoryName.toLowerCase()} packages. Check back soon!
              </p>
              <Link to="/services" className="btn-primary">
                View All Services
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Testimonials Section */}
      {testimonials.length > 0 && (
        <section className="py-20 px-6 bg-kabir-darker/50">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-kabir-text mb-6">
                What Our Clients Say
              </h2>
              <p className="text-xl text-kabir-text-muted">
                Real results from real businesses
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-kabir-gray/30 border border-kabir-green/20 rounded-2xl p-8 text-center">
                  <div className="mb-6">
                    <div className="w-16 h-16 rounded-full bg-kabir-green/20 flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">👤</span>
                    </div>
                    <h3 className="font-bold text-kabir-text text-lg">{testimonial.author}</h3>
                    <p className="text-kabir-green text-sm">{testimonial.company}</p>
                  </div>
                  
                  <blockquote className="text-kabir-text-muted italic mb-6">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  <div className="flex justify-center">
                    {[...Array(testimonial.rating || 5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-kabir-text mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-kabir-text-muted mb-8">
              Let's discuss your {categoryName.toLowerCase()} needs and create a custom strategy that drives real results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/services" className="btn-primary glow-green">
                Get Free Consultation
              </Link>
              <Link to="/services" className="btn-secondary">
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceCategoryPage;
