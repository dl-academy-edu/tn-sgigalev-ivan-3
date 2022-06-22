let popupBg = document.querySelector('.popup__sign'); // Фон попап окна
let popup = document.querySelector('.popup'); // Само окно
let openPopupButtons = document.querySelectorAll('.open__popup_sign'); // Кнопки для показа окна
let closePopupButton = document.querySelector('.popup__close');

openPopupButtons.forEach((button) => { // Перебираем все кнопки
	button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
		e.preventDefault(); // Предотвращаем дефолтное поведение браузера
		popupBg.classList.add('_active'); // Добавляем класс 'active' для фона
		popup.classList.add('_active'); // И для самого окна
	})
});

closePopupButton.addEventListener('click', () => { // Вешаем обработчик на крестик
	popupBg.classList.remove('_active'); // Убираем активный класс с фона
	popup.classList.remove('_active'); // И с окна
});

document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
	if (e.target === popupBg) { // Если цель клика - фот, то:
		popupBg.classList.remove('_active'); // Убираем активный класс с фона
		popup.classList.remove('_active'); // И с окна
	}
});