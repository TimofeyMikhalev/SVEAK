let btn = document.querySelector('.container_three__btn');
let arr = document.querySelectorAll('.container_three__inner');

let bg1 = document.querySelector('.bg_one');
let bg2 = document.querySelector('.bg_two');
let bg3 = document.querySelector('.bg_three');
let bg4 = document.querySelector('.bg_four');


function color() {

    bg1.classList.remove('bg_one');
    bg2.classList.remove('bg_two');
    bg3.classList.remove('bg_three');
    bg4.classList.remove('bg_four');

    for (let i = 0; i < arr.length; i++) {

        let a = Math.floor(Math.random(i) * arr.length);
        console.log(a);

        // let a = Math.floor(Math.random(i) * arr.length);

        let colors = ['#94CBFF', '#FD9191', '#DFFF9B', '#FDFF83'];
        a = colors[Math.floor(Math.random(4) * colors.length)];
        arr[i].style.background = a;
    }

}

btn.addEventListener('click', color)