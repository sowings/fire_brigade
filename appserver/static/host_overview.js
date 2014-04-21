require(['splunkjs/mvc/simplexml/ready!'], function(){

    var group_header = $('#host_overview_retention_label').parent();

    // First hide any existing (usually empty) h3's.
    $('h3', group_header).hide();

    // Now add in the desired group title. Styled in dashboard.css.
    group_header.prepend('<h3>Usage Affected by Retention Policies</h3>');

    var panel_of_interest = $('#host_overview_index_table').parent().parent().parent();
    panel_of_interest.attr('style', "width: 66.66%");

    panel_of_interest = $('#host_overview_disk_table').parent().parent().parent();
    panel_of_interest.attr('style', "width: 33.34%");
});
