// Responsible for updating what you see on screen
var view = {
	// Change the message
	displayMessage: function(msg){
		var messageArea = document.getElementById("messageArea");
		messageArea.innerHTML = msg;
	},

	// Place picture of ship on a cell in the table
	displayHit: function(location){
		var target = document.getElementById(location);
		target.setAttribute("class", "hit");
	},

	// Place "Miss" on a cell in the table
	displayMiss: function(location){
		var target = document.getElementById(location);
		target.setAttribute("class", "miss");
	}
};

// Responsible for updating the model of the game
var model = {
	// Variables to allow different difficulties of game
	boardSize: 7,
	numShips: 3,
	shipLength: 3,
	shipsSunk: 0,

	// Where the ships will be placed, and whether or not parts of the ship have been hit
	ships: [{locations: [0, 0, 0], hits: ["", "", ""]},
					{locations: [0, 0, 0], hits: ["", "", ""]},
					{locations: [0, 0, 0], hits: ["", "", ""]}],

	// The logic called when player enters a target
	fire: function(guess){

		// Cycle through the ships to see if the guess matches any of the locations of the ships on the board
		for (var i = 0; i < this.numShips; i++) {
			var ship = this.ships[i];
			// If guess is amoungst the array of this specific ships locations, the index will be returned, else -1
			var index = ship.locations.indexOf(guess);
			if (index >= 0) {
				ship.hits[index] = "hit";
				view.displayMessage("HIT!");
				view.displayHit(guess);
				if (this.isSunk(ship)) {
					view.displayMessage("You sank my battleship!!!");
					this.shipsSunk++;
				}
				return true;
			}
		}
		view.displayMessage("You missed...");
		view.displayMiss(guess);
		return false;
	},

	// Returns true if final hit sunk that particular ship
	isSunk: function(ship){
		for (var i = 0; i < this.shipLength; i++) {
			if (ship.hits[i] !== "hit") {
				return false;
			}
		}
		return true;
	},

	// Generates the locations of the ships
	generateShipLocations: function(){
		var locations;
		for (var i = 0; i < this.numShips; i++) {
			do {
				locations = this.generateShip();
			} while (this.collision(locations));
			this.ships[i].locations = locations;
		}
	},

	// Randomizes ship coordinates
	generateShip: function(){
		var direction = Math.floor(Math.random() * 2);
		var row, col;

		// If 1, produce horizontal ship
		if (direction === 1) {
			row = Math.floor(Math.random() * this.boardSize);
			col = Math.floor(Math.random() * (this.boardSize - this.shipLength));
		} else {
			// Otherwise, produce vertical ship
			row = Math.floor(Math.random() * (this.boardSize - this.shipLength));
			col = Math.floor(Math.random() * this.boardSize);
		}

		var newShipLocations = [];
		// Loop through length of ship until all coordinates have been generated
		for (var i = 0; i < this.shipLength; i++) {
			// If horizontal
			if (direction === 1) {
				newShipLocations.push(row + "" + (col + i));
			} else {
				// If vertical
				newShipLocations.push((row + i) + "" + col);
			}
		}
		return newShipLocations;

	},

	// Checks to see if any ship coordinates overlap any other
	collision: function(locations){
		for (var i = 0; i < this.numShips; i++) {
			var ship = model.ships[i];
			for (var j = 0; j < locations.length; j++) {
				if (ship.locations.indexOf(locations[j]) >= 0) {
					return true;
				}
			}
		}
		return false;
	}
}

var controller = {
	guesses: 0,

	processGuess: function(guess){
		var location = parseGuess(guess);
		if (location) {
			this.guesses++;
			var hit = model.fire(location);
			if (hit && model.shipsSunk === model.numShips) {
				view.displayMessage("You sank all my battleships, in " + this.guesses + " guesses.");
			}
		}
	}
}

function parseGuess(guess){
	var alphabet = ["A", "B", "C", "D", "E", "F", "G"];

	if (guess === null || guess.length !== 2) {
		alert("Oops! Please enter a letter and a number from the board.");
	} else {
		var firstChar = guess.charAt(0);
		var row = alphabet.indexOf(firstChar);

		var column = guess.charAt(1);

		if(isNaN(row) || isNaN(column)){
			alert("Oops, that doesn't seem to be on the board.");
		} else if (row < 0 || row >= model.boardSize || column < 0 || column >= model.boardSize) {
			alert("Oops, that is off the board!");
		} else {
			return row + column;
		}
	}
	return null;
}

function init(){
	var fireButton = document.getElementById("fireButton");
	fireButton.onclick = handleFireButton;

	var guessInput = document.getElementById("guessInput");
	guessInput.onkeypress = handleKeyPress;

	model.generateShipLocations();
}

function handleFireButton(){
	var guessInput = document.getElementById("guessInput");
	var guess = guessInput.value;

	controller.processGuess(guess);
	guessInput.value = "";

}

function handleKeyPress(e){
	var fireButton = document.getElementById("fireButton");
	if (e.keyCode === 13) {
		fireButton.click();
		return false;
	}
}

window.onload = init;