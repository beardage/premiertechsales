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
			alt="military"
			src="slider/pts-apache-2k.jpg"
			/>
		<div class="slide-content absolute bottom-0 left-0 p-4 bg-primary-800 text-gray-100">
			<h2 class="text-2xl mb-2">Military</h2>
			<p>A wide range of products supporting our troops from Communications to Defense.</p>
		</div>
	</SwiperSlide>
	<SwiperSlide>
		<img
			alt="commercial"
			src="slider/pts-plane-2k.jpg"
			/>
		<div class="slide-content absolute bottom-8 left-4 p-4">
			<h2 class="text-4xl mb-2 bg-primary-800 text-gray-50 inline-block">Commercial</h2>
			<p class="bg-primary-800 text-gray-50">Products ranging from reference designs in the consumer market, through commercial avionics.</p>
		</div>
	</SwiperSlide>
	<SwiperSlide>
		<img
			alt="space"
			src="slider/pts-satellite-2k.jpg"
		/>
		<div class="slide-content absolute bottom-0 left-0 p-4 bg-primary-800 text-gray-100">
			<h2 class="text-2xl mb-2">Space</h2>
			<p>Premier works with OEM Design Engineers on a wide array of products supporting the Space Markets.</p>
		</div>
	</SwiperSlide>
</Swiper>
