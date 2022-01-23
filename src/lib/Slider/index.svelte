<script>
	import { Swiper, SwiperSlide } from 'swiper/svelte';
	import { EffectFade } from 'swiper';

	import 'swiper/css';
	import 'swiper/css/effect-fade';
	import 'swiper/css/navigation';
	import 'swiper/css/pagination';
</script>

<Swiper navigation pagination modules={[EffectFade]} effect="fade">
	<SwiperSlide>Slide 1</SwiperSlide>
	<SwiperSlide>Slide 2</SwiperSlide>
	<SwiperSlide>Slide 3</SwiperSlide>
</Swiper>
