document.addEventListener('DOMContentLoaded', function() {
    const skill = document.getElementById('skill');
    const details = document.getElementById('skill-details');

    skill.addEventListener('click', function() {
        if (details.classList.contains('active')) {
            // Animate closing
            details.classList.remove('active');
            setTimeout(() => {
                details.style.display = 'none';
            }, 400); // Match animation duration
        } else {
            // Show and animate open
            details.style.display = 'block';
            setTimeout(() => {
                details.classList.add('active');
            }, 10); // Allow display to apply before animating
        }
    });
});