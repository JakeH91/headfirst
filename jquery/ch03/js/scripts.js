$(document).ready(function(){
	$(".guest_box").click(checkForCode);
	$(".guest_box").hover(highlight, unhighlight);
	hideCode();	

	function checkForCode(){
		var discount_msg;
		if($.contains(this, document.getElementById("has_discount"))){
			var discount = getRandom(100);
			discount_msg = "<p>Your discount code: CODE"+discount+"</p>";
		}
		else {
			discount_msg = "<p>Sorry, no discount this time!</p>";
		}
		$("#result").append(discount_msg);
		$(".guest_box").each(function(){
			if($.contains(this, document.getElementById("has_discount"))){
				$(this).addClass("discount");
			}
			else{
				$(this).addClass("no_discount");
			}
			$(this).unbind('click');
		});
	}

	function getRandom(num){
		var random = Math.floor(Math.random()*num);
		return random;
	}

	function hideCode(){
		var random = getRandom(4);
		$(".guest_box").each(function(index, value){
			if(index == random){
				$(this).append('<span id="has_discount"></span>');
				return false;
			}
		})
	}		

	function highlight(){
		$(this).addClass("highlighted");
	}

	function unhighlight(){
		$(this).removeClass("highlighted");
	}

});