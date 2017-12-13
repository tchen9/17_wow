var box = document.getElementById("box");
var boxHeight = box.offsetHeight;
var boxWidth = box.offsetWidth;

//hardcode target as center
//randomize later
var targetX = boxWidth / 2;
var targetY = boxHeight / 2;

console.log( "box height: " + boxHeight );
console.log( "box width: " + boxWidth );

//calculate distance between current mouse pos and target
var distance = function (x0, y0, x1, y1) {
    return ((x0 - x1)**2 + (y0 - y1)**2)**(1/2);
};


var findIt = function(event) {
    var event = event || window.event;
    var x = event.clientX;     // Get the horizontal coordinate
    var y = event.clientY;     // Get the vertical coordinate
    var dist = distance(x,y,targetX,targetY);
    console.log(dist);
    if(dist > 0 && dist < 10.0){
	console.log("MIDDDLE");
	return "Congratulations!";
    }
    var c = 255 - (distance(x, y, targetX, targetY)/4);
    console.log(c);
    this.style.background = 'rgb(c, c, c)';
};

/*
your OTHER FXNS
*/

box.addEventListener("mousemove", findIt);

