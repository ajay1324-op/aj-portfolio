// Portfolio functionality
document.addEventListener('DOMContentLoaded', function() {
    
    // Portfolio data
    const portfolioData = [
        {
            id: 1,
            title: "E-Commerce Platform",
            description: "Modern e-commerce solution with React and Node.js",
            category: "web",
            tags: ["React", "Node.js", "MongoDB", "Stripe"],
            image: "https://pixabay.com/get/gbda9847222b598328a63cf09c18397feb81f02ae634ce8ea28c9257d149323cbdcc8f2c388cf4bb425f7f17892cd0f037bf12271447149742ac6dd9328943651_1280.jpg",
            demoUrl: "https://demo-ecommerce.com",
            githubUrl: "https://github.com/username/ecommerce",
            details: {
                overview: "A full-featured e-commerce platform built with modern web technologies. Features include user authentication, product catalog, shopping cart, payment processing, and admin dashboard.",
                technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Stripe API", "JWT Authentication"],
                features: [
                    "Responsive design for all devices",
                    "Secure payment processing with Stripe",
                    "Real-time inventory management",
                    "User account management",
                    "Admin dashboard with analytics",
                    "Search and filtering functionality"
                ],
                challenges: "Implementing secure payment processing and managing complex state across multiple components.",
                duration: "3 months"
            }
        },
        {
            id: 2,
            title: "Task Management App",
            description: "Collaborative task management with real-time updates",
            category: "web",
            tags: ["Vue.js", "Firebase", "PWA"],
            image: "https://pixabay.com/get/g0058164fd23bba206c5dd234337e178f49601faf386a019c561cee65ab11fdc22200370a688e71ccb0a8b5b49171c85d_1280.jpg",
            demoUrl: "https://demo-taskapp.com",
            githubUrl: "https://github.com/username/taskapp",
            details: {
                overview: "A collaborative task management application with real-time synchronization, drag-and-drop functionality, and offline support.",
                technologies: ["Vue.js", "Vuex", "Firebase", "PWA", "Drag & Drop API"],
                features: [
                    "Real-time collaboration",
                    "Drag and drop task organization",
                    "Offline functionality",
                    "Push notifications",
                    "Team management",
                    "Progress tracking and analytics"
                ],
                challenges: "Implementing real-time synchronization and handling offline-online data sync.",
                duration: "2 months"
            }
        },
        {
            id: 3,
            title: "Weather Dashboard",
            description: "Beautiful weather app with location-based forecasts",
            category: "web",
            tags: ["JavaScript", "API", "Charts"],
            image: "https://pixabay.com/get/g91eedb1460bd553b7eadd0f6f57f8884b1cdbd7296eea8885db4b7b67c875c17c83af506d0ba593803c18d61ad25a4b5bf3d4b2d1cdd8ac454e3cdf8c963515d_1280.jpg",
            demoUrl: "https://demo-weather.com",
            githubUrl: "https://github.com/username/weather",
            details: {
                overview: "A comprehensive weather dashboard featuring current conditions, 7-day forecasts, and interactive charts for weather data visualization.",
                technologies: ["Vanilla JavaScript", "OpenWeather API", "Chart.js", "Geolocation API"],
                features: [
                    "Current weather conditions",
                    "7-day weather forecast",
                    "Interactive weather charts",
                    "Location-based weather",
                    "Weather alerts and notifications",
                    "Historical weather data"
                ],
                challenges: "Handling different weather APIs and creating smooth data visualizations.",
                duration: "1 month"
            }
        },
        {
            id: 4,
            title: "Mobile Banking App",
            description: "Secure mobile banking interface with modern UX",
            category: "mobile",
            tags: ["React Native", "Redux", "Security"],
            image: "https://pixabay.com/get/ge1fa81a44efb9d7ba49c1bb27dc5a419204439d3fcdec1ea321248468c6a2e96b535bd08a3efc2dcfa89f576d832c3729f19570ee3d86d83d848dab12756e7bb_1280.jpg",
            demoUrl: "https://demo-banking.com",
            githubUrl: "https://github.com/username/banking",
            details: {
                overview: "A secure mobile banking application with biometric authentication, transaction history, and modern UI/UX design.",
                technologies: ["React Native", "Redux", "Biometric Auth", "Encrypted Storage"],
                features: [
                    "Biometric authentication",
                    "Account balance and history",
                    "Fund transfers",
                    "Bill payments",
                    "Security notifications",
                    "ATM locator"
                ],
                challenges: "Implementing bank-level security measures while maintaining user experience.",
                duration: "4 months"
            }
        },
        {
            id: 5,
            title: "Brand Identity Design",
            description: "Complete brand identity for tech startup",
            category: "design",
            tags: ["Branding", "Logo", "UI/UX"],
            image: "https://pixabay.com/get/gaa85a3d1283325503881ff03c8f38d6e6dae94e3c724f8518c82524d4c7bd52147e62c250d96e207ca9b8407abdc9849795f9338f1040c92e5d2e791a9b3cde4_1280.jpg",
            demoUrl: "https://demo-branding.com",
            githubUrl: null,
            details: {
                overview: "Complete brand identity design for a technology startup, including logo design, color palette, typography, and brand guidelines.",
                technologies: ["Adobe Illustrator", "Adobe Photoshop", "Figma", "Brand Strategy"],
                features: [
                    "Logo design and variations",
                    "Color palette and typography",
                    "Business card and stationery",
                    "Website design mockups",
                    "Social media templates",
                    "Brand guidelines document"
                ],
                challenges: "Creating a unique identity that stands out in the competitive tech industry.",
                duration: "6 weeks"
            }
        },
        {
            id: 6,
            title: "Portfolio Website",
            description: "Responsive portfolio website for creative agency",
            category: "design",
            tags: ["Web Design", "Responsive", "Animation"],
            image: "https://pixabay.com/get/gf6b72ddc1cfa751caf48e26de156339ac0c4ae201f3588fece71ec2a13e277941b6b7250931cab5e21519eed9030e3f19cddcff16364e2be0827a6590cc63253_1280.jpg",
            demoUrl: "https://demo-agency.com",
            githubUrl: "https://github.com/username/agency",
            details: {
                overview: "Modern, responsive portfolio website for a creative agency with smooth animations and interactive elements.",
                technologies: ["HTML5", "CSS3", "JavaScript", "GSAP", "Responsive Design"],
                features: [
                    "Smooth scroll animations",
                    "Interactive project gallery",
                    "Responsive design",
                    "Contact form integration",
                    "SEO optimization",
                    "Performance optimization"
                ],
                challenges: "Balancing visual appeal with performance and accessibility.",
                duration: "5 weeks"
            }
        }
    ];
    
    // Get DOM elements
    const portfolioGrid = document.getElementById('portfolio-grid');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const modal = document.getElementById('portfolio-modal');
    const modalBody = document.getElementById('modal-body');
    const modalClose = document.querySelector('.modal-close');
    
    // Initialize portfolio
    function initPortfolio() {
        renderPortfolio(portfolioData);
        setupFilters();
        setupModal();
    }
    
    // Render portfolio items
    function renderPortfolio(items) {
        if (!portfolioGrid) return;
        
        portfolioGrid.innerHTML = '';
        
        items.forEach((item, index) => {
            const portfolioItem = createPortfolioItem(item, index);
            portfolioGrid.appendChild(portfolioItem);
        });
        
        // Add animation delay for staggered effect
        const items_elements = portfolioGrid.querySelectorAll('.portfolio-item');
        items_elements.forEach((item, index) => {
            item.style.animationDelay = `${index * 0.1}s`;
            item.classList.add('fade-in');
        });
    }
    
    // Create portfolio item element
    function createPortfolioItem(item, index) {
        const portfolioItem = document.createElement('div');
        portfolioItem.className = `portfolio-item ${item.category}`;
        portfolioItem.setAttribute('data-category', item.category);
        portfolioItem.setAttribute('data-id', item.id);
        
        portfolioItem.innerHTML = `
            <div class="portfolio-image" style="background-image: url('${item.image}')">
                <div class="portfolio-overlay">
                    <i class="fas fa-eye"></i>
                </div>
            </div>
            <div class="portfolio-content">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
                <div class="portfolio-tags">
                    ${item.tags.map(tag => `<span class="portfolio-tag">${tag}</span>`).join('')}
                </div>
            </div>
        `;
        
        // Add click event for modal
        portfolioItem.addEventListener('click', () => {
            showPortfolioModal(item);
        });
        
        return portfolioItem;
    }
    
    // Setup filter functionality
    function setupFilters() {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                const filter = this.getAttribute('data-filter');
                
                // Update active button
                filterButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                
                // Filter portfolio items
                filterPortfolio(filter);
            });
        });
    }
    
    // Filter portfolio items
    function filterPortfolio(filter) {
        let filteredData;
        
        if (filter === 'all') {
            filteredData = portfolioData;
        } else {
            filteredData = portfolioData.filter(item => item.category === filter);
        }
        
        // Add exit animation
        const currentItems = portfolioGrid.querySelectorAll('.portfolio-item');
        currentItems.forEach((item, index) => {
            item.style.animationDelay = `${index * 0.05}s`;
            item.classList.add('fade-out');
        });
        
        // Render filtered items after animation
        setTimeout(() => {
            renderPortfolio(filteredData);
        }, 300);
    }
    
    // Setup modal functionality
    function setupModal() {
        if (!modal || !modalClose) return;
        
        // Close modal when clicking X
        modalClose.addEventListener('click', closeModal);
        
        // Close modal when clicking outside
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModal();
            }
        });
        
        // Close modal with Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && modal.style.display === 'block') {
                closeModal();
            }
        });
    }
    
    // Show portfolio modal
    function showPortfolioModal(item) {
        if (!modal || !modalBody) return;
        
        modalBody.innerHTML = createModalContent(item);
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        
        // Add fade-in animation
        setTimeout(() => {
            modal.classList.add('fade-in');
        }, 10);
    }
    
    // Close modal
    function closeModal() {
        if (!modal) return;
        
        modal.classList.remove('fade-in');
        setTimeout(() => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }, 300);
    }
    
    // Create modal content
    function createModalContent(item) {
        return `
            <div class="modal-header">
                <img src="${item.image}" alt="${item.title}" style="width: 100%; height: 300px; object-fit: cover; border-radius: 8px; margin-bottom: 20px;">
                <h2 style="font-size: 28px; margin-bottom: 10px; color: #333;">${item.title}</h2>
                <p style="font-size: 16px; color: #666; margin-bottom: 20px;">${item.description}</p>
                <div style="display: flex; gap: 10px; margin-bottom: 30px; flex-wrap: wrap;">
                    ${item.tags.map(tag => `<span class="portfolio-tag">${tag}</span>`).join('')}
                </div>
            </div>
            
            <div class="modal-details">
                <div style="margin-bottom: 30px;">
                    <h3 style="font-size: 20px; margin-bottom: 15px; color: #333;">Project Overview</h3>
                    <p style="line-height: 1.6; color: #555;">${item.details.overview}</p>
                </div>
                
                <div style="margin-bottom: 30px;">
                    <h3 style="font-size: 20px; margin-bottom: 15px; color: #333;">Technologies Used</h3>
                    <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                        ${item.details.technologies.map(tech => `
                            <span style="background: rgba(102, 126, 234, 0.1); color: #667eea; padding: 5px 12px; border-radius: 15px; font-size: 13px; font-weight: 500;">${tech}</span>
                        `).join('')}
                    </div>
                </div>
                
                <div style="margin-bottom: 30px;">
                    <h3 style="font-size: 20px; margin-bottom: 15px; color: #333;">Key Features</h3>
                    <ul style="list-style: none; padding: 0;">
                        ${item.details.features.map(feature => `
                            <li style="padding: 8px 0; border-bottom: 1px solid #eee; color: #555;">
                                <i class="fas fa-check" style="color: #667eea; margin-right: 10px;"></i>
                                ${feature}
                            </li>
                        `).join('')}
                    </ul>
                </div>
                
                <div style="margin-bottom: 30px;">
                    <h3 style="font-size: 20px; margin-bottom: 15px; color: #333;">Challenges & Solutions</h3>
                    <p style="line-height: 1.6; color: #555;">${item.details.challenges}</p>
                </div>
                
                <div style="margin-bottom: 30px;">
                    <h3 style="font-size: 20px; margin-bottom: 15px; color: #333;">Project Duration</h3>
                    <p style="color: #667eea; font-weight: 500;">${item.details.duration}</p>
                </div>
                
                <div style="display: flex; gap: 15px; justify-content: center; margin-top: 30px;">
                    ${item.demoUrl ? `<a href="${item.demoUrl}" target="_blank" class="btn btn-primary">
                        <i class="fas fa-external-link-alt"></i> Live Demo
                    </a>` : ''}
                    ${item.githubUrl ? `<a href="${item.githubUrl}" target="_blank" class="btn btn-secondary">
                        <i class="fab fa-github"></i> View Code
                    </a>` : ''}
                </div>
            </div>
        `;
    }
    
    // Initialize portfolio when DOM is loaded
    initPortfolio();
    
    // Add CSS for fade-out animation
    const style = document.createElement('style');
    style.textContent = `
        .fade-out {
            opacity: 0;
            transform: translateY(20px);
        }
        
        .portfolio-item {
            transition: all 0.3s ease;
        }
        
        .modal.fade-in {
            opacity: 1;
        }
        
        .modal {
            opacity: 0;
            transition: opacity 0.3s ease;
        }
        
        @media (max-width: 768px) {
            .modal-details {
                padding: 0 10px;
            }
            
            .modal-header h2 {
                font-size: 24px !important;
            }
            
            .modal-details h3 {
                font-size: 18px !important;
            }
        }
    `;
    document.head.appendChild(style);
    
    // Lazy loading for portfolio images
    function setupLazyLoading() {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const portfolioImage = entry.target;
                    const bgImage = portfolioImage.style.backgroundImage;
                    
                    if (bgImage) {
                        const img = new Image();
                        img.onload = function() {
                            portfolioImage.classList.add('loaded');
                        };
                        img.src = bgImage.slice(5, -2); // Remove url(" and ")
                    }
                    
                    observer.unobserve(portfolioImage);
                }
            });
        });
        
        document.querySelectorAll('.portfolio-image').forEach(img => {
            imageObserver.observe(img);
        });
    }
    
    // Initialize lazy loading after portfolio is rendered
    setTimeout(setupLazyLoading, 100);
});

// Portfolio utility functions
const PortfolioUtils = {
    // Sort portfolio items
    sortPortfolio: function(items, sortBy = 'title') {
        return items.sort((a, b) => {
            if (sortBy === 'title') {
                return a.title.localeCompare(b.title);
            } else if (sortBy === 'category') {
                return a.category.localeCompare(b.category);
            }
            return 0;
        });
    },
    
    // Search portfolio items
    searchPortfolio: function(items, query) {
        const searchTerm = query.toLowerCase();
        return items.filter(item => 
            item.title.toLowerCase().includes(searchTerm) ||
            item.description.toLowerCase().includes(searchTerm) ||
            item.tags.some(tag => tag.toLowerCase().includes(searchTerm))
        );
    },
    
    // Get items by category
    getItemsByCategory: function(items, category) {
        return items.filter(item => item.category === category);
    }
};

// Export for global use
window.PortfolioUtils = PortfolioUtils;
