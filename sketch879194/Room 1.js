var img_room1;
var img_key;
var key_1,door_1;
var room1Start = false,room1End = false,room1Ends = false,gameEnd = false;
var img_yellowBox,keyBox;
var img_room1Turn,img_room1Door;
var img_room1_3;
var yellowDoorCloser = false;
var yellowDoorSprite,img_yellowDoor;


function preloadRoom1(){
	img_room1 = loadImage("room_1.png");
	img_key = loadImage("key_1.png");
	img_yellowBox = loadImage("yellow_ball.png");
	img_room1Turn = loadImage("room1_2.png");
	img_room1Door = loadImage("yellow_door.png");
	img_yellowDoor = loadImage("yellow_door_closer.png");
	img_room1_3 = loadImage("room1_3.png");
}

function room1Scene(){
	keyBox = createSprite(700,700,30,30);
	keyBox.addImage(img_yellowBox);
	key_1 = createSprite(465,610,100,100);
	key_1.addImage(img_key);
	key_1.mouseActive = true;
	
}

function keyControl(){

	if (key_1.mouseIsPressed){
		key_1.position.x = mouseX;
		key_1.position.y = mouseY;
		
	
	}
	if(key_1.overlap(keyBox)){
		key_1.position.x = keyBox.position.x;
		key_1.position.y = keyBox.position.y;
		room1End = true;
	}

}
function door1Scene(){
	door_1 = createSprite(410,360);
	door_1.addImage(img_room1Door);	
}

function doorControl(){
	if(key_1.mouseIsPressed){
		key_1.position.x = mouseX;
		key_1.position.y = mouseY;

	}
	if(key_1.overlap(door_1)){
		 	yellowDoorCloser = true;
		 }
	
}
var playerInput;
var password = 'yes';
var nopass = 'no';

function yellowDoorOpen(){
	yellowDoorSprite = createSprite(400,464);
	yellowDoorSprite.addImage (img_yellowDoor);
	yellowDoorSprite.mouseActive = true;
	playerInput = createInput('');
	
}

function unlockDoor(){
	playerInput.position(350,400);
	playerInput.size(100,30);
	playerInput.style("font-size", "24px");
	textSize(30);
	
	if (playerInput.value() == password) {
		room1Ends = true;
	}else if (playerInput.value() == nopass){
		gameEnd = true;
	}
	
}