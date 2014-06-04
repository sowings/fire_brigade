require([
    'jquery',
    'underscore',
    'splunkjs/mvc',
    'splunkjs/mvc/simplesplunkview',
    'splunkjs/mvc/simplexml/element/single',
    'splunkjs/mvc/simplexml/ready!'
], function($, _, SimpleSplunkView, SingleElement){

    var group_header = $('#host_delta_hot_sum').parent();

    // First hide any existing (usually empty) h3's.
    $('h3', group_header).hide();

    // Now add in the desired group title. Styled in dashboard.css.
    group_header.prepend('<h3>Overall Hot Bucket Usage</h3>');

    group_header = $('#host_delta_warm_sum').parent();
    $('h3', group_header).hide();
    group_header.prepend('<h3>Overall Warm Bucket Usage</h3>');

    group_header = $('#host_delta_cold_sum').parent();
    $('h3', group_header).hide();
    group_header.prepend('<h3>Overall Cold Bucket Usage</h3>');

    group_header = $('#host_delta_thawed_sum').parent();
    $('h3', group_header).hide();
    group_header.prepend('<h3>Overall Thawed Bucket Usage</h3>');

});
