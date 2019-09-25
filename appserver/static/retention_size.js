require(['splunkjs/mvc/simplexml/ready!'], function(){

    var group_header = $('#retention_size_home_label').parent();

    // First hide any existing (usually empty) h3's.
    $('h3', group_header).hide();

    // Now add in the desired group title. Styled in dashboard.css.
    group_header.prepend('<div class="panel-head"><h3>Home (Hot + Warm) Path</h3></div>');

    // Next grouping
    group_header = $('#retention_size_cold_label').parent();

    // First hide any existing (usually empty) h3's.
    $('h3', group_header).hide();

    // Now add in the desired group title. Styled in dashboard.css.
    group_header.prepend('<div class="panel-head"><h3>Cold Path</h3></div>');

    var panel_of_interest = $('#retention_size_home_ballast_gauge').parent().parent().parent();
    panel_of_interest.attr('style', "width: 25%");
    
    panel_of_interest = $('#retention_size_cold_ballast_gauge').parent().parent().parent();
    panel_of_interest.attr('style', "width: 25%");

    panel_of_interest = $('#retention_size_usage_vs_max').parent().parent().parent();
    panel_of_interest.attr('style', "width: 50%");
});
