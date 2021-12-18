import * as Three from 'three';

export function init(el: HTMLElement, width: number, height: number) {
	let material: Three.Material;

	const scene = new Three.Scene();

	const camera = new Three.OrthographicCamera(
		0,
		width,
		0,
		height,
		-height,
		height
	);
	camera.lookAt(new Three.Vector3(0, 0, 0));

	const renderer = new Three.WebGLRenderer({ antialias: true });
	renderer.sortObjects = false;
	renderer.setPixelRatio(window.devicePixelRatio);
	renderer.setSize(width, height);

	el.appendChild(renderer.domElement);

	setup();
	render();

	function render() {
		requestAnimationFrame(render);
		renderer.render(scene, camera);
	}

	function setup() {
		material = new Three.LineBasicMaterial({
			color: 0xffffff,
			depthWrite: false,
			linewidth: 4,
		});
	}
}
