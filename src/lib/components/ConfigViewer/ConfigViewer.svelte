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
		<figcaption class="config__filename sides">{filename}</figcaption>
	{/if}
	<div class="config__code-wrapper sides">
		<code class="config__code" contenteditable="false" bind:innerHTML={content} />
	</div>
</figure>

<style lang="scss">
	.sides {
		padding: 0 16px;
	}

	.config {
		margin: 0;
		padding: 12px 0;
		border-radius: $borderRadiusMD;
		background-color: $primaryDark;
		color: $white;

		&__filename {
			padding-bottom: 8px;
			border-bottom: 1px solid $primaryGrey;
		}

		&__code-wrapper {
			padding-top: 8px;
		}

		&__code {
			outline: none;
		}
	}
</style>
