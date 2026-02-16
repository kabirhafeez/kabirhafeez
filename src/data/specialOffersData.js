// Hard-coded Special Offers Data
// To modify offers, edit this file directly

export const specialOffersCategories = [
    {
        id: 1,
        name: 'Web Hosting',
        description: 'Premium web hosting services',
        slug: 'web-hosting',
        icon: 'globe',
        is_active: true
    },
    {
        id: 2,
        name: 'AI Tools',
        description: 'Artificial Intelligence tools and services',
        slug: 'ai-tools',
        icon: 'robot',
        is_active: true
    },
    {
        id: 3,
        name: 'Design Tools',
        description: 'Creative design and graphics tools',
        slug: 'design-tools',
        icon: 'palette',
        is_active: true
    }
];

export const specialOffers = [
    {
        id: 1,
        title: 'Premium Web Hosting - 70% Off',
        description: 'Get premium web hosting with unlimited bandwidth, free SSL certificate, and 24/7 support. Perfect for businesses and personal websites.',
        short_description: 'Premium web hosting with unlimited bandwidth and free SSL',
        company_name: 'HostPro',
        company_logo: '/assets/hostpro-logo.png',
        original_price: 7.99,
        discounted_price: 2.99,
        discount_percentage: 20,
        discount_code: '1KABIR02',
        affiliate_url: 'https://www.hostinger.com/referral?REFERRALCODE=1KABIR02',
        features: [
            'Unlimited Bandwidth',
            'Free SSL Certificate',
            'Free Domain and Website Migration',
            '99.9% Uptime Guarantee',
            'WordPress Optimization'
        ],
        offer_type: 'discount',
        expires_at: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
        is_active: true,
        is_featured: true,
        click_count: 245,
        category_name: 'Web Hosting',
        category_slug: 'web-hosting',
        category_icon: 'globe',
        category_id: 1,
        created_at: new Date('2024-01-15').toISOString(),
        updated_at: new Date().toISOString(),
        is_expired: false
    }
];

// Helper functions for filtering and managing offers
export const getActiveOffers = () => {
    return specialOffers.filter(offer => 
        offer.is_active && 
        (!offer.expires_at || new Date(offer.expires_at) > new Date())
    );
};

export const getOffersByCategory = (categoryId) => {
    const activeOffers = getActiveOffers();
    return categoryId ? activeOffers.filter(offer => offer.category_id == categoryId) : activeOffers;
};

export const getFeaturedOffers = () => {
    return getActiveOffers().filter(offer => offer.is_featured);
};

export const getActiveCategories = () => {
    return specialOffersCategories.filter(category => category.is_active);
};

// Simulate click tracking (local storage)
export const trackOfferClick = (offerId) => {
    try {
        const clickData = JSON.parse(localStorage.getItem('offerClicks') || '{}');
        clickData[offerId] = (clickData[offerId] || 0) + 1;
        localStorage.setItem('offerClicks', JSON.stringify(clickData));
        
        // Update the click count in the offers array
        const offer = specialOffers.find(o => o.id === offerId);
        if (offer) {
            offer.click_count += 1;
        }
        
        return true;
    } catch (error) {
        console.error('Error tracking click:', error);
        return false;
    }
};

export const getOfferClickCount = (offerId) => {
    try {
        const clickData = JSON.parse(localStorage.getItem('offerClicks') || '{}');
        return clickData[offerId] || 0;
    } catch (error) {
        return 0;
    }
};
