// Фунция отрисовки одного мага paint.js
'use strict';
(function () {

  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');


  var renderWizard = function (wizard) {

    var wizardElement = similarWizardTemplate.cloneNode(true);
    var nameWizard = wizardElement.querySelector('.setup-similar-label');

    var elementWizard = wizard;
    nameWizard.textContent = elementWizard.name;

    var coatWizard = wizardElement.querySelector('.wizard-coat');
    coatWizard.style.fill = elementWizard.colorCoat;

    var eyesWizard = wizardElement.querySelector('.wizard-eyes');
    eyesWizard.style.fill = elementWizard.colorEyes;

    return wizardElement;
  };

  var errorHandler = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };


  window.load(function (wizards) {
    var fragment = document.createDocumentFragment();
    for (var n = 0; n < 4; n++) {
      fragment.appendChild(renderWizard(wizards[n]));
    }
    similarListElement.appendChild(fragment);
    document.querySelector('.setup-similar').classList.remove('hidden');
  }, errorHandler);


})();
