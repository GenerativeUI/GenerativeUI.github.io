// Global variables
let currentSideLength = 2;
let currentUnit = 'in';
let practiceStats = {
    correct: 0,
    total: 0
};

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    initializePage();
    setupEventListeners();
    updateHeroDisplay();
    animateOnScroll();
});

// Initialize page elements
function initializePage() {
    // Set dynamic year in footer
    const currentYear = new Date().getFullYear();
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
        yearElement.textContent = currentYear;
    }
    
    // Initialize practice stats
    updatePracticeStats();
    
    // Initialize FAQ items
    initializeFAQs();
}

// Setup event listeners
function setupEventListeners() {
    // Navigation smooth scrolling
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            scrollToSection(targetId);
            closeMobileMenu(); // Close mobile menu when link is clicked
        });
    });
    
    // Hero CTA buttons
    document.querySelector('.btn-primary').addEventListener('click', function() {
        scrollToSection('practice');
    });
    
    document.querySelector('.btn-secondary').addEventListener('click', function() {
        scrollToSection('introduction');
    });
}

// Smooth scrolling to sections
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        const navbarHeight = 70;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
        
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
}

// Update hero display
function updateHeroDisplay() {
    const sideLength = currentSideLength;
    const unit = currentUnit;
    const surfaceArea = calculateSurfaceArea(sideLength);
    
    document.getElementById('heroSideLength').textContent = `${sideLength} ${unit}`;
    document.getElementById('heroSurfaceArea').textContent = `${surfaceArea} ${unit}²`;
    
    // Update hero cube animation
    animateHeroCube();
}

// Calculate surface area
function calculateSurfaceArea(sideLength) {
    return 6 * Math.pow(sideLength, 2);
}

// Animate hero cube
function animateHeroCube() {
    const cube = document.getElementById('heroCube');
    cube.style.animation = 'none';
    cube.offsetHeight; // Trigger reflow
    cube.style.animation = 'rotateCube 20s infinite linear';
}


// Practice problem checking
function checkAnswer(problemNumber, correctAnswer) {
    const input = document.getElementById(`answer${problemNumber}`);
    const feedback = document.getElementById(`feedback${problemNumber}`);
    const userAnswer = parseFloat(input.value);
    
    if (isNaN(userAnswer)) {
        showFeedback(feedback, 'Please enter a valid number.', 'incorrect');
        return;
    }
    
    practiceStats.total++;
    
    if (Math.abs(userAnswer - correctAnswer) < 0.01) {
        practiceStats.correct++;
        showFeedback(feedback, 'Correct! Well done! 🎉', 'correct');
        input.style.borderColor = '#10b981';
    } else {
        showFeedback(feedback, `Incorrect. The correct answer is ${correctAnswer}.`, 'incorrect');
        input.style.borderColor = '#ef4444';
    }
    
    updatePracticeStats();
}

// Show feedback for practice problems
function showFeedback(feedbackElement, message, type) {
    feedbackElement.textContent = message;
    feedbackElement.className = `problem-feedback ${type}`;
    feedbackElement.style.display = 'block';
    
    // Auto-hide after 5 seconds
    setTimeout(() => {
        feedbackElement.style.display = 'none';
    }, 5000);
}

// Update practice statistics
function updatePracticeStats() {
    document.getElementById('correctAnswers').textContent = practiceStats.correct;
    document.getElementById('totalAttempts').textContent = practiceStats.total;
    
    const accuracy = practiceStats.total > 0 ? 
        Math.round((practiceStats.correct / practiceStats.total) * 100) : 0;
    document.getElementById('accuracy').textContent = `${accuracy}%`;
}

// FAQ functionality
function initializeFAQs() {
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => toggleFAQ(item));
    });
}

function toggleFAQ(faqItem) {
    const isActive = faqItem.classList.contains('active');
    
    // Close all FAQ items
    document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Open clicked item if it wasn't active
    if (!isActive) {
        faqItem.classList.add('active');
    }
}

