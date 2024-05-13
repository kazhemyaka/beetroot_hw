// Всі можливі варіанти створення функції
// Function Declaration

// function example(a, b) {
//     return a + b;
// }

// Function Expression

// const example = function(a, b) {
//     return a + b;
// }

// Arrow Function
// const example = (a, b) => {
//     return a + b;
// }

// const example = (a, b) => a + b;

// Створи функцію, яка буде виводити кількість переданих їй аргументів.
function amountOfArguments() {
  return arguments.length;
}

alert(
  `Кількість переданих аргументів: ${amountOfArguments(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)}`,
);

// Напиши функцію, яка приймає 2 числа і повертає :
// -1, якщо перше число менше, ніж друге;
// 1 - якщо перше число більше, ніж друге;
// 0 - якщо числа рівні.
function numbersIf(a, b) {
  if (a > b) {
    return -1;
  } else if (a < b) {
    return 1;
  } else {
    return 0;
  }
}

let a = Number(prompt("Введіть перше число"));
let b = Number(prompt("Введіть друге число"));

alert(`Результат: ${numbersIf(a, b)}`);

// Напиши функцію, яка обчислює факторіал переданого їй числа.
function factorial(n) {
  if (n === 0n) {
    return 1n;
  } else if (n < 0n) {
    return "Ви ввели від'ємне число";
  }
  return n * factorial(n - 1n);
}

let n = BigInt(prompt("Введіть число для обчислення факторіалу"));

alert(`Факторіал числа ${n}: ${factorial(n)}`);

// Напиши функцію, яка приймає три окремі цифри і перетворює їх
// в одне число. Наприклад: цифри 1, 4, 9 перетворяться в число 149.
function threeNumbersAddition(a, b, c) {
  return a + b + c;
}

a = prompt("Введіть перше число");
b = prompt("Введіть друге число");
let c = prompt("Введіть третє число");

alert(`Об'єднані цифри: ${threeNumbersAddition(a, b, c)}`);

// Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу.
// Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.

function areaOfRectangle(a, b) {
  if (b === undefined) {
    return a * a;
  } else {
    return a * b;
  }
}

a = Number(prompt("Введіть довжину прямокутника (або сторону квадрата)"));
b = Number(prompt("Введіть ширину прямокутника (можна скасувати)"));

if (b === 0) {
  alert(`Площа квадрата: ${areaOfRectangle(a)}`);
} else {
  alert(`Площа прямокутника: ${areaOfRectangle(a, b)}`);
}
