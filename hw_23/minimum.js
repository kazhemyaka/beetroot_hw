let shoppingList = [
  {
    name: "Apple",
    quantity: 3,
    isBought: false,
    price: 5,
  },
  {
    name: "Water",
    quantity: 2,
    isBought: true,
    price: 3,
  },
  {
    name: "Bread",
    quantity: 1,
    isBought: false,
    price: 2,
  },
];

shoppingList = shoppingList.map((item) => ({
  ...item,
  sum: item.price * item.quantity,
}));

function displayFalseFirst(arr) {
  return arr.sort((a, b) => a.isBought - b.isBought);
}

console.log(displayFalseFirst(shoppingList));

function buyProductByName(arr, name) {
  arr.map((item) => {
    if (item.name === name) {
      item.isBought = true;
    }
    return item;
  });
}

console.log(buyProductByName(shoppingList, "Apple"));

console.log(displayFalseFirst(shoppingList));
