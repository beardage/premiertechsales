<script context="module">
	export const load = async ({ url }) => ({
		props: { url }
	});
</script>

<script lang="ts">
	import '../styles/tailwind-output.css';
	import Header from '$lib/Header/index.svelte';
	import Footer from '$lib/Footer/index.svelte';
	import PageTransition from '$lib/Transitions/PageTransition.svelte';
	import MobileNavigation from '$lib/Header/MobileNavigation.svelte';
	export let url;

	let mobileNavOpen = false;
	function toggleMobileNav() {
		mobileNavOpen = !mobileNavOpen;
		console.log(mobileNavOpen);
	}
</script>

<MobileNavigation on:mobileNavToggle={toggleMobileNav} open={mobileNavOpen} />

<Header on:mobileNavToggle={toggleMobileNav} />

<main>
	<PageTransition {url}>
		{#if url.pathname === '/'}
			<slot />
		{:else}
			<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-36">
				<slot />
			</div>
		{/if}
	</PageTransition>
</main>

<Footer />
