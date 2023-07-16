<script lang="ts">
	import type { Optional } from '$lib/interfaces';
	import { prettyJSON } from '$lib/utils';

	export let json: Record<string, unknown>;
	export let prefix: Optional<string> = '';
	export let filename: Optional<string> = undefined;

	let content = `${prefix}${prettyJSON(json)}`;
</script>

<figure class="config">
	{#if !!filename}
		<figcaption class="config__filename">{filename}</figcaption>
	{/if}
	<div class="config__code-wrapper">
		<code class="config__code" contenteditable="false" bind:innerHTML={content} />
	</div>
</figure>

<style lang="scss">
	.config {
		&__filename {
			margin-bottom: 12px;
		}

		&__code-wrapper {
			padding: 16px;
			border-radius: 8px;
			background-color: rgb(42, 42, 42);
		}

		&__code {
			color: white;
			outline: none;
		}
	}
</style>
