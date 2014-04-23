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
            $td.addClass('data-bar-cell').html(_.template('<div class="data-bar-wrapper"> <%- value %>% <span class="data-bar-right" style="width:<%- percent %>%"></span></div>', {
                percent: Math.min(Math.max(parseFloat(cell.value), 0), 100),
                value: parseFloat(cell.value)
            }));

        }
    });

    var TotalBarCellRenderer = BaseCellRenderer.extend({
        canRender: function(cell) {
            return (cell.field === 'Relative Size');
        },

        render: function($td, cell) {
            $td.addClass('data-bar-cell').html(_.template('<div class="data-bar-wrapper"><div class="data-bar-left" style="width:<%- percent %>%"></div></div>', {
                percent: Math.min(Math.max(parseFloat(cell.value), 0), 100)
            }));
        }
    });

    mvc.Components.get('host_overview_index_table').getVisualization(function(tableView) {
        tableView.table.addCellRenderer(new TotalBarCellRenderer());
        tableView.table.addCellRenderer(new PercentBarCellRenderer());
        tableView.table.render();
    });

});
