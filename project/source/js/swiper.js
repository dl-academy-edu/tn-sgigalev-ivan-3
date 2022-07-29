import Swiper, { Navigation, Pagination } from 'swiper';
// import Swiper and modules styles


// init Swiper:
const swiper = new Swiper('.swiper', {
	// configure Swiper to use modules
	modules: [Navigation, Pagination],
});