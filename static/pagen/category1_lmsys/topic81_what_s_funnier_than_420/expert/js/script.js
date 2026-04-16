// Meme Numbers Interactive Features
document.addEventListener('DOMContentLoaded', function() {
    
    // Meme Generator Data
    const memeData = {
        420: [
            "🌿 Cannabis culture icon! The OG meme number that started it all.",
            "💨 Time to blaze it! 420 represents the ultimate chill vibes.",
            "🎵 Grateful Dead approved! This number has serious musical heritage.",
            "📅 April 20th is basically a national holiday for stoners worldwide."
        ],
        69: [
            "😏 Nice! The internet's favorite response to anything mildly amusing.",
            "🔄 Reciprocal perfection! 69 is the ultimate balanced number.",
            "👍 Just say 'nice' and you're instantly part of the club.",
            "😄 The number that makes everyone giggle like teenagers."
        ],
        69420: [
            "🔥 The ultimate meme combo! When 69 and 420 had a baby.",
            "💯 Maximum funny achieved! This is peak internet humor.",
            "🎯 Perfect fusion of two legendary numbers. Nothing beats this.",
            "🚀 The meme number that ascended to god-tier status."
        ],
        1337: [
            "💻 Leet speak! The original way to show you're elite online.",
            "🎮 Hacker culture at its finest. 1337 = 'elite' in numbers.",
            "🔥 OG internet flex! This number predates most memes.",
            "⚡ The number that started the whole 'leet speak' movement."
        ],
        80085: [
            "🧮 Calculator boobs! The classic upside-down calculator prank.",
            "👀 Flip your calculator and see the magic! Pure nostalgia.",
            "😄 The number that made math class way more interesting.",
            "🎯 Before smartphones, we had calculators and dirty minds."
        ],
        421: [
            "📈 One step higher! The ultimate dad joke of meme numbers.",
            "😄 What's funnier than 420? 421, because it's one step higher!",
            "🎯 Meta humor at its finest. This is peak dad joke energy.",
            "🔥 The number that answers the question 'What's funnier than 420?'"
        ],
        666: [
            "😈 Devil's number! Edgy, mysterious, and just a little rebellious.",
            "🔥 The number that makes you feel like a badass.",
            "⚡ Perfect for when you want to channel your inner rebel.",
            "🎯 The OG edgy number before the internet made everything edgy."
        ],
        777: [
            "🎰 Casino jackpot vibes! Triple sevens for maximum luck.",
            "🍀 Lucky number seven times three! You're feeling lucky!",
            "💰 Jackpot energy! This number screams 'winner winner chicken dinner'.",
            "🎯 The number that makes you want to hit the slots."
        ],
        42: [
            "🌌 The answer to life, the universe, and everything! (Hitchhiker's Guide)",
            "🤖 Deep thought approved! This number has serious philosophical weight.",
            "📚 Douglas Adams would be proud! The ultimate answer to everything.",
            "🎯 The number that makes you question the meaning of existence."
        ],
        21: [
            "🎲 Blackjack! The perfect hand in the game of 21.",
            "🃏 Vegas vibes! This number screams 'hit me' or 'stay'.",
            "🎰 Casino energy! 21 is the number that can make or break you.",
            "🎯 The number that makes you want to double down."
        ]
    };

    // Initialize all interactive features
    initMemeGenerator();
    initScrollAnimations();
    initMemeCardInteractions();
    initFloatingNumbers();
    initHeroScrollIndicator();
    initDynamicYear();

    // Meme Generator Functionality
    function initMemeGenerator() {
        const spinBtn = document.getElementById('spinBtn');
        const wheel = document.getElementById('memeWheel');
        const resultNumber = document.getElementById('resultNumber');
        const resultJoke = document.getElementById('resultJoke');
        const celebrationEffect = document.getElementById('celebrationEffect');

        if (!spinBtn || !wheel || !resultNumber || !resultJoke) return;

        let isSpinning = false;

        spinBtn.addEventListener('click', function() {
            if (isSpinning) return;
            
            isSpinning = true;
            spinBtn.disabled = true;
            spinBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Spinning...';

            // Get random number and joke
            const numbers = Object.keys(memeData);
            const randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
            const randomJoke = memeData[randomNumber][Math.floor(Math.random() * memeData[randomNumber].length)];

            // Spin animation
            const spinDuration = 2000;
            const startTime = Date.now();
            const startRotation = wheel.style.transform ? 
                parseInt(wheel.style.transform.match(/\d+/)[0]) || 0 : 0;
            const endRotation = startRotation + 360 * 5 + Math.random() * 360; // 5 full rotations + random

            function animate() {
                const elapsed = Date.now() - startTime;
                const progress = Math.min(elapsed / spinDuration, 1);
                const easeOut = 1 - Math.pow(1 - progress, 3);
                const currentRotation = startRotation + (endRotation - startRotation) * easeOut;
                
                wheel.style.transform = `rotate(${currentRotation}deg)`;

                if (progress < 1) {
                    requestAnimationFrame(animate);
                } else {
                    // Show result with celebration
                    showResult(randomNumber, randomJoke);
                    
                    // Reset button
                    setTimeout(() => {
                        isSpinning = false;
                        spinBtn.disabled = false;
                        spinBtn.innerHTML = '<i class="fas fa-play"></i> Spin the Wheel';
                    }, 1000);
                }
            }

            animate();
        });

        function showResult(number, joke) {
            // Update result display
            resultNumber.textContent = number;
            resultJoke.textContent = joke;
            
            // Add celebration effect
            resultNumber.classList.add('celebrate');
            
            // Create confetti
            createConfetti();
            
            // Remove celebration class after animation
            setTimeout(() => {
                resultNumber.classList.remove('celebrate');
            }, 600);
        }

        function createConfetti() {
            // Clear existing confetti
            celebrationEffect.innerHTML = '';
            
            // Create confetti pieces
            for (let i = 0; i < 20; i++) {
                const confetti = document.createElement('div');
                confetti.className = 'confetti';
                confetti.style.left = Math.random() * 100 + '%';
                confetti.style.animationDelay = Math.random() * 0.5 + 's';
                confetti.style.animationDuration = (Math.random() * 1 + 1.5) + 's';
                celebrationEffect.appendChild(confetti);
            }
            
            // Remove confetti after animation
            setTimeout(() => {
                celebrationEffect.innerHTML = '';
            }, 3000);
        }
    }


    // Scroll Animations
    function initScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                }
            });
        }, observerOptions);

        // Add animation classes to elements
        const animateElements = document.querySelectorAll('.meme-card, .funny-item, .timeline-item');
        animateElements.forEach(el => {
            el.classList.add('animate-on-scroll');
            observer.observe(el);
        });
    }

    // Meme Card Interactions
    function initMemeCardInteractions() {
        const memeCards = document.querySelectorAll('.meme-card');
        
        memeCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-10px) scale(1.02)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });

            // Click to show random joke
            card.addEventListener('click', function() {
                const number = this.dataset.number;
                if (memeData[number]) {
                    const randomJoke = memeData[number][Math.floor(Math.random() * memeData[number].length)];
                    showNotification(randomJoke);
                }
            });
        });
    }

    // Floating Numbers Animation
    function initFloatingNumbers() {
        const floatingNumbers = document.querySelectorAll('.float-num');
        
        floatingNumbers.forEach((num, index) => {
            // Add random movement
            setInterval(() => {
                const randomX = Math.random() * 20 - 10;
                const randomY = Math.random() * 20 - 10;
                num.style.transform = `translate(${randomX}px, ${randomY}px) rotate(${Math.random() * 10 - 5}deg)`;
            }, 3000 + index * 500);
        });
    }

    // Notification System
    function showNotification(message, type = 'success') {
        // Remove existing notifications
        const existingNotifications = document.querySelectorAll('.notification');
        existingNotifications.forEach(notif => notif.remove());

        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <span class="notification-message">${message}</span>
                <button class="notification-close">&times;</button>
            </div>
        `;

        // Add styles
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: var(--card-bg);
            color: var(--text-primary);
            padding: 1rem 1.5rem;
            border-radius: 12px;
            border: 1px solid var(--border-color);
            box-shadow: var(--shadow-lg);
            z-index: 1000;
            transform: translateX(100%);
            transition: transform 0.3s ease;
            max-width: 400px;
        `;

        document.body.appendChild(notification);

        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);

        // Close button
        const closeBtn = notification.querySelector('.notification-close');
        closeBtn.addEventListener('click', () => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => notification.remove(), 300);
        });

        // Auto remove
        setTimeout(() => {
            if (notification.parentNode) {
                notification.style.transform = 'translateX(100%)';
                setTimeout(() => notification.remove(), 300);
            }
        }, 5000);
    }

    // Easter Eggs
    function initEasterEggs() {
        // Konami Code
        let konamiCode = [];
        const konamiSequence = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; // ↑↑↓↓←→←→BA

        document.addEventListener('keydown', function(e) {
            konamiCode.push(e.keyCode);
            if (konamiCode.length > konamiSequence.length) {
                konamiCode.shift();
            }
            
            if (konamiCode.join(',') === konamiSequence.join(',')) {
                showNotification('🎉 Konami Code activated! You found the secret! 1337 h4x0r skills!', 'success');
                konamiCode = [];
                
                // Add special effect
                document.body.style.animation = 'rainbow 2s ease-in-out';
                setTimeout(() => {
                    document.body.style.animation = '';
                }, 2000);
            }
        });

        // Add rainbow animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes rainbow {
                0% { filter: hue-rotate(0deg); }
                25% { filter: hue-rotate(90deg); }
                50% { filter: hue-rotate(180deg); }
                75% { filter: hue-rotate(270deg); }
                100% { filter: hue-rotate(360deg); }
            }
        `;
        document.head.appendChild(style);
    }

    // Initialize easter eggs
    initEasterEggs();

    // Hero Scroll Indicator
    function initHeroScrollIndicator() {
        const scrollArrow = document.querySelector('.scroll-arrow');
        if (scrollArrow) {
            scrollArrow.addEventListener('click', function() {
                const nextSection = document.querySelector('.origin-story');
                if (nextSection) {
                    nextSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        }
    }

    // Smooth scrolling for anchor links
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

    // Add loading animation
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
        
        // Animate hero elements
        const heroElements = document.querySelectorAll('.hero-title, .hero-subtitle, .stat');
        heroElements.forEach((el, index) => {
            setTimeout(() => {
                el.classList.add('fade-in-up');
            }, index * 200);
        });
    });

    // Parallax effect for floating numbers
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.float-num');
        
        parallaxElements.forEach((el, index) => {
            const speed = 0.5 + (index * 0.1);
            el.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });

    // Add click effects to numbers
        document.querySelectorAll('.meme-number, .stat-number').forEach(num => {
        num.addEventListener('click', function() {
            this.style.animation = 'pulse 0.6s ease-in-out';
            setTimeout(() => {
                this.style.animation = '';
            }, 600);
        });
    });

    // Add pulse animation
    const pulseStyle = document.createElement('style');
    pulseStyle.textContent = `
        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.1); }
            100% { transform: scale(1); }
        }
    `;
    document.head.appendChild(pulseStyle);

    // Console easter egg
    console.log(`
    🌿 Welcome to the Meme Numbers Console! 🌿
    
    Try these commands:
    - memeGenerator() - Generate a random meme number
    - showAllMemes() - Display all meme numbers
    - easterEgg() - Activate special effects
    
    Made with ❤️ and lots of numbers!
    `);

    // Global functions for console
    window.memeGenerator = function() {
        const numbers = Object.keys(memeData);
        const randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
        const randomJoke = memeData[randomNumber][Math.floor(Math.random() * memeData[randomNumber].length)];
        console.log(`${randomNumber}: ${randomJoke}`);
        return { number: randomNumber, joke: randomJoke };
    };

    window.showAllMemes = function() {
        console.table(memeData);
        return memeData;
    };

    window.easterEgg = function() {
        showNotification('🎉 Console easter egg activated! You\'re a true 1337 h4x0r!', 'success');
        document.body.style.animation = 'rainbow 3s ease-in-out';
        setTimeout(() => {
            document.body.style.animation = '';
        }, 3000);
    };

    // Set dynamic year in footer
    function initDynamicYear() {
        const yearElement = document.getElementById('currentYear');
        if (yearElement) {
            yearElement.textContent = new Date().getFullYear();
        }
    }
});