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

// template='<div style="position: relative; width: ' + args['width'] + 'px"><div class="vbar-bar-wrapper"><div class="vbar-bar-full vbar-bar-sanford-text <%-pColor %>"><%-percentValue%>%</div><div class="vbar-bar-progress vbar-bar-sanford" style="width:<%-percentValue%>%"></div></div>';
            $td.addClass('data-bar-cell').html(_.template('<div class="data-bar-wrapper"> <div style="position: absolute" class="data-bar-text-overlay <%-pColor %>"> <%- value %> % </div> <div class="data-bar-right" style="width:<%- percent %>%"></div></div>', {
                percent: Math.min(Math.max(parseFloat(cell.value), 0), 100),
                pColor: pColor,
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
