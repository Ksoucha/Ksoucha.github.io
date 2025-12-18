document.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu');
    const menuOptions = document.querySelector('.menu-options');

    menu.addEventListener('click', () => {
        menuOptions.classList.toggle('active');
    });

    const currentPage = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll('.menu-options li a');

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.parentElement.classList.add('active');
        }
        if (currentPage === "" && link.getAttribute('href') === "index.html") {
            link.parentElement.classList.add('active');
        }
    });
});