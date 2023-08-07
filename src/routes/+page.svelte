<script lang="ts">
	import { ConfigViewer } from '$components';

<<<<<<< Updated upstream
	const json = { a: 1, b: 2, foo: { c: 1, d: [] } };
=======
	const config = {
		entry: "path.resolve(__dirname, 'src/index.js')",
		output: { path: "path.resolve(__dirname, 'dist')", filename: 'bundle.js' }
	};
>>>>>>> Stashed changes
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
