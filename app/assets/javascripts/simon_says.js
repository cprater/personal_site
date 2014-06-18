var Game = function(board){
	var gameBoard = board;
	positions = [];

	function randomInt(){
		return Math.floor(Math.random() * (8 - 0 + 1)) + 0;
	}

	function flashPiece(index){
		showPiece(index);
		setTimeout(function(){
			hidePiece(index);
		}, 200);
	}

	function flashBoard(){
		for(i=0; i < gameBoard.length; i++){
			flashPiece(i);
		}
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

	function displayPattern(){
		showPiece(positions[move]);
		var i = move;
		hidePattern(i);
		checkToStopLoop();
	}

	function checkToStopLoop(){
		if (move >= positions.length)
			clearInterval(triggerPattern);
		else
			move ++;
	}

	function checkGuesses(){
		for(i=0; i < guesses.length; i++){
			if (guesses[i] != positions[i]){
				flashBoard();
				resetGame();
				gameSteps();
			}
			if (i == positions.length -1){
				gameSteps();
			}
		}
	}
	
	function trackGuesses(){
		$('.tile').unbind().on('click', function(){
			flashPiece($(this).index());
			guesses.push($(this).index());
			checkGuesses();
		});
	}

	function resetGame(){
		positions = [];
	}

	function gameSteps(){
		displayScore();
		move = 0;
		guesses = [];
		positions.push(randomInt());
		triggerPattern = setInterval(displayPattern, 1000);
		trackGuesses();
	}

	function displayScore(){
		$('#score').html(positions.length);
	}

	this.play = function(){
		resetGame();
		gameSteps();
	};

	
};



$(function(){
	var game = new Game($(document).find('.game-board').children());

	$(document).on('click', '#play-game', function(e){
		e.preventDefault();

		$(this).text('Reset');
		game.play();
	});

});