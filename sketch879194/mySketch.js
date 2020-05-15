var i = 0;
function preload() {
	preloadOpening();
	preloadLaptop();
	preloadScreen();
	preloadProgram();
	preloadWindow();
	preloadRoom1();
	preloadRoom2();
}

function setup() {
	createCanvas(800,800);
	startButton();
	laptopScene();
	screenScene();
	program();
	textControl();
	
	room1Scene();
	door1Scene();
	yellowDoorOpen();
	
	room2Scene();
	door2Scene();
	redDoorOpen();
	
	prepareVoice();

	
}


function keyPressed(){
if (keyCode == ENTER){
	console.log('key is pressed');
	codeStart = true;
	textControl();
	windowTextStart = true;
	//room1Start = true;
}
}


function draw() {
//console.log(frameCount);
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

if (frameCount>=150 && frameCount <=300){
		drawSprite(laptopClick);
}
if (frameCount >= 150 && frameCount <=450){
	
textSize(30);
textAlign(CENTER);
strokeWeight(2);
noStroke();
fill(0);
text("I'm about to finish this sketch.",400,120);
text("It's time to give it a try!",400,160);
}
 if (frameCount>=300 && frameCount <=450){
	 laptopClick.remove();
	 drawSprite(laptopC_Click);
 }

if (frameCount>=450){
	laptopC_Click.remove();
	program();
}
/*if (frameCount >=550){
	codeStart = true;
}*/
if (codeStart == true && codeEnd == false){
	codeText();
}
if (codeEnd == true && windowStart == true && windowEnd == false){
	windowRun();
	windowText();
}
if (windowEnd == true && room1Start == true && room1End == false){
	clear();
	image(img_room1,0,0);
	drawSprite(keyBox);
	drawSprite(key_1);
	
	textSize(20);
	textAlign(CENTER);
	fill(0);
	text("Drag key to keybox",400,160);
	
	keyControl();
	
}

if(room1End == true){
	clear();
	image(img_room1Turn,0,0);
	drawSprite(keyBox);
	drawSprite(door_1);
	drawSprite(key_1,600,700);
	doorControl();
	
}
if (yellowDoorCloser == true){
		clear();
		image(img_room1_3,0,0);
		drawSprite(yellowDoorSprite);
		
		textSize(20);
		textAlign(LEFT);
		strokeWeight(2);
		noStroke();
		fill(0);
		text("CONTINUE? yes or no",320,270);
	
		unlockDoor();
	}
if (room1Ends == true){
	clear();
	playerInput.remove();
	image(img_room2,0,0);
	drawSprite(redKeyBox);
	drawSprite(key_2);
	key2Control();
}
	if (gameEnd == true){
		clear();
		playerInput.remove();
		background(206,244,236);
		textAlign(LEFT);
		textSize(80);
		text("noLOOP();",250,400);
	}
if(room2End == true){
	clear();
	image(img_room2Turn,0,0);
	drawSprite(redKeyBox);
	drawSprite(door_2);
	drawSprite(key_2,700,700);
	door2Control();
	
}
	if (redDoorCloser == true){
		clear();
		image(img_room2_3,0,0);
		drawSprite(redDoorSprite);
		
		textSize(20);
		fill(0);
		text ("Shout to find the way out",315,270);
		
		unlockRedDoor();
}
if (gameLoop == true){
	clear();
	doorInput.remove();
	background(0);
	textAlign(LEFT);
	fill(255,0,0);
	textSize(80);
	text("LOOP();",250,400);
}

}
	

