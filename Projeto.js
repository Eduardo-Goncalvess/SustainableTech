const menuToggle = document.getElementById('menu-toggle');
const submenu = document.getElementById('submenu');

menuToggle.addEventListener('click', () => {
    submenu.classList.toggle('show');
});
