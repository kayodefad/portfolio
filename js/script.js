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