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
    const handstandText = document.getElementById('handstand-text');
    skill1.addEventListener('click', function() {
        open1 = !open1;
        if (open1) {
    handstandText.classList.add('hide');
} else {
    handstandText.classList.remove('hide');
}
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

// ...existing code...

document.addEventListener('DOMContentLoaded', function() {
    // ... skill1 and skill2 code ...

    // Third skill container
    const skill3 = document.getElementById('skill-3');
    const details3 = [
        document.getElementById('skill-details1-3'),
        document.getElementById('skill-details2-3'),
        document.getElementById('skill-details3-3'),
        document.getElementById('skill-details4-3')
    ];
    let open3 = false;
    const plancheText3 = document.getElementById('planche-text-3');

    if (skill3) { // Prevent errors if not found
        skill3.addEventListener('click', function() {
            open3 = !open3;
            if (open3) {
                plancheText3.classList.add('hide');
            } else {
                plancheText3.classList.remove('hide');
            }
            details3.forEach((detail, i) => {
                if (open3) {
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
                    }, (details3.length - 1 - i) * 200);
                }
            });
        });
    }

    // ...menu code...
});

const menuBtn = document.getElementById('menu-btn');
const sideMenu = document.getElementById('side-menu');

menuBtn.onclick = function() {
  sideMenu.classList.toggle('open');
  menuBtn.classList.toggle('active');
};
