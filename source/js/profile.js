(function () {
	const profileImg = document.querySelector('.j-main__canvas-img')
	const profileName = document.querySelector('.j-main__text-name')
	const profileSurname = document.querySelector('.j-main__text-surname')
	const profileEmail = document.querySelector('.j-main__text-email')
	const profilePassword = document.querySelector('.j-main__text-password')
	const profileLocation = document.querySelector('.j-main__text-location')
	const profileAge = document.querySelector('.j-main__text-age')

	const buttonOpeningModalChangePassword = document.querySelector('.j-change-password')
	const modalChangePassword = document.querySelector('.popup-change-password')
	const buttonChangePassword = document.querySelector('.popup-change-password-button')
	const closeModalChangePassword = document.querySelector('.popup-btn-change')
	const modalChangePasswordForm = document.forms.popupChangePassword

	const buttonOpeningModalEditingData = document.querySelector('.j-change-data')
	const modalEditingData = document.querySelector('.popup-editing-data')
	const buttonEditingData = document.querySelector('.popup-editing-data-button')
	const closeModalEditingData = document.querySelector('.popup-btn-editing')
	const modalEditingDataForm = document.forms.popupEditingData

	const deleteAccount = document.querySelector('.j-delete-account')


	let profile = null;

	buttonOpeningModalChangePassword.addEventListener('click', function () {
		modalChangePassword.classList.add('popup_open');
		modalChangePasswordForm.focus();
	})

	closeModalChangePassword.addEventListener('click', function () {
		modalChangePassword.classList.remove('popup_open');
		modalChangePasswordForm.focus();
		document.body.style.overflow = 'visible'
	})

	window.addEventListener('keydown', function (event) {
		if (event.code === "Escape" && modalChangePassword.classList.contains('popup_open')) {
			modalChangePassword.classList.remove('popup_open');
			modalChangePasswordForm.focus();
		}
		document.body.style.overflow = 'visible'
	})

	buttonOpeningModalEditingData.addEventListener('click', function () {
		modalEditingData.classList.add('popup_open');
		modalEditingDataForm.popupEditingDataEmail.value = profile.email;
		modalEditingDataForm.popupEditingDataName.value = profile.name;
		modalEditingDataForm.popupEditingDataSurname.value = profile.surname;
		modalEditingDataForm.popupEditingDataLocation.value = profile.location;
		modalEditingDataForm.popupEditingDataAge.value = profile.age;
		modalEditingDataForm.focus();
	})

	closeModalEditingData.addEventListener('click', function () {
		modalEditingData.classList.remove('popup_open');
		modalEditingDataForm.focus();
		document.body.style.overflow = 'visible'
	})

	window.addEventListener('keydown', function (event) {
		if (event.code === "Escape" && modalEditingData.classList.contains('popup_open')) {
			modalEditingData.classList.remove('popup_open');
			modalEditingDataForm.focus();
		}
		document.body.style.overflow = 'visible'
	})

	getprofile()

	modalEditingDataForm.addEventListener('submit', function (e) {
		e.preventDefault()
		const data = new FormData(modalEditingDataForm);
		sendRequest({
			method: 'PUT',
			url: '/api/users',
			body: data,
			headers: {
				'x-access-token': localStorage.getItem('token'),
			}
		})
			.then(res => res.json())
			.then(res => {
				if (res.success) {
					console.log(res)
					profile = res.data;
					renderProfile()
					modalEditingData.classList.remove('popup_open');
				} else {
					throw res
				}
			})
			.catch(err => {
				alert(err._message)
			})
	})

	deleteAccount.addEventListener('click', function () {
		sendRequest({
			method: 'DELETE',
			url: `/api/users/${localStorage.getItem('userId')}`,
			headers: {
				'x-access-token': localStorage.getItem('token'),
			}
		})
			.then(res => res.json())
			.then(res => {
				if (res.success) {
					console.log(res)
					localStorage.remove('userId');
					location.pathname = '/'
				} else {
					throw res
				}
			})
			.catch(err => {
				alert(err._message)
			})
	})

	function renderProfile() {
		profileImg.innerHTML = `<picture class="main__canvas-image">
		<source srcset="${BASE_SERVER_PATH + profile.photoUrl}">
			<img src="../source/img/profile/canvas.png">
		</picture>`
		profileName.innerText = profile.name;
		profileSurname.innerText = profile.surname;
		profileEmail.innerText = profile.email;
		profileLocation.innerText = profile.location;
		profileAge.innerText = profile.age;
	}

	function getprofile() {

		sendRequest({
			method: "GET",
			url: `/api/users/${localStorage.getItem('userId')}`,
		})
			.then(res => res.json())
			.then(res => {
				if (res.success) {
					profile = res.data
					renderProfile()
				} else {
					location.pathname = '/'
				}
			})
	}
})()


