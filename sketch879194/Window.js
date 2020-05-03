
var img_window;
var scale = 0.8;


function preloadWindow(){
	img_window = loadImage ('window_0.png');

}
function program(){
image(img_window, 0, 0, width, img_window.height*width/img_window.width)
}