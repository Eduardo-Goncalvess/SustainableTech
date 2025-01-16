document.addEventListener("DOMContentLoaded", function() {
    if (window.innerWidth < 768) {
        window.location.href = "https://eduardo-goncalvess.github.io/SustainableTech/TS.html";
    }
});

const menuToggle = document.getElementById('menu-toggle');
const submenu = document.getElementById('submenu');

menuToggle.addEventListener('click', () => {
    submenu.classList.toggle('show');
});
