console.log("Hello, external JavaScript!");

let fullName = "Mykyta Opanasiuk";
let _fullName = "Mykyta Opanasiuk";
let fullName123 = "Mykyta Opanasiuk";
let $fullName = "Mykyta Opanasiuk";

// Неправильні імена
// let 1fullName = "Mykyta Opanasiuk"; // Починається з цифри
// let full-name = "Mykyta Opanasiuk"; // Містить дефіс
// let #fullName = "Mykyta Opanasiuk"; // Містить символ #
// let &fullName = "Mykyta Opanasiuk"; // Містить символ &

// Коментувати код можна завдяки символам // або /* */
// це однорядковий коментар
/* це багаторядковий коментар */

// Cтилі написання імен
// helloWorld - camelCase
// hello_world - snake_case
// HELLO_WORLD - UPPER_SNAKE_CASE
// HelloWorld - PascalCase

let userName = prompt("Напишіть своє ім'я, будь ласка.");
alert(`Привіт, ${userName}`);

const CURRENT_YEAR = 2024;
let userBirthYear = Number(prompt("Напишіть свій рік народження, будь ласка."));
let userAge = CURRENT_YEAR - userBirthYear;
alert(`Ваш вік: ${userAge}`);

let sideOfSquare = Number(prompt("Напишіть сторону квадрату."));
let resultPerimeter = sideOfSquare + sideOfSquare + sideOfSquare + sideOfSquare;
alert(`Периметр квадрату: ${resultPerimeter}`);

const PI = 3.14;
let radiusOfCircle = Number(prompt("Напишіть радіус кола."));
let resultArea = PI * radiusOfCircle ** 2;
alert(`Площа кола: ${resultArea}`);

let distanceInKm = prompt("Напишіть відстань між двома містами в кілометрах.");
let timeInHours = prompt(
  "Напишіть час, за який ви хочете дістатися до міста в годинах",
);
let speed = distanceInKm / timeInHours;
alert(`Вам потрібно рухатися зі швидкістю ${speed} км/год.`);

const EUR_RATE = 0.93;
let usdAmount = Number(prompt("Напишіть кількість USD."));
let resultEur = usdAmount * EUR_RATE;
alert(`Ви отримаєте ${resultEur} EUR.`);
