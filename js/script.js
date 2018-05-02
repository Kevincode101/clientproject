// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

/* global $ */

$(document).ready(function() {
	console.log("document ready")
	$("#srch-term").keyup(function(event) {
		if (event.keyCode === 13) {
			$("#submit").click();
		}
	});

	$("#submit").click(function() {
		console.log("clicked")
		$(".gallery").empty();
		var userInput = $('#srch-term').val();
		var url = "https://omdbapi.com?apikey=90d4b10a&s=" + userInput.toLowerCase();
		$.ajax({
			url: url,
			method: "GET",
			success: function(response) {
				$(".giphyTitle").html("<h1 id='movieTitle'>" + userInput + "</h1>");
				if (response.Response == "False") {
					console.log("I work");
					$('.gallery').append(
						'<p class="warningSign">' + "No movie was found with those characters..." + '</p>'
					);

				}
				for (var i = 0; i < response.Search.length; i++) {
					if (response.Search[i].Poster !== "N/A") {
						$('.gallery').append(
							'<img data-toggle="modal" data-target="#modal-' + i + '" class="col-md-3 movies" src=' + response.Search[i].Poster + '>'
						);
						console.log("The amount of Movies being displayed to the screen: " + response.Search.length);
						console.log("The total amount of possible Movies " + response.Search[1].totalResults);
					}
				}
				$("footer").css("margin-top", 100);
			},
		});
	});
});
