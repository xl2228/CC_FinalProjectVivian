var laptopStart = false;
var img_laptop;
var laptopClick;

function preloadLaptop(){
	img_laptop = loadImage('laptop_2.png');
						
}

function laptopScene(){
	background(206,244,236);
	laptopClick = createSprite(400,580);
	laptopClick.addImage(img_laptop);
	laptopClick.mouseActive = true;

}
