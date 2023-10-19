const userInputString = prompt(
  "Please enter a ice cream flavor to be ordered.",
  "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);
const IcecreamFlavors = {
  Flavors: "Vanilla, Coffee, Strawberry",
  OrderVanilla: 3,
  OrderCoffee: 2,
  OrderStrawberry: 1,
}
console.log(Object.keys(IcecreamFlavors))
console.log(Object.values(IcecreamFlavors))
console.table(IcecreamFlavors);

const prices = Object.values(IcecreamFlavors);
let totalCost = 0;

for (let i = 0; i < prices.length; i++) {
  totalCost += prices[i];
}

