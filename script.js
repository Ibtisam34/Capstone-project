const menuButton = document.getElementById('hamburger');
const cross = document.getElementById('cross');
const menu = document.getElementById('mobile-menu-id');

function hideMenu() {
  menu.classList.replace('show', 'hide');
  document.body.style.overflow = 'scroll';
}

function showMenu() {
  menu.classList.replace('hide', 'show');
  document.body.style.overflow = 'hidden';
}

menuButton.addEventListener('click', showMenu);
cross.addEventListener('click', hideMenu);
