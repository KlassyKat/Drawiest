<script lang="ts">
	import WindowHandle from './lib/WindowHandle.svelte';
</script>

<main>
	<div class="window-handle-wrapper">
		<WindowHandle />
	</div>
	<div class="top-bar-wrapper" />
	<div class="sidebar-wrapper" />
	<div class="canvas-wrapper" />
</main>

<style lang="scss">
	main {
		height: 100vh;
		display: grid;
		grid-template-columns: auto 1fr;
		grid-template-rows: auto auto 1fr;

		.window-handle-wrapper {
			grid-column: span 2;
		}
	}
</style>
