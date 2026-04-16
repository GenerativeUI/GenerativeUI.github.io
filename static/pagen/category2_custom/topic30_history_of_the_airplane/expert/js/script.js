// DOM Elements
const progressBar = document.querySelector('.progress-fill');
const navbar = document.querySelector('.navbar');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const heroStats = document.querySelectorAll('.stat-number');
const timelineItems = document.querySelectorAll('.timeline-item');
const filterButtons = document.querySelectorAll('.filter-btn');
const aircraftCards = document.querySelectorAll('.aircraft-card');
const factCards = document.querySelectorAll('.fact-card');
const modal = document.getElementById('aircraft-modal');
const modalBody = document.getElementById('modal-body');
const closeModal = document.querySelector('.close');

// Aircraft Data
const aircraftData = {
    'wright-flyer': {
        name: 'Wright Flyer',
        year: '1903',
        maxSpeed: 30,
        description: 'The Wright Flyer was the first successful powered aircraft, designed and built by the Wright brothers. It made the first controlled, sustained flight of a powered, heavier-than-air aircraft on December 17, 1903.',
        specifications: {
            'Wingspan': '40 ft 4 in',
            'Length': '21 ft 1 in',
            'Height': '9 ft 4 in',
            'Weight': '605 lb',
            'Engine': '12 hp water-cooled 4-cylinder inline',
            'First Flight': 'December 17, 1903',
            'Pilot': 'Orville Wright',
            'Duration': '12 seconds',
            'Distance': '120 feet'
        }
    },
    'spirit-st-louis': {
        name: 'Spirit of St. Louis',
        year: '1927',
        maxSpeed: 120,
        description: 'The Spirit of St. Louis was the custom-built, single-engine, single-seat monoplane that was flown solo by Charles Lindbergh on May 20–21, 1927, on the first non-stop transatlantic flight.',
        specifications: {
            'Wingspan': '46 ft',
            'Length': '27 ft 8 in',
            'Height': '9 ft 10 in',
            'Weight': '2,150 lb',
            'Engine': 'Wright J-5 Whirlwind radial',
            'Power': '223 hp',
            'Fuel Capacity': '450 gallons',
            'Flight Time': '33.5 hours',
            'Distance': '3,600 miles'
        }
    },
    'spitfire': {
        name: 'Supermarine Spitfire',
        year: '1936',
        maxSpeed: 370,
        description: 'The Supermarine Spitfire is a British single-seat fighter aircraft that was used by the Royal Air Force and other Allied countries before, during, and after World War II.',
        specifications: {
            'Wingspan': '36 ft 10 in',
            'Length': '29 ft 11 in',
            'Height': '11 ft 5 in',
            'Weight': '5,065 lb',
            'Engine': 'Rolls-Royce Merlin III V-12',
            'Power': '1,030 hp',
            'Max Speed': '362 mph',
            'Service Ceiling': '31,900 ft',
            'Range': '575 miles'
        }
    },
    'concorde': {
        name: 'Concorde',
        year: '1969',
        maxSpeed: 1354,
        description: 'The Concorde was a supersonic passenger airliner jointly developed and manufactured by Sud Aviation and the British Aircraft Corporation. It was the world\'s first supersonic commercial aircraft.',
        specifications: {
            'Wingspan': '83 ft 10 in',
            'Length': '202 ft 4 in',
            'Height': '40 ft 0 in',
            'Weight': '185,070 lb (empty); 408,000 lb (MTOW)',
            'Engines': '4 × Rolls-Royce/Snecma Olympus 593 turbojet',
            'Thrust': '38,050 lbf each',
            'Max Speed': 'Mach 2.02 (~1,354 mph)',
            'Service Ceiling': '60,000 ft',
            'Passengers': '92–128'
        }
    },
    'boeing-747': {
        name: 'Boeing 747',
        year: '1969',
        maxSpeed: 614,
        description: 'The Boeing 747 is a large, long-range wide-body airliner designed and manufactured by Boeing Commercial Airplanes. It was the first wide-body aircraft produced and is often called the "Queen of the Skies".',
        specifications: {
            'Wingspan': '195 ft 8 in',
            'Length': '231 ft 4 in',
            'Height': '63 ft 5 in',
            'Weight': '735,000 lb',
            'Engines': '4 × Pratt & Whitney JT9D-3A',
            'Thrust': '43,500 lbf each',
            'Cruise Speed': '570 mph (Mach 0.84)',
            'Service Ceiling': '45,000 ft',
            'Passengers': '366-452'
        }
    },
    'airbus-a380': {
        name: 'Airbus A380',
        year: '2005',
        maxSpeed: 634,
        description: 'The Airbus A380 is a wide-body airliner manufactured by Airbus. It is the world\'s largest passenger airliner and the only full-length double-deck jet airliner.',
        specifications: {
            'Wingspan': '261 ft 8 in',
            'Length': '238 ft 7 in',
            'Height': '79 ft 0 in',
            'Weight': '610,000 lb (empty); 1,234,600 lb (MTOW)',
            'Engines': '4 × Rolls-Royce Trent 900 or Engine Alliance GP7200',
            'Thrust': '70,000 lbf each',
            'Cruise Speed': '560 mph (Mach 0.85)',
            'Service Ceiling': '43,000 ft',
            'Passengers': '555-853'
        }
    }
};


