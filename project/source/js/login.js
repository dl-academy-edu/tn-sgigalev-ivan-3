
//Popup-sign
const popupLinkSign = document.querySelector('.header__link-sign');
const popupSign = document.querySelector('.popup-sign');
const closePopup = document.querySelector('.popup-sign__btn');
const signForm = document.forms.popupLogin;

rerenderLinks()

popupLinkSign.addEventListener('click', function () {
	popupSign.classList.add('popup-sign_open');
	signForm.focus();
})

closePopup.addEventListener('click', function () {
	popupSign.classList.remove('popup-sign_open');
	popupLinkSign.focus();
	document.body.style.overflow = 'visible'
})


window.addEventListener('keydown', function (event) {
	if (event.code === "Escape" && popupSign.classList.contains('popup-sign_open')) {
		popupSign.classList.remove('popup-sign_open');
		popupLinkSign.focus();
	}
	document.body.style.overflow = 'visible'
})

function login(e) {
	e.preventDefault()
	let data = {};
	data.email = signForm.popupLoginEmail.value;
	data.password = signForm.popupLoginPassword.value;
	sendRequest({
		method: 'POST',
		url: '/api/users/login',
		body: JSON.stringify(data),
		headers: {
			'Content-Type': 'application/json'
		}
	})
		.then(res => res.json())
		.then(res => {
			if (res.success) {
				console.log('Вы успешно вошли')
				console.log(res)
				localStorage.setItem('token', res.data.token)
				localStorage.setItem('userId', res.data.userId)
				rerenderLinks()
				popupSign.classList.remove('popup-sign_open');
				setTimeout(() => {
					location.pathname = '../../profile.html'
				}, 1000)
			} else {
				throw res
			}
		})
		.catch(err => {
			if (err._message) {
				alert(err._message)
			}
			console.error(err);
		});
}

signForm.addEventListener('submit', login)

