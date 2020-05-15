
var img_program;
var programEnd = false;
var runCode;

function preloadProgram(){
	img_program = loadImage ('window_1.1.png');

}
function program(){
image(img_program, 0, 0)
textSize(20);
textAlign(LEFT);
strokeWeight(2);
noStroke();
fill(0);
text("Press ENTER to write code.",270,50)

}
