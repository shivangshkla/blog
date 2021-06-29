var menu = document.querySelector('.nav-menu');
var menuLink = document.querySelectorAll('.nav-link');
function toggleMenu(){
    menu.classList.toggle("isOpen");
    for(link of menuLink)
    link.classList.toggle('show');
    document.getElementById('menu-image').classList.toggle('rotate');
}


