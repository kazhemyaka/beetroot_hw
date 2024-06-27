class Employee {
  constructor(name, position, salary) {
    this._name = name;
    this._position = position;
    this._salary = salary;
  }

  get name() {
    return this._name;
  }

  get position() {
    return this._position;
  }

  get salary() {
    return this._salary;
  }
}

const employees = [
  new Employee("Іван Петренко", "Менеджер", 25000),
  new Employee("Олена Коваленко", "Касир", 18000),
  new Employee("Михайло Сидоренко", "Аналітик", 30000),
  new Employee("Марія Іваненко", "Кредитний спеціаліст", 22000),
  new Employee("Андрій Мельник", "Охоронець", 15000),
];

class EmpTable {
  constructor(employees) {
    this._employees = employees;
  }

  getHtml() {
    let table = "<table><tr><th>Ім'я</th><th>Посада</th><th>Зарплата</th></tr>";
    for (let employee of this._employees) {
      table += `<tr><td>${employee.name}</td><td>${employee.position}</td><td>${employee.salary}</td></tr>`;
    }
    table += "</table>";
    return table;
  }
}

const table = new EmpTable(employees);
document.write(table.getHtml());
