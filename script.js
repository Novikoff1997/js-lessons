const appData = {
  title: "",
  screens: "",
  screenPrice: 0,
  adaptive: true,
  rollback: 10,
  fullPrice: 0,
  allServicePrices: 0,
  servicePercentPrice: 0,
  service1: "",
  service2: "",
  isNumber: function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
  },
  asking: function () {
    appData.title = prompt("Как называется ваш проект?", "Калькулятор верстки");
    appData.screens = prompt(
      "Какие типы экранов нужно разработать?",
      "Простые, сдлжные, интерактивные"
    );
    do {
      appData.screenPrice = parseFloat(prompt("Сколько будет стоить данная работа?"));
    } while (appData.isNumber(appData.screenPrice) !== true);
    appData.adaptive = confirm("Нужен ли адаптив на сайте?");
  },
  getAllServicePrices: function () {
    let sum = 0;
    let ask;
    for (let i = 0; i < 2; i++) {
      if (i === 0 || i === 1) {
        prompt("Какой дополнительный тип услуги нужен?");
        ask = parseFloat(prompt("Сколько это будет стоить?"));
        if (appData.isNumber(ask) === true) {
          sum += ask;
        } else {
          i--;
        }
      }
    }
    return sum;
  },
  getFullPrice: function () {
    return appData.screenPrice + appData.allServicePrices;
  },
  getTitle: function () {
    const trimmedTitle = appData.title.trim();
    return trimmedTitle.charAt(0).toUpperCase() + trimmedTitle.slice(1);
  },
  getServicePercentPrices: function () {
    return appData.fullPrice - appData.fullPrice * (appData.rollback / 100);
  },
  getRollackMessage: function (price) {
    if (price > 30000) {
      price = price - (price / 100) * 10;
      return "Вам предоставлена скидка в 10%. Итоговая сумма: " + price;
    } else if (price > 15000 && price < 30000) {
      price = price - (price / 100) * 5;
      return "Вам доступна скидка в 5%. Итоговая самму: " + price;
    } else if (price < 15000 && price > 0) {
      return "Скидка не предусмотрена";
    } else if (price < 0) {
      return "Что то пошло не так!";
    }
  },
  start: function () {
    appData.asking();
    appData.allServicePrices = appData.getAllServicePrices();
    appData.fullPrice = appData.getFullPrice();
    appData.servicePercentPrice = appData.getServicePercentPrices();
    appData.title = appData.getTitle();
    console.log(appData.getRollackMessage(appData.fullPrice));
    appData.logger(0);
  },
  // Тут если я правильно понял задание:
  // "Вывести в консоль в методе logger ВСЕ свой-ва и методы объекта через цикл for in"
  // Ну выходит что вот так:
  logger: function () {
    for (let key in appData) {
      console.log(appData[key]);
    }
  },
};

appData.start();
