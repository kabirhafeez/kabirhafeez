import React, { useState, useEffect } from 'react';
import { 
    getActiveOffers, 
    getOffersByCategory, 
    getActiveCategories, 
    trackOfferClick 
} from '../data/specialOffersData';
import { 
    FaGlobe, 
    FaRobot, 
    FaPalette, 
    FaChartLine, 
    FaCode, 
    FaBriefcase 
} from 'react-icons/fa';
import '../styles/SpecialOffers.css';

const SpecialOffers = () => {
    const [offers, setOffers] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        fetchCategories();
        fetchOffers();
    }, [selectedCategory]);

    const fetchCategories = () => {
        // Load categories directly from local data
        const categories = getActiveCategories();
        setCategories(categories);
    };

    const fetchOffers = () => {
        setLoading(true);
        
        // Load offers directly from local data
        const offers = getOffersByCategory(selectedCategory);
        setOffers(offers);
        setError('');
        setLoading(false);
    };

    const handleOfferClick = (offerId, affiliateUrl) => {
        // Track the click locally
        trackOfferClick(offerId);
        
        // Open affiliate link in new tab
        window.open(affiliateUrl, '_blank', 'noopener,noreferrer');
    };

    const formatPrice = (price) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(price || 0);
    };

    const getOfferTypeColor = (type) => {
        switch (type) {
            case 'discount':
                return 'bg-green-500/20 text-green-400';
            case 'free_trial':
                return 'bg-blue-500/20 text-blue-400';
            case 'cashback':
                return 'bg-purple-500/20 text-purple-400';
            case 'bonus':
                return 'bg-yellow-500/20 text-yellow-400';
            default:
                return 'bg-gray-500/20 text-gray-400';
        }
    };

    const getOfferTypeLabel = (type) => {
        switch (type) {
            case 'discount':
                return 'Discount';
            case 'free_trial':
                return 'Free Trial';
            case 'cashback':
                return 'Cashback';
            case 'bonus':
                return 'Bonus';
            default:
                return 'Offer';
        }
    };

    const getCategoryIcon = (categoryName) => {
        const iconProps = { className: "text-lg" };
        
        switch (categoryName?.toLowerCase()) {
            case 'web hosting':
                return <FaGlobe {...iconProps} />;
            case 'ai tools':
                return <FaRobot {...iconProps} />;
            case 'design tools':
                return <FaPalette {...iconProps} />;
            case 'marketing tools':
                return <FaChartLine {...iconProps} />;
            case 'development tools':
                return <FaCode {...iconProps} />;
            case 'business tools':
                return <FaBriefcase {...iconProps} />;
            default:
                return null;
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-kabir-text text-xl">Loading special offers...</div>
            </div>
        );
    }

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <div className="relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300ff88' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }} />
                </div>
                
                <div className="relative section-padding pb-6 md:pt-12 md:pb-8 lg:pt-44 lg:pb-12" style={{paddingTop: '160px'}}>
                    <div className="max-w-7xl mx-auto text-center">
                        {/* Main Heading */}
                        <div className="mb-6 md:mb-8">
                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-kabir-text mb-4 md:mb-6 leading-tight px-4">
                                Special <span className="text-transparent bg-clip-text bg-gradient-to-r from-kabir-green to-kabir-green-light">Offers</span>
                            </h1>
                            <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-kabir-green to-kabir-green-light mx-auto mb-6 md:mb-8 rounded-full"></div>
                        </div>
                        
                        {/* Subtitle */}
                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-kabir-text-muted mb-8 md:mb-12 max-w-4xl mx-auto leading-relaxed px-4">
                            Discover <span className="text-kabir-green font-semibold">exclusive deals</span> and discounts on premium tools and services.
                            <br className="hidden md:block" />
                            Save money while growing your business with our <span className="text-kabir-green font-semibold">curated offers</span>.
                        </p>
                        
                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-3xl mx-auto mb-4 md:mb-6">
                            <div className="text-center">
                                <div className="text-2xl md:text-3xl font-black text-kabir-green mb-1 md:mb-2">{offers.length}+</div>
                                <div className="text-kabir-text-muted text-xs md:text-sm">Active Offers</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl md:text-3xl font-black text-kabir-green mb-1 md:mb-2">{categories.length}+</div>
                                <div className="text-kabir-text-muted text-xs md:text-sm">Categories</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl md:text-3xl font-black text-kabir-green mb-1 md:mb-2">50%+</div>
                                <div className="text-kabir-text-muted text-xs md:text-sm">Average Savings</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Category Filter */}
            <div className="hidden md:block">
                <div className="section-padding py-4 md:py-6">
                    <div className="max-w-7xl mx-auto">
                        {/* Filter Header */}
                        <div className="text-center mb-4">
                            <h2 className="text-xl font-bold text-kabir-text mb-1">Browse by Category</h2>
                            <p className="text-sm text-kabir-text-muted">Find the perfect deals for your needs</p>
                        </div>
                        
                        {/* Category Buttons */}
                        <div className="flex flex-wrap justify-center gap-2 mb-4">
                            <button
                                onClick={() => setSelectedCategory('')}
                                className={`group relative px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
                                    selectedCategory === '' 
                                        ? 'bg-gradient-to-r from-kabir-green to-kabir-green-light text-kabir-dark shadow-xl shadow-kabir-green/30 scale-105' 
                                        : 'bg-kabir-gray/50 text-kabir-text-muted hover:bg-kabir-gray hover:text-kabir-text border border-kabir-gray/30 hover:border-kabir-green/30'
                                }`}
                            >
                                <span className="relative z-10">All Categories</span>
                                {selectedCategory === '' && (
                                    <div className="absolute inset-0 bg-gradient-to-r from-kabir-green to-kabir-green-light rounded-xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity"></div>
                                )}
                            </button>
                            {categories.map((category) => (
                                <button
                                    key={category.id}
                                    onClick={() => setSelectedCategory(category.id)}
                                    className={`group relative px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
                                        selectedCategory === category.id 
                                            ? 'bg-gradient-to-r from-kabir-green to-kabir-green-light text-kabir-dark shadow-xl shadow-kabir-green/30 scale-105' 
                                            : 'bg-kabir-gray/50 text-kabir-text-muted hover:bg-kabir-gray hover:text-kabir-text border border-kabir-gray/30 hover:border-kabir-green/30'
                                    }`}
                                >
                                    <span className="relative z-10 flex items-center gap-2">
                                        {getCategoryIcon(category.name)}
                                        {category.name}
                                    </span>
                                    {selectedCategory === category.id && (
                                        <div className="absolute inset-0 bg-gradient-to-r from-kabir-green to-kabir-green-light rounded-lg blur-sm opacity-30 group-hover:opacity-50 transition-opacity"></div>
                                    )}
                                </button>
                            ))}
                        </div>
                        
                        {/* Results Count */}
                        {!loading && (
                            <div className="text-center">
                                <p className="text-xs text-kabir-text-muted">
                                    {offers.length} {offers.length === 1 ? 'offer' : 'offers'} 
                                    {selectedCategory ? ` in ${categories.find(c => c.id === selectedCategory)?.name}` : ' available'}
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Error Message */}
            {error && (
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
                    <div className="bg-red-500/20 border border-red-500/50 text-red-400 px-4 py-3 rounded-lg">
                        {typeof error === 'string' ? error : (error?.message || JSON.stringify(error))}
                    </div>
                </div>
            )}

            {/* Offers Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
                {offers.length === 0 ? (
                    <div className="text-center py-12">
                        <svg className="h-16 w-16 text-kabir-text-muted mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                        </svg>
                    </div>
                ) : (
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {offers.map((offer) => (
                                <div key={offer.id} className="group relative">
                                    {/* Glow Effect */}
                                    <div className="absolute -inset-1 bg-gradient-to-r from-kabir-green/20 to-kabir-green-light/20 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                                    
                                    {/* Main Card */}
                                    <div className="relative bg-kabir-gray/30 backdrop-blur-sm border border-kabir-gray/30 rounded-2xl p-8 h-full flex flex-col transition-all duration-300 group-hover:border-kabir-green/30 group-hover:transform group-hover:scale-[1.02]">
                                        {/* Header */}
                                        <div className="flex items-start justify-between mb-6">
                                            {/* Company Logo */}
                                            <div className="flex-shrink-0">
                                                {offer.company_logo ? (
                                                    <img 
                                                        src={offer.company_logo} 
                                                        alt={offer.company_name}
                                                        className="h-12 w-auto object-contain"
                                                    />
                                                ) : (
                                                    <div className="h-12 w-12 bg-kabir-green/20 rounded-xl flex items-center justify-center">
                                                        <span className="text-kabir-green font-bold text-lg">
                                                            {offer.company_name.charAt(0)}
                                                        </span>
                                                    </div>
                                                )}
                                            </div>
                                            
                                            {/* Badges */}
                                            <div className="flex flex-col gap-2 items-end">
                                                <span className={`px-3 py-1 rounded-full text-xs font-bold ${getOfferTypeColor(offer.offer_type)}`}>
                                                    {offer.offer_type === 'discount' && offer.discount_percentage > 0 
                                                        ? `${offer.discount_percentage}% Off`
                                                        : getOfferTypeLabel(offer.offer_type)
                                                    }
                                                </span>
                                                {(offer.is_featured === true || offer.is_featured === 1 || offer.is_featured === '1') && (
                                                    <span className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 text-yellow-400 px-3 py-1 rounded-full text-xs font-bold border border-yellow-500/20">
                                                        ⭐ Featured
                                                    </span>
                                                )}
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="flex-grow">
                                            {/* Title & Description */}
                                            <h3 className="text-2xl font-black text-kabir-text mb-3 leading-tight group-hover:text-kabir-green transition-colors">
                                                {offer.title}
                                            </h3>
                                            <p className="text-kabir-text-muted mb-6 leading-relaxed">
                                                {offer.short_description || offer.description}
                                            </p>

                                            {/* Features */}
                                            {offer.features && offer.features.length > 0 && (
                                                <div className="mb-6">
                                                    <h4 className="text-sm font-bold text-kabir-text mb-3 uppercase tracking-wide">What's Included:</h4>
                                                    <ul className="space-y-2">
                                                        {offer.features.slice(0, 4).map((feature, index) => (
                                                            <li key={index} className="flex items-start text-sm text-kabir-text-muted">
                                                                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-kabir-green/20 flex items-center justify-center mr-3 mt-0.5">
                                                                    <svg className="h-3 w-3 text-kabir-green" fill="currentColor" viewBox="0 0 20 20">
                                                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                                    </svg>
                                                                </div>
                                                                <span className="leading-relaxed">{feature}</span>
                                                            </li>
                                                        ))}
                                                        {offer.features.length > 4 && (
                                                            <li className="text-xs text-kabir-green font-medium ml-8">
                                                                +{offer.features.length - 4} more features
                                                            </li>
                                                        )}
                                                    </ul>
                                                </div>
                                            )}
                                        </div>

                                        {/* Footer */}
                                        <div className="mt-auto">
                                            {/* Pricing */}
                                            <div className="mb-6">
                                                {offer.discounted_price && offer.original_price ? (
                                                    <div className="space-y-2">
                                                        <div className="flex items-center gap-3 flex-wrap">
                                                            <span className="text-3xl font-black text-kabir-green">
                                                                {formatPrice(offer.discounted_price)}
                                                            </span>
                                                            <span className="text-lg text-kabir-text-muted line-through">
                                                                {formatPrice(offer.original_price)}
                                                            </span>
                                                        </div>
                                                        {offer.discount_percentage && (
                                                            <div className="inline-flex items-center gap-2">
                                                                <span className="bg-gradient-to-r from-red-500/20 to-pink-500/20 text-red-400 px-3 py-1 rounded-full text-sm font-bold border border-red-500/20">
                                                                    Save {offer.discount_percentage}%
                                                                </span>
                                                                <span className="text-sm text-kabir-green font-medium">
                                                                    You save {formatPrice(offer.original_price - offer.discounted_price)}
                                                                </span>
                                                            </div>
                                                        )}
                                                    </div>
                                                ) : offer.original_price ? (
                                                    <span className="text-3xl font-black text-kabir-green">
                                                        {formatPrice(offer.original_price)}
                                                    </span>
                                                ) : (
                                                    <span className="text-3xl font-black text-kabir-green">Free</span>
                                                )}
                                                

                                            </div>

                                            {/* Expiry */}
                                            {offer.expires_at && (
                                                <div className="flex items-center text-sm text-orange-400 mb-4 bg-orange-500/10 px-3 py-2 rounded-lg border border-orange-500/20">
                                                    <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                    <span className="font-medium">Expires: {new Date(offer.expires_at).toLocaleDateString()}</span>
                                                </div>
                                            )}

                                            {/* CTA Button */}
                                            <button
                                                onClick={() => handleOfferClick(offer.id, offer.affiliate_url)}
                                                className="w-full border-2 border-kabir-green bg-transparent hover:bg-kabir-green text-kabir-green hover:text-kabir-dark font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-kabir-green/30 flex items-center justify-center group/btn"
                                            >
                                                <span>Claim Offer</span>
                                            </button>

                                            {/* Social Proof */}
                                            {offer.click_count > 0 && (
                                                <div className="flex items-center justify-center mt-3 text-xs text-kabir-text-muted">
                                                    <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                                    </svg>
                                                    <span>{offer.click_count} people used this offer</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SpecialOffers;
