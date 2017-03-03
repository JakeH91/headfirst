function makeCar() {
	var makes = ["BMW", "Mercedes", "Ford", "Nissan", "Hyundai"];
	var models = ["Sprint", "Valley", "Missile", "Air", "Go"];
	var years = [1982, 1991, 1947, 1966, 2001];
	var colours = ["Red", "Yellow", "Chrome", "Black", "White"];
	var convertible = [true, false];

	var randMake = Math.floor(Math.random() * makes.length);
	var randModel = Math.floor(Math.random() * models.length);
	var randYear = Math.floor(Math.random() * years.length);
	var randColour = Math.floor(Math.random() * colours.length);
	var randConvert = Math.floor(Math.random() * convertible.length);
	var randPassengers = Math.floor(Math.random() * 4) + 1;

	var car = {
		make: makes[randMake],
		model: models[randModel],
		year: years[randYear],
		colour: colours[randColour],
		convertible: convertible[randConvert],
		passengers: randPassengers,
		mileage: 0,
		engineOn: false,
		start: function(){
			this.engineOn = true;
			console.log("The car has started.")
		},
		stop: function(){
			this.engineOn = false;
			console.log("The engine is now off.")
		},
		drive: function(){
			if(this.engineOn){
				console.log("Vrroooooooom!!");
			}
			else{
				console.log("You need to start the car first...");
			}
		}
	}

	return car;
}

function displayCar(car){
	console.log("Your new car is a " + car.year + " " + car.make + " " + car.model + ".");
}

var newCar = makeCar();
displayCar(newCar);

function doSomething(carId){
	if(carId == "start"){
		newCar.start();
	}
	else if(carId == "drive"){
		newCar.drive();
	}
	else if(carId == "stop"){
		newCar.stop();
	}
};