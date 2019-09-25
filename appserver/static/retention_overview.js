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
    var volumeTable  = mvc.Components.get('retention_overview_volume_states');
    var volumeUsage  = mvc.Components.get('retention_overview_volume_index_detail');
    var volumeLimit  = mvc.Components.get('retention_overview_volume_limit_detail');

    var timeTable    = mvc.Components.get('retention_overview_time_states');
    var timeDetail   = mvc.Components.get('retention_overview_time_detail');

    var unsubmittedTokens = mvc.Components.get('default');
    var submittedTokens = mvc.Components.get('submitted');
    var urlTokens = mvc.Components.get('url');


    if(!submittedTokens.has('form.bucket_host')) {
        bucketDetail.$el.parents('.dashboard-panel').hide();
    }

    if(!submittedTokens.has('form.disk_host')) {
        diskDetail.$el.parents('.dashboard-panel').hide();
    }

    if(!submittedTokens.has('form.volume_host') ||
       !submittedTokens.has('form.volume_title')) {
        volumeUsage.$el.parents('.dashboard-panel').hide();
        volumeLimit.$el.parents('.dashboard-panel').hide();
    }

    if(!submittedTokens.has('form.time_host')) {
        timeDetail.$el.parents('.dashboard-panel').hide();
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

    submittedTokens.on('change:form.volume_host', function() {
        if(!submittedTokens.get('volume_host') ||
           !submittedTokens.get('volume_title')) {
            volumeUsage.$el.parents('.dashboard-panel').hide();
            volumeLimit.$el.parents('.dashboard-panel').hide();
        } else {
            volumeUsage.$el.parents('.dashboard-panel').show();
            volumeLimit.$el.parents('.dashboard-panel').show();
      }
    });

    submittedTokens.on('change:form.volume_title', function() {
        if(!submittedTokens.get('volume_host') ||
           !submittedTokens.get('volume_title')) {
            volumeUsage.$el.parents('.dashboard-panel').hide();
            volumeLimit.$el.parents('.dashboard-panel').hide();
        } else {
            volumeUsage.$el.parents('.dashboard-panel').show();
            volumeLimit.$el.parents('.dashboard-panel').show();
      }
    });

    submittedTokens.on('change:form.time_host', function() {
        if(!submittedTokens.get('time_host')) {
            timeDetail.$el.parents('.dashboard-panel').hide();
      } else {
          timeDetail.$el.parents('.dashboard-panel').show();
      }
    });

    bucketTable.on('click', function(e) {
        e.preventDefault();
        var newValue = e.data['row.Host'];
        var oldValue = submittedTokens.get('bucket_host');

        if (oldValue === newValue) {
            // Clear the value.
            unsubmittedTokens.unset('form.bucket_host');
            submittedTokens.set(unsubmittedTokens.toJSON());
            urlTokens.unset('form.bucket_host');
	    urlTokens.saveOnlyWithPrefix('form\\.', unsubmittedTokens.toJSON(),  {
            replaceState: true
            });
        } else {
            unsubmittedTokens.set('form.bucket_host', newValue);
            submittedTokens.set(unsubmittedTokens.toJSON());
	    urlTokens.saveOnlyWithPrefix('form\\.', unsubmittedTokens.toJSON(),  {
            replaceState: false
            });
        }
    });

    diskTable.on('click', function(e) {
        e.preventDefault();
        var newValue = e.data['row.Host'];
        var oldValue = submittedTokens.get('disk_host');

        if (oldValue === newValue) {
            // Clear the value.
            unsubmittedTokens.unset('form.disk_host');
            submittedTokens.set(unsubmittedTokens.toJSON());
            urlTokens.unset('form.disk_host');
	    urlTokens.saveOnlyWithPrefix('form\\.', unsubmittedTokens.toJSON(),  {
            replaceState: true
            });
        } else {
            unsubmittedTokens.set('form.disk_host', newValue);
            submittedTokens.set(unsubmittedTokens.toJSON());
	    urlTokens.saveOnlyWithPrefix('form\\.', unsubmittedTokens.toJSON(),  {
            replaceState: false
            });
        }
    });

    volumeTable.on('click', function(e) {
        e.preventDefault();
        var volHost = e.data['row.Host'];
        var volume  = e.data['row.Volume']
        var oldHost = submittedTokens.get('volume_host');
        var oldVol  = submittedTokens.get('volume_title');

        if (oldHost === volHost && oldVol === volume) {
            // Clear the value.
            unsubmittedTokens.unset('form.volume_host');
            unsubmittedTokens.unset('form.volume_title');
            submittedTokens.set(unsubmittedTokens.toJSON());
            urlTokens.unset('form.disk_host');
 	    urlTokens.saveOnlyWithPrefix('form\\.', unsubmittedTokens.toJSON(),  {
            replaceState: true
            });
        } else {
            unsubmittedTokens.set('form.volume_host', volHost);
            unsubmittedTokens.set('form.volume_title', volume);
            submittedTokens.set(unsubmittedTokens.toJSON());
	    urlTokens.saveOnlyWithPrefix('form\\.', unsubmittedTokens.toJSON(),  {
            replaceState: false
            });
        }
    });

    timeTable.on('click', function(e) {
        e.preventDefault();
        var newValue = e.data['row.Host'];
        var oldValue = submittedTokens.get('time_host');

        if (oldValue === newValue) {
            // Clear the value.
            unsubmittedTokens.unset('form.time_host');
            submittedTokens.set(unsubmittedTokens.toJSON());
            urlTokens.unset('form.time_host');
	    urlTokens.saveOnlyWithPrefix('form\\.', unsubmittedTokens.toJSON(),  {
            replaceState: true
            });
        } else {
            unsubmittedTokens.set('form.time_host', newValue);
            submittedTokens.set(unsubmittedTokens.toJSON());
	    urlTokens.saveOnlyWithPrefix('form\\.', unsubmittedTokens.toJSON(),  {
            replaceState: false
            });
        }
    });

});
