/**
 * Main JavaScript for ArtSoul
 * Handles navigation, theme management, animations, and interactive elements.
 * 
 * Structure:
 * 1. Configuration & Utilities
 * 2. Navigation Logic
 * 3. Theme Controller
 * 4. Animation Systems
 * 5. Feature-Specific Modules (Zen Canvas, Calculator, etc.)
 * 6. Initialization
 */

// ========================================
// 1. NAVIGATION LOGIC
// ========================================

/**
 * Mobile Navigation Logic
 * Handles opening/closing of the mobile menu and body scroll locking.
 */
function initializeMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenuCloseBtn = document.getElementById('close-menu-btn');
    const mobileMenuContainer = document.getElementById('mobile-menu');
    const mobileMenuLinks = mobileMenuContainer ? mobileMenuContainer.querySelectorAll('a') : [];

    function toggleMobileMenu() {
        if (!mobileMenuContainer) return;

        mobileMenuContainer.classList.toggle('hidden');
        const isMenuOpen = !mobileMenuContainer.classList.contains('hidden');

        // Lock body scroll when menu is open
        document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    }

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    }

    if (mobileMenuCloseBtn) {
        mobileMenuCloseBtn.addEventListener('click', toggleMobileMenu);
    }

    // Ensure menu is hidden on initial load
    if (mobileMenuContainer) {
        mobileMenuContainer.classList.add('hidden');
        document.body.style.overflow = '';
    }

    // Close menu when clicking any link
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (!mobileMenuContainer.classList.contains('hidden')) {
                toggleMobileMenu();
            }
        });
    });
}

/**
 * Scroll Effects
 * Manages sticky header state and background transparency on scroll.
 */
function initializeScrollEffects() {
    const mainHeader = document.querySelector('header');
    if (!mainHeader) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 10) {
            mainHeader.classList.add('shadow-md', 'bg-opacity-90', 'backdrop-blur-md');
        } else {
            mainHeader.classList.remove('shadow-md', 'bg-opacity-90', 'backdrop-blur-md');
        }
    });
}

// ========================================
// 2. THEME CONTROLLER
// ========================================

/**
 * Theme Customization
 * Manages dark/light mode toggle and persistence via localStorage.
 */
function initializeThemeController() {
    const themeSwitchers = document.querySelectorAll('.theme-toggle');
    const documentRoot = document.documentElement;

    // Load saved theme or user preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;

    // Apply initial theme
    if (savedTheme === 'light' || (!savedTheme && systemPrefersLight)) {
        enableLightMode();
    } else {
        enableDarkMode();
    }

    function enableLightMode() {
        documentRoot.classList.add('light-mode');
        documentRoot.classList.remove('dark');
        localStorage.setItem('theme', 'light');
    }

    function enableDarkMode() {
        documentRoot.classList.remove('light-mode');
        documentRoot.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    }

    // Attach event listeners to all toggle buttons
    themeSwitchers.forEach(btn => {
        btn.addEventListener('click', () => {
            if (documentRoot.classList.contains('light-mode')) {
                enableDarkMode();
            } else {
                enableLightMode();
            }
        });
    });
}

/**
 * RTL Controller
 * Manages Right-to-Left direction toggle and persistence.
 */
function initializeRTLController() {
    const documentRoot = document.documentElement;

    // Check local storage for saved preference
    const savedDir = localStorage.getItem('dir');
    if (savedDir === 'rtl') {
        documentRoot.setAttribute('dir', 'rtl');
    }

    // Create Toggle Button if it doesn't exist
    if (!document.getElementById('rtl-toggle')) {
        const rtlBtn = document.createElement('button');
        rtlBtn.id = 'rtl-toggle';
        rtlBtn.className = 'fixed bottom-20 right-6 w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all z-50 hover:scale-110 font-bold';
        rtlBtn.setAttribute('aria-label', 'Toggle RTL');
        rtlBtn.innerHTML = 'RTL';
        rtlBtn.style.fontSize = '0.75rem';

        rtlBtn.addEventListener('click', () => {
            if (documentRoot.getAttribute('dir') === 'rtl') {
                documentRoot.setAttribute('dir', 'ltr');
                localStorage.setItem('dir', 'ltr');
            } else {
                documentRoot.setAttribute('dir', 'rtl');
                localStorage.setItem('dir', 'rtl');
            }
        });

        document.body.appendChild(rtlBtn);
    }
}

// ========================================
// 3. ANIMATION SYSTEMS
// ========================================

