// Toggle the menu list visibility on smaller screens
const menuIcon = document.getElementById('menu-icon');
const menuList = document.getElementById('menuList');

menuIcon.addEventListener('click', () => {
  menuList.classList.toggle('active');
});