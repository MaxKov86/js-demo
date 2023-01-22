// console.log("Hello World!");

// let clientCounter = 18;
// const maxClients = 25;

// while (clientCounter < maxClients) {
//   console.log(clientCounter);
//   clientCounter += 1;
// }

// let password = "";

// do {
//   password = prompt("Введіть пароль довший 4-х символів", "");
// } while (password.length < 5);

// console.log("Ввели пароль: ", password);

// for (let i = 0; i <= 20; i += 5) {
//   console.log(i);
// }

// const clients = ["Mango", "Poly", "Ajax"];
// clients[0] = "Kiwi";
// clients[2] = "Orange";

// console.log(clients[0]);
// console.log(clients[1]);
// console.log(clients[2]);

// const clients = ["Mango", "Poly", "Ajax"];
// console.log(clients.length);

// const clients = ["Mango", "Ajax", "Poly"];

// for (let i = 0; i < clients.length; i += 1) {
//   console.log(clients[i]);
// }

// const clients = ["Mango", "Ajax", "Poly"];

// for (const client of clients) {
//   console.log(client);
// }

// const string = "javascript";

// for (const character of string) {
//   console.log(character);
// }

// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.includes("Poly")); // true
// console.log(clients.includes("Monkong")); // false

// const target = 3;
// let sum = 0;

// for (let i = 0; i <= target; i += 1) {
//   sum += i;
// }

// console.log(sum);

// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i += 1) { // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// for(const key in apartment) {
//  console.log(key);
//   console.log(apartment[key]);
// }

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// book.pageCount = 836;
// book.originalLanguage = "en";
// book.translations = ["ua", "ru"];

// console.log(book.pageCount);
// console.log(book.originalLanguage);
// console.log(book.translations);

// const bookShelf = {
//   books: ["The Last Kingdom", "Dream Guardian"],
//   // Це метод об'єкта
//   getBooks() {
//     console.log("Цей метод буде повертати всі книги - властивість books");
//   },
//   // Це метод об'єкта
//   addBook(bookName) {
//     console.log("Цей метод буде додавати нову книгу у властивість books");
//   },
// };

// // Виклики методів
// bookShelf.getBooks();
// bookShelf.addBook("Нова книга");

// console.log(bookShelf);

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// for (const key in book) {
//   // Ключ
//   console.log(key);
//   // Значення властивості з таким ключем
//   console.log(book[key]);
// }

// const lastWeekTemps = [14, 25, 11];
// const currentWeekTemps = [23, 17, 18];
// const allTemps = [...currentWeekTemps, ...lastWeekTemps];
// console.log(allTemps); // [14, 25, 11, 23, 17, 18]

// function multiply(...args) {
//   console.log(args);
// }

// multiply(1, 2);
// multiply(1, 2, 3);
// multiply(1, 2, 3, 4);

// function multiply(firstNumber, secondNumber, ...otherArgs) {
//   console.log(firstNumber); // Значення першого аргументу
//   console.log(secondNumber); // Значення другого аргументу
//   console.log(otherArgs); // Масив інших аргументів
// }

// multiply(1, 2);
// multiply(1, 2, 3);
// multiply(1, 2, 3, 4);

// const user = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// const {
//   name,
//   tag,
//   stats: { followers, views: userViews, likes: userLikes },
// } = user;

// console.log(name); // Jacques Gluke
// console.log(tag); // jgluke
// console.log(followers); // 5603
// console.log(userViews); // 4827
// console.log(userLikes);

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// const accessType = book.isPublic ? "публічному" : "закритому";
// const message = `Книга ${book.title} автора ${book.author} з рейтингом ${book.rating} знаходиться в ${accessType} доступі.`;

// // const products = [
// //   { name: "Radar", price: 1300, quantity: 4 },
// //   { name: "Scanner", price: 2700, quantity: 3 },
// //   { name: "Droid", price: 400, quantity: 7 },
// //   { name: "Grip", price: 1200, quantity: 9 },
// // ];

// // console.table(products)

// // function getProductPrice(productName) {

// }

// function registerGuest(name, callback) {
//   console.log(`Реєструємо гостя ${name}.`);
//   callback(name);
// }

