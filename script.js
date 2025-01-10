let title = prompt("Как называется ваш проект?");
let screens = prompt("Какие типы экранов нужно разработать?");
let screenPrice = +prompt("Сколько будет стоить данная работа?");
let adaptive = confirm("Нужен ли адаптив на сайте?");
let service1 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice1 = +prompt("Сколько это будет стоить?");
let service2 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice2 = +prompt("Сколько это будет стоить?");
let rollback = 10;
let fullPrice;
let allServicePrices;
let servicePercentPrice;

const showTypeOf = function (variable) {
  console.log(variable, typeof variable);
};
const getAllServicePrices = function () {
  return servicePrice1 + servicePrice2;
};
allServicePrices = getAllServicePrices();

function getFullPrice() {
  return screenPrice + allServicePrices;
}
fullPrice = getFullPrice();

const getTitle = function (title) {
  const trimmedTitle = title.trim();
  return trimmedTitle.charAt(0).toUpperCase() + trimmedTitle.slice(1);
};
const getServicePercentPrices = function () {
  return fullPrice - fullPrice * (rollback / 100);
};
servicePercentPrice = getServicePercentPrices;

const getRollackMessage = function () {
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
};

showTypeOf(title);
showTypeOf(fullPrice);
showTypeOf(adaptive);
getRollackMessage();

console.log(getTitle(title));
console.log("Итоговая стоимость за вычетом отката посреднику:" + getServicePercentPrices());
console.log(screens.toLowerCase().split(", "));
console.log("Полная стоимость работы: " + getFullPrice());
