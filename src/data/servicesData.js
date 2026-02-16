// Local Services Data
// This file replaces API calls for services and packages

export const serviceCategories = [
    {
        id: 1,
        name: 'Social Media Management',
        slug: 'social-media-management',
        description: 'Complete social media strategy, content creation, and management',
        icon: 'social-media',
        is_active: true,
        created_at: '2024-01-01T00:00:00Z',
        updated_at: '2024-01-01T00:00:00Z'
    },
    {
        id: 2,
        name: 'SEO Optimization',
        slug: 'seo-optimization',
        description: 'Technical and content SEO for long-term organic growth',
        icon: 'seo',
        is_active: true,
        created_at: '2024-01-01T00:00:00Z',
        updated_at: '2024-01-01T00:00:00Z'
    },
    {
        id: 3,
        name: 'Meta & Google Ads',
        slug: 'meta-google-ads',
        description: 'ROI-focused advertising campaigns with advanced targeting',
        icon: 'ads',
        is_active: true,
        created_at: '2024-01-01T00:00:00Z',
        updated_at: '2024-01-01T00:00:00Z'
    },
    {
        id: 4,
        name: 'Website Development',
        slug: 'website-development',
        description: 'Modern, responsive, and SEO-friendly websites',
        icon: 'website',
        is_active: true,
        created_at: '2024-01-01T00:00:00Z',
        updated_at: '2024-01-01T00:00:00Z'
    },
    {
        id: 5,
        name: 'Consulting & Strategy',
        slug: 'consulting-strategy',
        description: 'Strategic consulting and business growth planning',
        icon: 'consulting',
        is_active: true,
        created_at: '2024-01-01T00:00:00Z',
        updated_at: '2024-01-01T00:00:00Z'
    },
    {
        id: 6,
        name: 'AI & Automations',
        slug: 'ai-automations',
        description: 'AI solutions and intelligent automation systems',
        icon: 'ai',
        is_active: true,
        created_at: '2024-01-01T00:00:00Z',
        updated_at: '2024-01-01T00:00:00Z'
    }
];

