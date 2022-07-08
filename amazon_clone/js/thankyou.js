// Sidebar
const openMenu = document.querySelector('#open-menu')
const closeMenu = document.querySelector('.close-menu')
const openMenuDesktop = document.querySelector('.open-menu-desktop')
const closeMenuDesktop = document.querySelector('.close-menu-desktop')

openMenu.addEventListener('click', () => {
    document.querySelector('.sidebar').style.width = "250px";
});

closeMenu.addEventListener('click', () => {
    document.querySelector('.sidebar').style.width = "0";
});

openMenuDesktop.addEventListener('click', () => {
    document.querySelector('.sidebar-desktop').style.width = "350px";
});

closeMenuDesktop.addEventListener('click', () => {
    document.querySelector('.sidebar-desktop').style.width = "0";
});

// Media Query
if (window.screen.width >= 400) {
    document.querySelector('.delivery-mob').style.display = 'none'
    document.querySelector('.upper').style.display = 'none'
    document.querySelector('.lower').style.display = 'none'
}
else if (window.screen.width <= 400) {
    document.querySelector(".delivery-mob").style.display = 'block'
    document.querySelector(".desktop").style.display = 'none'
    document.querySelector(".thankyou").style.display = 'none'
    document.querySelector(".upper-desk").style.display = 'none'
    document.querySelector(".middle-desk").style.display = 'none'
    document.querySelector(".lower-desk").style.display = 'none'
}