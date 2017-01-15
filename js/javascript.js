$(document).ready(function() {

	var template = $('#template').html();

	$('#artistname').focus();

	$('#getapibutton').click(function(event) {
		event.preventDefault();

		var artistname = $('#artistname').val();
		var songtitle = $('#songtitle').val();

		$('#songtitle').html("");
		$('#artistname').html("").focus().select();


		$('#artistplacement').html("Searching...")



			getLyrics = function() { $.ajax({
				url  : 'https://musixmatchcom-musixmatch.p.mashape.com/wsr/1.1/matcher.lyrics.get?q_artist='+ artistname + '&q_track=' + songtitle,
			 type: 'GET', // The HTTP Method, can be GET POST PUT DELETE etc
		 data: {}, // Additional parameters here
		 dataType: 'json',
		 success: function(data) {

			 //
				 //Change data.source to data.something , where something is whichever part of the object you want returned.
				 //To see the whole object you can output it to your browser console using:
				 console.log(data.lyrics_body);

				 //$output.addClass('white-space-pre');
				  // $output.html(Mustache.render(theTemplate,data);
				 //var dataObj = data;
				 //$output.html(Mustache.render(theTemplate,data));
				 $('#songplacement').html(data.lyrics_body).addClass('white-space-pre');

				 $('#artistplacement').html(artistname + ' ' + songtitle);
				 },
		 error: function(err) {
			 $('#artistplacement').html('Sorry, I did not find anything. ')
				$('#songplacement').html('Please try again.');
			 artist.select.focus();

	 },
		 beforeSend: function(xhr) {
		 xhr.setRequestHeader("X-Mashape-Authorization", "hW0RuXxRGimshPuBnZss7FBcF3QTp15W1nrjsn8sUDbdHYanZx"); // Enter here your Mashape key
		 }
 });
}

		getLyrics();
	});
});
