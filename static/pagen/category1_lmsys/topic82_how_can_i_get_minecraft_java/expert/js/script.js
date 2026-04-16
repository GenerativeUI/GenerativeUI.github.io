// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all interactive features
    initNavigation();
    initHeroAnimations();
    initSettingsControls();
    initChecklist();
    initFAQ();
    initScrollAnimations();
    initCopyButtons();
    initProgressTracking();
    initDynamicYear();
});

// Navigation functionality
function initNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');

    // Mobile menu toggle
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Smooth scrolling for navigation links
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

    // Navbar background on scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });
}

// Hero section animations
function initHeroAnimations() {
    // Animated counter for hero stats
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const animateCounter = (element, target) => {
        let current = 0;
        const increment = target / 100;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            element.textContent = Math.floor(current);
        }, 20);
    };

    // Intersection Observer for hero stats
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.dataset.target);
                animateCounter(entry.target, target);
                observer.unobserve(entry.target);
            }
        });
    });

    statNumbers.forEach(stat => {
        observer.observe(stat);
    });

    // FPS counter animation
    const fpsCounter = document.getElementById('fpsCounter');
    if (fpsCounter) {
        let fps = 30;
        const targetFPS = 120;
        const fpsTimer = setInterval(() => {
            fps += Math.random() * 10;
            if (fps >= targetFPS) {
                fps = targetFPS;
                clearInterval(fpsTimer);
            }
            fpsCounter.textContent = Math.floor(fps);
        }, 100);
    }
}

// Settings controls functionality
function initSettingsControls() {
    // Render distance slider
    const renderDistanceSlider = document.getElementById('renderDistance');
    const renderDistanceValue = document.querySelector('.slider-value');
    
    if (renderDistanceSlider && renderDistanceValue) {
        renderDistanceSlider.addEventListener('input', function() {
            const value = this.value;
            renderDistanceValue.textContent = `${value} chunks`;
            
            // Update FPS impact based on render distance
            updateFPSImpact(this, value);
        });
    }

    // Graphics quality select
    const graphicsQuality = document.getElementById('graphicsQuality');
    if (graphicsQuality) {
        graphicsQuality.addEventListener('change', function() {
            updateFPSImpact(this, this.value);
        });
    }

    // Particles select
    const particles = document.getElementById('particles');
    if (particles) {
        particles.addEventListener('change', function() {
            updateFPSImpact(this, this.value);
        });
    }

    // V-Sync toggle
    const vsync = document.getElementById('vsync');
    if (vsync) {
        vsync.addEventListener('change', function() {
            updateFPSImpact(this, this.checked);
        });
    }

    // Fancy clouds toggle
    const fancyClouds = document.getElementById('fancyClouds');
    if (fancyClouds) {
        fancyClouds.addEventListener('change', function() {
            updateFPSImpact(this, this.checked);
        });
    }

    // Mipmaps select
    const mipmaps = document.getElementById('mipmaps');
    if (mipmaps) {
        mipmaps.addEventListener('change', function() {
            updateFPSImpact(this, this.value);
        });
    }
}

// Update FPS impact visualization
function updateFPSImpact(element, value) {
    const settingCard = element.closest('.setting-card');
    const impactValue = settingCard.querySelector('.impact-value');
    
    if (!impactValue) return;

    // Calculate impact based on setting
    let impact = 'low';
    let impactText = 'Low';
    
    if (element.id === 'renderDistance') {
        if (value <= 8) {
            impact = 'high';
            impactText = 'High';
        } else if (value <= 12) {
            impact = 'medium';
            impactText = 'Medium';
        }
    } else if (element.id === 'graphicsQuality') {
        impact = value === 'fast' ? 'medium' : 'low';
        impactText = value === 'fast' ? 'Medium' : 'Low';
    } else if (element.id === 'particles') {
        if (value === 'minimal') {
            impact = 'medium';
            impactText = 'Medium';
        } else if (value === 'decreased') {
            impact = 'low';
            impactText = 'Low';
        }
    } else if (element.id === 'vsync') {
        impact = value ? 'medium' : 'low';
        impactText = value ? 'Medium' : 'Low';
    } else if (element.id === 'fancyClouds') {
        impact = value ? 'low' : 'medium';
        impactText = value ? 'Low' : 'Medium';
    } else if (element.id === 'mipmaps') {
        if (value <= 2) {
            impact = 'medium';
            impactText = 'Medium';
        } else {
            impact = 'low';
            impactText = 'Low';
        }
    }

    // Update impact display
    impactValue.className = `impact-value ${impact}`;
    impactValue.textContent = impactText;
}

// Checklist functionality
function initChecklist() {
    const checkboxes = document.querySelectorAll('.checklist-checkbox');
    
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', updateProgress);
    });
}

