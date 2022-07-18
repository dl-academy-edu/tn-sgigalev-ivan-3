const formMes = document.forms[2];


formMes.addEventListener("submit", (event) => {
	event.preventDefault();

	const button = formMes.querySelector(`button`)
	const text = formMes.querySelector(`[type='text']`)
	const email = formMes.querySelector(`[type='email']`)
	const number = formMes.querySelector(`[type='number']`)
	const input = formMes.querySelectorAll('input');
	const name = formMes.querySelector('.popup__name');

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
		error.email = 'Please enter a valid email address (your entry is not in the formMesat "somebody@example.com")'
	}

	if (name.value.length < 1) {
		error.name = 'This field is required'
	}

	if (Object.keys(error).length) {
		console.log(error);
		Object.keys(error).forEach(key => {
			const messageError = error[key];
			const input = formMes.elements[key];
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
