require(['splunkjs/mvc/simplexml/ready!'], function(){
	$('#dashboard div.fieldset').before('<div class="pull-right vhelp_button">	<button id="vhelp_learn_more" class="btn btn-primary ">Learn more</button>		</div>');

	$("#vhelp_learn_more").click(function(event){
	if ($('#fire_brigade_help_html').css("display") == "block" || $('#fire_brigade_help_html').css("display") == "block")
		$('#fire_brigade_help_html').hide();
	else
		$('#fire_brigade_help_html').show();
	});

});
