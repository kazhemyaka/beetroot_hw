class Circle {
  constructor(radius) {
    this._radius = radius;
  }

  get radius() {
    return `Радіус кола: ${this._radius}`;
  }

  set radius(radius) {
    if (radius <= 0) {
      throw new Error("Radius must be positive");
    }
    this._radius = radius;
  }

  get diameter() {
    return `Діаметр кола: ${this._radius * 2}`;
  }

  area() {
    return `Площа кола: ${Math.PI * this._radius ** 2}`;
  }

  length() {
    return `Довжина кола: ${2 * Math.PI * this._radius}`;
  }
}

const circle = new Circle(5);

console.log(circle.radius);
console.log(circle.diameter);

circle.radius = 20;

console.log(circle.radius);
console.log(circle.diameter);

console.log(circle.area());
console.log(circle.length());

console.log("----------------------");
