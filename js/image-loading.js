/**
 * Image Loading States Handler
 * Handles image loading, error states, and placeholders
 */

(function() {
    'use strict';
    
    /**
     * Initialize image loading handlers
     */
    function initImageLoading() {
        const images = document.querySelectorAll('img[loading="lazy"]');
        
        images.forEach(img => {
            // Add loaded class when image loads
            if (img.complete) {
                img.classList.add('loaded');
            } else {
                img.addEventListener('load', function() {
                    this.classList.add('loaded');
                });
                
                // Handle image load errors
                img.addEventListener('error', function() {
                    this.classList.add('error');
                    
                    // Create placeholder if it doesn't exist
                    if (!this.nextElementSibling || !this.nextElementSibling.classList.contains('image-placeholder')) {
                        const placeholder = document.createElement('div');
                        placeholder.className = 'image-placeholder';
                        placeholder.textContent = 'Image unavailable';
                        placeholder.setAttribute('role', 'img');
                        placeholder.setAttribute('aria-label', this.alt || 'Image placeholder');
                        
                        this.parentNode.insertBefore(placeholder, this.nextSibling);
                    }
                });
            }
        });
    }
    
    /**
     * Show loading overlay
     */
    function showLoading(message = 'Loading...') {
        let overlay = document.querySelector('.loading-overlay');
        
        if (!overlay) {
            overlay = document.createElement('div');
            overlay.className = 'loading-overlay';
            overlay.innerHTML = `
                <div class="loading-content">
                    <div class="loading-spinner" role="status" aria-label="Loading"></div>
                    <p class="loading-text">${message}</p>
                </div>
            `;
            document.body.appendChild(overlay);
        }
        
        // Force reflow to trigger transition
        overlay.offsetHeight;
        overlay.classList.add('active');
    }
    
    /**
     * Hide loading overlay
     */
    function hideLoading() {
        const overlay = document.querySelector('.loading-overlay');
        if (overlay) {
            overlay.classList.remove('active');
        }
    }
    
    /**
     * Create skeleton loading cards
     */
    function createSkeletonCard() {
        const skeleton = document.createElement('div');
        skeleton.className = 'skeleton-card';
        skeleton.innerHTML = `
            <div class="skeleton-image"></div>
            <div class="skeleton-text"></div>
            <div class="skeleton-text medium"></div>
            <div class="skeleton-text short"></div>
        `;
        return skeleton;
    }
    
    // Initialize on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initImageLoading);
    } else {
        initImageLoading();
    }
    
    // Expose functions globally for use in other scripts
    window.BuildAndBlend = window.BuildAndBlend || {};
    window.BuildAndBlend.showLoading = showLoading;
    window.BuildAndBlend.hideLoading = hideLoading;
    window.BuildAndBlend.createSkeletonCard = createSkeletonCard;
    
})();