// // Передаємо інлайн функцію greet у якості колбека
// registerGuest("Манго", function greet(name) {
//   console.log(`Ласкаво просимо ${name}.`);
// });

// // Передаємо інлайн функцію notify у якості колбека
// registerGuest("Полі", function notify(name) {
//   console.log(`Шановний(а) ${name}, ваш номер буде готовий за 30 хвилин.`);
// });

// function processCall(recipient) {
//   // Імітуємо доступність абонента випадковим числом
//   const isRecipientAvailable = Math.random() > 0.5;

//   if (!isRecipientAvailable) {
//     console.log(`Абонент ${recipient} недоступний, залиште повідомлення.`);
//     // Логіка активації автовідповідача
//   } else {
//     console.log(`З'єднуємо з ${recipient}, очікуйте...`);
//     // Логіка прийняття дзвінка
//   }
// }

// processCall("Mango");

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Change code below this line
// orderedItems.forEach(calculateTotalPrice(element){
//   totalPrice += element;
// })

//   // Change code above this line
//   return totalPrice;
// }

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;

//   orderedItems.forEach(item => {
//    return totalPrice += item;
//   });

//   return totalPrice;
// }
// console.log(calculateTotalPrice)

// let salary = 1300.78187631;
// salary = Number(salary.toFixed(2));
// console.log(salary);

// const base = 2;
// const power = 0.5;

// const result = base ** power;

// console.log(result);

// let num = prompt(`Запиши число!`);
// num = Number(num);

// let power = prompt(`Виведи у степінь`);
// power = Number(power);

// const result = num ** power;
// console.log(result);
// const max = 100;
// const min = 1;

// const result = Math.round(Math.random() * (max - min) + min);
// console.log(result);

// const message = 'В этой строке 26 символов.';
// // console.log(message.length);

// const firstName = 'Max';
// const lastName = 'Koval`ov';
// const fullName = firstName + ' ' + lastName;

// console.log(fullName);

// const quantity = 20;
// const orderMsg = `Вы заказали ${quantity} хлодильников`;

// console.log(orderMsg);

// let brand = 'SamSuNg';
// brand = brand[0] + brand.slice(1).toLowerCase();

// const comparison = 5 !== 0;

// console.log(!null);
// let message;
// if (5 > 12) {
//   message = 'Верный ответ';
// } else {
//   message = 'Лажа!';
// }

// let balance = 10000;
// const payment = 2000;

// console.log(
//   `Общая сумма заказа ${payment} кредитов.Проверяем количество доступных средств на счету`
// );

// if (payment <= balance) {
//   balance -= payment;

//     console.log('Спасибо за покупку!)');
//     console.log(`На счету осталось ${balance} кредитов`);
//   console.log(message);
// } else {
//   console.log('На счету недостаточно средств для операции!');
// }
// console.log('Операция завершина');

// let totalSpant = 2000;
// let payment = 500;
// let discount = 0;

// if (totalSpant < 100) {
//   discount = 0;
//   console.log('Не партнер, скидка 0%');
// } else if (totalSpant >= 100 && totalSpant < 1000) {
//   discount = 0.02;
//   console.log(`Бронзовый партнер, скидка 2%`);
// } else if (totalSpant >= 1000 && totalSpant < 5000) {
//   discount = 0.05;
//   console.log(`Серебряный партнер, скидка 5%`);
// } else {
//   discount = 0.1;
//   console.log('Золотой партнер 10%');
// }

// payment -= payment * discount;

// console.log(`Оформляем заказ на сумму ${payment} со скидкой ${discount * 100}%`);

// totalSpant += payment;
// console.log(`Общая сумма заказов составляет ${totalSpant}`);

// const btn = document.querySelector('button[data-add]');
// const valueInput = document.querySelector(`input[data-value]`);
// const output = document.querySelector(`p[data-output]`);

// console.log(output);

// let total = 0;

// btn.addEventListener(`click`, () => {
//   let value = Number(valueInput.value);
//   console.log(value);

//   total += value;
//   output.textContent = total;
//   console.log('Total:', total);
//   valueInput.value = '';
// });
// // valueInput.addEventListener(`input`, e => {
// //   let event = e.currentTarget.value;
// //   console.log(event);
// // });

