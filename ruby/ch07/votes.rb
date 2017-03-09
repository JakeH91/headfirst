lines = []

File.open("votes.txt") do |vote_file|
	lines = vote_file.readlines
end

votes = Hash.new(0)

lines.each do |line|
	name = line.chomp.capitalize
	votes[name] += 1
end

votes.each do |name, votes|
	puts "#{name}: #{votes}"
end