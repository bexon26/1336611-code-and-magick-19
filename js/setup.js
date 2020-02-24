'use strict';
// setup.js
(function () {
  var setupForm = document.querySelector('.setup-wizard-form');
  setupForm.setAttribute('action', 'https://js.dump.academy/code-and-magick');

  var setupWizzardCoat = document.querySelector('.setup-wizard .wizard-coat');
  setupWizzardCoat.addEventListener('click', function () {
    var currentCoatColor = window.defaultData.coatColors[Math.round(5 * Math.random())];
    setupWizzardCoat.style.fill = currentCoatColor;
    window.dialog.setupWindowWizard.querySelector('input[name="coat-color"]').value = currentCoatColor;
  });

  var setupWizzardEyes = document.querySelector('.setup-wizard .wizard-eyes');

  setupWizzardEyes.addEventListener('click', function () {
    var currentEyeColor = window.defaultData.eyesColors[Math.floor(4 * Math.random())];
    setupWizzardEyes.style.fill = currentEyeColor;
    window.dialog.setupWindowWizard.querySelector('input[name="eyes-color"]').value = currentEyeColor;
  });

  var setupWizzardFireball = document.querySelector('.setup-fireball-wrap');
  setupWizzardFireball.addEventListener('click', function () {
    var currentFireballCollor = window.defaultData.fireballCollors[Math.floor(4 * Math.random())];
    setupWizzardFireball.style.background = currentFireballCollor;
    window.dialog.setupWindowWizard.querySelector('input[name="fireball-color"]').value = currentFireballCollor;
  });

})();
