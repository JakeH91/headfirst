$(document).ready(function(){
	var v = false;
	var $f;
	var $m;
	$("#vegOn").click(function(){
		if(v == false){
			v = true;
			$f = $("li.fish").parent().parent().detach();
			$("li.hamburger").replaceWith("<li class='portobello'><em>Portobello Mushroom</em></li>");
			$("li.meat").after("<li class='tofu'><em>Tofu</em></li>");
			$m = $("li.meat").detach();
			$(".tofu").parent().parent().addClass("veg_leaf");
			$(".portobello").parent().parent().addClass("veg_leaf");
		}
	});

	$("#restoreMe").click(function(){
		if(v == true){
			v = false;
			$(".tofu").parent().parent().removeClass("veg_leaf");
			$(".portobello").parent().parent().removeClass("veg_leaf");
			$(".menu_entrees li").first().before($f);
			$("li.portobello").replaceWith("<li class='hamburger'>hamburger</li>");
			$(".tofu").each(function(i){
				$(this).after($m[i]);
			})
			$(".tofu").remove();
		}
	});
});