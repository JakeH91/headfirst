# Guess My Number
# Written by Jake Hill (21/02/17)

def guessing_game
	print "Hello, what should I call you? "
	name = gets.chomp
	number = rand(100) + 1
	guesses_remaining = 10
	is_correct = false
	puts "Welcome #{name}! It's time to play Guess My Number!"
	puts "I'm thinking of a number between 1 and 100, can you guess what it is?"
	while guesses_remaining > 0
		if guesses_remaining == 1
			puts "You only have 1 guess remaining!!!"
		else
			puts "You have #{guesses_remaining} guesses remaining."
		end
		puts "What do you guess?"
		guess = gets.to_i
		guesses_remaining -= 1
		if guess == number
			if (10 - guesses_remaining) == 1
				puts "Good job, #{name}! You guessed my number in only 1 guess!!!"
			else
				puts "Good job, #{name}! You guessed my number in #{10 - guesses_remaining} guesses!"
			end
			is_correct = true
			exit
		elsif guess > number
			puts "Oops, your guess was too HIGH!"
		else
			puts "Oops, your guess was too LOW!"
		end
	end

	unless is_correct
		puts "Sorry, you didn't get my number. It was #{number}!"
		puts "Better luck next time!"
		play_again?
	end
end

def play_again?
	puts "Do you want to play again? (yes or no please)"
	again = gets.chomp.downcase
	if again == "yes"
		puts ""
		guessing_game
	elsif again == "no"
		puts "Ok, see you!"
		exit
	else
		puts "That was not the answer I was looking for!"
		play_again?
	end
end

guessing_game

