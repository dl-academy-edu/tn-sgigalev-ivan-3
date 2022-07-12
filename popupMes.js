
//popUP mes

var popupLink_mes = document.querySelector('.popup__link_message');
var popup_mes = document.querySelector('.popup__message');
var closePopup_mes = document.querySelector('.popup__close_mes');
var input_mes = popup_mes.querySelector('input');

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

