let lorem = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, cupiditate architecto, dolor a nesciunt similique eos adipisci voluptatum hic laborum unde! Dolores sequi deleniti laudantium nostrum earum, velit exercitationem. Odit iure in vitae architecto corporis recusandae saepe tempore modi aliquid iustoexercitationem ipsam adipisci suscipit, illum aliquam quae, assumenda nesciunt vero enim necessitatibusillo, tenetur minima! Iure repudiandae tempore ratione culpa voluptatibus hic ipsam enim tenetur istevoluptatum ea nisi consequatur eum, quasi deleniti quisquam fugiat et quidem odit? Dolore praesentiumtemporibus quas doloremque minus laboriosam dicta possimus vero inventore placeat, molestias aperiam quosquod iusto esse voluptatum voluptatibus. Officia'

document.getElementById('home').addEventListener('click', () => {
    let active = document.getElementById('content__div')
    if (active.classList.contains('active')) {
        return
    }
    else {
        active.classList.add('active')
        let content_div = document.getElementById('content__div')
        let home_content = document.createTextNode(lorem)
        content_div.innerHTML += '<h1>Home</h1>'
        content_div.appendChild(home_content)
    }
})

document.getElementById('about').addEventListener('click', () => {
    let active = document.getElementById('content__div')
    if (active.classList.contains('active')) {
        return
    }
    else {
        active.classList.add('active')
        let content_div = document.getElementById('content__div')
        let home_content = document.createTextNode(lorem)
        content_div.innerHTML += '<h1>Contact</h1>'
        content_div.appendChild(home_content)
    }
})

document.getElementById('contact').addEventListener('click', () => {
    document.getElementById('content__div').innerHTML += "<h1>Contact</h1>" + "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, cupiditate architecto, dolor a nesciunt similique eos adipisci voluptatum hic laborum unde! Dolores sequi deleniti laudantium nostrum earum, velit exercitationem. Odit iure in vitae architecto corporis recusandae saepe tempore modi aliquid iustoexercitationem ipsam adipisci suscipit, illum aliquam quae, assumenda nesciunt vero enim necessitatibusillo, tenetur minima! Iure repudiandae tempore ratione culpa voluptatibus hic ipsam enim tenetur istevoluptatum ea nisi consequatur eum, quasi deleniti quisquam fugiat et quidem odit? Dolore praesentiumtemporibus quas doloremque minus laboriosam dicta possimus vero inventore placeat, molestias aperiam quosquod iusto esse voluptatum voluptatibus. Officia"
})