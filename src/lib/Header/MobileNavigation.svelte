<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let open: boolean;
	const dispatch = createEventDispatcher();

	function closeNavigation() {
		dispatch('mobileNavToggle');
	}
</script>

<div
	class:block={open}
	class:hidden={!open}
	class="absolute top-0 bottom-0 right-0 w-3/4 bg-gray-50 z-[100]"
>
	<button on:click={closeNavigation}>x</button>
</div>
