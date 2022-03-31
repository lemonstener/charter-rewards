const bob = {
  name: "Bob",
  transactions: [
    { month: "April", transactions: [17.53, 87.0, 117.09] },
    { month: "May", transactions: [519.57, 59.17, 69.69, 420.0] },
    { month: "June", transactions: [17.09, 38.47, 49.99, 5.34] },
  ],
};

const mike = {
  name: "Mike",
  transactions: [
    { month: "January", transactions: [64.57, 139.18, 75.99, 18.75] },
    {
      month: "February",
      transactions: [25.0, 254.56, 100.87, 13.45, 49.99, 75.67],
    },
    { month: "March", transactions: [169.83, 37.05, 28.27, 95.84] },
  ],
};

const molly = {
  name: "Molly",
  transactions: [
    { month: "June", transactions: [89.45, 34.5, 185.33] },
    { month: "July", transactions: [119.45, 7.41, 19.8] },
    { month: "August", transactions: [25.57, 134.5, 200.99] },
  ],
};

const transactionData = [bob, mike, molly];

export { transactionData };
