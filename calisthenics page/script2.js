document.addEventListener('DOMContentLoaded', function() {
    // First skill container
    const skill1 = document.getElementById('skill');
    const details1 = [
        document.getElementById('skill-details1'),
        document.getElementById('skill-details2'),
        document.getElementById('skill-details3'),
        document.getElementById('skill-details4')
    ];
    let open1 = false;

    skill1.addEventListener('click', function() {
        open1 = !open1;
        details1.forEach((detail, i) => {
            if (open1) {
                setTimeout(() => {
                    detail.style.display = 'block';
                    setTimeout(() => {
                        detail.classList.add('active');
                    }, 10);
                }, i * 200);
            } else {
                setTimeout(() => {
                    detail.classList.remove('active');
                    setTimeout(() => {
                        detail.style.display = 'none';
                    }, 400);
                }, (details1.length - 1 - i) * 200);
            }
        });
    });

    // Second skill container
    const skill2 = document.getElementById('skill-2');
    const details2 = [
        document.getElementById('skill-details1-2'),
        document.getElementById('skill-details2-2'),
        document.getElementById('skill-details3-2'),
        document.getElementById('skill-details4-2')
    ];
    let open2 = false;
    const plancheText = document.getElementById('planche-text');

    skill2.addEventListener('click', function() {
        open2 = !open2;
        if (open2) {
    plancheText.classList.add('hide');
} else {
    plancheText.classList.remove('hide');
}
        details2.forEach((detail, i) => {
            if (open2) {
                setTimeout(() => {
                    detail.style.display = 'block';
                    setTimeout(() => {
                        detail.classList.add('active');
                    }, 10);
                }, i * 200);
            } else {
                setTimeout(() => {
                    detail.classList.remove('active');
                    setTimeout(() => {
                        detail.style.display = 'none';
                    }, 400);
                }, (details2.length - 1 - i) * 200);
            }
        });
    });
});

