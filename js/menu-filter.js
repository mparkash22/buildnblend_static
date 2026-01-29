// Menu filtering functionality

document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const menuItems = document.querySelectorAll('.card-menu');

    // Add click event listeners to all filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            
            // Update active state on buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter menu items with smooth fade transition
            menuItems.forEach(item => {
                const itemCategory = item.getAttribute('data-category');
                
                if (category === 'all' || itemCategory === category) {
                    // Show item with fade in
                    item.style.opacity = '0';
                    item.style.display = 'block';
                    
                    // Trigger reflow to enable transition
                    item.offsetHeight;
                    
                    // Fade in
                    setTimeout(() => {
                        item.style.transition = 'opacity 0.3s ease';
                        item.style.opacity = '1';
                    }, 10);
                } else {
                    // Hide item with fade out
                    item.style.transition = 'opacity 0.3s ease';
                    item.style.opacity = '0';
                    
                    // Hide after fade out completes
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
});
