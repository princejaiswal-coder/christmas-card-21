// Declare variables
var logo, textbox, volume_stop, fade_counter, myMusicInstance, testInfo, orient, resized, rectShape;
var canvas, stage, comp, lib, dpr, exportRoot, fnStartAnimation, snowField, img_sparkle, sparkle_data;
var touchDetect = "";
var manifest = [];
var preload;
var percents;
var preloaderText = new createjs.Text("0%", "20px Arial", "#fff");

// Setup preloader
percents = document.createElement('percents_text');
percents.innerHTML = preloaderText.text;
percents.id = "percents";
document.getElementById('preloader').appendChild(percents);
var preloaderDiv = document.getElementById("preloader");
preloaderDiv.style.display = 'block'; // Show preloader

// Setup canvas and stage
function init() {
	dpr = window.devicePixelRatio || 1; // Get pixel ratio from device
	canvas = document.getElementById("canvas");
	canvas.style.width = document.body.clientWidth + "px";
	canvas.style.height = document.body.clientHeight + "px";
	comp = AdobeAn.getComposition("DA7524303D114749859021099F8E57B0");
	lib = comp.getLibrary();
	stage = new createjs.Stage(canvas);
	stage.canvas.width = document.body.clientWidth * dpr;
	stage.canvas.height = document.body.clientHeight * dpr;
	canvas.style.display = 'block'; // Show canvas
	window.addEventListener('resize', resize, false);
	setupManifest();
	startPreload();
}

function setupManifest() {
	manifest.push(
		{id:"img_sparkle", src:"images/spritesheet_sparkle.png", crossOrigin:true}
	);
	if (logo_enable) {
		manifest.push(
			{id:"logo", src:logo_path, crossOrigin:true}
		);
	}
	if (!mute_all) {
		manifest.push(
			{id:"myMusic", src:music_path, crossOrigin:true},
			{id:"Sound_In", src:sound_in_path, crossOrigin:true},
			{id:"Sound_Out", src:sound_out_path, crossOrigin:true}
		);
	}
}

function startPreload() {
	preload = new createjs.LoadQueue(false, null, true);
	preload.installPlugin(createjs.Sound);          
	preload.on("fileload", handleFileLoad);
	preload.on("progress", handleFileProgress);
	preload.on("complete", loadComplete);
	preload.on("error", loadError);
	preload.loadManifest(manifest);
}

function handleFileLoad(event) {
	console.log(event.item.type + " file was loaded");
	if(event.item.id == "img_sparkle"){
		//console.log("Logo loaded");
	}
}

function loadError(evt) {
	console.log("Error loading files!", evt.text);
}
 
function handleFileProgress(event) {
	preloaderText.text = "&nbsp&nbsp" + (preload.progress*100|0) + "%";
	percents.innerHTML = preloaderText.text;
}

function loadComplete(evt) {
	console.log("Loading finished");
	var preloaderDiv = document.getElementById("preloader");
	preloaderDiv.style.display = 'none'; // Hide preloader
	document.getElementById('canvas').classList.add("animation"); // Start fade-In animation from css
	exportRoot = new lib.index();
	stage = new lib.Stage(canvas);

	// Registers the "tick" event listener.
	fnStartAnimation = function() {
		stage.addChild(exportRoot);
		createjs.Ticker.setFPS(lib.properties.fps); // 25fps was in Flash animation
		createjs.Ticker.addEventListener("tick", stage);
	}

	AdobeAn.compositionLoaded(lib.properties.id);
	fnStartAnimation();

	// Media query for detect touch devices
	if(window.matchMedia("(any-hover: none)").matches) {
		touchDetect += "Touch device detected, disable mouse hover...";
		setTimeout(function () {touchDetect = "";}, 3000);
		console.log("Touch device detected, disable mouse hover...");
		stage.enableMouseOver(0);
	} else {
		stage.enableMouseOver(20);
	}

	// Show/hide center test marks
	if (center_page_mark_enable) {
		this.center = new lib.Center_Mark();
		stage.addChild(center);
		//exportRoot.main.center_mark.visible=false; // Remove second test mark
	} else {
		exportRoot.main.center_mark.visible=false;
	}

	// Show test info on screen
	if (show_test_info) {
		testInfo = new createjs.Text("FPS Counter", "15px Arial", "#FFF");
		testInfo.x = testInfo.y = 20;
		testInfo.scaleX = testInfo.scaleY = testInfo.scaleX * dpr; 
		stage.addChild(testInfo);
		createjs.Ticker.on("tick", showTestinfo);
	}

	// Initial setup
	exportRoot.bckgrnd.visible=false;
	exportRoot.main.main2.snow_mc.box.visible=false;
	exportRoot.main.main2.snow_mc.snow.visible=false;

	// On-Off buttons setup
	exportRoot.main.button_off.visible = false;
	
	// Start functions
	reColor();
	snowField = addSnow();
	addLogo();
	addSparkles();
	addHints();
	addText();
	resize();
	//touchHandler(); // For touch detection on devices
	handleAnimation();
	stage.update();
}

