
//popUP REG

var popupLink_reg = document.querySelector('.popup__link_register');
var popup_reg = document.querySelector('.popup__register');
var closePopup_reg = document.querySelector('.popup__close_reg');
var input_reg = popup_reg.querySelector('input');

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

