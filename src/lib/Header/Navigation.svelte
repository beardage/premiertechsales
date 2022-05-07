<script lang="ts">
	import { page } from '$app/stores';
	let mobileNavOpen = false;
	function toggleMobileNav() {
		mobileNavOpen = !mobileNavOpen;
	}
</script>

<div class="hidden w-auto flex-grow sm:ml-8 md:flex md:space-x-8 uppercase content-end justify-end">
	<a
		sveltekit:prefetch
		href="/about/"
		class="border-transparent text-light hover:text-secondary-50 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-semibold"
	>
		About
	</a>
	<a
		sveltekit:prefetch
		href="/line-card/"
		class="border-transparent text-light hover:text-secondary-50 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-semibold"
	>
		Line Card
	</a>
	<a
		sveltekit:prefetch
		href="/contact/"
		class="border-transparent text-light hover:text-secondary-50 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-semibold"
	>
		Contact
	</a>
</div>
<button
	type="button"
	id="mobileNavToggle"
	class="md:hidden inline-flex items-center justify-center p-2 rounded-md text-primary-800 hover:text-secondary-800 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-700"
	aria-controls="mobile-menu"
	aria-expanded="false"
	on:click={toggleMobileNav}
>
	<span class="sr-only">Open main menu</span>
	<svg
		class="block h-6 w-6"
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		stroke="currentColor"
		aria-hidden="true"
	>
		<path
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="2"
			d="M4 6h16M4 12h16M4 18h16"
		/>
	</svg>
	<svg
		class="hidden h-6 w-6"
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		stroke="currentColor"
		aria-hidden="true"
	>
		<path
			stroke-linecap="round"
			stroke-linejoin="round"
			stroke-width="2"
			d="M6 18L18 6M6 6l12 12"
		/>
	</svg>
</button>
