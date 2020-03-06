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
  var wizards = [];


  var render = function (elements) {
    var fragment = document.createDocumentFragment();

    for (var n = 0; n < elements.length; n++) {
      if (n < 4) {
        fragment.appendChild(renderWizard(elements[n]));
      }

    }
    similarListElement.appendChild(fragment);
    document.querySelector('.setup-similar').classList.remove('hidden');

  };

  window.load(function (data) {
    wizards = data;
    render(wizards);
  }, errorHandler);

  var getRank = function (wizard) {
    var rank = 0;

    if (wizard.colorCoat === coatColor) {
      rank += 2;
    }
    if (wizard.colorEyes === eyesColor) {
      rank += 1;
    }

    return rank;
  }

  var namesComparator = function (left, right) {
    if (left > right) {
      return 1;
    } else if (left < right) {
      return -1;
    } else {
      return 0;
    }
  }

  var coatColor = 'rgb(101, 137, 164)';
  var eyesColor = 'black';

  var updateWizards = function (property, value) {
    var similarListItem = document.querySelectorAll('.setup-similar-item');
    for (var n = 0; n < similarListItem.length; n++) {
      similarListElement.removeChild(similarListItem[n]);
    }

    var sameCoatWizards = wizards.filter(function (it) {
      if (value === 'coat') {
        coatColor = property;
      }
      return it.colorCoat === coatColor;
    });

    var sameEyesWizards = wizards.filter(function (it) {
      if (value === 'eyes') {
        eyesColor = property;
      }
      return it.colorEyes === eyesColor;
    });

    var sameCoatAndEyesWizards = wizards.filter(function (it) {
      return it.colorCoat === coatColor &&
        it.colorEyes === eyesColor;
    });

    var filteredWizards = sameCoatAndEyesWizards;
    filteredWizards = filteredWizards.concat(sameCoatWizards);
    filteredWizards = filteredWizards.concat(sameEyesWizards);
    filteredWizards = filteredWizards.concat(wizards);

    var uniqueWizards =
      filteredWizards.filter(function (it, i) {
        return filteredWizards.indexOf(it) === i;
      });

    render(uniqueWizards.sort(function (left, right) {
      var rankDiff = getRank(right) - getRank(left);
      if (rankDiff === 0) {
        rankDiff = namesComparator(left.name, right.name);
      }
      return rankDiff;
    }));
  };


  window.paint = {
    updateWizards: updateWizards,
    wizards: wizards
  };
})();
