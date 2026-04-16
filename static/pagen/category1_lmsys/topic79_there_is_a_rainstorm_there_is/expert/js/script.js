// Global variables
let stormActive = false;
let snakeAnimationActive = false;
let experimentRunning = false;

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    setupEventListeners();
    startRainAnimation();
});

// Initialize the application
function initializeApp() {
    // Initialize raindrop simulator
    initializeRaindropSimulator();
    
    // Initialize storm visualization
    initializeStormVisualization();
    
    
    // Initialize FAQ functionality
    initializeFAQ();
    
    // Initialize dynamic year
    initializeDynamicYear();
    
    // Setup scroll animations
    setupScrollAnimations();
}

// Setup event listeners
function setupEventListeners() {
    // Navigation
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }
    
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
    
    // Scroll indicator
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', () => {
            document.querySelector('#physics').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }
}

// Raindrop Simulator
function initializeRaindropSimulator() {
    const dropSizeSlider = document.getElementById('dropSize');
    const windSpeedSlider = document.getElementById('windSpeed');
    const airPressureSlider = document.getElementById('airPressure');
    const airTempSlider = document.getElementById('airTemp');
    
    const sizeValue = document.getElementById('sizeValue');
    const windValue = document.getElementById('windValue');
    const pressureValue = document.getElementById('pressureValue');
    const tempValue = document.getElementById('tempValue');
    
    const shapeType = document.getElementById('shapeType');
    const terminalVelocity = document.getElementById('terminalVelocity');
    const reynoldsNumber = document.getElementById('reynoldsNumber');
    const deformationFactor = document.getElementById('deformationFactor');
    const surfaceTension = document.getElementById('surfaceTension');
    const animatedDrop = document.getElementById('animatedDrop');
    const airFlowIndicators = document.getElementById('airFlowIndicators');
    
    if (dropSizeSlider) {
        dropSizeSlider.addEventListener('input', updateRaindropSimulator);
    }
    if (windSpeedSlider) {
        windSpeedSlider.addEventListener('input', updateRaindropSimulator);
    }
    if (airPressureSlider) {
        airPressureSlider.addEventListener('input', updateRaindropSimulator);
    }
    if (airTempSlider) {
        airTempSlider.addEventListener('input', updateRaindropSimulator);
    }
    
    function updateRaindropSimulator() {
        const size = parseFloat(dropSizeSlider.value);
        const wind = parseFloat(windSpeedSlider.value);
        const pressure = parseFloat(airPressureSlider.value);
        const temperature = parseFloat(airTempSlider.value);
        
        // Update display values
        sizeValue.textContent = size.toFixed(1) + ' mm';
        windValue.textContent = wind.toFixed(1) + ' m/s';
        pressureValue.textContent = pressure + ' kPa';
        tempValue.textContent = temperature + '°C';
        
        // Calculate raindrop properties with improved physics
        const physics = calculateRaindropPhysics(size, wind, pressure, temperature);
        
        // Update display
        shapeType.textContent = physics.shape;
        terminalVelocity.textContent = physics.terminalVelocity.toFixed(1) + ' m/s';
        reynoldsNumber.textContent = physics.reynoldsNumber.toLocaleString();
        deformationFactor.textContent = physics.deformationFactor.toFixed(2);
        surfaceTension.textContent = physics.surfaceTension.toFixed(3) + ' N/m';
        
        // Update visual representation
        updateRaindropVisual(animatedDrop, size, wind, physics);
        updateAirFlowIndicators(airFlowIndicators, wind);
    }
    
    // Initial update
    updateRaindropSimulator();
}

function calculateRaindropPhysics(size, wind, pressure, temperature) {
    // Constants
    const rho_air = 1.225 * (pressure / 101) * (273 / (273 + temperature)); // air density (kg/m³), adjusted for pressure & temp
    const rho_water = 1000; // water density (kg/m³)
    const g = 9.81; // gravity (m/s²)
    const mu = 1.81e-5; // dynamic viscosity of air (Pa·s)
    const sigma = 0.072 - (0.00015 * temperature); // surface tension (N/m), decreases with temp

    // Convert diameter mm → meters
    const d = size / 1000;
    const r = d / 2;

    // Volume and mass of the drop
    const volume = (4 / 3) * Math.PI * Math.pow(r, 3);
    const mass = volume * rho_water;

    // Cross-sectional area
    const area = Math.PI * Math.pow(r, 2);

    // Approximate drag coefficient (CD) based on Reynolds number regime
    // For spheres, ~0.47 but decreases with higher Re. We'll approximate adaptively later.
    
    // Terminal velocity (simplified iterative balance of drag and gravity)
    let v_t = Math.sqrt((2 * mass * g) / (rho_air * area * 0.47));
    
    // Reynolds number
    const Re = (rho_air * v_t * d) / mu;

    // Adjust drag coefficient based on Reynolds number (empirical correlation)
    let Cd = 0.47; 
    if (Re > 1000) Cd = 0.2; // lower drag for turbulent flow
    if (Re < 10) Cd = 3.0 / Math.sqrt(Re); // Stokes regime
    
    // Recalculate terminal velocity with adjusted Cd
    v_t = Math.sqrt((2 * mass * g) / (rho_air * area * Cd));

    // Deformation factor ~ depends on size and velocity
    // Small (<1mm) = spherical, medium = flattened, large >4mm unstable
    let deformation = 1 - Math.exp(-size / 2.5); // grows with drop size
    deformation = Math.min(deformation, 1); // cap
    
    // Shape category
    let shape = "Sphere";
    if (size > 1 && size <= 3) shape = "Flattened Sphere";
    if (size > 3 && size <= 4.5) shape = "Hamburger Bun";
    if (size > 4.5) shape = "Unstable / Breakup";

    return {
        shape: shape,
        terminalVelocity: v_t,
        reynoldsNumber: Re,
        deformationFactor: deformation,
        surfaceTension: sigma
    };
}


