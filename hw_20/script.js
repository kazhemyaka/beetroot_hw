// // Мінімум
// // Запитай у користувача його вік і визначи, ким він є: дитиною (0-11), підлітком (12-17),
// // дорослим (18_59) або пенсіонером (60 ...), передбач можливість введення невірних даних.

// let personAge = prompt("Напишіть свій вік");

// if (personAge >= 60) {
//   alert("Ви пенсіонер!");
// } else if (personAge >= 18 && personAge <= 59) {
//   alert("Ви доросла людина!");
// } else if (personAge >= 12 && personAge <= 17) {
//   alert("Ви підліток!");
// } else if (personAge >= 0 && personAge <= 11) {
//   alert("Ви дитина!");
// } else {
//   alert("Ви ввели некоректний вік!");
// }

// // Запитай у користувача число від 0 до 9 і виведи йому спецсимвол,
// // який розташований на цій клавіші (1 !, 2 @, 3 # і т. д).

// let number = Number(prompt("Введіть число"));

// switch (number) {
//   case 0:
//     alert(")");
//     break;
//   case 1:
//     alert("!");
//     break;
//   case 2:
//     alert("@");
//     break;
//   case 3:
//     alert("#");
//     break;
//   case 4:
//     alert("$");
//     break;
//   case 5:
//     alert("%");
//     break;
//   case 6:
//     alert("^");
//     break;
//   case 7:
//     alert("&");
//     break;
//   case 8:
//     alert("*");
//     break;
//   case 9:
//     alert("(");
//     break;
//   default:
//     alert("Ви ввели некоректне число!");
// }

// // Підрахуй суму всіх чисел в заданому користувачем діапазоні.

// let rangeStart = Number(prompt("Напишіть початок діапазону."));
// let rangeEnd = Number(prompt("Напишіть кінець діапазону."));

// if (rangeStart < rangeEnd) {
//   let sum = 0;
//   for (let i = rangeStart; i <= rangeEnd; i++) {
//     sum += i;
//   }
//   alert(sum);
// } else {
//   alert("Ви ввели некоректний діапазон!");
// }

// // Запитай у користувача 2 числа і знайди найбільший спільний дільник.

// let firstNumberForGCD = Number(
//   prompt("Введіть перше число для знаходження НСД"),
// );
// let secondNumberForGCD = Number(
//   prompt("Введіть друге число для знаходження НСД"),
// );

// let smaller = Math.min(firstNumberForGCD, secondNumberForGCD);
// let gcd = 1;

// for (let i = 1; i <= smaller; i++) {
//   if (firstNumberForGCD % i === 0 && secondNumberForGCD % i === 0) {
//     gcd = i;
//   }
// }

// alert(gcd);

// // Запитай у користувача число і виведи всі дільники цього числа.

// let numberForDivisors = Number(
//   prompt("Введіть число для знаходження дільників"),
// );

// let divisors = "Дільники числа " + numberForDivisors + ":\n";

// for (let i = 1; i <= numberForDivisors; i++) {
//   if (numberForDivisors % i === 0) {
//     console.log((divisors += i + "  "));
//   }
// }

// alert(divisors);

// // Норма
// // Запитай у користувача п’ятирозрядне число і визначи, чи є воно паліндромом.

// let fiveDigitNumber = prompt("Введіть п'ятирозрядне число");

// if (fiveDigitNumber.length === 5) {
//   if (
//     fiveDigitNumber[0] === fiveDigitNumber[4] &&
//     fiveDigitNumber[1] === fiveDigitNumber[3]
//   ) {
//     alert("Це паліндром!");
//   } else {
//     alert("Це не паліндром!");
//   }
// } else {
//   alert("Ви ввели некоректне число!");
// }

// Запитай у користувача суму покупки і виведи суму до оплати зі знижкою:
// 1. від 200 до 300 - знижка буде 3%;
// 2. від 300 до 500 - 5%;
// 3. від 500 і вище - 7%.

// let purchaseAmount = Number(prompt("Введіть суму покупки"));

// if (purchaseAmount >= 200 && purchaseAmount < 300) {
//   alert("Сума до оплати зі знижкою: " + purchaseAmount * 1.03);
// } else if (purchaseAmount >= 300 && purchaseAmount < 500) {
//   alert("Сума до оплати зі знижкою: " + purchaseAmount * 1.05);
// } else if (purchaseAmount >= 500) {
//   alert("Сума до оплати зі знижкою: " + purchaseAmount * 1.07);
// } else {
//   alert("Сума до оплати без знижки: " + purchaseAmount);
// }