// Test info on screen
function showTestinfo() {
	testInfo.text = createjs.Ticker.getMeasuredFPS().toFixed(2) + " fps, "
	+ dpr + " dpr,"
	+ "\n"
	+ "\nwindow.screen.width: "  + window.screen.width + " * " + window.screen.height
	+ "\ndocument.documentElement.clientWidth: " + document.documentElement.clientWidth + " * " + document.documentElement.clientHeight
	+ "\ndocument.body.clientWidth: " + document.body.clientWidth + " * " + document.body.clientHeight
	+ "\nwindow.innerWidth: " + window.innerWidth + " * " + window.innerHeight
	+ "\ncanvas.width: " + canvas.width + " * " + canvas.height
	+ "\ncanvas.clientWidth: " + canvas.clientWidth + " * " + canvas.clientHeight
	+ "\ncanvas.offsetWidth: " + canvas.offsetWidth + " * " + canvas.offsetHeight
	+ "\ncanvas.style.width: " + canvas.style.width + " * " + canvas.style.height
	+ "\nstage.canvas.width: " + stage.canvas.width + " * " + stage.canvas.height
	+ "\norientation: " + orient
	+ "\ntouch: " + touchDetect
	+ "\nstage: " + resized
	+ "\nqueries scale: " + multiple_animation;
}

// Add logo to movieclip on stage
function addLogo(evt) {
	if (logo_enable) {
		var image = preload.getResult("logo"); // Get file from preloader by ID 
		var logo = new createjs.Bitmap(image);
		logo.regX = logo.image.width / 2 - logo_x;
		logo.regY = logo.image.height / 2 - logo_y;
		logo.scaleX = logo.scaleY = logo_scale/100;
		exportRoot.main.main2.logo.logocontainer.addChild(logo);
		stage.update();
	}
}

// Add text message and button
function addText(event) {

	// Text
	var txt = new createjs.Text();
	txt.font = textbox_font;
	txt.color = textbox_color;
	txt.alpha = "1";
	txt.text = textbox_message;
	txt.lineWidth = textbox_linewidth;
	txt.lineHeight = textbox_lineheight;
	txt.textBaseline = textbox_baseline;
	txt.textAlign = textbox_align;

	// Container for all elements
	var all = new createjs.Container();
	all.regX = exportRoot.main.main2.txtblock.width / 2;
	all.regY = exportRoot.main.main2.txtblock.height / 2;
	all.x = textbox_x;
	all.y = textbox_y;
	all.scaleX = all.scaleY = textbox_scale/100;
	all.addChild(txt);
	
	// Button
	setTimeout(function () { // Used timeout for text rendering and bounds measure
		if (button_enable) {
			var font = button_font;
			var caption1 = button_text;
			var caption2 = button_text_hover;
			var btxt = new createjs.Text();
			btxt.textAlign = "center";
			btxt.textBaseline = "middle";
			btxt.text = caption1;
			btxt.color = button_text_color;
			btxt.font = font;
			var rect = new createjs.Rectangle(
				0,
				0,
				Math.round(btxt.getBounds().width) + button_margin_x,
				Math.round(btxt.getBounds().height) + button_margin_y
			); // x, y, w, h
			btxt.x = rect.width / 2;
			btxt.y = rect.height / 2;
			var button_container = new createjs.Container();
			button_container.regX = rect.width / 2;
			button_container.regY = rect.height / 2;
			button_container.x = rect.x;
			button_container.y = Math.round(txt.getBounds().height) + button_space;
			rectShape = new createjs.Shape();
			rectShape.graphics
				.clear()
				.beginFill(button_fill_color)
				.drawRoundRect(
					0,
					0,
					rect.width,
					rect.height,
					+button_rounded * (rect.height / 2)
				); // x, y, w, h, radius
			button_container.addChild(rectShape, btxt);
			all.addChild(button_container);
		}

		// Add elements to card
		exportRoot.main.main2.txtblock.addChild(all);

		// Button functions
		if (button_enable) {
			rectShape.cursor="pointer";
			rectShape.addEventListener("mouseover", function() {
				btxt.text = caption2;
				btxt.color = button_text_color_hover;
				rectShape.graphics
					.clear()
					.beginFill(button_fill_color_hover)
					.drawRoundRect(
						button_container.regX -
							(Math.round(btxt.getBounds().width) + button_margin_x) / 2,
						0,
						Math.round(btxt.getBounds().width) + button_margin_x,
						rect.height,
						+button_rounded * (rect.height / 2)
					);
			} );
			rectShape.addEventListener("mouseout", function() {
				btxt.text = caption1;
				btxt.color = button_text_color;
				rectShape.graphics
					.clear()
					.beginFill(button_fill_color)
					.drawRoundRect(
						0,
						0,
						rect.width,
						rect.height,
						+button_rounded * (rect.height / 2)
					);
			} );
			rectShape.addEventListener("click", function() {
				btxt.color = button_text_color;
				rectShape.graphics
					.clear()
					.beginFill(button_fill_color)
					.drawRoundRect(
						0,
						0,
						rect.width,
						rect.height,
						+button_rounded * (rect.height / 2)
					);
				if (stop_animation_on_button_click) {
					setTimeout(function () {StopAnimation();}, 3700);
				}
				window.open(button_url, button_url_target);
				console.log("Button was clicked");
			} );
		}
	}, 200); // End timeout function
}

