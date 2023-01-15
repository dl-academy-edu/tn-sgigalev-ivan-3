//Info
const loginName = document.querySelector('.j-profile-name')
const loginSurname = document.querySelector('.j-profile-surname')
const loginEmail = document.querySelector('.j-profile-email')
const loginPassword = document.querySelector('.j-profile-password')
const loginLocation = document.querySelector('.j-profile-location')
const loginAge = document.querySelector('.j-profile-age')

const listOfPersonalData = document.querySelector('.content__personal')
const loginPhoto = document.querySelector('.j-main__canvas-img')

//Buttons
const changePasswordButton = document.querySelector('.j-change-password')
const changeDataButton = document.querySelector('.j-change-data')
const deleteUserButton = document.querySelector('.j-delete-account')

//PopUps
const popupChangePassword = document.querySelector('.popup-change-password')
const popupChangeData = document.querySelector('.popup-editing-data')

//Close-buttons
const closePopupChangeDataForm = document.querySelector('.popup-btn-edit-close')
const closePopupChangePasswordForm = document.querySelector('.popup-btn-change-pas-close')

//Forms
const changePasswordForm = document.forms.popupChangePassword
const changeOtherDataForm = document.forms.popupEditingData

//ChagnePasswordInputs
const inputChangeOldPassword = changePasswordForm.popupChangeOldPassword
const inputAddNewPassword = changePasswordForm.popupNewPassword
const inputRepeateNewPassword = changePasswordForm.popupRepeateNewPassword


togglePopup(popupChangePassword, changePasswordButton, closePopupChangePasswordForm)
togglePopup(popupChangeData, changeDataButton, closePopupChangeDataForm)

const getUserData = () => {
   const sendRequestToRegister = (url) => {
      const currentUrl = `${API}${url}`
      fetch(currentUrl, {
         method: "GET",
      })
         .then(res => {
            if (res.status == 200) {
               return res.json()
                  .then(({ data }) => {
                     setDataToProfile(data)
                  })
            } else {
               throw new Error('No such a user')
            }
         })
         .catch(err => console.log(err))
   }
   sendRequestToRegister(`/api/users/${userId}`)
}
getUserData()

const addNameToFileInput = () => {
   let nameOfImage = document.querySelector('.popup__item-file')
   const inputAddFileToAvatar = changeOtherDataForm.avatar

   inputAddFileToAvatar.addEventListener('input', () => {
      if (inputAddFileToAvatar.files.length !== 0) {
         console.log(inputAddFileToAvatar.files)
         nameOfImage.textContent = inputAddFileToAvatar.files[0].name
      } else {
         return false
      }
   })
}
addNameToFileInput()

const setDataToProfile = (dataFromServer) => {
   loginName.textContent = dataFromServer.name
   loginSurname.textContent = dataFromServer.surname
   loginEmail.textContent = dataFromServer.email
   loginPassword.textContent = dataFromServer.password
   loginLocation.textContent = dataFromServer.location
   loginAge.textContent = dataFromServer.age
   loginPhoto.style.backgroundImage = `url(${API}${dataFromServer.photoUrl})`
}

//Dunno why oldPassword shows me only stars. Need help to fix it out.

const changePassword = () => {
   inputChangeOldPassword.value = loginPassword.textContent
   changePasswordForm.addEventListener('submit', (e) => {
      e.preventDefault()
      const passwordsData = {}
      passwordsData.oldPassword = inputChangeOldPassword.value.trim()
      passwordsData.newPassword = inputAddNewPassword.value
      const sendRequestToRegister = (url) => {
         const currentUrl = `${API}${url}`
         fetch(currentUrl, {
            method: "PUT",
            headers: {
               'Content-Type': 'application/json',
               'x-access-token': token
            },
            body: JSON.stringify(passwordsData)
         })
            .then(res => {
               if (res.status == 200) {
                  getResponseForm('ok')
                  return res.json()
                     .then((data) => {
                        console.log(data)
                        popupChangePassword.style.display = 'none'
                     })
               } else {
                  throw new Error(getResponseForm('!ok'))
               }
            })
            .catch(err => console.log(err))
      }
      sendRequestToRegister('/api/users')
   })
}
changePassword()

//Change other Data --------------------------------

const changeOtherData = () => {
   changeOtherDataForm.addEventListener('submit', (e) => {
      e.preventDefault()
      const otherData = {}

      const formDataFromChangeUserData = new FormData(changeOtherDataForm)
      for ([key, value] of formDataFromChangeUserData) {
         otherData[key] = value
      }

      const sendRequestToRegister = (url) => {
         const currentUrl = `${API}${url}`
         fetch(currentUrl, {
            method: "PUT",
            headers: {
               'Content-Type': 'multipart/form-data; boundary=something',
               'x-access-token': token
            },
            body: formDataFromChangeUserData
         })
            .then(res => {
               if (res.status == 200) {
                  getResponseForm('ok')
                  return res.json()
                     .then((data) => {
                        console.log(data)
                        setDataToProfile(data)
                        popupChangeData.style.display = 'none'
                     })
               } else {
                  getResponseForm('!ok')
                  throw new Error('Error')
               }
            })
            .catch(err => console.log(err))
      }
      sendRequestToRegister('/api/users')
   })
}
changeOtherData()

//Delete account --------------------------------

const deleteAccount = () => {
   deleteUserButton.addEventListener('click', (e) => {
      e.preventDefault()
      const sendRequestToRegister = (url) => {
         const currentUrl = `${API}${url}`
         fetch(currentUrl, {
            method: "DELETE",
            headers: {
               'Content-Type': 'multipart/form-data; boundary=something',
               'x-access-token': token
            },
         })
            .then(res => {
               if (res.status == 200) {
                  return res.json()
                     .then((data) => {
                        console.log(data)
                        localStorage.removeItem('token')
                        localStorage.removeItem('userId')
                        location.href = 'index.html'
                        getResponseForm('ok')
                     })
               } else {
                  getResponseForm('!ok')
                  throw new Error('Error')
               }
            })
            .catch(err => console.log(err))
      }
      sendRequestToRegister(`/api/users/${userId}`)
   })
}
deleteAccount()