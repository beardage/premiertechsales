<script lang="ts">
	import { Transition } from "@rgossiaux/svelte-headlessui";

	let displaySuccessMessage = false; 
	
	async function handleSubmit(event) {
		let myForm = document.getElementById("contact-form");
		let formData = new FormData(myForm as HTMLFormElement);
		fetch("/", {
			method: "POST",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: formData
		})
			.then(() => showSuccessMessage())
			.catch((error) => console.log(error));
	}

	function showSuccessMessage () {
		let form = document.getElementById('contact-form') as HTMLFormElement;
		form.reset();
		displaySuccessMessage = true;	
		setTimeout(() => {
			displaySuccessMessage = false;
		}, 5000)
	}
</script>

<form
	data-netlify="true"
	netlify-honeypot="bot-field"
	name="contact-form"
	id="contact-form"
	class="w-full mt-10"
	on:submit|preventDefault={handleSubmit}
>
	<div />
	<div class="flex flex-wrap -mx-3 mb-6">
		<div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
			<label
				class="block uppercase tracking-wide text-gray-500 text-xs font-bold mb-2"
				for="firstname"
			>
				First Name
			</label>

			<input
				class="appearance-none block w-full bg-gray-50 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
				id="firstname"
				name="firstname"
				type="text"
				placeholder="Jane"
			/>
		</div>

		<div class="w-full md:w-1/2 px-3">
			<label
				class="block uppercase tracking-wide text-gray-500 text-xs font-bold mb-2"
				for="lastname"
			>
				Last Name
			</label>

			<input
				class="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
				id="lastname"
				name="lastname"
				type="text"
				placeholder="Doe"
			/>
		</div>
	</div>

	<div class="flex flex-wrap -mx-3 mb-6">
		<div class="w-full px-3">
			<label
				class="block uppercase tracking-wide text-gray-500 text-xs font-bold mb-2"
				for="email"
			>
				E-mail
			</label>

			<input
				class="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
				id="email"
				name="email"
				type="email"
			/>
		</div>
	</div>

	<div class="flex flex-wrap -mx-3 mb-6">
		<div class="w-full px-3">
			<label
				class="block uppercase tracking-wide text-gray-500 text-xs font-bold mb-2"
				for="message"
			>
				Message
			</label>

			<textarea
				class=" no-resize appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
				id="message"
				name="message"
			/>
		</div>
	</div>
	<input type="hidden" name="contact-form" value="website_contact_form" />
	<input class="hidden" type="text" name="bot-field" />
	<div class="md:flex md:items-center">
		<div class="md:w-1/3">
			<button
				class="shadow bg-primary-500 hover:bg-primary-600 focus:shadow-outline text-primary-100 font-bold py-2 px-4 rounded"
				type="submit"
			>
				Send
			</button>
		</div>

		<div class="md:w-2/3" />
	</div>
</form>

<Transition 
		show={displaySuccessMessage}
		enter="transition-opacity ease-in-out duration-250"
		enterFrom="opacity-0"
		enterTo="opacity-100"
		leave="transition-opacity ease-in-out duration-200"
		leaveFrom="opacity-0"
		leaveTo="opacity-100"
	>
		<div class="bg-primary-600 p-2 rounded my-4"><p class="text-light">Message was successfully submitted! We will be in touch shortly.</p></div>
	</Transition>

