<script>
	import '../styles/tailwind-output.css';
	import Header from '$lib/Header/index.svelte';
	import Footer from '$lib/Footer/index.svelte';
</script>

<Header />

<main>
	<slot />
</main>

<Footer />
