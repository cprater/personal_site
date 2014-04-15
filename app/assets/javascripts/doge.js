$(function(){

	$(document).on('mouseenter', '#dogeify', function(){
		$('#doge-hint').removeClass('hidden');
	})
	$(document).on('mouseleave', '#dogeify', function(){
		$('#doge-hint').addClass('hidden');
	})

	//Dogeify the content of the page, yo
	$('#dogeify').on('click', function(e){
		e.preventDefault();

		$.ajax({
			type: "GET",
			url: "/dogeify",
			success: function(serverResponse){
				$('.replacement').replaceWith(serverResponse.html + '<p>The Dogeify <a href="https://github.com/mhuggins/dogeify">Gem</a></p><a href="/">HOOMAN NAO PLZ K THNKS</a>');
				console.log(serverResponse.html);
			}

		});
	});
});