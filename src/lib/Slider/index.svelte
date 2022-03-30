<script>
	import { Swiper, SwiperSlide } from 'swiper/svelte';
	import { EffectFade, Navigation, Pagination } from 'swiper';

	import 'swiper/css';
	import 'swiper/css/effect-fade';
	import 'swiper/css/navigation';
	import 'swiper/css/pagination';
</script>

<Swiper
	navigation
	pagination
	slidesPerView={1}
	modules={[EffectFade, Navigation, Pagination]}
	effect="fade"
>
	<SwiperSlide>
		<img
			alt="military"
			src="http://premiertechsales.com/wp-content/uploads/2015/12/pts-military-2-0x0.jpg"
		/>
	</SwiperSlide>
	<SwiperSlide>
		<img
			alt="commercial"
			src="http://premiertechsales.com/wp-content/uploads/2015/12/pts-commercial-avionics-0x0.jpg"
		/>
	</SwiperSlide>
	<SwiperSlide>
		<img
			alt="space"
			src="http://premiertechsales.com/wp-content/uploads/2015/12/pts-space-0x0.jpg"
		/>
	</SwiperSlide>
</Swiper>
