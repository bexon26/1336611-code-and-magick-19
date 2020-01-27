'use strict';
var quantityWizard = 4; // Количство магов
var wizards = [];

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
var block = document.querySelector('.setup');
block.classList.remove('hidden');


// Функция создания рандомного имени мага
var renderName = function () {
  var firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  var lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  var nameWizard = firstName + ' ' + lastName;
  return nameWizard;
};

// Функция создания рандомного мага
var randomrWizard = function () {
  var wizard = {
    name: renderName(),
    coatColor: coatColors[Math.floor(Math.random() * coatColors.length)],
    eyesColor: eyesColors[Math.floor(Math.random() * eyesColors.length)],
  };
  return wizard;
};

// Создание массива магов
for (var i = 0; i < quantityWizard; i++) {
  wizards.push(randomrWizard());
}

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

// Фунция отрисовки одного мага
var renderWizard = function (wizard) {

  var wizardElement = similarWizardTemplate.cloneNode(true);
  var nameWizard = wizardElement.querySelector('.setup-similar-label');

  var elementWizard = wizard;
  nameWizard.textContent = elementWizard.name;

  var coatWizard = wizardElement.querySelector('.wizard-coat');
  coatWizard.style.fill = elementWizard.coatColor;

  var eyesWizard = wizardElement.querySelector('.wizard-eyes');
  eyesWizard.style.fill = elementWizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var n = 0; n < wizards.length; n++) {
  fragment.appendChild(renderWizard(wizards[n]));
}
similarListElement.appendChild(fragment);
document.querySelector('.setup-similar').classList.remove('hidden');