/**
 * Scroll Animations
 * Triggers fade-in-up animations when elements scroll into view.
 */
function initializeScrollAnimations() {
    const animationElements = document.querySelectorAll('.fade-in-up');
    if (animationElements.length === 0) return;

    const scrollAnimationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                scrollAnimationObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    animationElements.forEach(el => scrollAnimationObserver.observe(el));
}

/**
 * Statistics Counter Animation
 * Animates numerical statistics when scrolled into view.
 */
function initializeStatsCounter() {
    const statisticsGrid = document.querySelector('#stats-grid');
    const statisticCounters = document.querySelectorAll('.stat-number');

    if (!statisticsGrid || !statisticCounters.length) return;

    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                statisticCounters.forEach(stat => {
                    const targetValue = parseInt(stat.getAttribute('data-target') || '0');
                    const durationInMs = 2000;
                    const frameRate = 60;
                    const totalFrames = durationInMs / (1000 / frameRate);
                    const incrementPerFrame = targetValue / totalFrames;

                    let currentValue = 0;
                    const updateCounter = () => {
                        currentValue += incrementPerFrame;
                        if (currentValue < targetValue) {
                            stat.innerText = Math.ceil(currentValue).toLocaleString();
                            requestAnimationFrame(updateCounter);
                        } else {
                            stat.innerText = targetValue.toLocaleString();
                        }
                    };
                    updateCounter();
                });
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    statsObserver.observe(statisticsGrid);
}

// ========================================
// 4. FEATURE MODULES
// ========================================

/**
 * Zen Mode Interactive Canvas
 * Renders an interactive particle system on canvas-enabled pages.
 */
function initializeZenCanvas() {
    const zenCanvas = document.getElementById('zenCanvas');
    if (!zenCanvas) return;

    const zenContext = zenCanvas.getContext('2d');
    let canvasWidth, canvasHeight;
    const zenParticles = [];
    let hueCycle = 0;

    function resizeZenCanvas() {
        canvasWidth = zenCanvas.width = window.innerWidth;
        canvasHeight = zenCanvas.height = window.innerHeight;
    }

    window.addEventListener('resize', resizeZenCanvas);
    resizeZenCanvas();

    class ZenParticle {
        constructor(x, y, hue) {
            this.x = x;
            this.y = y;
            this.size = Math.random() * 20 + 5;
            this.speedX = Math.random() * 2 - 1;
            this.speedY = Math.random() * 2 - 1;
            this.color = `hsla(${hue}, 70%, 70%, 0.3)`;
            this.life = 100;
        }
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            this.life -= 1;
            this.size *= 0.95;
        }
        draw() {
            zenContext.fillStyle = this.color;
            zenContext.beginPath();
            zenContext.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            zenContext.fill();
        }
    }

    const createZenParticles = (x, y) => {
        for (let i = 0; i < 2; i++) {
            zenParticles.push(new ZenParticle(x, y, hueCycle));
        }
        hueCycle += 2;
    };

    zenCanvas.addEventListener('mousemove', (e) => createZenParticles(e.x, e.y));
    zenCanvas.addEventListener('touchmove', (e) => {
        if (e.touches[0]) createZenParticles(e.touches[0].clientX, e.touches[0].clientY);
    });

    function animateZenCanvas() {
        zenContext.clearRect(0, 0, canvasWidth, canvasHeight);
        for (let i = 0; i < zenParticles.length; i++) {
            zenParticles[i].update();
            zenParticles[i].draw();
            if (zenParticles[i].life <= 0 || zenParticles[i].size <= 0.5) {
                zenParticles.splice(i, 1);
                i--;
            }
        }
        requestAnimationFrame(animateZenCanvas);
    }

    animateZenCanvas();
}

/**
 * Mood Tracker Interactivity
 * Handles mood selection buttons and displays feedback.
 */
function initializeMoodTracker() {
    const moodSelectionButtons = document.querySelectorAll('.mood-btn');
    const moodFeedbackContainer = document.getElementById('mood-response');

    if (moodSelectionButtons.length === 0 || !moodFeedbackContainer) return;

    moodSelectionButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Reset state
            moodSelectionButtons.forEach(b => b.classList.remove('scale-110', 'bg-white', 'shadow-xl'));

            // Activate selected
            btn.classList.add('scale-110', 'bg-white', 'shadow-xl', 'rounded-xl', 'p-2');

            // Show feedback
            moodFeedbackContainer.classList.remove('hidden');
            // Small delay for transition
            setTimeout(() => {
                moodFeedbackContainer.classList.remove('opacity-0');
                moodFeedbackContainer.classList.add('opacity-100');
            }, 10);
        });
    });
}

