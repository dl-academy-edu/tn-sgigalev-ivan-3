//Ссылка на бэк

const BASE_SERVER_PATH = "https://academy.directlinedev.com";

function sendRequest({ url, method = 'GET', headers, body = null }) {
	return fetch(BASE_SERVER_PATH + url + '?v=1.0.0.', {
		method,
		headers,
		body,
	})
}

function rerenderLinks() {
	const loginButton = document.querySelector('.header__link-sign');
	const registerButton = document.querySelector('.header__link-register');
	const toProfileButton = document.querySelector('.header__link-profile');
	const isLogin = localStorage.getItem('token');

	if (isLogin) {
		toProfileButton.classList.remove('hidden');
		registerButton.classList.add('hidden')
		loginButton.classList.add('hidden')
	} else {
		toProfileButton.classList.add('hidden');
		registerButton.classList.remove('hidden')
		loginButton.classList.remove('hidden')
	}
}

//Popup-message

const popupLinkMes = document.querySelector('.footer__button-message');
const popupMes = document.querySelector('.popup-message');
const closePopupMes = document.querySelector('.popup-btn-mes');
const inputMes = popupMes.querySelector('input');

popupLinkMes.addEventListener('click', function () {
	popupMes.classList.add('popup_open');
	inputMes.focus();
})

closePopupMes.addEventListener('click', function () {
	popupMes.classList.remove('popup_open');
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

