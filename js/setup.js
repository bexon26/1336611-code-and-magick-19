'use strict';
// setup.js
// Файл debounce.js
// 'use strict';
(function () {
  var DEBOUNCE_INTERVAL = 300; // ms

  var lastTimeout;
  window.debounce = function (cb) {
    if (lastTimeout) {
      window.clearTimeout(lastTimeout);
    }
    lastTimeout = window.setTimeout(cb, DEBOUNCE_INTERVAL);
  };
})();


(function () {
  var setupForm = document.querySelector('.setup-wizard-form');
  setupForm.addEventListener('submit', function (evt) {
    window.save(new FormData(setupForm), function (response) {
      window.dialog.setupWindowWizard.classList.add('hidden');
    });
    evt.preventDefault();
  });

  setupForm.setAttribute('action', 'https://js.dump.academy/code-and-magick');
  var colorCoat;
  var lastTimeout;
  var setupWizzardCoat = document.querySelector('.setup-wizard .wizard-coat');
  setupWizzardCoat.addEventListener('click', function () {

    var currentCoatColor = window.defaultData.coatColors[Math.round(5 * Math.random())];
    colorCoat = currentCoatColor;
    setupWizzardCoat.style.fill = currentCoatColor;

    window.dialog.setupWindowWizard.querySelector('input[name="coat-color"]').value = currentCoatColor;


    if (lastTimeout) {
      window.clearTimeout(lastTimeout);
    }
    lastTimeout = window.setTimeout(function () {
      window.paint.updateWizards(colorCoat, 'coat');
    }, 300);

  });

  var setupWizzardEyes = document.querySelector('.setup-wizard .wizard-eyes');

  setupWizzardEyes.addEventListener('click', function () {
    var currentEyeColor = window.defaultData.eyesColors[Math.floor(4 * Math.random())];
    var colorEyes;
    colorEyes = currentEyeColor;
    setupWizzardEyes.style.fill = currentEyeColor;
    window.dialog.setupWindowWizard.querySelector('input[name="eyes-color"]').value = currentEyeColor;
    if (lastTimeout) {
      window.clearTimeout(lastTimeout);
    }
    lastTimeout = window.setTimeout(function () {
      window.paint.updateWizards(colorEyes, 'eyes');
    }, 300);

  });

  var setupWizzardFireball = document.querySelector('.setup-fireball-wrap');
  setupWizzardFireball.addEventListener('click', function () {
    var currentFireballCollor = window.defaultData.fireballCollors[Math.floor(4 * Math.random())];
    setupWizzardFireball.style.background = currentFireballCollor;
    window.dialog.setupWindowWizard.querySelector('input[name="fireball-color"]').value = currentFireballCollor;
  });


})();
