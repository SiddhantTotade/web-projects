let counter = document.querySelectorAll('.incr')
let j = 1;


for (let k = 0; k < counter.length; k++) {
    document.querySelector('.incr').addEventListener('click', () => {
        for (let i = 0; i < counter.length; i++) {
            console.log("Clicked", i);
        }
    })
}