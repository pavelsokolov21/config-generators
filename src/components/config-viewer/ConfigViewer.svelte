<script lang="ts">
	import type { Optional } from '$interfaces';
	import { prettyJSON } from '$utils';

	export let json: Record<string, unknown>;
	export let prefix: Optional<string> = '';

	let content = `${prefix}${prettyJSON(json)}`;
</script>

<div class="config">
	<code class="config__code" contenteditable="false" bind:innerHTML={content} />
</div>

<style lang="scss">
	.config {
		padding: 16px;
		border-radius: 8px;
		background-color: rgb(42, 42, 42);

		&__code {
			color: white;
			outline: none;
		}
	}
</style>
