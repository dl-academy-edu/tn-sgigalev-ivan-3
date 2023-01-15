const wrapper = document.querySelector(".content__slider-wrapper");
const innerWrapper = document.querySelector(".content__slider-inner-wrapper");
const pagination = document.querySelector(".content__slider-pagination");
const buttonBack = document.querySelector(".content__slider-button-back");
const buttonNext = document.querySelector(".content__slider-button-next");
const slides = document.querySelectorAll(".content__slider-slide");

let shearWidth = +getComputedStyle(wrapper).width.split("px")[0];
let numberSlides = innerWrapper.childElementCount - 1;

let activeSlide = 0;
let timerID;

const timerLogic = () => {
	if (timerID) clearTimeout(timerID);
	timerID = setTimeout(() => {
		innerWrapper.style.transition = "";
	}, 500);
};
const addWidthSlides = () => {
	for (slide of slides) {
		slide.style.width = `${shearWidth}px`;
	}
};
const changeActivePoint = (index) => {
	const activePoint = document.querySelector(".slider__dot_active");
	activePoint.classList.remove("slider__dot_active");
	pagination.children[index].classList.add("slider__dot_active");

	index === 0
		? buttonBack.setAttribute("disabled", "disabled")
		: buttonBack.removeAttribute("disabled");

	index === numberSlides
		? buttonNext.setAttribute("disabled", "disabled")
		: buttonNext.removeAttribute("disabled");
};

const changeActiveSlide = (whereTo) => {
	const indentML = +innerWrapper.style.marginLeft.split("px")[0];
	innerWrapper.style.transition = "margin-left .5s";
	switch (whereTo) {
		case "next":
			if (activeSlide < numberSlides) {
				innerWrapper.style.marginLeft = `${indentML - shearWidth}px`;
				activeSlide = activeSlide + 1;
				buttonBack.removeAttribute("disabled");
				localStorage.setItem('activeSlide', activeSlide)
			}
			if (activeSlide === numberSlides) {
				buttonNext.setAttribute("disabled", "disabled");
				localStorage.setItem('activeSlide', activeSlide)
			}
			break;
		case "back":
			if (activeSlide !== 0) {
				innerWrapper.style.marginLeft = `${indentML + shearWidth}px`;
				activeSlide = activeSlide - 1;
				buttonNext.removeAttribute("disabled");
				localStorage.setItem('activeSlide', activeSlide)
			}
			if (activeSlide === 0) {
				buttonBack.setAttribute("disabled", "disabled");
				localStorage.setItem('activeSlide', activeSlide)
			}
			break;
	}

	changeActivePoint(activeSlide);
	timerLogic();
};

const renderCorrectSlide = (activeSlide) => {
	innerWrapper.style.marginLeft = `${-(activeSlide * shearWidth)}px`;
}

buttonBack.setAttribute("disabled", "disabled");
addWidthSlides();
for (i = 0; i < innerWrapper.children.length; i++) {
	let newElem = document.createElement("button");
	i === activeSlide
		? newElem.classList.add("slider__dot", "slider__dot_active")
		: newElem.classList.add("slider__dot");
	const activeIndex = i;
	newElem.addEventListener("click", () => {
		innerWrapper.style.transition = "margin-left .5s";
		innerWrapper.style.marginLeft = `-${activeIndex * shearWidth}px`;
		activeSlide = activeIndex;
		changeActivePoint(activeIndex);
		timerLogic();
	});
	pagination.append(newElem);
}

window.addEventListener('DOMContentLoaded', () => {
	+ localStorage.getItem('activeSlide')
		? activeSlide = +localStorage.getItem('activeSlide')
		: activeSlide = 0
	renderCorrectSlide(activeSlide)
	changeActivePoint(activeSlide);
})

buttonBack.addEventListener("click", () => changeActiveSlide("back"));
buttonNext.addEventListener("click", () => changeActiveSlide("next"));
window.addEventListener("resize", () => {
	shearWidth = +getComputedStyle(wrapper).width.split("px")[0];
	addWidthSlides();
	if (activeSlide > 0) {
		innerWrapper.style.marginLeft = `-${activeSlide * shearWidth}px`;
	}
});

