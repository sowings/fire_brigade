require([
    'underscore',
    'jquery',
    'splunkjs/mvc',
    'util/console',
    'splunkjs/mvc/simplexml/ready!'
], function(_, $, mvc, console) {

    var bucketTable  = mvc.Components.get('retention_overview_bucket_states');
    var bucketDetail = mvc.Components.get('retention_overview_bucket_detail');
    var diskTable    = mvc.Components.get('retention_overview_disk_states');
    var diskDetail   = mvc.Components.get('retention_overview_disk_detail');

    var unsubmittedTokens = mvc.Components.get('default');
    var submittedTokens = mvc.Components.get('submitted');
    var urlTokens = mvc.Components.get('url');


    if(!submittedTokens.has('form.bucket_host')) {
        bucketDetail.$el.parents('.dashboard-panel').hide();
    }

    if(!submittedTokens.has('form.disk_host')) {
        diskDetail.$el.parents('.dashboard-panel').hide();
    }

    submittedTokens.on('change:form.bucket_host', function() {
        if(!submittedTokens.get('bucket_host')) {
            bucketDetail.$el.parents('.dashboard-panel').hide();
      } else {
          bucketDetail.$el.parents('.dashboard-panel').show();
      }
    });

    submittedTokens.on('change:form.disk_host', function() {
        if(!submittedTokens.get('disk_host')) {
            diskDetail.$el.parents('.dashboard-panel').hide();
      } else {
          diskDetail.$el.parents('.dashboard-panel').show();
      }
    });

    bucketTable.on('click', function(e) {
        e.preventDefault();
        var newValue = e.data['row.Host'];

        bucketDetail.$el.parents('.dashboard-panel').show();

        unsubmittedTokens.set('form.bucket_host', newValue);
        submittedTokens.set(unsubmittedTokens.toJSON());
        urlTokens.saveOnlyWithPrefix('form\\.', unsubmittedTokens.toJSON(), {
            replaceState: false
        });
    });

    diskTable.on('click', function(e) {
        e.preventDefault();
        var newValue = e.data['row.Host'];

        diskDetail.$el.parents('.dashboard-panel').show();

        unsubmittedTokens.set('form.disk_host', newValue);
        submittedTokens.set(unsubmittedTokens.toJSON());
        urlTokens.saveOnlyWithPrefix('form\\.', unsubmittedTokens.toJSON(), {
            replaceState: false
        });
    });

});
