// Мінімум
// Створи масив «Список покупок». Кожен елемент масиву є об'єктом, який містить назву продукту, кількість і куплений він чи ні,
// ціну за одиницю товару, сума. Написати кілька функцій для роботи з таким масивом:
// Виводити весь список на екран таким чином, щоб спочатку йшли продукти, що ще не придбані, а потім - ті, що вже придбали.
// Покупка продукту. Функція приймає назву продукту і відзначає його як придбаний.

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

// Норма
// Видалення продукту зі списку (видалення повинно проводитися шляхом створення нового масиву, в якому продукт, що ми шукаємо, буде відсутнім)
// Додавання покупки в список. Враховуй, що при додаванні покупки з уже існуючим в списку продуктом, 
// необхідно збільшувати кількість в існуючій покупці, а не додавати нову. 
// При цьому також повинна змінитися сума, наприклад, якщо ціна за одиницю 12, а кількості товарів стало 2, то сума буде 24.

function deleteProductByName(arr, name) {
  return arr.filter((item) => item.name !== name);
}

let newShoppingList = deleteProductByName(shoppingList, "Apple");

function addProduct(arr, name, quantity, price) {
  let isExist = false;
  arr.map((item) => {
    if (item.name === name) {
      item.quantity += quantity;
      item.sum = item.price * item.quantity;
      isExist = true;
    }
    return item;
  });
  if (!isExist) {
    arr.push({
      name: name,
      quantity: quantity,
      isBought: false,
      price: price,
      sum: price * quantity,
    });
  }
}

addProduct(newShoppingList, "Milk", 3, 5);

console.log(displayFalseFirst(newShoppingList));

// Максимум
// Підрахунок суми всіх продуктів (враховуючи кількість кожного) в списку.
// Підрахунок суми всіх (не) придбаних продуктів.
// Показання продуктів в залежності від суми, (від більшого до меншого / від меншого до більшого, в залежності від параметра функції, який вона приймає)

function sumOfAll(arr) {
  return arr.reduce((acc, item) => acc + item.sum, 0);
}

console.log(sumOfAll(newShoppingList));

function sumOfAllBought(arr) {
  return arr.filter((item) => item.isBought).reduce((acc, item) => acc + item.sum, 0);
}

console.log(sumOfAllBought(newShoppingList));

function sumOfAllNotBought(arr) {
  return arr.filter((item) => !item.isBought).reduce((acc, item) => acc + item.sum, 0);
}

console.log(sumOfAllNotBought(newShoppingList));

function sortProductsBySum(arr, isAsc) {
  return arr.sort((a, b) => isAsc ? a.sum - b.sum : b.sum - a.sum);
}

console.log(sortProductsBySum(newShoppingList, true));
