<script lang="ts">
	import { Transition } from "@rgossiaux/svelte-headlessui";
	import { createEventDispatcher } from 'svelte';

	export let open: boolean;
	const dispatch = createEventDispatcher();

	function closeNavigation() {
		dispatch('mobileNavToggle');
	}
</script>

<Transition
	show={open}
	enter="transition-translate duration-200"
	enterFrom="translate-x-full"
	enterTo="translate-x-0"
	leave="transition-translate duration-200"
	leaveFrom="opacity-x-0"
	leaveTo="opacity-x-full"
>
	<div class="fixed md:hidden top-0 bottom-0 right-0 w-3/4 bg-gray-50 z-[100] shadow-2xl">
		<button on:click={closeNavigation}>x</button>
	</div>
</Transition>
