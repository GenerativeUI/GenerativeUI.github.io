// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-menu a');
const toggleBtns = document.querySelectorAll('.toggle-btn');
const documentCards = document.querySelectorAll('.document-card');
const sliderBtns = document.querySelectorAll('.slider-btn');
const sliderDots = document.querySelectorAll('.dot');
const comparisonTrack = document.querySelector('.comparison-track');
const timelineSteps = document.querySelectorAll('.timeline-step');
const faqItems = document.querySelectorAll('.faq-item');
// State variables
let currentSlide = 0;

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    setupEventListeners();
    setupScrollAnimations();
    setupIntersectionObserver();
});

function initializeApp() {
    // Set dynamic year in footer
    const currentYearElement = document.getElementById('current-year');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }
    
    // Initialize timeline
    initializeTimeline();
    
    // Initialize document toggle
    initializeDocumentToggle();
}

function setupEventListeners() {
    // Mobile navigation
    hamburger.addEventListener('click', toggleMobileMenu);
    
    // Close mobile menu when clicking on links
    navLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });
    
    // Document toggle buttons
    toggleBtns.forEach(btn => {
        btn.addEventListener('click', handleDocumentToggle);
    });
    
    // Comparison section - no longer needs slider functionality
    
    // Timeline steps
    timelineSteps.forEach((step, index) => {
        step.addEventListener('click', () => highlightTimelineStep(index));
    });
    
    
    // FAQ items
    faqItems.forEach(item => {
        item.addEventListener('click', toggleFAQ);
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Navbar scroll effect
    window.addEventListener('scroll', handleNavbarScroll);
}

// Mobile Navigation
function toggleMobileMenu() {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
}

function closeMobileMenu() {
    navMenu.classList.remove('active');
    hamburger.classList.remove('active');
}

// Document Toggle
function initializeDocumentToggle() {
    // Hide all cards first
    documentCards.forEach(card => {
        card.classList.remove('active');
        card.style.display = 'none';
    });
    
    // Show and activate the license card
    const licenseCard = document.querySelector('.license-card');
    if (licenseCard) {
        licenseCard.style.display = 'flex';
        licenseCard.classList.add('active');
    }
    
    // Ensure license button is active
    toggleBtns.forEach(btn => btn.classList.remove('active'));
    const licenseBtn = document.querySelector('[data-document="license"]');
    if (licenseBtn) {
        licenseBtn.classList.add('active');
    }
}

function handleDocumentToggle(e) {
    const documentType = e.target.dataset.document;
    
    // Update active button
    toggleBtns.forEach(btn => btn.classList.remove('active'));
    e.target.classList.add('active');
    
    // Hide all cards first
    documentCards.forEach(card => {
        card.classList.remove('active');
        card.style.display = 'none';
    });
    
    // Show the target card
    const targetCard = document.querySelector(`.${documentType}-card`);
    if (targetCard) {
        targetCard.style.display = 'flex';
        // Small delay to ensure display change takes effect
        setTimeout(() => {
            targetCard.classList.add('active');
        }, 10);
    }
}

// Comparison section - now uses static side-by-side layout

// Timeline
function initializeTimeline() {
    timelineSteps.forEach((step, index) => {
        step.addEventListener('mouseenter', () => {
            step.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        step.addEventListener('mouseleave', () => {
            step.style.transform = 'translateY(0) scale(1)';
        });
    });
}

function highlightTimelineStep(stepIndex) {
    timelineSteps.forEach((step, index) => {
        if (index <= stepIndex) {
            step.style.borderColor = 'var(--primary-color)';
            step.style.boxShadow = 'var(--shadow-xl)';
        } else {
            step.style.borderColor = 'transparent';
            step.style.boxShadow = 'var(--shadow-md)';
        }
    });
}


// FAQ
function toggleFAQ(e) {
    const faqItem = e.target.closest('.faq-item');
    const isActive = faqItem.classList.contains('active');
    
    // Close all FAQ items
    faqItems.forEach(item => item.classList.remove('active'));
    
    // Open clicked item if it wasn't active
    if (!isActive) {
        faqItem.classList.add('active');
    }
}

// Scroll Animations
function setupScrollAnimations() {
    const animatedElements = document.querySelectorAll('.timeline-step, .comparison-item, .faq-item');
    
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
    });
}

function setupIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                entry.target.style.transition = 'all 0.6s ease';
            }
        });
    }, observerOptions);
    
    // Observe elements
    document.querySelectorAll('.timeline-step, .comparison-item, .faq-item').forEach(el => {
        observer.observe(el);
    });
}

// Navbar Scroll Effect
function handleNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = 'var(--shadow-lg)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
}

// Keyboard Navigation
document.addEventListener('keydown', function(e) {
    // Arrow keys for comparison slider
    if (e.key === 'ArrowLeft' && currentSlide > 0) {
        goToSlide(currentSlide - 1);
    } else if (e.key === 'ArrowRight' && currentSlide < 1) {
        goToSlide(currentSlide + 1);
    }
    
});

// Touch/Swipe Support for Mobile
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', function(e) {
    touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', function(e) {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const swipeDistance = touchEndX - touchStartX;
    
    if (Math.abs(swipeDistance) > swipeThreshold) {
        if (swipeDistance > 0 && currentSlide > 0) {
            // Swipe right - go to previous slide
            goToSlide(currentSlide - 1);
        } else if (swipeDistance < 0 && currentSlide < 1) {
            // Swipe left - go to next slide
            goToSlide(currentSlide + 1);
        }
    }
}

// Performance Optimization
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Debounced scroll handler
const debouncedScrollHandler = debounce(handleNavbarScroll, 10);
window.addEventListener('scroll', debouncedScrollHandler);

// Preload critical images
function preloadImages() {
    const imageUrls = [
        // Add any image URLs here if needed
    ];
    
    imageUrls.forEach(url => {
        const img = new Image();
        img.src = url;
    });
}

// Initialize preloading
preloadImages();

// Add loading states
function showLoadingState(element) {
    element.style.opacity = '0.5';
    element.style.pointerEvents = 'none';
}

function hideLoadingState(element) {
    element.style.opacity = '1';
    element.style.pointerEvents = 'auto';
}

// Error handling
window.addEventListener('error', function(e) {
    console.error('JavaScript error:', e.error);
    // You could show a user-friendly error message here
});

// Accessibility improvements
function setupAccessibility() {
    // Add ARIA labels
    const sliderButtons = document.querySelectorAll('.slider-btn');
    sliderButtons.forEach((btn, index) => {
        btn.setAttribute('aria-label', index === 0 ? 'Previous slide' : 'Next slide');
    });
    
    // Add keyboard navigation for FAQ
    faqItems.forEach(item => {
        item.setAttribute('tabindex', '0');
        item.setAttribute('role', 'button');
        item.setAttribute('aria-expanded', 'false');
        
        item.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleFAQ(e);
            }
        });
    });
}

// Initialize accessibility features
setupAccessibility();

// Analytics tracking (placeholder)
function trackEvent(eventName, eventData) {
    // Placeholder for analytics tracking
    console.log('Event tracked:', eventName, eventData);
}

// Track user interactions
document.addEventListener('click', function(e) {
    if (e.target.matches('.toggle-btn')) {
        trackEvent('document_toggle', {
            document_type: e.target.dataset.document
        });
    }
    
    if (e.target.matches('.slider-btn')) {
        trackEvent('slider_navigation', {
            direction: e.target.dataset.direction,
            current_slide: currentSlide
        });
    }
});

// Export functions for testing (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        goToSlide
    };
}