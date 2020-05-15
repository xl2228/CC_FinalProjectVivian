var room2Start = false;
var img_room2;
var img_key2;
var key_2,door_2;
var room2End = false,gameLoop = false;
var img_redBox,redKeyBox;
var img_room2Turn,img_room2Door;
var img_room2_3;
var redDoorCloser = false;
var redDoorSprite,img_redDoor;
var img_mic;
var videoStart = false;

function preloadRoom2(){
	img_room2 = loadImage("room2_1.png");
	img_key2 = loadImage("key_2.png");
	img_redBox = loadImage("red_box.png");
	img_room2Turn = loadImage("room1_2.png");
	img_room2Door = loadImage("red_door.png");
	img_redDoor = loadImage("red_door_closer.png");
	img_room2_3 = loadImage("room1_3.png");
	img_mic = loadImage ("mic.png");
	
}

function room2Scene(){
	redKeyBox = createSprite(700,700,30,30);
	redKeyBox.addImage(img_redBox);
	key_2 = createSprite(465,610,100,100);
	key_2.addImage(img_key2);
	key_2.mouseActive = true;
	
}

function key2Control(){

	if (key_2.mouseIsPressed){
		key_2.position.x = mouseX;
		key_2.position.y = mouseY;
		
	
	}
	if(key_2.overlap(redKeyBox)){
		key_2.position.x = redKeyBox.position.x;
		key_2.position.y = redKeyBox.position.y;
		room2End = true;
	}

}

function door2Scene(){
	door_2 = createSprite(410,360);
	door_2.addImage(img_room2Door);	
}

function door2Control(){
	if(key_2.mouseIsPressed){
		key_2.position.x = mouseX;
		key_2.position.y = mouseY;

	}
	if(key_2.overlap(door_2)){
		 redDoorCloser = true;
		 }
	
}

function redDoorOpen(){
	redDoorSprite = createSprite(400,464);
	redDoorSprite.addImage (img_redDoor);
	redDoorSprite.mouseActive = true;

	doorInput = createInput('');
}
 var mic,volume;
function prepareVoice(){
	mic = new p5.AudioIn();
	mic.start();
}

	var doorInput;
	var doorCode = "out";

function unlockRedDoor(){

	var vol = mic.getLevel();
	fill(255);
	rect(360, 500, 80, vol *-500);
	fill(255,21,0);
	textSize(30);
	text("out",370,360)
	image(img_mic, 358,389)
	
	doorInput.position(350,537);
	doorInput.size(100,30);
	doorInput.style("font-size", "24px");
	textSize(30);
	
	if (doorInput.value() == doorCode) {
		gameLoop = true;
	
	}

	
}