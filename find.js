var box = document.getElementById("box");
var boxHeight = box.offsetHeight;
var boxWidth = box.offsetWidth;

//hardcode target as center
//randomize later
var targetX = Math.random()*boxWidth;
var targetY = Math.random()*boxHeight;

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
    //console.log(dist);
    if(dist > 0 && dist < 10.0){
	this.style.backgroundImage = "url('https://cdn.modernfarmer.com/wp-content/uploads/2014/09/cowhero2.jpg')";
	this.style.backgroundSize = "cover";
	return;
    }
    var c = Math.floor(100 - (distance(x, y, targetX, targetY)/8));
    //console.log(c);
    this.style.background = 'hsl(215, 100%, ' + c +'%)';
};

/*
your OTHER FXNS
*/

box.addEventListener("mousemove", findIt);