export const servicePackages = [
    // Social Media Management Packages
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
    },
    // SEO Optimization Packages
    {
        id: 4,
        name: 'SEO Starter',
        short_description: 'Essential SEO foundation for small businesses',
        description: 'Fundamental SEO optimization package to improve your search engine rankings and online visibility.',
        price: 399,
        original_price: 499,
        duration_days: 30,
        duration_type: 'month',
        category_id: 2,
        features: [
            'Website SEO audit',
            'Keyword research (50 keywords)',
            'On-page optimization (10 pages)',
            'Meta tags optimization',
            'Google Analytics setup',
            'Google Search Console setup',
            'Basic competitor analysis',
            'Monthly ranking report',
            'Technical SEO recommendations'
        ],
        is_active: true,
        is_featured: false,
        created_at: '2024-01-01T00:00:00Z',
        updated_at: '2024-01-01T00:00:00Z'
    },
    {
        id: 5,
        name: 'SEO Growth',
        short_description: 'Comprehensive SEO strategy for sustainable growth',
        description: 'Advanced SEO package with ongoing optimization, content strategy, and performance tracking.',
        price: 799,
        original_price: 999,
        duration_days: 30,
        duration_type: 'month',
        category_id: 2,
        features: [
            'Comprehensive website audit',
            'Advanced keyword research (200+ keywords)',
            'On-page optimization (25 pages)',
            'Content strategy and planning',
            'Blog post optimization (4 posts per month)',
            'Backlink analysis and building',
            'Local SEO optimization',
            'Technical SEO implementation',
            'Competitor analysis and monitoring',
            'Bi-weekly reporting',
            'Schema markup implementation',
            'Page speed optimization'
        ],
        is_active: true,
        is_featured: true,
        created_at: '2024-01-01T00:00:00Z',
        updated_at: '2024-01-01T00:00:00Z'
    },
    {
        id: 6,
        name: 'SEO Enterprise',
        short_description: 'Advanced SEO solution for competitive markets',
        description: 'Enterprise-level SEO with comprehensive strategy, advanced analytics, and dedicated support.',
        price: 1599,
        original_price: 1999,
        duration_days: 30,
        duration_type: 'month',
        category_id: 2,
        features: [
            'Enterprise website audit',
            'Extensive keyword research (500+ keywords)',
            'Unlimited on-page optimization',
            'Advanced content strategy',
            'Content creation and marketing',
            'Advanced backlink strategy',
            'International SEO support',
            'E-commerce SEO optimization',
            'Advanced technical SEO',
            'Weekly reporting and analysis',
            'Dedicated SEO specialist',
            'SEO training and consultation',
            'Conversion rate optimization'
        ],
        is_active: true,
        is_featured: false,
        created_at: '2024-01-01T00:00:00Z',
        updated_at: '2024-01-01T00:00:00Z'
    },
    // Meta & Google Ads Packages
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
    },
    // Website Development Packages
    {
        id: 10,
        name: 'Starter Website',
        short_description: 'Professional website for small businesses',
        description: 'Clean, modern website designed to establish your online presence and convert visitors.',
        price: 999,
        original_price: 1499,
        duration_days: 30,
        duration_type: 'one-time',
        category_id: 4,
        features: [
            '5-page responsive website',
            'Modern, professional design',
            'Mobile-friendly development',
            'Contact form integration',
            'Social media integration',
            'Basic SEO setup',
            'Content Management System',
            '1 revision round',
            'Stock images (up to 10)',
            'Google Analytics integration',
            'Website training session'
        ],
        is_active: true,
        is_featured: false,
        created_at: '2024-01-01T00:00:00Z',
        updated_at: '2024-01-01T00:00:00Z'
    },
    {
        id: 11,
        name: 'Growth Website',
        short_description: 'Advanced website with custom features',
        description: 'Feature-rich website with custom functionality, advanced design, and optimization.',
        price: 2499,
        original_price: 3299,
        duration_days: 45,
        duration_type: 'one-time',
        category_id: 4,
        features: [
            '15-page custom website',
            'Advanced custom design',
            'Fully responsive and optimized',
            'Custom contact forms',
            'Blog functionality',
            'E-commerce integration (up to 50 products)',
            'Advanced SEO optimization',
            'Performance optimization',
            '2 revision rounds',
            'Custom graphics and branding',
            'Advanced analytics setup',
            'Social media integration',
            'Email marketing integration',
            'Content migration assistance',
            'Priority support (3 months)'
        ],
        is_active: true,
        is_featured: true,
        created_at: '2024-01-01T00:00:00Z',
        updated_at: '2024-01-01T00:00:00Z'
    },
    {
        id: 12,
        name: 'Enterprise Website',
        short_description: 'Custom web application for large businesses',
        description: 'Enterprise-level web solution with custom development, advanced features, and comprehensive support.',
        price: 5999,
        original_price: 7999,
        duration_days: 60,
        duration_type: 'one-time',
        category_id: 4,
        features: [
            'Unlimited pages web application',
            'Custom UI/UX design',
            'Advanced web development',
            'Custom functionality and features',
            'Database integration',
            'API development and integration',
            'Advanced e-commerce solution',
            'Enterprise-level security',
            'Performance and speed optimization',
            'Unlimited revisions',
            'Custom branding and graphics',
            'Advanced SEO and marketing integration',
            'Multi-language support',
            'Content management system',
            'Analytics and reporting dashboard',
            'Training and documentation',
            'Ongoing support (6 months)'
        ],
        is_active: true,
        is_featured: false,
        created_at: '2024-01-01T00:00:00Z',
        updated_at: '2024-01-01T00:00:00Z'
    },
    // Consulting & Strategy Packages
    {
        id: 13,
        name: 'Strategy Session',
        short_description: 'Focused consulting for specific challenges',
        description: 'Intensive strategy session to address specific business challenges and opportunities.',
        price: 299,
        original_price: 399,
        duration_days: 7,
        duration_type: 'session',
        category_id: 5,
        features: [
            '2-hour strategy consultation',
            'Business assessment and analysis',
            'Goal setting and planning',
            'Action plan development',
            'Resource optimization recommendations',
            'Market opportunity analysis',
            'Competitive positioning review',
            'Follow-up email summary',
            '1-week email support',
            'Resource recommendations'
        ],
        is_active: true,
        is_featured: false,
        created_at: '2024-01-01T00:00:00Z',
        updated_at: '2024-01-01T00:00:00Z'
    },
    {
        id: 14,
        name: 'Growth Strategy',
        short_description: 'Comprehensive business growth planning',
        description: 'In-depth strategic consulting to develop comprehensive growth strategies and implementation plans.',
        price: 799,
        original_price: 999,
        duration_days: 30,
        duration_type: 'project',
        category_id: 5,
        features: [
            'Initial business deep-dive session',
            'Comprehensive market research',
            'SWOT analysis',
            'Growth strategy development',
            'Financial modeling and projections',
            'Marketing strategy planning',
            'Operational optimization plan',
            'Team structure recommendations',
            'Technology stack assessment',
            'Implementation roadmap',
            'Bi-weekly check-in calls',
            'Detailed strategy document',
            '30-day email support',
            'Performance metrics framework'
        ],
        is_active: true,
        is_featured: true,
        created_at: '2024-01-01T00:00:00Z',
        updated_at: '2024-01-01T00:00:00Z'
    },
    {
        id: 15,
        name: 'Enterprise Strategy',
        short_description: 'Executive-level strategic partnership',
        description: 'Long-term strategic partnership with comprehensive business transformation and growth support.',
        price: 2499,
        original_price: 3299,
        duration_days: 90,
        duration_type: 'retainer',
        category_id: 5,
        features: [
            'Executive strategy sessions',
            'Comprehensive business audit',
            'Advanced market analysis',
            'Long-term strategic planning',
            'Financial strategy development',
            'Organizational design consulting',
            'Technology strategy and roadmap',
            'M&A opportunity assessment',
            'International expansion planning',
            'Risk management framework',
            'Weekly strategy calls',
            'On-site visits (2 per quarter)',
            'Board presentation preparation',
            'Team training and development',
            'Continuous support and guidance',
            'Network and partnership opportunities'
        ],
        is_active: true,
        is_featured: false,
        created_at: '2024-01-01T00:00:00Z',
        updated_at: '2024-01-01T00:00:00Z'
    },
    // AI & Automations Packages
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

