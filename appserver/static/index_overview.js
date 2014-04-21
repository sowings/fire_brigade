require(['splunkjs/mvc/simplexml/ready!'], function(){

    var group_header = $('#index_overview_cumulative_label').parent();

    // First hide any existing (usually empty) h3's.
    $('h3', group_header).hide();

    // Now add in the desired group title. Styled in dashboard.css.
    group_header.prepend('<h3>Cumulative Usage Over All Hosts</h3>');
});
