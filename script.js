function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open")
    // Add or remove the 'closed' class depending on the menu state
    if (menu.classList.contains('open')) {
        menu.classList.remove('closed');
    } else {
        menu.classList.add('closed');
    }
    icon.classList.toggle("open")
}