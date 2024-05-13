// Напиши функцію, яка перевіряє, чи є передане їй число “досконалим числом”.
// Досконале число - це число, яке дорівнює сумі всіх своїх дільників.

function isPerfectNumber(n) {
  if (n <= 0) {
    return false;
  }

  let sum = 0;

  for (let i = 1; i < n; i++) {
    if (n % i === 0) {
      sum += i;
    }
  }

  return sum === n;
}

let n = Number(prompt("Введіть число для визначення, чи є воно досконалим"));

if (isPerfectNumber(n)) {
  alert(`Число ${n} є досконалим`);
} else {
  alert(`Число ${n} не є досконалим`);
}

// Напиши функцію, яка приймає мінімальне і максимальне значення для діапазону,
// і виводить тільки ті числа з діапазону, які є досконалими.
// Використовуй написану раніше функцію, щоб дізнатися, чи є це число досконалим.

function perfectNumbersInRange(min, max) {
  let result = "";
  for (let i = min; i <= max; i++) {
    if (isPerfectNumber(i)) {
      result += `${i} `;
    }
  }

  alert(`Досконалі числа в діапазоні від ${min} до ${max}: ${result}`);
}

let min = Number(prompt("Введіть мінімальне значення діапазону"));
let max = Number(prompt("Введіть максимальне значення діапазону"));

perfectNumbersInRange(min, max);
