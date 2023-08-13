function nonConstructibleChange(coins) {
  // Write your code here.
  coins.sort()
  min_change = 0

  for (let coin of coins) {
    if (coin > min_change + 1) {
      break
    }
    min_change += coins
  }
  return min_change + 1
}

// Do not edit the line below.
exports.nonConstructibleChange = nonConstructibleChange
