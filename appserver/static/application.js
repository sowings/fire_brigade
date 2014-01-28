$(document).ready(function() {
  if (Splunk.ViewConfig.view.id == "index_detail") {
    var target_row = $('.panel_row3_col');

    $('.firstCell', target_row).css("width", "17%");
    $('.layoutCell:last', target_row).css("width", "50%");
  }
  if (Splunk.ViewConfig.view.id == "host_overview") {
    var target_row = $('.panel_row3_col');

/* Will this be weird on IE? */
    $('.firstCell', target_row).css("width", "66%");
    $('.layoutCell:last', target_row).css("width", "34%");
  }
});

/**
if (Splunk.Module.Message) {
    Splunk.Module.Message = $.klass(Splunk.Module.Message, {
        getHTMLTransform: function($super) {
            // Please dont tell me any 'info' substituted time ranges.
            var i, len, j, jLen, message;
            var argh = [
                {contains: "Your timerange was substituted", level: "info"}
            ];
            for (i = 0, len = this.displayedMessages.length; i < len; i = i + 1) {
                message = this.displayedMessages[i];
                for (j = 0, jLen = argh.length ; j < jLen ; j = j + 1) {
                    if ((message.content.indexOf(argh[j].["contains"]) !== -1) && (message.level === argh[j]["level"])) {
                        this.displayedMessages.splice(i, 1);
                        break;
                    }
                }
            }
            return $super();
        }
    });
}
*/
