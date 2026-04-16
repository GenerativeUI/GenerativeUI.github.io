// Timeline data
const timelineMilestones = [
    {
        year: 1950,
        title: "Turing Test",
        description: "Alan Turing proposes the famous test of machine intelligence",
        icon: "lightbulb"
    },
    {
        year: 1956,
        title: "Birth of AI",
        description: "The term 'Artificial Intelligence' is coined at Dartmouth Conference",
        icon: "brain"
    },
    {
        year: 1997,
        title: "Deep Blue Victory",
        description: "IBM's Deep Blue defeats world chess champion Garry Kasparov",
        icon: "cpu"
    },
    {
        year: 2015,
        title: "OpenAI Founded",
        description: "OpenAI is established to ensure AI benefits humanity",
        icon: "code"
    },
    {
        year: 2022,
        title: "ChatGPT Launch",
        description: "ChatGPT launches and transforms how millions interact with AI",
        icon: "globe"
    }
];

let selectedMilestone = 0;
let activeCard = null;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Lucide icons
    lucide.createIcons();
    
    // Initialize header
    initializeHeader();
    
    // Initialize timeline
    initializeTimeline();
    
    // Initialize fun facts cards
    initializeFunFacts();
    
    // Initialize process steps
    initializeProcessSteps();
    
    // Initialize smooth scrolling
    initializeSmoothScrolling();
    
    // Initialize animations
    initializeAnimations();
    
    // Initialize bigger picture cards
    initializeBiggerPictureCards();
});

// Initialize header functionality
function initializeHeader() {
    const header = document.querySelector('.header');
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    // Header scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.style.background = 'rgba(15, 23, 42, 0.98)';
        } else {
            header.style.background = 'rgba(15, 23, 42, 0.95)';
        }
    });
    
    // Mobile menu toggle (for future mobile implementation)
    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }
}

// Smooth scrolling function
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
        });
    }
}

// Initialize process steps interaction
function initializeProcessSteps() {
    const processSteps = document.querySelectorAll('.process-step');
    const flowSteps = document.querySelectorAll('.flow-step');
    
    processSteps.forEach((step, index) => {
        step.addEventListener('mouseenter', () => {
            // Reset all flow steps
            flowSteps.forEach(flowStep => flowStep.classList.remove('active'));
            
            // Activate corresponding flow step
            if (flowSteps[index]) {
                flowSteps[index].classList.add('active');
            }
        });
        
        step.addEventListener('mouseleave', () => {
            // Reset to default state (first step active)
            flowSteps.forEach(flowStep => flowStep.classList.remove('active'));
            if (flowSteps[0]) {
                flowSteps[0].classList.add('active');
            }
        });
    });
}

// Initialize timeline functionality
function initializeTimeline() {
    const timelinePoints = document.querySelectorAll('.timeline-point');
    
    timelinePoints.forEach((point, index) => {
        point.addEventListener('click', () => {
            handleTimelineChange(index);
        });
    });
    
    // Set initial timeline content
    updateTimelineContent(selectedMilestone);
}

// Handle timeline milestone change
function handleTimelineChange(index) {
    // Remove active class from all points
    document.querySelectorAll('.timeline-point').forEach(point => {
        point.classList.remove('active');
    });
    
    // Add active class to selected point
    document.querySelector(`[data-milestone="${index}"]`).classList.add('active');
    
    selectedMilestone = index;
    updateTimelineContent(index);
}

// Update timeline content
function updateTimelineContent(index) {
    const milestone = timelineMilestones[index];
    const timelineCard = document.querySelector('.timeline-card');
    
    // Update icon
    const iconContainer = timelineCard.querySelector('.timeline-icon');
    iconContainer.innerHTML = '';
    const newIconElement = document.createElement('i');
    newIconElement.setAttribute('data-lucide', milestone.icon);
    iconContainer.appendChild(newIconElement);
    
    // Update content
    timelineCard.querySelector('.timeline-year').textContent = milestone.year;
    timelineCard.querySelector('.timeline-title').textContent = milestone.title;
    timelineCard.querySelector('.timeline-description').textContent = milestone.description;
    
    // Reinitialize icons specifically for the updated container
    lucide.createIcons({ nameAttr: 'data-lucide' });
}

// Initialize fun facts cards
function initializeFunFacts() {
    const funFactCards = document.querySelectorAll('.fun-fact-card');
    
    funFactCards.forEach((card, index) => {
        card.addEventListener('mouseenter', () => {
            activeCard = index;
            card.style.transform = 'scale(1.05)';
        });
        
        card.addEventListener('mouseleave', () => {
            activeCard = null;
            card.style.transform = 'scale(1)';
        });
    });
}

// Initialize smooth scrolling for navigation
function initializeSmoothScrolling() {
    // Add smooth scrolling to any anchor links
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
}

// Initialize scroll animations
function initializeAnimations() {
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.creator-card, .process-step, .fun-fact-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Initialize bigger picture cards
function initializeBiggerPictureCards() {
    const pictureCards = document.querySelectorAll('.picture-card');
    
    pictureCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });
    
    // Add staggered animation on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 200);
            }
        });
    }, { threshold: 0.1 });
    
    pictureCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

// Add parallax effect to floating orbs
function initializeParallax() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.floating-orb');
        
        parallaxElements.forEach((element, index) => {
            const speed = 0.5 + (index * 0.1);
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
}

// Initialize parallax on load
window.addEventListener('load', initializeParallax);

// Handle window resize
window.addEventListener('resize', () => {
    // Reinitialize icons specifically for the updated container
    lucide.createIcons({ nameAttr: 'data-lucide' });
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});