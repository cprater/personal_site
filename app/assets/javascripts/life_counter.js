function checkGameOver(life){
	if (life <= 0)
		alert("you lose");
}



$(function(){

	$(document).on('click', '.add', function(){
		life = $(this).siblings('.life').html();
		life ++;
		checkGameOver(life);
		$(this).siblings('.life').html(life);
	});

	$(document).on('click', '.minus', function(){
		life = $(this).siblings('.life').html();
		life --;
		checkGameOver(life);
		$(this).siblings('.life').html(life);
	});
});