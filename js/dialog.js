// dialog.js
'use strict';
(function () {
  var setupWindowWizard = document.querySelector('.setup');
  setupWindowWizard.classList.add('hidden');
  var elementOpenWindow = document.querySelector('.setup-open');
  var elementCloseWimdow = setupWindowWizard.querySelector('.setup-close');
  var setupOpenIcon = document.querySelector('.setup-open-icon');

  setupOpenIcon.setAttribute('tabindex', 0);
  elementCloseWimdow.setAttribute('tabindex', 0);

  var onPopupEscPress = function (evt) {
    if (evt.key === window.util.ESC_KEY) {
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
    window.dialog.openPopup();
  });
  elementCloseWimdow.addEventListener('click', function () {
    window.dialog.closePopup();
  });

  setupOpenIcon.addEventListener('keydown', function (evt) {
    if (evt.key === window.util.ENTER_KEY) {
      window.dialog.openPopup();
    }
  });

  elementCloseWimdow.addEventListener('keydown', function (evt) {
    if (evt.key === window.util.ENTER_KEY) {
      window.dialog.closePopup();
    }
  });

  // Перемещение окна
  var dialogHandler = setupWindowWizard.querySelector('.upload');
  dialogHandler.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };
    var dragged = false;
    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();
      dragged = true;
      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };


      setupWindowWizard.style.top = (setupWindowWizard.offsetTop - shift.y) + 'px';
      setupWindowWizard.style.left = (setupWindowWizard.offsetLeft - shift.x) + 'px';
    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      if (dragged) {
        var onClickPreventDefault = function (clickEvt) {
          clickEvt.preventDefault();
          dialogHandler.removeEventListener('click', onClickPreventDefault);
        };
        dialogHandler.addEventListener('click', onClickPreventDefault);
      }
    };
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });


  window.dialog = {
    openPopup: openPopup,
    closePopup: closePopup,
    elementOpenWindow: elementOpenWindow,
    setupWindowWizard: setupWindowWizard
  };

})();
