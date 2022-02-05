<script>
	import Slider from '$lib/Slider/index.svelte';
	import { compute_slots } from 'svelte/internal';
</script>

<h1 class="text-secondary-800 text-center text-4xl font-serif my-16">Contact</h1>
<div class="grid md:grid-cols-2 gap-8 mt-16">
	<div class="order-2 md:order-1 my-4">
		<p class="mb-4">
			Office Phone: <a href="tel:123.123.1234">123.123.1234</a><br />
			Office Fax: <a href="fax:321.321.4321">321.321.4321</a><br />
			Office Email:
			<a href="mailto:emmccullough@premiertechsales.com">emccullough@premiertechsales.com</a>
		</p>
		<h4 class="font-bold text-xl">Jeff Beard</h4>
		<p>
			Phone: <a href="tel:602.799.8904">602.799.8904</a>
			<br />
			Email: <a href="mailto:jbeard@premiertechsales.com">jbeard@premiertechsales.com</a>
		</p>
	</div>
</div>
