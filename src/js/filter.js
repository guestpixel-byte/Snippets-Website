document.addEventListener('DOMContentLoaded', function () {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const posts = document.querySelectorAll('.post-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            const category = this.getAttribute('data-category');

            // Show all posts if 'All' is selected
            if (category === 'all') {
                posts.forEach(post => post.style.display = 'block');
            } else {
                // Otherwise, show only posts that match the selected category
                posts.forEach(post => {
                    const postCategory = post.getAttribute('data-category');
                    if (postCategory === category) {
                        post.style.display = 'block';
                    } else {
                        post.style.display = 'none';
                    }
                });
            }
        });
    });
});
