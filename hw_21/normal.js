let Time = {
  date: new Date(),
  display() {
    alert(this.date.toLocaleTimeString());
  },
  addSeconds(seconds) {
    this.date.setSeconds(this.date.getSeconds() + seconds);
  },
  addMinutes(minutes) {
    this.date.setMinutes(this.date.getMinutes() + minutes);
  },
  addHours(hours) {
    this.date.setHours(this.date.getHours() + hours);
  },
};

Time.display();

Time.addSeconds(Number(prompt("Введіть кількість секунд, щоб додати їх:")));

Time.addMinutes(Number(prompt("Введіть кількість хвилин, щоб додати їх:")));

Time.addHours(Number(prompt("Введіть кількість годин, щоб додати їх:")));

Time.display();
