var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var elemProcent = document.getElementById("procent");
    var width = 1;
    var id = setInterval(frame, 10);
    let returnBtn = document.querySelector('.return');


    function frame() {
      
      if (width >= 100) {
        clearInterval(id);
        i = 0;
        returnBtn.classList.remove('hide');
        returnBtn.classList.add('show');
      } else {

        width++;
        elem.style.width = width + "%";
        elemProcent.innerText = width + "%";
        

        returnBtn.classList.add('hide');
        returnBtn.classList.remove('show');
      }
    }


   
    
  }
}