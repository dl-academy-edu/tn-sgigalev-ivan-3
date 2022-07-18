const sliderWrapper = document.querySelector('.slider__wrapper');
const innerSliderWrapper = document.querySelector('.slider__inner-wrapper');
const slides = document.querySelectorAll('.slider__slide');
const pagination = document.querySelector('.slider__pagination');
const buttonPrev = document.querySelector('.arrow_prev');
const buttonNext = document.querySelector('.arrow_next');
const slidesAmount = innerSliderWrapper.childElementCount;

let activeSlide = 1;

let slideWidth = +getComputedStyle(sliderWrapper).width.split('px')[0];

const updateStrCount = () => {
	+localStorage.getItem("activeSlide")

};


const addWidthToSlides = () => {
	for (slide of slides) {
		slide.style.width = `${slideWidth}px`
	}
}

const changeActiveSlide = (direction) => {
	innerSliderWrapper.style.transition = 'all 0.5s';
	const currentML = +innerSliderWrapper.style.marginLeft.split('px')[0];
	console.log(currentML)

	switch (direction) {
		case 'next':
			if (activeSlide < slidesAmount) {
				innerSliderWrapper.style.marginLeft = `${currentML - slideWidth}px`;
				changeActiveDot(activeSlide);
				activeSlide++;
				buttonPrev.removeAttribute('disabled');
				localStorage.setItem("activeSlide", activeSlide);
				updateStrCount();
			}

			if (activeSlide === slidesAmount) {
				buttonNext.setAttribute('disabled', true);
				return
			}
			break;

		case 'prev':
			if (activeSlide !== 1) {
				innerSliderWrapper.style.marginLeft = `${currentML + slideWidth}px`;
				activeSlide--;
				changeActiveDot(activeSlide - 1);
				buttonNext.removeAttribute('disabled');
				localStorage.setItem("activeSlide", activeSlide);
				updateStrCount();
			}

			if (activeSlide === 1) {
				buttonPrev.setAttribute('disabled', true);
			}

			break;

		default:
	}
}

const changeActiveDot = (index) => {
	const activeDot = document.querySelector('.slider__dot_active');
	activeDot.classList.remove('slider__dot_active');
	pagination.children[index].classList.add('slider__dot_active');
	if (index === 0) {
		buttonPrev.setAttribute('disabled', true);
		buttonNext.removeAttribute('disabled');
	}
	if (index === slidesAmount) {
		buttonNext.setAttribute('disabled', true);
		buttonPrev.removeAttribute('disabled');
	}
}

for (let i = 1; i <= slidesAmount; i++) {
	const dot = document.createElement('button');
	dot.classList.add(`index-${i}`);

	if (i === activeSlide) {
		dot.classList.add('slider__dot', 'slider__dot_active')
	}

	dot.classList.add('slider__dot')
	const currentSlideIndex = i - 1;
	dot.addEventListener('click', () => {
		innerSliderWrapper.style.marginLeft = `-${currentSlideIndex * slideWidth}px`
		changeActiveDot(currentSlideIndex);
	})

	pagination.insertAdjacentElement('beforeend', dot)
}

addWidthToSlides()
updateStrCount();

buttonNext.addEventListener('click', () => {
	changeActiveSlide('next');
}
)

buttonPrev.addEventListener('click', () => {
	changeActiveSlide('prev');
}
)

window.addEventListener('resize', () => {
	slideWidth = +getComputedStyle(sliderWrapper).width.split('px')[0];
	addWidthToSlides();
})

const swiper = new Swiper('.swiper', {
	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

}); 