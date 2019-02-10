$(document).ready(function() {
  // This generates the text for the popover in the first modal
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

  // Youtube video inside modal
  // See https://stackoverflow.com/questions/18622508/bootstrap-3-and-youtube-in-modal
  // http://jsfiddle.net/jeremykenedy/h8daS/1/
  autoPlayYouTubeModal();

  //FUNCTION TO GET AND AUTO PLAY YOUTUBE VIDEO FROM DATATAG
  function autoPlayYouTubeModal() {
    var trigger = $("body").find('[data-toggle="modal"]');
    trigger.click(function () {
      var theModal = $(this).data("target"),
          videoSRC = $(this).attr("data-theVideo"),
          videoSRCauto = videoSRC + "?autoplay=1";
      $(theModal + ' iframe').attr('src', videoSRCauto);
      $(theModal + ' button.close').click(function () {
        $(theModal + ' iframe').attr('src', videoSRC);
      });
    });
  }

});
