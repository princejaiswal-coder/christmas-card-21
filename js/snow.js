// Snow variables
var snow_X = 130;
var snow_Y = 20;
var snow_W = 400;
var snow_H = 377;
var flakes = [];
var snow_options = {
	total: 30,
	wind: 0,
	speedmin: 1,
	speedmax: 4,
	amp: 2,
	freq: 10,
	minsize: 0.3,
	maxsize: 0.45
};

function updateSnow() {
	var l = flakes.length;
	for(var i=0;i<l;i++) {
		var flake = flakes[i];
		flake.rad += (flake.k / 180) * Math.PI;
		flake.x -= Math.cos(flake.rad)*snow_options.amp+flake.wind;
		flake.y += flake.speed;
		if (flake.y >= snow_H) {
			flake.y = -15 + snow_Y;
			flake.x = Math.random()*snow_W + snow_X;
		}
		
		if (flake.x >= 0 + snow_X + snow_H) {
			flake.x = snow_X + snow_H;
		}
		
		if (flake.x <= 0 + snow_X) {
			flake.x = snow_X;
		}
	}
}

function addSnow() {
	var container = new createjs.Container();
	for(var i=0;i<snow_options.total;i++) {
		var flake_color = '#FFFFFF';
		//var flake_color = '#'+(Math.random()*0xFFFFFF<<0).toString(16); // Random color
		var flake = drawFlake(4, 4, flake_color);
		flake.r = 1+Math.random()*snow_options.speedmin;
		flake.k = (-Math.PI+Math.random()*Math.PI)*snow_options.freq;
		flake.rad = 0;
		flake.speed = snow_options.speedmin+Math.random()*snow_options.speedmax;
		flake.wind = snow_options.wind;
		flake.scaleX = flake.scaleY = snow_options.minsize + Math.random()*snow_options.maxsize;
		flake.alpha = .5+Math.random()*1;
		flake.x = Math.random()*snow_W + snow_X;
		flake.y = Math.random()*snow_H + snow_Y;
		flake.y = 0;
		container.addChild(flake);
		flakes.push(flake);
	}
	return container;
}

function drawFlake(w, h, color) {
	var s = new createjs.Shape();
	s.width = w;
	s.height = h;
	s.graphics.beginFill(color).drawCircle(0, 0, w);
	// Cached bitmap version  
	//s.cache(-w, -h, w*2, h*2);
	//return new createjs.Bitmap(s.cacheCanvas);

	// Non-cached vector version
	return s;
}

function tickSnow(event) {
		updateSnow();
}