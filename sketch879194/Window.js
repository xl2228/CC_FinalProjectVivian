var windowStart = false;
var img_window;
var windowShow;


function preloadWindow(){
	img_window = loadImage ('window_0.png');

}
function program(){
	windowShow = createSprite(400,400);
	windowShow.addImage(img_window);
}