// Hint tooltips text settings
function addHints() {
	var txtOn = new createjs.Text();
	var txtOff = new createjs.Text();
	txtOn.font = "normal 29px miso-regular";
	txtOn.color = "#ffffff";
	txtOn.alpha = "0.3";
	txtOn.text = "Click me!";
	txtOn.x = -40;
	txtOn.y = 17;
	txtOff.font = "normal 29px miso-regular";
	txtOff.color = "#ffffff";
	txtOff.alpha = "0.3";
	txtOff.text = "Click me!";
	txtOff.x = -40;
	txtOff.y = 17;
	exportRoot.main.main2.hint_on.hint_on_container.addChild(txtOn);
	exportRoot.main.main2.hint_off.hint_off_container.addChild(txtOff);
}

// Add sparkles spritesheet
function addSparkles() {
	sparkle_data = {
		images: [preload.getResult("img_sparkle")], //'this' is a reference to the loaded image
		frames: {
			width: 21,
			height: 23,
			regX: 10,
			regY: 11
		}
	};
	sprite = new createjs.Sprite(new createjs.SpriteSheet(sparkle_data));
	spkls = new createjs.Container();
	spkls.x = exportRoot.main.regX-258;
	spkls.y = exportRoot.main.regY-820;
	spkls.scaleX = 1*1.3;
	spkls.scaleY = 1.66*1.3;
}

// Click listeners for start/stop animation
function handleAnimation(event) {
	exportRoot.main.button_on.cursor="pointer";
	exportRoot.main.button_off.cursor="pointer";
	exportRoot.main.button_on.addEventListener("click", StartAnimation);
	exportRoot.main.button_off.addEventListener("click", StopAnimation);
}

// Start animation
function StartAnimation() {
	
	// Setup On-Off button hint areas
	exportRoot.main.button_on.visible = false;
	setTimeout(function () {exportRoot.main.button_off.visible = true;}, 3700);  // Timeouted start
	exportRoot.main.main2.gotoAndPlay('in');
	setTimeout(function () {exportRoot.main.gotoAndPlay('in');}, 200); // Timeouted start

	// Start snow
	exportRoot.main.main2.snow_mc.addChild(snowField);
	createjs.Ticker.addEventListener("tick", tickSnow);

	// Start sparkles
	setTimeout(function () {exportRoot.main.addChild(spkls);}, 3700);
	setTimeout(function () {createjs.Ticker.addEventListener("tick", tickSparkle);}, 3700);

	// Start music and sounds
	if (!mute_all) {
		StartSounds();
	}
	console.log("Animation started");
}

// Stop animation
function StopAnimation() {
		
	// Stop sparkles
	setTimeout(function () {createjs.Ticker.removeEventListener("tick", tickSparkle);}, 200);
	setTimeout(function () {exportRoot.main.removeChild(spkls);}, 200);
	//setTimeout(function () {spkls.visible = false;}, 200);

	// Stop snow
	setTimeout(function () {this.createjs.Ticker.removeEventListener("tick", tickSnow);}, 1300);
	setTimeout(function () {exportRoot.main.main2.snow_mc.removeChild(snowField);}, 1300);

	// Play out animations and stop
	exportRoot.main.button_off.visible = false;
	setTimeout(function () {exportRoot.main.button_on.visible = true;}, 1400); // Timeouted start
	exportRoot.main.main2.gotoAndPlay('out');

	// Stop music and sounds
	if (!mute_all) {
		StopSounds(); 
	}
	console.log("Animation stopped");
}

