var y = 1000;
var score = 0;
var teemoDeath = new Audio('sound/teemodeath.mp3');
var teemoPop = new Audio('sound/teemopop.mp3');
var teemoSurvive = new Audio('sound/teemosurvive.mp3');


for (var i = 0; i < 6; i++) {
  var container = document.createElement("div");
  document.body.appendChild(container);
  var duck = document.createElement("img");
  duck.src = "img/teemo.png";
  var x = parseInt(Math.random() * 1200);
  duck.className = "target";
  var duckArray = document.getElementsByClassName("target");
  container.appendChild(duck);
  teemoPop.play();

  duck.style.position = "absolute";
  duck.style.width = "100px";
  duck.style.height = "100px";
  duck.style.top = y + "px";
  duck.style.left = x + "px";
  duck.style.transition = "3s";
  duck.style.rotate = "null";

}

setInterval(move, 1200);


function move() {
  for (var i = 0; i < duckArray.length; i++) {
    movingDuck = duckArray[i];
    movingDuck.style.top = y + "px";
    y -= 40;
    movingDuck.style.left = x + "px";
    newX = parseInt(Math.random() * 1200);
    console.log(newX);
    x = newX;
    movingDuck.addEventListener('click', function(){
      this.remove();
      teemoDeath.play();
    })
    if (y < -100) {
      movingDuck.remove();
      teemoSurvive.play();

    }


  }
}
