require(['splunkjs/mvc/simplexml/ready!'], function(){

	var panel_of_interest = $('#index_detail_capacity_gauge').parent().parent().parent();
	panel_of_interest.attr('style', "width: 17%");

	
	panel_of_interest = $('#index_detail_bucket_sizes').parent().parent().parent();
	panel_of_interest.attr('style', "width: 49.67%");
	
});
