/* <![CDATA[ */
var browser = cBrowser();
if ( browser.agent != 'ie'  || (browser.agent == 'ie' && browser.version > 9 )) {
    yepnope({
        load: [
            'js/createjs-2015.11.26.min.js', // CreateJS library
            'js/inobounce.js', // Stop your iOS webapp from bouncing around when scrolling 
            'js/index.js', // JS file generated from Adobe Animate CC
            'js/settings.js', // User settings, edit your preferences here
            'js/recolor.js', // Recolor function
            'js/responsive.js', // Responsive settings for different devices
            'js/sparkles.js', // Sparkles in animation
            'js/snow.js', // Snow in animation
            'js/script.js'], // Main JS file
        complete: function(){
            jQuery(document).ready(function() {
                console.log("Browser detected");
                init();
            });
        }
    });
} else {
    yepnope({
        load: ['css/error.css'],
        complete: function(){
            jQuery(document).ready(function() {
                jQuery('body').html('<div id="alert"><img src="images/ie_dummy.jpg" alt=""><div id="alert_message">Please update your browser in order<br>to show animated version of this page.<br></div></div>');
            });
        }
    });
}
/* ]]> */
