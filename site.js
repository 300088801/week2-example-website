const h1 = document.querySelector('h1')
h1.textContent = "John is Lame!"

const copyright = document.querySelector('footer p')
copyright.textContent = "This is some random content"

const link = document.querySelector('.active')
link.style.color = '#ff0000'
link.style.textDecoration = 'underline'

const contactLink = document.querySelector('#contact')
contactLink.style.fontWeight = "bold"

const contactAlt = document.getElementById('contact')

const links = document.querySelectorAll('nav a')
links.forEach(link=> console.log(link))


alert("Hello")