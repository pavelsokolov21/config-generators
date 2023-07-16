<script lang="ts">
	import { ConfigViewer } from '$components';

	const json = { a: 1, b: 2, foo: { c: 1, d: [] } };
</script>

<main>
	<div class="container">
		<section>configurator</section>
		<section>
			<ConfigViewer prefix="module.export = " {json} />
		</section>
	</div>
</main>

<style lang="scss">
	.container {
		display: grid;
		grid-template-columns: 1fr 1fr;
	}
</style>
