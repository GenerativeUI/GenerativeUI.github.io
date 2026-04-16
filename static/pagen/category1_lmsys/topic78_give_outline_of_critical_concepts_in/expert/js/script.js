// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initNavigation();
    initScrollAnimations();
    // initCounters(); // Removed - no longer needed
    initFAQ();
    initCalculators();
    initSmoothScrolling();
    initMobileMenu();
    initDynamicYear();
});

// Navigation functionality
function initNavigation() {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 4px 6px -1px rgb(0 0 0 / 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });
    
    // Active link highlighting
    window.addEventListener('scroll', function() {
        let current = '';
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Scroll animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fadeInUp');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.overview-card, .concept-card, .step-item, .tip-category, .scenario-item');
    animateElements.forEach(el => {
        observer.observe(el);
    });
}

// Counter animations (removed - no longer needed)

// FAQ functionality
function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', function() {
            const isActive = item.classList.contains('active');
            
            // Close all FAQ items
            faqItems.forEach(faqItem => {
                faqItem.classList.remove('active');
            });
            
            // Open clicked item if it wasn't active
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
}

// Calculator functionality
function initCalculators() {
    // Budget calculator
    const monthlyIncomeInput = document.getElementById('monthly-income');
    if (monthlyIncomeInput) {
        monthlyIncomeInput.addEventListener('input', updateBudgetBreakdown);
    }
    
    // Emergency fund calculator
    const monthlyExpensesInput = document.getElementById('monthly-expenses');
    if (monthlyExpensesInput) {
        monthlyExpensesInput.addEventListener('input', updateEmergencyTarget);
    }
}

function updateBudgetBreakdown() {
    const income = parseFloat(document.getElementById('monthly-income').value) || 0;
    
    const needsAmount = document.getElementById('needs-amount');
    const wantsAmount = document.getElementById('wants-amount');
    const savingsAmount = document.getElementById('savings-amount');
    
    if (needsAmount && wantsAmount && savingsAmount) {
        needsAmount.textContent = `$${(income * 0.5).toFixed(0)}`;
        wantsAmount.textContent = `$${(income * 0.3).toFixed(0)}`;
        savingsAmount.textContent = `$${(income * 0.2).toFixed(0)}`;
    }
}

function updateEmergencyTarget() {
    const expenses = parseFloat(document.getElementById('monthly-expenses').value) || 0;
    const targetElement = document.getElementById('emergency-target');
    
    if (targetElement) {
        const target = expenses * 6; // 6 months of expenses
        targetElement.textContent = `$${target.toFixed(0)}`;
    }
}

// Smooth scrolling for navigation links
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Mobile menu functionality
function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    }
}

// Utility function for scrolling to sections
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const offsetTop = section.offsetTop - 70;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

// Keyboard navigation support
document.addEventListener('keydown', function(e) {
    // ESC key closes mobile menu
    if (e.key === 'Escape') {
        const navMenu = document.querySelector('.nav-menu');
        const hamburger = document.querySelector('.hamburger');
        if (navMenu && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        }
    }
});





// Error handling for missing elements
function safeQuerySelector(selector) {
    try {
        return document.querySelector(selector);
    } catch (error) {
        console.warn(`Element not found: ${selector}`);
        return null;
    }
}

// Console welcome message
console.log(`
🎉 Welcome to the Personal Finance Guide!
📊 This interactive guide will help you master critical financial concepts.
💡 Use the navigation to explore different sections.
🔧 Built with modern web technologies for the best user experience.
`);

// Dynamic year functionality
function initDynamicYear() {
    const currentYearElement = document.getElementById('current-year');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }
}

// Export functions for global access
window.scrollToSection = scrollToSection;