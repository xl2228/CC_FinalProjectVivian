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
console.log(frameCount);
if (mouseIsPressed){
	console.log('x:'+mouseX,'y:'+mouseY);
}
	
if (startGame == false){
	image(img_background,0,0);
	drawSprite(startClick);
}


if (startClick.mouseIsPressed == true){
	startGame = true;
	background(206,244,236);
	startClick.remove();
	img_background.visible = false;
	//bgm_button.play();
	//bgm_button.loop = false;
}
if (keyCode==32){
drawSprite(laptopClick);
laptopStart = true;
}


if (laptopC_Click.mouseIsPressed == true){
	laptopEnd = true
}
}


	

