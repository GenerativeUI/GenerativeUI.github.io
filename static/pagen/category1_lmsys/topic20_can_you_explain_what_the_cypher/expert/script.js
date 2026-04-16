// Graph visualization data
const graphExamples = {
    friends: {
        nodes: [
            { id: 'alice', label: 'Alice', type: 'Person', x: 200, y: 150, properties: { name: 'Alice', age: 30, city: 'New York' } },
            { id: 'bob', label: 'Bob', type: 'Person', x: 400, y: 100, properties: { name: 'Bob', age: 28, city: 'Los Angeles' } },
            { id: 'carol', label: 'Carol', type: 'Person', x: 600, y: 150, properties: { name: 'Carol', age: 32, city: 'Chicago' } },
            { id: 'dave', label: 'Dave', type: 'Person', x: 400, y: 300, properties: { name: 'Dave', age: 29, city: 'Seattle' } },
            { id: 'eve', label: 'Eve', type: 'Person', x: 300, y: 250, properties: { name: 'Eve', age: 26, city: 'Boston' } }
        ],
        edges: [
            { source: 'alice', target: 'bob', relationship: 'FRIEND', since: '2020' },
            { source: 'bob', target: 'carol', relationship: 'FRIEND', since: '2019' },
            { source: 'carol', target: 'dave', relationship: 'FRIEND', since: '2021' },
            { source: 'alice', target: 'eve', relationship: 'FRIEND', since: '2018' },
            { source: 'eve', target: 'dave', relationship: 'COLLEAGUE', since: '2022' }
        ]
    },
    products: {
        nodes: [
            { id: 'user1', label: 'John', type: 'User', x: 150, y: 200, properties: { name: 'John', preferences: 'Electronics' } },
            { id: 'user2', label: 'Sarah', type: 'User', x: 650, y: 200, properties: { name: 'Sarah', preferences: 'Books' } },
            { id: 'laptop', label: 'Laptop', type: 'Product', x: 300, y: 100, properties: { name: 'Gaming Laptop', price: 1299, category: 'Electronics' } },
            { id: 'book', label: 'Book', type: 'Product', x: 500, y: 100, properties: { name: 'JavaScript Guide', price: 29, category: 'Books' } },
            { id: 'headphones', label: 'Headphones', type: 'Product', x: 400, y: 300, properties: { name: 'Wireless Headphones', price: 199, category: 'Electronics' } }
        ],
        edges: [
            { source: 'user1', target: 'laptop', relationship: 'PURCHASED', date: '2023-12-01' },
            { source: 'user1', target: 'headphones', relationship: 'VIEWED', date: '2024-01-15' },
            { source: 'user2', target: 'book', relationship: 'PURCHASED', date: '2023-11-20' },
            { source: 'user2', target: 'laptop', relationship: 'VIEWED', date: '2024-01-10' }
        ]
    },
    movies: {
        nodes: [
            { id: 'tom', label: 'Tom Hanks', type: 'Actor', x: 200, y: 150, properties: { name: 'Tom Hanks', born: 1956, nationality: 'American' } },
            { id: 'forrest', label: 'Forrest Gump', type: 'Movie', x: 400, y: 100, properties: { title: 'Forrest Gump', year: 1994, genre: 'Drama' } },
            { id: 'philadelphia', label: 'Philadelphia', type: 'Movie', x: 600, y: 200, properties: { title: 'Philadelphia', year: 1993, genre: 'Drama' } },
            { id: 'drama', label: 'Drama', type: 'Genre', x: 400, y: 300, properties: { name: 'Drama', description: 'Serious narrative films' } },
            { id: 'zemeckis', label: 'R. Zemeckis', type: 'Director', x: 200, y: 300, properties: { name: 'Robert Zemeckis', born: 1952 } }
        ],
        edges: [
            { source: 'tom', target: 'forrest', relationship: 'ACTED_IN', role: 'Forrest Gump' },
            { source: 'tom', target: 'philadelphia', relationship: 'ACTED_IN', role: 'Andrew Beckett' },
            { source: 'forrest', target: 'drama', relationship: 'HAS_GENRE' },
            { source: 'philadelphia', target: 'drama', relationship: 'HAS_GENRE' },
            { source: 'zemeckis', target: 'forrest', relationship: 'DIRECTED' }
        ]
    }
};

let currentGraph = 'friends';
let selectedNode = null;

// Smooth scrolling
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    element.scrollIntoView({ behavior: 'smooth' });
}

// Copy code functionality
function copyCode(button) {
    const codeBlock = button.closest('.code-block').querySelector('code');
    const text = codeBlock.textContent;
    
    navigator.clipboard.writeText(text).then(() => {
        const originalText = button.textContent;
        button.textContent = 'Copied!';
        button.style.background = '#10b981';
        
        setTimeout(() => {
            button.textContent = originalText;
            button.style.background = '#4b5563';
        }, 2000);
    });
}

