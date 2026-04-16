// Search functionality
const searchInput = document.getElementById('searchInput');
const itemTags = document.querySelectorAll('.item-tag');
const filterButtons = document.querySelectorAll('.filter-btn');
const categoryCards = document.querySelectorAll('.category-card');

// Stats elements
const totalWordsEl = document.getElementById('totalWords');
const totalCategoriesEl = document.getElementById('totalCategories');
const visibleWordsEl = document.getElementById('visibleWords');
const searchResultsEl = document.getElementById('searchResults');

// Initialize stats
const totalWords = itemTags.length;
const totalCategories = categoryCards.length;

// Debounce timer for stats updates
let statsUpdateTimer = null;

// Function to update stats
function updateStats() {
    // Clear existing timer
    if (statsUpdateTimer) {
        clearTimeout(statsUpdateTimer);
    }
    
    // Debounce the stats update
    statsUpdateTimer = setTimeout(() => {
        const searchTerm = searchInput.value.toLowerCase().trim();
        const activeFilter = document.querySelector('.filter-btn.active').dataset.category;
        
        // Count visible words (not hidden by filter)
        let visibleWords = 0;
        let searchResults = 0;
        
        itemTags.forEach(tag => {
            const categoryCard = tag.closest('.category-card');
            const isVisible = activeFilter === 'all' || categoryCard.dataset.category === activeFilter;
            
            if (isVisible) {
                visibleWords++;
                
                // Count search results
                const word = tag.dataset.word.toLowerCase();
                if (searchTerm === '' || word.includes(searchTerm)) {
                    searchResults++;
                }
            }
        });
        
        // Update DOM with animation
        animateNumber(totalWordsEl, totalWords);
        animateNumber(totalCategoriesEl, totalCategories);
        animateNumber(visibleWordsEl, visibleWords);
        animateNumber(searchResultsEl, searchResults);
    }, 100); // 100ms debounce
}

// Function to animate number changes
function animateNumber(element, targetNumber) {
    const currentNumber = parseInt(element.textContent) || 0;
    
    if (currentNumber === targetNumber) return;
    
    // Clear any existing animation for this element
    if (element.animationTimer) {
        clearInterval(element.animationTimer);
    }
    
    const increment = targetNumber > currentNumber ? 1 : -1;
    const steps = Math.abs(targetNumber - currentNumber);
    const duration = Math.min(300, steps * 50); // Cap duration at 300ms
    const stepTime = duration / steps;
    
    element.animationTimer = setInterval(() => {
        const currentValue = parseInt(element.textContent) || 0;
        const newNumber = currentValue + increment;
        element.textContent = newNumber;
        
        if (newNumber === targetNumber || (increment > 0 && newNumber >= targetNumber) || (increment < 0 && newNumber <= targetNumber)) {
            element.textContent = targetNumber;
            clearInterval(element.animationTimer);
            element.animationTimer = null;
        }
    }, stepTime);
}

// Search and highlight functionality
searchInput.addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase().trim();
    
    itemTags.forEach(tag => {
        const word = tag.dataset.word.toLowerCase();
        const isMatch = word.includes(searchTerm);
        
        if (searchTerm === '') {
            tag.classList.remove('highlighted');
        } else if (isMatch) {
            tag.classList.add('highlighted');
        } else {
            tag.classList.remove('highlighted');
        }
    });
    
    // Update stats after search
    updateStats();
});

// Filter functionality
filterButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        this.classList.add('active');
        
        const filterCategory = this.dataset.category;
        
        categoryCards.forEach(card => {
            if (filterCategory === 'all' || card.dataset.category === filterCategory) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
        
        // Update stats after filter
        updateStats();
    });
});

// Item tag interactions
itemTags.forEach(tag => {
    tag.addEventListener('click', function() {
        const word = this.dataset.word;
        searchInput.value = word;
        searchInput.dispatchEvent(new Event('input'));
        
        // Scroll to the category containing this item
        const categoryCard = this.closest('.category-card');
        categoryCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
});

// Add some interactive animations
itemTags.forEach(tag => {
    tag.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
    });
    
    tag.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

// Add click animation to category headers
document.querySelectorAll('.category-header').forEach(header => {
    header.addEventListener('click', function() {
        const categoryCard = this.closest('.category-card');
        const items = categoryCard.querySelector('.category-items');
        
        if (items.style.display === 'none') {
            items.style.display = 'flex';
        } else {
            items.style.display = 'none';
        }
    });
});

// FAQ Interactive functionality
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', function() {
        const faqItem = this.closest('.faq-item');
        const answer = faqItem.querySelector('.faq-answer');
        
        // Toggle the answer visibility
        if (answer.style.display === 'none' || answer.style.display === '') {
            answer.style.display = 'block';
            faqItem.classList.add('expanded');
        } else {
            answer.style.display = 'none';
            faqItem.classList.remove('expanded');
        }
    });
});

// Initialize stats on page load
updateStats();