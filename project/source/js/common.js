//Popup-sign
var popupLinkSign = document.querySelector('.header__link-sign');
var popupSign = document.querySelector('.popup-sign');
var closePopup = document.querySelector('.popup-sign__btn');
var inputSign = popupSign.querySelector('input');

popupLinkSign.addEventListener('click', function () {
	popupSign.classList.add('popup-sign_open');
	inputSign.focus();
})

closePopup.addEventListener('click', function () {
	popupSign.classList.remove('popup-sign_open');
	popupLinkSign.focus();
	document.body.style.overflow = 'visible'
})


window.addEventListener('keydown', function (event) {
	if (event.code === "Escape" && popupSign.classList.contains('popup-sign_open')) {
		popupSign.classList.remove('popup-sign_open');
		popupLinkSign.focus();
	}
	document.body.style.overflow = 'visible'
})

//Popup-register

var popupLinkReg = document.querySelector('.header__link-register');
var popupReg = document.querySelector('.popup-register');
var closepopupReg = document.querySelector('.popup-register__btn');
var inputReg = popupReg.querySelector('input');

popupLinkReg.addEventListener('click', function () {
	popupReg.classList.add('popup-register_open');
	inputReg.focus();
})

closepopupReg.addEventListener('click', function () {
	popupReg.classList.remove('popup-register_open');
	popupLinkReg.focus();
	document.body.style.overflow = 'visible'
})

window.addEventListener('keydown', function (event) {
	if (event.code === "Escape" && popupReg.classList.contains('popup-register_open')) {
		popupReg.classList.remove('popup-register_open');
		popupLinkReg.focus();
	}
	document.body.style.overflow = 'visible'
})

//Popup-message

var popupLinkMes = document.querySelector('.popup__link-message');
var popupMes = document.querySelector('.popup-message');
var closePopupMes = document.querySelector('.popup-message__btn');
var inputMes = popupMes.querySelector('input');

popupLinkMes.addEventListener('click', function () {
	popupMes.classList.add('popup-message_open');
	inputMes.focus();
})

closePopupMes.addEventListener('click', function () {
	popupMes.classList.remove('popup-message_open');
	popupLinkMes.focus();
	document.body.style.overflow = 'visible'
})


window.addEventListener('keydown', function (event) {
	if (event.code === "Escape" && popupMes.classList.contains('popup-message_open')) {
		popupMes.classList.remove('popup-message_open');
		popupLinkMes.focus();
	}
	document.body.style.overflow = 'visible'
})

//burger menu

const burgerButton = document.querySelector('.main__burger-button');
const closeBurger = document.querySelector('.header__close');
const headerRow = document.querySelector('.header__row');
const headerClose = document.querySelector('.header__close');


burgerButton.addEventListener('click', function () {
	headerRow.classList.add('header__row-open');
})

burgerButton.addEventListener('click', function () {
	headerClose.classList.add('header__close-open');
})

closeBurger.addEventListener('click', function () {
	headerRow.classList.remove('header__row-open');
	document.body.style.overflow = 'visible'
})

window.addEventListener('keydown', function (event) {
	if (event.code === "Escape" && headerRow.classList.contains('header__row-open')) {
		headerRow.classList.remove('header__row-open');
	}
	document.body.style.overflow = 'visible'
})


//scroll


let buttonToTop = document.querySelector('.main-scroll-button');

window.addEventListener('scroll', trackScroll);

buttonToTop.addEventListener('click', backToTop);

function trackScroll() {
	var scrolled = window.pageYOffset;
	var coords = document.documentElement.clientHeight;

	if (scrolled > coords) {
		buttonToTop.classList.add('main-scroll-button_open');
	}
	if (scrolled < coords) {
		buttonToTop.classList.remove('main-scroll-button_open');
	}
}

function backToTop() {
	if (window.pageYOffset > 0) {
		window.scrollBy(0, -80);
		setTimeout(backToTop, 15);
	}
}

//Form-register

const form = document.forms[1];


form.addEventListener("submit", (event) => {
	event.preventDefault();

	const agreement = form.querySelector(`[name ="agreement"]`)
	const text = form.querySelector(`[type='text']`)
	const password = form.querySelector(`[type='password']`)
	const email = form.querySelector(`[type='email']`)
	const number = form.querySelector(`[type='number']`)
	const input = form.querySelectorAll('input');
	const name = form.querySelector('#popup-register-name');

	function isEmail(email) {
		return email.match(/^[0-9a-z-\.]+\@[0-9a-z-]{2,}\.[a-z]{2,}$/i);
	}

	function isPhone(phone) {
		return phone.match(/^[0-9a-z-\.]+\@[0-9a-z-]{2,}\.[a-z]{2,}$/i);
	}

	function setError(input, errorMessage) {
		const error = errorCreator(errorMessage);
		input.classList.add('is-invalid');
		input.insertAdjacentElement('afterend', error);
	}

	function errorCreator(message) {
		let messageError = document.createElement('div');
		messageError.classList.add('invalid-feedback');
		messageError.innerText = message;
		return messageError;
	}

	let error = {};

	if (!isEmail(email.value)) {
		error.email = 'Please enter a valid email address (your entry is not in the format "somebody@example.com")'
	}

	if (password.value.length < 6) {
		error.password = 'Пароль слишком короткий!'
	}

	if (name.value.length < 1) {
		error.name = 'This field is required'
	}

	if (Object.keys(error).length) {
		console.log(error);
		Object.keys(error).forEach(key => {
			const messageError = error[key];
			const input = form.elements[key];
			setError(input, messageError);
		})
		console.log(errorCreator(error.email));
		return;
	}


	const dataForServer = {};
	for (input of inputs) {
		dataForServer[input.name] = input.checked
			? input.checked
			: input.value;
	}

	console.log(dataForServer);
});
