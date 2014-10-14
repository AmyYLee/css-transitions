'use strict';

(function($) {
  $(document).ready(function() {
    $('.shape').on('click', function(eventObject) {
      eventObject.preventDefault();
      $(this).toggleClass('is-animated');
    });
  });
})(jQuery);
