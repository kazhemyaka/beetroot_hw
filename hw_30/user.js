class User {
  #password;
  #isLogged;

  constructor(name, role) {
    this.name = name;
    while (role !== "admin" && role !== "user") {
      alert("Роль введено невірно!");
      role = prompt("Введіть роль: admin або user");
    }
    this.role = role;
    this.#password = "";
    this.#isLogged = false;
  }

  getName() {
    return this.name;
  }

  getRole() {
    return this.role;
  }

  login(password) {
    if (this.#password === password) {
      this.#isLogged = true;
      console.log(`${this.name} увійшов`);
    } else {
      console.log("Пароль введено невірно!");
    }
  }

  logout() {
    this.#isLogged = false;
    console.log(`${this.name} вийшов`);
  }

  changeName(newName) {
    this.name = newName;
    console.log("Імʼя змінено успішно");
  }

  changePassword(newPassword) {
    this.#password = newPassword;
    console.log("Пароль змінено успішно");
  }
}

let user1 = new User("Vasya", "user");

console.log(user1.getName());
console.log(user1.getRole());
user1.changePassword("123456");
user1.login("123456");
console.log(user1);
user1.logout();
user1.changeName("Petya");
console.log(user1.getName());
console.log(user1);

class Admin extends User {
  constructor(name) {
    super(name, "admin");
    this.users = [];
  }

  addUser(user) {
    if (user instanceof User) {
      this.users.push(user);
      console.log("Користувача додано");
    } else {
      console.log("Ви ввели не коректного користувача");
    }
  }

  removeUser(userName) {
    const user = this.users.find((user) => user.getName() === userName);
    if (user) {
      this.users = this.users.filter((user) => user.getName() !== userName);
      console.log("Користувача видалено");
    } else {
      console.log("Користувача не знайдено");
    }
  }

  changeUserRole(userName, newRole) {
    const user = this.users.find((user) => user.getName() === userName);
    if (user) {
      while (newRole !== "admin" && newRole !== "user") {
        alert("Роль введено невірно!");
        newRole = prompt("Введіть роль: admin або user");
      }
      user.role = newRole;
      console.log("Роль змінено успішно");
    } else {
      console.log("Користувача не знайдено");
    }
  }

  getAllUsers() {
    return this.users;
  }

  removeAllUsers() {
    this.users = [];
    console.log("Всіх користувачів видалено");
  }
}

let admin1 = new Admin("Admin");

let user2 = new User("Kolya", "user");
let user3 = new User("Igor", "user");
let user4 = new User("Vova", "user");

admin1.addUser(user2);
admin1.addUser(user3);
admin1.addUser(user4);

console.log(admin1.getAllUsers());
admin1.removeUser("Kolya");
console.log(admin1.getAllUsers());
admin1.changeUserRole("Vova", "admin");
console.log(admin1.getAllUsers());
admin1.removeAllUsers();
console.log(admin1.getAllUsers());