// Graph visualization
function showExample(example) {
    currentGraph = example;
    selectedNode = null;
    
    // Update active button
    document.querySelectorAll('.control-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    // Reset info panel
    document.getElementById('selectedNode').textContent = 'Click a node to explore';
    document.getElementById('nodeDetails').innerHTML = '';
    document.getElementById('currentQuery').innerHTML = '<code class="language-cypher">// Click on nodes to see dynamic queries</code>';
    
    renderGraph(example);
}

function renderGraph(graphType) {
    const svg = document.getElementById('mainGraph');
    const data = graphExamples[graphType];
    
    // Clear previous graph
    svg.innerHTML = `
        <defs>
            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto" markerUnits="strokeWidth">
                <polygon points="0 0, 10 3.5, 0 7" fill="#9ca3af"/>
            </marker>
            <marker id="arrowhead-highlighted" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto" markerUnits="strokeWidth">
                <polygon points="0 0, 10 3.5, 0 7" fill="#3b82f6"/>
            </marker>
            <filter id="node-glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge> 
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/> 
                </feMerge>
            </filter>
        </defs>
    `;
    
    // Render edges
    data.edges.forEach(edge => {
        const sourceNode = data.nodes.find(n => n.id === edge.source);
        const targetNode = data.nodes.find(n => n.id === edge.target);
        
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('x1', sourceNode.x);
        line.setAttribute('y1', sourceNode.y);
        line.setAttribute('x2', targetNode.x);
        line.setAttribute('y2', targetNode.y);
        line.setAttribute('class', 'graph-edge');
        line.setAttribute('marker-end', 'url(#arrowhead)');
        line.setAttribute('data-source', edge.source);
        line.setAttribute('data-target', edge.target);
        svg.appendChild(line);
        
        // Add relationship label
        const midX = (sourceNode.x + targetNode.x) / 2;
        const midY = (sourceNode.y + targetNode.y) / 2;
        
        const label = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        label.setAttribute('x', midX);
        label.setAttribute('y', midY - 5);
        label.setAttribute('class', 'relationship-label');
        label.textContent = edge.relationship;
        svg.appendChild(label);
    });
    
    // Render nodes
    data.nodes.forEach(node => {
        const group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        group.setAttribute('class', 'graph-node');
        group.setAttribute('data-id', node.id);
        group.style.cursor = 'pointer';
        
        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle.setAttribute('cx', node.x);
        circle.setAttribute('cy', node.y);
        circle.setAttribute('r', 25);
        
        // Color based on type
        const colors = {
            'Person': '#3b82f6',
            'User': '#10b981',
            'Product': '#f97316',
            'Movie': '#8b5cf6',
            'Actor': '#ef4444',
            'Director': '#06b6d4',
            'Genre': '#84cc16'
        };
        circle.setAttribute('fill', colors[node.type] || '#6b7280');
        
        group.appendChild(circle);
        
        const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        text.setAttribute('x', node.x);
        text.setAttribute('y', node.y + 5);
        text.setAttribute('class', 'graph-label');
        text.setAttribute('fill', 'white');
        text.setAttribute('font-weight', '500');
        text.textContent = node.label;
        group.appendChild(text);
        
        // Add type label below
        const typeLabel = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        typeLabel.setAttribute('x', node.x);
        typeLabel.setAttribute('y', node.y + 45);
        typeLabel.setAttribute('class', 'graph-label');
        typeLabel.setAttribute('font-size', '10');
        typeLabel.setAttribute('fill', '#6b7280');
        typeLabel.textContent = `:${node.type}`;
        group.appendChild(typeLabel);
        
        // Add click handler
        group.addEventListener('click', () => selectNode(node.id, graphType));
        
        svg.appendChild(group);
    });
}

function selectNode(nodeId, graphType) {
    const data = graphExamples[graphType];
    const node = data.nodes.find(n => n.id === nodeId);
    selectedNode = nodeId;
    
    // Update visual selection
    document.querySelectorAll('.graph-node').forEach(n => n.classList.remove('selected'));
    document.querySelector(`[data-id="${nodeId}"]`).classList.add('selected');
    
    // Highlight connected edges
    document.querySelectorAll('.graph-edge').forEach(edge => {
        edge.classList.remove('highlighted');
        edge.setAttribute('marker-end', 'url(#arrowhead)');
        
        if (edge.getAttribute('data-source') === nodeId || edge.getAttribute('data-target') === nodeId) {
            edge.classList.add('highlighted');
            edge.setAttribute('marker-end', 'url(#arrowhead-highlighted)');
        }
    });
    
    // Update info panel
    document.getElementById('selectedNode').textContent = `${node.label} (:${node.type})`;
    
    const details = Object.entries(node.properties)
        .map(([key, value]) => `<div><strong>${key}:</strong> ${value}</div>`)
        .join('');
    document.getElementById('nodeDetails').innerHTML = details;
    
    // Generate and show query
    const connections = data.edges.filter(e => e.source === nodeId || e.target === nodeId);
    let query = '';
    
    if (connections.length > 0) {
        query = `MATCH (n:${node.type} {name: "${node.properties.name || node.label}"})
        -[r]-(connected)
RETURN n, r, connected`;
    } else {
        query = `MATCH (n:${node.type} {name: "${node.properties.name || node.label}"})
RETURN n`;
    }
    
    document.getElementById('currentQuery').innerHTML = `<code class="language-cypher">${query}</code>`;
}

// Playground functionality
const queryExamples = {
    basic: `MATCH (n:Person)
RETURN n.name
LIMIT 5`,
    relationship: `MATCH (a:Person)-[:FRIEND]->(b:Person)
RETURN a.name AS Friend1, b.name AS Friend2`,
    complex: `MATCH (user:User)-[:PURCHASED]->(product:Product)
WHERE product.category = 'Electronics'
RETURN user.name, product.name, product.price
ORDER BY product.price DESC`
};

const sampleResults = {
    basic: [
        { 'n.name': 'Alice' },
        { 'n.name': 'Bob' },
        { 'n.name': 'Carol' },
        { 'n.name': 'Dave' },
        { 'n.name': 'Eve' }
    ],
    relationship: [
        { 'Friend1': 'Alice', 'Friend2': 'Bob' },
        { 'Friend1': 'Bob', 'Friend2': 'Carol' },
        { 'Friend1': 'Carol', 'Friend2': 'Dave' },
        { 'Friend1': 'Alice', 'Friend2': 'Eve' }
    ],
    complex: [
        { 'user.name': 'John', 'product.name': 'Gaming Laptop', 'product.price': 1299 },
        { 'user.name': 'John', 'product.name': 'Wireless Headphones', 'product.price': 199 }
    ]
};

function loadExample(type) {
    document.getElementById('queryEditor').value = queryExamples[type];
}

function runQuery() {
    const query = document.getElementById('queryEditor').value.trim();
    const resultsContainer = document.getElementById('queryResults');
    const statsElement = document.getElementById('resultStats');
    
    if (!query) {
        resultsContainer.innerHTML = `
            <div class="placeholder-message">
                <div class="placeholder-icon">⚠️</div>
                <p>Please enter a query to execute</p>
            </div>
        `;
        return;
    }
    
    // Simulate query execution
    setTimeout(() => {
        let results = [];
        let queryType = 'basic';
        
        // Simple query matching
        if (query.toLowerCase().includes('friend')) {
            results = sampleResults.relationship;
            queryType = 'relationship';
        } else if (query.toLowerCase().includes('purchased') || query.toLowerCase().includes('electronics')) {
            results = sampleResults.complex;
            queryType = 'complex';
        } else {
            results = sampleResults.basic;
        }
        
        // Update stats
        statsElement.textContent = `Query executed successfully • ${results.length} rows returned • 12ms`;
        
        if (results.length === 0) {
            resultsContainer.innerHTML = `
                <div class="placeholder-message">
                    <div class="placeholder-icon">📭</div>
                    <p>No results found for this query</p>
                </div>
            `;
            return;
        }
        
        // Create results table
        const headers = Object.keys(results[0]);
        const table = document.createElement('table');
        table.className = 'query-results-table';
        
        // Create header
        const thead = document.createElement('thead');
        const headerRow = document.createElement('tr');
        headers.forEach(header => {
            const th = document.createElement('th');
            th.textContent = header;
            headerRow.appendChild(th);
        });
        thead.appendChild(headerRow);
        table.appendChild(thead);
        
        // Create body
        const tbody = document.createElement('tbody');
        results.forEach(result => {
            const row = document.createElement('tr');
            headers.forEach(header => {
                const td = document.createElement('td');
                td.textContent = result[header];
                row.appendChild(td);
            });
            tbody.appendChild(row);
        });
        table.appendChild(tbody);
        
        resultsContainer.innerHTML = '';
        resultsContainer.appendChild(table);
    }, 500);
    
    // Show loading state
    resultsContainer.innerHTML = `
        <div class="placeholder-message">
            <div class="placeholder-icon">⏳</div>
            <p>Executing query...</p>
        </div>
    `;
    statsElement.textContent = 'Executing query...';
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Header scroll effect
    const header = document.querySelector('.header');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.getElementById('navMenu');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Mobile menu toggle
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenuBtn.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuBtn.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Active navigation highlighting
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    const observerOptions = {
        threshold: 0.3,
        rootMargin: '-100px 0px -50% 0px'
    };
    
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionId = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, observerOptions);
    
    sections.forEach(section => {
        sectionObserver.observe(section);
    });
    
    // Initialize graph
    renderGraph('friends');
    
    // Add smooth scrolling for all internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
    
    // Add intersection observer for animations
    const animationObserverOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const animationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, animationObserverOptions);
    
    // Observe feature cards and concept cards
    document.querySelectorAll('.feature-card, .concept-card, .fact-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        animationObserver.observe(card);
    });
    
    // Add hover effects to concept cards
    document.querySelectorAll('.concept-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });
});