$(document).ready(function(){
	function card(name, suit, value){
		this.name = name;
		this.suit = suit;
		this.value = value;
	}
	var hand = {
		cards: [],
		current_total: 0,
		sumCardTotal: function(){
			this.current_total = 0;
			for(var i = 0; i < this.cards.length; i++){
				var t = this.cards[i];
				this.current_total += t.value;
			}
			$("#hdrTotal").html("Total: " + this.current_total);
			if(this.current_total > 21){
				$("#btnStick").trigger("click");
				$("#imgResult").attr("src", "img/x2.png");
				$("#hdrResult").html("BUST!")
											.attr("class", "lose");
			}else if(this.current_total == 21){
				$("#btnStick").trigger("click");
				$("#imgResult").attr('src','img/check.png');
				$("#hdrResult").html("BLACKJACK!")
											.attr('class', 'win');
			}else if(this.current_total < 21 && this.cards.length == 5){
				$("#btnStick").trigger("click");
				$("#imgResult").attr('src','img/check.png');
				$("#hdrResult").html("5 Card Trick!")
											.attr('class', 'win');
			}
			else{}
		}
	}

	// CREATE DECK
	var suits = ["Hearts", "Diamonds", "Spades", "Clubs"];
	var names = ["Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King", "Ace"];
	var deck = [];
	for(var x = 0; x < 4; x++){
		for(var y = 2; y < 15; y++){
			var name = names[y-2];
			var suit = suits[x];
			var value = 0;
			if(y < 11){
				value = y;
			}
			else if(y > 10 && y < 14){
				value = 10;
			}
			else{
				value = 11;
			}
			deck.push(new card(name, suit, value));
		}
	}

	var used_cards = new Array();
	
	function deal(){
		for(var i = 0; i < 2; i++){
			hit();
		}
	}

	function getRandom(num){
		var my_num = Math.floor(Math.random() * num);
		return my_num;
	}

	function hit(){
		debugger;
		var good_card = false;
		do{
			var index = getRandom(52);
			if(!$.inArray(index, used_cards) > -1){
				good_card = true;
				var c = deck[index];
				used_cards[used_cards.length] = index;
				hand.cards[hand.cards.length] = c;
				var $d = $("<div>");
				$d.addClass("current_hand")
					.appendTo("#my_hand");
				$("<img>").appendTo($d)
									.attr('src', 'img/cards/' + c.suit + '/' + c.name + '.jpg')
									.fadeIn('slow');
			}
		}while(!good_card);
		good_card = false;
		hand.sumCardTotal();
	}

	function end(){
		$("#btnHit").toggle();
		$("#btnStick").toggle();
		$("#btnRestart").toggle();
	}

	$('#btnDeal').click(function(){
		deal();
		$(this).toggle();
		$('#btnHit').toggle();
		$('#btnStick').toggle();		
	});

	$("#btnHit").click(function(){
		hit();
	});

	$("#btnStick").click(function(){
		$("#hdrResult").html('Stick!')
									.attr("class", "win");
		$("#result").toggle();
		end();
	});

	$("#btnRestart").click(function(){
		$("#result").toggle();
		$(this).toggle();
		$("#my_hand").empty();
		$("#hdrResult").html("");
		used_cards.length = 0;
		hand.cards.length = 0;
		hand.current_total = 0;
		$("#btnDeal").toggle()
									.trigger("click");
	});

});