
var img_laptopC;
var laptopC_Click;
var screenStart = false;
let input;
function preloadScreen(){
		img_laptopC = loadImage('laptop_3.png');
}


function screenScene(){
	background(206,244,236);
	laptopC_Click = createSprite(400,580);
	laptopC_Click.addImage(img_laptopC);
	laptopC_Click.mouseActive = true;
}


