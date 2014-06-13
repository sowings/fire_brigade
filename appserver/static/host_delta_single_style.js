require([
    'jquery',
    'underscore',
    'splunkjs/mvc',
    'splunkjs/mvc/simplesplunkview',
    'splunkjs/mvc/simplexml/element/single',
    'splunkjs/mvc/simplexml/ready!'
], function($, _, mvc, SimpleSplunkView, SingleElement){

    var SingleValueTrendIndicator = SimpleSplunkView.extend({
        outputMode: 'json',
        returnCount: 2,

        options: {
            changeFieldType: 'text'
        },
        icons: {
            increase: 'icon-triangle-up-small',
            decrease: 'icon-triangle-down-small'
        },

        template: _.template(
            '<div class="single-trend <%- trendClass %>" title="Previous value: <%- prev %>">' +
                '<i class="<%- icon %>"></i> ' +
                '<%- diff %>' +
                '</div>'
        ),
        displayMessage: function() {
        },

        createView: function() {
            return true;
        },

        autoExtractTrend: function(data) {
            var icon = 'icon-minus', trendClass = 'nochange', diff = 'no change', field = this.settings.get('field');

            if (data.length < 2) {
                return null;
            }

            var cur = parseFloat(data[0][field]), prev = parseFloat(data[1][field]);
            var changePct = parseInt(((cur - prev) / prev) * 100);

            if (cur > prev) {
                trendClass = 'increase';
                icon = this.icons.increase;
                if (prev === 0) {
                    trendClass += ' infinity';
                    diff = "+ inf";
                } else {
                    diff = ['+', String(changePct), '%'].join('');
                }
            } else if (cur < prev) {
                trendClass = 'decrease';
                icon = this.icons.decrease;
                diff = [String(changePct), '%'].join('');
            }

            return {
                icon: icon,
                trendClass: trendClass,
                diff: diff,
                prev: data[1][field]
            };
        },

        updateView: function(viz, data) {
            this.$el.empty();
            var model = null;
            if (this.settings.has('changeField')) {
                var icon = 'icon-minus', trendClass = 'nochange', diff = 'no change', field = this.settings.get('field'), prev = 'n/a';
                switch (this.settings.get('changeFieldType')) {
                    case 'percent':
                        var v = parseInt(data[0][this.settings.get('changeField')], 10);
                        if (v > 0) {
                            trendClass = 'increase';
                            icon = this.icons.increase;
                            diff = ['+', String(v), '%'].join('');
                        } else if (v < 0) {
                            trendClass = 'decrease';
                            icon = this.icons.decrease;
                            diff = [String(v), '%'].join('');
                        }
                        break;
                    case 'single':
                        var v = parseInt(data[0][this.settings.get('changeField')], 10);

                        if (v > 0) {
                            trendClass = 'increase';
                            icon = this.icons.increase;
                            diff = null;
                        } else if (v < 0) {
                            trendClass = 'decrease';
                            icon = this.icons.decrease;
                            diff = null;
                        }
                    default:
                        diff = data[0][this.settings.get('changeField')];
                        trendClass = data[0][this.settings.get('trendClassField')];
                        icon = this.icons[trendClass];
                }
                if (this.settings.has('prevField')) {
                    prev = data[0][this.settings.get('prevField')];
                }
                model = {
                    icon: icon,
                    trendClass: trendClass,
                    diff: diff,
                    prev: prev
                };
            } else {
                model = this.autoExtractTrend(data);
            }

            if (!model) {
                return;
            }

            this.$el.html(this.template(model));
        }
    });
                
    _(mvc.Components.toJSON()).chain().filter(function(el) {
        return el instanceof SingleElement;
    }).each(function(singleElement) {
        singleElement.getVisualization(function(single) {
            var $el = $('<div></div>').insertAfter(single.$el);
            new SingleValueTrendIndicator(_.extend(single.settings.toJSON(), {
                el: $el,
                id: _.uniqueId('single')
            }));
        });
    });

});
