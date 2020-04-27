function preload() {
	preloadOpening();
	preloadLaptop();
	preloadScreen();
}

function setup() {
	createCanvas(800,800);
	startButton();
	laptopScene();
	screenScene();
}



function draw() {
	
if (mouseIsPressed){
	console.log('x:'+mouseX,'y:'+mouseY);
}
	
if (startGame == false){
	image(img_background,0,0);
	drawSprite(startClick);
}
//if (startClick.mouseIsOver==true){
//	bgm_button.play();
//	noLoop();

if (startClick.mouseIsPressed == true){
	startGame = true;
	background(206,244,236);
	startClick.remove();
	img_background.visible = false;

}

if (keyCode == 32){
	laptopStart = true;
}
if (laptopStart == true){
	drawSprite(laptopClick);
}
if (laptopClick.mouseIsPressed == true){
	laptopStart = false;
	laptopCstart = true;
}if (laptopCstart == true){
	laptopClick.remove();
	drawSprite(laptopC_Click);
	
}
}



