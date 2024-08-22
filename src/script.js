document.querySelectorAll('.sidebar a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const filter = e.target.getAttribute('data-filter');

        // Filter logic
        document.querySelectorAll('.grid-item').forEach(item => {
            if (filter === 'all' || item.classList.contains(filter)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// Responsive Dropdown for Sidebar
document.querySelector('.sidebar').addEventListener('click', function() {
    this.querySelector('ul').classList.toggle('active');
});
