// Responsive media queries
var multiple_animation = 1; // Main animation scale factor

// iPhone X landscape
var iphone = window.matchMedia('only screen and (min-device-width: 375px) and (max-device-height: 812px) and (orientation: landscape) and (-webkit-device-pixel-ratio: 3)');

// iPad Pro 12.9" landscape
var ipad_l = window.matchMedia('only screen and (min-device-width: 1024px) and (max-device-height: 1366px) and (orientation: landscape) and (-webkit-min-device-pixel-ratio: 2)');
var ipad_p = window.matchMedia('only screen and (min-device-width: 1024px) and (max-device-height: 1366px) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 2)');

// Samsung Galaxy S9+ landscape
var samsung = window.matchMedia('only screen and (min-device-width: 360px) and (max-device-height: 1366px) and (orientation: landscape) and (-webkit-min-device-pixel-ratio: 4)');

// Google Pixel 3 landscape
var google = window.matchMedia('only screen and (min-device-width: 412px) and (max-device-height: 846px) and (orientation: landscape) and (-webkit-min-device-pixel-ratio: 3)');

// Tablets, Ipads
var D5 = window.matchMedia('only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) and (-webkit-device-pixel-ratio: 1)');
var D6 = window.matchMedia('only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) and (-webkit-device-pixel-ratio: 2)');
var D4 = window.matchMedia('only screen and (min-width: 768px) and (max-width: 1024px) and (orientation: portrait)');

// Large desktops
var D0 = window.matchMedia('only screen and (min-width: 2560px)');
var D1 = window.matchMedia('only screen and (min-width: 1824px) and (max-width: 2559px)');

// Desktops and laptops
var D2 = window.matchMedia('only screen and (min-width: 1280px) and (max-width: 1823px)');
var D3 = window.matchMedia('only screen and (min-width: 1025px) and (max-width: 1280px)');

// Low resolution tablets, mobiles
var D7 = window.matchMedia('only screen and (min-width: 481px) and (max-width: 767px) and (orientation: portrait)');
var D8 = window.matchMedia('only screen and (min-device-width: 481px) and (max-device-width: 767px) and (orientation: landscape)');

// Smartphones, mobiles
var D9 = window.matchMedia('only screen and (min-width: 320px) and (max-width: 480px) and (orientation: portrait)');
var D10 = window.matchMedia('only screen and (min-device-width: 320px) and (max-device-width: 480px) and (orientation: landscape)');

// Responsive scale corrections
function resizeResponsive() {

   // iPhone X landscape
    if (iphone.matches) {
	  multiple_animation = 0.46; // 0.37
	  console.log("Scale: " + multiple_animation);
   } else if (ipad_l.matches || ipad_p.matches) {
		// iPad Pro 12.9"
      multiple_animation = 1; // 0.9
      console.log("Scale: " + multiple_animation);
   } else if (samsung.matches) {
		// Samsung Galaxy S9+
      multiple_animation = 0.4; // 0.4
      console.log("Scale: " + multiple_animation);
   } else if (google.matches) {
		// Google Pixel 3
      multiple_animation = 0.4; // 0.4
      console.log("Scale: " + multiple_animation);
	  
   // Tablets, Ipads
   } else if (D4.matches) {
      multiple_animation = 0.85; // 0.85
      console.log("Scale: " + multiple_animation);
   } else if (D5.matches) {
      multiple_animation = 0.85; // 0.8
      console.log("Scale: " + multiple_animation);
   } else if (D6.matches) {
      multiple_animation = 0.85; // 0.8
      console.log("Scale: " + multiple_animation);
	
	// Large desktops
   } else if (D0.matches) {
	  multiple_animation = 1.2; // 1.15
      console.log("Scale: " + multiple_animation);
   } else if (D1.matches) {
      multiple_animation = 1; // 0.9
      console.log("Scale: " + multiple_animation);

   // Desktops and laptops
   } else if (D2.matches) {
      multiple_animation = 0.9; // 0.85
      console.log("Scale: " + multiple_animation);
   } else if (D3.matches) {
      multiple_animation = 0.9; // 0.85
      console.log("Scale: " + multiple_animation);

   // Low resolution tablets, mobiles
   } else if (D7.matches) {
      multiple_animation = 0.6; // 0.65
      console.log("Scale: " + multiple_animation);
   } else if (D8.matches) {
      multiple_animation = 0.5; // 0.4
      console.log("Scale: " + multiple_animation);

   // Smartphones, mobiles
   } else if (D9.matches) {
      multiple_animation = 0.46; // 0.46
      console.log("Scale: " + multiple_animation);
   } else if (D10.matches) {
      multiple_animation = 0.46; // 0.4
      console.log("Scale: " + multiple_animation);
   }
}
