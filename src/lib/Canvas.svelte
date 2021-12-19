<script lang="ts">
	import { onMount } from 'svelte';
	import { init } from '../drawing/main';
	let canvas: HTMLElement;

	onMount(() => {
		console.log('Canvas is a go');
		init(canvas, canvas.clientWidth, canvas.clientHeight);
	});
</script>

<div class="canvas" bind:this={canvas} />

<style lang="scss">
	.canvas {
		position: relative;
		height: 100%;
	}
</style>
