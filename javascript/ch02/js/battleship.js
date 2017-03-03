var location1 = Math.floor(Math.random() * 5);
var location2 = location1 + 1;
var location3 = location1 + 2;

var guess;
var guesses = 0;
var hits = 0;

var isSunk = false;

while(!isSunk) {
	guess = prompt("Ready, aim, fire! (enter a number 0-6):");
	while(guess < 0 || guess > 6) {
		guess = prompt("Please enter a valid number (0-6):");
	}
	guesses++;

	if(guess == location1 || guess == location2 || guess == location3) {
		hits++;
		alert("Hit!");

		if(hits == 3) {
			isSunk = true;
			alert("You sank my Battleship!");
		}
	}
	else{
		alert("Miss!");
	}
}

var stats = "You took " + guesses + " guesses to sink the battleship, " +
						"which means your shooting accuracy was " + (3/guesses);

alert(stats);