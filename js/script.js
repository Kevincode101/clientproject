// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

/* global $ */

$( document ).ready( function() {
    
	$( "#srch-term" ).keyup( function( event ) {
		if ( event.keyCode === 13 ) {
			$( "#submit" ).click();
		}
	} );   

	$( "#submit" ).click( function() {
	    http://www.omdbapi.com/?apikey=90d4b10a&y=2016&s=dory
		$( ".gallery" ).empty();
		var userInput = $( '#srch-term' ).val();
		var url = "https://omdbapi.com?apikey=90d4b10a&y=2016&s=" + userInput.toLowerCase();
		$.ajax( {
			url: url,
			method: "GET",
			success: function( response ) {
				$( ".giphyTitle" ).html( "<h1 id='giphyTitle'>" + userInput.toLowerCase() + "</h1>" );
				for ( var i = 0; i < response.Search.length; i++ ) {
					$( '.gallery' ).append(
						'<img data-toggle="modal" data-target="#modal-' + i + '" class="col-md-3 giphy" src=' + response.Search[i].Poster + '>');
					console.log(response.Search[i].Poster);
					console.log(response);
				}
				$( "footer" ).css( "margin-top", 100 );
			},
		} );
	} );
} );