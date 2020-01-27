'use strict';

var columnWidth = 40;
var columnBetween = 50;

window.renderStatistics = function (ctx, players, times) {

  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);

  ctx.fillStyle = '#fff';
  ctx.fillRect(100, 10, 420, 270);

  ctx.fillStyle = '#000';
  ctx.font = 'PT Mono 16px';
  ctx.fillText('Ура вы победили!', 110, 50);
  ctx.fillText('Список результатов: ', 110, 70);

  var maxTime = 0;

  for (var j = 0; j < times.length; j++) {
    if (maxTime < times[j]) {
      maxTime = Math.floor(times[j]);
    }
  }

  var textRender = function (i) {
    ctx.fillRect(100 + columnBetween + i * (columnWidth + columnBetween), 250, columnWidth, -coefficientHeigth * times[i]);
    ctx.fillStyle = '#000';
    ctx.fillText(players[i], 100 + columnBetween + i * (columnWidth + columnBetween), 270);
    ctx.fillText(Math.floor(times[i]), 100 + columnBetween + i * (columnWidth + columnBetween), 90 + (150 - coefficientHeigth * times[i]));
  };

  var coefficientHeigth = 150 / maxTime;
  var paintColumn = function () {
    for (var i = 0; i < players.length; i++) {
      if (players[i] === 'Вы') {
        ctx.fillStyle = 'rgba(255, 0, 0, 1)';
        textRender(i);
      } else {
        ctx.fillStyle = 'hsl(240,' + Math.floor(100 * Math.random()) + '%' + ',50%)';
        textRender(i);
      }
    }
  };
  paintColumn();
};
