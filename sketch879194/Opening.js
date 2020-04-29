var img_background;
var img_startButton;
var bgm_start;
var bgm_button;
var startGame = false;
var startClick;

function preloadOpening (){
	bgm_start = loadSound('snd_start.wav');
	bgm_button = loadSound('snd_button.wav');
	img_background = loadImage('opening_bg.png');
	img_startButton = loadImage('opening_startButton.png');
	
}


function startButton(){
	startClick = createSprite(667,628,100,100);
	startClick.addImage(img_startButton);
	startClick.mouseActive = true;
	bgm_start.play();
	bgm_start.loop();
}
