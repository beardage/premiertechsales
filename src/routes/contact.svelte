<script>
	import Contact from "$lib/Forms/Contact.svelte";
</script>

<h1 class="text-secondary-800 text-center text-4xl font-headline my-16">Contact</h1>
<div class="grid md:grid-cols-2 gap-8 mt-16">
	<div class="order-1 md:order-2 mb-4">
		<h4 class="font-headline text-2xl">Office</h4>
		<p class="mb-6">
			Office Phone: <a href="tel:123.123.1234">123.123.1234</a><br />
			Office Fax: <a href="fax:321.321.4321">321.321.4321</a><br />
			Office Email:
			<a href="mailto:emmccullough@premiertechsales.com">emccullough@premiertechsales.com</a>
		</p>
		<h4 class="font-headline text-2xl">Jeff Beard</h4>
		<p>
			Phone: <a href="tel:602.799.8904">602.799.8904</a>
			<br />
			Email: <a href="mailto:jbeard@premiertechsales.com">jbeard@premiertechsales.com</a>
		</p>
	</div>
	<div class="order-2 md: order-1">
		<h2 class="text-2xl font-headline mb-2">Have an Inquiry?</h2>
		<p>Send us a message and we'll get back to you as soon as possible</p>
		<Contact/>
	</div>
</div>
