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

var fireballCollors = ['#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'];
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

var ESC_KEY = 'Escape';
var ENTER_KEY = 'Enter';

var setupWindowWizard = document.querySelector('.setup');
setupWindowWizard.classList.add('hidden');
var elementOpenWindow = document.querySelector('.setup-open');
var elementCloseWimdow = setupWindowWizard.querySelector('.setup-close');
var setupOpenIcon = document.querySelector('.setup-open-icon');

setupOpenIcon.setAttribute('tabindex', 0);
elementCloseWimdow.setAttribute('tabindex', 0);

var onPopupEscPress = function (evt) {
  if (evt.key === ESC_KEY) {
    closePopup();
  }
};
var openPopup = function () {
  setupWindowWizard.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setupWindowWizard.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

elementOpenWindow.addEventListener('click', function () {
  openPopup();
});
elementCloseWimdow.addEventListener('click', function () {
  closePopup();
});

setupOpenIcon.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    openPopup();
  }
});

elementCloseWimdow.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    closePopup();
  }
});

var setupForm = document.querySelector('.setup-wizard-form');
setupForm.setAttribute('action', 'https://js.dump.academy/code-and-magick');

var setupWizzardCoat = document.querySelector('.setup-wizard .wizard-coat');
setupWizzardCoat.addEventListener('click', function () {
  var currentCoatColor = coatColors[Math.round(5 * Math.random())];
  setupWizzardCoat.style.fill = currentCoatColor;
  setupWindowWizard.querySelector('input[name="coat-color"]').value = currentCoatColor;
});

var setupWizzardEyes = document.querySelector('.setup-wizard .wizard-eyes');

setupWizzardEyes.addEventListener('click', function () {
  var currentEyeColor = eyesColors[Math.floor(4 * Math.random())];
  setupWizzardEyes.style.fill = currentEyeColor;
  setupWindowWizard.querySelector('input[name="eyes-color"]').value = currentEyeColor;
});

var setupWizzardFireball = document.querySelector('.setup-fireball-wrap');
setupWizzardFireball.addEventListener('click', function () {
  var currentFireballCollor = fireballCollors[Math.floor(4 * Math.random())];
  setupWizzardFireball.style.background = currentFireballCollor;
  setupWindowWizard.querySelector('input[name="fireball-color"]').value = currentFireballCollor;
});

