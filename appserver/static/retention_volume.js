require(['splunkjs/mvc/simplexml/ready!'], function(){

	var panel_of_interest = $('#retention_volume_index_table').parent().parent().parent();
	panel_of_interest.attr('style', "width: 66.66%");

	panel_of_interest = $('#retention_volume_fullness_pie').parent().parent().parent();
	panel_of_interest.attr('style', "width: 33.34%");


        var group_header = $('#retention_volume_limits').parent();

        $('h3', group_header).hide();

        group_header.prepend('<h3>Disk Space Limits</h3>');

        group_header = $('#retention_volume_current_usage_panel').parent();

        $('h3', group_header).hide();

        group_header.prepend('<h3>Current Usage Totals</h3>');
});
