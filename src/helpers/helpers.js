const calculateRewardPoints = (price) => {
  if (price > 100) {
    return 50 + Math.floor(price - 100) * 2;
  } else if (price > 50) {
    return Math.floor(price) - 50;
  } else {
    return 0;
  }
};

const calculateMonthlyTotal = (transactions) => {
  let total = 0;
  for (let transaction of transactions) {
    total += calculateRewardPoints(transaction);
  }
  return total;
};

export { calculateRewardPoints, calculateMonthlyTotal };
