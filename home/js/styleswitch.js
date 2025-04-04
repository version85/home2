/* Style Switcher */

window.console = window.console || (function($){
	var c = {}; c.log = c.warn = c.debug = c.info = c.error = c.time = c.dir = c.profile = c.clear = c.exception = c.trace = c.assert = function(){};
	return c;
})();

$(document).ready(function($){

var styleswitcherstr = ' \
    <div class="content w-100"> \
		<p class="switcher-style-head">Layout Style</p> \
    <div class="layout-switcher switcher-style-head"> \
        <a id="wide" class="layout">Wide</a> \
        <a id="boxed" class="layout">Boxed</a> \
    </div> \
    <p class="switcher-style-head">Mode Style</p> \
    <div class="mode-switcher switcher-style-head"> \
        <a id="light" class="layout">Light</a> \
        <a id="dark" class="layout">Dark</a> \
    </div> \
    <p class="switcher-style-head">Color Style</p> \
    <div class="switcher-box"> \
		<a id="default" class="styleswitch"></a> \
		<a id="blue" class="styleswitch"></a> \
		<a id="red" class="styleswitch"></a> \
		<a id="green" class="styleswitch"></a> \
    </div><!-- End switcher-box --> \
    </div><!-- End content --> \
	';

$(".switcher").prepend( styleswitcherstr );

});

/* boxed & wide syle */
$(document).ready(function(){ 

var cookieName = 'wide';

function changeLayout(layout) {
$.cookie(cookieName, layout);
$('head link[data-name=layout]').attr('href', 'css/layout/' + layout + '.css');
}

if( $.cookie(cookieName)) {
    changeLayout($.cookie(cookieName));
}

$("#wide").click( function(){ $
    changeLayout('wide');
    location.reload();
});

$("#boxed").click( function(){ $
    changeLayout('boxed');
    location.reload();
});

});

/* light & dark syle */
$(document).ready(function(){ 

var cookieName = 'light';

function changeLayout(layout) {
$.cookie(cookieName, layout);
$('head link[data-name=mode]').attr('href', 'css/' + layout + '.css');
}

if( $.cookie(cookieName)) {
    changeLayout($.cookie(cookieName));
}

$("#light").click( function(){ $
    changeLayout('style');
    location.reload();
});

$("#dark").click( function(){ $
    changeLayout('dark');
    location.reload();
});

});

/* color Style */
$(document).ready(function($){

    var cookieName = 'default';

    function changeLayout(layout) {
    $.cookie(cookieName, layout);
    $('head link[data-name=color]').attr('href', 'css/color/' + layout + '.css');
    }
    if( $.cookie(cookieName)) {
    changeLayout($.cookie(cookieName));
    }
    $("#default").click( function(){ $
    changeLayout('default');
    });
    $("#blue").click( function(){ $
    changeLayout('blue');
    });
		$("#red").click( function(){ $
    changeLayout('red');
    });
		$("#green").click( function(){ $
    changeLayout('green');
    });

});


$("#reset-all").click( function(e){
    e.preventDefault();
    $.removeCookie("default");
    $.removeCookie("wide");
    $.removeCookie("light");
    location.reload();
});