// Start music and sound
function StartSounds() {
	if (!mute_all) {
		if (music_loop) {
			console.log("Sound started");
			myMusicInstance = createjs.Sound.play("myMusic", {interrupt: createjs.Sound.INTERRUPT_ANY, loop:-1}); // Play looped music
			createjs.Sound.play("Sound_In"); //Play sound fx
		} else {
			myMusicInstance = createjs.Sound.play("myMusic", {interrupt: createjs.Sound.INTERRUPT_ANY, loop:-0}); // Play music once
			createjs.Sound.play("Sound_In"); // Play sound fx
			//createjs.Sound.play("myMusic"); // Play music once
		}
	}
}

// Stop music and sound
function StopSounds() {
	if (!mute_all) {
		console.log("Sound stopped");
		volume_stop = 100;
		createjs.Ticker.addEventListener("tick", tickSound); // Fade out music
		//createjs.Sound.stop("myMusic"); // Stop music immidiately
		createjs.Sound.play("Sound_Out"); // Play sound fx after animation end
	}
}

// Music out fader
function tickSound(event) {
	if (volume_stop>1) {
		volume_stop -= 4;
		myMusicInstance.volume = Math.round((volume_stop/100)*100)/100;
		//console.log("Volume fader:", myMusicInstance.volume);
	} else {
		console.log("Volume fader stopped at", myMusicInstance.volume);
		this.createjs.Ticker.removeEventListener("tick", tickSound);
	}
}

// Elements positioning when resize browser
function resize() {

	resizeResponsive();
	canvas.style.width = document.body.clientWidth + "px";
	canvas.style.height = document.body.clientHeight + "px";

	var w = document.body.clientWidth * dpr;
	var h = document.body.clientHeight * dpr;

	stage.canvas.width = w;
	stage.canvas.height = h;

	// Main animation positioning
	exportRoot.main.x = w / 2 + (main_animation_x);// * multiple_animation);
	exportRoot.main.y = h / 2 + (main_animation_y);// * multiple_animation);
	exportRoot.main.scaleX = (main_animation_scale/100 * dpr) * multiple_animation;
	exportRoot.main.scaleY = exportRoot.main.scaleX * 0.6; // Scale factor for orthographic projection

	// Orientation of user device
	if (window.innerWidth/window.innerHeight > 1) { 
		console.log("Orientation: Landscape");
		orient = "Landscape"; // Onscreen test info
	} else {
		console.log("Orientation: Portrait");
		orient = "Portrait"; // Onscreen test info
	}	

	// Center test mark positioning
	if (center_page_mark_enable) {
		this.center.x = window.innerWidth*dpr/2;
		this.center.y = window.innerHeight*dpr/2;
		console.log("Center mark position", this.center.x, this.center.y);
	}
	
	// Test info
	if (show_test_info) {
		resized = "Stage resized"; // Onscreen test info
		setTimeout(function () {resized = "";}, 1000);
	}

	stage.update();
}

// Touch function
function touchHandler() {
	document.addEventListener('touchstart', handleTouchStart, { passive: false });
	document.addEventListener('touchmove', handleTouchMove, { passive: false });
	document.addEventListener('touchend', handleTouchEnd, { passive: false });
	//document.addEventListener('touchcancel', handleTouchCancel, { passive: false });

	function handleTouchStart(event) {
		//event.preventDefault(); // Prevent browser from reacting along with touch
		var touch = event.touches[0];
		console.log("Touch start detected");
		touchDetect += "Start "; setTimeout(function () {touchDetect = "";}, 500);
		// Put code here
	}

	function handleTouchMove(event) {
		//event.preventDefault(); // Prevent browser from reacting along with touch
		var touch = event.touches[0];
		console.log("Touch move detected");
		touchDetect += "Move "; setTimeout(function () {touchDetect = "";}, 500);
		// Put code here
	}

	function handleTouchEnd(event) {
		//event.preventDefault(); // Prevent browser from reacting along with touch
		var touch = event.touches[0];
		console.log("Touch end detected");
		touchDetect += "End "; setTimeout(function () {touchDetect = "";}, 500);
		// Put code here
	}
	/*
	function handleTouchCancel(event) {
		//event.preventDefault(); // Prevent browser from reacting along with touch
		var touch = event.touches[0];
		console.log("Touch cancel detected");
		touchDetect += "Cancel "; setTimeout(function () {touchDetect = "";}, 500);
		// Put code here
	}
	*/
}

// jQuery version
//$('#whatever').on({ 'touchstart' : function(){ /* do something... */ } });