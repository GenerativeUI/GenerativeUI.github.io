// Quaternion Analysis and Interactive Features

class QuaternionAnalyzer {
    constructor() {
        this.initializeEventListeners();
        this.initializeAnimations();
    }

    initializeEventListeners() {
        // Navigation
        this.setupNavigation();
        
        // Calculator
        this.setupCalculator();
        
        // Interactive elements
        this.setupInteractiveElements();
    }

    setupNavigation() {
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');
        
        if (hamburger && navMenu) {
            hamburger.addEventListener('click', () => {
                navMenu.classList.toggle('active');
                hamburger.classList.toggle('active');
            });
        }

        // Smooth scrolling for nav links
        document.querySelectorAll('.nav-link').forEach(link => {
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
    }

    setupCalculator() {
        const analyzeBtn = document.getElementById('analyze-btn');
        if (analyzeBtn) {
            analyzeBtn.addEventListener('click', () => {
                this.analyzeQuaternion();
            });
        }

        // Auto-analyze on input change
        const inputs = document.querySelectorAll('#q1, #q2, #q3, #q4');
        inputs.forEach(input => {
            input.addEventListener('input', () => {
                this.analyzeQuaternion();
            });
        });
    }

    setupInteractiveElements() {
        // Quaternion component hover effects
        document.querySelectorAll('.quat-component').forEach(component => {
            component.addEventListener('mouseenter', () => {
                this.highlightComponent(component);
            });
            
            component.addEventListener('mouseleave', () => {
                this.unhighlightComponent(component);
            });
        });

        // Magnitude chart animation
        this.animateMagnitudeChart();
    }

    initializeAnimations() {
        // Intersection Observer for animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, observerOptions);

        // Observe elements for animation
        document.querySelectorAll('.concept-card, .importance-card, .application-card, .method-section').forEach(el => {
            observer.observe(el);
        });
    }

    analyzeQuaternion() {
        try {
            // Get input values
            const q1 = parseFloat(document.getElementById('q1').value) || 0;
            const q2 = parseFloat(document.getElementById('q2').value) || 0;
            const q3 = parseFloat(document.getElementById('q3').value) || 0;
            const q4 = parseFloat(document.getElementById('q4').value) || 0;

            const quaternion = [q1, q2, q3, q4];
            
            // Calculate magnitudes
            const magnitudes = quaternion.map(q => Math.abs(q));
            
            // Calculate total magnitude
            const totalMagnitude = Math.sqrt(q1*q1 + q2*q2 + q3*q3 + q4*q4);
            
            // Determine if normalized
            const isNormalized = Math.abs(totalMagnitude - 1.0) < 0.001;
            
            // Find largest component
            const maxMagnitude = Math.max(...magnitudes);
            const maxIndex = magnitudes.indexOf(maxMagnitude);
            
            // Predict convention
            let predictedConvention = 'Unknown';
            let confidence = 'Low';
            
            if (maxIndex === 0 || maxIndex === 3) {
                predictedConvention = maxIndex === 0 ? 'Hamilton (w first)' : 'JPL (w last)';
                confidence = maxMagnitude > 0.7 ? 'High' : 'Medium';
            }
            
            // Calculate rotation angle
            const scalarComponent = maxIndex === 0 ? q1 : q4;
            const rotationAngle = Math.acos(Math.abs(scalarComponent)) * 2 * (180 / Math.PI);
            
            // Check for edge cases
            const edgeCaseWarning = this.checkEdgeCases(quaternion, magnitudes, totalMagnitude);
            
            // Update UI
            this.updateMagnitudeResults(magnitudes);
            this.updateConventionPrediction(predictedConvention, confidence, edgeCaseWarning);
            this.updateProperties(totalMagnitude, isNormalized, rotationAngle);
            
            // Update magnitude chart
            this.updateMagnitudeChart(magnitudes);
            
        } catch (error) {
            console.error('Error analyzing quaternion:', error);
        }
    }

    updateMagnitudeResults(magnitudes) {
        const magnitudeElements = ['mag1', 'mag2', 'mag3', 'mag4'];
        magnitudeElements.forEach((id, index) => {
            const element = document.getElementById(id);
            if (element) {
                element.textContent = magnitudes[index].toFixed(3);
            }
        });
    }

    checkEdgeCases(quaternion, magnitudes, totalMagnitude) {
        const [q1, q2, q3, q4] = quaternion;
        const maxMagnitude = Math.max(...magnitudes);
        const minMagnitude = Math.min(...magnitudes);
        const magnitudeRange = maxMagnitude - minMagnitude;
        
        // Check for 180° rotation (scalar ≈ 0)
        const scalarComponents = [Math.abs(q1), Math.abs(q4)];
        const maxScalar = Math.max(...scalarComponents);
        const isNear180 = maxScalar < 0.1;
        
        // Check for very small rotations (all components similar)
        const isSmallRotation = magnitudeRange < 0.1 && maxMagnitude < 0.5;
        
        // Check for non-normalized quaternion
        const isNotNormalized = Math.abs(totalMagnitude - 1.0) > 0.1;
        
        // Check for nearly equal components
        const isNearlyEqual = magnitudeRange < 0.05;
        
        if (isNear180) {
            return "⚠️ Warning: Near 180° rotation - scalar component is very small. Heuristics may be unreliable.";
        } else if (isSmallRotation) {
            return "⚠️ Warning: Very small rotation detected. All components are similar in magnitude.";
        } else if (isNotNormalized) {
            return "⚠️ Warning: Quaternion is not normalized. Results may be inaccurate.";
        } else if (isNearlyEqual) {
            return "⚠️ Warning: All components have nearly equal magnitudes. Convention detection may be difficult.";
        }
        
        return null;
    }

    updateConventionPrediction(convention, confidence, edgeCaseWarning) {
        const scalarElement = document.getElementById('scalar-component');
        const confidenceElement = document.getElementById('confidence');
        
        if (scalarElement) {
            scalarElement.textContent = convention;
        }
        
        if (confidenceElement) {
            confidenceElement.textContent = confidence;
            confidenceElement.className = `confidence-value ${confidence.toLowerCase()}`;
        }
        
        // Add edge case warning if present
        if (edgeCaseWarning) {
            this.showEdgeCaseWarning(edgeCaseWarning);
        } else {
            this.hideEdgeCaseWarning();
        }
    }

    updateProperties(magnitude, isNormalized, rotationAngle) {
        const magnitudeElement = document.getElementById('magnitude');
        const normalizedElement = document.getElementById('normalized');
        const rotationElement = document.getElementById('rotation-angle');
        
        if (magnitudeElement) {
            magnitudeElement.textContent = magnitude.toFixed(3);
        }
        
        if (normalizedElement) {
            normalizedElement.textContent = isNormalized ? 'Yes' : 'No';
            normalizedElement.className = `property-value ${isNormalized ? 'normalized' : 'not-normalized'}`;
        }
        
        if (rotationElement) {
            rotationElement.textContent = `${rotationAngle.toFixed(1)}°`;
        }
    }

    updateMagnitudeChart(magnitudes) {
        const chartBars = document.querySelectorAll('.chart-bar');
        const maxMagnitude = Math.max(...magnitudes);
        
        chartBars.forEach((bar, index) => {
            if (magnitudes[index] !== undefined) {
                const percentage = maxMagnitude > 0 ? (magnitudes[index] / maxMagnitude) * 100 : 5;
                bar.style.height = `${Math.max(percentage, 5)}%`;
                bar.setAttribute('data-value', magnitudes[index].toFixed(2));
            }
        });
    }

    showEdgeCaseWarning(warning) {
        let warningElement = document.getElementById('edge-case-warning');
        
        if (!warningElement) {
            // Create warning element if it doesn't exist
            warningElement = document.createElement('div');
            warningElement.id = 'edge-case-warning';
            warningElement.className = 'edge-case-warning';
            
            // Insert after the convention prediction card
            const conventionCard = document.querySelector('.result-card:nth-child(2)');
            if (conventionCard) {
                conventionCard.insertAdjacentElement('afterend', warningElement);
            }
        }
        
        warningElement.innerHTML = `
            <div class="warning-content">
                <i class="fas fa-exclamation-triangle"></i>
                <span>${warning}</span>
            </div>
        `;
        warningElement.style.display = 'block';
    }

    hideEdgeCaseWarning() {
        const warningElement = document.getElementById('edge-case-warning');
        if (warningElement) {
            warningElement.style.display = 'none';
        }
    }

    animateMagnitudeChart() {
        const chartBars = document.querySelectorAll('.chart-bar');
        chartBars.forEach((bar, index) => {
            bar.style.transition = 'height 0.5s ease';
        });
    }

    highlightComponent(component) {
        component.style.transform = 'translateY(-10px) scale(1.05)';
        component.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.2)';
    }

    unhighlightComponent(component) {
        component.style.transform = 'translateY(0) scale(1)';
        component.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    }
}

// Additional utility functions
class QuaternionUtils {
    static normalize(quaternion) {
        const [w, x, y, z] = quaternion;
        const magnitude = Math.sqrt(w*w + x*x + y*y + z*z);
        
        if (magnitude === 0) return [0, 0, 0, 0];
        
        return [w/magnitude, x/magnitude, y/magnitude, z/magnitude];
    }

