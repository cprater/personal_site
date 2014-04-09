$(function(){

	//Dogeify the content of the page, yo
	$('#dogeify').on('click', function(e){
		e.preventDefault();

		$.ajax({
			type: "GET",
			url: "/dogeify",
			success: function(serverResponse){
				$('.replacement').replaceWith(serverResponse.html + '<p>The Dogify <a href="https://github.com/mhuggins/dogeify">Gem</a></p><a href="/">HOOMN NAO PLZ K THNKS</a>');
				console.log(serverResponse.html);
			}

		});
	});
});