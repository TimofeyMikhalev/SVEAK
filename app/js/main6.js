let pulse = document.querySelector('.container_six__img');
let pulseBtn = document.querySelector('.container_six__btn1');
let colorBtn = document.querySelector('.container_six__btn2');
let imgBox = document.querySelector('.container_six__img path');

function pulseBox() {
    pulse.classList.add('pulse');
}
pulseBtn.addEventListener('click', pulseBox);


function colorBox() {
    let colors = ['#ff0000', '#00ff00', '#0000ff', '#333333'];
    let random_color = colors[Math.floor(Math.random() * colors.length)];
    imgBox.style.fill = random_color;
}
colorBtn.addEventListener('click', colorBox);