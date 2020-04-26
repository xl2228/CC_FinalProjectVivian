function preload() {
	preloadOpening();
}

function setup() {
	createCanvas(800,800);
	startButton();
	background(255);
	
}

function draw() {
console.log(mouseX,mouseY);

if (startClick.mousePressed == true){
	starGame = true;
}
if (startGame == false){
	image(img_background,0,0);
	drawSprite(startClick);
}
}