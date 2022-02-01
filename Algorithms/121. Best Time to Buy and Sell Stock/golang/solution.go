func maxProfit(prices []int) int {
	minPrice := math.MaxInt32
	theMaxProfit := 0
	for _, price := range prices {
		if price < minPrice {
			minPrice = price
		} else if price-minPrice > theMaxProfit {
			theMaxProfit = price - minPrice
		}
	}

	return theMaxProfit
}
