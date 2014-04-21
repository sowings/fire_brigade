require(['splunkjs/mvc/simplexml/ready!'], function(){

    var group_header = $('#bucket_span_detail_avg_span_label').parent();

    // First hide any existing (usually empty) h3's.
    $('h3', group_header).hide();

    // Now add in the desired group title. Styled in dashboard.css.
    group_header.prepend('<h3>Average Local Bucket Span</h3>');

    // Next grouping
    group_header = $('#bucket_span_detail_hot_limits_label').parent();

    // First hide any existing (usually empty) h3's.
    $('h3', group_header).hide();

    // Now add in the desired group title. Styled in dashboard.css.
    group_header.prepend('<h3>Hot Time Limits (sec)</h3>');

});
