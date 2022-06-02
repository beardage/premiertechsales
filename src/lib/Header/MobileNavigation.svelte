<script lang="ts">
	import { Transition } from "@rgossiaux/svelte-headlessui";
	import { createEventDispatcher } from 'svelte';

	export let open: boolean;
	const dispatch = createEventDispatcher();

	function closeNavigation() {
		dispatch('mobileNavToggle');
	}

</script>

<div class:pointer-events-auto={open} class:pointer-events-none={!open} class="overflow-hidden fixed top-0 right-0 bottom-0 left-0 z-[100]">
		
	<Transition
		show={open}
		enter="transition ease-in-out duration-250 transform"
			enterFrom="translate-x-full"
			enterTo="translate-x-0"
			leave="transition ease-in-out duration-200 transform"
			leaveFrom="translate-x-0"
			leaveTo="translate-x-full"
	>
		<div class="fixed top-0 right-0 h-screen w-3/4 bg-gray-50 shadow-2xl z-[100]">
			<button on:click={closeNavigation}>
				<img class="w-5" src="times-solid.svg" alt="close menu"/>
			</button>
		</div>
	</Transition>
</div>
