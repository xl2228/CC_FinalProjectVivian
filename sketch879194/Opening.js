var img_background;
var img_startButton;
var startClick;
var bgm_start;
var startGame = false;

function preloadOpening (){
	img_background = loadImage('opening_bg.png');
	img_startButton = loadImage('opening_startButton.png');
	bgm_start = loadSound('snd_start.wav');
}

function startButton(){
	startClick = createSprite(667,628,100,100);
	startClick.mouseActive = true;
  startClick.addImage(img_startButton);
	
	bgm_start.play();
	bgm_start.loop();
}