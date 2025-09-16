<script>
document.addEventListener('DOMContentLoaded', function() {
    const worksTab = document.getElementById('worksTab');
    const dropdown = worksTab.querySelector('.dropdown');
    
    // Toggle dropdown on mobile
    worksTab.addEventListener('click', function(e) {
        if (window.innerWidth <= 767px) {
            e.preventDefault();
            e.stopPropagation();
            
            // Toggle visibility
            const isVisible = window.getComputedStyle(dropdown).display !== 'none';
            dropdown.style.display = isVisible ? 'none' : 'block';
        }
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if (window.innerWidth <= 767px && 
            !worksTab.contains(e.target) && 
            window.getComputedStyle(dropdown).display === 'block') {
            dropdown.style.display = 'none';
        }
    });
    
    // Prevent dropdown close when clicking inside it
    dropdown.addEventListener('click', function(e) {
        e.stopPropagation();
    });
});
</script>