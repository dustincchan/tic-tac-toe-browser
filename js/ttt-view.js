var View = function (game, $el) {
  this.$el = $el;
  this.game = game;
  this.setupBoard();
  this.bindEvents();
};

View.prototype.bindEvents = function () {
  this.$el.on('click', 'li', (function (event) {
    var $square = $(event.currentTarget);
    this.makeMove($square);
  }).bind(this));
};

View.prototype.makeMove = function ($square) {
  var $ul = $('ul');
  var pos = $square.data('pos');
  $square.addClass(this.game.currentPlayer);
  this.game.playMove(pos);
  if (this.game.isOver()) {
    $ul.addClass('game-over');
    var $p = $("<p>Game Over</p>");
    $ul.append($p);
  }
};

View.prototype.setupBoard = function () {
  var $ul = $("<ul></ul>");
  for (var row = 0; row < 3; row++) {
    for(var col = 0; col < 3; col++) {
      var $li = $("<li></li>").data('pos', [row, col]);
      $ul.append($li);
    }
  }
  this.$el.append($ul);
};

module.exports = View;
