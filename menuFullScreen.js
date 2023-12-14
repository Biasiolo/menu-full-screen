// fullScreenMenu Plugin
(function ($) {
    $.fn.fullScreenMenu = function (options) {
        // Default options
        var settings = $.extend({
            menuTrigger: '.nav-trigger',
            closeButton: '.js_close_button',
            menuElement: '.menu-active',
            containerElement: '.container',
            animationDuration: 200
        }, options);

        // Plugin logic
        return this.each(function () {
            var $this = $(this);

            $this.on('click', settings.menuTrigger, function () {
                $(this).toggleClass('on');
                $(settings.menuElement).fadeToggle(settings.animationDuration);
                $(settings.menuElement).toggleClass('active');
                $(settings.containerElement).toggleClass('menu-open');
            });

            $this.on('click', settings.closeButton, function () {
                $(settings.menuTrigger).removeClass('on');
                $(settings.menuElement).removeClass('active');
                $(settings.containerElement).removeClass('menu-open');
            });
        });
    };
})(jQuery);

// Usage
$(document).ready(function () {
    // Initialize the plugin
    $('body').fullScreenMenu({
        menuTrigger: '.nav-trigger',
        closeButton: '.js_close_button',
        menuElement: '.nav-menu',
        containerElement: '.container',
        animationDuration: 200
    });
});
