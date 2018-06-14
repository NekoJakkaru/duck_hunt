var y = 500;
// document.body.appendChild(duck);
console.log(duck);

duck.style.background = "red";
duck.style.position = "absolute";
duck.style.width = "20px";
duck.style.height = "20px";
duck.style.top = y + "px";
duck.style.left = x + "px";
duck.style.transition = "1s";
duck.style.rotate = "null";

// while (y > 0) {
setInterval(move, 1000);
for (var i = 0; i < 6; i++) {
    var duck = document.createElement("div");
    var x = parseInt(Math.random()*1200);
    document.body.appendChild(duck);

}
function move() {
    duck.style.top = y + "px";
    y -= 20;
    duck.style.left = x + "px";
    newX = parseInt(Math.random() * 1200);
    console.log(newX);
    x = newX;
    // if (x < newX) {
    //     for (var i = x; i < newX; i++) {
    //         x += 20;
    //     }
    // } else {
    //     for (var i = x; x > newX; i++) {
    //         x -= 20;
    //     }
    // }
    if (y < -20) {
        duck.remove();
    }
    // newY = Math.round(Math.random())*0;
}
// }