// Helper functions to simulate API responses
export const getServicesCategories = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                success: true,
                data: serviceCategories.filter(cat => cat.is_active),
                message: 'Categories retrieved successfully'
            });
        }, 100); // Simulate network delay
    });
};

export const getServicePackages = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                success: true,
                data: servicePackages.filter(pkg => pkg.is_active),
                message: 'Packages retrieved successfully'
            });
        }, 150);
    });
};

export const getPackagesByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const packages = servicePackages.filter(pkg => 
                pkg.is_active && pkg.category_id === parseInt(categoryId)
            );
            resolve({
                success: true,
                data: packages,
                message: 'Packages retrieved successfully'
            });
        }, 120);
    });
};

export const getCategoryBySlug = (slug) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const category = serviceCategories.find(cat => 
                cat.is_active && cat.slug === slug
            );
            resolve({
                success: !!category,
                data: category,
                message: category ? 'Category found' : 'Category not found'
            });
        }, 80);
    });
};

export const getCategoryById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const category = serviceCategories.find(cat => 
                cat.is_active && cat.id === parseInt(id)
            );
            resolve({
                success: !!category,
                data: category,
                message: category ? 'Category found' : 'Category not found'
            });
        }, 80);
    });
};

// Synchronous versions for immediate data access
export const getCategoriesSync = () => {
    return serviceCategories.filter(cat => cat.is_active);
};

export const getPackagesSync = () => {
    return servicePackages.filter(pkg => pkg.is_active);
};

export const getPackagesByCategorySync = (categoryId) => {
    return servicePackages.filter(pkg => 
        pkg.is_active && pkg.category_id === parseInt(categoryId)
    );
};

export const getCategoryBySlugSync = (slug) => {
    return serviceCategories.find(cat => cat.is_active && cat.slug === slug);
};
