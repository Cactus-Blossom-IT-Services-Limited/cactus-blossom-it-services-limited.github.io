$(document).ready(function() {
  var popoverContentTemplate = '' +
      '<div class="info">' +
      '<strong>Whatever you say will be taken</strong>' +
      '<a href="http://google.com" class="btn btn-default">' +
      'Go and Google it!' +
      '</a>' +
      '</div>';

  $('#example').popover({
    html: true,
    content: function() {
      return popoverContentTemplate;
    }
  });
});
