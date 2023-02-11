let lorem = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, cupiditate architecto, dolor a nesciunt similique eos adipisci voluptatum hic laborum unde! Dolores sequi deleniti laudantium nostrum earum, velit exercitationem. Odit iure in vitae architecto corporis recusandae saepe tempore modi aliquid iustoexercitationem ipsam adipisci suscipit, illum aliquam quae, assumenda nesciunt vero enim necessitatibusillo, tenetur minima! Iure repudiandae tempore ratione culpa voluptatibus hic ipsam enim tenetur istevoluptatum ea nisi consequatur eum, quasi deleniti quisquam fugiat et quidem odit? Dolore praesentiumtemporibus quas doloremque minus laboriosam dicta possimus vero inventore placeat, molestias aperiam quosquod iusto esse voluptatum voluptatibus. Officia'

const home = document.getElementById('home')
const contact = document.getElementById('contact')
const about = document.getElementById('about')

const title = document.getElementById('content__title')
const para = document.getElementById('content__para')

home.addEventListener('click', () => {
    title.innerHTML = "<u>Home</u>"
    para.innerHTML = lorem
})

contact.addEventListener('click', () => {
    title.innerHTML = "<u>Contact</u>"
    para.innerHTML = lorem
})

about.addEventListener('click', () => {
    title.innerHTML = "<u>About</u>"
    para.innerHTML = lorem
})