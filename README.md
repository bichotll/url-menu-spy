Url spy menu
============

#### A really simple jQuery (and twitter bootstrap for default) plugin to create the menu logic with your javascript.

##### Useful for other pages links, ajax, \#urls and really fast to deploy it.

###### --- Trash menu logic for the client, not more for your server ---


* * * * *



### Requirements

-   jQuery

Please, note that the event window.onhashchange runs only in
[http://caniuse.com/hashchange][]. \
It's only for the \# changes on the url.

  [http://caniuse.com/hashchange]: http://caniuse.com/hashchange
  
  



### Use

It's really simple, you just need to assign the data-urlspy pattern
(regular expression) to the items of the menu and run the script! That's
all!

##### Simple javascript call {#use_simple_js}

    $(document).ready( function(){
        $.url_menu_spy();
    });            

##### With Twitter Bootstrap: {#use_tw}

        <ul class="nav">
            <li data-urlmenuspy="index.html(#*)$" ><a href="#">Index</a></li>
            <li data-urlmenuspy="#requirements$" ><a href="#requirements">Requirements</a></li>
            ...
        </ul>            

##### Other html {#use_other}

For other html you only need to change the **class\_select** option to
your change (ex: selected) and the **sub\_element\_path**.




### Options

`data_urlspy_name: 'urlspy'` - The name of the data tag.\

 `class_select: 'active'` - The class to assign for the menu spy item\

 `sub_element_path: ''` - If it's assigned the script use the jQuery
function **find()** to assign the class to another element according to
this path. 


### Methods

This plugin is automatic...but if you need to use this functions...


 `$.findspymenu()` - Find the Spymenu items and active them\

 `$.clear_active()` - Clear all the active Spymenu items.\



### More info

[http://bichotll.github.com/url-menu-spy/]: http://bichotll.github.com/url-menu-spy/
