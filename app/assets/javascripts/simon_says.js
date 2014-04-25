var Game = function(board){
	var gameBoard = board;
	var move = 1;

	function randomInt(){
		return Math.floor(Math.random() * (8 - 0 + 1)) + 0;
	}

	function showPiece(index){
		_this = gameBoard[index];
		color = $(_this).attr('id');
		gameBoard[index].style.background = $(_this).css('background', color);
	}

	this.play = function(){
		showPiece(randomInt());
	};

};



$(function(){
	var game = new Game($(document).find('.game-board').children());

	$(document).on('click', '#play-game', function(e){
		e.preventDefault();

		game.play();

	});
});