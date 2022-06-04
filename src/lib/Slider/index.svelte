<script>
	import { Swiper, SwiperSlide } from 'swiper/svelte';
	import { EffectFade, Navigation, Pagination } from 'swiper';

	import 'swiper/css';
	import 'swiper/css/effect-fade';
	import 'swiper/css/navigation';
</script>

<Swiper class="max-h-screen relative"  navigation slidesPerView={1} modules={[EffectFade, Navigation, Pagination]} effect="fade">
	<SwiperSlide class="max-h-screen relative">
		<img alt="military" src="slider/pts-apache-2k.jpg" />
		<div
			class="slide-content absolute bottom-8 left-0 right-0 w-full max-w-7xl mx-auto px-12 lg:px-8 "
		>
			<h2 class="text-xl md:text-4xl mb-2 bg-primary-800 text-gray-50 inline-block p-2">
				Military
			</h2>
			<br />
			<p class="text-xs md:text-base inline-block bg-primary-800 text-gray-50 p-2">
				A wide range of products supporting our troops from Communications to Defense.
			</p>
		</div>
	</SwiperSlide>
	<SwiperSlide class="max-h-screen relative">
		<img alt="commercial" src="slider/pts-plane-2k.jpg" />
		<div
			class="slide-content absolute bottom-8 left-0 right-0 w-full max-w-7xl mx-auto px-12 lg:px-8 "
		>
			<h2 class="text-xl md:text-4xl mb-2 bg-primary-800 text-gray-50 inline-block p-2">
				Commercial
			</h2>
			<br />
			<p class="text-xs md:text-base inline-block bg-primary-800 text-gray-50 p-2">
				Products ranging from reference designs in the consumer market, through commercial
				avionics.
			</p>
		</div>
	</SwiperSlide>
	<SwiperSlide class="max-h-screen relative">
		<img alt="space" src="slider/pts-satellite-2k.jpg" />
		<div
			class="slide-content absolute bottom-8 left-0 right-0 w-full max-w-7xl mx-auto px-12 lg:px-8"
		>
			<h2 class="text-xl md:text-4xl mb-2 bg-primary-800 text-gray-50 inline-block p-2">
				Space
			</h2>
			<br />
			<p class="text-xs md:text-base inline-block bg-primary-800 text-gray-50 p-2">
				Premier works with OEM Design Engineers on a wide array of products supporting the
				Space Markets.
			</p>
		</div>
	</SwiperSlide>
	<SwiperSlide class="max-h-screen relative">
		<img alt="communications" src="slider/pts-antennae-2k.jpg" />
		<div
			class="slide-content absolute bottom-8 left-0 right-0 w-full max-w-7xl mx-auto px-12 lg:px-8"
		>
			<h2 class="text-xl md:text-4xl mb-2 bg-primary-800 text-gray-50 inline-block p-2">
				Communications
			</h2>
			<br />
			<p class="text-xs md:text-base inline-block bg-primary-800 text-gray-50 p-2">
				We work with engineers to bridge customers to services, no matter the distance. 
			</p>
		</div>
	</SwiperSlide>
</Swiper>
