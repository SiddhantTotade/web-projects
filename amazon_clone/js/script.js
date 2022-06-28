// Sidebar Menu
const openMenu = document.querySelector('.open-menu')
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
    document.querySelector(".mobile").style.display = 'none'
    document.querySelector(".desktop").style.display = 'block'
}
else if (window.screen.width <= 400) {
    document.querySelector(".mobile").style.display = 'block'
    document.querySelector(".desktop").style.display = 'none'
}

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

// Carousel

$(document).ready(() => {
    let one = $('#carousel-1')
    let two = $('#carousel-2')
    let three = $('#carousel-3')

    one.owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        dots: false,
        margin: 11.5,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: false
    });
    $('.play').on('click', function () {
        owl.trigger('play.owl.autoplay', [5000])
    })
    $('.stop').on('click', function () {
        owl.trigger('stop.owl.autoplay')
    })


    two.owlCarousel({
        nav: true,
        dots: false,
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

    three.owlCarousel({
        nav: true,
        dots: false,
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
})