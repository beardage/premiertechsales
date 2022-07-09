<script context="module">
    export const prerender = true;
</script>
<script>
	import Contact from '$lib/Forms/Contact.svelte';
</script>

<svelte:head>
	<title>Premier Technical Sales - Contact</title>
	<meta name="description" content="Premier Technical Sales contact information" />
</svelte:head>

<h1
	class="text-secondary-800 text-center text-2xl font-headline uppercase font-semibold tracking-[.2em] my-16"
>
	Contact
</h1>

<div class="grid md:grid-cols-2 gap-8 mt-16">
	<div class="order-1 md:order-2 mb-4">
		<h4 class="font-headline text-2xl mb-2">Office</h4>
		<p class="mb-2">Office Phone: <a class="ml-2" href="tel:480.772.5779">480.772.5779</a></p>
		<p class="mb-2">Office Email: <a class="ml-2" href="mailto:arockrich@premiertechsales.com">arockrich@premiertechsales.com</a>
		<div class="flex mb-6">
			<p class="inline-block">Address:</p>
			<div class="ml-2">
			3317 S Higley Road Suite 114 <br />
			Gilbert, AZ 85297
			</div>
		</div>
		<h4 class="font-headline text-2xl mb-2">Jeff Beard</h4>
		<p class="mb-2">Phone: <a class="ml-2" href="tel:602.370.6559">602.370.6559</a></p>
		<p class="mb-2">Email: <a  class="ml-2"href="mailto:jbeard@premiertechsales.com">jbeard@premiertechsales.com</a>
	</div>
	<div class="order-2 md:order-1">
		<h2 class="text-2xl font-headline mb-2">Have an Inquiry?</h2>
		<p>Send us a message and we'll get back to you as soon as possible</p>
		<Contact />
	</div>
</div>
