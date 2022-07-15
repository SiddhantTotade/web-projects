// Media Query
if (window.screen.width >= 400) {
    // document.querySelector('.payment').style.display = 'grid'
    document.querySelector('.payment-mob').style.display = 'none'
    document.querySelector('.delivery-footer').style.display = 'none'
}
else if (window.screen.width <= 400) {
    document.querySelector(".payment-mob").style.display = 'grid'
    document.querySelector(".payment").style.display = 'none'
    document.querySelector(".upper-desk").style.display = 'none'
    document.querySelector(".middle-desk").style.display = 'none'
    document.querySelector(".lower-desk").style.display = 'none'
}


// Redirect Page
let amazonPay = document.getElementById('amazon-pay')
let addCard = document.getElementById('add-card')
let otherUPI = document.getElementById('other-upi')
let payOnDelivery = document.getElementById('pay-on-delivery')

document.getElementById('amazon-pay').addEventListener('click', () => {
    amazonPay.checked = true;
    addCard.checked = false;
    otherUPI.checked = false;
    payOnDelivery.checked = false;
})
document.getElementById('add-card').addEventListener('click', () => {
    addCard.checked = true;
    amazonPay.checked = false;
    otherUPI.checked = false;
    payOnDelivery.checked = false;
})
document.getElementById('other-upi').addEventListener('click', () => {
    otherUPI.checked = true;
    amazonPay.checked = false;
    addCard.checked = false;
    payOnDelivery.checked = false;
})
document.getElementById('pay-on-delivery').addEventListener('click', () => {
    payOnDelivery.checked = true;
    amazonPay.checked = false;
    addCard.checked = false;
    otherUPI.checked = false;
})

document.querySelector('.continue').addEventListener('click', () => {
    if (amazonPay.checked == true || payOnDelivery.checked == true || addCard.checked == true || otherUPI.checked == true) {
        location.href = '/thankyou.html'
        amazonPay.checked = false
        payOnDelivery.checked = false
        addCard.checked = false
        otherUPI.checked = false
    }
    else {
        alert("Please select an option for delivery.")
    }
})
