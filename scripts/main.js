'use strict';

(function($) {
  $(document).ready(function() {
    $('.animated').on('click', function(eventObject) {
      eventObject.preventDefault();
      $(this).toggleClass('is-animated');
    });

    $('#nav-toggle').on('click', function(eventObject) {
      eventObject.preventDefault();
      $(this).toggleClass('active');
      $('#menu').toggleClass('active');
    });

    $('.panel').on('click', function(e) {
      e.preventDefault();

      if ( $(this).hasClass('panel-4') ) {
        $(this).removeClass('active');
        $('.panel-1').addClass('active');
      } else {
        $(this)
          .removeClass('active')
          .next()
          .addClass('active');
      }
    });
  });
})(jQuery);