// Quiz Data
const quizData = [
    {
        question: "What was the name of the Wright Brothers' first successful airplane?",
        options: ["Wright Flyer", "Kitty Hawk", "First Flight", "Wright Model A"],
        correct: 0,
        explanation: "The Wright Flyer was the first successful powered airplane, achieving the first controlled, sustained flight on December 17, 1903."
    },
    {
        question: "How long did the Wright Flyer's first flight last?",
        options: ["12 seconds", "2 minutes", "5 minutes", "30 seconds"],
        correct: 0,
        explanation: "The first powered airplane flight lasted only 12 seconds and covered 120 feet - shorter than a Boeing 747's wingspan!"
    },
    {
        question: "What was the name of Charles Lindbergh's famous airplane?",
        options: ["Spirit of St. Louis", "Flying Fortress", "Silver Bullet", "Atlantic Flyer"],
        correct: 0,
        explanation: "The Spirit of St. Louis was the custom-built airplane that Lindbergh flew solo across the Atlantic in 1927."
    },
    {
        question: "What was the top speed of the Concorde airplane?",
        options: ["Mach 1.5", "Mach 2.02", "Mach 3.0", "Mach 1.8"],
        correct: 1,
        explanation: "The Concorde airplane could fly at Mach 2.02 (1,354 mph), making it the fastest commercial passenger airplane ever built."
    },
    {
        question: "How many passengers can the Airbus A380 airplane carry?",
        options: ["500 passengers", "650 passengers", "853 passengers", "750 passengers"],
        correct: 2,
        explanation: "The Airbus A380 airplane can carry up to 853 passengers in a single-class configuration, making it the world's largest passenger airplane."
    }
];

// Quiz State
let currentQuestionIndex = 0;
let score = 0;
let selectedAnswer = null;
let quizCompleted = false;

// Initialize the application
document.addEventListener('DOMContentLoaded', function () {
    initializeApp();
    initializeQuiz();
});

function initializeApp() {
    setupNavigation();
    setupProgressBar();
    setupHeroAnimations();
    setupTimelineAnimations();
    setupGalleryFiltering();
    setupModal();
    setupScrollAnimations();
    setupCounterAnimations();
    setupQuizAnimations();
}

// Navigation functionality
function setupNavigation() {
    // Mobile menu toggle
    hamburger.addEventListener('click', function () {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Navbar background on scroll
    window.addEventListener('scroll', function () {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });
}

// Progress bar functionality
function setupProgressBar() {
    window.addEventListener('scroll', function () {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.offsetHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressBar.style.width = scrollPercent + '%';
    });
}

// Hero section animations
function setupHeroAnimations() {
    // Animate hero elements on load
    setTimeout(() => {
        document.querySelectorAll('.title-line').forEach((line, index) => {
            setTimeout(() => {
                line.style.opacity = '1';
                line.style.transform = 'translateY(0)';
            }, index * 300);
        });
    }, 500);

    setTimeout(() => {
        document.querySelector('.hero-subtitle').style.opacity = '1';
        document.querySelector('.hero-subtitle').style.transform = 'translateY(0)';
    }, 1100);

    setTimeout(() => {
        document.querySelector('.hero-stats').style.opacity = '1';
        document.querySelector('.hero-stats').style.transform = 'translateY(0)';
    }, 1400);

    setTimeout(() => {
        document.querySelector('.cta-button').style.opacity = '1';
        document.querySelector('.cta-button').style.transform = 'translateY(0)';
    }, 1700);
}

// Timeline animations
function setupTimelineAnimations() {
    const timelineCards = document.querySelectorAll('.timeline-card');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Add staggered animation delay
                setTimeout(() => {
                    entry.target.classList.add('animate');
                }, index * 100);
            }
        });
    }, {
        threshold: 0.2
    });

    timelineCards.forEach(card => {
        observer.observe(card);
    });
}