// let cost;
// const subscription = 'ososos';

// switch (subscription) {
//   case 'free':
//     cost = 0;
//     break;

//   case 'pro':
//     cost = 100;
//     break;

//   case 'premium':
//     cost = 500;
//     break;

//   default:
//     console.log('Invalid subscription type');
// }

// console.log(cost);
// const target = 3;
// let sum = 0;

// for (let i = 0; i <= 3; i += 1) {
//   sum += i;
//   console.log(i);
// }
// const maxSalary = 10000;
// const minSalary = 5000;
// const employers = 5;
// let totalSalary = 0;

// for (let i = 1; i <= employers; i += 1) {
//   const salary = Math.round(Math.random() * (maxSalary - minSalary) + minSalary);
//   totalSalary += salary;
//   console.log(`ЗП ${i}: ${salary}`);
// }
// console.log(`Общая сумма всех ЗП: ${totalSalary}`);
// const min = 6;
// const max = 25;
// let total = 0;

// for (let i = min; i <= max; i += 1) {
//   if (i % 2 !== 0) {
//     console.log(`Не четное число:`, i);
//   } else {
//     total += i;
//     console.log(`Четное число:`, i);
//   }
// }

// console.log(`Сумма четных цыфр:${total}`);

// const array = ['Mango', 'Chelsy', 'Boby', 'Angel'];
// array.length = [];
// console.log(array);
// const clients = ['Mango', 'Ajax', 'Poly'];

// for (let i = 0; i < clients.length; i += 1) {
//   console.log(clients[i]);
// }
// const clients = ['Mango', 'Ajax', 'Poly'];

// for (const client of clients) {
//   console.log(client);
// }

// const string = 'javascript';

// for (const character of string) {
//   console.log(character);
// }
// const redFruits = ['apple', 'strawberry', 'cherry', 'cranberries'];
// const fruit = 'cherry';

// const hasFruit = redFruits.includes(fruit);

// if (hasFruit) {
//   console.log(`${fruit} is a red fruit!`);
// }

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let total = 0;
// for (const number of numbers) {
//   if (number % 2 === 0) {
//     total += number;
//     console.log(`Четное число: ${number}`);
//   }
// }
// console.log(`Сумма четных чисел:${total}`);

// const logins = ['xbjsf', 'xcsjfhfdog', 'swheydtsg', 'teiwyr', 'pqiwyete'];
// const loginToFind = 'teiwyr';

// for (const login of logins) {
//   console.log(login);
//   if (login !== loginToFind) {
//     console.log(`Пользователь ${loginToFind} не найден`);
//     continue;
//   }
//   console.log(`Пользователь ${loginToFind} найден`);
// }

// const message = logins.includes(loginToFind)
//   ? `Пользователь ${loginToFind} найден`
//   : `Пользователь ${loginToFind} не найден`;

// console.log(message);

// const string = 'JavaScript';
// const letters = string.split('');
// let invert = '';

// for (const letter of letters) {
//   invert += letter === letter.toLowerCase() ? letter.toUpperCase() : letter.toLowerCase();
// }

// console.log(invert);

// const title = 'Top 10 benefits of React framework';

// let invertTitle = title.toLowerCase().split(' ').join('-');

// console.log(invertTitle);
// const array1 = [5, 10, 15, 20];
// const array2 = [10, 20, 30];
// const allArrays = array1.concat(array2);
// let total = 0;

// for (const array of allArrays) {
//   total += array;
// }
// console.log(total);

// const cards = [
//   'Карточка-1',
//   'Карточка-2',
//   'Карточка-3',
//   'Карточка-4',
//   'Карточка-5',
// ];

// console.table(cards);

// const cardOf = 'Карточка-3';
// const index = cards.indexOf(cardOf);

// cards.splice(index, 1);

// console.table(cards);

// const cardIn = 'Карточка-6';

// cards.splice(cards.length, 0, cardIn);

// cards.splice(3, 1, 1, 2, 3);

// console.table(cards);

// function multiply() {
//   console.log('Доброго вечора, ми з України!');
// }
// multiply();
// multiply();
// multiply();

// function total(num1, num2, num3) {
//   console.log(`Сумма : ${num1 + num2 + num3}`);
// }

