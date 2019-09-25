require(['splunkjs/mvc/simplexml/ready!'], function(){

    var group_header = $('#retention_overview_hot_counts').parent();

    // First hide any existing (usually empty) h3's.
    $('h3', group_header).hide();

    // Now add in the desired group title. Styled in dashboard.css.
    group_header.prepend('<h3>Hot Bucket Counts</h3>');

    group_header = $('#retention_overview_warm_counts').parent();
    $('h3', group_header).hide();
    group_header.prepend('<h3>Warm Bucket Counts</h3>');

    group_header = $('#retention_overview_homePath').parent();
    $('h3', group_header).hide();
    group_header.prepend('<h3>homePath (Hot + Warm) Sizes</h3>');

    group_header = $('#retention_overview_coldPath').parent();
    $('h3', group_header).hide();
    group_header.prepend('<h3>coldPath Sizes</h3>');

    group_header = $('#retention_overview_total_usage').parent();
    $('h3', group_header).hide();
    group_header.prepend('<h3>Total Usage</h3>');

    group_header = $('#retention_overview_home_volume').parent();
    $('h3', group_header).hide();
    group_header.prepend('<h3>Volume: homePath</h3>');

    group_header = $('#retention_overview_cold_volume').parent();
    $('h3', group_header).hide();
    group_header.prepend('<h3>Volume: coldPath</h3>');

    group_header = $('#retention_overview_freeze_label').parent();
    $('h3', group_header).hide();
    group_header.prepend('<h3>Retention Settings (Freeze Limit)</h3>');

    group_header = $('#retention_overview_oldest_label').parent();
    $('h3', group_header).hide();
    group_header.prepend('<h3>Oldest Bucket\'s Age</h3>');

});
