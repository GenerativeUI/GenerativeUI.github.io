// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all interactive features
    initNavigation();
    initScrollAnimations();
    initInteractiveDemo();
    initFactorCards();
    initSmoothScrolling();
    initAnswerAnimation();
    initHeroAnimations();
    initScrollToSection();
    initFooterYear();
});

// Navigation functionality
function initNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Mobile menu toggle
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        }
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
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                
                // Animate progress bars and charts
                if (entry.target.classList.contains('meter-fill')) {
                    animateProgressBar(entry.target);
                }
                if (entry.target.classList.contains('chart-fill')) {
                    animateChart(entry.target);
                }
                if (entry.target.classList.contains('comparison-item')) {
                    animateComparisonBar(entry.target);
                }
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.perception-card, .factor-card, .application-card, .chart-fill, .comparison-item');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });


    // Observe elements for animation
    const animatedElementsMeterFill = document.querySelectorAll('.meter-fill');
    animatedElementsMeterFill.forEach(el => {
        el.style.opacity = '0';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Interactive demo functionality (removed - no longer needed)
function initInteractiveDemo() {
    // Demo functionality removed
}

// Factor cards interaction
function initFactorCards() {
    const factorCards = document.querySelectorAll('.factor-card');
    
    factorCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
        
        // Add click effect
        card.addEventListener('click', function() {
            this.style.transform = 'translateY(-5px) scale(0.98)';
            setTimeout(() => {
                this.style.transform = 'translateY(-10px) scale(1.02)';
            }, 150);
        });
    });
}

// Smooth scrolling for navigation links
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-link');
    
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

// Answer animation
function initAnswerAnimation() {
    const answerWord = document.getElementById('answerWord');
    const possibleAnswers = ['Equal', 'Same', 'Tied', 'Identical'];
    let currentIndex = 0;
    
    // Animate the answer word
    setInterval(() => {
        answerWord.style.transform = 'scale(0.8)';
        answerWord.style.opacity = '0.7';
        
        setTimeout(() => {
            currentIndex = (currentIndex + 1) % possibleAnswers.length;
            answerWord.textContent = possibleAnswers[currentIndex];
            answerWord.style.transform = 'scale(1.1)';
            answerWord.style.opacity = '1';
            
            setTimeout(() => {
                answerWord.style.transform = 'scale(1)';
            }, 200);
        }, 300);
    }, 5000);
}

// Progress bar animation
function animateProgressBar(element) {
    // Get the parent meter bar to determine the target width
    const meterBar = element.closest('.meter-bar');
    let targetWidth = '0%';
    
    if (meterBar.classList.contains('slow')) {
        targetWidth = '20%';
    } else if (meterBar.classList.contains('fast')) {
        targetWidth = '80%';
    }
    
    // Reset to 0 and animate to target
    element.style.width = '0%';
    element.style.background = 'transparent';
    setTimeout(() => {
        element.style.width = targetWidth;
        // Restore the proper background
        if (meterBar.classList.contains('slow')) {
            element.style.background = '#e74c3c';
        } else if (meterBar.classList.contains('fast')) {
            element.style.background = '#27ae60';
        }
    }, 200);
}

// Chart animation
function animateChart(element) {
    const height = element.style.height;
    element.style.height = '0%';
    setTimeout(() => {
        element.style.height = height;
    }, 100);
}

// Comparison bar animation
function animateComparisonBar(element) {
    const fill = element.querySelector('.fill');
    if (fill) {
        const width = fill.style.width;
        fill.style.width = '0%';
        setTimeout(() => {
            fill.style.width = width;
        }, 200);
    }
}

// Parallax effect for hero section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const heroVisual = document.querySelector('.hero-visual');
    
    if (heroVisual) {
        const rate = scrolled * -0.5;
        heroVisual.style.transform = `translateY(${rate}px)`;
    }
});

// Dynamic stats counter
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
        const target = parseInt(counter.textContent);
        const increment = target / 50;
        let current = 0;
        
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                counter.textContent = Math.ceil(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        };
        
        updateCounter();
    });
}

// Intersection Observer for counter animation
const counterObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
            counterObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const heroStats = document.querySelector('.hero-stats');
if (heroStats) {
    counterObserver.observe(heroStats);
}