// total(3, 6, 8);
// total(10, 20, 50);
// function multiply(x, y, z) {

//   return x * y * z;

//   console.log(
//     'Цей лог ніколи не виконається, він стоїть після return'
//   );
// }

// let result = multiply(2, 2, 2);
// console.log(result);
// result = multiply(4, 8, 9);
// console.log(result);

// function fn() {
//   // Змінна args буде містити повноцінний масив
//   const args = Array.from(arguments);
// }
// fn(1, 2, 3);

// function fn(...args) {
//   console.log(args);
// }
// fn(1 + 2 + 3);

// const fn = function (a, b) {
//   return a + b;
// };

// console.log(fn(4, 7));

// const filterNumbers = function (array, ...args) {
//   let newArray = [];
//   for (const el of array) {
//     console.log(el);
//     if (args.includes(el)) {
//       newArray.push(el);
//     }
//   }
//   return newArray;
// };

// console.log(filterNumbers([1, 2, 3, 4, 5], 10, 15, 2, 3, 8));
// console.log(filterNumbers([15, 35, 98, 46, 13], 16, 12, 98, 47, 35, 13));

// const playlist = {
//   name: 'My super playlist',
//   rating: 10,
//   tracks: ['track-1', 'track-2', 'track-3'],
//   trackCount: 3,
// };

// console.log(playlist.tracks);

// const temps = [1, 3, 10, -1, 25];
// console.log(Math.max(...temps));

// const lastWeekTemps = [1, 2, 3];
// const currentWeekTemps = [4, 5, 6];
// const nextWeekTemps = [7, 8, 9];

// const allTemps = [...lastWeekTemps, ...currentWeekTemps, ...nextWeekTemps];

// console.log(allTemps);

// const a = { x: 2, y: 98, z: 197 };
// const b = { x: 5, z: 200 };

// const c = Object.assign({}, a, b);

// const c = {
//   ...a,
//   ...b,
//   z: 333,
//   i: 55,
// };

// console.log(c);

// function multiply(firstNumber, secondNumber, ...otherArgs) {
//   console.log(firstNumber); // Значення першого аргументу
//   console.log(secondNumber); // Значення другого аргументу
//   console.log(otherArgs); // Масив інших аргументів
// }

// multiply(1, 2);
// multiply(1, 2, 3);
// multiply(1, 2, 3, 4);

// const firstBook = {
//   title: 'The Last Kingdom',
//   coverImage: 'https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg',
// };

// const { title: firstTitle, coverImage: firstCoverImage = 'https://via.placeholder.com/640/480' } =
//   firstBook;

// console.log(firstTitle); // The Last Kingdom
// console.log(firstCoverImage); // https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg

// const cart = {
//   items: [],
//   getItems() {
//     return this.items;
//   },
//   add(product) {
//     // console.table(this.items);
//     for (const item of this.items) {
//       if (item.name === product.name) {
//         item.quantity += 1;
//         return;
//       }
//     }
//     const newProduct = {
//       ...product,
//       quantity: 1,
//     };
//     this.items.push(newProduct);
//   },
//   remove(productName) {
//     const { items } = this;
//     for (let i = 0; i < items.length; i += 1) {
//       const { name } = this.items[i];
//       if (productName === name) {
//         console.log('Yes :', productName);
//         console.log('Index:', i);
//         items.splice(i, 1);
//       }
//     }
//   },
//   clear() {
//     this.items = [];
//   },
//   countTotalPrice() {
//     const { items } = this;
//     let total = 0;
//     for (const { price, quantity } of items) {
//       total += price * quantity;
//     }
//     return total;
//   },
//   increaseQuantity(productName) {
//     const { items } = this;
//     for (const item of items) {
//       const { name } = item;
//       if (productName === name) {
//         item.quantity += 1;
//         return;
//       }
//     }
//   },
//   decreaseQuantity(productName) {
//     for (const item of this.items) {
//       if (productName === item.name) {
//         item.quantity -= 1;
//         return;
//       }
//     }
//   },
// };

