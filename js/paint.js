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
    coatWizard.style.fill = elementWizard.coatColor;

    var eyesWizard = wizardElement.querySelector('.wizard-eyes');
    eyesWizard.style.fill = elementWizard.eyesColor;

    return wizardElement;
  };

  var fragment = document.createDocumentFragment();
  for (var n = 0; n < window.createWizards.wizards.length; n++) {
    fragment.appendChild(renderWizard(window.createWizards.wizards[n]));
  }
  similarListElement.appendChild(fragment);
  document.querySelector('.setup-similar').classList.remove('hidden');

})();
