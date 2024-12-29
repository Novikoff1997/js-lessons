let title = "js-lessons";
let screens = "Простые, Сложные, Интерактивные";
let screenPrice = 3;
let rollback = 10;
let fullPrice = 100000000;
let adaptive = true;

alert("Hello, world!");

console.log("Привет, мир!");
console.log("Тип данный переменной title: " + typeof title);
console.log("Тип данный переменной fullPrice: " + typeof fullPrice);
console.log("Тип данный переменной adaptive: " + typeof adaptive);
console.log("Дилан строки переменной screens: " + screens.length);
console.log("Дилан строки переменной screens: " + screens.length);
console.log("Стоимость верстки экранов: " + screenPrice + "₽");
console.log("Стоимость разработки сайта: " + fullPrice + "₽");

console.log(screens.toLowerCase().split(", "));
console.log(fullPrice * (rollback / 100));
