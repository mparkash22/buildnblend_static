// Image lazy loading functionality using Intersection Observer

document.addEventListener('DOMContentLoaded', function() {
    // Check if Intersection Observer is supported
    if ('IntersectionObserver' in window) {
        // Select all images with loading="lazy" attribute
        const lazyImages = document.querySelectorAll('img[loading="lazy"]');
        
        // Create intersection observer
        const imageObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    
                    // Load the image
                    loadImage(img);
                    
                    // Stop observing this image
                    observer.unobserve(img);
                }
            });
        }, {
            // Start loading when image is 50px from viewport
            rootMargin: '50px 0px',
            threshold: 0.01
        });
        
        // Observe all lazy images
        lazyImages.forEach(function(img) {
            imageObserver.observe(img);
        });
        
        // Function to load image with progressive loading
        function loadImage(img) {
            // Add loading class for styling
            img.classList.add('lazy-loading');
            
            // If image has data-src, use it (for manual lazy loading)
            const src = img.getAttribute('data-src') || img.getAttribute('src');
            
            if (src) {
                // Create a new image to preload
                const tempImg = new Image();
                
                tempImg.onload = function() {
                    // Image loaded successfully
                    img.src = src;
                    img.classList.remove('lazy-loading');
                    img.classList.add('lazy-loaded');
                    
                    // Trigger fade-in animation
                    img.style.opacity = '0';
                    setTimeout(function() {
                        img.style.transition = 'opacity 0.3s ease';
                        img.style.opacity = '1';
                    }, 10);
                };
                
                tempImg.onerror = function() {
                    // Image failed to load
                    img.classList.remove('lazy-loading');
                    img.classList.add('lazy-error');
                    console.error('Failed to load image:', src);
                };
                
                // Start loading
                tempImg.src = src;
            }
        }
        
    } else {
        // Fallback for browsers that don't support Intersection Observer
        // Load all images immediately
        const lazyImages = document.querySelectorAll('img[loading="lazy"]');
        lazyImages.forEach(function(img) {
            const src = img.getAttribute('data-src') || img.getAttribute('src');
            if (src) {
                img.src = src;
                img.classList.add('lazy-loaded');
            }
        });
    }
    
    // Handle images with data-src attribute (manual lazy loading)
    const manualLazyImages = document.querySelectorAll('img[data-src]:not([loading="lazy"])');
    
    if (manualLazyImages.length > 0 && 'IntersectionObserver' in window) {
        const manualObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    const src = img.getAttribute('data-src');
                    
                    if (src) {
                        img.src = src;
                        img.removeAttribute('data-src');
                        img.classList.add('lazy-loaded');
                    }
                    
                    observer.unobserve(img);
                }
            });
        }, {
            rootMargin: '50px 0px',
            threshold: 0.01
        });
        
        manualLazyImages.forEach(function(img) {
            manualObserver.observe(img);
        });
    }
});