/**
 * Service Cost Estimator
 * Calculates total cost based on session type, duration, and frequency.
 */
function initializeCostCalculator() {
    const calculatorSessionType = document.getElementById('session-type');
    const calculatorDurationInput = document.getElementById('duration');
    const calculatorTotalDisplay = document.getElementById('total-cost');
    const calculatorDurationDisplay = document.getElementById('duration-display');
    const calculatorFrequencyInputs = document.querySelectorAll('input[name="freq"]');

    if (!calculatorSessionType || !calculatorDurationInput || !calculatorTotalDisplay) return;

    function calculateEstimatedCost() {
        const basePrice = parseInt(calculatorSessionType.value) || 0;
        const durationMonths = parseInt(calculatorDurationInput.value) || 1;
        let frequencyMultiplier = 0.5; // Default Bi-weekly

        calculatorFrequencyInputs.forEach(input => {
            if (input.checked) frequencyMultiplier = parseFloat(input.value);
        });

        // Convert frequency to sessions per month
        // 1.0 = Weekly (4/mo), 0.5 = Bi-weekly (2/mo), 0.25 = Monthly (1/mo)
        let sessionsPerMonth = 0;
        if (frequencyMultiplier === 1) sessionsPerMonth = 4;
        else if (frequencyMultiplier === 0.5) sessionsPerMonth = 2;
        else if (frequencyMultiplier === 0.25) sessionsPerMonth = 1;

        let totalEst = basePrice * sessionsPerMonth * durationMonths;

        // Apply 10% Discount for 3+ months
        if (durationMonths >= 3) {
            totalEst = totalEst * 0.9;
        }

        calculatorTotalDisplay.innerText = Math.round(totalEst).toLocaleString();
        if (calculatorDurationDisplay) {
            calculatorDurationDisplay.innerText = `${durationMonths} Month${durationMonths > 1 ? 's' : ''}`;
        }
    }

    calculatorSessionType.addEventListener('change', calculateEstimatedCost);
    calculatorDurationInput.addEventListener('input', calculateEstimatedCost);
    calculatorFrequencyInputs.forEach(input => input.addEventListener('change', calculateEstimatedCost));

    // Initial calculation
    calculateEstimatedCost();
}

/**
 * Hero Section Particle Effects
 * Renders ambient floating particles in the hero background.
 */
function initializeHeroParticles() {
    const particleCanvas = document.getElementById('particle-canvas');
    if (!particleCanvas) return;

    const particleContext = particleCanvas.getContext('2d');
    const heroSection = document.getElementById('hero-section') || particleCanvas.parentElement;

    let heroParticles = [];
    const mousePosition = { x: 0, y: 0 };

    function resizeParticleCanvas() {
        particleCanvas.width = heroSection.offsetWidth;
        particleCanvas.height = heroSection.offsetHeight;
    }

    resizeParticleCanvas();
    window.addEventListener('resize', resizeParticleCanvas);

    class HeroParticle {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.size = Math.random() * 8 + 4;
            this.speedX = Math.random() * 3 - 1.5;
            this.speedY = Math.random() * 3 - 1.5;
            this.life = 1;
            this.decay = Math.random() * 0.015 + 0.01;
            // Teal, Emerald, Cyan variants
            this.color = ['rgba(20, 184, 166, ', 'rgba(16, 185, 129, ', 'rgba(6, 182, 212, '][Math.floor(Math.random() * 3)];
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            this.life -= this.decay;
            this.size *= 0.98;
        }

        draw() {
            particleContext.fillStyle = this.color + this.life + ')';
            particleContext.beginPath();
            particleContext.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            particleContext.fill();
        }
    }

    heroSection.addEventListener('mousemove', (e) => {
        const rect = heroSection.getBoundingClientRect();
        mousePosition.x = e.clientX - rect.left;
        mousePosition.y = e.clientY - rect.top;

        // Create particles trace
        for (let i = 0; i < 3; i++) {
            heroParticles.push(new HeroParticle(mousePosition.x, mousePosition.y));
        }
    });

    function animateHeroParticles() {
        particleContext.clearRect(0, 0, particleCanvas.width, particleCanvas.height);

        for (let i = heroParticles.length - 1; i >= 0; i--) {
            heroParticles[i].update();
            heroParticles[i].draw();

            if (heroParticles[i].life <= 0 || heroParticles[i].size <= 0.5) {
                heroParticles.splice(i, 1);
            }
        }

        if (heroParticles.length > 200) {
            heroParticles = heroParticles.slice(-200);
        }

        requestAnimationFrame(animateHeroParticles);
    }

    animateHeroParticles();
}