// cart.add({ name: 'lime', price: 50 });
// cart.add({ name: 'cherry', price: 60 });
// cart.add({ name: 'banana', price: 70 });
// cart.add({ name: 'apple', price: 30 });
// cart.add({ name: 'apple', price: 30 });
// cart.add({ name: 'apple', price: 30 });
// cart.add({ name: 'banana', price: 70 });
// cart.add({ name: 'cherry', price: 60 });
// cart.add({ name: 'cherry', price: 60 });
// cart.add({ name: 'cherry', price: 60 });

// console.table(cart.getItems());

// cart.remove('banana');

// console.table(cart.getItems());

// cart.clear();
// console.log(cart.getItems());

// console.log('Total Price:', cart.countTotalPrice());
// cart.increaseQuantity('cherry');
// console.log(cart.getItems());
// cart.decreaseQuantity('banana');

// console.table(cart.getItems());
// console.log('Total Price:', cart.countTotalPrice());

// const getTotalOrSub = function (a, b, callback) {
//   const result = callback(a, b);
//   console.log(result);
// };

// const add = function (x, y) {
//   return x + y;
// };
// const sub = function (x, y) {
//   return x - y;
// };
// const mult = function (x, y) {
//   return x * y;
// };
// const div = function (x, y) {
//   return x / y;
// };

// getTotalOrSub(4, 7, sub);
// getTotalOrSub(4, 7, function (x, y) {
//   return x + y;
// });
// getTotalOrSub(4, 7, mult);
// getTotalOrSub(28, 7, div);

// const sendMessage = function () {
//   const message = 'Happy New Yer!!!';
//   console.log(message);
// };

// console.log('Beefor');

// setTimeout(sendMessage, 3000);

// console.log('After');

// const a = 15;
// const b = 2;
// const result = a + b;
// console.log(result);

// const obj = {
//   a: 5,
// };
// console.log('obj', obj);

// const objB = Object.create(obj);
// objB.b = 10;
// console.log('objB', objB);

// const objC = Object.create(objB);
// objC.c = 16;
// console.log('objC', objC);

// console.log(objC.a);
// console.log(objB.a);
// console.log(obj.b);
// console.log(objB.hasOwnProperty('a'));

// const baseSalary = 30000;
// const overtime = 10;
// const rate = 20;

// const getWage = (baseSalary, overtime, rate) => {
//   return baseSalary + overtime * rate;
// };

// getWage(baseSalary, overtime, rate);

// const employee = {
//   baseSalary: 30000,
//   overtime: 10,
//   rate: 20,
//   getWage() {
//     return this.baseSalary + this.overtime * this.rate;
//   },
// };

// console.log(employee.getWage());

// const User = function ({ name, age, hieght } = {}) {
//   console.log(this);
//   this.name = name;
//   this.age = age;
//   this.hieght = hieght;
// };

// const newUser = new User({
//   name: 'Max',
//   age: 36,
//   hieght: 189,
// });

// console.log(newUser);

// const players = [
//   { id: 'player-1', name: 'Zubr', timePlayed: 150, online: false },
//   { id: 'player-2', name: 'Vasya', timePlayed: 280, online: false },
//   { id: 'player-3', name: 'Max', timePlayed: 320, online: false },
//   { id: 'player-4', name: 'Dragon', timePlayed: 560, online: true },
// ];

// console.log(players);

// const playersName = players.some(player => {
//   console.log(player);
//   return player.timePlayed > 300;
// });

// console.log(playersName);

// const numbers = [1, 5, 17, 22, 45];

// const total = numbers.reduce((acc, number) => acc + number, 0);

// console.log(total);

// const salary = {
//   mango: 100,
//   ajax: 250,
//   poly: 320,
//   kiwi: 540,
// };

// const totalSalary = Object.values(salary).reduce((acc, el) => acc + el);
// console.log(totalSalary);

// const players = [
//   { id: 'player-1', name: 'Zubr', timePlayed: 150, online: false },
//   { id: 'player-2', name: 'Vasya', timePlayed: 280, online: false },
//   { id: 'player-3', name: 'Max', timePlayed: 320, online: false },
//   { id: 'player-4', name: 'Dragon', timePlayed: 560, online: true },
// ];
// 1 вариант

// const totalTimePlayed = players
//   .map(player => player.timePlayed)
//   .reduce((time, value) => time + value);

