// vars
const mobileMenu = document.getElementById('mobile-menu')
const menuIcon = document.getElementById('menu-icon')
const menuNav = document.getElementById('menu-nav')
const navItens = document.querySelectorAll('#menu-nav')
// funcs
const CloseMenu = () =>{
    menuIcon.classList.add('fa-bounce')
    setTimeout(() =>{ 
        menuIcon.classList.remove('fa-bounce')
        menuNav.classList.remove('nav-over')
        menuIcon.classList.remove('book-color')
    }, 500)
}
// events
mobileMenu.addEventListener('click', () =>{
    if(menuNav.classList.contains('nav-over')){
        CloseMenu()
    }else{
        menuIcon.classList.add('fa-bounce')
    setTimeout(() =>{ 
        menuIcon.classList.remove('fa-bounce')
        menuNav.classList.add('nav-over')
        menuIcon.classList.add('book-color')
    }, 500)
    }
})
navItens.forEach(navIten =>{
    navIten.addEventListener('click', () =>{
        CloseMenu()
    })
})