//popUP
var popupLink = document.querySelector('.popup__link_sign');
var popup = document.querySelector('.popup__sign');
var closePopup = document.querySelector('.popup__close');
var input = popup.querySelector('input');

popupLink.addEventListener('click', function () {
	popup.classList.add('popup__sign_open');
	input.focus();
})

closePopup.addEventListener('click', function () {
	popup.classList.remove('popup__sign_open');
	popupLink.focus();
	document.body.style.overflow = 'visible'
})


window.addEventListener('keydown', function (event) {
	if (event.code === "Escape" && popup.classList.contains('popup__sign_open')) {
		popup.classList.remove('popup__sign_open');
		popupLink.focus();
	}
	document.body.style.overflow = 'visible'
})


//popUP REG

var popupLink_reg = document.querySelector('.popup__link_register');
var popup_reg = document.querySelector('.popup__register');
var closePopup_reg = document.querySelector('.popup__close_reg');
var input_reg = popup.querySelector('input');

popupLink_reg.addEventListener('click', function () {
	popup_reg.classList.add('popup__register_open');
	input.focus();
})

closePopup_reg.addEventListener('click', function () {
	popup_reg.classList.remove('popup__register_open');
	popupLink_reg.focus();
	document.body.style.overflow = 'visible'
})

window.addEventListener('keydown', function (event) {
	if (event.code === "Escape" && popup_reg.classList.contains('popup__register_open')) {
		popup_reg.classList.remove('popup__register_open');
		popupLink_reg.focus();
	}
	document.body.style.overflow = 'visible'
})


//popUP mes

var popupLink_mes = document.querySelector('.popup__link_message');
var popup_mes = document.querySelector('.popup__message');
var closePopup_mes = document.querySelector('.popup__close_mes');
var input_mes = popup.querySelector('input');

popupLink_mes.addEventListener('click', function () {
	popup_mes.classList.add('popup__message_open');
	input.focus();
})

closePopup_mes.addEventListener('click', function () {
	popup_mes.classList.remove('popup__message_open');
	popupLink_mes.focus();
	document.body.style.overflow = 'visible'
})


window.addEventListener('keydown', function (event) {
	if (event.code === "Escape" && popup_mes.classList.contains('popup__message_open')) {
		popup_mes.classList.remove('popup__message_open');
		popupLink_mes.focus();
	}
	document.body.style.overflow = 'visible'
})


//burger menu

var burger = document.querySelector('.header__mobile');
var burgerButton = document.querySelector('.burger__button');
var closeBurger = document.querySelector('.burger__close');

burgerButton.addEventListener('click', function () {
	burger.classList.add('header__mobile_open');
})

closeBurger.addEventListener('click', function () {
	burger.classList.remove('header__mobile_open');
	document.body.style.overflow = 'visible'
})

window.addEventListener('keydown', function (event) {
	if (event.code === "Escape" && burger.classList.contains('header__mobile_open')) {
		burger.classList.remove('header__mobile_open');
	}
	document.body.style.overflow = 'visible'
})


//scroll


let buttonToTop = document.querySelector('.scroll__button');

window.addEventListener('scroll', trackScroll);

buttonToTop.addEventListener('click', backToTop);

function trackScroll() {
	var scrolled = window.pageYOffset;
	var coords = document.documentElement.clientHeight;

	if (scrolled > coords) {
		buttonToTop.classList.add('scroll__button_open');
	}
	if (scrolled < coords) {
		buttonToTop.classList.remove('scroll__button_open');
	}
}

function backToTop() {
	if (window.pageYOffset > 0) {
		window.scrollBy(0, -80);
		setTimeout(backToTop, 15);
	}
}

//Validation Form

const formSign = document.forms[0];

formSign.addEventListener("submit", (event) => {
	event.preventDefault();

	const inputSign = formSign.querySelectorAll('input');

	const dataForServer = {};

	for (input of inputSign) {
		dataForServer[input.name] = input.value;
	}

	console.log(dataForServer);
});


//Form-register

const formRegister = document.forms[1];

formRegister.addEventListener("submit", (event) => {
	event.preventDefault();

	const agreement = formRegister.querySelector(`[name ="agreement"]`)
	const textsRegister = formRegister.querySelector(`[type='text']`)
	const passwordRegister = formRegister.querySelector(`[type='password']`)
	const emailRegister = formRegister.querySelector(`[type='email']`)
	const numberRegister = formRegister.querySelector(`[type='number']`)

	function isEmail(email) {
		return email.match(/^[0-9a-z-\.]+\@[0-9a-z-]{2,}\.[a-z]{2,}$/i);
	}

	function isPhone(phone) {
		return phone.match(/^[0-9a-z-\.]+\@[0-9a-z-]{2,}\.[a-z]{2,}$/i);
	}

	function setError(inputRegister, errorMessage) {
		const error = errorCreator(errorMessage);
		inputRegister.classList.add('is-invalid');
		inputRegister.insertAdjacentElement('afterend', error);
	}

	function errorCreator(message) {
		let messageError = document.createElement('div');
		messageError.classList.add('invalid-feedback');
		messageError.innerText = message;
		return messageError;
	}

	let error = {};

	if (!agreement.checked) {
		error.agreement = ' Пожалуйста, подтвердите соглашение!'
	}

	if (!isEmail(emailRegister.value)) {
		error.emailRegister = 'Please enter a valid email address (your entry is not in the format "somebody@example.com")'
	}

	if (passwordRegister.value.length < 6) {
		error.passwordRegister = 'Пароль слишком короткий!'
	}

	if (Object.keys(error).length) {
		console.log(error);
		Object.keys(error).forEach(key => {
			const messageError = error[key];
			const input = formRegister.elements[key];
			setError(input, messageError);
		})
		console.log(errorCreator(error.emailRegister));
		return;
	}

	const inputRegister = formRegister.querySelectorAll('input');
	const dataForServer = {};
	for (input of inputRegister) {
		dataForServer[input.name] = input.checked
			? input.checked
			: input.value;
	}

	console.log(dataForServer);
});


//Slider

const sliderWrapper = document.querySelector('.slider__wrapper');
const innerSliderWrapper = document.querySelector('.slider__inner-wrapper');
const slides = document.querySelectorAll('.slider__slide');
const pagination = document.querySelector('.slider__pagination');

const buttonPrev = document.querySelector('.arrow_prev');
const buttonNext = document.querySelector('.arrow_next');
const slidesAmount = innerSliderWrapper.childElementCount;

let activeSlide = 1;

const slideWidth = +getComputedStyle(sliderWrapper).width.split('px')[0];

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
				activeSlide++;
				buttonPrev.removeAttribute('disabled');
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
				buttonNext.removeAttribute('disabled');
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
}

for (let i = 1; i <= slidesAmount; i++) {
	const dot = document.createElement('button');
	dot.classList.add(`index - ${i}`);

	if (i === activeSlide) {
		dot.classList.add('slider__dot', 'slider__dot_active')
	}

	dot.classList.add('slider__dot')
	const currentSlideIndex = i - 1;
	dot.addEventListener('click', () => {
		innerSliderWrapper.style.marginLeft = `- ${currentSlideIndex * slideWidth}px`
		changeActiveDot(currentSlideIndex);
	})

	pagination.insertAdjacentElement('beforeend', dot)
}

addWidthToSlides()

buttonNext.addEventListener('click', () => {
	changeActiveSlide('next');
}
)

buttonPrev.addEventListener('click', () => {
	changeActiveSlide('prev');
}
)

const swiper = new Swiper('.swiper', {
	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	pagination: {
		el: '.swiper-pagination',
		type: 'fraction',
	},
});