    static magnitude(quaternion) {
        const [w, x, y, z] = quaternion;
        return Math.sqrt(w*w + x*x + y*y + z*z);
    }

    static isNormalized(quaternion, tolerance = 0.001) {
        return Math.abs(this.magnitude(quaternion) - 1.0) < tolerance;
    }

    static rotationAngle(quaternion) {
        const [w, x, y, z] = quaternion;
        const magnitude = this.magnitude(quaternion);
        const normalizedW = Math.abs(w) / magnitude;
        const clampedW = Math.min(1, Math.max(-1, normalizedW));
        return Math.acos(clampedW) * 2 * (180 / Math.PI);
    }

    static predictConvention(quaternion) {
        const [q1, q2, q3, q4] = quaternion;
        const magnitudes = [Math.abs(q1), Math.abs(q2), Math.abs(q3), Math.abs(q4)];
        const maxIndex = magnitudes.indexOf(Math.max(...magnitudes));
        
        if (maxIndex === 0) {
            return { convention: 'Hamilton', confidence: 'High', scalarIndex: 0 };
        } else if (maxIndex === 3) {
            return { convention: 'JPL', confidence: 'High', scalarIndex: 3 };
        } else {
            return { convention: 'Uncertain', confidence: 'Low', scalarIndex: maxIndex };
        }
    }
}

// Interactive 3D Cube Animation
class CubeAnimator {
    constructor() {
        this.cube = document.getElementById('demo-cube');
        this.isAnimating = false;
        this.setupCubeInteraction();
    }

