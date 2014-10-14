'use strict';

(function($) {
  $(document).ready(function() {
    $('.shape').on('click', function(eventObject) {
      eventObject.preventDefault();
      $(this).toggleClass('is-animated');
    });

    $('#nav-toggle').on('click', function(eventObject) {
      eventObject.preventDefault();
      $(this).toggleClass('active');
      $('#menu').toggleClass('active');
    });
  });
})(jQuery);
