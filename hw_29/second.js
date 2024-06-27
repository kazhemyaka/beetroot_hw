class Marker {
  constructor(color, inkAmount) {
    this._color = color;
    this._inkAmount = Math.min(inkAmount, 100);
  }

  write(text) {
    let output = "";
    for (let char of text) {
      if (this._inkAmount <= 0) {
        console.log("Чорнило закінчилось!");
        break;
      }
      if (char !== " ") {
        if (this._inkAmount >= 0.5) {
          output += char;
          this._inkAmount -= 0.5;
        } else {
          console.log("Чорнило закінчилось!");
          break;
        }
      } else {
        output += char;
      }
    }
    console.log(`%c${output}`, `color: ${this._color}`);
    console.log(`Залишилось чорнил: ${this._inkAmount}%`);
  }
}

class RefillableMarker extends Marker {
  refill(inkAmount) {
    this._inkAmount = Math.min(this._inkAmount + inkAmount, 100);
    console.log(`Маркер заправлено. Тепер чорнил: ${this._inkAmount}%`);
  }
}

let myMarker = new Marker("blue", 50);
myMarker.write("Це тестовий рядок.");
myMarker.write("Інший тестовий рядок.");

let myRefillableMarker = new RefillableMarker("red", 22);
myRefillableMarker.write("Це тестовий рядок.");
myRefillableMarker.refill(50);
myRefillableMarker.write("Інший тестовий рядок.");
