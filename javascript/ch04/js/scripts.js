var scores = [60, 50, 60, 58, 54, 54,
							58, 50, 52, 54, 48, 69,
							34, 55, 51, 52, 44, 51,
							69, 64, 66, 55, 52, 61,
							46, 31, 57, 52, 44, 18,
							41, 53, 55, 61, 51, 44];

var costs = [.25, .27, .25, .25, .25, .25,
						 .33, .31, .25, .29, .27, .22,
						 .31, .25, .25, .33, .21, .25,
						 .25, .25, .28, .25, .24, .22,
						 .20, .25, .30, .25, .24, .25,
						 .25, .25, .27, .25, .26, .29];

var highScore = printAndGetHighScore(scores);
var high_positions = getHighPositions(scores, highScore);
var mostCostEffective = getMostCostEffectiveSolution(scores, costs, highScore);
var costPerBubble = costs[mostCostEffective] / highScore;

function printAndGetHighScore(scores){
	var highScore = 0;
	for(var i = 0; i < scores.length; i++){
		console.log("Bubble solution #" + i + " score: " + scores[i]);
		if(scores[i] > highScore){
			highScore = scores[i];
		}
	}
	return highScore;
}
function getHighPositions(scores, highScore){
	var high_positions = [];
	for(var i = 0; i < scores.length; i++){
		if(scores[i] == highScore){
			high_positions.push(i);
		}
	}
	return high_positions;
}

function getMostCostEffectiveSolution(scores, costs, highScore){
	var cost = 100;
	var index = 0;
	for(var i = 0; i < scores.length; i++){
		if(scores[i] == highScore){
			if(costs[i] < cost){
				cost = costs[i];
				index = i;
			}
		}
	}
	return index;
}




console.log("\nBubble tests: " + scores.length);
console.log("Highest bubble score: " + highScore);
console.log("Solutions with highest score: " + high_positions);
console.log("Bubble solution #" + mostCostEffective + " is the most cost effective, at " + costPerBubble + " per bubble!");