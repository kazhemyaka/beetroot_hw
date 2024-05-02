alert((0.1 + 0.2).toFixed(1));

let a = "1";
let b = 2;
alert(Number(a) + b);

let flashDrive = Number(prompt("Вкажіть обсяг флешки в Гб."));
const FILE = 820;
let resultOfFiles = Math.floor((flashDrive * 1024) / FILE);
alert(
  `На флешці ${flashDrive} Гб вміститься така к-ть файлів розміром в 820 Мб: ${resultOfFiles}.`,
);

let sumOfMoney = Number(prompt("Вкажіть суму грошей."));
let priceOfChocolate = Number(prompt("Вкажіть ціну шоколадки."));
let resultOfChocolate = Math.floor(sumOfMoney / priceOfChocolate);
let resultOfMoney = sumOfMoney % priceOfChocolate;
alert(
  `Ви можете купити таку к-ть шоколадок: ${resultOfChocolate}. У вас залишиться ${resultOfMoney} грн.`,
);

let number = Number(prompt("Введіть тризначне число."));
let resultOfFlip =
  (number % 10) * 100 +
  Math.floor((number % 100) / 10) * 10 +
  Math.floor(number / 100);

alert(
  `Число, в якому цифри розташовані в зворотньому порядку: ${resultOfFlip}.`,
);

let depositAmount = Number(prompt("Вкажіть суму вкладу в банк на 2 місяці."));
const INTEREST_RATE = 0.05;
let interestAmount = ((depositAmount * INTEREST_RATE) / 12) * 2;
alert(`Прибуток за 2 місяці: ${interestAmount.toFixed(2)}.`);

alert(2 && 0 && 3); // 0
alert(2 || 0 || 3); // 2
alert((2 && 0) || 3); // 3