// Gallery filtering functionality
function setupGalleryFiltering() {
    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');

            const filter = this.getAttribute('data-filter');

            aircraftCards.forEach(card => {
                const category = card.getAttribute('data-category');

                if (filter === 'all' || category === filter) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.classList.add('animate');
                    }, 100);
                } else {
                    card.classList.remove('animate');
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });

    // Animate cards on load
    setTimeout(() => {
        aircraftCards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('animate');
            }, index * 100);
        });
    }, 500);
}


// Modal functionality
function setupModal() {
    // View details buttons (desktop hover)
    document.querySelectorAll('.view-details').forEach(button => {
        button.addEventListener('click', function () {
            const aircraftType = this.getAttribute('data-aircraft');
            showAircraftModal(aircraftType);
        });
    });

    // Mobile info buttons
    document.querySelectorAll('.mobile-info-btn').forEach(button => {
        button.addEventListener('click', function () {
            const aircraftType = this.getAttribute('data-aircraft');
            showAircraftModal(aircraftType);
        });
    });

    // Close modal
    const closeModal = document.querySelector('.modal-close');
    closeModal.addEventListener('click', function () {
        closeAircraftModal();
    });

    // Close modal when clicking on backdrop
    const modalBackdrop = document.querySelector('.modal-backdrop');
    modalBackdrop.addEventListener('click', function () {
        closeAircraftModal();
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeAircraftModal();
        }
    });
}

function showAircraftModal(aircraftType) {
    const aircraft = aircraftData[aircraftType];
    if (aircraft) {
        modalBody.innerHTML = `
            <div class="modal-header">
                <h2>${aircraft.name}</h2>
                <p class="modal-year">${aircraft.year}</p>
            </div>
            <div class="modal-content-body">
                <div class="modal-description">
                    <p>${aircraft.description}</p>
                </div>
                <div class="modal-specifications">
                    <h3>Specifications</h3>
                    <div class="specs-grid">
                        ${Object.entries(aircraft.specifications).map(([key, value]) => `
                            <div class="spec-item">
                                <span class="spec-label">${key}</span>
                                <span class="spec-value">${value}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;

        // Show modal with animation
        modal.style.display = 'block';
        // Force reflow to ensure display change is applied
        modal.offsetHeight;
        modal.classList.add('active');

        // Prevent body scroll completely
        // const scrollY = window.scrollY;
        // document.body.style.position = 'fixed';
        // document.body.style.top = `-${scrollY}px`;
        // document.body.style.width = '100%';
        document.body.style.overflow = 'hidden';
    }
}

function closeAircraftModal() {
    modal.classList.remove('active');

    // Wait for animation to complete before hiding
    setTimeout(() => {
        modal.style.display = 'none';

        // Restore body scroll and position
        const scrollY = document.body.style.top;
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.style.overflow = '';

        // Restore scroll position
        if (scrollY) {
            window.scrollTo(0, parseInt(scrollY || '0') * -1);
        }
    }, 300);
}

// Scroll animations
function setupScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, {
        threshold: 0.1
    });

    // Observe fact cards
    factCards.forEach(card => {
        observer.observe(card);
    });
}

// Counter animations
function setupCounterAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
            }
        });
    }, {
        threshold: 0.5
    });

    heroStats.forEach(stat => {
        observer.observe(stat);
    });
}

