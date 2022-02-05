<script>
	import '../styles/tailwind-output.css';
	import Header from '$lib/Header/index.svelte';
	import Footer from '$lib/Footer/index.svelte';
</script>

<Header />

<main>
	<div class=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
		<slot />
	</div>
</main>

<Footer />
