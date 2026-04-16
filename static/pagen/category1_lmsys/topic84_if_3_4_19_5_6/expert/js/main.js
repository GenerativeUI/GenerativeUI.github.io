// Mathematical Pattern Puzzle - Instant Answer Section

class MathPuzzleApp {
    constructor() {
        this.init();
    }

    init() {
        console.log('Mathematical Pattern Puzzle - Instant Answer Section');
        this.setupAnswerReveal();
        this.animateOnLoad();
        this.setupReasoningAnimations();
        this.setupAlternativesAnimations();
        this.setupChallengeMode();
        this.setupFAQ();
        this.setupNavigation();
        this.setupFooter();
    }

    // Setup answer reveal animation
    setupAnswerReveal() {
        // Auto-reveal the answer after a short delay
        setTimeout(() => {
            this.revealAnswer();
        }, 1000);
    }

    // Reveal answer with animation
    revealAnswer() {
        const answerReveal = document.getElementById('answerReveal');
        
        if (answerReveal) {
            // Add visible class for animation
            answerReveal.classList.add('visible');
            
            // Animate the confidence meter
            setTimeout(() => {
                const confidenceFill = document.querySelector('.confidence-fill');
                if (confidenceFill) {
                    confidenceFill.style.width = '100%';
                }
            }, 500);
            
            // Add number animation
            this.animateNumber();
        }
    }

    // Animate the answer number
    animateNumber() {
        const answerNumber = document.getElementById('finalAnswer');
        if (answerNumber) {
            // Start with 0 and count up to 10
            let currentNumber = 0;
            const targetNumber = 10;
            const duration = 2000; // 2 seconds
            const increment = targetNumber / (duration / 50); // Update every 50ms
            
            const counter = setInterval(() => {
                currentNumber += increment;
                if (currentNumber >= targetNumber) {
                    currentNumber = targetNumber;
                    clearInterval(counter);
                }
                answerNumber.textContent = Math.floor(currentNumber);
            }, 50);
        }
    }

    // Animate elements on page load
    animateOnLoad() {
        // Add entrance animation to section title
        const sectionTitle = document.querySelector('.section-title');
        if (sectionTitle) {
            sectionTitle.style.opacity = '0';
            sectionTitle.style.transform = 'translateY(-20px)';
            
            setTimeout(() => {
                sectionTitle.style.transition = 'all 0.8s ease-out';
                sectionTitle.style.opacity = '1';
                sectionTitle.style.transform = 'translateY(0)';
            }, 200);
        }
    }

