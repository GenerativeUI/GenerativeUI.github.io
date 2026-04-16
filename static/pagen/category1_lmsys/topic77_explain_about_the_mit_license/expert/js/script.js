// Project data for modal popups
const projectData = {
    react: {
        name: "React",
        description: "React is a JavaScript library for building user interfaces, particularly web applications. It was created by Facebook and is now maintained by Facebook and the community.",
        whyMIT: "Facebook chose MIT license for React to encourage widespread adoption and commercial use, making it accessible to developers and companies worldwide.",
        github: "https://github.com/facebook/react",
        website: "https://reactjs.org",
        stats: "Used by millions of developers worldwide"
    },
    jquery: {
        name: "jQuery",
        description: "jQuery is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, and animation much simpler.",
        whyMIT: "jQuery uses MIT license to ensure maximum compatibility and adoption across different projects and commercial applications.",
        github: "https://github.com/jquery/jquery",
        website: "https://jquery.com",
        stats: "Used on 77% of the top 1 million websites"
    },
    nodejs: {
        name: "Node.js",
        description: "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows developers to run JavaScript on the server side.",
        whyMIT: "Node.js uses MIT license to promote open source collaboration and allow commercial use without restrictions.",
        github: "https://github.com/nodejs/node",
        website: "https://nodejs.org",
        stats: "Over 1 billion downloads"
    },
    rails: {
        name: "Ruby on Rails",
        description: "Ruby on Rails is a web application framework written in Ruby. It emphasizes the use of well-known software engineering patterns and principles.",
        whyMIT: "Rails uses MIT license to encourage adoption and allow developers to use it in both open source and commercial projects freely.",
        github: "https://github.com/rails/rails",
        website: "https://rubyonrails.org",
        stats: "Powering thousands of web applications"
    },
    bootstrap: {
        name: "Bootstrap",
        description: "Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development.",
        whyMIT: "Bootstrap uses MIT license to ensure it can be used in any project, commercial or open source, without legal complications.",
        github: "https://github.com/twbs/bootstrap",
        website: "https://getbootstrap.com",
        stats: "Most popular CSS framework"
    },
    lodash: {
        name: "Lodash",
        description: "Lodash is a modern JavaScript utility library delivering modularity, performance, and extras. It provides utility functions for common programming tasks.",
        whyMIT: "Lodash uses MIT license to maximize adoption and allow developers to use it freely in any type of project.",
        github: "https://github.com/lodash/lodash",
        website: "https://lodash.com",
        stats: "Over 4 billion downloads on npm"
    }
};

// Decision helper logic
const decisionLogic = {
    questions: [
        {
            id: 1,
            text: "Do you want to allow commercial use of your code?",
            answers: {
                yes: { next: 2, mit: 1, gpl: 1, apache: 1 },
                no: { next: 2, mit: 0, gpl: 0, apache: 0 }
            }
        },
        {
            id: 2,
            text: "Do you want to require derivative works to use the same license?",
            answers: {
                yes: { next: 3, mit: 0, gpl: 1, apache: 0 },
                no: { next: 3, mit: 1, gpl: 0, apache: 1 }
            }
        },
        {
            id: 3,
            text: "Do you want to provide patent protection to users?",
            answers: {
                yes: { next: 4, mit: 0, gpl: 1, apache: 1 },
                no: { next: 4, mit: 1, gpl: 0, apache: 0 }
            }
        },
        {
            id: 4,
            text: "Do you prefer the simplest license with minimal legal text?",
            answers: {
                yes: { next: null, mit: 2, gpl: 0, apache: 0 },
                no: { next: null, mit: 0, gpl: 0, apache: 0 }
            }
        }
    ]
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeOverviewCards();
    initializeLicenseAccordion();
    initializeCopyButton();
    initializeComparisonTable();
    initializeExamples();
    initializeDecisionHelper();
    initializeModal();
    initializeTooltips();
});

// Overview Cards Functionality
function initializeOverviewCards() {
    const cards = document.querySelectorAll('.overview-card');
    
    cards.forEach(card => {
        card.addEventListener('click', function() {
            // Remove active class from all cards
            cards.forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked card
            this.classList.add('active');
        });
    });
}

// License Accordion Functionality
function initializeLicenseAccordion() {
    const toggle = document.getElementById('licenseToggle');
    const content = document.getElementById('licenseContent');
    
    toggle.addEventListener('click', function() {
        const isActive = content.classList.contains('active');
        
        if (isActive) {
            content.classList.remove('active');
            toggle.classList.remove('active');
            toggle.querySelector('span').textContent = 'View Full License Text';
        } else {
            content.classList.add('active');
            toggle.classList.add('active');
            toggle.querySelector('span').textContent = 'Hide License Text';
        }
    });
}

