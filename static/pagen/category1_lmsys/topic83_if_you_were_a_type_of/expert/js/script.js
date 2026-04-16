// Quiz Data
const quizQuestions = [
    {
        question: "What's your food vibe?",
        options: [
            "I love classic comfort food",
            "I'll try anything once",
            "Fine dining all the way",
            "I like healthy and light meals",
            "Street food and snacks",
            "I cook my own creations"
        ]
    },
    {
        question: "Pick your dream travel destination",
        options: [
            "Italy 🇮🇹 (classic, rich culture)",
            "France 🇫🇷 (romantic, refined)",
            "USA 🇺🇸 (bold, versatile)",
            "Switzerland 🇨🇭 (comfort, balance)",
            "Greece 🇬🇷 (unique, bold)",
            "Denmark 🇩🇰 (adventurous, sharp)"
        ]
    },
    {
        question: "What's your guilty pleasure?",
        options: [
            "Binge-watching shows",
            "Midnight snacking",
            "Overplanning trips",
            "Shopping sprees",
            "Extreme adventures",
            "Staying in bed all day"
        ]
    },
    {
        question: "How do you like your cheese?",
        options: [
            "Melted on pizza 🍕",
            "In a fancy cheese board 🧺",
            "On a burger 🍔",
            "Crumbled in a salad 🥗",
            "Straight from the block 😅",
            "With wine 🍷"
        ]
    },
    {
        question: "How do you handle stress?",
        options: [
            "I tackle it head-on with a plan",
            "I talk it through with friends",
            "I need some alone time to process",
            "I channel it into creative projects",
            "I exercise or do something physical",
            "I meditate or practice mindfulness"
        ]
    },
    {
        question: "What's your communication style?",
        options: [
            "Direct and to the point",
            "Warm and empathetic",
            "Thoughtful and measured",
            "Creative and expressive",
            "Enthusiastic and energetic",
            "Calm and reassuring"
        ]
    },
    {
        question: "What motivates you most?",
        options: [
            "Achieving goals and success",
            "Helping and supporting others",
            "Personal growth and learning",
            "Creative expression and innovation",
            "Adventure and new experiences",
            "Inner peace and balance"
        ]
    },
    {
        question: "How do you approach new relationships?",
        options: [
            "I'm cautious and take time to build trust",
            "I'm warm and welcoming from the start",
            "I observe and get to know them gradually",
            "I'm excited to share creative ideas",
            "I'm enthusiastic and make friends easily",
            "I'm calm and let things develop naturally"
        ]
    }
];

