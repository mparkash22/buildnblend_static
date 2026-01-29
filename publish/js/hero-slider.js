/**
 * Hero Image Slider
 * Handles auto-rotation, manual navigation, and touch/swipe support
 */

class HeroSlider {
    constructor() {
        this.slider = document.querySelector('.hero-image-slider');
        if (!this.slider) {
            console.log('Hero slider element not found');
            return;
        }
        
        this.slides = this.slider.querySelectorAll('.slide');
        this.navDots = this.slider.querySelectorAll('.nav-dot');
        this.controlButton = this.slider.querySelector('.slider-control');
        
        this.currentSlide = 0;
        this.isPlaying = true;
        this.autoRotateInterval = null;
        this.autoRotateDelay = 5000; // 5 seconds
        
        // Touch/swipe properties
        this.touchStartX = 0;
        this.touchEndX = 0;
        this.minSwipeDistance = 50;
        
        console.log(`Hero slider initialized with ${this.slides.length} slides`);
        this.init();
    }
    
    init() {
        if (this.slides.length === 0) {
            console.log('No slides found in hero slider');
            return;
        }
        
        // Ensure first slide is active
        this.goToSlide(0);
        
        this.setupEventListeners();
        this.startAutoRotation();
        this.updateAriaLabels();
        
        console.log('Hero slider ready');
    }
    
    setupEventListeners() {
        // Navigation dot clicks
        this.navDots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                this.goToSlide(index);
                this.resetAutoRotation();
            });
        });
        
        // Control button (pause/play)
        if (this.controlButton) {
            this.controlButton.addEventListener('click', () => {
                this.togglePlayPause();
            });
        }
        
        // Hover pause functionality
        this.slider.addEventListener('mouseenter', () => {
            this.pauseAutoRotation();
        });
        
        this.slider.addEventListener('mouseleave', () => {
            if (this.isPlaying) {
                this.startAutoRotation();
            }
        });
        
        // Touch/swipe support
        this.slider.addEventListener('touchstart', (e) => {
            this.handleTouchStart(e);
        }, { passive: true });
        
        this.slider.addEventListener('touchend', (e) => {
            this.handleTouchEnd(e);
        }, { passive: true });
        
        // Keyboard navigation
        this.navDots.forEach((dot, index) => {
            dot.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.goToSlide(index);
                    this.resetAutoRotation();
                }
            });
        });
        
        // Pause on focus for accessibility
        this.slider.addEventListener('focusin', () => {
            this.pauseAutoRotation();
        });
        
        this.slider.addEventListener('focusout', () => {
            if (this.isPlaying) {
                this.startAutoRotation();
            }
        });
    }
    
    goToSlide(index) {
        if (index < 0 || index >= this.slides.length) return;
        
        // Remove active class from current slide and nav dot
        if (this.slides[this.currentSlide]) {
            this.slides[this.currentSlide].classList.remove('active');
            this.slides[this.currentSlide].setAttribute('aria-hidden', 'true');
        }
        if (this.navDots[this.currentSlide]) {
            this.navDots[this.currentSlide].classList.remove('active');
            this.navDots[this.currentSlide].setAttribute('aria-selected', 'false');
        }
        
        // Set new current slide
        this.currentSlide = index;
        
        // Add active class to new slide and nav dot
        if (this.slides[this.currentSlide]) {
            this.slides[this.currentSlide].classList.add('active');
            this.slides[this.currentSlide].setAttribute('aria-hidden', 'false');
        }
        if (this.navDots[this.currentSlide]) {
            this.navDots[this.currentSlide].classList.add('active');
            this.navDots[this.currentSlide].setAttribute('aria-selected', 'true');
        }
        
        this.updateAriaLabels();
        console.log(`Switched to slide ${this.currentSlide + 1}`);
    }
    
    nextSlide() {
        const nextIndex = (this.currentSlide + 1) % this.slides.length;
        this.goToSlide(nextIndex);
    }
    
    previousSlide() {
        const prevIndex = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
        this.goToSlide(prevIndex);
    }
    
    startAutoRotation() {
        if (this.autoRotateInterval) {
            clearInterval(this.autoRotateInterval);
        }
        
        this.autoRotateInterval = setInterval(() => {
            this.nextSlide();
        }, this.autoRotateDelay);
        
        console.log('Auto-rotation started');
    }
    
    pauseAutoRotation() {
        if (this.autoRotateInterval) {
            clearInterval(this.autoRotateInterval);
            this.autoRotateInterval = null;
        }
        console.log('Auto-rotation paused');
    }
    
    resetAutoRotation() {
        if (this.isPlaying) {
            this.pauseAutoRotation();
            this.startAutoRotation();
        }
    }
    
    togglePlayPause() {
        this.isPlaying = !this.isPlaying;
        
        if (this.isPlaying) {
            this.startAutoRotation();
            this.updateControlButton('pause');
        } else {
            this.pauseAutoRotation();
            this.updateControlButton('play');
        }
    }
    
    updateControlButton(state) {
        if (!this.controlButton) return;
        
        const isPause = state === 'pause';
        const label = isPause ? 'Pause slideshow' : 'Play slideshow';
        const srText = isPause ? 'Pause slideshow' : 'Play slideshow';
        
        this.controlButton.setAttribute('aria-label', label);
        
        const srOnly = this.controlButton.querySelector('.sr-only');
        if (srOnly) {
            srOnly.textContent = srText;
        }
        
        // Update icon
        const svg = this.controlButton.querySelector('svg');
        if (svg) {
            if (isPause) {
                // Pause icon (two bars)
                svg.innerHTML = '<path d="M6 4H10V20H6V4ZM14 4H18V20H14V4Z" fill="currentColor"/>';
            } else {
                // Play icon (triangle)
                svg.innerHTML = '<path d="M8 5V19L19 12L8 5Z" fill="currentColor"/>';
            }
        }
    }
    
    updateAriaLabels() {
        // Update slider region label
        const currentSlideImg = this.slides[this.currentSlide]?.querySelector('img');
        if (currentSlideImg) {
            const altText = currentSlideImg.alt;
            this.slider.setAttribute('aria-label', `Featured dishes slideshow, currently showing: ${altText}`);
        }
    }
    
    handleTouchStart(e) {
        this.touchStartX = e.changedTouches[0].screenX;
    }
    
    handleTouchEnd(e) {
        this.touchEndX = e.changedTouches[0].screenX;
        this.handleSwipe();
    }
    
    handleSwipe() {
        const swipeDistance = this.touchStartX - this.touchEndX;
        
        if (Math.abs(swipeDistance) < this.minSwipeDistance) {
            return; // Not a significant swipe
        }
        
        if (swipeDistance > 0) {
            // Swiped left - go to next slide
            this.nextSlide();
        } else {
            // Swiped right - go to previous slide
            this.previousSlide();
        }
        
        this.resetAutoRotation();
    }
    
    // Public method to destroy the slider (cleanup)
    destroy() {
        this.pauseAutoRotation();
        // Remove event listeners would go here if needed
    }
}

// Initialize the hero slider when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.hero-image-slider');
    if (slider) {
        const heroSliderInstance = new HeroSlider();
        slider.heroSliderInstance = heroSliderInstance;
    }
});

// Handle page visibility changes (pause when tab is not active)
document.addEventListener('visibilitychange', () => {
    const slider = document.querySelector('.hero-image-slider');
    if (slider && slider.heroSliderInstance) {
        if (document.hidden) {
            slider.heroSliderInstance.pauseAutoRotation();
        } else if (slider.heroSliderInstance.isPlaying) {
            slider.heroSliderInstance.startAutoRotation();
        }
    }
});