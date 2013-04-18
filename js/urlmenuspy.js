// jquery plugin boilerplate: http://stefangabos.ro/jquery/jquery-plugin-boilerplate-revisited/

// remember to change every instance of "url_menu_spy" to the name of your plugin!
(function($) {

    // here we go!
    $.url_menu_spy = function(element, options) {

        // plugin's default options
        // this is private property and is  accessible only from inside the plugin
        var defaults = {
            data_urlspy_name: 'urlspy',
            sub_element_path: '',
            class_select: 'active'

        }

        // to avoid confusions, use "plugin" to reference the current
        // instance of the object
        var plugin = this;

        // this will hold the merged default, and user-provided options
        // plugin's properties will be available through this object like:
        // plugin.settings.propertyName from inside the plugin or
        // element.data('url_menu_spy').settings.propertyName from outside
        // the plugin, where "element" is the element the plugin is
        // attached to;
        plugin.settings = {}

        // reference to the jQuery version of DOM element the plugin is attached to
        var $element = $(element),
                element = element;    // reference to the actual DOM element

        // the "constructor" method that gets called when the object is created
        plugin.init = function() {

            // the plugin's final properties are the merged default
            // and user-provided options (if any)
            plugin.settings = $.extend({}, defaults, options)

            plugin.findspymenu();
            
            //on url changes...
            window.onhashchange = function(){
                plugin.hashchanged();
            }

        }

        // public methods
        // these methods can be called like:
        // plugin.methodName(arg1, arg2, ... argn) from inside the plugin or
        // element.data('url_menu_spy').publicMethod(arg1, arg2, ... argn)
        // from outside the plugin, where "element"
        // is the element the plugin is attached to;

        plugin.findspymenu = function() {
            $('[data-urlmenuspy]').each(function() {
                var patt = new RegExp($(this).data('urlmenuspy'));

                if (patt.test(document.URL)) {
                    active_item($(this));
                }
            });
        }
        
        plugin.hashchanged = function() {
            plugin.clear_active();
            plugin.findspymenu();
        }
        
        plugin.clear_active = function() {
            $('[data-urlmenuspy]').removeClass(defaults.class_select);
        }

        // private methods
        // these methods can be called only from inside the plugin like:
        // methodName(arg1, arg2, ... argn)
        active_item = function(item) {
            if (defaults.sub_element_path == '')
                item.addClass(defaults.class_select);
            else
                item.find(defaults.sub_element_path).addClass(defaults.class_select);
        }

        // fire up the plugin!
        // call the "constructor" method
        plugin.init();

    }

    // add the plugin to the jQuery.fn object
    $.fn.url_menu_spy = function(options) {

        // iterate through the DOM elements we are attaching the plugin to
        return this.each(function() {

            // if plugin has not already been attached to the element
            if (undefined == $(this).data('url_menu_spy')) {

                // create a new instance of the plugin
                // pass the DOM element and the user-provided options as arguments
                var plugin = new $.url_menu_spy(this, options);

                // in the jQuery version of the element
                // store a reference to the plugin object
                // you can later access the plugin and its methods and properties like
                // element.data('url_menu_spy').publicMethod(arg1, arg2, ... argn) or
                // element.data('url_menu_spy').settings.propertyName
                $(this).data('url_menu_spy', plugin);

            }

        });

    }

})(jQuery);