// Cheese Personality Results
const cheeseResults = {
    cheddar: {
        emoji: "🧀",
        name: "Cheddar",
        description: "You're the reliable friend everyone counts on. Like cheddar, you're versatile, dependable, and always there when needed. You have a classic appeal that never goes out of style.",
        traits: ["Dependable", "Classic", "Always a favorite", "Versatile"],
        perfectFor: "Leaders, mentors, and those who value tradition",
        personality: "You're the backbone of any group - steady, reliable, and always dependable. People turn to you for advice and support because they know you'll be there.",
        famousPeople: "Tom Hanks, Oprah Winfrey, Denzel Washington",
        bestPairings: "🍷 Red wine, 🍎 apples, 🥖 crusty bread",
        oppositeCheese: "Blue Cheese - while you're dependable, they're bold and unpredictable"
    },
    brie: {
        emoji: "🧀",
        name: "Brie",
        description: "You're gentle, creative, and have a soft exterior that protects a rich inner world. Like brie, you're sophisticated yet approachable, with layers of complexity.",
        traits: ["Soft", "Approachable", "Creative flair", "Sophisticated"],
        perfectFor: "Artists, creatives, and empathetic souls",
        personality: "You have a gentle soul with hidden depths. You're creative, empathetic, and people feel comfortable opening up to you.",
        famousPeople: "Emma Stone, Ryan Gosling, Audrey Hepburn",
        bestPairings: "🍾 Champagne, 🍇 grapes, 🍯 honey",
        oppositeCheese: "Parmesan - while you're gentle, they're intense and sharp"
    },
    blue: {
        emoji: "🧀",
        name: "Blue Cheese",
        description: "You're not for everyone, and that's exactly how you like it. You're bold, unique, and have a distinctive personality that some love and others need time to appreciate.",
        traits: ["Bold", "Unique", "Acquired taste", "Intense"],
        perfectFor: "Innovators, rebels, and those who march to their own beat",
        personality: "You're unapologetically yourself and don't care about fitting in. You're bold, creative, and have a unique perspective that sets you apart.",
        famousPeople: "Lady Gaga, Elon Musk, Björk",
        bestPairings: "🍷 Port wine, 🍯 honey, 🍇 pears",
        oppositeCheese: "Mozzarella - while you're bold, they're mild and adaptable"
    },
    mozzarella: {
        emoji: "🧀",
        name: "Mozzarella",
        description: "You're fresh, adaptable, and get along with everyone. Like mozzarella, you're versatile and can fit into any situation while maintaining your authentic self.",
        traits: ["Fresh", "Adaptable", "Goes with anything", "Versatile"],
        perfectFor: "Social butterflies, mediators, and team players",
        personality: "You're the social glue that brings people together. You're adaptable, friendly, and have a natural ability to make everyone feel comfortable.",
        famousPeople: "Ellen DeGeneres, Jimmy Fallon, Jennifer Lawrence",
        bestPairings: "🍅 tomatoes, 🥬 basil, 🫒 olive oil",
        oppositeCheese: "Blue Cheese - while you're mild, they're bold and intense"
    },
    parmesan: {
        emoji: "🧀",
        name: "Parmesan",
        description: "You have depth, sophistication, and wisdom that comes with experience. Like parmesan, you're intense, complex, and add richness to everything you touch.",
        traits: ["Sophisticated", "Aged wisdom", "Intense flavor", "Complex"],
        perfectFor: "Mentors, intellectuals, and those with refined tastes",
        personality: "You're wise beyond your years and have a sophisticated understanding of life. People seek your advice because of your depth and experience.",
        famousPeople: "Morgan Freeman, Meryl Streep, Anthony Hopkins",
        bestPairings: "🍷 Aged wine, 🍝 pasta, 🥖 artisan bread",
        oppositeCheese: "Brie - while you're intense, they're gentle and soft"
    },
    goat: {
        emoji: "🧀",
        name: "Goat Cheese",
        description: "You're independent, have a distinctive personality, and aren't afraid to be different. Like goat cheese, you have a tangy, unique flavor that stands out from the crowd.",
        traits: ["Tangy", "Independent", "Distinctive", "Unique"],
        perfectFor: "Free spirits, artists, and independent thinkers",
        personality: "You're a free spirit who marches to your own drum. You're independent, creative, and have a distinctive personality that makes you memorable.",
        famousPeople: "Johnny Depp, Björk, Tim Burton",
        bestPairings: "🍯 honey, 🍇 figs, 🥗 mixed greens",
        oppositeCheese: "Cheddar - while you're unique, they're classic and dependable"
    },
    gouda: {
        emoji: "🧀",
        name: "Gouda",
        description: "You're warm, nurturing, and family-oriented with a balanced approach to life. Like gouda, you bring comfort and stability to those around you while maintaining your own distinct character.",
        traits: ["Warm", "Family-oriented", "Balanced", "Nurturing"],
        perfectFor: "Caregivers, family leaders, and those who value harmony",
        personality: "You're the heart of your family and friend groups. You bring warmth, stability, and comfort to everyone around you while maintaining your own unique character.",
        famousPeople: "Michelle Obama, Tom Hanks, Ellen DeGeneres",
        bestPairings: "🍷 Red wine, 🍎 apples, 🥖 artisan bread",
        oppositeCheese: "Blue Cheese - while you're warm and balanced, they're bold and intense"
    },
    feta: {
        emoji: "🧀",
        name: "Feta",
        description: "You have a sharp wit, lively personality, and aren't afraid to speak your mind. Like feta, you add a salty, tangy kick to conversations and bring energy to any gathering.",
        traits: ["Salty", "Sharp", "Lively", "Witty"],
        perfectFor: "Entertainers, witty friends, and those who love lively debates",
        personality: "You're the life of the party with a sharp wit and lively energy. You're not afraid to speak your mind and always add a tangy kick to conversations.",
        famousPeople: "Robin Williams, Tina Fey, Ryan Reynolds",
        bestPairings: "🫒 olives, 🍅 tomatoes, 🥗 fresh salads",
        oppositeCheese: "Brie - while you're sharp and lively, they're gentle and soft"
    }
};

// Quiz State
let currentQuestion = 0;
let answers = [];
let isQuizComplete = false;

// Initialize the quiz
function initQuiz() {
    currentQuestion = 0;
    answers = [];
    isQuizComplete = false;
    showQuestion();
    updateProgress();
}

// Navbar functionality
function initNavbar() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// Smooth scroll to section
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

// Scroll to top function
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Show current question
function showQuestion() {
    const questionContainer = document.getElementById('questionContainer');
    const question = quizQuestions[currentQuestion];
    
    questionContainer.innerHTML = `
        <div class="question">${question.question}</div>
        <div class="options">
            ${question.options.map((option, index) => `
                <div class="option" onclick="selectOption(${index})" data-option="${index}">
                    ${option}
                </div>
            `).join('')}
        </div>
    `;
    
    updateNavigation();
}

