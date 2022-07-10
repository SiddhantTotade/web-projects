// Product Counter
const counter = document.querySelectorAll('.product-counter');

counter.forEach((node) => {
    let i = 1
    let j = 0
    const itemCount = node.querySelector('.counter')
    const incr = node.querySelector('.incr')
    const decr = node.querySelector('.decr')
    const del = node.querySelector('.delete')
    const content = document.querySelector('.cart-product-content')

    incr.addEventListener('click', () => {
        i++;
        itemCount.innerHTML = i;
    })
    decr.addEventListener('click', () => {
        if (i > 1) {
            i--;
            itemCount.innerHTML = i;
        }
    })
    del.addEventListener('click', () => {
        del.parentElement.parentElement.parentElement.remove()
        // document.querySelector('.cart-product-content').parentElement.remove()
    })
})