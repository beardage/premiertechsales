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
		enter="transition-opacity ease-in-out duration-250"
		enterFrom="opacity-0"
		enterTo="opacity-100"
		leave="transition-opacity ease-in-out duration-200"
		leaveFrom="opacity-0"
		leaveTo="opacity-100"
	>
		<button on:click={closeNavigation} class="bg-gray-800/80 fixed top-0 left-0 right-0 bottom-0"/>
	</Transition>
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
			<button class="absolute -left-8 top-2" on:click={closeNavigation}>
				<img class="w-5" src="times-solid.svg" alt="close menu"/>
			</button>
			<div class="border-b">
				<a 
					sveltekit:prefetch
					href="/"
					on:click={closeNavigation} 
				>
					<img class="w-3/5 m-auto py-6" src="pts-logo-dark.svg" alt="Premier Technical Sales Dark Logo"/>
				</a>
			</div>
			<ul class="text-center">
				<li>
					<a
						sveltekit:prefetch
						on:click={closeNavigation} 
						href="/about/"
						class="block uppercase text-primary-800 hover:bg-secondary-50 p-4 border-b text-sm font-semibold tracking-widest"
					>
						About
					</a>
				</li>
				<li>
					<a
						sveltekit:prefetch
						on:click={closeNavigation} 
						href="/line-card/"
						class="block uppercase text-primary-800 hover:bg-secondary-50 p-4 border-b text-sm font-semibold tracking-widest"
					>
						Line Card
					</a>
				</li>
				<li>
					<a
						sveltekit:prefetch
						on:click={closeNavigation} 
						href="/contact/"
						class="block uppercase text-primary-800 hover:bg-secondary-50 p-4 border-b text-sm font-semibold tracking-widest"
					>
						Contact
					</a>
				</li>
			</ul>
		</div>
	</Transition>
</div>
