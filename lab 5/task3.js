$( document ).ready(function() {
	$('#btn').on('click', function() {
	    $.ajax(ajaxOptions);
	 });

  var put_data = function( resp ) {
    $.each(resp, function(index, value) {
      var email = $('<a />', {
        "target" : "_blank",
        "href" : 'mailto:'+value.email,
        "text" : value.email
      });
      var string = $('<p />').append(value.name + ', Email: ').append(email);
      $("#data_canvas").append(string)
    });
  };

    var errormessage = function( req, status, err ) {
    console.log( 'Error!', status, err );
  };

   var ajaxOptions = {
    url: 'http://imp-portfolio-demonstration.herokuapp.com/json/persons.jsonp',
    dataType: 'jsonp',
    jsonpCallback: 'jsonCallback',
    success: put_data,
    error: errormessage
  };
});
