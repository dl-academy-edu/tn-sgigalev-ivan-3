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
