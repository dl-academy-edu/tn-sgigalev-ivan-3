//scroll


let buttonToTop = document.querySelector('.scroll__button');

window.addEventListener('scroll', trackScroll);

buttonToTop.addEventListener('click', backToTop);

function trackScroll() {
	var scrolled = window.pageYOffset;
	var coords = document.documentElement.clientHeight;

	if (scrolled > coords) {
		buttonToTop.classList.add('scroll__button_open');
	}
	if (scrolled < coords) {
		buttonToTop.classList.remove('scroll__button_open');
	}
}

function backToTop() {
	if (window.pageYOffset > 0) {
		window.scrollBy(0, -80);
		setTimeout(backToTop, 15);
	}
}