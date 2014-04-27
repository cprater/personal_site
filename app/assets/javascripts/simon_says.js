var Game = function(board){
	var gameBoard = board;
	var move = 0;
	positions = [];

	function randomInt(){
		return Math.floor(Math.random() * (8 - 0 + 1)) + 0;
	}

	function showPiece(index){
		console.log("show");
		var _this = gameBoard[index];
		var color = $(_this).attr('id');
		$(_this).css('background', color);
	}

	function hidePiece(index){
		console.log("hide");
		var _this = gameBoard[index];
		var color = $('.game-board').css('background-color');
		// setTimeout(function(){
			$(_this).css('background-color', color);
		// }, 1000);
	}

	function displayPattern(pattern){
		// var i = 0;
		for (i = 0; i < pattern.length; i++){
			setTimeout(function(){
				showPiece(pattern[i]);
				// hidePiece(pattern[i]);
			}, 1000);
		}

	}
	
	this.play = function(){
		positions.push(randomInt());
		for(i =0; i < positions.length; i++){
			displayPattern([1,2,3]);
		}
		
	};

	
};



$(function(){
	var game = new Game($(document).find('.game-board').children());

	$(document).on('click', '#play-game', function(e){
		e.preventDefault();

		game.play();
		
	});

});