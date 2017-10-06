var passengers = [{name: "Rikke LovelyOne", paid: true, ticket: "firstClass"},
									{name: "Rikke thePlopper", paid: true, ticket: "coach"},
									{name: "Jakey Snakes", paid: false, ticket: "firstClass"},
									{name: "Steven", paid: true, ticket: "premium"},
									{name: "Dr. Evel", paid: true, ticket: "coach"}];


// Before Take Off
function checkNoFlyList(passenger){
	return (passenger.name === "Dr. Evel");
}

function checkNotPaid(passenger){
	return (!passenger.paid);
}

function printPassenger(passenger){
	if(passenger.paid){
		console.log(passenger.name + " has paid.");
	} else {
		console.log(passenger.name + " has not paid!");
	}
	return false;
}

function processPassengers(passengers, testFunction){
	for(var i = 0; i < passengers.length; i++){
		if(testFunction(passengers[i])){
			return false;
		}
	}
	return true;
}

var allCanFly = processPassengers(passengers, checkNoFlyList);
if(!allCanFly){
	console.log("Attention Passengers! Dr. Evel is onboard. If you see him, destroy him!!");
}

var allPaid = processPassengers(passengers, checkNotPaid);
if(!allPaid){
	console.log("Attention Passengers! We have a cheap motherbitch onboard that hasn't paid. Shoot to Kill!");
}

var printPassengers = processPassengers(passengers, printPassenger);


// During Flight
function createDrinkOrder(passenger){
	var drinkOrderFunction;
	if(passenger.ticket === "firstClass"){
		drinkOrderFunction = function(){
			alert("Would you like wine or one of our special cocktails?");
		};
	}
	else if(passenger.ticket === "premium"){
		drinkOrderFunction = function(){
			alert("You have a choice of Wine, Pepsi or Water. What would you like?");
		};
	} else {
		drinkOrderFunction = function(){
			alert("Water or Pepsi? More than you deserve.");
		};
	}
	return drinkOrderFunction;
}

function createFoodOrder(passenger){
	var foodOrderFunction;
	if(passenger.ticket === "firstClass"){
		foodOrderFunction = function(){
			alert("What would you like from the kitchen? Our chef will prepare anything you can imagine!");
		}
	}
	else if(passenger.ticket === "premium"){
		foodOrderFunction = function(){
			alert("Would you like a Snack Box or a Cheese Plate for you meal today?");
		}
	} else {
		foodOrderFunction = function(){
			alert("Here's some peanuts I found on the floor. You want 'em?");
		}
	}
	return foodOrderFunction;
}

function serveCustomer(passenger){
	var getDrinkOrderFunction = createDrinkOrder(passenger);
	var getFoodOrderFunction = createFoodOrder(passenger);
	getDrinkOrderFunction();
	getFoodOrderFunction();
	getDrinkOrderFunction();
	getDrinkOrderFunction();

	getDrinkOrderFunction();
}

function servePassengers(passengers){
	for(var i = 0; i < passengers.length; i++){
		serveCustomer(passengers[i]);
	}
}

servePassengers(passengers);