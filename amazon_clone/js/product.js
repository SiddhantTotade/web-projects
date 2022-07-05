// Dropdown Menu
let dropdownBtn = document.querySelector(".dropdown-btn")
let menuContent = document.querySelector(".dropdown-menu")

dropdownBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    menuContent.classList.toggle('show')
});

window.onclick = () => {
    menuContent.classList.remove('show')
}

// Sidebar Menu
////// const openMenu = document.querySelector('.open-menu')
////// const closeMenu = document.querySelector('.close-menu')
const openMenuDesktop = document.querySelector('.open-menu-desktop')
const closeMenuDesktop = document.querySelector('.close-menu-desktop')

/////// openMenu.addEventListener('click', () => {
///////     document.querySelector('.sidebar').style.width = "250px";
/////// });

/////// closeMenu.addEventListener('click', () => {
///////     document.querySelector('.sidebar').style.width = "0";
/////// });

if (window.screen.width >= 400) {
    document.querySelector(".mobile").style.display = 'none'
    document.querySelector(".desktop").style.display = 'block'
}
else if (window.screen.width <= 400) {
    document.querySelector(".mobile").style.display = 'block'
    document.querySelector(".desktop").style.display = 'none'
    document.querySelector(".product").style.display = 'none'
    document.querySelector(".upper-footer").style.display = 'none'
    document.querySelector(".middle-footer").style.display = 'none'
    document.querySelector(".lower-footer").style.display = 'none'
    document.querySelector(".copyright").style.display = 'none'
}

openMenuDesktop.addEventListener('click', () => {
    document.querySelector('.sidebar-desktop').style.width = "350px";
});

closeMenuDesktop.addEventListener('click', () => {
    document.querySelector('.sidebar-desktop').style.width = "0";
});


$(function () {
    $(".xzoom,.xzoom-gallery").xzoom({
        zoomWidth: 500,
        // width:"100px",
        // height:"100vh",
        zoomHeight: 500,
        tint: "#331",
        Xoffset: 50,
    })
});


// Product Carousel
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    // nav: true,
    dots: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
})