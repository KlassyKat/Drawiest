<script lang="ts">
	import Tool from './Tool.svelte';
	import type { Tool as ToolType } from '../types';
	const tools: ToolType[] = ['pan', 'brush'];
</script>

<div class="toolkit">
	{#each tools as tool}
		<Tool />
	{/each}
</div>
