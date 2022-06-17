const openMenu = document.querySelector('.open-menu')
const closeMenu = document.querySelector('.close-menu')

openMenu.addEventListener('click', () => {
    document.querySelector('.sidebar').style.width = "250px";
});

closeMenu.addEventListener('click', () => {
    document.querySelector('.sidebar').style.width = "0";
});