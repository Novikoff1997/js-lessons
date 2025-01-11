let title;
let screens;
let screenPrice;
let adaptive;
let rollback = 10;
let fullPrice;
let allServicePrices;
let servicePercentPrice;
let service1;
let service2;

const isNumber = function (num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
};

const asking = function () {
  title = prompt("Как называется ваш проект?", "Калькулятор верстки");
  screens = prompt("Какие типы экранов нужно разработать?", "Простые, сдлжные, интерактивные");
  do {
    screenPrice = parseFloat(prompt("Сколько будет стоить данная работа?"));
  } while (isNumber(screenPrice) !== true);
  adaptive = confirm("Нужен ли адаптив на сайте?");
};

const showTypeOf = function (variable) {
  console.log(variable, typeof variable);
};

const getAllServicePrices = function () {
  let sum = 0;
  let ask;
  for (let i = 0; i < 2; i++) {
    if (i === 0 || i === 1) {
      prompt("Какой дополнительный тип услуги нужен?");
      ask = parseFloat(prompt("Сколько это будет стоить?"));
      if (isNumber(ask) === true) {
        sum += ask;
      } else {
        i--;
      }
    }
  }
  return sum;
};

function getFullPrice() {
  return screenPrice + allServicePrices;
}

const getTitle = function () {
  const trimmedTitle = title.trim();
  return trimmedTitle.charAt(0).toUpperCase() + trimmedTitle.slice(1);
};

const getServicePercentPrices = function () {
  return fullPrice - fullPrice * (rollback / 100);
};

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
asking();
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrices();
title = getTitle();

showTypeOf(title);
showTypeOf(fullPrice);
showTypeOf(adaptive);
getRollackMessage();

console.log("allServicePrices: " + allServicePrices);
console.log(title);
console.log("Итоговая стоимость за вычетом отката посреднику:" + servicePercentPrice);
console.log(screens.toLowerCase().split(", "));
console.log("Полная стоимость работы: " + fullPrice);
