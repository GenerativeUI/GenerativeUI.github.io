// Smooth scrolling for navigation links
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Style selector functionality
document.addEventListener('DOMContentLoaded', function() {
    const styleButtons = document.querySelectorAll('.style-btn');
    const performanceBars = document.querySelectorAll('.bar-fill');
    const performanceScores = document.querySelectorAll('.performance-score');
    
    // Performance data for different art styles
    const styleData = {
        minimalist: {
            redbubble: 85,
            etsy: 92,
            society6: 78
        },
        vintage: {
            redbubble: 72,
            etsy: 88,
            society6: 85
        },
        abstract: {
            redbubble: 68,
            etsy: 75,
            society6: 82
        },
        illustration: {
            redbubble: 90,
            etsy: 85,
            society6: 70
        }
    };
    
    styleButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            styleButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get the selected style
            const selectedStyle = this.getAttribute('data-style');
            const data = styleData[selectedStyle];
            
            // Update performance bars and scores
            if (data) {
                const platforms = ['redbubble', 'etsy', 'society6'];
                platforms.forEach((platform, index) => {
                    const score = data[platform];
                    const bar = performanceBars[index];
                    const scoreElement = performanceScores[index];
                    
                    if (bar && scoreElement) {
                        // Animate the bar
                        setTimeout(() => {
                            bar.style.width = score + '%';
                            scoreElement.textContent = score + '%';
                        }, 100);
                    }
                });
            }
        });
    });
    
    // Initialize with minimalist style
    const initialButton = document.querySelector('.style-btn[data-style="minimalist"]');
    if (initialButton) {
        initialButton.click();
    }
});

// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');
    
    // Update active nav link on scroll
    window.addEventListener('scroll', function() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });
    
    // Mobile navigation toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }
});

// Floating cards animation enhancement
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.animationPlayState = 'paused';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.animationPlayState = 'running';
        });
    });
});

// Removed intersection observer animations for normal scrolling

// Counter animation for stats
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    function updateCounter() {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    }
    
    updateCounter();
}

// Initialize counter animations when stats section is visible
document.addEventListener('DOMContentLoaded', function() {
    const statsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statNumbers = entry.target.querySelectorAll('.stat-card h3');
                statNumbers.forEach(stat => {
                    const text = stat.textContent;
                    const number = parseInt(text.replace(/[^\d]/g, ''));
                    if (number) {
                        stat.textContent = text.replace(number, '0');
                        setTimeout(() => {
                            animateCounter(stat, number);
                        }, 500);
                    }
                });
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    const statsSection = document.querySelector('.stats-section');
    if (statsSection) {
        statsObserver.observe(statsSection);
    }
});

// Platform card hover effects
document.addEventListener('DOMContentLoaded', function() {
    const platformItems = document.querySelectorAll('.platform-item');
    
    platformItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(10px)';
            this.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
            this.style.boxShadow = 'none';
        });
    });
});

// Removed process step animations for normal scrolling

// Add click handlers for CTA buttons
document.addEventListener('DOMContentLoaded', function() {
    const ctaButtons = document.querySelectorAll('.cta-button, .primary-btn');
    
    ctaButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Add ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
});

// Add ripple effect CSS
const style = document.createElement('style');
style.textContent = `
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        pointer-events: none;
    }
    
    
    .cta-button, .primary-btn {
        position: relative;
        overflow: hidden;
    }
`;
document.head.appendChild(style);

// Removed parallax effect for normal scrolling

// Add loading animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

// Add loading styles
const loadingStyle = document.createElement('style');
loadingStyle.textContent = `
    body {
        opacity: 0;
        transition: opacity 0.5s ease;
    }
    
    body.loaded {
        opacity: 1;
    }
`;
document.head.appendChild(loadingStyle);

// Set dynamic year in footer
document.addEventListener('DOMContentLoaded', function() {
    const currentYear = new Date().getFullYear();
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = currentYear;
    }
});

// FAQ Toggle Function
function toggleFAQ(element) {
    const faqItem = element.parentElement;
    const faqAnswer = faqItem.querySelector('.faq-answer');
    const faqIcon = element.querySelector('.faq-icon');
    
    // Toggle the active class
    faqItem.classList.toggle('active');
    
    if (faqItem.classList.contains('active')) {
        // Expand
        faqAnswer.style.maxHeight = faqAnswer.scrollHeight + 'px';
        faqIcon.style.transform = 'rotate(180deg)';
    } else {
        // Collapse
        faqAnswer.style.maxHeight = '0px';
        faqIcon.style.transform = 'rotate(0deg)';
    }
}
