function preload() {
	preloadOpening();
	preloadLaptop();
	preloadScreen();
	preloadWindow();
}

function setup() {
	createCanvas(800,800);
	startButton();
	laptopScene();
	screenScene();
	program();
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
if (frameCount>=150 && frameCount <=250){
drawSprite(laptopClick);
}
	
 if (frameCount>=250 && frameCount <=380){
	 laptopClick.remove();
	 drawSprite(laptopC_Click);
 }

if (frameCount>=380){
	laptopC_Click.remove();
	program();
}
	
}


	

