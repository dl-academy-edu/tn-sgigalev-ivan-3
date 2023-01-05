
//Popup-sign
const popupLinkSign = document.querySelector('.header__link-sign');
const popupSign = document.querySelector('.popup-sign');
const closePopup = document.querySelector('.popup-btn-sign');
const signForm = document.forms.popupLogin;

popupLinkSign.addEventListener('click', function () {
	popupSign.classList.add('popup_open');
	signForm.focus();
})

closePopup.addEventListener('click', function () {
	popupSign.classList.remove('popup_open');
	popupLinkSign.focus();
	document.body.style.overflow = 'visible'
})


window.addEventListener('keydown', function (event) {
	if (event.code === "Escape" && popupSign.classList.contains('popup-sign_open')) {
		popupSign.classList.remove('popup_open');
		popupLinkSign.focus();
	}
	document.body.style.overflow = 'visible'
})
