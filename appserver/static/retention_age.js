require(['splunkjs/mvc/simplexml/ready!'], function(){

    var group_header = $('#retention_age_freeze_label').parent();

    // First hide any existing (usually empty) h3's.
    $('h3', group_header).hide();

    // Now add in the desired group title. Styled in dashboard.css.
    group_header.prepend('<h3>Retention Settings (Freeze Limit)</h3>');

    // Next grouping
    group_header = $('#retention_age_oldest_label').parent();

    // First hide any existing (usually empty) h3's.
    $('h3', group_header).hide();

    // Now add in the desired group title. Styled in dashboard.css.
    group_header.prepend('<h3>Oldest Bucket\'s Age</h3>');

});
