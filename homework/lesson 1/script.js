
/* Написать свой первый JS код, который будет открывать 
окна для ввода имени, фамилии и возраста (итого 3 
окна), после ввода этой информации необходимо 
создать объект пользователя и вывести его в консоль.
*/


let getFirstName = prompt('Как тебя зовут?');
let getSecondName = prompt('Какая твоя фамилия?');
let getAge = prompt('Сколько тебе лет?');

if (getAge % 10 === 0 && getAge % 10 > 4 && getAge % 10 <= 9) {
	console.log(`Твое имя ${getFirstName}, твоя фамилия ${getSecondName}, тебе ${getAge} лет!`)
} else if (getAge % 10 === 1) {
	console.log(`Твое имя ${getFirstName}, твоя фамилия ${getSecondName}, тебе ${getAge} год!`)
} else {
	console.log(`Твое имя ${getFirstName}, твоя фамилия ${getSecondName}, тебе ${getAge} года!`)
}
