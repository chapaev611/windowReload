/*====================================
WINDOW RELOAD SCRIPTS
======================================*/
var context;
var $window = $(window);

if ($window.width() <= 1200) {
    context = 'small';
    // console.log(context);
} else if (1200 < $window.width()) {
    context = 'medium';
    // console.log(context);
}

$(window).resize(function() {
    if(($window.width() <= 1200) && (context != 'small')) {
        location.reload();
    } else if ((1200 < $window.width()) && (context != 'medium')) {
        location.reload();
    }
});
