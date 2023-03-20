//Popup-register

const popupLinkReg = document.querySelector('.header__link-register');
const popupReg = document.querySelector('.popup-register');
const closepopupReg = document.querySelector('.popup-btn-reg-close');
const registerForm = document.forms.popupRegister;

togglePopup(popupReg, popupLinkReg, closepopupReg)

//Don't know how to do this func once. 


const registerUser = () => {
	const agreement = registerForm.popupRegisterAgreement
	agreement.addEventListener('click', () => {
		const buttonReg = document.querySelector('.popup-button-reg')
		buttonReg.toggleAttribute('disabled')
	})
	registerForm.addEventListener('submit', (e) => {
		e.preventDefault()
		const registerFormData = new FormData(registerForm)
		if (agreement == null) {
			return false
		} else {
			let registerErrors = {}
			let data = {}

			checkInputs(registerFormData, data, registerErrors, registerForm)

			//Don't know how to set errors from server to inputs. Can't get them

			const sendRequestToRegister = (url) => {
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
								.then(data => {
									getResponseForm('ok')
									console.log(data)
									location.href = 'index.html'
								})
						} else {
							return res.json()
								.then(({ errors }) => {
									console.log(errors)
									for (const [key, value] of Object.entries(errors)) {
										console.log(key)
										console.log(value)
									}
								})
						}
					})
					.catch(err => console.log(err))
			}
			sendRequestToRegister('/api/users')
		}
	})
}

registerUser()





