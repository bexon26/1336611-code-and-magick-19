'use strict';
// Файл defaultData.js
(function () {
  var quantityWizard = 4; // Количство магов

  var firstNames = ['Иван',
    'Хуан Себастьян',
    'Мария',
    'Кристоф',
    'Виктор',
    'Юлия',
    'Люпита',
    'Вашингтон'];

  var lastNames = ['да Марья',
    'Верон',
    'Мирабелла',
    'Вальц',
    'Онопко',
    'Топольницкая',
    'Нионго',
    'Ирвинг'];

  var coatColors = ['rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'];

  var eyesColors = ['black',
    'red',
    'blue',
    'yellow',
    'green'];

  var fireballCollors = ['#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848'];

  window.defaultData = {
    firstNames: firstNames,
    lastNames: lastNames,
    coatColors: coatColors,
    eyesColors: eyesColors,
    fireballCollors: fireballCollors,
    quantityWizard: quantityWizard
  };
})();
