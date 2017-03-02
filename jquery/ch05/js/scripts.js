$(document).ready(function(){
	var headclix = 0, eyeclix = 0, noseclix = 0, mouthclix = 0;
	
	lightning_one();
	lightning_two();
	lightning_three();
	
	$("#head").click(function(){
		if(headclix < 9){
			headclix += 1;
			$(this).animate({left: "-=367px"}, 500);
		}
		else {
			headclix = 0;
			$(this).animate({left: "0px"}, 500);
		}
	});
	$("#eyes").click(function(){
		if(eyeclix < 9){
			eyeclix += 1;
			$(this).animate({left: "-=367px"}, 500);
		}
		else {
			eyeclix = 0;
			$(this).animate({left: "0px"}, 500);
		}
	});
	$("#nose").click(function(){
		if(noseclix < 9){
			noseclix += 1;
			$(this).animate({left: "-=367px"}, 500);
		}
		else {
			noseclix = 0;
			$(this).animate({left: "0px"}, 500);
		}
	});
	$("#mouth").click(function(){
		if(mouthclix < 9){
			mouthclix += 1;
			$(this).animate({left: "-=367px"}, 500);
		}
		else {
			mouthclix = 0;
			$(this).animate({left: "0px"}, 500);
		}
	});
	
});

	
	function lightning_one(){
		debugger;
		$("#container #lightning1").fadeIn(250).fadeOut(250);
		setTimeout("lightning_one()", 4000);
	};
	function lightning_two(){
		$("#container #lightning2").fadeIn("fast").fadeOut("fast");
		setTimeout("lightning_two()", 4000);
	};
	function lightning_three(){
		$("#container #lightning3").fadeIn("fast").fadeOut("fast");
		setTimeout("lightning_three()", 4000);
	};

