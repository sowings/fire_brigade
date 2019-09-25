require([
    'underscore',
    'jquery',
    'splunkjs/mvc',
    'splunkjs/mvc/tableview',
    'splunkjs/mvc/simplexml/ready!'
], function(_, $, mvc, TableView) {

    var MVTableCellRenderer = TableView.BaseCellRenderer.extend({
        canRender: function(cell) {
            return cell.field === 'Max Total Size(s)' ||
                   cell.field === 'Home Path Max Size(s)' ||
                   cell.field === 'Home Path Directory' ||
                   cell.field === 'Cold Path Max Size(s)' ||
                   cell.field === 'Cold Path Directory';
        },
        render: function($td, cell) {
            if (cell.value instanceof Array) {

                 $td.addClass('numeric problem-cell');

                 for (var v in cell.value) {
                     if (cell.value.hasOwnProperty(v)) { 
                         val = cell.value[v];
            
                         var needsBreak = (v == cell.value-1) ? "":"<br />";

                         $td.append(val + needsBreak);
                     }
                 }
            } else {
                $td.addClass('numeric').append(cell.value);
            }
        }
    });

    mvc.Components.get('index_configs_table').getVisualization(function(tableView){
        tableView.table.addCellRenderer(new MVTableCellRenderer());
        tableView.table.render();
    });
});
