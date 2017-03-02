class Bird
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

	def talk
		puts "#{@name} says \"Chirp! Chirp!\""
	end

	def move(destination)
		puts "#{@name} flies to the #{destination}"
	end
end

class Dog
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
	
	def talk
		puts "#{@name} says \"Woof! Woof!\""
	end

	def move(destination)
		puts "#{@name} runs to the #{destination}"
	end
end

class Cat
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
	
	def talk
		puts "#{@name} says \"Meow!\""
	end

	def move(destination)
		puts "#{@name} runs to the #{destination}"
	end
end

bird = Bird.new
dog = Dog.new
cat = Cat.new

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