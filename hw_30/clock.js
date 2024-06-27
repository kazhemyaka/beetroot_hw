const timezoneInput = document.querySelector(".timezone-input");
const buttonAdd = document.querySelector(".button-add-clock");
const clocks = document.querySelector(".clocks");

class WorldClock {
  constructor(timezone) {
    this.timezone = timezone;
    this.element = document.createElement("div");
    this.element.classList.add("clock");
    this.element.innerHTML = `
      <h2>${timezone}</h2>
      <div class="time"></div>
      <button class="button-clock button-date">Показати час</button>
      <button class="button-clock button-datetime">Показати дату і час</button>
      <button class="button-clock button-delete-clock"">Видалити годинник</button>`;
    this.timeElement = this.element.querySelector(".time");
  }

  getCurrentTime() {
    this.currentMode = "time";
    const options = {
      timeZone: this.timezone,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    };
    this.timeElement.textContent = new Date().toLocaleString("uk-UA", options);
  }

  getCurrentDateTime() {
    this.currentMode = "datetime";
    const options = {
      timeZone: this.timezone,
      dateStyle: "full",
      timeStyle: "long",
    };
    this.timeElement.textContent = new Date().toLocaleString("uk-UA", options);
  }

  updateDisplay() {
    if (this.currentMode === "time") {
      this.getCurrentTime();
    } else if (this.currentMode === "datetime") {
      this.getCurrentDateTime();
    }
  }

  startUpdating() {
    this.intervalId = setInterval(() => {
      this.updateDisplay();
    }, 1000);
  }

  deleteClock() {
    this.element.remove();
  }
}

buttonAdd.addEventListener("click", () => {
  fetch("timezones.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      if (data.worldTimezones.includes(timezoneInput.value)) {
        const timezone = timezoneInput.value;
        const clock = new WorldClock(timezone);
        clocks.appendChild(clock.element);
        clock.startUpdating();

        const buttonDate = clock.element.querySelector(".button-date");
        buttonDate.addEventListener("click", () => {
          clock.getCurrentTime();
        });

        const buttonDateTime = clock.element.querySelector(".button-datetime");
        buttonDateTime.addEventListener("click", () => {
          clock.getCurrentDateTime();
        });

        const buttonDeleteClock = clock.element.querySelector(
          ".button-delete-clock"
        );
        buttonDeleteClock.addEventListener("click", () => {
          clock.deleteClock();
        });
      } else {
        alert("Такого часового поясу не існує!");
      }
    });
});
