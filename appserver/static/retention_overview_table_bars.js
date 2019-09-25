require([
    'jquery',
    'underscore',
    'splunkjs/mvc',
    'views/shared/results_table/renderers/BaseCellRenderer',
    'splunkjs/mvc/simplexml/ready!'
], function($, _, mvc, BaseCellRenderer) {

    var PercentBarCellRenderer = BaseCellRenderer.extend({
        canRender: function(cell) {
            return (cell.field === '% of Capacity');
        },

        render: function($td, cell) {
            var pColor = "data-bar-under";
            if (cell.value > 50) {
                pColor = "data-bar-over";
            }

            $td.addClass('data-bar-cell').html(_.template('<div class="data-bar-wrapper"> <div style="position: absolute" class="data-bar-text-overlay <%-pColor %>"> <%- value %> % </div> <div class="data-bar-right" style="width:<%- percent %>%"></div></div>', {
                percent: Math.min(Math.max(parseFloat(cell.value), 0), 100),
                pColor: pColor,
                value: parseFloat(cell.value)
            }));

        }
    });

    mvc.Components.get('retention_overview_volume_states').getVisualization(function(tableView) {
        tableView.table.addCellRenderer(new PercentBarCellRenderer());
        tableView.table.render();
    });

});
