$(document).ready(function() {
	var $citylist = $('#city-list');
	var citytemplate = $('#city-template').html();

$('#citybutton').click(function() {

	var cityname = $('#cityname').val();
	$('#cityname').html("").focus().select();
	$citylist.html("Searching...")




		$.getJSON( {
    url  : 'https://maps.googleapis.com/maps/api/geocode/json',
    data : {
        sensor  : false,
        address : cityname
    },
    success : function( data, textStatus ) {
        console.log( textStatus, data );
			//	$citylist.append(data.results[0].formatted_address);
			$citylist.html(Mustache.render(citytemplate,data.results[0]));
    }
		});

	});
});
