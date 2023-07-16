<script lang="ts">
	import { ConfigViewer } from '$lib/components';

	const config = {
		entry: "path.resolve(__dirname, 'src/index.js')",
		output: { path: "path.resolve(__dirname, 'src/dist')", filename: 'bundle.js' }
	};
</script>

<header>
	<h1>Webpack configurator</h1>
</header>

<main>
	<div class="container">
		<section>configurator</section>
		<section>
			<ConfigViewer prefix="module.export = " json={config} filename="webpack.config.js" />
			<div class="install-command">
				<code>npm i -D webpack webpack-cli</code>
			</div>
		</section>
	</div>
</main>

<style lang="scss">
	.container {
		display: grid;
		grid-template-columns: 1fr 1fr;
	}

	.install-command {
		margin-top: 12px;
		padding: 12px 16px;
		border-radius: $borderRadiusMD;
		background: $primaryDark;
		color: $white;
	}
</style>