// Запитай у користувача 10 чисел і порахуй, скільки він ввів додатніх,
// від’ємних і нулів. При цьому також порахуй, скільки з них парних і непарних.
// Виведи статистику на екран. Враховуй, що достатньо однієї змінної (не 10) для введення чисел користувачем.

// let positive = 0;
// let negative = 0;
// let zero = 0;
// let even = 0;
// let odd = 0;

// for (let i = 0; i < 10; i++) {
//   let number = Number(prompt("Введіть числа (їх буде 10)"));
//   if (number > 0) {
//     positive++;
//   } else if (number < 0) {
//     negative++;
//   } else {
//     zero++;
//   }
//   if (number % 2 === 0) {
//     even++;
//   } else {
//     odd++;
//   }
// }

// alert(
//   "Додатні числа: " +
//     positive +
//     "\n" +
//     "Від'ємні числа: " +
//     negative +
//     "\n" +
//     "Нулі: " +
//     zero +
//     "\n" +
//     "Парні числа: " +
//     even +
//     "\n" +
//     "Непарні числа: " +
//     odd,
// );

// Зацикли відображення днів тижня таким чином: «День тижня. Хочеш побачити наступний день? » і так до тих пір, поки користувач натискає OK.

// for (i = 1; i <= 7; i++) {
//   switch (i) {
//     case 1:
//       alert(`Понеділок. Хочеш побачити наступний день?`);
//       break;
//     case 2:
//       alert(`Вівторок. Хочеш побачити наступний день?`);
//       break;
//     case 3:
//       alert(`Середа. Хочеш побачити наступний день?`);
//       break;
//     case 4:
//       alert(`Четвер. Хочеш побачити наступний день?`);
//       break;
//     case 5:
//       alert(`П'ятниця. Хочеш побачити наступний день?`);
//       break;
//     case 6:
//       alert(`Субота. Хочеш побачити наступний день?`);
//       break;
//     case 7:
//       alert(`Неділя. Хочеш побачити наступний день?`);
//       break;
//     default:
//       alert("Помилка!");
//   }
// }

// // Максимум
// Гра «Вгадай число». Запропонуй користувачеві загадати число від 0 до 100 і відгадай його наступним способом:
// кожну ітерацію циклу діли діапазон чисел навпіл, записуй результат в N і питай у користувача «Ваше число> N, <N або == N?».
// Залежно від того що вказав користувач, зменшуй діапазон. Початковий діапазон від 0 до 100, поділи навпіл і отримай 50.
// Якщо користувач вказав, що його число> 50, то зміни діапазон на від 50 до 100. І так до тих пір,
// поки користувач не вибере == N (буде корисним почитати про алгоритм: "бінарний пошук").

// let min = 0;
// let max = 100;

// while (true) {
//   let guess = Math.floor((min + max) / 2);
//   let userAnswer = prompt(`Ваше число > ${guess}, < ${guess} або == ${guess}?`);

//   if (userAnswer === ">") {
//     min = guess;
//   } else if (userAnswer === "<") {
//     max = guess;
//   } else if (userAnswer === "==") {
//     alert(`Ваше число: ${guess}!`);
//     break;
//   } else {
//     alert("Ви ввели некоректну відповідь!");
//   }
// }

// Виведи таблицю множення для всіх чисел від 2 до 9. Кожне число необхідно помножити на числа від 1 до 10.

// alert("Таблиця множення від 2 до 9 знаходиться в консолі)");
// for (let i = 1; i <= 9; i++) {
//   for (let j = 1; j <= 10; j++) {
//     console.log(`${i} * ${j} = ${i * j}`);
//   }
// }

// Запитай дату (день, місяць, рік) і виведи наступну за нею дату.
// Враховуй можливість переходу на наступний місяць, рік, а також високосний рік.

let day = Number(prompt("Введіть день"));
let month = Number(prompt("Введіть місяць"));
let year = Number(prompt("Введіть рік"));

let date = new Date(year, month - 1, day);

date.setDate(date.getDate() + 1);

alert(
  `Наступна за введеною датою: ${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`,
);