// Update progress tracking
function updateProgress() {
    const checkboxes = document.querySelectorAll('.checklist-checkbox');
    const checkedBoxes = document.querySelectorAll('.checklist-checkbox:checked');
    const progressFill = document.getElementById('progressFill');
    const progressCount = document.getElementById('progressCount');
    const totalCount = document.getElementById('totalCount');
    
    const checkedCount = checkedBoxes.length;
    const total = checkboxes.length;
    const percentage = (checkedCount / total) * 100;
    
    if (progressFill) {
        progressFill.style.width = `${percentage}%`;
    }
    
    if (progressCount) {
        progressCount.textContent = checkedCount;
    }
    
    if (totalCount) {
        totalCount.textContent = total;
    }
    
    // Add celebration effect when all items are checked
    if (checkedCount === total) {
        showCompletionCelebration();
    }
}

// Show completion celebration
function showCompletionCelebration() {
    const celebration = document.createElement('div');
    celebration.innerHTML = `
        <div style="
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(76, 175, 80, 0.9);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            z-index: 10000;
            color: white;
            text-align: center;
            animation: fadeIn 0.5s ease-in;
        ">
            <div style="font-size: 4rem; margin-bottom: 20px;">🎉</div>
            <h2 style="font-size: 2.5rem; margin-bottom: 10px; font-weight: 700;">Congratulations!</h2>
            <p style="font-size: 1.2rem; margin-bottom: 30px;">You've completed all optimizations!</p>
            <button onclick="this.parentElement.remove()" style="
                background: white;
                color: #4CAF50;
                border: none;
                padding: 15px 30px;
                border-radius: 25px;
                font-size: 1.1rem;
                font-weight: 600;
                cursor: pointer;
                box-shadow: 0 4px 20px rgba(0,0,0,0.2);
            ">Continue</button>
        </div>
    `;
    
    document.body.appendChild(celebration);
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        if (celebration.parentElement) {
            celebration.remove();
        }
    }, 5000);
}

// FAQ functionality
function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', function() {
            const isActive = item.classList.contains('active');
            
            // Close all other FAQ items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            item.classList.toggle('active', !isActive);
        });
    });
}

// Scroll animations
function initScrollAnimations() {
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
    const animatedElements = document.querySelectorAll('.intro-card, .setting-card, .tweak-card, .mod-card, .tip-card, .checklist-section, .faq-item');
    animatedElements.forEach(el => {
        observer.observe(el);
    });
}

// Copy to clipboard functionality
function initCopyButtons() {
    const copyButtons = document.querySelectorAll('.copy-btn');
    
    copyButtons.forEach(button => {
        button.addEventListener('click', function() {
            const codeBlock = this.closest('.code-block');
            const code = codeBlock.querySelector('code').textContent;
            
            navigator.clipboard.writeText(code).then(() => {
                // Show success feedback
                const originalText = this.innerHTML;
                this.innerHTML = '<i class="fas fa-check"></i>';
                this.style.background = '#4CAF50';
                
                setTimeout(() => {
                    this.innerHTML = originalText;
                    this.style.background = '';
                }, 2000);
            }).catch(err => {
                console.error('Failed to copy text: ', err);
                // Fallback for older browsers
                const textArea = document.createElement('textarea');
                textArea.value = code;
                document.body.appendChild(textArea);
                textArea.select();
                document.execCommand('copy');
                document.body.removeChild(textArea);
                
                // Show success feedback
                const originalText = this.innerHTML;
                this.innerHTML = '<i class="fas fa-check"></i>';
                this.style.background = '#4CAF50';
                
                setTimeout(() => {
                    this.innerHTML = originalText;
                    this.style.background = '';
                }, 2000);
            });
        });
    });
}

// Progress tracking initialization
function initProgressTracking() {
    // Initialize progress on page load
    updateProgress();
}

// Utility function for smooth scrolling to sections
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const offsetTop = section.offsetTop - 70; // Account for fixed navbar
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

// Copy to clipboard function (called from HTML)
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        // Show toast notification
        showToast('Copied to clipboard!', 'success');
    }).catch(err => {
        console.error('Failed to copy text: ', err);
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        showToast('Copied to clipboard!', 'success');
    });
}

// Show toast notification
function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#4CAF50' : '#2196F3'};
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.2);
        z-index: 10000;
        font-weight: 500;
        animation: slideInRight 0.3s ease-out;
    `;
    toast.textContent = message;
    
    document.body.appendChild(toast);
    
    // Auto-remove after 3 seconds
    setTimeout(() => {
        toast.style.animation = 'slideOutRight 0.3s ease-in';
        setTimeout(() => {
            if (toast.parentElement) {
                toast.remove();
            }
        }, 300);
    }, 3000);
}

// Add CSS animations for toast
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);


// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Ctrl/Cmd + K to focus search (if we had one)
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        // Could implement search functionality here
    }
    
    // Escape to close mobile menu
    if (e.key === 'Escape') {
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');
        if (navMenu.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    }
});

// Lazy loading for images (if we add any)

// Error handling
window.addEventListener('error', function(e) {
    console.error('JavaScript error:', e.error);
    // Could send error reports to analytics service
});

// Service Worker registration (for PWA features)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        // Could register a service worker for offline functionality
        // navigator.serviceWorker.register('/sw.js');
    });
}


// Initialize dynamic year
function initDynamicYear() {
    const currentYearElement = document.getElementById('currentYear');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }
}

// Export functions for global access
window.scrollToSection = scrollToSection;
window.copyToClipboard = copyToClipboard;