/**
 * Form Validation
 * Initializes real-time and submit-time validation for forms with .validate-form class.
 */
function initializeFormValidation() {
    const formsToValidate = document.querySelectorAll('.validate-form');

    formsToValidate.forEach(form => {
        form.addEventListener('submit', function (e) {
            if (!validateForm(this)) {
                e.preventDefault();
            }
        });

        const inputs = form.querySelectorAll('input, textarea, select');
        inputs.forEach(input => {
            input.addEventListener('blur', function () {
                validateSingleField(this);
            });

            input.addEventListener('focus', function () {
                clearFieldError(this);
            });
        });
    });
}

function validateForm(form) {
    let isValid = true;
    const requiredInputs = form.querySelectorAll('input[required], textarea[required], select[required]');

    requiredInputs.forEach(input => {
        if (!validateSingleField(input)) {
            isValid = false;
        }
    });

    return isValid;
}

function validateSingleField(field) {
    const value = field.value.trim();
    const type = field.type;
    const isRequired = field.hasAttribute('required');

    clearFieldError(field);

    // Required check
    if (isRequired && !value) {
        showFieldError(field, 'This field is required');
        return false;
    }

    // Email validation
    if (type === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            showFieldError(field, 'Please enter a valid email address');
            return false;
        }
    }

    // Phone validation
    if (type === 'tel' && value) {
        const phoneRegex = /^[\d\s\-\+\(\)]+$/;
        if (!phoneRegex.test(value) || value.length < 10) {
            showFieldError(field, 'Please enter a valid phone number');
            return false;
        }
    }

    // Min length check
    if (field.hasAttribute('minlength')) {
        const minLength = parseInt(field.getAttribute('minlength'));
        if (value.length < minLength) {
            showFieldError(field, `Minimum ${minLength} characters required`);
            return false;
        }
    }

    showFieldSuccess(field);
    return true;
}

function showFieldError(field, message) {
    field.classList.add('border-red-500', 'border-2');
    field.classList.remove('border-white/10', 'border-teal-500');
    field.setAttribute('aria-invalid', 'true');

    let errorDiv = field.parentElement.querySelector('.error-message');
    if (!errorDiv) {
        errorDiv = document.createElement('div');
        errorDiv.className = 'error-message text-red-400 text-sm mt-1 flex items-center gap-1';
        errorDiv.setAttribute('role', 'alert');
        field.parentElement.appendChild(errorDiv);
    }

    errorDiv.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> ${message}`;
}

function showFieldSuccess(field) {
    field.classList.remove('border-red-500', 'border-2');
    field.classList.add('border-teal-500');
    field.setAttribute('aria-invalid', 'false');

    let successIcon = field.parentElement.querySelector('.success-icon');
    if (!successIcon) {
        successIcon = document.createElement('i');
        successIcon.className = 'success-icon fa-solid fa-circle-check text-teal-400 absolute right-3 top-3 text-sm';
        // Ensure parent is relative for absolute positioning of icon
        const computedStyle = window.getComputedStyle(field.parentElement);
        if (computedStyle.position === 'static') {
            field.parentElement.style.position = 'relative';
        }
        field.parentElement.appendChild(successIcon);
    }
}

function clearFieldError(field) {
    field.classList.remove('border-red-500', 'border-2', 'border-teal-500');
    field.classList.add('border-white/10');
    field.removeAttribute('aria-invalid');

    const errorDiv = field.parentElement.querySelector('.error-message');
    if (errorDiv) errorDiv.remove();

    const successIcon = field.parentElement.querySelector('.success-icon');
    if (successIcon) successIcon.remove();
}

// ========================================
// 5. INITIALIZATION
// ========================================

document.addEventListener('DOMContentLoaded', () => {
    initializeMobileMenu();
    initializeScrollEffects();
    initializeThemeController();
    initializeScrollAnimations();
    initializeStatsCounter();
    initializeZenCanvas();
    initializeMoodTracker();
    initializeCostCalculator();
    initializeHeroParticles();
    initializeFormValidation();
    initializeRTLController();
});
