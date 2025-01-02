let title = prompt("Как называется ваш проект?");
let screens = prompt("Какие типы экранов нужно разработать?");
let screenPrice = +prompt("Сколько будет стоить данная работа?");
let rollback = 10;
let fullPrice = 100000000;
let adaptive = !!prompt("Нужен ли адаптив на сайте?");

let service1 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice1 = parseInt(+prompt("Сколько это будет стоить?"));
let service2 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice2 = parseInt(+prompt("Сколько это будет стоить?"));

fullPrice = screenPrice + servicePrice1 + servicePrice2;
let servicePercentPrice = Math.ceil(fullPrice - rollback);
console.log("Итоговая стоимость работы: " + fullPrice + "₽");
console.log("Итоговая стоимость работы за вычетом отката посреднику: " + servicePercentPrice + "₽");

if (fullPrice > 30000) {
  fullPrice = fullPrice - (fullPrice / 100) * 10;
  console.log("Вам предоставлена скидка в 10%. Итоговая сумма: " + fullPrice);
} else if (fullPrice > 15000 && fullPrice < 30000) {
  fullPrice = fullPrice - (fullPrice / 100) * 5;
  console.log("Вам доступна скидка в 5%. Итоговая самму: " + fullPrice);
} else if (fullPrice < 15000 && fullPrice > 0) {
  console.log("Скидка не предусмотрена");
} else if (fullPrice < 0) {
  console.log("Что то пошло не так!");
}
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