    // Setup reasoning section animations
    setupReasoningAnimations() {
        // Intersection Observer for step cards
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    
                    // Special handling for step cards with delay
                    if (entry.target.classList.contains('step-card')) {
                        const stepNumber = parseInt(entry.target.dataset.step);
                        const delay = stepNumber * 300; // 300ms delay between steps
                        
                        setTimeout(() => {
                            entry.target.classList.add('visible');
                        }, delay);
                    }
                }
            });
        }, observerOptions);
        
        // Observe step cards
        document.querySelectorAll('.step-card').forEach(el => {
            observer.observe(el);
        });
    }

    // Setup alternatives section animations
    setupAlternativesAnimations() {
        // Intersection Observer for pattern cards
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    
                    // Animate confidence bars with delay
                    if (entry.target.classList.contains('pattern-card')) {
                        const confidenceFill = entry.target.querySelector('.confidence-fill');
                        if (confidenceFill) {
                            const width = confidenceFill.style.width;
                            confidenceFill.style.width = '0%';
                            
                            setTimeout(() => {
                                confidenceFill.style.width = width;
                            }, 500);
                        }
                    }
                }
            });
        }, observerOptions);
        
        // Observe pattern cards
        document.querySelectorAll('.pattern-card').forEach(el => {
            observer.observe(el);
        });
    }

    // Setup challenge mode functionality
    setupChallengeMode() {
        this.challengeStats = {
            challengesSolved: 0,
            correctAnswers: 0,
            totalAnswers: 0
        };

        // Setup challenge cards
        document.querySelectorAll('.challenge-card').forEach(card => {
            this.setupChallengeCard(card);
        });

        // Update stats display
        this.updateStats();
    }

    setupChallengeCard(card) {
        const checkBtn = card.querySelector('.check-btn');
        const answers = card.querySelectorAll('.challenge-answer');
        const result = card.querySelector('.challenge-result');

        checkBtn.addEventListener('click', () => {
            this.checkChallengeAnswers(card, answers, result, checkBtn);
        });

        // Allow Enter key to submit
        answers.forEach(input => {
            input.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    checkBtn.click();
                }
            });
        });
    }

    checkChallengeAnswers(card, answers, result, checkBtn) {
        let allCorrect = true;
        let correctCount = 0;

        // Disable button during checking
        checkBtn.disabled = true;
        checkBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Checking...';

        answers.forEach((input, index) => {
            const userAnswer = parseInt(input.value);
            const correctAnswer = parseInt(input.dataset.answer);
            
            if (userAnswer === correctAnswer) {
                input.classList.remove('incorrect');
                input.classList.add('correct');
                correctCount++;
            } else {
                input.classList.remove('correct');
                input.classList.add('incorrect');
                allCorrect = false;
            }
        });

        // Update stats
        this.challengeStats.totalAnswers += answers.length;
        this.challengeStats.correctAnswers += correctCount;

        if (allCorrect) {
            this.challengeStats.challengesSolved++;
            result.className = 'challenge-result success';
            result.innerHTML = '<i class="fas fa-check-circle"></i> Perfect! All answers are correct!';
        } else {
            result.className = 'challenge-result error';
            result.innerHTML = `<i class="fas fa-times-circle"></i> ${correctCount}/${answers.length} correct. Try again!`;
        }

        // Re-enable button immediately after showing result
        checkBtn.disabled = false;
        checkBtn.innerHTML = '<i class="fas fa-check"></i> Check Answers';

        // Update stats display
        this.updateStats();
    }

    updateStats() {
        const challengesSolvedEl = document.getElementById('challengesSolved');
        const correctAnswersEl = document.getElementById('correctAnswers');
        const accuracyEl = document.getElementById('accuracy');

        if (challengesSolvedEl) {
            challengesSolvedEl.textContent = this.challengeStats.challengesSolved;
        }

        if (correctAnswersEl) {
            correctAnswersEl.textContent = this.challengeStats.correctAnswers;
        }

        if (accuracyEl) {
            const accuracy = this.challengeStats.totalAnswers > 0 
                ? Math.round((this.challengeStats.correctAnswers / this.challengeStats.totalAnswers) * 100)
                : 0;
            accuracyEl.textContent = `${accuracy}%`;
        }
    }


    // Setup FAQ functionality
    setupFAQ() {
        // Setup FAQ accordion
        document.querySelectorAll('.faq-item').forEach(item => {
            this.setupFAQItem(item);
        });
    }

    setupFAQItem(item) {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            this.toggleFAQItem(item);
        });
    }

    toggleFAQItem(item) {
        const isActive = item.classList.contains('active');
        
        // Close all other FAQ items
        document.querySelectorAll('.faq-item').forEach(faqItem => {
            if (faqItem !== item) {
                faqItem.classList.remove('active');
            }
        });
        
        // Toggle current item
        if (isActive) {
            item.classList.remove('active');
        } else {
            item.classList.add('active');
        }
    }

    // Setup navigation functionality
    setupNavigation() {
        const navToggle = document.getElementById('navToggle');
        const navMenu = document.getElementById('navMenu');
        const navLinks = document.querySelectorAll('.nav-link');

        // Mobile menu toggle
        if (navToggle && navMenu) {
            navToggle.addEventListener('click', () => {
                navToggle.classList.toggle('active');
                navMenu.classList.toggle('active');
            });
        }

        // Close mobile menu when clicking on links
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });

        // Smooth scrolling for navigation links
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // Setup footer functionality
    setupFooter() {
        const currentYearElement = document.getElementById('currentYear');
        if (currentYearElement) {
            const currentYear = new Date().getFullYear();
            currentYearElement.textContent = currentYear;
        }
    }


    // Mathematical pattern verification
    verifyPattern() {
        const equations = [
            {a: 3, b: 4, result: 19},
            {a: 5, b: 6, result: 41},
            {a: 2, b: 8, result: 66},
            {a: 5, b: 1, result: 6},
            {a: 1, b: 3, result: 10}
        ];
        
        console.log('Pattern Verification: a + b = a + b²');
        equations.forEach(eq => {
            const patternResult = eq.a + (eq.b * eq.b);
            const isCorrect = patternResult === eq.result;
            console.log(`${eq.a} + ${eq.b} = ${eq.result}: ${isCorrect ? '✓' : '✗'} (Pattern: ${patternResult})`);
        });
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const app = new MathPuzzleApp();
    
    // Make app globally available for debugging
    window.mathPuzzleApp = app;
    
    // Verify the pattern
    app.verifyPattern();
    
    // Add some visual feedback
    console.log('%c🧮 Mathematical Pattern Puzzle', 'font-size: 20px; color: #2563eb; font-weight: bold;');
    console.log('%cPattern: a + b = a + b²', 'color: #7c3aed; font-style: italic;');
    console.log('%cAnswer: 1 + 3 = 10', 'color: #10b981; font-weight: bold;');
});

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = MathPuzzleApp;
}