function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target'));
    const suffix = element.getAttribute('data-suffix');
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }

        if (suffix) {
            element.textContent = Math.floor(current) + suffix;
        } else if (target >= 1000000) {
            element.textContent = (current / 1000000).toFixed(1) + 'M';
        } else if (target >= 1000) {
            element.textContent = (current / 1000).toFixed(0) + 'K';
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Utility functions
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Add CSS for modal styling
const modalStyles = `
    .modal-header {
        text-align: center;
        margin-bottom: 30px;
        padding-bottom: 20px;
        border-bottom: 2px solid var(--border-color);
    }
    
    .modal-description {
        margin-bottom: 30px;
        font-size: 1.1rem;
        line-height: 1.6;
        color: var(--text-secondary);
    }
    
    .modal-specifications h3 {
        color: var(--text-primary);
        margin-bottom: 20px;
        font-size: 1.3rem;
    }
    
    .specs-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 15px;
    }
    
    .spec-item {
        display: flex;
        justify-content: space-between;
        padding: 10px 15px;
        background: var(--light-color);
        border-radius: 8px;
        border-left: 4px solid var(--primary-color);
    }
    
    .spec-label {
        font-weight: 600;
        color: var(--text-primary);
    }
    
    .spec-value {
        color: var(--text-secondary);
        font-weight: 500;
    }
    
    @media (max-width: 768px) {
        .specs-grid {
            grid-template-columns: 1fr;
        }
        
        .spec-item {
            flex-direction: column;
            gap: 5px;
        }
    }
`;

// Inject modal styles
const styleSheet = document.createElement('style');
styleSheet.textContent = modalStyles;
document.head.appendChild(styleSheet);

// Add smooth scrolling behavior
document.documentElement.style.scrollBehavior = 'smooth';

// Add loading animation for images
// document.addEventListener('DOMContentLoaded', function() {
//     const images = document.querySelectorAll('img');
//     images.forEach(img => {
//         img.addEventListener('load', function() {
//             this.style.opacity = '1';
//         });
//         img.style.opacity = '0';
//         img.style.transition = 'opacity 0.3s ease';
//     });
// });

// Add keyboard navigation for accessibility
document.addEventListener('keydown', function (e) {
    // Tab navigation for filter buttons
    if (e.key === 'Tab' && document.activeElement.classList.contains('filter-btn')) {
        const activeButton = document.activeElement;
        const buttons = Array.from(filterButtons);
        const currentIndex = buttons.indexOf(activeButton);

        if (e.shiftKey) {
            // Shift + Tab (previous)
            if (currentIndex > 0) {
                buttons[currentIndex - 1].focus();
            }
        } else {
            // Tab (next)
            if (currentIndex < buttons.length - 1) {
                buttons[currentIndex + 1].focus();
            }
        }
    }
});


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

// Apply debouncing to scroll events
const debouncedScrollHandler = debounce(function () {
    // Progress bar update
    const scrollTop = window.pageYOffset;
    const docHeight = document.body.offsetHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    progressBar.style.width = scrollPercent + '%';

    // Navbar background update
    if (scrollTop > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
}, 10);

window.addEventListener('scroll', debouncedScrollHandler);

// Add error handling for missing elements
function safeQuerySelector(selector) {
    try {
        return document.querySelector(selector);
    } catch (error) {
        console.warn(`Element not found: ${selector}`);
        return null;
    }
}

// Quiz functionality
function initializeQuiz() {
    const quizContainer = document.querySelector('.quiz-container');
    if (!quizContainer) return;

    // Animate quiz container when it comes into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, { threshold: 0.3 });

    observer.observe(quizContainer);

    // Setup quiz event listeners
    setupQuizEventListeners();

    // Load first question
    loadQuestion();
}

function setupQuizEventListeners() {
    const nextBtn = document.getElementById('next-question');
    const restartBtn = document.getElementById('restart-quiz');
    const retakeBtn = document.getElementById('retake-quiz');

    if (nextBtn) {
        nextBtn.addEventListener('click', nextQuestion);
    }

    if (restartBtn) {
        restartBtn.addEventListener('click', restartQuiz);
    }

    if (retakeBtn) {
        retakeBtn.addEventListener('click', restartQuiz);
    }
}

function loadQuestion() {
    if (currentQuestionIndex >= quizData.length) {
        showResults();
        return;
    }

    const question = quizData[currentQuestionIndex];
    const questionText = document.getElementById('question-text');
    const answersContainer = document.getElementById('answers-container');
    const currentQuestionSpan = document.getElementById('current-question');
    const totalQuestionsSpan = document.getElementById('total-questions');
    const progressFill = document.querySelector('.progress-fill-quiz');

    // Update question text
    if (questionText) {
        questionText.textContent = question.question;
    }

    // Update progress
    if (currentQuestionSpan) {
        currentQuestionSpan.textContent = currentQuestionIndex + 1;
    }

    if (totalQuestionsSpan) {
        totalQuestionsSpan.textContent = quizData.length;
    }

    if (progressFill) {
        const progress = ((currentQuestionIndex + 1) / quizData.length) * 100;
        progressFill.style.width = progress + '%';
    }

    // Clear previous answers
    if (answersContainer) {
        answersContainer.innerHTML = '';

        // Create answer options
        question.options.forEach((option, index) => {
            const answerOption = document.createElement('div');
            answerOption.className = 'answer-option';
            answerOption.innerHTML = `
                <div class="answer-letter">${String.fromCharCode(65 + index)}</div>
                <span>${option}</span>
            `;

            answerOption.addEventListener('click', () => selectAnswer(index));
            answersContainer.appendChild(answerOption);
        });

        // Animate answer options
        setTimeout(() => {
            const answerOptions = answersContainer.querySelectorAll('.answer-option');
            answerOptions.forEach((option, index) => {
                setTimeout(() => {
                    option.classList.add('animate');
                }, index * 100);
            });
        }, 100);
    }

    // Reset button state
    const nextBtn = document.getElementById('next-question');
    if (nextBtn) {
        nextBtn.disabled = true;
        nextBtn.style.display = 'flex';
        
        // Update button text based on question number
        const buttonText = nextBtn.querySelector('span');
        if (buttonText) {
            if (currentQuestionIndex === quizData.length - 1) {
                buttonText.textContent = 'See Results';
            } else {
                buttonText.textContent = 'Next Question';
            }
        }
    }

    const restartBtn = document.getElementById('restart-quiz');
    if (restartBtn) {
        restartBtn.style.display = 'none';
    }

    // Hide results
    const resultsDiv = document.getElementById('quiz-results');
    if (resultsDiv) {
        resultsDiv.style.display = 'none';
    }

    // Show quiz content
    const quizContent = document.querySelector('.quiz-content');
    if (quizContent) {
        quizContent.style.display = 'block';
    }

    selectedAnswer = null;
}

function selectAnswer(answerIndex) {
    if (selectedAnswer !== null) return; // Prevent multiple selections

    selectedAnswer = answerIndex;
    const answerOptions = document.querySelectorAll('.answer-option');
    const question = quizData[currentQuestionIndex];

    // Mark selected answer
    answerOptions[answerIndex].classList.add('selected');

    // Disable all options
    answerOptions.forEach(option => {
        option.classList.add('disabled');
    });

    // Show correct/incorrect feedback
    setTimeout(() => {
        answerOptions.forEach((option, index) => {
            if (index === question.correct) {
                option.classList.add('correct');
            } else if (index === answerIndex && answerIndex !== question.correct) {
                option.classList.add('incorrect');
            }
        });

        // Update score
        if (answerIndex === question.correct) {
            score++;
            updateScore();
        }

        // Enable next button
        const nextBtn = document.getElementById('next-question');
        if (nextBtn) {
            nextBtn.disabled = false;
        }
    }, 500);
}

function nextQuestion() {
    currentQuestionIndex++;
    loadQuestion();
}

function updateScore() {
    const scoreDisplay = document.getElementById('current-score');
    if (scoreDisplay) {
        scoreDisplay.textContent = score;
    }
}

function showResults() {
    const quizContent = document.querySelector('.quiz-content');
    const resultsDiv = document.getElementById('quiz-results');
    const finalScoreSpan = document.getElementById('final-score');
    const resultsTitle = document.getElementById('results-title');
    const resultsMessage = document.getElementById('results-message');
    const resultsIcon = document.querySelector('.results-icon i');

    // Hide quiz content
    if (quizContent) {
        quizContent.style.display = 'none';
    }

    // Show results
    if (resultsDiv) {
        resultsDiv.style.display = 'block';
    }

    // Update final score
    if (finalScoreSpan) {
        finalScoreSpan.textContent = score;
    }

    // Update results message based on score
    const percentage = (score / quizData.length) * 100;
    let title, message, iconClass;

    if (percentage === 100) {
        title = "Perfect Score! 🎉";
        message = "You're a true airplane expert! You know everything about airplane history.";
        iconClass = "fas fa-crown";
    } else if (percentage >= 80) {
        title = "Excellent! 🏆";
        message = "Outstanding knowledge! You're well-versed in airplane history.";
        iconClass = "fas fa-medal";
    } else if (percentage >= 60) {
        title = "Good Job! 👍";
        message = "Nice work! You have a solid understanding of airplane history.";
        iconClass = "fas fa-thumbs-up";
    } else {
        title = "Keep Learning! 📚";
        message = "Good effort! Explore more about airplane history to improve your knowledge.";
        iconClass = "fas fa-book";
    }

    if (resultsTitle) {
        resultsTitle.textContent = title;
    }

    if (resultsMessage) {
        resultsMessage.textContent = message;
    }

    if (resultsIcon) {
        resultsIcon.className = iconClass;
    }

    quizCompleted = true;
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    selectedAnswer = null;
    quizCompleted = false;

    updateScore();
    loadQuestion();
}

function setupQuizAnimations() {
    // Animate quiz elements when they come into view
    const quizElements = document.querySelectorAll('.quiz-container, .fact-card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, { threshold: 0.1 });

    quizElements.forEach(element => {
        observer.observe(element);
    });
}

// Initialize with error handling
// try {
//     initializeApp();
// } catch (error) {
//     console.error('Error initializing application:', error);
// }