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
	
}
var textScene = 0;
var windowTextStart = false;
var windowTextEnd = false;

function windowText(){
	fill(255);
	textSize(20);
	textAlign(LEFT);
	
	if(textScene == 0){
		text("loading...",80,257);
	}
	if(textScene == 1){
		textSize(80);
		text("LOOP();",250,400);
	}
	if(textScene >1){
		windowTextEnd = true;
		windowEnd = true;
		room1Start = true;
	}
	
}


