var menu = document.querySelector('.nav-menu');
var menuLink = document.querySelectorAll('.nav-link');
var menuText =document.querySelectorAll('.nav-text');
function toggleMenu(){
    menu.classList.toggle("isOpen");
    for(link of menuLink){
    link.classList.toggle('show');
    }
    for(text of menuText){
        text.classList.toggle('appear');
        }
    document.getElementById('menu-image').classList.toggle('rotate');
}


