def total(prices)
	amount = 0
	prices.each {|price| amount += price}
	amount
end

def refund(prices)
	amount = 0
	prices.each {|price| amount -= price}
	amount
end

def show_discounts(prices)
	prices.each do |price|
		amount_off = price/3.0
		puts format("Your discount from $#{price} is $%.2f, making the new cost $%.2f", amount_off, price - amount_off)
	end
end