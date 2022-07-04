//popUP
var popupLink = document.querySelector('.popup__link_sign');
var popup = document.querySelector('.popup__sign');
var closePopup = document.querySelector('.popup__close');
var input = popup.querySelector('input');

console.log(popup);

console.log(popupLink);

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
	console.log(event.code);
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

console.log(popup_reg);

console.log(popupLink_reg);

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
	console.log(event.code);
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

console.log(popup_mes);

console.log(popupLink_mes);

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
	console.log(event.code);
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


console.log(burger);

console.log(burgerButton);

burgerButton.addEventListener('click', function () {
	burger.classList.add('header__mobile_open');
})

closeBurger.addEventListener('click', function () {
	burger.classList.remove('header__mobile_open');
	document.body.style.overflow = 'visible'
})

window.addEventListener('keydown', function (event) {
	console.log(event.code);
	if (event.code === "Escape" && burger.classList.contains('header__mobile_open')) {
		burger.classList.remove('header__mobile_open');
	}
	document.body.style.overflow = 'visible'
})


//scroll


let buttonToTop = document.querySelector('.scroll__button');

window.addEventListener('scroll', trackScroll);

buttonToTop.addEventListener('click', backToTop);

buttonToTop.log(buttonToTop);

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