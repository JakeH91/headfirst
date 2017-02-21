function sing() {
			var numOfBottles = 99;
			while(numOfBottles > 0) {
				if(numOfBottles > 2){
					console.log(numOfBottles + " bottles of beer on the wall,");
					console.log(numOfBottles + " bottles of beer!");
					console.log("Take one down, pass it around,");
					numOfBottles = numOfBottles - 1;
					console.log(numOfBottles + " bottles of beer on the wall!");
				}
			
			console.log(numOfBottles + " bottles of beer on the wall,");
			console.log(numOfBottles + " bottles of beer!");
			console.log("Take one down, pass it around,");
			numOfBottles = numOfBottles - 1;
			console.log(numOfBottles + " bottle of beer on the wall!");
		
			console.log(numOfBottles + " bottle of beer on the wall,");
			console.log(numOfBottles + " bottle of beer!");
			console.log("Take one down, pass it around,");
			numOfBottles = numOfBottles - 1;
			console.log(numOfBottles + " bottles of beer on the wall!");
			}
		}
		sing();