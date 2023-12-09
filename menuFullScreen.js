// fullScreenMenu Plugin
(function($) {
    $.fn.fullScreenMenu = function(options) {
        // Default options
        var settings = $.extend({
            menuTrigger: '.nav-trigger',
            closeButton: '.js_close_button',
            menuElement: '.nav-menu',
            animationDuration: 200
        }, options);

        // Plugin logic
        return this.each(function() {
            var $this = $(this);

            $this.on('click', settings.menuTrigger + ', ' + settings.darkTrigger, function () {
                $(this).toggleClass('on');
                $(settings.menuElement).fadeToggle(settings.animationDuration);
                $(settings.menuElement).toggleClass('active');
            });

            $this.on('click', settings.closeButton, function () {
                $(settings.menuTrigger + ', ' + settings.darkTrigger).removeClass('on');
                $(settings.menuElement).removeClass('active');
            });
        });
    };
}(jQuery));

// Usage
$(document).ready(function () {
    // Initialize the plugin
    $('body').fullScreenMenu({
        menuTrigger: '.nav-trigger',
        closeButton: '.js_close_button',
        menuElement: '.nav-menu',
        animationDuration: 200
    });
});
