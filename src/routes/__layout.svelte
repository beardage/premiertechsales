<script context="module">
	export const load = async ({ url }) => ({
		props: { url }
	});
</script>

<script>
	import '../styles/tailwind-output.css';
	import Header from '$lib/Header/index.svelte';
	import Footer from '$lib/Footer/index.svelte';
	import PageTransition from '$lib/Transitions/PageTransition.svelte';
	export let url;
</script>

<Header />

<main>
	<PageTransition {url}>
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
			<slot />
		</div>
	</PageTransition>
</main>

<Footer />
