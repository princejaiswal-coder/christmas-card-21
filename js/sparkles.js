var imgSeq = new Image(); // The image for the sparkle animation
var sprite; // The animated sparkle template to clone
var spkls; // Container for all the sparkles
var container_x = 200;
var container_y = 200;

function tickSparkle(event) {
	// loop through all of the active sparkles on stage:
	var l = spkls.numChildren;
	var m = event.delta / 18;
	for (var i = 0; i < l; i++) {
		var sparkle = spkls.getChildAt(i);
		if (--sparkle.life <= 0) {
			spkls.removeChild(sparkle);
			i--;
			l--;
			continue;
		}
		// Apply gravity and friction
		sparkle.vY += 0.07 * m;
		
		// Update position, scale, and alpha:
		sparkle.x += sparkle.vX * m;
		sparkle.y += sparkle.vY * m;
		sparkle.alpha = sparkle.alphaStart * (sparkle.life / sparkle.lifeMax);
		
		// Remove sparkles that are off screen or invisible
		if (sparkle.y > 400) {
			sparkle.vY *= -(Math.random() * 0.01 + 0.1);
			sparkle.vX += Math.cos(Math.random() * Math.PI * 0.2) * 0.3;
			sparkle.vY *= 0.9;
		}
		if (sparkle.x > 400 || sparkle.x < 0) {
			//sparkle.vX *= -0.6;
			spkls.removeChild(sparkle);
			i--;
			l--;
			continue;
		}
		if (sparkle.alpha < 0.05) {
			spkls.removeChild(sparkle);
			i--;
			l--;
			continue;
		}
	}
	addingSparkles((Math.random() * 0.5 + 5) | 0, container_x, container_y, 0.2);
}

function addingSparkles(count, x, y, speed) {
	for (var i = 0; i < count; i++) {
		// Clone the original sparkle, so we don't need to set shared properties:
		var sparkle = sprite.clone();
		// Set display properties:
		sparkle.x = x;
		sparkle.y = y;
		//sparkle.rotation = Math.random()*360;
		sparkle.alpha = sparkle.alphaStart = Math.random() * 5 + 0.05;
		sparkle.scaleX = sparkle.scaleY = Math.random() + 0.2;
		sparkle.life = sparkle.lifeMax = Math.random() * 10 + 10;
		// Set up velocities:
		var a = Math.PI * 2 * Math.random();
		var v = (Math.random() - 0.5) * 30 * speed;
		sparkle.vX = Math.cos(a) * v;
		sparkle.vY = Math.sin(a) * v;
		// Start the animation on a random frame:
		sparkle.gotoAndPlay(
			(Math.random() * sparkle.spriteSheet.getNumFrames()) | 0
		);
		spkls.addChild(sparkle);
	}
}