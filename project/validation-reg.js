
//Validation Form

/* const form = document.forms[0];

form.addEventListener("submit", (event) => {
	event.preventDefault();

	const input = form.querySelectorAll('input');

	const dataForServer = {};

	for (input of inputs) {
		dataForServer[input.name] = input.value;
	}

	console.log(dataForServer);
});
 */



//Form-register

const form = document.forms[1];

form.addEventListener("submit", (event) => {
	event.preventDefault();

	const agreement = form.querySelector(`[name ="agreement"]`)
	const text = form.querySelector(`[type='text']`)
	const password = form.querySelector(`[type='password']`)
	const email = form.querySelector(`[type='email']`)
	const number = form.querySelector(`[type='number']`)
	const input = form.querySelectorAll('input');
	const name = form.querySelector('.popup__name');

	function isEmail(email) {
		return email.match(/^[0-9a-z-\.]+\@[0-9a-z-]{2,}\.[a-z]{2,}$/i);
	}

	function isPhone(phone) {
		return phone.match(/^[0-9a-z-\.]+\@[0-9a-z-]{2,}\.[a-z]{2,}$/i);
	}

	function setError(input, errorMessage) {
		const error = errorCreator(errorMessage);
		input.classList.add('is-invalid');
		input.insertAdjacentElement('afterend', error);
	}

	function errorCreator(message) {
		let messageError = document.createElement('div');
		messageError.classList.add('invalid-feedback');
		messageError.innerText = message;
		return messageError;
	}

	let error = {};

	if (!isEmail(email.value)) {
		error.email = 'Please enter a valid email address (your entry is not in the format "somebody@example.com")'
	}

	if (password.value.length < 6) {
		error.password = 'Пароль слишком короткий!'
	}

	if (name.value.length < 1) {
		error.name = 'This field is required'
	}

	if (Object.keys(error).length) {
		console.log(error);
		Object.keys(error).forEach(key => {
			const messageError = error[key];
			const input = form.elements[key];
			setError(input, messageError);
		})
		console.log(errorCreator(error.email));
		return;
	}


	const dataForServer = {};
	for (input of input) {
		dataForServer[input.name] = input.checked
			? input.checked
			: input.value;
	}

	console.log(dataForServer);
});
