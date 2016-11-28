$(document).on('ready', function (){
  
	$('.form-artist').on('submit', searchArtist);

	function searchArtist(event) {
	    event.preventDefault();

	    var search = $('#search').val()
	    $.ajax({
	    	type: "GET",
	    	url: ("https://api.spotify.com/v1/search?type=artist&query=" + search),
	    	success: showArtists,
	    	error: handleError 
    	});
	};

	function showArtists(response) {
		console.log(response);
		var artistArray = response.artists.items;

		artistArray.forEach(function (artist){
			
			if (artist.images.length > 0) {
				var image = artist.images[0].url
			} else {
				var image = "http://school4schools.com/blog/wp-content/plugins/lightbox/images/No-image-found.jpg"
			}


			var html = `
			<div class="col-lg-12">
                <h1 class="page-header">${artist.name}</h1>
            </div>

            <div class="col-lg-3 col-md-4 col-xs-6 thumb">
                <a class="thumbnail" href="#">
                    <img class="img-responsive" src="${image}"" alt="">
                </a>
            </div>`;

			$('.artist-results').append(html);
		});
	};

s
});