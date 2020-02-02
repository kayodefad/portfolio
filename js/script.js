let menu = document.querySelector('#navbar #menu-container')

let hamburger = document.querySelector('#hamburger-menu')

hamburger.addEventListener('click', () => {
  menu.style.display = 'block'
})

document.addEventListener('click', (e) => {
  if(e.target == menu) {
    menu.style.display = "none"
  }
})

// Smooth Scrolling
$('a').on('click', function(event) {
  if (this.hash !== '') {
    event.preventDefault()

    const hash = this.hash

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top
      },
      800
    )
  }
})