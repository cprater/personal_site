function checkGameOver(life){
	if (life <= 0)
		alert("you lose");
}

$(function(){

	$(document).on('click', '.add', function(){
		life = $(this).closest('.alter-life-buttons').siblings('.life').html();
		life ++;
		checkGameOver(life);
		$(this).closest('.alter-life-buttons').siblings('.life').html(life);
	});

	$(document).on('click', '.minus', function(){
		life = $(this).closest('.alter-life-buttons').siblings('.life').html();
		life --;
		checkGameOver(life);
		$(this).closest('.alter-life-buttons').siblings('.life').html(life);
	});
});