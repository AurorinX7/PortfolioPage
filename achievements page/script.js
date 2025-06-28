const menuBtn = document.getElementById('menu-btn');
const sideMenu = document.getElementById('side-menu');

menuBtn.onclick = function() {
  sideMenu.classList.toggle('open');
  menuBtn.classList.toggle('active');
};