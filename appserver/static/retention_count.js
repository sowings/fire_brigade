require(['splunkjs/mvc/simplexml/ready!'], function(){

    var group_header = $('#retention_count_hot_label').parent();

    // First hide any existing (usually empty) h3's.
    $('h3', group_header).hide();

    // Now add in the desired group title. Styled in dashboard.css.
    group_header.prepend('<div class="panel-head"><h3>Hot Buckets</h3></div>');

    // Next grouping
    group_header = $('#retention_count_warm_label').parent();

    // First hide any existing (usually empty) h3's.
    $('h3', group_header).hide();

    // Now add in the desired group title. Styled in dashboard.css.
    group_header.prepend('<div class="panel-head"><h3>Warm Buckets</h3></div>');

});
