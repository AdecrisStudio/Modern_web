// Select DOM Items
const menuBtn = document.querySelector
('.menu-btn');
const menu = document.querySelector(
'.menu');
const menuNav = document.querySelector
('.menu-nav');
const menuBranding = document.querySelector
('.menu-branding');
const navItems = document.querySelectorAll
('.nav-item');


// Set Initial State Of Menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if(!showMenu) {

        menuBtn.classList.remove('close');
        menu.classList.remove('Show');
        menuNav.classList.remove('Show');
        menuBranding.classList.remove('Show');
        navItems.forEach(item => item.classList.add('show'));


        // Set Menu State
        showMenu = false;


    } else {

    }
}

