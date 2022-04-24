<script>
	import { Swiper, SwiperSlide } from 'swiper/svelte';
	import { EffectFade, Navigation, Pagination } from 'swiper';

	import 'swiper/css';
	import 'swiper/css/effect-fade';
	import 'swiper/css/navigation';
</script>

<Swiper
	navigation
	slidesPerView={1}
	modules={[EffectFade, Navigation, Pagination]}
	effect="fade"
>
	<SwiperSlide>
		<img
			class="object-cover"
			alt="military"
			src="http://premiertechsales.com/wp-content/uploads/2015/12/pts-military-2-0x0.jpg"
		/>
		<div class="slide-content absolute bottom-0 left-0 p-4 bg-primary-800 text-gray-100">
			<h2 class="text-2xl mb-2">Military</h2>
			<p>A wide range of products supporting our troops from Communications to Defense.</p>
		</div>
	</SwiperSlide>
	<SwiperSlide>
		<img
			alt="commercial"
			src="http://premiertechsales.com/wp-content/uploads/2015/12/pts-commercial-avionics-0x0.jpg"
		/>
		<div class="slide-content absolute bottom-0 left-0 p-4 bg-primary-800 text-gray-100">
			<h2 class="text-2xl mb-2">Commercial</h2>
			<p>Products ranging from reference designs in the consumer market, through commercial avionics.</p>
		</div>
	</SwiperSlide>
	<SwiperSlide>
		<img
			alt="space"
			src="http://premiertechsales.com/wp-content/uploads/2015/12/pts-space-0x0.jpg"
		/>
		<div class="slide-content absolute bottom-0 left-0 p-4 bg-primary-800 text-gray-100">
			<h2 class="text-2xl mb-2">Space</h2>
			<p>Premier works with OEM Design Engineers on a wide array of products supporting the Space Markets.</p>
		</div>
	</SwiperSlide>
</Swiper>