    setupCubeInteraction() {
        if (this.cube) {
            this.cube.addEventListener('mouseenter', () => {
                this.pauseAnimation();
            });
            
            this.cube.addEventListener('mouseleave', () => {
                this.resumeAnimation();
            });
        }
    }

    pauseAnimation() {
        if (this.cube) {
            this.cube.style.animationPlayState = 'paused';
        }
    }

    resumeAnimation() {
        if (this.cube) {
            this.cube.style.animationPlayState = 'running';
        }
    }
}

// Smooth scrolling utility
function smoothScrollTo(target) {
    const element = document.querySelector(target);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize main analyzer
    const analyzer = new QuaternionAnalyzer();
    
    // Initialize cube animator
    const cubeAnimator = new CubeAnimator();
    
    // Set dynamic year in footer
    const currentYear = new Date().getFullYear();
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = currentYear;
    }
    
    // Add some example quaternions for demonstration
    const exampleQuaternions = [
        { name: 'Identity', values: [1, 0, 0, 0] },
        { name: '90° X-axis', values: [0.707, 0.707, 0, 0] },
        { name: '90° Y-axis', values: [0.707, 0, 0.707, 0] },
        { name: '90° Z-axis', values: [0.707, 0, 0, 0.707] },
        { name: '180° rotation', values: [0, 1, 0, 0] }
    ];

    // Add example buttons
    const calculatorInput = document.querySelector('.calculator-input');
    if (calculatorInput) {
        const exampleContainer = document.createElement('div');
        exampleContainer.className = 'example-quaternions';
        exampleContainer.innerHTML = `
            <h4>Example Quaternions:</h4>
            <div class="example-buttons">
                ${exampleQuaternions.map((example, index) => `
                    <button class="example-btn" data-index="${index}">${example.name}</button>
                `).join('')}
            </div>
        `;
        
        calculatorInput.appendChild(exampleContainer);
        
        // Add event listeners for example buttons
        document.querySelectorAll('.example-btn').forEach((btn, index) => {
            btn.addEventListener('click', () => {
                const example = exampleQuaternions[index];
                document.getElementById('q1').value = example.values[0];
                document.getElementById('q2').value = example.values[1];
                document.getElementById('q3').value = example.values[2];
                document.getElementById('q4').value = example.values[3];
                analyzer.analyzeQuaternion();
            });
        });
    }
    
    // Add CSS for example buttons
    const style = document.createElement('style');
    style.textContent = `
        .example-quaternions {
            margin-top: 20px;
            padding: 20px;
            background: #f8fafc;
            border-radius: 10px;
            border: 1px solid #e2e8f0;
        }
        
        .example-quaternions h4 {
            margin-bottom: 15px;
            color: #374151;
        }
        
        .example-buttons {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
        }
        
        .example-btn {
            background: #e0f2fe;
            color: #0369a1;
            border: 1px solid #0ea5e9;
            padding: 8px 15px;
            border-radius: 6px;
            cursor: pointer;
            font-size: 0.9rem;
            transition: all 0.3s ease;
        }
        
        .example-btn:hover {
            background: #0ea5e9;
            color: white;
        }
        
        .confidence-value.high {
            color: #059669;
        }
        
        .confidence-value.medium {
            color: #d97706;
        }
        
        .confidence-value.low {
            color: #dc2626;
        }
        
        .property-value.normalized {
            color: #059669;
        }
        
        .property-value.not-normalized {
            color: #dc2626;
        }
        
        .animate-in {
            animation: fadeInUp 0.6s ease forwards;
        }
        
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(style);
});

// Export for potential module use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { QuaternionAnalyzer, QuaternionUtils, CubeAnimator };
}