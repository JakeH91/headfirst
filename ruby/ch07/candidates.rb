class Candidate
	attr_accessor :name, :age, :occupation, :hobby, :birthplace
	def initialize(name, age:, occupation:, hobby: nil, birthplace: nil)
		self.name = name
		self.age = age
		self.occupation = occupation
		self.hobby = hobby
		self.birthplace = birthplace
	end

	def print_summary
		puts "Candidate: #{self.name}"
		puts "Age: #{self.age}"
		puts "Occupation: #{self.occupation}"
		puts "Hobby: #{self.hobby}"
		puts "Birthplace: #{self.birthplace}"
	end
end

frank = Candidate.new("Frank", occupation: "Lawyer", hobby: "Archery", birthplace: "Norwich, Norfolk", age: 24)
frank.print_summary