require(['splunkjs/mvc/simplexml/ready!'], function(){

    var group_header = $('#retention_size_home_label').parent();

    // First hide any existing (usually empty) h3's.
    $('h3', group_header).hide();

    // Now add in the desired group title. Styled in dashboard.css.
    group_header.prepend('<h3>Home (Hot + Warm) Path</h3>');

    // Next grouping
    group_header = $('#retention_size_cold_label').parent();

    // First hide any existing (usually empty) h3's.
    $('h3', group_header).hide();

    // Now add in the desired group title. Styled in dashboard.css.
    group_header.prepend('<h3>Cold Path</h3>');

});
