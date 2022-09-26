//Popup-register

const popupLinkReg = document.querySelector('.header__link-register');
const popupReg = document.querySelector('.popup-register');
const closepopupReg = document.querySelector('.popup-btn-reg');
const inputReg = popupReg.querySelector('input');
const registerForm = document.forms.popupRegister;

function register(e) {
	e.preventDefault()
	let data = {};
	data.email = registerForm.popupRegisterEmail.value;
	data.name = registerForm.popupRegisterName.value;
	data.surname = registerForm.popupRegisterSurname.value;
	data.password = registerForm.popupRegisterPassword.value;
	data.repeat = registerForm.popupRegisterRepeat.value;
	data.location = registerForm.popupRegisterLocation.value;
	data.age = +registerForm.popupRegisterAge.value;
	data.agreement = registerForm.popupRegisterAgreement.value;
	sendRequest({
		method: 'POST',
		url: '/api/users',
		body: JSON.stringify(data),
		headers: {
			'Content-Type': 'application/json'
		}
	})
		.then(res => res.json())
		.then(res => {
			if (res.success) {
				popupReg.classList.remove('popup-register_open');
				alert(`Польльзователь c id ${res.data.id} и email ${res.data.email} создан`)

				registerForm.popupRegisterEmail.value = '';
				registerForm.popupRegisterName.value = '';
				registerForm.popupRegisterSurname.value = '';
				registerForm.popupRegisterPassword.value = '';
				registerForm.popupRegisterRepeat.value = '';
				registerForm.popupRegisterLocation.value = '';
				registerForm.popupRegisterAge.value = '';
				registerForm.popupRegisterAgreement.value = '';

			} else {
				throw res
			}
		})
		.catch(err => {
			console.error(err.errors)
		})
}

registerForm.addEventListener('submit', register)

//Form-register
/* function isEmail(email) {
	return email.match(/^[0-9a-z-\.]+\@[0-9a-z-]{2,}\.[a-z]{2,}$/i);
}

function setError(input, errorMessage) {
	const error = errorCreator(errorMessage)
	const customInput = input[0] ? input[0] : input;
	customInput.classList.add('is-invalide');
	customInput.insertAdjacentElement('afterend', error)
}

function errorCreator(message) {
	let messageError = document.createElement('div')
	messageError.classList.add('invalide-feedback')
	messageError.innerText = message;
	return messageError
}

(function () {
	const formReg = document.forms.popupRegister;

	formReg.addEventListener('submit', function (e) {
		e.preventDefault()

		const email = formReg.elements.popupRegisterEmail
		const name = formReg.elements.popupRegisterName
		const surname = formReg.elements.popupRegisterSurname
		const password = formReg.elements.popupRegisterPassword
		const repeat = formReg.elements.popupRegisterRepeat
		const location = formReg.elements.popupRegisterLocation
		const age = formReg.elements.popupRegisterAge
		const agreement = formReg.elements.popupRegisterAgreement

		let error = {};

		if (!agreement.checked) {
			error.agreement = 'Пожалуйста подтвердите соглашение!';
		}
		if (!isEmail(email.value)) {
			error.email = 'Please enter a valid email address (your entry is not in the format "somebody@example.com")';
		}
		if (password.value.length < 6) {
			error.password = 'Пароль слишком короткий!';
		}
		if (password.value != repeat.value) {
			error.repeat = 'Введенные пароли не совпадают';
		}
		if (name.value.length < 1) {
			error.name = 'This field is required';
		}
		if (name.value.length > 2) {
			error.name = 'All Right';
		}

		if (Object.keys(error).length) {
			console.log(error)
			Object.keys(error).forEach(key => {
				const messageError = error[key]
				const input = formReg.elements[key]
				console.log(input, key)
				setError(input, messageError);
			})
			return
		}

		const data = {
			email: email.value,
			name: name.value,
			surname: surname.value,
			password: password.value,
			repeat: repeat.value,
			location: location.value,
			age: age.value,
			agreement: agreement.value,
		}
		console.log(data)
	})
})();

 */

popupLinkReg.addEventListener('click', function () {
	popupReg.classList.add('popup_open');
	inputReg.focus();
})

closepopupReg.addEventListener('click', function () {
	popupReg.classList.remove('popup_open');
	popupLinkReg.focus();
	document.body.style.overflow = 'visible'
	registerForm.popupRegisterEmail.value = '';
	registerForm.popupRegisterName.value = '';
	registerForm.popupRegisterSurname.value = '';
	registerForm.popupRegisterPassword.value = '';
	registerForm.popupRegisterRepeat.value = '';
	registerForm.popupRegisterLocation.value = '';
	registerForm.popupRegisterAge.value = '';
	registerForm.popupRegisterAgreement.value = '';
})

window.addEventListener('keydown', function (event) {
	if (event.code === "Escape" && popupReg.classList.contains('popup_open')) {
		popupReg.classList.remove('popup_open');
		popupLinkReg.focus();
	}
	document.body.style.overflow = 'visible'
})

