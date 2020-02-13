// Файл createWizards.js
'use strict';
(function () {
  var wizards = [];
  var block = document.querySelector('.setup');
  block.classList.remove('hidden');


  // Функция создания рандомного имени мага
  var renderName = function () {
    var firstName = window.defaultData.firstNames[Math.floor(Math.random() * window.defaultData.firstNames.length)];
    var lastName = window.defaultData.lastNames[Math.floor(Math.random() * window.defaultData.lastNames.length)];
    var nameWizard = firstName + ' ' + lastName;
    return nameWizard;
  };

  // Функция создания рандомного мага
  var randomrWizard = function () {
    var wizard = {
      name: renderName(),
      coatColor: window.defaultData.coatColors[Math.floor(Math.random() * window.defaultData.coatColors.length)],
      eyesColor: window.defaultData.eyesColors[Math.floor(Math.random() * window.defaultData.eyesColors.length)],
    };
    return wizard;
  };

  // Создание массива магов
  for (var i = 0; i < window.defaultData.quantityWizard; i++) {
    wizards.push(randomrWizard());
  }

  window.createWizards = {
    wizards: wizards
  };
})();
