document.addEventListener('DOMContentLoaded', function() {
    const skill = document.getElementById('skill');
    const details = [
        document.getElementById('skill-details1'),
        document.getElementById('skill-details2'),
        document.getElementById('skill-details3')
    ];
    let open = false;

    skill.addEventListener('click', function() {
        open = !open;
        details.forEach((detail, i) => {
            if (open) {
                setTimeout(() => {
                    detail.style.display = 'block';
                    setTimeout(() => {
                        detail.classList.add('active');
                    }, 10);
                }, i * 200); // 200ms delay between each
            } else {
                setTimeout(() => {
                    detail.classList.remove('active');
                    setTimeout(() => {
                        detail.style.display = 'none';
                    }, 400);
                }, (details.length - 1 - i) * 200); // reverse order
            }
        });
    });
});