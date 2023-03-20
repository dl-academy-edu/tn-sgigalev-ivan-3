//Common constants
const API = 'https://academy.directlinedev.com'
const contentNode = document.querySelector('.content')
const userId = localStorage.getItem('userId')
const token = localStorage.getItem('token')

//Commons functions

const checkMail = (emailField) => {
	return mailCheck = emailField.match(/^[0-9a-z-\.]+\@[0-9a-z-]{2,}\.[a-z]{2,}$/i);
}

//-----------------------------------------

let togglePopup = (popup, btn, closeBtn) => {
	btn.addEventListener('click', () => {
		popup.classList.add('popup_open');
	})
	closeBtn.addEventListener('click', () => {
		popup.classList.remove('popup_open');
	})

	window.addEventListener('keydown', function (event) {
		if (event.code === "Escape" && popupReg.classList.contains('popup_open')) {
			popupReg.classList.remove('popup_open');
			popupLinkReg.focus();
		}
		document.body.style.overflow = 'visible'
	})
}

//------------------------------------------

const createError = (message, validation) => {
	const messageError = document.createElement('div')
	messageError.innerHTML = `<span class="message-error-${validation}">${message}</span>`
	return messageError
}

//------------------------------------------

const setError = (input, errorMessage) => {
	let message = 'invalid'
	let error = createError(errorMessage, message)
	input.classList.add('popup-input-invalid')
	input.insertAdjacentElement('afterEnd', error)
	input.addEventListener('input', () => {
		error.remove()
		input.classList.remove('popup-input-invalid')
		message = 'valid'
	}, { once: true })
}

const checkInputs = (instantFormData, objData, objErrors, rootOfInputs) => {
	for (let [key, value] of instantFormData) {
		if (key == 'popupRegisterEmail') {
			if (!checkMail(value))
				objErrors[key] = 'Please enter a valid email address (your entry is not in the format "somebody@example.com")'
			setError(rootOfInputs[key], objErrors[key])
		} else if (!value) {
			objErrors[key] = 'This field is required'
			setError(rootOfInputs[key], objErrors[key])
		} else {
			if (key !== 'popupRegisterAgreement') {
				objErrors[key] = 'All right'
				rootOfInputs[key].classList.add('popup-input-valid')
				setError(rootOfInputs[key], objErrors[key])
				objData[key] = value
			}
		}
	}
}

//Popup-message

const popupLinkMes = document.querySelector('.footer__button-message');
const popupMes = document.querySelector('.popup-message');
const closePopupMes = document.querySelector('.popup-btn-mes');
const inputMes = popupMes.querySelector('input');

togglePopup(popupMes, popupLinkMes, closePopupMes)


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

//Response form
const getResponseForm = (result) => {
	const sendForm = document.createElement('div')
	let text = ''
	let textStyle = ''
	sendForm.classList.add('content-form')
	sendForm.classList.add('content-form-active')
	if (result == 'ok') {
		text = 'Form has been sent successfully'
		textStyle = 'content-form-text'
	} else {
		textStyle = 'content-form-text-negative'
		text = 'The form was sent but the server transmits an error: “The form was sent but the server transmits an error”'
	}
	sendForm.innerHTML = `<p class="text-general ${textStyle}">${text}
	<button class="popup-btn-response" type="button">
	<svg width="25" height="25">
		<use xlink:href="/img/svg.svg#popup-close" />
	</svg>
</button>
	</p>`
	contentNode.insertAdjacentElement('beforebegin', sendForm)
	setTimeout(() => {
		sendForm.classList.remove('content-form-active')
		sendForm.remove()
	}, 2000)
}

