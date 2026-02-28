document.addEventListener('DOMContentLoaded', function(){
	// Insert current year
	var y = document.getElementById('year');
	if(y) y.textContent = new Date().getFullYear();

	// Mobile nav toggle
	var navToggle = document.getElementById('nav-toggle');
	var nav = document.getElementById('primary-nav');
	if(navToggle && nav){
		navToggle.addEventListener('click', function(){
			var open = nav.classList.toggle('open');
			var expanded = open ? 'true' : 'false';
			navToggle.setAttribute('aria-expanded', expanded);
		});
	}
});

// three.js particle globe
function initGlobe(){
	var container = document.getElementById('globe');
	if(!container || typeof THREE === 'undefined') return;

	var width = container.clientWidth;
	var height = container.clientHeight;

	var scene = new THREE.Scene();
	var camera = new THREE.PerspectiveCamera(45, width/height, 0.1, 2000);
	camera.position.set(0,0,380);
	camera.lookAt(0,0,0);

	var renderer = new THREE.WebGLRenderer({alpha:true, antialias:true});
	renderer.setSize(width, height);
	renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
	container.innerHTML = '';
	container.appendChild(renderer.domElement);

	// particle sprite (radial gradient) using white only
	var sprite = (function(){
		var cvs = document.createElement('canvas');
		cvs.width = 64; cvs.height = 64;
		var ctx = cvs.getContext('2d');
		var grd = ctx.createRadialGradient(32,32,4,32,32,32);
		grd.addColorStop(0,'rgba(255,255,255,1)');
		grd.addColorStop(1,'rgba(255,255,255,0)');
		ctx.fillStyle = grd; ctx.fillRect(0,0,64,64);
		var tex = new THREE.CanvasTexture(cvs);
		return tex;
	})();

	var count = 9000;
	var geometry = new THREE.BufferGeometry();
	var positions = new Float32Array(count*3);
	var colors = new Float32Array(count*3);
	var base = new Float32Array(count*3);

	var radius = 140;
	for(var i=0;i<count;i++){
		// distribute points around sphere with some noise
		var u = Math.random();
		var v = Math.random();
		var theta = 2 * Math.PI * u;
		var phi = Math.acos(2*v - 1);
		var r = radius + (Math.random()-0.5)*8;
		var x = r * Math.sin(phi) * Math.cos(theta);
		var y = r * Math.sin(phi) * Math.sin(theta);
		var z = r * Math.cos(phi);
		var i3 = i*3;
		positions[i3] = x; positions[i3+1] = y; positions[i3+2] = z;
		base[i3] = x; base[i3+1] = y; base[i3+2] = z;

		// all white
		colors[i3] = 1.0; colors[i3+1] = 1.0; colors[i3+2] = 1.0;
	}

	geometry.setAttribute('position', new THREE.BufferAttribute(positions,3));
	geometry.setAttribute('color', new THREE.BufferAttribute(colors,3));

	var material = new THREE.PointsMaterial({
		size: 3.6,
		map: sprite,
		vertexColors: true,
		transparent: true,
		blending: THREE.AdditiveBlending,
		depthTest: false,
		sizeAttenuation: true
	});

	var points = new THREE.Points(geometry, material);
	scene.add(points);

	// subtle directional light (for color reference)
	var light = new THREE.DirectionalLight(0xffffff, 0.3);
	light.position.set(1,1,1);
	scene.add(light);

	// speed multiplier for animation (1 = normal, 3 = 3x faster)
	var timeScale = 3.0;
	var lastTime = performance.now();
	var accum = 0;
	var dir = 1; // 1 = forward, -1 = reverse

	// reverse animation when hovering the globe
	container.addEventListener('pointerenter', function(){ dir = -1; });
	container.addEventListener('pointerleave', function(){ dir = 1; });

	function animate(){
		var now = performance.now();
		var delta = (now - lastTime) * 0.001 * timeScale * dir;
		accum += delta;
		lastTime = now;
		var t = accum;
		var pos = geometry.attributes.position.array;
		for(var i=0;i<count;i++){
			var i3 = i*3;
			var bx = base[i3], by = base[i3+1], bz = base[i3+2];
			// displacement using combined sines for organic motion
			// keep X fixed to remove horizontal movement
			var d = 1 + Math.sin((bx+by+zLength(bx,by,bz))*0.02 + t*1.25 + i)*0.9;
			pos[i3]   = bx; // no horizontal translation
			// allow vertical and depth subtle motion for organic look
			pos[i3+1] = by + Math.cos(t*0.85 + i*0.0009)*4 + (by/radius)*Math.cos(t*1.3 + i*0.0012)*2;
			pos[i3+2] = bz + Math.sin(t*1.1 + i*0.0005)*4 + (bz/radius)*Math.sin(t*1.7 + i*0.0008)*1.5;
		}
		geometry.attributes.position.needsUpdate = true;

		// keep globe static (no rotation) to avoid any horizontal motion
		points.rotation.y = 0;
		points.rotation.x = 0;

		renderer.render(scene, camera);
		requestAnimationFrame(animate);
	}

	function onWindowResize(){
		var w = container.clientWidth; var h = container.clientHeight;
		camera.aspect = w / h; camera.updateProjectionMatrix();
		renderer.setSize(w,h);
	}
	window.addEventListener('resize', onWindowResize);
	requestAnimationFrame(animate);

	// small helper
	function zLength(x,y,z){ return Math.sqrt(x*x + y*y + z*z); }
}

// initialize globe after load
document.addEventListener('DOMContentLoaded', function(){
	setTimeout(initGlobe, 120); // small delay to ensure container sizing
});

