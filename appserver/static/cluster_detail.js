require(['splunkjs/mvc/simplexml/ready!'], function(){

    var group_header = $('#cluster_detail_replication_label').parent();

    // First hide any existing (usually empty) h3's.
    $('h3', group_header).hide();

    // Now add in the desired group title. Styled in dashboard.css.
    group_header.prepend('<h3>Replication Settings</h3>');
});
