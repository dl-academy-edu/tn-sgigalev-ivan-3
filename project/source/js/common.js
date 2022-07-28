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
	input.focus();
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
