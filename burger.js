
//burger menu

var burger = document.querySelector('.header__mobile');
var burgerButton = document.querySelector('.burger__button');
var closeBurger = document.querySelector('.burger__close');

burgerButton.addEventListener('click', function () {
	burger.classList.add('header__mobile_open');
})

closeBurger.addEventListener('click', function () {
	burger.classList.remove('header__mobile_open');
	document.body.style.overflow = 'visible'
})

window.addEventListener('keydown', function (event) {
	if (event.code === "Escape" && burger.classList.contains('header__mobile_open')) {
		burger.classList.remove('header__mobile_open');
	}
	document.body.style.overflow = 'visible'
})