// Copy License Functionality
function initializeCopyButton() {
    const copyBtn = document.getElementById('copyLicense');
    const licenseText = document.getElementById('licenseText');
    
    copyBtn.addEventListener('click', function() {
        const text = licenseText.textContent;
        
        navigator.clipboard.writeText(text).then(() => {
            showToast('License copied to clipboard!');
            copyBtn.innerHTML = '<i class="fas fa-check"></i> Copied!';
            
            setTimeout(() => {
                copyBtn.innerHTML = '<i class="fas fa-copy"></i> Copy License';
            }, 2000);
        }).catch(err => {
            console.error('Failed to copy: ', err);
            showToast('Failed to copy license text');
        });
    });
}

// Comparison Table Functionality
function initializeComparisonTable() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const licenseCols = document.querySelectorAll('.license-col');
    const licenseCards = document.querySelectorAll('.license-card');
    
    // Ensure mobile cards are visible by default
    licenseCards.forEach(card => {
        card.style.display = 'block';
    });
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Update active filter button
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const selectedLicense = this.dataset.license;
            
            // Show/hide license columns (desktop table)
            licenseCols.forEach(col => {
                if (selectedLicense === 'all' || col.dataset.license === selectedLicense) {
                    col.classList.remove('hidden');
                } else {
                    col.classList.add('hidden');
                }
            });
            
            // Show/hide license cards (mobile)
            licenseCards.forEach(card => {
                if (selectedLicense === 'all' || card.dataset.license === selectedLicense) {
                    card.style.display = 'block';
                    // Add a small delay for smooth animation
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 10);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

// Examples Section Functionality
function initializeExamples() {
    const exampleCards = document.querySelectorAll('.example-card');
    
    exampleCards.forEach(card => {
        const learnMoreBtn = card.querySelector('.learn-more-btn');
        
        learnMoreBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            const projectId = card.dataset.project;
            showProjectModal(projectId);
        });
    });
}

// Decision Helper Functionality
function initializeDecisionHelper() {
    const answerBtns = document.querySelectorAll('.answer-btn');
    const restartBtn = document.getElementById('restartDecision');
    let currentQuestion = 1;
    let answers = {};
    
    answerBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const answer = this.dataset.answer;
            const question = this.closest('.question');
            const questionId = parseInt(question.dataset.question);
            
            // Store the answer
            answers[questionId] = answer;
            
            // Hide current question
            question.classList.remove('active');
            
            // Show next question or result
            const nextQuestion = getNextQuestion(questionId, answer);
            
            if (nextQuestion) {
                setTimeout(() => {
                    showQuestion(nextQuestion);
                }, 300);
            } else {
                setTimeout(() => {
                    showResult(answers);
                }, 300);
            }
        });
    });
    
    restartBtn.addEventListener('click', function() {
        currentQuestion = 1;
        answers = {};
        
        // Hide result
        document.getElementById('decisionResult').classList.remove('active');
        
        // Show first question
        showQuestion(1);
    });
    
    function getNextQuestion(questionId, answer) {
        const question = decisionLogic.questions.find(q => q.id === questionId);
        return question.answers[answer].next;
    }
    
    function showQuestion(questionId) {
        const questions = document.querySelectorAll('.question');
        questions.forEach(q => q.classList.remove('active'));
        
        const targetQuestion = document.querySelector(`[data-question="${questionId}"]`);
        if (targetQuestion) {
            targetQuestion.classList.add('active');
        }
    }
    
    function showResult(answers) {
        const result = calculateRecommendation(answers);
        const resultContainer = document.getElementById('decisionResult');
        const licenseName = document.getElementById('recommendedLicenseName');
        const licenseDesc = document.getElementById('recommendedLicenseDesc');
        
        licenseName.textContent = result.license;
        licenseDesc.textContent = result.description;
        
        resultContainer.classList.add('active');
    }
    
    function calculateRecommendation(answers) {
        let mitScore = 0;
        let gplScore = 0;
        let apacheScore = 0;
        
        // Calculate scores based on answers
        Object.keys(answers).forEach(questionId => {
            const question = decisionLogic.questions.find(q => q.id === parseInt(questionId));
            const answer = answers[questionId];
            const scores = question.answers[answer];
            
            mitScore += scores.mit;
            gplScore += scores.gpl;
            apacheScore += scores.apache;
        });
        
        // Determine best match
        const maxScore = Math.max(mitScore, gplScore, apacheScore);
        
        // Get specific answers for tailored descriptions
        const wantsCommercial = answers[1] === 'yes';
        const wantsCopyleft = answers[2] === 'yes';
        const wantsPatents = answers[3] === 'yes';
        const wantsSimple = answers[4] === 'yes';
        
        if (mitScore === maxScore) {
            let description = "Lightweight, permissive, minimal obligations. ";
            if (wantsSimple) {
                description += "Perfect choice for simplicity - just ~200 words of legal text.";
            } else {
                description += "Allows commercial use with minimal attribution requirements.";
            }
            return {
                license: "MIT License",
                description: description
            };
        } else if (gplScore === maxScore) {
            let description = "Ensures derivatives remain open source (copyleft). ";
            if (wantsPatents) {
                description += "Includes patent retaliation terms to protect against patent lawsuits.";
            } else {
                description += "Strong copyleft protection for open source projects.";
            }
            return {
                license: "GPL v3 License",
                description: description
            };
        } else {
            let description = "Permissive like MIT but with explicit patent protection. ";
            if (wantsPatents) {
                description += "Provides clear patent grants, protecting users from patent litigation.";
            } else {
                description += "Good balance of permissiveness with additional legal protections.";
            }
            return {
                license: "Apache 2.0 License",
                description: description
            };
        }
    }
}

