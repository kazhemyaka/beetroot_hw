let Car = {
  manufacturer: "Citroen",
  model: "C4",
  year: 2012,
  averageSpeed: 90,
  fuelTankVolume: 60,
  averageFuelConsumption: 7.5,
  drivers: ["Джон", "Боб", "Марина", "Катерина"],
  display() {
    alert(
      `Виробник: ${this.manufacturer}\nМодель: ${this.model}\nРік випуску: ${this.year}\nСередня швидкість: ${this.averageSpeed}\nОбсяг паливного баку: ${this.fuelTankVolume}\nСередня витрата паливна на 100 км: ${this.averageFuelConsumption}\nВодії: ${this.drivers.join(", ")}`,
    );
  },
  addDriver(driver) {
    this.drivers.push(driver);
  },
  checkDriver(driver) {
    alert(
      this.drivers.includes(driver)
        ? `Так, водій(ка) ${driver} присутній(я) в списку`
        : "Ні, немає в списку",
    );
  },
  // Підрахунок необхідного часу та кількості палива для подолання переданої відстані з середньою швидкістю. Враховуй, що через кожні 4 години дороги водієві необхідно робити перерву на 1 годину.
  calculateTimeAndFuel(distance) {
    let time = distance / this.averageSpeed; // hours
    rest = Math.floor(time / 4);
    time += rest;
    console.log(rest);
    let fuelNeeded = (distance / 100) * this.averageFuelConsumption;
    alert(
      `Для подолання відстані ${distance} км автомобілю потрібно ${time.toFixed(2)} годин та ${fuelNeeded.toFixed(2)} л палива.`,
    );
  },
};

Car.display();

Car.addDriver(prompt("Введіть ім'я водія, щоб його додати:"));

Car.checkDriver(
  prompt("Введіть ім'я водія, щоб перевірити його присутність у списку:"),
);

Car.calculateTimeAndFuel(prompt("Введіть відстань, км:"));
