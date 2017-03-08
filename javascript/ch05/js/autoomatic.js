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
		fuel: 0,

		start: function(){
			if(this.fuel > 0){
				this.engineOn = true;
				console.log("The car has started.");
			}
			else{
				console.log("The car sputters a bit, then dies. Looks like you need to top up your fuel.");
			}
			
		},
		stop: function(){
			this.engineOn = false;
			console.log("The engine is now off.")
		},
		drive: function(){
			if(this.engineOn){
				if(this.fuel > 0){
					console.log("VRRRROOOOOOOooooooommmmm!!!");
					this.fuel -= 1;
				}
				else{
					console.log("Uh oh! Looks like you're out of fuel");
				}
			}
			else{
				console.log("You need to start the car first...");
			}
		},
		addFuel: function(amount){
			if(this.fuel <= 100){
				console.log("Fuel gauge has gone up by " + amount + ", making total fuel = " + this.fuel + ".");
				this.fuel += amount;
			}
			else{
				console.log("Your tank is full! No need for more.");
			}
		}
	}

	return car;
}

function displayCar(car){
	console.log("Your new car is a " + car.year + " " + car.make + " " + car.model + ".");
	// console.log("Let's take a closer look at your new car.");
	// for(prop in car){
	// 	console.log(prop + ": " + car[prop]);
	// };
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
	else if(carId == "addFuel"){
		newCar.addFuel(10);
	}
};