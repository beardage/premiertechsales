<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let open: boolean;
	const dispatch = createEventDispatcher();

	function closeNavigation() {
		dispatch('mobileNavToggle');
	}
</script>

<div
	class:translate-x-0={open}
	class:translate-x-full={!open}
	class="fixed top-0 bottom-0 right-0 w-3/4 bg-gray-50 z-[100] shadow-2xl transition-transform duration-200 ease-in-out"
>
	<button on:click={closeNavigation}>x</button>
</div>
