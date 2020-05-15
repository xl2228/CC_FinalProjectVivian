//in Text
var codeScene = 0;
var codeStart = false;
var codeEnd = false;

function textControl(){
	if (codeStart == true && codeEnd == false){
		codeScene +=1;
	}
 if (codeEnd == true && windowTextStart == true && windowTextEnd == false){
	 textScene +=1;
 }
}
function codeText(){
	fill (37,70,146);
	textSize(20);
	textAlign (LEFT);
	
	if(codeScene == 1){
	text("void setup() { video = new Capture (this, 320, 240);",80,227);
	text(" video.start();   }",80,257);
	text("Hit ENTER to run code.",80,310);
	}else if (codeScene > 1){
		codeEnd = true;
	}

// in mySketch
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

//in Room 2
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