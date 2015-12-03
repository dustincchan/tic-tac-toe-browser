var View = require('./ttt-view');
var Game = require('../../ttt-core-solution/game');

$(function () {
  var game = new Game;
  var $el = $(".ttt");
  var view = new View(game, $el);
  
});