// 2 вариант

// const totalTimePlayed = players.reduce((time, player) => time + player.timePlayed, 0);

// console.log(totalTimePlayed);
// const tweets = [
//   { id: '000', likes: 5, tags: ['js', 'node.js'] },
//   { id: '001', likes: 2, tags: ['html', 'css'] },
//   { id: '002', likes: 17, tags: ['html', 'js', 'node.js'] },
//   { id: '003', likes: 8, tags: ['css', 'react'] },
//   { id: '004', likes: 0, tags: ['js', 'node.js', 'react'] },
// ];

// const allTags = tweets.reduce((tags, tweet) => [...tags, ...tweet.tags], []);

// console.log(allTags);

// const tagsStats = allTags.reduce((acc, tag) => {
//   if (acc[tag]) {
//     acc[tag] += 1;
//     return acc;
//   }
//   acc[tag] = 1;

//   return acc;
// }, {});

// const tagsStats = allTags.reduce((acc, tag) => {
//   if (acc[tag]) {
//     return { ...acc, [tag]: acc[tag] += 1 };
//   }

//   return { ...acc, [tag]: 1 };
// }, {});

// const tagsStats = allTags.reduce((acc, tag) => {
//   return {
//     ...acc,
//     [tag]: acc[tag] ? (acc[tag] += 1) : 1,
//   };
// }, {});

// console.log(tagsStats);

// function fn1(fn2) {
//   console.log(1);
//   fn2(3, 5);
// }

// fn1((a, b) => {
//   console.log(a * b);
// });

// const title = document.querySelector('.title');

// console.dir(listItem);

// title.textContent = 'Big Name';
// title.style.color = 'yellow';
// console.dir(title);

// body.document.style.backgroundColor = 'black';

// const buttonEl = document.querySelector('button');

// buttonEl.addEventListener('click', () => {
//   return (imgEl.src = 'https://cdn.pixabay.com/photo/2013/07/18/20/26/sea-164989_960_720.jpg');
// });

// const titleEl = document.createElement('h1');
// titleEl.classList.add('page-title');
// titleEl.textContent = 'Hello World! :)';

// const imgEl = document.createElement('img');
// imgEl.src = 'https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_960_720.jpg';
// imgEl.alt = 'Hugg-photo';
// imgEl.width = 320;

// const divEl = document.querySelector('.world');

// divEl.append(titleEl, imgEl);
// console.log(divEl);

// const colorPickerOptions = [
//   { label: 'green', color: 'green' },
//   { label: 'blue', color: 'blue' },
//   { label: 'red', color: 'red' },
//   { label: 'grey', color: 'grey' },
// ];

// const elements = colorPickerOptions.map(({ label, color }) => {
//   const buttonEl = document.createElement('button');
//   buttonEl.type = 'button';
//   buttonEl.textContent = label;
//   buttonEl.style.backgroundColor = color;
//   buttonEl.classList.add('color-picker__options');

//   return buttonEl;
// });

// console.log(elements);

// const colorpickerContainer = document.querySelector('.color-picker__container');
// colorpickerContainer.append(...elements);

// const stringEl = document.querySelector('.string');

// window.addEventListener('keypress', e => {
//   stringEl.textContent += e.key;
// });

const productList = [
  {
    id: 1,
    text: 'Milk',
  },
  {
    id: 2,
    text: 'Water',
  },
  {
    id: 3,
    text: 'Appel',
  },
  {
    id: 4,
    text: 'Banana',
  },
  {
    id: 5,
    text: 'Chocolate',
  },
];
createLi = (id, text) => `<li id="${id}">${text}</li>`;
function render(products) {
  return products.map(({ id, text }) => `<li id="${id}">${text}</li>`).join('');
}

const listProducts = document.querySelector('.products');

listProducts.insertAdjacentHTML('beforeend', render(productList));

const form = document.querySelector('.form');
const inputEl = document.querySelector('.input');

form.addEventListener('submit', onButtonClick);

function onButtonClick(e) {
  e.preventDefault;
  const li = `<li id="${inputEl.value}">${inputEl.value}</li>`;
  listProducts.insertAdjacentHTML('beforeend', li);
  inputEl.value = '';
}
