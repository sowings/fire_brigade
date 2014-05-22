require(['splunkjs/mvc/simplexml/ready!'], function(){

	var panel_of_interest = $('#retention_volume_index_table').parent().parent().parent();
	panel_of_interest.attr('style', "width: 66.66%");

	panel_of_interest = $('#retention_volume_fullness_pie').parent().parent().parent();
	panel_of_interest.attr('style', "width: 33.34%");
});
