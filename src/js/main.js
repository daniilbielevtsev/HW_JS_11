const bankAccount = {
  ownerName: "User",
  accountNumber: "123456789",
  balance: 5000,

  deposit() {
    if (confirm("Бажаєте поповнити рахунок?")) {
      let amount = parseFloat(prompt("Введіть сумупоповнення:"));
      if (!isNaN(amount) && amount > 0) {
        this.balance += amount;
        console.log(
          `Рахунок поповнено на ${amount} грн. Ваш баланс: ${this.balance} грн.`
        );
      } else {
        console.log("Некоректна сума.");
      }
    }
  },

  withdraw() {
    if (confirm("Бажаєте зняти гроші?")) {
      let amount = parseFloat(prompt("Введіть суму для зняття:"));
      if (!isNaN(amount) && amount > 0 && amount <= this.balance) {
        this.balance -= amount;
        console.log(`Знято ${amount} грн. Новий баланс: ${this.balance} грн.`);
      } else {
        console.log("Некоректна сума або недостатньо коштів.");
      }
    }
  },
};

bankAccount.deposit();
bankAccount.withdraw();
//2
const weather = {
  temperature: parseFloat(prompt("Введіть температуру (°C):")),
  humidity: 50,
  windSpeed: 10,

  isBelowZero() {
    return this.temperature < 0;
  },
};

if (weather.isBelowZero()) {
  console.log("Температура нижче 0 градусів Цельсія");
} else {
  console.log("Температура вище або рівна 0 градусів Цельсія");
}
//3
const user = {
  name: "User",
  email: "User@gmail.com",
  password: "010203",

  login() {
    let inputEmail = prompt("Введіть email:");
    let inputPassword = prompt("Введіть пароль:");

    if (inputEmail === this.email && inputPassword === this.password) {
      console.log("Вхід успішний!");
    } else {
      console.log("Неправильний email або пароль.");
    }
  },
};

user.login();
//4
const movie = {
  title: "Аватар",
  director: "Джеймса Кэмерона",
  year: 2009,
  rating: 7.9,

  isHighlyRated() {
    return this.rating > 8;
  },
};

console.log(`Назва: ${movie.title}`);
console.log(`Режисер: ${movie.director}`);
console.log(`Рік: ${movie.year}`);
console.log(`Рейтинг: ${movie.rating}`);
console.log(`Фільм має високий рейтинг: ${movie.isHighlyRated()}`);
