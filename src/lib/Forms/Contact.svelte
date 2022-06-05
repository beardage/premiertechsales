<script lang="ts">
	import { Transition } from "@rgossiaux/svelte-headlessui";

	let displaySuccessMessage = false; 

	async function handleSubmit(event: any) {
		event.preventDefault();
		let myForm = document.getElementById("contact-form");
		let formData = new FormData(myForm as HTMLFormElement);
		console.log(new URLSearchParams(formData).toString());
		fetch("/", {
			method: "POST",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: new URLSearchParams(formData).toString(),
		})
			.then(() => showSuccessMessage())
			.catch((error) => console.log(error));
	}

	function showSuccessMessage () {
		let form = document.getElementById('contact-form') as HTMLFormElement;
		/* form.reset(); */
		displaySuccessMessage = true;	
		setTimeout(() => {
			displaySuccessMessage = false;
		}, 5000)
	}
</script>

<form
	data-netlify="true"
	method="POST"
	netlify-honeypot="bot-field"
	name="contact-form"
	id="contact-form"
	class="w-full mt-10"
	on:submit={handleSubmit}
>
	<div />
	<input type="hidden" name="form-name" value="contactForm" />
	<div class="flex flex-wrap -mx-3 mb-6">
		<div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
			<label
				class="block uppercase tracking-wide text-gray-500 text-xs font-bold mb-2"
				for="firstname"
			>
				First Name
			<input
				class="mt-2 appearance-none block w-full bg-gray-50 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
				id="firstname"
				name="firstname"
				type="text"
				placeholder="Jane"
			/>
			</label>

			
		</div>

		<div class="w-full md:w-1/2 px-3">
			<label
				class="block uppercase tracking-wide text-gray-500 text-xs font-bold mb-2"
				for="lastname"
			>
				Last Name

			<input
				class="mt-2 appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
				id="lastname"
				name="lastname"
				type="text"
				placeholder="Doe"
			/>

			</label>
		</div>
	</div>

	<div class="flex flex-wrap -mx-3 mb-6">
		<div class="w-full px-3">
			<label
				class="block uppercase tracking-wide text-gray-500 text-xs font-bold mb-2"
				for="email"
			>
				E-mail

			<input
				class="mt-2 appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
				id="email"
				name="email"
				type="email"
			/>

			</label>
		</div>
	</div>

	<div class="flex flex-wrap -mx-3 mb-6">
		<div class="w-full px-3">
			<label
				class="block uppercase tracking-wide text-gray-500 text-xs font-bold mb-2"
				for="message"
			>
				Message

			<textarea
				class="mt-2 no-resize appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
				id="message"
				name="message"
			/>

			</label>
		</div>
	</div>
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