// Modal Functionality
function initializeModal() {
    const modal = document.getElementById('projectModal');
    const closeBtn = modal.querySelector('.close-btn');
    
    // Close modal when clicking close button
    closeBtn.addEventListener('click', closeModal);
    
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

function showProjectModal(projectId) {
    const modal = document.getElementById('projectModal');
    const modalBody = document.getElementById('modalBody');
    const project = projectData[projectId];
    
    if (!project) return;
    
    modalBody.innerHTML = `
        <div class="project-modal-content">
            <div class="project-header">
                <h2>${project.name}</h2>
                <p class="project-stats">${project.stats}</p>
            </div>
            
            <div class="project-description">
                <h3>About</h3>
                <p>${project.description}</p>
            </div>
            
            <div class="project-why-mit">
                <h3>Why MIT License?</h3>
                <p>${project.whyMIT}</p>
            </div>
            
            <div class="project-links">
                <h3>Links</h3>
                <div class="link-buttons">
                    <a href="${project.github}" target="_blank" class="link-btn github">
                        <i class="fab fa-github"></i> GitHub
                    </a>
                    <a href="${project.website}" target="_blank" class="link-btn website">
                        <i class="fas fa-globe"></i> Website
                    </a>
                </div>
            </div>
        </div>
    `;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('projectModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Tooltip Functionality
function initializeTooltips() {
    const tooltipTriggers = document.querySelectorAll('.tooltip-trigger');
    
    tooltipTriggers.forEach(trigger => {
        // Position tooltip on hover/click
        const positionTooltip = (element) => {
            // Remove existing positioning classes
            element.classList.remove('tooltip-left', 'tooltip-right', 'tooltip-center');
            
            // Get tooltip dimensions and position
            const rect = element.getBoundingClientRect();
            const tooltipWidth = 300; // Approximate tooltip width
            const viewportWidth = window.innerWidth;
            const margin = 20; // Margin from viewport edge
            
            // Calculate available space on each side
            const spaceLeft = rect.left;
            const spaceRight = viewportWidth - rect.right;
            
            // Determine best position
            if (spaceLeft < tooltipWidth / 2 + margin) {
                // Not enough space on left, position to the right
                element.classList.add('tooltip-right');
            } else if (spaceRight < tooltipWidth / 2 + margin) {
                // Not enough space on right, position to the left
                element.classList.add('tooltip-left');
            } else {
                // Enough space on both sides, center it
                element.classList.add('tooltip-center');
            }
        };
        
        // Handle hover events for desktop
        trigger.addEventListener('mouseenter', function() {
            positionTooltip(this);
        });
        
        // Handle click events for mobile devices
        trigger.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            // Close any other open tooltips
            tooltipTriggers.forEach(t => {
                if (t !== this) {
                    t.classList.remove('active');
                }
            });
            
            // Position and toggle current tooltip
            positionTooltip(this);
            this.classList.toggle('active');
        });
        
        // Handle touch events for mobile
        trigger.addEventListener('touchstart', function(e) {
            e.preventDefault();
            positionTooltip(this);
            this.classList.toggle('active');
        });
    });
    
    // Close tooltips when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.tooltip-trigger')) {
            tooltipTriggers.forEach(trigger => {
                trigger.classList.remove('active');
            });
        }
    });
    
    // Reposition tooltips on window resize
    window.addEventListener('resize', function() {
        tooltipTriggers.forEach(trigger => {
            if (trigger.classList.contains('active') || trigger.matches(':hover')) {
                positionTooltip(trigger);
            }
        });
    });
}

// Toast Notification Functionality
function showToast(message) {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toastMessage');
    
    toastMessage.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Add smooth scrolling for better UX
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

// Add intersection observer for animations
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

// Observe sections for scroll animations
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});
