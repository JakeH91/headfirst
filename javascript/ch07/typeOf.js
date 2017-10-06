// var text = "YOU SHOULD NEVER SHOUT WHEN TYPING";
// var presentableText = text.toLowerCase();
// if (presentableText.length > 0) {
// alert(presentableText);
// }

function Duck(sound) {
this.sound = sound;
this.quack = function() {console.log(this.sound);}
}
var toy = new Duck("quack quack");
toy.quack();
console.log(typeof toy);
console.log(toy instanceof Duck);

if (99 == "99") {
	console.log("A number equals a string");
} else {
	console.log("Of course a number doesn't equal a string you dick!");
}

console.log("True == 'True'? " + (true == "true"));

// find the textarea within index where a number will be typed
var number = document.getElementById("number");

var displayNumber = function(e){
	// find the code for the key that is pressed
	var keyCode = e.which || e.keyCode;
	// Get a copy of the currently displayed string
	var stringDisplayed = document.getElementById("display").innerHTML;
	
	// If backspace is pressed
	if (keyCode == 8){
		// If warning message is being displayed
		if (stringDisplayed == "That is not a number!"){
				// Remove everything from textarea and display
				document.getElementById("display").innerHTML = "";
				document.getElementById("number").value = "";
		}
		// Else if warning message is not displayed
		else if (stringDisplayed != "That is not a number!") {
			// Remove last character from display
			document.getElementById("display").innerHTML = stringDisplayed.substring(0, stringDisplayed.length -1);
		}	
	} 
	// Else if it's a number
	else if (keyCode > 47 && keyCode < 58){
		// convert charCode into correct number
		var keyValue = String.fromCharCode(keyCode);
		// If warning message is being displayed
		if (stringDisplayed == "That is not a number!"){
				// Remove everything from textarea and display
				document.getElementById("display").innerHTML = "";
				document.getElementById("number").value = keyValue;
		}
		
		// and add it to the display
		document.getElementById("display").innerHTML += keyValue;
	} 
	// Else if it's a dash 
	else if (keyCode == 189){
		// convert charCode into correct number
		var keyValue = String.fromCharCode(45);
		// and add it to the display
		document.getElementById("display").innerHTML += keyValue;
	}
	// Else, if it's not a number, or a backspace
	else {
		// Display a warning message
		document.getElementById("display").innerHTML = "That is not a number!"
	}
}

// Function to check if phone number is in valid format
var checkNumberForValidity = function(){
	// Get currently displayed string
	var stringDisplayed = document.getElementById("display").innerHTML;
	// If string is not 8 characters long
	if (stringDisplayed.length != 8) {
		return false;
	}
	// If character at possition 3 is not a dash
	else if(stringDisplayed.charAt(3) != "-"){
		return false;
	}
	else {
		// Work through each character within string
		for (var i = 0; i < stringDisplayed.length; i++) {
			// apart from the dash
			if (i != 3){
				// check if character is not a number
				if (isNaN(stringDisplayed.charAt(i), 10)) {
					return false;
				}	
			}
		}
	}
	return true;
}


// add an event listener to the textarea
number.onkeyup = function(e){
	// call displayNumber function
	displayNumber(e);
	if(checkNumberForValidity()){
		document.getElementById("display").classList.remove("invalid");
		document.getElementById("display").classList.add("valid");
		document.getElementById("horray").classList.remove("hidden");
	} else {
		document.getElementById("display").classList.remove("valid");
		document.getElementById("display").classList.add("invalid");
		document.getElementById("horray").classList.add("hidden");
	}
};