// Select an option
function selectOption(optionIndex) {
    // Remove previous selection
    document.querySelectorAll('.option').forEach(option => {
        option.classList.remove('selected');
    });
    
    // Add selection to clicked option
    document.querySelector(`[data-option="${optionIndex}"]`).classList.add('selected');
    
    // Store answer
    answers[currentQuestion] = optionIndex;
    
    // Enable next button
    document.getElementById('nextButton').disabled = false;
}

// Next question
function nextQuestion() {
    if (currentQuestion < quizQuestions.length - 1) {
        currentQuestion++;
        showQuestion();
        updateProgress();
    } else {
        completeQuiz();
    }
}

// Previous question
function previousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        showQuestion();
        updateProgress();
        
        // Restore previous answer if exists
        if (answers[currentQuestion] !== undefined) {
            document.querySelector(`[data-option="${answers[currentQuestion]}"]`).classList.add('selected');
        }
    }
}

// Update progress bar
function updateProgress() {
    const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;
    document.getElementById('progressFill').style.width = progress + '%';
    document.getElementById('progressText').textContent = `Question ${currentQuestion + 1} of ${quizQuestions.length}`;
}

// Update navigation buttons
function updateNavigation() {
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');
    
    prevButton.disabled = currentQuestion === 0;
    nextButton.disabled = answers[currentQuestion] === undefined;
    
    if (currentQuestion === quizQuestions.length - 1) {
        nextButton.innerHTML = 'Get Results <i class="fas fa-arrow-right"></i>';
    } else {
        nextButton.innerHTML = 'Next <i class="fas fa-arrow-right"></i>';
    }
}

// Complete quiz and show results
function completeQuiz() {
    const result = calculateResult();
    showResults(result);
    isQuizComplete = true;
}

// Calculate result based on answers
function calculateResult() {
    // Simple scoring system - in a real app, you'd have more sophisticated logic
    const scores = {
        cheddar: 0,
        brie: 0,
        blue: 0,
        mozzarella: 0,
        parmesan: 0,
        goat: 0,
        gouda: 0,
        feta: 0
    };
    
    // Map answers to cheese types (simplified logic)
    answers.forEach((answer, index) => {
        switch (index) {
            case 0: // Food vibe question
                if (answer === 0) scores.cheddar += 2; // Classic comfort food
                if (answer === 1) scores.blue += 2; // Try anything once
                if (answer === 2) scores.parmesan += 2; // Fine dining
                if (answer === 3) scores.mozzarella += 2; // Healthy and light
                if (answer === 4) scores.feta += 2; // Street food
                if (answer === 5) scores.goat += 2; // Cook own creations
                break;
            case 1: // Travel destination
                if (answer === 0) scores.parmesan += 2; // Italy - classic, rich culture
                if (answer === 1) scores.brie += 2; // France - romantic, refined
                if (answer === 2) scores.cheddar += 2; // USA - bold, versatile
                if (answer === 3) scores.mozzarella += 2; // Switzerland - comfort, balance
                if (answer === 4) scores.goat += 2; // Greece - unique, bold
                if (answer === 5) scores.blue += 2; // Denmark - adventurous, sharp
                break;
            case 2: // Guilty pleasure
                if (answer === 0) scores.cheddar += 2; // Binge-watching shows
                if (answer === 1) scores.mozzarella += 2; // Midnight snacking
                if (answer === 2) scores.parmesan += 2; // Overplanning trips
                if (answer === 3) scores.brie += 2; // Shopping sprees
                if (answer === 4) scores.blue += 2; // Extreme adventures
                if (answer === 5) scores.gouda += 2; // Staying in bed all day
                break;
            case 3: // How you like your cheese
                if (answer === 0) scores.mozzarella += 2; // Melted on pizza
                if (answer === 1) scores.brie += 2; // Fancy cheese board
                if (answer === 2) scores.cheddar += 2; // On a burger
                if (answer === 3) scores.feta += 2; // Crumbled in salad
                if (answer === 4) scores.parmesan += 2; // Straight from block
                if (answer === 5) scores.gouda += 2; // With wine
                break;
            case 4: // Stress handling
                if (answer === 0) scores.cheddar += 2; // Tackle head-on
                if (answer === 1) scores.mozzarella += 2; // Talk with friends
                if (answer === 2) scores.brie += 2; // Alone time
                if (answer === 3) scores.blue += 2; // Creative projects
                if (answer === 4) scores.goat += 2; // Physical activity
                if (answer === 5) scores.gouda += 2; // Meditation
                break;
            case 5: // Communication style
                if (answer === 0) scores.cheddar += 2; // Direct and to the point
                if (answer === 1) scores.brie += 2; // Warm and empathetic
                if (answer === 2) scores.parmesan += 2; // Thoughtful and measured
                if (answer === 3) scores.blue += 2; // Creative and expressive
                if (answer === 4) scores.feta += 2; // Enthusiastic and energetic
                if (answer === 5) scores.gouda += 2; // Calm and reassuring
                break;
            case 6: // Motivation
                if (answer === 0) scores.cheddar += 2; // Achieving goals
                if (answer === 1) scores.gouda += 2; // Helping others
                if (answer === 2) scores.parmesan += 2; // Personal growth
                if (answer === 3) scores.blue += 2; // Creative expression
                if (answer === 4) scores.feta += 2; // Adventure
                if (answer === 5) scores.brie += 2; // Inner peace
                break;
            case 7: // Relationships
                if (answer === 0) scores.parmesan += 2; // Cautious and take time
                if (answer === 1) scores.mozzarella += 2; // Warm and welcoming
                if (answer === 2) scores.brie += 2; // Observe and get to know
                if (answer === 3) scores.blue += 2; // Excited to share ideas
                if (answer === 4) scores.feta += 2; // Enthusiastic and make friends
                if (answer === 5) scores.gouda += 2; // Calm and let develop
                break;
        }
    });
    
    // Find the cheese with the highest score
    let maxScore = 0;
    let resultCheese = 'cheddar';
    
    for (const [cheese, score] of Object.entries(scores)) {
        if (score > maxScore) {
            maxScore = score;
            resultCheese = cheese;
        }
    }
    
    return resultCheese;
}