function updateRaindropVisual(dropElement, size, wind, physics) {
    if (!dropElement) return;
    
    const scale = Math.min(size / 2, 2); // scale factor
    const rotation = wind * 2; // rotation based on wind
    const deformation = physics.deformationFactor;
    
    // Update size
    const baseSize = 50;
    const sizeMultiplier = 1 + size * 0.1;
    const newSize = baseSize * sizeMultiplier;
    
    // Update shape based on deformation
    const borderRadius = deformation < 0.3 ? '50%' : 
                        deformation < 0.7 ? '50% 50% 50% 50% / 60% 60% 40% 40%' :
                        '50% 50% 50% 50% / 70% 70% 30% 30%';
    
    dropElement.style.transform = `scale(${scale}) rotate(${rotation}deg)`;
    dropElement.style.width = `${newSize}px`;
    dropElement.style.height = `${newSize}px`;
    dropElement.style.borderRadius = borderRadius;
    
    // Add visual effects based on physics
    if (physics.reynoldsNumber > 1000) {
        dropElement.style.boxShadow = '0 15px 40px rgba(116, 185, 255, 0.4)';
    } else {
        dropElement.style.boxShadow = '0 10px 30px rgba(116, 185, 255, 0.3)';
    }
}

function updateAirFlowIndicators(container, windSpeed) {
    if (!container) return;
    
    // Clear existing indicators
    container.innerHTML = '';
    
    if (windSpeed > 0) {
        // Create air flow arrows
        const numArrows = Math.min(Math.floor(windSpeed / 2) + 2, 8);
        
        for (let i = 0; i < numArrows; i++) {
            const arrow = document.createElement('div');
            arrow.className = 'air-flow-arrow';
            
            // Position arrows around the raindrop
            const angle = (i / numArrows) * 2 * Math.PI;
            const radius = 80 + Math.random() * 20;
            const x = 100 + radius * Math.cos(angle);
            const y = 100 + radius * Math.sin(angle);
            
            arrow.style.left = x + 'px';
            arrow.style.top = y + 'px';
            arrow.style.transform = `rotate(${angle * 180 / Math.PI}deg)`;
            arrow.style.animationDelay = (i * 0.2) + 's';
            
            container.appendChild(arrow);
        }
    }
}

// Storm Visualization
function initializeStormVisualization() {
    // Initialize timeline animations
    setupTimelineAnimations();
}

function setupTimelineAnimations() {
    // Timeline items will animate on scroll
    const timelineItems = document.querySelectorAll('.timeline-item');
    const factCards = document.querySelectorAll('.fact-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateX(0)';
            }
        });
    }, { threshold: 0.1 });
    
    timelineItems.forEach(item => observer.observe(item));
    factCards.forEach(card => observer.observe(card));
}

// FAQ Functionality
function initializeFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Close all other FAQ items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            if (isActive) {
                item.classList.remove('active');
            } else {
                item.classList.add('active');
            }
        });
    });
}

// Dynamic Year Functionality
function initializeDynamicYear() {
    const currentYearElement = document.getElementById('currentYear');
    if (currentYearElement) {
        const currentYear = new Date().getFullYear();
        currentYearElement.textContent = currentYear;
    }
}



// Scroll Animations
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.explanation-card, .info-card, .behavior-card');
    animatedElements.forEach(el => observer.observe(el));
}

// Rain Animation
function startRainAnimation() {
    const rainContainer = document.querySelector('.rain-animation');
    if (!rainContainer) return;
    
    // Create rain drops
    for (let i = 0; i < 50; i++) {
        createRainDrop(rainContainer);
    }
}

function createRainDrop(container) {
    const drop = document.createElement('div');
    drop.style.position = 'absolute';
    drop.style.width = Math.random() * 3 + 1 + 'px';
    drop.style.height = Math.random() * 20 + 10 + 'px';
    drop.style.background = 'rgba(255, 255, 255, 0.3)';
    drop.style.left = Math.random() * 100 + '%';
    drop.style.top = '-20px';
    drop.style.animation = `rain ${Math.random() * 2 + 1}s linear infinite`;
    drop.style.animationDelay = Math.random() * 2 + 's';
    
    container.appendChild(drop);
}

// Utility Functions
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Add CSS for rain animation
const style = document.createElement('style');
style.textContent = `
    @keyframes rain {
        0% { transform: translateY(-100vh); }
        100% { transform: translateY(100vh); }
    }
    
    .storm-active .cloud-layer {
        animation-duration: 2s;
    }
    
    .storm-active .lightning-bolt {
        animation: lightningStrike 0.5s ease infinite;
    }
`;
document.head.appendChild(style);

// Cleanup on page unload
window.addEventListener('beforeunload', () => {
    if (window.stormInterval) clearInterval(window.stormInterval);
});

// Export functions for global access
window.scrollToSection = scrollToSection;