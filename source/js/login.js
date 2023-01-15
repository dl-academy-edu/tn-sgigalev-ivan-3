
//Popup-sign
const popupLinkSign = document.querySelector('.header__link-sign');
const popupSign = document.querySelector('.popup-sign');
const closePopupSign = document.querySelector('.popup-btn-sign');
const signForm = document.forms.popupLogin;

const loginPageLink = document.querySelector('.header__link-profile')
const popupLinkRegister = document.querySelector('.header__link-register');


togglePopup(popupSign, popupLinkSign, closePopupSign)


//Login

const loginUser = () => {
	signForm.addEventListener('submit', (e) => {
		e.preventDefault()
		const signFormData = new FormData(signForm)
		let data = {}
		let signrErrors = {}
		checkInputs(signFormData, data, signrErrors, signForm)

		if (((!data[signFormData[0]] == '') || (!data[signFormData[1]] == ''))) {
			console.log('error', data)
			false
		} else {
			console.log(data)
			const sendRequestToLogin = (url) => {
				const currentUrl = `${API}${url}`
				fetch(currentUrl, {
					method: "POST",
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(data)
				})
					.then(res => {
						if (res.status == 200) {
							return res.json()
								.then(({ data: { token, userId } }) => {
									console.log(res)
									localStorage.setItem('token', token)
									localStorage.setItem('userId', userId)
									location.href = 'profile.html'
									getResponseForm('ok')
								})
						} else {
							getResponseForm('!ok')
							return res.json()
								.then(error => console.log(error.errors))
						}
					})
			}
			sendRequestToLogin('/api/users/login')
		}
	})
}

if (token) {
	popupLinkSign.classList.toggle('hidden')
	popupLinkRegister.classList.toggle('hidden')
	loginPageLink.classList.toggle('hidden')
}

loginUser()