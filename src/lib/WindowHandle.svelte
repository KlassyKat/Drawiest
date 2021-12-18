<script lang="ts">
	import { appWindow } from '@tauri-apps/api/window';
</script>

<div class="window-handle">
	<span class="title" data-tauri-drag-region>Drawiest</span>
	<span class="drag-region" data-tauri-drag-region />
	<span class="buttons">
		<span class="minimize-btn" on:click={() => appWindow.minimize()}>
			<svg viewBox="0 0 32 32" style="stroke-width:5">
				<line x1="0" y1="17" x2="32" y2="17" />
			</svg>
		</span>
		<span class="maximize-btn" on:click={() => appWindow.toggleMaximize()}>
			<svg viewBox="0 0 32 32">
				<rect x="0" y="4" width="29" height="7" />
				<rect x="0" y="4" width="4" height="24" />
				<rect x="0" y="24" width="29" height="4" />
				<rect x="28" y="4" width="4" height="24" />
			</svg>
		</span>
		<span class="close-btn" on:click={() => appWindow.close()}>
			<svg viewBox="0 0 32 32" style="stroke-width:5">
				<line x1="2" y1="2" x2="30" y2="30" />
				<line x1="2" y1="30" x2="30" y2="2" />
			</svg>
		</span>
	</span>
</div>

<style lang="scss">
	.window-handle {
		display: grid;
		width: 100%;
		grid-template-columns: auto 1fr auto;
		background-color: #050505;
		user-select: none;

		.title {
			padding: 0.5rem;
		}

		.buttons {
			display: grid;
			grid-template-columns: repeat(3, 32px);

			span {
				padding: 0.5rem;
				display: flex;
				align-items: center;
				cursor: pointer;

				&:hover {
					background-color: #666;
				}
			}
			.minimize-btn,
			.close-btn {
				stroke: #fff;
			}

			.maximize-btn {
				fill: #fff;
			}
		}
	}
</style>
