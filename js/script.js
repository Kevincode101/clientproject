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
				console.log(response);
				if (response.Response == "False") {
					console.log("I work");
					$('.gallery').append(
						'<p class="warningSign">' + "No movie was found with those characters..." + '</p>'
					);

				}
				console.log("I work 2");
				for (var i = 0; i < response.Search.length; i++) {
					if (response.Search[i].Poster !== "N/A") {
						$('.gallery').append(
							'<img data-toggle="modal" data-target="#modal-' + i + '" class="col-md-3 movies" src=' + response.Search[i].Poster + '>\
			                  <div class="modal" id="modal-' + i + '" tabindex="-1" aria-labelledby="myModalLabel">\
			                     <div class="modal-dialog">\
			                         <div class="modal-content">\
			                             <div class="modal-header">\
			                                 <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>\
			                                 <h4 class="modal-title" id="myModalLabel">' + response.Search[i].title + '</h4>\
			                             </div>\
			                             <div class="modal-body">\
			                                 <img class="modalImage" src="' + response.Search[i].Poster + '">\
			                                 <div class="gif_description">\
			                                     <p>Uploaded: Hello </p>\
			                                      <p>Rating: ' + response.Search[i].title + '</p>\
			                                     <p>GIF Link: ' + response.Search[i].title + '</p>\
			                                 </div>\
			                             </div>\
			                         </div>\
			                     </div>\
			                  </div>'

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
