//Popup-register

const popupLinkReg = document.querySelector('.header__link-register');
const popupReg = document.querySelector('.popup-register');
const closepopupReg = document.querySelector('.popup-btn-reg-close');
const inputReg = popupReg.querySelector('input');
const popupRegButton = document.querySelector('.popup-button-reg');
const registerForm = document.forms.popupRegister;

popupLinkReg.addEventListener('click', function () {
	popupReg.classList.add('popup_open');
	inputReg.focus();
})

closepopupReg.addEventListener('click', function () {
	popupReg.classList.remove('popup_open');
	popupLinkReg.focus();
})

window.addEventListener('keydown', function (event) {
	if (event.code === "Escape" && popupReg.classList.contains('popup_open')) {
		popupReg.classList.remove('popup_open');
		popupLinkReg.focus();
	}
	document.body.style.overflow = 'visible'
})

//Don't know how to automatizate function below and don't work checking visibleOfValidation


registerForm.addEventListener('submit', (e) => {
	e.preventDefault()
	let errors = {}
	let visibleOfValidation = false

	const inputEmail = registerForm.popupRegisterEmail
	const inputName = registerForm.popupRegisterName
	const inputSurname = registerForm.popupRegisterSurname
	const inputPassword = registerForm.popupRegisterPassword
	const inputRepeate = registerForm.popupRegisterRepeat
	const inputLocation = registerForm.popupRegisterLocation
	const inputAge = registerForm.popupRegisterAge
	const inputAgreement = registerForm.popupRegisterAgreement

	const formData = new FormData(registerForm)
	const email = formData.get('popupRegisterEmail')
	const name = formData.get('popupRegisterName')
	const surname = formData.get('popupRegisterSurname')
	const password = formData.get('popupRegisterPassword')
	const repeat = formData.get('popupRegisterRepeat')
	const location = formData.get('popupRegisterLocation')
	const age = formData.get('popupRegisterAge')
	const agreement = formData.get('popupRegisterAgreement')

	const checkMail = (emailField) => {
		return mailCheck = emailField.match(/^[0-9a-z-\.]+\@[0-9a-z-]{2,}\.[a-z]{2,}$/i);
	}

	const createError = (message) => {
		const messageError = document.createElement('div')
		messageError.innerHTML = `<span class="message-error-invalide">${message}</span>`
		return messageError
	}

	const setError = (input, errorMessage) => {
		const error = createError(errorMessage)
		input.classList.add('popup-input-invalid')
		input.insertAdjacentElement('afterEnd', error)
		input.addEventListener('input', () => {
			error.remove()
			input.classList.remove('popup-input-invalid')
			visibleOfValidation = true
		}, { once: true })
	}

	if (agreement == null) {
		return false
	}
	if (!checkMail(email)) {
		errors.email = 'Please enter a valid email address (your entry is not in the format "somebody@example.com")'
		if (!visibleOfValidation) {
			setError(inputEmail, errors.email)
		}
	}
	if (name.length < 1) {
		errors.name = 'This field is required'
		setError(inputName, errors.name)
	}
	if (surname.length < 1) {
		errors.surname = 'This field is required'
		setError(inputSurname, errors.name)
	}
	if (password.length < 1) {
		errors.password = 'This field is required'
		setError(inputPassword, errors.name)
	}
	if (repeat.length < 1) {
		errors.repeat = 'Passwords are not the same'
		setError(inputRepeate, errors.name)
	}
	if (location.length < 1) {
		errors.password = 'This field is required'
		setError(inputLocation, errors.name)
	}
	if (age.length < 1) {
		errors.age = 'This field is required'
		setError(inputAge, errors.name)
	}
})
