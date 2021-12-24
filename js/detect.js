function cBrowser() {
	var ua = navigator.userAgent;
	var bName = function () {
		if (ua.search(/MSIE/) > -1) return "ie";
		if (ua.search(/Firefox/) > -1) return "firefox";
		if (ua.search(/Opera/) > -1) return "opera";
		if (ua.search(/Chrome/) > -1) return "chrome";
		if (ua.search(/Safari/) > -1) return "safari";
		if (ua.search(/Konqueror/) > -1) return "konqueror";
		if (ua.search(/Iceweasel/) > -1) return "iceweasel";
		if (ua.search(/SeaMonkey/) > -1) return "seamonkey";}();
	var version = function (bName) {
		switch (bName) {
			case "ie" : return (ua.split("MSIE ")[1]).split(";")[0];break;
			case "firefox" : return ua.split("Firefox/")[1];break;
			case "opera" : return ua.split("Version/")[1];break;
			case "chrome" : return (ua.split("Chrome/")[1]).split(" ")[0];break;
			case "safari" : return (ua.split("Version/")[1]).split(" ")[0];break;
			case "konqueror" : return (ua.split("KHTML/")[1]).split(" ")[0];break;
			case "iceweasel" : return (ua.split("Iceweasel/")[1]).split(" ")[0];break;
			case "seamonkey" : return ua.split("SeaMonkey/")[1];break;
		}
	}(bName);
	return {agent: bName, version: parseFloat(version)};
}

function loadScript(url) {
   var e = document.createElement("script");
   e.src = url;
   e.type="text/javascript";
   document.getElementsByTagName("head")[0].appendChild(e); 
}