// Add loading animation
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Add keyboard navigation support
document.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
        const focusedElement = document.activeElement;
        if (focusedElement.classList.contains('demo-btn')) {
            e.preventDefault();
            toggleDemo();
        }
    }
});

// Add touch support for mobile
let touchStartY = 0;
let touchEndY = 0;

document.addEventListener('touchstart', function(e) {
    touchStartY = e.changedTouches[0].screenY;
});

document.addEventListener('touchend', function(e) {
    touchEndY = e.changedTouches[0].screenY;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartY - touchEndY;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // Swipe up - could trigger demo
            const demoBtn = document.querySelector('.demo-btn');
            if (demoBtn && isElementInViewport(demoBtn)) {
                toggleDemo();
            }
        }
    }
}

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Add performance optimization
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

// Optimize scroll events
const optimizedScrollHandler = debounce(function() {
    // Scroll-based animations and effects
    const scrolled = window.pageYOffset;
    const heroVisual = document.querySelector('.hero-visual');
    
    if (heroVisual) {
        const rate = scrolled * -0.3;
        heroVisual.style.transform = `translateY(${rate}px)`;
    }
}, 10);

window.addEventListener('scroll', optimizedScrollHandler);

// Add error handling
window.addEventListener('error', function(e) {
    console.log('An error occurred:', e.error);
});

// Add accessibility improvements
document.addEventListener('keydown', function(e) {
    // Skip to main content with Tab
    if (e.key === 'Tab' && !e.shiftKey) {
        const skipLink = document.querySelector('.skip-link');
        if (skipLink && document.activeElement === document.body) {
            skipLink.focus();
        }
    }
});

// Hero animations
function initHeroAnimations() {
    const heroCar = document.getElementById('heroCar');
    const heroBike = document.getElementById('heroBike');
    
    // Add click interactions to vehicles
    if (heroCar) {
        heroCar.addEventListener('click', function() {
            this.style.transform = 'scale(1.1) rotate(5deg)';
            setTimeout(() => {
                this.style.transform = 'scale(1) rotate(0deg)';
            }, 300);
        });
    }
    
    if (heroBike) {
        heroBike.addEventListener('click', function() {
            this.style.transform = 'scale(1.1) rotate(-5deg)';
            setTimeout(() => {
                this.style.transform = 'scale(1) rotate(0deg)';
            }, 300);
        });
    }
    
    // Add hover effects to stat cards
    const statCards = document.querySelectorAll('.stat-card');
    statCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.05)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Add particle interaction
    const heroParticles = document.querySelector('.hero-particles');
    if (heroParticles) {
        heroParticles.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width;
            const y = (e.clientY - rect.top) / rect.height;
            
            this.style.backgroundPosition = `${x * 100}% ${y * 100}%`;
        });
    }
}

// Scroll to section function
function initScrollToSection() {
    window.scrollToSection = function(sectionId) {
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 70;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    };
}

// Enhanced answer animation
function initAnswerAnimation() {
    const answerWord = document.getElementById('answerWord');
    const possibleAnswers = ['Equal', 'Same', 'Tied', 'Identical', 'Equivalent', 'Matching'];
    let currentIndex = 0;
    
    // Animate the answer word with more dynamic effects
    setInterval(() => {
        if (answerWord) {
            answerWord.style.transform = 'scale(0.8) rotateY(90deg)';
            answerWord.style.opacity = '0.7';
            
            setTimeout(() => {
                currentIndex = (currentIndex + 1) % possibleAnswers.length;
                answerWord.textContent = possibleAnswers[currentIndex];
                answerWord.style.transform = 'scale(1.1) rotateY(0deg)';
                answerWord.style.opacity = '1';
                
                setTimeout(() => {
                    answerWord.style.transform = 'scale(1) rotateY(0deg)';
                }, 200);
            }, 300);
        }
    }, 4000);
}

// Initialize footer year
function initFooterYear() {
    const currentYearElement = document.getElementById('currentYear');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }
}
// Add reduced motion support
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    // Disable animations for users who prefer reduced motion
    document.documentElement.style.setProperty('--animation-duration', '0s');
    document.documentElement.style.setProperty('--transition-duration', '0s');
}
