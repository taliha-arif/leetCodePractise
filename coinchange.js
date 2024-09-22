const coins = [1, 2, 5];
const amount = 11;

const findcoinMin = (coins, amount) => {
  if (amount < 1) {
    return 0;
  }
  
  // Initialize the dpArray with a size of amount + 1
  let dpArray = new Array(amount + 1).fill(Number.MAX_VALUE);
  
  // Base case: To make amount 0, we need 0 coins
  dpArray[0] = 0;

  // Iterate through all amounts from 1 to the given amount
  for (let i = 1; i <= amount; i++) {
    for (let c of coins) {
      if (c <= i && dpArray[i - c] !== Number.MAX_VALUE) {
        dpArray[i] = Math.min(dpArray[i], 1 + dpArray[i - c]);
      }
    }
  }

  // If the amount is not possible to be made, return -1
  return dpArray[amount] === Number.MAX_VALUE ? -1 : dpArray[amount];
};

console.log(findcoinMin(coins, amount));
