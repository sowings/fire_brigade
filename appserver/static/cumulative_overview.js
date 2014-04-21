require(['splunkjs/mvc/simplexml/ready!'], function(){

    var group_header = $('#cumulative_overview_index_count_label').parent();

    // First hide any existing (usually empty) h3's.
    $('h3', group_header).hide();

    // Now add in the desired group title. Styled in dashboard.css.
    group_header.prepend('<h3>Index Counts</h3>');

    // Round 2!
    group_header = $('#cumulative_overview_disk_usage_label').parent();

    // First hide any existing (usually empty) h3's.
    $('h3', group_header).hide();

    // Now add in the desired group title. Styled in dashboard.css.
    group_header.prepend('<h3>Overall Disk Usage</h3>');

});
