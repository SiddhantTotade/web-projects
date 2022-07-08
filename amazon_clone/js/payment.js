if (window.screen.width >= 400) {
    document.querySelector('.payment-mob').style.display = 'none'
    document.querySelector('.delivery-footer').style.display = 'none'
}
else if (window.screen.width <= 400) {
    document.querySelector(".payment-mob").style.display = 'block'
    document.querySelector(".payment").style.display = 'none'
    document.querySelector(".upper-desk").style.display = 'none'
    document.querySelector(".middle-desk").style.display = 'none'
    document.querySelector(".lower-desk").style.display = 'none'
}