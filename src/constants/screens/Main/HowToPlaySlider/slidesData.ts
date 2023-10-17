import { HowToPlaySlideTypes } from "screens/Main/HowToPlaySliderTypes";

const slidesData: HowToPlaySlideTypes[] = [
  {
    num: 1,
    title: "Установите лицензионную GTA\u00A0V",
    description: "Для игры на сервере подойдет любая версия GTA V (Steam или Social Club)",
    buttonText: "1.Купить GTA V",
    imgPath: "screens/Main/HowToPlaySlider/step__01.png"
  },
  {
    num: 2,
    title: "Установите мультиплеер Rage",
    description: "Далее вам потребуется скачать и установить RAGE:MP. Он бесплатный",
    buttonText: "2.Скачать Мультиплеер",
    imgPath: "screens/Main/HowToPlaySlider/step__02.svg",
    substrings: []
  },
  {
    num: 3,
    title: "Найдите Evion",
    buttonText: "3.Подключить к серверу",
    imgPath: "screens/Main/HowToPlaySlider/step__03.svg",
    description: "Чтобы найти  наш сервер, вам надо открыть мультиплеер  и нажать на кнопку “Серверы” и найти по названию “Evion”.",
    substrings: [
      { subText: "“Серверы”", subStyles: "color: #ffbc2c" },
    ]
  }
];

export default slidesData;