import type { Tool } from '../types';
import { startBrush, useBrush } from './tools/brush';

export function init(el: HTMLElement, width: number, height: number) {
	const containerDimensions = el.getBoundingClientRect();
	const offset = { x: containerDimensions.left, y: containerDimensions.top };
	const canvas = document.createElement('canvas');
	canvas.width = width;
	canvas.height = height;
	canvas.style.position = 'absolute';
	canvas.style.top = '0';
	canvas.style.left = '0';
	const ctx = canvas.getContext('2d');
	el.appendChild(canvas);

	load();
	function load() {
		ctx.fillStyle = '#000';
		ctx.fillRect(0, 0, width, height);
		setTool('brush');
	}

	// Action Handling
	let mousePressed: boolean = false;
	let mouseX: number = 0;
	let mouseY: number = 0;
	let pMouseX: number = 0;
	let pMouseY: number = 0;
	let pressure: number = 0;

	function setMouse(e: MouseEvent) {
		pMouseX = mouseX;
		pMouseY = mouseY;
		mouseX = e.clientX - offset.x;
		mouseY = e.clientY - offset.y;
	}
	function setPen(e: TouchEvent) {
		pMouseX = mouseX;
		pMouseY = mouseY;
		mouseX = e.touches[0].clientX - offset.x;
		mouseY = e.touches[0].clientY - offset.y;
		pressure = e.touches[0].force;
	}

	function setTool(tool: Tool) {
		switch (tool) {
			case 'brush':
				ctx.lineCap = 'round';
				ctx.lineJoin = 'round';
				ctx.lineWidth = 5;
				ctx.fillStyle = '#fff';
				ctx.strokeStyle = '#fff';
		}
	}

	function startTool(tool: Tool) {
		switch (tool) {
			case 'brush':
				startBrush(mouseX, mouseY, ctx, pressure);
		}
	}

	function useTool(tool: Tool) {
		switch (tool) {
			case 'brush':
				useBrush(mouseX, mouseY, ctx, pressure);
		}
	}

	// Event Listeners
	el.addEventListener('mousedown', (e) => {
		setMouse(e);
		mousePressed = true;
		// TODO: set tool
		startTool('brush');
		el.addEventListener('mousemove', mouseMove);
	});

	el.addEventListener('touchstart', (e) => {
		e.preventDefault();
		setPen(e);
		mousePressed = true;
		startTool('brush');
		el.addEventListener('touchmove', penMove);
	});

	function mouseMove(e: MouseEvent) {
		if (!mousePressed) return;
		setMouse(e);
		// TODO: set tool
		useTool('brush');
	}

	function penMove(e: TouchEvent) {
		if (!mousePressed) return;
		e.preventDefault();
		setPen(e);
		// TODO: set tool
		useTool('brush');
	}

	el.addEventListener('mouseup', (e) => {
		mousePressed = false;
		el.removeEventListener('mousemove', mouseMove);
	});
	el.addEventListener('touchend', (e) => {
		mousePressed = false;
		el.removeEventListener('touchmove', penMove);
	});
}
