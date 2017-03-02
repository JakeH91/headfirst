class Animal
	attr_reader :name, :age

	def name=(value)
		if value == ""
			raise "Name can't be blank"
		end
		@name = value
	end

	def age=(value)
		if value < 0
			raise "Age can't be under 0"
		end
		@age = value
	end

	def report_age
		puts "#{@name} is #{@age} years old"
	end

	def move(destination)
		puts "#{@name} runs to the #{destination}"
	end
end


class Bird < Animal
	def talk
		puts "#{@name} says \"Chirp! Chirp!\""
	end

	def move(destination)
		puts "#{@name} flies to the #{destination}"
	end
end


class Dog < Animal
	def talk
		puts "#{@name} says \"Woof! Woof!\""
	end

	def to_s
		puts "#{@name} the dog, age #{@age}."
	end
end


class Cat < Animal
	def talk
		puts "#{@name} says \"Meow!\""
	end
end

class Armidillo < Animal
	def talk
		puts "#{@name} says \"Hey!\""
	end

	def move(destination)
		puts "#{@name} unfurls."
		super
	end
end

bird = Bird.new
dog = Dog.new
cat = Cat.new
dillon = Armidillo.new

bird.name = "Tweety"
bird.age = 1023
bird.move("tree")
dog.name = "Fido"
dog.age = 0
dog.talk
bird.talk
cat.name = "Smokey"
cat.age = 11
cat.move("house")
cat.report_age
dillon.name = "Dillon"
dillon.move("big ol' pile of ants!")

puts dog.to_s