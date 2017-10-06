// When the page loads, run init
window.onload = init;

// The individual sources of the images
var imageSrcs = ["dali.jpg", "johannes.jpg", "monaLisa.jpg", "vanGogh.jpeg"];

function init(){
	// Grab the images from the HTML doc
	var images = document.getElementsByTagName("img");
	// For each individual img tag...
	for (var i = 0; i < images.length; i++){
		// ...we want to randomize the image there,
		randomizeImage(i + 1);
		// and add an event handler
		images[i].onmouseover = revealImage;
		images[i].onmouseout = hideImage;
	}
}

function randomizeImage(image) {
	// Create random number between 0 and total number of images - 1
	var index = Math.floor(Math.random() * imageSrcs.length);
	// Grab the image
	var imgTag = document.getElementById("display" + image);
	// Set src of image to a random index from the global imageSrc array
	imgTag.setAttribute("src", "img/" + imageSrcs[index]);
}

function revealImage(eventObj) {
	// Get the image that has been clicked on
	var image = eventObj.target;
	// Reveal that image with the reveal css class
	image.setAttribute("class", "reveal");
	// After 5 seconds, hide that image again with the hide css class
	// (NOTE: To use the image parameter in the setTimeout function, I had to use an anonymous function,
	// rather than creating a named function elsewhere).
	// (UPDATED NOTE: To use parameter with named function would like something like
	//		setTimeout(namedFunction, 5000, param)
	// However, this is not supported by older browsers).
	// REDUNDANT!! Specs Changed

	// setTimeout(function(){
	// 	image.setAttribute("class", "hide");}, 5000);
}

function hideImage(eventObj) {
	var image = eventObj.target;
	image.setAttribute("class", "hide");
}
