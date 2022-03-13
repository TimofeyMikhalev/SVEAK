
let menu = document.querySelector('.menu');
let closeMenu = document.querySelector('.close');
let content = document.querySelector('.container_four__menu');

function open(){
    content.classList.remove('hide');
    content.classList.add('show');
}

function closeBlock(){
    content.classList.remove('show');
    content.classList.add('hide');
}

menu.addEventListener('click', open);
closeMenu.addEventListener('click', closeBlock);