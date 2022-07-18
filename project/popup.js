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

