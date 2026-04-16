// Main JavaScript for Word Puzzle Challenge Game

class WordPuzzleGame {
    constructor() {
        this.currentPuzzle = 0;

        this.init();
    }

    init() {
        this.setupMainPuzzle();
        this.setupDragAndDrop();
        this.setupNavigation();
        this.setupAnimations();
        this.setupFooter();
        this.setupMobileNav();
    }

    // Main Puzzle Section
    setupMainPuzzle() {
        const optionButtons = document.querySelectorAll('.option-btn');
        const feedback = document.getElementById('feedback');
        const tryAgainBtn = document.querySelector('.try-again-btn');

        optionButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                if (button.classList.contains('selected')) return;

                const selectedOption = button.dataset.option;
                const selectedWord = button.dataset.word;
                const correctAnswer = 'B'; // Car is the odd one out
                const isCorrect = selectedOption === correctAnswer;

                // Mark all buttons as selected
                optionButtons.forEach(btn => btn.classList.add('selected'));

                // Mark correct/incorrect
                if (isCorrect) {
                    button.classList.add('correct');
                    this.showFeedback(true, 'Car is not a fruit, while the others are fruits!');
                } else {
                    button.classList.add('incorrect');
                    // Mark correct answer
                    optionButtons.forEach(btn => {
                        if (btn.dataset.option === correctAnswer) {
                            btn.classList.add('correct');
                        }
                    });
                    this.showFeedback(false, 'Car is not a fruit, while the others are fruits!');
                }

                // Show feedback
                feedback.classList.remove('hidden');
                this.animateFeedback(isCorrect);
            });
        });

        tryAgainBtn.addEventListener('click', () => {
            this.resetMainPuzzle();
        });
    }

    showFeedback(isCorrect, explanation) {
        const feedback = document.getElementById('feedback');
        const feedbackIcon = feedback.querySelector('.feedback-icon');
        const feedbackText = feedback.querySelector('.feedback-text');
        const feedbackExplanation = feedback.querySelector('.feedback-explanation');

        feedbackIcon.className = `feedback-icon ${isCorrect ? 'correct' : 'incorrect'}`;
        feedbackIcon.innerHTML = isCorrect ? '✅' : '❌';
        feedbackText.textContent = isCorrect ? 'Correct!' : 'Incorrect!';
        feedbackExplanation.textContent = explanation;
    }

    animateFeedback(isCorrect) {
        const feedback = document.getElementById('feedback');
        feedback.style.animation = 'none';
        setTimeout(() => {
            feedback.style.animation = 'slideInUp 0.5s ease-out';
        }, 10);
    }

    resetMainPuzzle() {
        const optionButtons = document.querySelectorAll('.option-btn');
        const feedback = document.getElementById('feedback');

        optionButtons.forEach(button => {
            button.classList.remove('selected', 'correct', 'incorrect');
        });

        feedback.classList.add('hidden');
    }

    // Drag and Drop Classification Game
    setupDragAndDrop() {
        const draggableWords = document.querySelectorAll('.draggable-word');
        const dropZones = document.querySelectorAll('.drop-zone');
        const progressFill = document.querySelector('.progress-fill');
        const progressText = document.querySelector('.progress-text');

        let draggedElement = null;
        let correctCount = 0;
        const totalWords = draggableWords.length;

        // Make words draggable
        draggableWords.forEach(word => {
            word.addEventListener('dragstart', (e) => {
                draggedElement = e.target;
                e.target.classList.add('dragging');
                e.dataTransfer.effectAllowed = 'move';
                e.dataTransfer.setData('text/html', e.target.outerHTML);
            });

            word.addEventListener('dragend', (e) => {
                e.target.classList.remove('dragging');
                draggedElement = null;
            });
        });

        // Setup drop zones
        dropZones.forEach(zone => {
            zone.addEventListener('dragover', (e) => {
                e.preventDefault();
                e.dataTransfer.dropEffect = 'move';

                if (draggedElement) {
                    const category = zone.parentElement.dataset.category;
                    const wordCategory = draggedElement.dataset.category;
                    const isCorrect = category === wordCategory;

                    // Add appropriate visual feedback
                    if (isCorrect) {
                        zone.parentElement.classList.add('drag-over');
                        zone.parentElement.classList.remove('drag-over-incorrect');
                    } else {
                        zone.parentElement.classList.add('drag-over-incorrect');
                        zone.parentElement.classList.remove('drag-over');
                    }
                }
            });

            zone.addEventListener('dragleave', (e) => {
                zone.parentElement.classList.remove('drag-over', 'drag-over-incorrect');
            });

            zone.addEventListener('drop', (e) => {
                e.preventDefault();
                zone.parentElement.classList.remove('drag-over', 'drag-over-incorrect');

                if (draggedElement) {
                    const category = zone.parentElement.dataset.category;
                    const wordCategory = draggedElement.dataset.category;
                    const isCorrect = category === wordCategory;

                    if (isCorrect) {
                        // Create dropped word element
                        const droppedWord = document.createElement('div');
                        droppedWord.className = 'dropped-word';
                        droppedWord.textContent = draggedElement.textContent;
                        droppedWord.style.background = 'linear-gradient(135deg, #4ade80, #22c55e)';

                        zone.appendChild(droppedWord);

                        // Remove original word
                        draggedElement.remove();

                        // Update progress
                        correctCount++;
                        const progress = (correctCount / totalWords) * 100;
                        progressFill.style.width = `${progress}%`;

                        if (correctCount === totalWords) {
                            progressText.textContent = '🎉 Perfect! All words sorted correctly!';
                            progressText.style.color = '#4ade80';
                        } else {
                            progressText.textContent = `${correctCount}/${totalWords} words sorted correctly!`;
                        }
                    } else {
                        // Show error feedback for incorrect drop
                        this.showDropError(zone.parentElement, draggedElement);
                    }
                }
            });
        });
    }

    showDropError(dropZone, draggedElement) {
        // Add error styling to the drop zone
        dropZone.classList.add('drop-error');

        // Create temporary error message
        const errorMsg = document.createElement('div');
        errorMsg.className = 'drop-error-message';
        errorMsg.textContent = `❌ ${draggedElement.textContent} doesn't belong here!`;
        errorMsg.style.cssText = `
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: #f87171;
            color: white;
            padding: 0.5rem 1rem;
            border-radius: 8px;
            font-size: 0.875rem;
            font-weight: 600;
            z-index: 1000;
            animation: shake 0.5s ease-in-out;
        `;

        dropZone.appendChild(errorMsg);

        // Remove error styling and message after 2 seconds
        setTimeout(() => {
            dropZone.classList.remove('drop-error');
            if (errorMsg.parentNode) {
                errorMsg.remove();
            }
        }, 2000);
    }



    // Navigation
    setupNavigation() {
        const navLinks = document.querySelectorAll('.nav-link');

        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetSection = document.querySelector(targetId);

                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Update active nav link on scroll
        window.addEventListener('scroll', () => {
            const sections = document.querySelectorAll('section[id]');
            const scrollPos = window.scrollY + 100;

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                const sectionId = section.getAttribute('id');

                if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${sectionId}`) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        });
    }

    // Animations and Effects
    setupAnimations() {
        // Intersection Observer for scroll animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
                }
            });
        }, observerOptions);

        // Observe elements for animation
        const animateElements = document.querySelectorAll('.puzzle-card, .fact-card, .stat');
        animateElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            observer.observe(el);
        });

        // Add hover effects to cards
        const cards = document.querySelectorAll('.puzzle-card, .fact-card');
        cards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-5px) scale(1.02)';
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0) scale(1)';
            });
        });
    }

    // Utility Methods
    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${type === 'success' ? '#4ade80' : type === 'error' ? '#f87171' : '#667eea'};
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            z-index: 10000;
            animation: slideInRight 0.3s ease-out;
        `;

        document.body.appendChild(notification);

        setTimeout(() => {
            notification.style.animation = 'slideOutRight 0.3s ease-out';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }

    // Add CSS for notifications
    addNotificationStyles() {
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
        `;
        document.head.appendChild(style);
    }

    // Footer Setup
    setupFooter() {
        const currentYearElement = document.getElementById('current-year');
        if (currentYearElement) {
            currentYearElement.textContent = new Date().getFullYear();
        }
    }

    // Mobile Navigation Setup
    setupMobileNav() {
        const hamburger = document.getElementById('hamburger');
        const nav = document.querySelector('.nav');

        if (hamburger && nav) {
            hamburger.addEventListener('click', () => {
                hamburger.classList.toggle('active');
                nav.classList.toggle('active');
            });

            // Close menu when clicking on nav links
            const navLinks = document.querySelectorAll('.nav-link');
            navLinks.forEach(link => {
                link.addEventListener('click', () => {
                    hamburger.classList.remove('active');
                    nav.classList.remove('active');
                });
            });

            // Close menu when clicking outside
            document.addEventListener('click', (e) => {
                if (!nav.contains(e.target) && !hamburger.contains(e.target)) {
                    hamburger.classList.remove('active');
                    nav.classList.remove('active');
                }
            });
        }
    }
}

// Initialize the game when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const game = new WordPuzzleGame();
    game.addNotificationStyles();

    // Add some fun interactions
    const logo = document.querySelector('.logo');
    logo.addEventListener('click', () => {
        logo.style.animation = 'pulse 0.6s ease-in-out';
        setTimeout(() => {
            logo.style.animation = '';
        }, 600);
    });

    // Add keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            const focusedElement = document.activeElement;
            if (focusedElement && focusedElement.classList.contains('option-btn')) {
                focusedElement.click();
            }
        }
    });

    // Add loading animation
    window.addEventListener('load', () => {
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.5s ease-in-out';
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 100);
    });
});

// Service Worker for offline functionality (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}