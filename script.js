// let todoList = [];

// function addItem(item) {
//   if (typeof item === "string") {
//     todoList.push({ task: item, completed: false });
//   } else {
//     console.log("invalid input.");
//     return;
//   }
// }
// // addItem(3084467);
// addItem("book");
// addItem("bag");
// addItem("bot");
// // console.log(todoList);

// function removeItem(item) {
//   const index = todoList.indexOf(item);
//   if (index >= 0) {
//     todoList.splice(index, 1);
//     console.log(`item has been removed from the list.`);
//   } else {
//     console.log("invalid input");
//     return;
//   }
// }
// // removeItem(todoList[0]);
// // removeItem(todoList[3]);
// // console.log(todoList);

// function updateTodo(item) {
//   const index = todoList.indexOf(item);
//   if (index >= 0) {
//     todoList[index].completed = true;
//   } else {
//     console.log(`Item  not found.`);
//     return;
//   }
// }
// // console.log(todoList);
// // updateTodo(todoList[0]);
// // updateTodo(todoList[3]);

// const car = {
//   car1: {
//     name: "benz",
//     model: "c-class",
//     topSpeed: 350,
//     price: 300,
//     isAGoodCar: true,
//     engineType: "v12",
//     year: 2021,
//     color: "red",
//     seats: "two",
//     wheels: "four",
//     startEngine: function () {
//       console.log(`${this.name} ${this.model} engine has been started.`);
//     },
//     stopEngine: function () {
//       console.log(`${this.name} ${this.model} engine has been stopped.`);
//     },
//     accelerate: function () {
//       console.log(`${this.name} ${this.model} is accelerating.`);
//     },
//   },
//   car2: {
//     name: "lamborghini",
//     model: "aventador-svj",
//     topSpeed: 350,
//     price: 300,
//     isAGoodCar: true,
//     engineType: "v12",
//     year: 2021,
//     color: "red",
//     seats: "two",
//     wheels: "four",
//     startEngine: function () {
//       console.log(`${this.name} ${this.model} engine has been started.`);
//     },
//     stopEngine: function () {
//       console.log(`${this.name} ${this.model} engine has been stopped.`);
//     },
//     accelerate: function () {
//       console.log(`${this.name} ${this.model} is accelerating.`);
//     },
//   },
//   car3: {
//     name: "audi",
//     model: "R-8",
//     topSpeed: 350,
//     price: 300,
//     isAGoodCar: true,
//     engineType: "v12",
//     year: 2021,
//     color: "red",
//     seats: "two",
//     wheels: "four",
//     startEngine: function () {
//       console.log(`${this.name} ${this.model} engine has been started.`);
//     },
//     stopEngine: function () {
//       console.log(`${this.name} ${this.model} engine has been stopped.`);
//     },
//     accelerate: function () {
//       console.log(`${this.name} ${this.model} is accelerating.`);
//     },
//   },
//   car4: {
//     name: "toyota",
//     model: "supra",
//     topSpeed: 350,
//     price: 300,
//     isAGoodCar: true,
//     engineType: "v12",
//     year: 2021,
//     color: "red",
//     seats: "two",
//     wheels: "four",
//     startEngine: function () {
//       console.log(`${this.name} ${this.model} engine has been started.`);
//     },
//     stopEngine: function () {
//       console.log(`${this.name} ${this.model} engine has been stopped.`);
//     },
//     accelerate: function () {
//       console.log(`${this.name} ${this.model} is accelerating.`);
//     },
//   },
//   car5: {
//     name: "ferarri",
//     model: "sf-90",
//     topSpeed: 350,
//     price: 300,
//     isAGoodCar: true,
//     engineType: "v12",
//     year: 2021,
//     color: "red",
//     seats: "two",
//     wheels: "four",
//     startEngine: function () {
//       console.log(`${this.name} ${this.model} engine has been started.`);
//     },
//     stopEngine: function () {
//       console.log(`${this.name} ${this.model} engine has been stopped.`);
//     },
//     accelerate: function () {
//       console.log(`${this.name} ${this.model} is accelerating.`);
//     },
//   },
//   car6: {
//     name: "chevrolet",
//     model: "corvette",
//     topSpeed: 350,
//     price: 300,
//     isAGoodCar: true,
//     engineType: "v12",
//     year: 2021,
//     color: "red",
//     seats: "two",
//     wheels: "four",
//     startEngine: function () {
//       console.log(`${this.name} ${this.model} engine has been started.`);
//     },
//     stopEngine: function () {
//       console.log(`${this.name} ${this.model} engine has been stopped.`);
//     },
//     accelerate: function () {
//       console.log(`${this.name} ${this.model} is accelerating.`);
//     },
//   },
//   car7: {
//     name: "ford",
//     model: "mustang",
//     topSpeed: 350,
//     price: 300,
//     isAGoodCar: true,
//     engineType: "v12",
//     year: 2021,
//     color: "red",
//     seats: "two",
//     wheels: "four",
//     startEngine: function () {
//       console.log(`${this.name} ${this.model} engine has been started.`);
//     },
//     stopEngine: function () {
//       console.log(`${this.name} ${this.model} engine has been stopped.`);
//     },
//     accelerate: function () {
//       console.log(`${this.name} ${this.model} is accelerating.`);
//     },
//   },
//   car8: {
//     name: "bmw",
//     model: "x-6",
//     topSpeed: 350,
//     price: 300,
//     isAGoodCar: true,
//     engineType: "v12",
//     year: 2021,
//     color: "red",
//     seats: "two",
//     wheels: "four",
//     startEngine: function () {
//       console.log(`${this.name} ${this.model} engine has been started.`);
//     },
//     stopEngine: function () {
//       console.log(`${this.name} ${this.model} engine has been stopped.`);
//     },
//     accelerate: function () {
//       console.log(`${this.name} ${this.model} is accelerating.`);
//     },
//   },
//   car9: {
//     name: "tesla",
//     model: "cybertruck",
//     topSpeed: 350,
//     price: 300,
//     isAGoodCar: true,
//     engineType: "v12",
//     year: 2021,
//     color: "red",
//     seats: "two",
//     wheels: "four",
//     startEngine: function () {
//       console.log(`${this.name} ${this.model} engine has been started.`);
//     },
//     stopEngine: function () {
//       console.log(`${this.name} ${this.model} engine has been stopped.`);
//     },
//     accelerate: function () {
//       console.log(`${this.name} ${this.model} is accelerating.`);
//     },
//   },
//   car10: {
//     name: "bugatti",
//     model: "veryon",
//     topSpeed: 350,
//     price: 300,
//     isAGoodCar: true,
//     engineType: "v12",
//     year: 2021,
//     color: "red",
//     seats: "two",
//     wheels: "four",
//     startEngine: function () {
//       console.log(`${this.name} ${this.model} engine has been started.`);
//     },
//     stopEngine: function () {
//       console.log(`${this.name} ${this.model} engine has been stopped.`);
//     },
//     accelerate: function () {
//       console.log(`${this.name} ${this.model} is accelerating.`);
//     },
//   },
//   car11: {
//     name: "lexus",
//     model: "RX-350",
//     topSpeed: 350,
//     price: 300,
//     isAGoodCar: true,
//     engineType: "v12",
//     year: 2021,
//     color: "red",
//     seats: "two",
//     wheels: "four",
//     startEngine: function () {
//       console.log(`${this.name} ${this.model} engine has been started.`);
//     },
//     stopEngine: function () {
//       console.log(`${this.name} ${this.model} engine has been stopped.`);
//     },
//     accelerate: function () {
//       console.log(`${this.name} ${this.model} is accelerating.`);
//     },
//   },
//   car12: {
//     name: "nissan",
//     model: "GTR",
//     topSpeed: 350,
//     price: 300,
//     isAGoodCar: true,
//     engineType: "v12",
//     year: 2021,
//     color: "red",
//     seats: "two",
//     wheels: "four",
//     startEngine: function () {
//       console.log(`${this.name} ${this.model} engine has been started.`);
//     },
//     stopEngine: function () {
//       console.log(`${this.name} ${this.model} engine has been stopped.`);
//     },
//     accelerate: function () {
//       console.log(`${this.name} ${this.model} is accelerating.`);
//     },
//   },
//   car13: {
//     name: "dodge",
//     model: "challenger",
//     topSpeed: 350,
//     price: 300,
//     isAGoodCar: true,
//     engineType: "v12",
//     year: 2021,
//     color: "red",
//     seats: "two",
//     wheels: "four",
//     startEngine: function () {
//       console.log(`${this.name} ${this.model} engine has been started.`);
//     },
//     stopEngine: function () {
//       console.log(`${this.name} ${this.model} engine has been stopped.`);
//     },
//     accelerate: function () {
//       console.log(`${this.name} ${this.model} is accelerating.`);
//     },
//   },
//   car14: {
//     name: "hyundai",
//     model: "sonata",
//     topSpeed: 350,
//     price: 300,
//     isAGoodCar: true,
//     engineType: "v12",
//     year: 2021,
//     color: "red",
//     seats: "two",
//     wheels: "four",
//     startEngine: function () {
//       console.log(`${this.name} ${this.model} engine has been started.`);
//     },
//     stopEngine: function () {
//       console.log(`${this.name} ${this.model} engine has been stopped.`);
//     },
//     accelerate: function () {
//       console.log(`${this.name} ${this.model} is accelerating.`);
//     },
//   },
//   car15: {
//     name: "mazda",
//     model: "cx-5",
//     topSpeed: 350,
//     price: 300,
//     isAGoodCar: true,
//     engineType: "v12",
//     year: 2021,
//     color: "red",
//     seats: "two",
//     wheels: "four",
//     startEngine: function () {
//       console.log(`${this.name} ${this.model} engine has been started.`);
//     },
//     stopEngine: function () {
//       console.log(`${this.name} ${this.model} engine has been stopped.`);
//     },
//     accelerate: function () {
//       console.log(`${this.name} ${this.model} is accelerating.`);
//     },
//   },
// };
// console.log(car.car14.name);
// console.log(car.car1.stopEngine());
