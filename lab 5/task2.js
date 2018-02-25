$(function() {
	$("#AddName").click(function(){
    	$('#list_space').append("<br>" + $('#name_to_add').val());
	});
});