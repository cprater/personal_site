var Game = function(board){
	var gameBoard = board;
	positions = [];

	function randomInt(){
		return Math.floor(Math.random() * (8 - 0 + 1)) + 0;
	}

	function showPiece(index){
		var _this = gameBoard[index];
		var color = $(_this).attr('id');
		$(_this).css('background', color);
		
	}

	function hidePiece(index){
		var _this = gameBoard[index];
		var color = $('.game-board').css('background-color');
		$(_this).css('background-color', color);
	}

	function hidePattern(index){
		setTimeout(function(){
			hidePiece(positions[index]);
		},1000);
	}

	function checkToStopLoop(){
		if (move >= positions.length)
			clearInterval(triggerPattern);
		else
			move ++;
	}

	function displayPattern(){
		showPiece(positions[move]);
		var i = move;
		hidePattern(i);
		checkToStopLoop();
	}
	
	this.play = function(){
		move = 0;
		positions.push(randomInt());
		triggerPattern = setInterval(displayPattern, 1000);
	};

	this.trackGuesses = function(){
		guesses = [];
		$(document).on('click', '.tile', function(){
			guesses.push($(this).attr('id'));
			
			console.log(guesses);
		});
	};

	
};



$(function(){
	var game = new Game($(document).find('.game-board').children());

	$(document).on('click', '#play-game', function(e){
		e.preventDefault();

		game.play();
		game.trackGuesses();
		
	});

});