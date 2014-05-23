require([
    'underscore',
    'jquery',
    'splunkjs/mvc',
    'splunkjs/mvc/tableview',
    'splunkjs/mvc/simplexml/ready!'
], function(_, $, mvc, TableView) {

    // Translations from rangemap results to CSS class
    var ICONS = {
        coldwarn:  'alert',
        extreme:   'alert',
        homewarn:  'alert',
        hotwarn:   'alert',
        quar:      'clock',
        totalwarn: 'alert',
        warmwarn:  'alert',
        warn:      'alert'
    };

    var RangeMapIconRenderer = TableView.BaseCellRenderer.extend({
        canRender: function(cell) {
            // Only use the cell renderer for the range field
            return cell.field === 'Hot Status' ||
                   cell.field === 'Warm Status' ||
                   cell.field === 'Home Status' ||
                   cell.field === 'Cold Status' ||
                   cell.field === 'Time-Based Status' ||
                   cell.field === 'Total Space Status';
        },

        render: function($td, cell) {
            var icon = 'check';
            // Fetch the icon for the value
            if (ICONS.hasOwnProperty(cell.value)) {
                icon = ICONS[cell.value];
            }

            // Create the icon element and add it to the table cell
            $td.addClass('icon').html(_.template('<i class="icon-<%-icon%> <%- range %>" title="<%- range %>"></i>', {
                icon: icon,
                range: cell.value
            }));
        }
    });

    mvc.Components.get('retention_overview_bucket_states').getVisualization(function(tableView){
        // Register custom cell renderer
        tableView.table.addCellRenderer(new RangeMapIconRenderer());
        // Force the table to re-render
        tableView.table.render();
    });

    mvc.Components.get('retention_overview_bucket_detail').getVisualization(function(tableView){
        // Register custom cell renderer
        tableView.table.addCellRenderer(new RangeMapIconRenderer());
        // Force the table to re-render
        tableView.table.render();
    });

    mvc.Components.get('retention_overview_disk_states').getVisualization(function(tableView){
        // Register custom cell renderer
        tableView.table.addCellRenderer(new RangeMapIconRenderer());
        // Force the table to re-render
        tableView.table.render();
    });

    mvc.Components.get('retention_overview_disk_detail').getVisualization(function(tableView){
        // Register custom cell renderer
        tableView.table.addCellRenderer(new RangeMapIconRenderer());
        // Force the table to re-render
        tableView.table.render();
    });

    mvc.Components.get('retention_overview_time_states').getVisualization(function(tableView){
        // Register custom cell renderer
        tableView.table.addCellRenderer(new RangeMapIconRenderer());
        // Force the table to re-render
        tableView.table.render();
    });

    mvc.Components.get('retention_overview_time_detail').getVisualization(function(tableView){
        // Register custom cell renderer
        tableView.table.addCellRenderer(new RangeMapIconRenderer());
        // Force the table to re-render
        tableView.table.render();
    });

});
