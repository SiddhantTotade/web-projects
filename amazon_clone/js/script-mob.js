const openMenu = document.querySelector('.open-menu')
const closeMenu = document.querySelector('.close-menu')

openMenu.addEventListener('click', () => {
    document.querySelector('.sidebar').style.width = "250px";
});

closeMenu.addEventListener('click', () => {
    document.querySelector('.sidebar').style.width = "0";
});

$(document).ready(() => {
    let carouselMob = $('#carousel-mobile')

    carouselMob.owlCarousel({
        items: 1,
        loop: true,
        nav: false,
        dots: true,
        margin: 0,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: false
    });
})