// Show results
function showResults(cheeseType) {
    const result = cheeseResults[cheeseType];
    const resultContent = document.getElementById('resultContent');
    
    resultContent.innerHTML = `
        <div class="result-cheese">${result.emoji}</div>
        <h2 class="result-title">You are ${result.name}!</h2>
        <p class="result-description">${result.description}</p>
        <div class="result-traits">
            ${result.traits.map(trait => `<span class="result-trait">${trait}</span>`).join('')}
        </div>
        <div class="personality-match">
            <strong>Perfect for:</strong> ${result.perfectFor}
        </div>
        <p class="personality-description">${result.personality}</p>
        
        <div class="result-extras">
            <div class="result-extra">
                <h4>🌟 Famous People Like You</h4>
                <p>${result.famousPeople}</p>
            </div>
            <div class="result-extra">
                <h4>🍽️ Best Cheese Pairings</h4>
                <p>${result.bestPairings}</p>
            </div>
            <div class="result-extra">
                <h4>🔄 Your Opposite Cheese</h4>
                <p>${result.oppositeCheese}</p>
            </div>
        </div>
        
        <div class="result-actions">
            <button onclick="retakeQuiz()" class="retake-btn">🔄 Retake Quiz</button>
        </div>
    `;
    
    // Hide quiz section and show results
    document.getElementById('quiz').style.display = 'none';
    document.getElementById('results').style.display = 'block';
    
    // Scroll to results
    document.getElementById('results').scrollIntoView({ behavior: 'smooth' });
}

// Retake quiz
function retakeQuiz() {
    document.getElementById('results').style.display = 'none';
    document.getElementById('quiz').style.display = 'block';
    initQuiz();
}

// Share result
function shareResult() {
    const resultText = `I just discovered I'm a ${cheeseResults[calculateResult()].name} cheese! 🧀 Take the quiz to find your cheese personality: ${window.location.href}`;
    
    if (navigator.share) {
        navigator.share({
            title: 'My Cheese Personality Quiz Result',
            text: resultText,
            url: window.location.href
        });
    } else {
        // Fallback to copying to clipboard
        navigator.clipboard.writeText(resultText).then(() => {
            alert('Result copied to clipboard!');
        });
    }
}

// Navigation functions
function scrollToQuiz() {
    document.getElementById('quiz').scrollIntoView({ behavior: 'smooth' });
}

// Initialize the app when the page loads
document.addEventListener('DOMContentLoaded', function() {
    initQuiz();
    
    // Add smooth scrolling to all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // Add scroll animations
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
    
    // Observe all sections for scroll animations
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
    
    // Initialize navbar
    initNavbar();
    
    // Add hover effects to cheese cards
    document.querySelectorAll('.cheese-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Add click effects to options
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('option')) {
            e.target.style.transform = 'scale(0.95)';
            setTimeout(() => {
                e.target.style.transform = 'scale(1)';
            }, 150);
        }
    });
});

// Add keyboard navigation for accessibility
document.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
        if (e.target.classList.contains('option')) {
            e.preventDefault();
            e.target.click();
        }
    }
    
    if (e.key === 'ArrowLeft' && currentQuestion > 0) {
        previousQuestion();
    }
    
    if (e.key === 'ArrowRight' && currentQuestion < quizQuestions.length - 1) {
        nextQuestion();
    }
});