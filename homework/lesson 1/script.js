let isNumber = (value) => {
	if (value > 0) {
		return true;
	}
	if (value = '' || ' ') {
		console.log('Enter the valid number.');
		return false;
	}
}

const firstName = prompt('Как тебя зовут?');
const secondName = prompt('Какая твоя фамилия?');
const age = prompt('Сколько тебе лет?');

let ageWord;

if (isNumber(age)) {
	if (age % 10 === 0 || age % 10 > 4 && age % 10 <= 9) {
		ageWord = 'лет';
	} else if (age % 10 === 1) {
		ageWord = 'год';
	} else {
		ageWord = 'года';
	}

	console.log(`Твое имя ${firstName}, твоя фамилия ${secondName}, тебе ${age} ${ageWord}!`)
}


