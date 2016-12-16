'use strict';

(function ($) {
    $(document).on('ready', function () {

        /**
         * Slide toggle
         */
        $('[data-toggle-source]').on('click', function (e) {
            e.preventDefault();
            var target = $(this).data('toggle-source'),
                targetElement = $('[data-toggle-target="' + target + '"]');
            //targetElement.slideToggle('400');
            targetElement.toggleClass('active');
            $(this).toggleClass('active');
        });

    });
})(django.jQuery);