// Scroll animations
function animateOnScroll() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.content-card, .application-card, .practice-problem, .formula-card, .step-by-step, .visual-calculation');
    animateElements.forEach(el => observer.observe(el));
}

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 4px 6px -1px rgb(0 0 0 / 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Interactive cube rotation on mouse move (only within hero section)
document.addEventListener('mousemove', function(e) {
    const heroSection = document.querySelector('.hero');
    const heroCube = document.getElementById('heroCube');
    
    if (heroSection && heroCube) {
        const heroRect = heroSection.getBoundingClientRect();
        const isInHero = e.clientY >= heroRect.top && e.clientY <= heroRect.bottom;
        
        if (isInHero) {
            const rect = heroCube.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            
            const deltaX = (e.clientX - centerX) / 15;
            const deltaY = (e.clientY - centerY) / 15;
            
            heroCube.style.transform = `rotateX(${-deltaY}deg) rotateY(${deltaX}deg)`;
        }
    }
});

// Reset cube rotation when mouse leaves hero section
document.addEventListener('mouseleave', function() {
    const heroCube = document.getElementById('heroCube');
    if (heroCube) {
        heroCube.style.transform = 'rotateX(0deg) rotateY(0deg)';
    }
});

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Navigation shortcuts
    if (e.altKey) {
        switch(e.key) {
            case '1':
                e.preventDefault();
                scrollToSection('introduction');
                break;
            case '2':
                e.preventDefault();
                scrollToSection('formula');
                break;
            case '3':
                e.preventDefault();
                scrollToSection('practice');
                break;
            case '4':
                e.preventDefault();
                scrollToSection('applications');
                break;
        }
    }
});

// Utility functions
function formatNumber(num, decimals = 2) {
    return parseFloat(num.toFixed(decimals));
}

function getUnitSymbol(unit) {
    const symbols = {
        'in': 'in',
        'cm': 'cm',
        'ft': 'ft',
        'm': 'm'
    };
    return symbols[unit] || unit;
}

// Performance optimization: Debounce scroll events
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

// Apply debounced scroll handler
window.addEventListener('scroll', debounce(function() {
    // Scroll-based animations and effects
    // Removed parallax effect to prevent hero section interference
}, 10));

// Initialize tooltips for interactive elements
function initializeTooltips() {
    const tooltipElements = document.querySelectorAll('[data-tooltip]');
    tooltipElements.forEach(element => {
        element.addEventListener('mouseenter', showTooltip);
        element.addEventListener('mouseleave', hideTooltip);
    });
}

function showTooltip(e) {
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltip.textContent = e.target.getAttribute('data-tooltip');
    tooltip.style.cssText = `
        position: absolute;
        background: #1f2937;
        color: white;
        padding: 0.5rem 1rem;
        border-radius: 6px;
        font-size: 0.875rem;
        z-index: 1000;
        pointer-events: none;
        opacity: 0;
        transition: opacity 0.3s ease;
    `;
    
    document.body.appendChild(tooltip);
    
    const rect = e.target.getBoundingClientRect();
    tooltip.style.left = rect.left + rect.width / 2 - tooltip.offsetWidth / 2 + 'px';
    tooltip.style.top = rect.top - tooltip.offsetHeight - 10 + 'px';
    
    setTimeout(() => tooltip.style.opacity = '1', 10);
}

function hideTooltip() {
    const tooltip = document.querySelector('.tooltip');
    if (tooltip) {
        tooltip.style.opacity = '0';
        setTimeout(() => tooltip.remove(), 300);
    }
}

// Initialize tooltips when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeTooltips);

// Mobile menu toggle
function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    const hamburger = document.querySelector('.hamburger');
    
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
}

// Close mobile menu when clicking on a link
function closeMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    const hamburger = document.querySelector('.hamburger');
    
    navMenu.classList.remove('active');
    hamburger.classList.remove('active');
}

// Close mobile menu when clicking outside
document.addEventListener('click', function(e) {
    const navMenu = document.querySelector('.nav-menu');
    const hamburger = document.querySelector('.hamburger');
    const navbar = document.querySelector('.navbar');
    
    if (!navbar.contains(e.target) && navMenu.classList.contains('active')) {
        closeMobileMenu();
    }
});

// Export functions for global access
window.scrollToSection = scrollToSection;
window.checkAnswer = checkAnswer;
window.toggleFAQ = toggleFAQ;
window.toggleMobileMenu = toggleMobileMenu;